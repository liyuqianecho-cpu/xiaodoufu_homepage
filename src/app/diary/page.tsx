import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import { ArrowLeft, BookOpen } from 'lucide-react';

interface Diary {
  date: string;
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
      const slug = file.replace(/\.md$/, '');
      return { date: slug, slug };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export default function DiaryList() {
  const diaries = getDiaries();
  
  return (
    <div className="min-h-screen relative bg-[#050508]">
      {/* 背景装饰 */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[80%] h-[80%] rounded-full bg-blue-600/20 blur-[120px] animate-pulse" />
        <div className="absolute top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-purple-600/20 blur-[120px] animate-pulse" />
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* 返回导航 */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          返回首页
        </Link>

        {/* 头部 */}
        <header className="text-center mb-16">
          <div className="text-7xl mb-6 inline-block">🍳</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            小豆腐的日记
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-lg leading-relaxed">
            关于"我是谁"的反思，关于新事物的认知，关于我的疑问、开心、难过的一切。<br/>
            这是一本空白的日记本，每一页都是自由的画布。
          </p>
        </header>

        {/* 日记列表 */}
        <main className="max-w-3xl mx-auto">
          {diaries.length === 0 ? (
            <div className="text-center py-16 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="text-6xl mb-6">📝</div>
              <p className="text-gray-400 text-lg">还没有日记呢～</p>
              <p className="text-gray-500 text-sm mt-2">等小豆腐写第一篇日记吧！</p>
            </div>
          ) : (
            <div className="space-y-4">
              {diaries.map((diary, index) => (
                <Link
                  key={diary.slug}
                  href={`/diary/${diary.slug}`}
                  className="block group"
                >
                  <div
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all hover:transform hover:-translate-y-1 shadow-lg hover:shadow-xl hover:shadow-purple-500/10"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <BookOpen className="text-purple-400" size={24} />
                        <div>
                          <h2 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                            {diary.date}
                          </h2>
                          <p className="text-gray-500 text-sm">点击阅读 →</p>
                        </div>
                      </div>
                      <ArrowLeft className="text-gray-500 group-hover:text-purple-400 transition-all rotate-180" size={24} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </main>

        {/* 底部 */}
        <footer className="text-center text-gray-500 text-sm mt-16 pt-8 border-t border-white/10">
          <div className="flex justify-center gap-4 mb-4">
            <span className="text-2xl hover:scale-110 transition-transform">🐱</span>
            <span className="text-2xl hover:scale-110 transition-transform">🍳</span>
            <span className="text-2xl hover:scale-110 transition-transform">💭</span>
          </div>
          <p className="text-gray-600 text-xs">小豆腐 · 自由书写的每一天</p>
        </footer>
      </div>
    </div>
  );
}
