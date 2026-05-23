"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import travels, { TOTAL_COUNTRIES } from "@/data/travels";

const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const NUMERIC_TO_CODE = Object.fromEntries(
  Object.values(travels).map((c) => [c.numericId, c.code])
);

const COLORS = {
  unvisited: "#f3f4f6",
  visited: "#0c0a09",
  visitedHover: "#eb2f96",
  border: "#ffffff",
  borderUnvisited: "#e5e7eb",
};

export default function WorldMap() {
  const [hover, setHover] = useState(null);
  const [active, setActive] = useState(null);
  const [cityHover, setCityHover] = useState(null);

  const visitedCount = Object.keys(travels).length;
  const percent = ((visitedCount / TOTAL_COUNTRIES) * 100).toFixed(1);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (active) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [active]);

  return (
    <div className="relative w-full">
      <div className="mx-auto w-full max-w-[1400px]">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: 130, center: [10, 30] }}
          width={1100}
          height={520}
          style={{ width: "100%", height: "auto" }}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const code = NUMERIC_TO_CODE[String(geo.id)];
                const isVisited = Boolean(code);
                const fill = isVisited ? COLORS.visited : COLORS.unvisited;
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
                    onClick={() => {
                      if (isVisited) setActive(travels[code]);
                    }}
                    style={{
                      default: {
                        fill,
                        stroke: isVisited
                          ? COLORS.border
                          : COLORS.borderUnvisited,
                        strokeWidth: 0.6,
                        outline: "none",
                        transition: "fill 250ms ease",
                      },
                      hover: {
                        fill: isVisited
                          ? COLORS.visitedHover
                          : COLORS.unvisited,
                        stroke: isVisited
                          ? COLORS.border
                          : COLORS.borderUnvisited,
                        strokeWidth: 0.6,
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
      </div>

      <div className="mt-8 flex flex-col items-center gap-2">
        <p className="font-title text-3xl uppercase tracking-[0.18em] text-ink md:text-4xl">
          {visitedCount} <span className="text-muted">/</span> {TOTAL_COUNTRIES}
        </p>
        <p className="ui-label text-muted">
          Countries visited · {percent}% of the world
        </p>
      </div>

      {hover && !active && (
        <div
          style={{
            position: "fixed",
            left: hover.x + 14,
            top: hover.y + 14,
            pointerEvents: "none",
          }}
          className="z-[150] border border-hairline bg-page px-3 py-1.5 ui-label text-ink shadow-sm"
        >
          {hover.name}
        </div>
      )}

      {active && (
        <CountryModal
          country={active}
          onClose={() => setActive(null)}
          cityHover={cityHover}
          setCityHover={setCityHover}
        />
      )}
    </div>
  );
}

function CountryModal({ country, onClose, cityHover, setCityHover }) {
  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-ink/40 backdrop-blur-sm p-4 md:p-8"
      onClick={onClose}
    >
      <div
        className="relative grid h-full max-h-[90vh] w-full max-w-[1200px] grid-cols-1 overflow-hidden border border-hairline bg-page shadow-2xl md:grid-cols-2"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 ui-label text-muted transition-colors hover:text-accent"
        >
          Close ✕
        </button>

        <div className="relative flex items-center justify-center bg-canvas p-8 md:p-12">
          <div className="glow-sphere-soft -left-20 top-1/2 h-[420px] w-[420px] -translate-y-1/2" />
          <CountryShape country={country} cityHover={cityHover} setCityHover={setCityHover} />
        </div>

        <div className="flex flex-col gap-8 overflow-y-auto p-8 md:p-12">
          <header>
            <p className="ui-label text-muted">Country</p>
            <h2 className="mt-2 font-title text-5xl uppercase tracking-[0.12em] text-ink md:text-6xl">
              {country.name}
            </h2>
          </header>

          {country.lived && (
            <section>
              <p className="ui-label text-accent">Lived</p>
              <div className="mt-3 border-t border-hairline pt-4">
                <p className="font-title text-2xl uppercase tracking-[0.12em] text-ink">
                  {country.lived.city}
                </p>
                <p className="ui-label mt-2 text-muted">
                  {country.lived.start} — {country.lived.end}
                </p>
              </div>
            </section>
          )}

          <section>
            <p className="ui-label text-muted">Visits</p>
            <ul className="mt-3 divide-y divide-hairline border-t border-hairline">
              {country.visits.map((v) => (
                <li key={v} className="ui-label py-3 text-ink">
                  {v}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

function CountryShape({ country, cityHover, setCityHover }) {
  const width = 520;
  const height = 520;
  return (
    <div className="relative w-full max-w-[520px]">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ center: country.center, scale: country.zoom * 200 }}
        width={width}
        height={height}
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies
              .filter((g) => String(g.id) === country.numericId)
              .map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: "#0c0a09",
                      stroke: "#ffffff",
                      strokeWidth: 0.8,
                      outline: "none",
                    },
                    hover: { fill: "#0c0a09", outline: "none" },
                    pressed: { fill: "#0c0a09", outline: "none" },
                  }}
                />
              ))
          }
        </Geographies>
        {country.cities.map((city) => (
          <Marker
            key={city.name}
            coordinates={city.coordinates}
            onMouseEnter={() => setCityHover(city)}
            onMouseLeave={() => setCityHover(null)}
          >
            <circle
              r={9}
              fill="#eb2f96"
              opacity={0.25}
              style={{ pointerEvents: "none" }}
            />
            <circle
              r={4}
              fill="#eb2f96"
              stroke="#ffffff"
              strokeWidth={1.5}
              style={{ cursor: "pointer" }}
            />
          </Marker>
        ))}
      </ComposableMap>
      {cityHover && (
        <div className="pointer-events-none absolute left-1/2 top-3 -translate-x-1/2 border border-hairline bg-page px-3 py-1.5 ui-label text-ink shadow-sm">
          {cityHover.name} <span className="text-muted">· {cityHover.date}</span>
        </div>
      )}
    </div>
  );
}
