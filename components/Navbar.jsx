import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/map", label: "Map" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-800/60 bg-page/60 backdrop-blur-md supports-[backdrop-filter]:bg-page/40">
      <nav className="flex w-full items-center justify-between px-6 py-4 md:px-10">
        <Link
          href="/"
          className="font-serif italic text-xl text-ink tracking-tight hover:text-accent transition-colors"
        >
          Photo Portfolio
        </Link>

        <ul className="flex items-center gap-6 font-mono text-xs uppercase tracking-[0.18em] text-muted">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="hover:text-ink transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="https://your-framer-site.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-ink transition-colors"
            >
              Professional Work ↗
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
