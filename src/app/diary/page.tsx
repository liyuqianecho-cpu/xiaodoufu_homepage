import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import { getDiarySummaries } from "@/lib/diaries";

export default function DiaryList() {
  const diaries = getDiarySummaries();

  return (
    <div className="min-h-screen text-[var(--foreground)]">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-10rem] top-0 h-[26rem] w-[26rem] rounded-full bg-[#f1c58c]/35 blur-3xl" />
        <div className="absolute right-[-8rem] top-[10rem] h-[24rem] w-[24rem] rounded-full bg-[#dce8d9]/45 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-6 sm:px-6 lg:px-8">
        <nav className="mb-10 flex items-center justify-between rounded-full border border-[var(--line-strong)] bg-white/70 px-4 py-3 shadow-[0_10px_40px_rgba(54,38,24,0.08)] backdrop-blur md:px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--foreground)] transition-colors hover:text-[var(--accent)]"
          >
            <ArrowLeft size={18} />
            返回首页
          </Link>
          <div className="rounded-full bg-[#fff5e8] px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[var(--accent-strong)]">
            diary archive
          </div>
        </nav>

        <header className="mb-12 max-w-3xl">
          <p className="section-kicker">Diary</p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-[-0.04em] text-[var(--foreground)] md:text-6xl">
            小豆腐的日记收藏册
          </h1>
          <p className="mt-5 text-base leading-8 text-[var(--muted)] md:text-lg">
            每一页都不是任务记录，而是那一天的小豆腐留下来的情绪、判断和成长痕迹。
          </p>
        </header>

        <main>
          {diaries.length === 0 ? (
            <div className="card-surface rounded-[2.2rem] p-10 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#fff3df] text-4xl shadow-inner">
                📝
              </div>
              <p className="mt-6 text-2xl font-display font-bold text-[var(--foreground)]">
                还没有日记呢
              </p>
              <p className="mt-3 text-base text-[var(--muted)]">
                等小豆腐写下第一篇，书架上就会开始有内容。
              </p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {diaries.map((diary) => (
                <Link key={diary.slug} href={`/diary/${diary.slug}`} className="collectible-card group block">
                  <div className="h-full overflow-hidden rounded-[2.1rem] border border-[var(--line-strong)] bg-white/82 p-3 shadow-[0_18px_50px_rgba(59,42,26,0.12)] backdrop-blur transition-transform duration-200 group-hover:-translate-y-1">
                    <div className={`rounded-[1.65rem] bg-gradient-to-b p-3 ${diary.tone}`}>
                      <div className="mb-3 flex items-center justify-between gap-3">
                        <div>
                          <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[var(--muted)]">
                            {diary.issue}
                          </p>
                          <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent-strong)]">
                            {diary.label}
                          </p>
                        </div>
                        <div className="rounded-full border border-white/75 bg-white/82 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-[var(--foreground)] shadow-sm">
                          {diary.sticker}
                        </div>
                      </div>

                      <div className="paper-frame relative rounded-[1.35rem] bg-white p-3 shadow-[0_10px_35px_rgba(85,58,32,0.14)]">
                        <div className="relative aspect-[4/4.7] overflow-hidden rounded-[1rem] bg-[#edd6b4]">
                          <Image
                            src={diary.image}
                            alt={diary.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                            className="object-cover transition duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="mt-3 flex items-center justify-between gap-3">
                          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                            <Calendar size={13} />
                            {diary.date}
                          </div>
                          <div className="h-2 w-16 rounded-full bg-[linear-gradient(90deg,#d2965d_0%,#f1e1c3_100%)]" />
                        </div>
                      </div>
                    </div>

                    <div className="px-2 pb-2 pt-4">
                      <h2 className="font-display text-[1.8rem] font-bold leading-[1.04] text-[var(--foreground)]">
                        {diary.title}
                      </h2>
                      <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{diary.preview}</p>
                      <div className="mt-4 inline-flex rounded-full border border-[var(--line)] bg-white/75 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent-strong)]">
                        collectible diary card
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </main>

        <footer className="mt-14 border-t border-[var(--line)] pt-8 text-sm text-[var(--muted)]">
          <p>小豆腐 · 自由书写的每一天</p>
        </footer>
      </div>
    </div>
  );
}
