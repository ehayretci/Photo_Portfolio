"use client";

const FRAMER_URL = "https://erim.framer.website/";

function scrollToSection(e, id) {
  e.preventDefault();
  const wrapper = document.getElementById("snap-wrapper");
  const target = document.getElementById(id);
  if (!wrapper || !target) return;
  wrapper.scrollTo({ top: target.offsetTop, behavior: "smooth" });
}

export default function Hero() {
  // Name renders at viewport vertical center (placed by parent <section>).
  // The link cluster hangs below it via absolute positioning so it doesn't
  // shift the centering calculation.
  return (
    <div className="relative z-10 w-full max-w-[1100px] px-8 md:px-16">
      <h1
        className="font-title uppercase text-ink leading-none block"
        style={{ fontSize: "60px", letterSpacing: "0.04em" }}
      >
        Erim Hayretci
      </h1>

      {/* Travels / Photography / Professional Work — uniform vertical spacing */}
      <ul className="absolute left-8 right-8 top-full mt-10 flex flex-col items-start gap-3 md:left-16 md:right-16">
        <li>
          <a
            href="#travels"
            onClick={(e) => scrollToSection(e, "travels")}
            className="ui-label text-ink transition-colors duration-300 hover:text-accent"
          >
            Travels
          </a>
        </li>
        <li>
          <a
            href="#photography"
            onClick={(e) => scrollToSection(e, "photography")}
            className="ui-label text-ink transition-colors duration-300 hover:text-accent"
          >
            Photography
          </a>
        </li>
        <li>
          <a
            href={FRAMER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ui-label inline-flex items-center gap-3 text-muted transition-colors duration-300 hover:text-accent"
          >
            Professional Work
            <span aria-hidden="true">↗</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
