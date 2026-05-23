"use client";

const FRAMER_URL = "https://draft-erimhayretci.framer.website/";

function Monogram() {
  return (
    <svg
      viewBox="0 0 56 40"
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-auto text-ink transition-colors duration-300 group-hover:text-accent"
      aria-hidden="true"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="square"
        strokeLinejoin="miter"
      >
        <polyline points="4,36 4,4 22,4" />
        <line x1="4" y1="20" x2="18" y2="20" />
        <polyline points="30,36 30,4 46,4 46,20 30,20" />
        <line x1="38" y1="20" x2="52" y2="36" />
      </g>
    </svg>
  );
}

function handleScroll(e, id) {
  e.preventDefault();
  const wrapper = document.getElementById("snap-wrapper");
  const target = document.getElementById(id);
  if (!wrapper || !target) return;
  wrapper.scrollTo({ top: target.offsetTop, behavior: "smooth" });
}

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-hairline bg-page/80 backdrop-blur-md">
      <nav className="flex w-full items-center justify-between px-6 py-4 md:px-10 md:py-5">
        <a
          href={FRAMER_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Erim Hayretci — back to portfolio"
          className="group flex items-center"
        >
          <Monogram />
        </a>

        <ul className="flex items-center gap-8 md:gap-12">
          {[
            { id: "travels", label: "Travels" },
            { id: "photography", label: "Photography" },
          ].map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => handleScroll(e, link.id)}
                className="ui-label text-ink transition-colors duration-300 hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
