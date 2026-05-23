"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AlbumCard({ album }) {
  const { slug, title, location, year, coverImage } = album;

  return (
    <Link href={`/albums/${slug}`} className="group block">
      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-stone-900"
      >
        <motion.div
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1.05 },
          }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={coverImage}
            alt={title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
            priority={false}
          />
        </motion.div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
          <h3 className="font-serif text-2xl leading-tight text-ink md:text-3xl">
            {title}
          </h3>
          <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
            {location} — {year}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}
