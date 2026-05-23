export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-stone-800/60 px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
          © {year} Photo Portfolio
        </p>
        <a
          href="https://your-framer-site.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent hover:text-ink transition-colors"
        >
          Professional Work ↗
        </a>
      </div>
    </footer>
  );
}
