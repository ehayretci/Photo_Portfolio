"use client";

import { useState } from "react";
import WorldMap from "./WorldMap";

export default function TravelsSection({ visitedCount }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section
      id="travels"
      className="snap-start snap-section relative h-screen w-full overflow-hidden bg-page"
    >
      <div className="glow-sphere-soft right-[-150px] top-[-150px] h-[600px] w-[600px]" />

      {/* Title and stats overlay the map. Both hidden while a country modal is
          open so they don't bleed through the modal's semi-transparent
          backdrop. */}
      {!modalOpen && (
        <>
          <h2
            className="absolute left-6 top-8 z-10 font-title uppercase text-ink md:left-12 md:top-12"
            style={{ fontSize: "56px", letterSpacing: "0.06em", lineHeight: 1 }}
          >
            Travels
          </h2>

          <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 md:bottom-12">
            <div className="flex flex-col items-center gap-1">
              <p
                className="font-title uppercase text-ink"
                style={{
                  fontSize: "40px",
                  letterSpacing: "0.06em",
                  lineHeight: 1,
                }}
              >
                {visitedCount}
              </p>
              <p
                className="text-muted"
                style={{
                  fontFamily:
                    "var(--font-agdasima), ui-sans-serif, system-ui, sans-serif",
                  fontSize: "20px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  lineHeight: 1.2,
                }}
              >
                Countries visited
              </p>
            </div>
          </div>
        </>
      )}

      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <WorldMap onModalChange={setModalOpen} />
      </div>
    </section>
  );
}
