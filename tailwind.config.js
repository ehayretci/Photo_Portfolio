/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        page: "#0c0a09",        // stone-950 — page background
        ink: "#fef3c7",         // amber-100 — primary warm text
        muted: "#d6d3d1",       // stone-300 — secondary text
        accent: "#b45309",      // amber-700 — accent
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "ui-serif", "Georgia", "serif"],
        mono: ["var(--font-dm-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
    },
  },
  plugins: [],
};
