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
        page: "#ffffff",
        canvas: "#f9f9f9",
        ink: "#0c0a09",
        muted: "#707070",
        subtle: "#9ca3af",
        hairline: "#e5e7eb",
        accent: "#eb2f96",
      },
      fontFamily: {
        title: ["var(--font-asimovian)", "Impact", "Orbitron", "Space Grotesk", "sans-serif"],
        sans: ["var(--font-agdasima)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.32em",
      },
      transitionTimingFunction: {
        silky: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
