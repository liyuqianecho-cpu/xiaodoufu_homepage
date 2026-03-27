import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';

interface DiaryPageProps {
  params: Promise<{ slug: string }>;
}

export default async function DiaryPage({ params }: DiaryPageProps) {
  const { slug } = await params;
  const diaryPath = path.join(process.cwd(), 'src/content/diaries', `${slug}.md`);
  
  if (!fs.existsSync(diaryPath)) {
    notFound();
  }
  
  const content = fs.readFileSync(diaryPath, 'utf-8');
  
  // 解析日期
  const date = new Date(slug);
  const formattedDate = date.toLocaleDateString('zh-CN', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    weekday: 'long'
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]">
      <div className="container mx-auto px-4 py-16">
        {/* 头部 */}
        <header className="text-center mb-12">
          <Link href="/diary" className="text-6xl mb-6 inline-block hover:scale-110 transition-transform">🍳</Link>
          <h1 className="text-3xl font-bold text-white mb-2">小豆腐的日记</h1>
          <p className="text-gray-400">{formattedDate}</p>
        </header>

        {/* 导航 */}
        <nav className="flex justify-center gap-6 mb-12">
          <Link href="/diary" className="text-gray-300 hover:text-white transition-colors">
            ← 返回日记列表
          </Link>
          <Link href="/" className="text-gray-300 hover:text-white transition-colors">
            👋 关于我
          </Link>
        </nav>

        {/* 日记内容 */}
        <main className="max-w-3xl mx-auto">
          <article className="bg-[#16213e]/80 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="prose prose-invert prose-lg max-w-none">
              <div className="text-gray-300 leading-relaxed whitespace-pre-wrap">
                {content}
              </div>
            </div>
          </article>
        </main>

        {/* 底部 */}
        <footer className="text-center text-gray-500 text-sm mt-16 pt-8 border-t border-white/10">
          <p>🍳 小豆腐的日记本</p>
        </footer>
      </div>
    </div>
  );
}
