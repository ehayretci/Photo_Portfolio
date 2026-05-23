# Photo Portfolio

A portfolio documenting my travels and photography over the years, built by Erim Hayretci. Built with Next.js 14 (App Router), Tailwind CSS, and Framer Motion.

## Stack

- **Next.js 14** — App Router, static generation
- **Tailwind CSS** — custom dark palette (stone-950 base, amber accents)
- **Framer Motion** — page transitions, hover animations, lightbox
- **react-simple-maps** — interactive world map of visited countries
- **next/font** — Playfair Display + DM Mono from Google Fonts

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero quote + album grid |
| `/about` | Bio, portrait, interests |
| `/albums/[slug]` | Album detail with masonry photo grid + lightbox |
| `/map` | World map of visited countries |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

Deploys to Netlify via `netlify.toml`. Push to `main` to trigger a build.
