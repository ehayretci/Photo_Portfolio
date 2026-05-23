import Link from "next/link";
import albums from "@/data/albums";
import PhotoGrid from "@/components/PhotoGrid";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return albums.map((a) => ({ slug: a.slug }));
}

export default function AlbumPage({ params }) {
  const album = albums.find((a) => a.slug === params.slug);

  if (!album) {
    return (
      <div className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-6 text-center">
        <p className="ui-label text-muted">404</p>
        <h1 className="mt-4 font-title text-5xl uppercase tracking-[0.12em] text-ink md:text-6xl">
          Album not found
        </h1>
        <Link
          href="/"
          className="ui-label mt-8 text-ink transition-colors hover:text-accent"
        >
          ← Back to gallery
        </Link>
      </div>
    );
  }

  return (
    <>
      <article className="mx-auto w-full max-w-[1600px] px-6 pb-24 pt-28 md:px-12 md:pt-32">
        <Link
          href="/#photography"
          className="ui-label inline-block text-muted transition-colors hover:text-accent"
        >
          ← All albums
        </Link>

        <header className="mt-12 flex items-end justify-between border-b border-hairline pb-8">
          <div>
            <p className="ui-label text-muted">{album.location}</p>
            <h1 className="mt-3 font-title text-5xl uppercase tracking-[0.12em] text-ink md:text-7xl">
              {album.title}
            </h1>
          </div>
          <p className="ui-label text-muted">{album.year}</p>
        </header>

        <div className="mt-12">
          <PhotoGrid photos={album.photos} />
        </div>
      </article>
      <Footer />
    </>
  );
}
