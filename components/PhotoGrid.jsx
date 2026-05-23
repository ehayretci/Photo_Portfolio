"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function PhotoGrid({ photos }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const isOpen = activeIndex !== null;

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight") setActiveIndex((i) => (i + 1) % photos.length);
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
      <div className="grid grid-cols-1 gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((src, i) => (
          <button
            key={src + i}
            type="button"
            onClick={() => setActiveIndex(i)}
            className="group relative block aspect-[4/3] w-full overflow-hidden bg-page focus:outline-none focus-visible:ring-1 focus-visible:ring-accent"
          >
            <Image
              src={src}
              alt={`Photo ${i + 1}`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-[1200ms] ease-silky group-hover:scale-[1.04]"
            />
          </button>
        ))}
      </div>

      {isOpen && (
        <div
          onClick={() => setActiveIndex(null)}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-ink/90 p-6 md:p-12"
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex(null);
            }}
            aria-label="Close"
            className="absolute right-6 top-6 ui-label text-white/70 transition-colors hover:text-accent"
          >
            Close · Esc
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-full max-w-6xl"
          >
            <Image
              src={photos[activeIndex]}
              alt={`Photo ${activeIndex + 1}`}
              width={2400}
              height={1600}
              sizes="100vw"
              className="max-h-[85vh] w-auto object-contain"
              priority
            />
            <p className="ui-label absolute bottom-[-2.5rem] left-0 text-white/60">
              {activeIndex + 1} / {photos.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
