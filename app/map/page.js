import WorldMap from "@/components/WorldMap";

export default function MapPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 pb-32 pt-20 md:px-10 md:pt-28">
      <header className="mb-12 flex flex-col items-center text-center md:mb-16">
        <h1 className="font-serif italic text-5xl text-ink md:text-7xl">
          Places
        </h1>
        <p className="mt-4 font-mono text-xs uppercase tracking-[0.3em] text-muted">
          15 countries · 4 continents
        </p>
      </header>

      <div className="w-full">
        <WorldMap />
      </div>

      <p className="mx-auto mt-12 max-w-xl text-center font-serif italic text-base text-muted md:mt-16 md:text-lg">
        Each country contains a story. Some are still being developed.
      </p>
    </section>
  );
}
