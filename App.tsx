import { useState } from 'react';

type WorkItem = {
  id: string;
  previewId: string;
  orientation: 'vertical' | 'horizontal';
};

const telegramUrl = 'https://t.me/mingaxd';

const works: WorkItem[] = [
  {
    id: '1GVMnr3bw4DJYoNp4_wriATjglhkfxIO_',
    previewId: '1nKb6PB6SZAjiXgABWP47V39-k4ii37eK',
    orientation: 'vertical',
  },
  {
    id: '130YqGOcZFRMFF8eV6GSyfVfwQImk3Mn2',
    previewId: '18rN46EqVHRzACb8FaevlfzorVvOj3Ff0',
    orientation: 'vertical',
  },
  {
    id: '1p9UPj-OtWndN9wQ2VrOl8yYQNdFow-0h',
    previewId: '1LhecVTP5QTPfCVyT2-5FKzdpfszejYU8',
    orientation: 'horizontal',
  },
];

const drivePreviewUrl = (fileId: string) => `https://drive.google.com/file/d/${fileId}/preview`;
const driveThumbnailUrl = (fileId: string) => `https://drive.google.com/thumbnail?id=${fileId}&sz=w2000`;

const TelegramIcon = ({ className = 'h-4 w-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 240 240" aria-hidden="true">
    <circle cx="120" cy="120" r="120" fill="#37AEE2" />
    <path
      fill="#C8DAEA"
      d="M51.3 118.8c36.7-16 61.2-26.5 73.3-31.3 34.6-14.3 41.8-16.8 46.5-16.9 1 0 3.3.2 4.7 1.5 1.2 1.1 1.5 2.5 1.6 3.5.2 1 .3 3.3.1 5.1-2 20.7-10.5 71-14.8 94.2-1.8 9.8-5.2 13.1-8.6 13.4-7.4.7-13-4.9-20.2-9.6-11.3-7.4-17.6-12.1-28.6-19.3-12.8-8.4-4.5-13 2.8-20.5 1.9-2 35.2-32.2 35.9-35 .1-.4.1-1.8-.8-2.5s-2.1-.5-2.9-.3c-1.2.3-20.1 12.8-56.9 37.6-5.4 3.7-10.3 5.5-14.5 5.4-4.7-.1-13.7-2.7-20.4-4.8-8.2-2.6-14.8-4-14.2-8.5.3-2.3 3.5-4.7 9.5-7.1z"
    />
    <path
      fill="#A9C9DD"
      d="M100.8 161.2l-2.7 26c3.8 0 5.5-1.6 7.5-3.7l18-17.2z"
    />
    <path
      fill="#F6FBFE"
      d="M105.7 140.3l43.7 32.2c5 .8 8.6.4 9.9-4.6 3-11.7 10.9-73.8 12.3-84.2.2-1.7-.1-3.2-.3-3.6-.2-.4-.7-.9-1.4-1-1-.1-2.6.2-3.8.7-1.7.8-70.2 27.8-96.2 38.6-2.5 1.1-4.9 2.3-4.7 3.8.1 1.1 1.7 2.2 4 3 4.8 1.5 17.2 5.4 24.3 7.6 6.8 2.1 14.4.3 18.7-2.3 20.4-12.9 38.6-24.4 44.8-29.5 2.3-1.8 4.4-.8 2.6.8-3.8 3.4-48.4 43.6-50 45.2-2.2 2.2-4.4 4.3-3.9 7.7z"
    />
  </svg>
);

export default function App() {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#060606] text-white" style={{ scrollBehavior: 'smooth' }}>
      <header className="sticky top-0 z-30 border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#hero" className="text-xl font-bold tracking-tight text-white">
            Minga
          </a>

          <div className="flex items-center gap-3">
            <a
              href="#portfolio"
              className="rounded-full border border-violet-400/70 px-4 py-2 text-sm font-semibold text-violet-200 transition hover:border-violet-300 hover:text-white"
            >
              portfolio
            </a>
            <a
              href={telegramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/60"
            >
              <TelegramIcon className="h-4 w-4" />
              my contact
            </a>
          </div>
        </div>
      </header>

      <main>
        <section id="hero" className="hero-bg-glow grid-bg relative mx-auto w-full max-w-6xl px-4 pb-24 pt-24 sm:px-6 lg:px-8 lg:pt-32">
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            {/* Decorative badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-medium tracking-wide text-violet-300">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
              Video Editor
            </div>

            <h1 className="hero-gradient-text text-glow text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              I turn views
              <br />
              into clients
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              I make{' '}
              <span className="text-white font-medium">TikTok</span>,{' '}
              <span className="text-white font-medium">Reels</span>,{' '}
              <span className="text-white font-medium">Shorts</span>, and{' '}
              <span className="text-white font-medium">Horizontal Videos</span>
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#portfolio"
                className="btn-glow rounded-full bg-violet-500 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-violet-400"
              >
                portfolio
              </a>
              <a
                href={telegramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3.5 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/5"
              >
                <TelegramIcon className="h-4 w-4" />
                my contact
              </a>
            </div>
          </div>
        </section>

        <section id="portfolio" className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
          <h2 className="text-glow-subtle text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">My Works</h2>

          <div className="mt-10 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/15" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Vertical Videos</p>
            <div className="h-px flex-1 bg-white/15" />
          </div>

          <div className="mx-auto mt-6 grid w-full max-w-3xl grid-cols-1 justify-items-center gap-6 sm:grid-cols-2">
            {works
              .filter((work) => work.orientation === 'vertical')
              .map((work) => (
                <button
                  key={work.id}
                  type="button"
                  onClick={() => setActiveVideoId(work.id)}
                  className="group relative w-full max-w-[260px] overflow-hidden rounded-2xl border border-white/10 text-left transition hover:border-white/30"
                >
                  <div className="aspect-[9/16] w-full">
                    <img
                      src={driveThumbnailUrl(work.previewId)}
                      alt="Video preview"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/35 transition group-hover:bg-black/50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/40 bg-black/50 text-white transition group-hover:scale-105">
                      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </div>
                </button>
              ))}
          </div>

          <div className="mt-12 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/15" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Horizontal Video</p>
            <div className="h-px flex-1 bg-white/15" />
          </div>

          <div className="mx-auto mt-6 grid w-full max-w-3xl grid-cols-1 gap-6">
            {works
              .filter((work) => work.orientation === 'horizontal')
              .map((work) => (
                <button
                  key={work.id}
                  type="button"
                  onClick={() => setActiveVideoId(work.id)}
                  className="group relative mx-auto w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 text-left transition hover:border-white/30"
                >
                  <div className="aspect-video w-full">
                    <img
                      src={driveThumbnailUrl(work.previewId)}
                      alt="Video preview"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/35 transition group-hover:bg-black/50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/40 bg-black/50 text-white transition group-hover:scale-105">
                      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </div>
                </button>
              ))}
          </div>
        </section>

        <section id="contact" className="mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
          <h2 className="text-glow-subtle text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">my contact</h2>
          <a
            href={telegramUrl}
            target="_blank"
            rel="noreferrer"
            className="mx-auto mt-6 flex max-w-xs items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 text-lg font-semibold text-white transition hover:border-violet-500/30 hover:bg-violet-500/5 hover:text-violet-300"
          >
            <TelegramIcon className="h-6 w-6" />
            @mingaxd
          </a>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-sm text-zinc-400">Minga</p>
          <div className="flex items-center gap-6">
            <a href="#portfolio" className="text-sm text-zinc-400 transition hover:text-white">
              portfolio
            </a>
            <a href="#contact" className="text-sm text-zinc-400 transition hover:text-white">
              contact
            </a>
          </div>
        </div>
      </footer>

      {activeVideoId && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          onClick={() => setActiveVideoId(null)}
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-white/20 bg-black"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveVideoId(null)}
              className="absolute right-3 top-3 z-10 rounded-full bg-black/70 px-3 py-1 text-sm text-white"
            >
              Close
            </button>
            <div className="aspect-video w-full">
              <iframe
                src={drivePreviewUrl(activeVideoId)}
                className="h-full w-full"
                allow="autoplay"
                allowFullScreen
                title="Portfolio Video"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
