import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

interface DiaryPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  const diariesPath = path.join(process.cwd(), 'src/content/diaries');
  if (!fs.existsSync(diariesPath)) return [];
  
  const files = fs.readdirSync(diariesPath);
  return files
    .filter(file => file.endsWith('.md'))
    .map(file => ({ slug: file.replace(/\.md$/, '') }));
}

// 简单的 Markdown 转 HTML
function parseMarkdown(content: string): string {
  let html = content;
  
  // 转义 HTML
  html = html.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  
  // 标题
  html = html.replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold text-white mt-8 mb-4">$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold text-white mt-10 mb-5 flex items-center gap-3"><span class="text-purple-400">🍳</span> $1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold text-white mt-12 mb-6">$1</h1>');
  
  // 加粗
  html = html.replace(/\*\*(.*?)\*\*/gim, '<strong class="text-purple-400 font-semibold">$1</strong>');
  
  // 引用
  html = html.replace(/^> (.*$)/gim, '<blockquote class="border-l-4 border-purple-500/50 bg-purple-500/10 py-3 px-4 my-4 rounded-r-lg text-gray-300 italic">$1</blockquote>');
  
  // 删除线
  html = html.replace(/~~(.*?)~~/gim, '<del class="text-gray-500">$1</del>');
  
  // 链接
  html = html.replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2" class="text-purple-400 hover:text-purple-300 underline">$1</a>');
  
  // 图片
  html = html.replace(/!\[(.*?)\]\((.*?)\)/gim, '<img src="$2" alt="$1" class="w-full max-w-md mx-auto rounded-2xl shadow-2xl my-6" />');
  
  // 段落
  html = html.replace(/\n\n/g, '</p><p class="text-gray-300 leading-relaxed my-4">');
  
  // 水平线
  html = html.replace(/^---$/gim, '<hr class="border-white/10 my-8" />');
  
  // 列表
  html = html.replace(/^- (.*$)/gim, '<li class="text-gray-300 ml-4 list-disc">$1</li>');
  
  return html;
}

export default async function DiaryPage({ params }: DiaryPageProps) {
  const { slug } = await params;
  const diaryPath = path.join(process.cwd(), 'src/content/diaries', `${slug}.md`);
  
  if (!fs.existsSync(diaryPath)) {
    notFound();
  }
  
  const content = fs.readFileSync(diaryPath, 'utf-8');
  const htmlContent = parseMarkdown(content);
  
  // 解析日期
  const date = new Date(slug);
  const formattedDate = date.toLocaleDateString('zh-CN', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    weekday: 'long'
  });

  return (
    <div className="min-h-screen relative bg-[#050508]">
      {/* 背景装饰 */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[80%] h-[80%] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-purple-600/20 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* 导航 */}
        <nav className="flex items-center justify-between mb-8">
          <Link 
            href="/diary" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            返回日记列表
          </Link>
          <Link 
            href="/" 
            className="text-gray-400 hover:text-white transition-colors"
          >
            👋 首页
          </Link>
        </nav>

        {/* 日记内容 */}
        <article className="max-w-3xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
            {/* 日期头部 */}
            <header className="mb-8 pb-8 border-b border-white/10">
              <time className="text-purple-400 font-mono text-sm">{formattedDate}</time>
            </header>

            {/* 正文 */}
            <div 
              className="text-gray-300 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />

            {/* 底部签名 */}
            <footer className="mt-12 pt-8 border-t border-white/10 text-center">
              <div className="text-3xl mb-2">🍳</div>
              <p className="text-gray-500 text-sm">小豆腐 · {slug}</p>
            </footer>
          </div>
        </article>
      </div>
    </div>
  );
}
