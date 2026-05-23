import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 pb-40 pt-20 md:px-10 md:pt-28">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
        <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-stone-900">
          <Image
            src="https://picsum.photos/seed/portrait/1200/1200"
            alt="Portrait"
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover [filter:sepia(0.35)_saturate(0.9)_contrast(1.02)]"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
            About
          </p>
          <h1 className="mt-4 font-serif italic text-5xl leading-tight text-ink md:text-6xl lg:text-7xl">
            Erim Hayretci
          </h1>

          <div className="mt-10 space-y-6 font-serif text-lg leading-relaxed text-muted md:text-xl">
            <p>
              I&rsquo;m a photographer drawn to the in-between hours — first
              light spilling onto wet pavement, neon bleeding into rain, the
              long shadows of late afternoon. Most of my work happens on foot,
              somewhere I&rsquo;ve never been.
            </p>
            <p>
              I shoot mostly on film, mostly on the move. The constraint of a
              limited frame count keeps me looking longer, walking further, and
              waiting for the moment instead of chasing it.
            </p>
            <p>
              When I&rsquo;m not behind a camera, I&rsquo;m usually planning the
              next trip, scanning negatives, or arguing with myself about which
              frames make the final edit.
            </p>
          </div>

          <p className="mt-10 font-mono text-xs uppercase tracking-[0.25em] text-muted">
            Film photography · Street · Travel · Portraiture
          </p>

          <a
            href="https://your-framer-site.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block font-mono text-sm uppercase tracking-[0.2em] text-accent hover:text-ink transition-colors"
          >
            See my professional work →
          </a>
        </div>
      </div>
    </section>
  );
}
