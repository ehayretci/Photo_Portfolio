"use client";

import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const VISITED_ALPHA2_TO_NUMERIC = {
  GB: "826",
  FR: "250",
  JP: "392",
  US: "840",
  IT: "380",
  TR: "792",
  MA: "504",
  PT: "620",
  NL: "528",
  DE: "276",
  ES: "724",
  TH: "764",
  IN: "356",
  AE: "784",
  GR: "300",
};

const VISITED_IDS = new Set(Object.values(VISITED_ALPHA2_TO_NUMERIC));

const COLORS = {
  unvisited: "#2a2a2a",
  visited: "#c8a97e",
  visitedHover: "#e2c79f",
  border: "#444444",
};

export default function WorldMap() {
  const [hover, setHover] = useState(null);

  return (
    <div className="relative w-full">
      <ComposableMap
        projectionConfig={{ scale: 155 }}
        width={980}
        height={500}
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const isVisited = VISITED_IDS.has(String(geo.id));
              const baseFill = isVisited ? COLORS.visited : COLORS.unvisited;
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={(e) => {
                    if (!isVisited) return;
                    setHover({
                      name: geo.properties.name,
                      x: e.clientX,
                      y: e.clientY,
                    });
                  }}
                  onMouseMove={(e) => {
                    if (!isVisited) return;
                    setHover((h) =>
                      h ? { ...h, x: e.clientX, y: e.clientY } : h
                    );
                  }}
                  onMouseLeave={() => setHover(null)}
                  style={{
                    default: {
                      fill: baseFill,
                      stroke: COLORS.border,
                      strokeWidth: 0.5,
                      outline: "none",
                      transition: "fill 200ms ease",
                    },
                    hover: {
                      fill: isVisited
                        ? COLORS.visitedHover
                        : COLORS.unvisited,
                      stroke: COLORS.border,
                      strokeWidth: 0.5,
                      outline: "none",
                      cursor: isVisited ? "pointer" : "default",
                    },
                    pressed: {
                      fill: isVisited
                        ? COLORS.visitedHover
                        : COLORS.unvisited,
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>

      {hover && (
        <div
          style={{
            position: "fixed",
            left: hover.x + 14,
            top: hover.y + 14,
            pointerEvents: "none",
          }}
          className="z-[150] rounded-md border border-stone-700/80 bg-stone-950/95 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink shadow-lg"
        >
          {hover.name}
        </div>
      )}
    </div>
  );
}
