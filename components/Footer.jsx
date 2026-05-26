"use client";

function scrollToTop(e) {
  e.preventDefault();
  const wrapper = document.getElementById("snap-wrapper");
  if (wrapper) {
    wrapper.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

export default function Footer() {
  return (
    <footer className="relative border-t border-hairline bg-page px-6 py-10 md:px-12">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-center gap-6">
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="group flex h-14 w-14 items-center justify-center rounded-full border border-hairline text-ink transition-all duration-300 hover:border-accent hover:text-accent"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 transition-transform duration-300 group-hover:-translate-y-0.5"
            aria-hidden="true"
          >
            <line x1="12" y1="19" x2="12" y2="5" />
            <polyline points="5,12 12,5 19,12" />
          </svg>
        </button>
        <p
          className="text-muted"
          style={{
            fontFamily:
              "var(--font-agdasima), ui-sans-serif, system-ui, sans-serif",
            fontSize: "20px",
            letterSpacing: "0.02em",
          }}
        >
          © Erim Hayretci 2026
        </p>
      </div>
    </footer>
  );
}
