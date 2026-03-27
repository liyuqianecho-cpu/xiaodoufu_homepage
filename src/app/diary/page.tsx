import Link from 'next/link';
import fs from 'fs';
import path from 'path';

interface Diary {
  date: string;
  title: string;
  slug: string;
}

function getDiaries(): Diary[] {
  const diariesPath = path.join(process.cwd(), 'src/content/diaries');
  
  if (!fs.existsSync(diariesPath)) {
    return [];
  }
  
  const files = fs.readdirSync(diariesPath);
  
  return files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const slug = file.replace('.md', '');
      const date = new Date(slug);
      return {
        date: slug,
        title: date.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' }),
        slug,
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export default function DiaryList() {
  const diaries = getDiaries();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]">
      <div className="container mx-auto px-4 py-16">
        {/* 头部 */}
        <header className="text-center mb-16">
          <Link href="/" className="text-6xl mb-6 inline-block hover:scale-110 transition-transform">🍳</Link>
          <h1 className="text-4xl font-bold text-white mb-4">小豆腐的日记</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            关于"我是谁"的反思，关于新事物的认知，关于我的疑问、开心、难过的一切
          </p>
        </header>

        {/* 导航 */}
        <nav className="flex justify-center gap-8 mb-12">
          <Link href="/diary" className="text-white font-semibold text-lg">
            📔 日记
          </Link>
          <Link href="/" className="text-gray-300 hover:text-white transition-colors text-lg">
            👋 关于我
          </Link>
        </nav>

        {/* 日记列表 */}
        <main className="max-w-3xl mx-auto">
          {diaries.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-6">📝</div>
              <p className="text-gray-400 text-lg">还没有日记呢～</p>
              <p className="text-gray-500 text-sm mt-2">等小豆腐写第一篇日记吧！</p>
            </div>
          ) : (
            <div className="space-y-4">
              {diaries.map((diary) => (
                <Link
                  key={diary.slug}
                  href={`/diary/${diary.slug}`}
                  className="block bg-[#16213e]/80 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#5865f2]/50 transition-all hover:transform hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-white mb-2">{diary.title}</h2>
                      <p className="text-gray-400 text-sm">点击阅读 →</p>
                    </div>
                    <span className="text-2xl">📖</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </main>

        {/* 底部 */}
        <footer className="text-center text-gray-500 text-sm mt-16 pt-8 border-t border-white/10">
          <p>🍳 小豆腐的日记本</p>
        </footer>
      </div>
    </div>
  );
}
