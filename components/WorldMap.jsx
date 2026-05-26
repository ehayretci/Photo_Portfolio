"use client";

import { useEffect, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import travels from "@/data/travels";
import BackArrow from "./BackArrow";

const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const NUMERIC_TO_CODE = Object.fromEntries(
  Object.values(travels)
    .filter((c) => /^[0-9]+$/.test(c.numericId))
    .map((c) => [c.numericId, c.code])
);

const COLORS = {
  unvisited: "#f3f4f6",
  visited: "#0c0a09",
  visitedHover: "#eb2f96",
  border: "#ffffff",
  borderUnvisited: "#e5e7eb",
};

export default function WorldMap({ onModalChange }) {
  const [hover, setHover] = useState(null);
  const [active, setActive] = useState(null);
  const [cityHover, setCityHover] = useState(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    // Notify parent so it can hide overlay chrome (title + stats) while open.
    if (onModalChange) onModalChange(Boolean(active));
    if (active) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [active, onModalChange]);

  return (
    <div className="relative w-full">
      {/* Full-bleed map. ViewBox aspect ~ 1.85:1 — fits most viewports without
          cropping. The parent section overlays title (top-left) + stats
          (bottom-center) on top of this SVG. */}
      <div className="mx-auto w-full">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: 155, center: [10, 18] }}
          width={1480}
          height={800}
          style={{ width: "100%", height: "auto", display: "block" }}
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

      {/* Stats moved to page.js overlay so they sit ABOVE the map without
          eating into its display area. */}

      {hover && !active && (
        <div
          style={{
            position: "fixed",
            left: hover.x + 14,
            top: hover.y + 14,
            pointerEvents: "none",
          }}
          className="z-[150] rounded-md border border-hairline bg-page px-3 py-1.5 ui-label-tight text-ink shadow-sm"
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
  const hasGeometry = /^[0-9]+$/.test(country.numericId);
  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-ink/40 backdrop-blur-sm p-4 md:p-8"
      onClick={onClose}
    >
      <div
        className="relative grid h-full max-h-[92vh] w-full max-w-[1200px] grid-cols-1 overflow-hidden rounded-2xl border border-hairline bg-page shadow-2xl md:grid-cols-2"
        onClick={(e) => e.stopPropagation()}
      >
        <BackArrow
          onClick={onClose}
          ariaLabel="Back to map"
          className="absolute left-5 top-5 z-10"
        />

        <div className="relative flex items-center justify-center bg-canvas p-6 md:p-12">
          <div className="glow-sphere-soft -left-20 top-1/2 h-[420px] w-[420px] -translate-y-1/2" />
          {hasGeometry ? (
            <CountryShape
              country={country}
              cityHover={cityHover}
              setCityHover={setCityHover}
            />
          ) : (
            <p
              className="text-center text-muted"
              style={{
                fontFamily:
                  "var(--font-agdasima), ui-sans-serif, system-ui, sans-serif",
                fontSize: "20px",
              }}
            >
              No map outline available for this region.
            </p>
          )}
        </div>

        <div className="flex flex-col gap-8 overflow-y-auto p-8 pt-20 md:p-12 md:pt-14">
          <header>
            <p className="ui-label text-muted">Country</p>
            <h2
              className="mt-3 font-title uppercase text-ink"
              style={{ fontSize: "56px", letterSpacing: "0.06em", lineHeight: 1 }}
            >
              {country.name}
            </h2>
          </header>

          {country.lived && (
            <section>
              <p className="ui-label text-accent">Lived</p>
              <div className="mt-3 border-t border-hairline pt-4">
                <p
                  className="font-title uppercase text-ink"
                  style={{ fontSize: "32px", letterSpacing: "0.06em", lineHeight: 1.1 }}
                >
                  {country.lived.city}
                </p>
                <p
                  className="mt-3 text-muted"
                  style={{
                    fontFamily:
                      "var(--font-agdasima), ui-sans-serif, system-ui, sans-serif",
                    fontSize: "20px",
                  }}
                >
                  {country.lived.start} — {country.lived.end}
                </p>
              </div>
            </section>
          )}

          <section>
            <p className="ui-label text-muted">Visits</p>
            <ul className="mt-3 divide-y divide-hairline border-t border-hairline">
              {country.visits.map((v) => (
                <li
                  key={v.city + v.date}
                  className="flex items-baseline justify-between gap-4 py-3"
                >
                  <span
                    className="text-ink"
                    style={{
                      fontFamily:
                        "var(--font-agdasima), ui-sans-serif, system-ui, sans-serif",
                      fontSize: "20px",
                      lineHeight: 1.2,
                    }}
                  >
                    {v.city}
                  </span>
                  <span
                    className="text-muted"
                    style={{
                      fontFamily:
                        "var(--font-agdasima), ui-sans-serif, system-ui, sans-serif",
                      fontSize: "16px",
                    }}
                  >
                    {v.date}
                  </span>
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
    <div className="relative mx-auto w-full max-w-[520px]">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ center: country.center, scale: country.scale }}
        width={width}
        height={height}
        style={{ width: "100%", height: "auto", display: "block" }}
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
        <div
          className="pointer-events-none absolute left-1/2 top-3 -translate-x-1/2 rounded-md border border-hairline bg-page px-3 py-1.5 text-ink shadow-sm whitespace-nowrap"
          style={{
            fontFamily:
              "var(--font-agdasima), ui-sans-serif, system-ui, sans-serif",
            fontSize: "14px",
          }}
        >
          {cityHover.name} <span className="text-muted">· {cityHover.date}</span>
        </div>
      )}
    </div>
  );
}
