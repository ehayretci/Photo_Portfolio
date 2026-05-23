import AlbumGrid from "@/components/AlbumGrid";

export default function HomePage() {
  return (
    <div className="w-full">
      <section className="flex min-h-[70vh] w-full items-center justify-center px-6 py-32 md:py-40">
        <p className="max-w-3xl text-balance text-center font-serif italic text-3xl leading-snug text-ink md:text-5xl lg:text-6xl">
          &ldquo;Collecting light, one city at a time.&rdquo;
        </p>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-40 md:px-10">
        <header className="mb-16 flex items-baseline justify-between border-b border-stone-800/70 pb-6 md:mb-20">
          <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
            Selected Albums
          </h2>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-stone-500">
            2023 — 2024
          </span>
        </header>

        <AlbumGrid />
      </section>
    </div>
  );
}
