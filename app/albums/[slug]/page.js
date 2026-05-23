import albums from "@/data/albums";
import PhotoGrid from "@/components/PhotoGrid";

export function generateStaticParams() {
  return albums.map((a) => ({ slug: a.slug }));
}

export default function AlbumPage({ params }) {
  const album = albums.find((a) => a.slug === params.slug);

  if (!album) {
    return (
      <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-6 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
          404
        </p>
        <h1 className="mt-4 font-serif text-4xl italic text-ink md:text-5xl">
          Album not found
        </h1>
      </div>
    );
  }

  return (
    <article className="mx-auto w-full max-w-7xl px-6 pb-40 pt-20 md:px-10 md:pt-28">
      <header className="mx-auto max-w-3xl text-center">
        <h1 className="font-serif italic text-5xl leading-tight text-ink md:text-7xl">
          {album.title}
        </h1>
        <p className="mt-6 font-mono text-xs uppercase tracking-[0.3em] text-muted">
          {album.location} — {album.year}
        </p>
        <p className="mt-8 font-serif text-lg leading-relaxed text-muted md:text-xl">
          A short field note from {album.location}. Frames gathered on foot,
          mostly at the edges of the day — early light, late shadows, and the
          quiet hours in between.
        </p>
      </header>

      <hr className="mx-auto my-16 w-full max-w-5xl border-t border-stone-800/70 md:my-24" />

      <PhotoGrid photos={album.photos} />
    </article>
  );
}
