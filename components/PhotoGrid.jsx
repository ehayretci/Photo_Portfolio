"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const MARGIN_RHYTHM = ["mb-4", "mb-8", "mb-6", "mb-10", "mb-5", "mb-12"];

export default function PhotoGrid({ photos }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const isOpen = activeIndex !== null;

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setActiveIndex(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen]);

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
      <div className="columns-2 gap-4 md:columns-3 md:gap-6 lg:columns-4">
        {photos.map((src, i) => (
          <button
            key={src + i}
            type="button"
            onClick={() => setActiveIndex(i)}
            className={`block w-full break-inside-avoid overflow-hidden rounded-md bg-stone-900 focus:outline-none focus-visible:ring-1 focus-visible:ring-accent ${
              MARGIN_RHYTHM[i % MARGIN_RHYTHM.length]
            }`}
          >
            <Image
              src={src}
              alt={`Photo ${i + 1}`}
              width={1600}
              height={1000}
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              className="h-auto w-full object-cover transition-opacity duration-500 hover:opacity-90"
            />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setActiveIndex(null)}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-stone-950/95 p-6 md:p-12"
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
              className="absolute right-6 top-6 font-mono text-xs uppercase tracking-[0.25em] text-muted hover:text-ink"
            >
              Close · Esc
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
