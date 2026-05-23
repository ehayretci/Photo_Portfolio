const FRAMER_URL = "https://draft-erimhayretci.framer.website/";

export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-page px-6 py-8 md:px-12">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-center justify-between gap-3 md:flex-row">
        <p className="ui-label text-muted">© Erim Hayretci 2026</p>
        <a
          href={FRAMER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="ui-label text-ink transition-colors duration-300 hover:text-accent"
        >
          Back to my portfolio
        </a>
      </div>
    </footer>
  );
}
