import Link from "next/link";
import albums from "@/data/albums";
import PhotoGrid from "@/components/PhotoGrid";
import Footer from "@/components/Footer";
import BackArrow from "@/components/BackArrow";

export function generateStaticParams() {
  return albums.map((a) => ({ slug: a.slug }));
}

export default function AlbumPage({ params }) {
  const album = albums.find((a) => a.slug === params.slug);

  if (!album) {
    return (
      <div className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-6 text-center">
        <p className="ui-label text-muted">404</p>
        <h1
          className="mt-4 font-title uppercase text-ink"
          style={{ fontSize: "56px", letterSpacing: "0.06em" }}
        >
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
      <article className="mx-auto w-full max-w-[1600px] px-6 pb-24 pt-12 md:px-12 md:pt-16">
        {/* Consistent round arrow back, same as travels modal */}
        <BackArrow href="/#photography" ariaLabel="Back to all albums" />

        <header className="mt-10 border-b border-hairline pb-10">
          <h1
            className="font-title uppercase text-ink"
            style={{
              fontSize: "72px",
              letterSpacing: "0.06em",
              lineHeight: 1,
            }}
          >
            {album.title}
          </h1>

          {album.quote && (
            <blockquote
              className="mt-8 max-w-3xl border-l-2 border-hairline pl-6 text-ink"
              style={{
                fontFamily:
                  "var(--font-agdasima), ui-sans-serif, system-ui, sans-serif",
                fontSize: "24px",
                lineHeight: 1.45,
              }}
            >
              <p>“{album.quote}”</p>
              {album.quoteAuthor && (
                <footer
                  className="mt-2 text-muted"
                  style={{ fontSize: "20px" }}
                >
                  – {album.quoteAuthor}
                </footer>
              )}
            </blockquote>
          )}
        </header>

        <div className="mt-12">
          <PhotoGrid album={album} />
        </div>
      </article>
      <Footer />
    </>
  );
}
