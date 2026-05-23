"use client";

import Link from "next/link";
import Image from "next/image";

export default function AlbumCard({ album }) {
  const { slug, title, location, year, coverImage } = album;

  return (
    <Link
      href={`/albums/${slug}`}
      className="group relative block aspect-[4/5] w-full overflow-hidden bg-canvas"
    >
      <Image
        src={coverImage}
        alt={title}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-[1200ms] ease-silky group-hover:scale-[1.04]"
      />

      <div className="pointer-events-none absolute inset-0 bg-ink/0 opacity-0 transition-all duration-700 ease-silky group-hover:bg-ink/55 group-hover:opacity-100" />

      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-6 text-center opacity-0 transition-all duration-700 ease-silky group-hover:opacity-100">
        <h3 className="font-title text-3xl uppercase tracking-[0.18em] text-white md:text-4xl">
          {title}
        </h3>
        <p className="ui-label mt-4 text-white/80">{location}</p>
        <p className="ui-label mt-1 text-white/60">{year}</p>
      </div>
    </Link>
  );
}
