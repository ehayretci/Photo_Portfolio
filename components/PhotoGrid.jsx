"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { photoMeta } from "@/data/albums";

export default function PhotoGrid({ album }) {
  const photos = useMemo(
    () => album.photos.map((p) => photoMeta(album, p)),
    [album]
  );

  const [activeIndex, setActiveIndex] = useState(null);
  const isOpen = activeIndex !== null;

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight")
        setActiveIndex((i) => (i + 1) % photos.length);
      if (e.key === "ArrowLeft")
        setActiveIndex((i) => (i - 1 + photos.length) % photos.length);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, photos.length]);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  return (
    <>
      <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-3 lg:gap-x-10">
        {photos.map((photo, i) => (
          <figure key={photo.src + i} className="flex flex-col">
            <button
              type="button"
              onClick={() => setActiveIndex(i)}
              className="group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl bg-canvas focus:outline-none focus-visible:ring-1 focus-visible:ring-accent"
            >
              <Image
                src={photo.src}
                alt={photo.caption || `Photo ${i + 1}`}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-[1200ms] ease-silky group-hover:scale-[1.04]"
              />
            </button>
            {photo.caption && (
              <figcaption
                className="mt-4 text-center text-muted"
                style={{
                  fontFamily:
                    "var(--font-agdasima), ui-sans-serif, system-ui, sans-serif",
                  fontSize: "20px",
                  letterSpacing: "0.02em",
                }}
              >
                {photo.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      {isOpen && (
        <div
          onClick={() => setActiveIndex(null)}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-ink/95 p-4 md:p-8"
          role="dialog"
          aria-modal="true"
        >
          {/* Minimal: only the photo, slightly larger; no counter, no close text. */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-full max-w-[96vw] items-center"
          >
            <Image
              src={photos[activeIndex].src}
              alt={photos[activeIndex].caption || `Photo ${activeIndex + 1}`}
              width={2400}
              height={1600}
              sizes="96vw"
              className="max-h-[94vh] w-auto object-contain"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
