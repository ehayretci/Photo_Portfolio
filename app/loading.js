export default function Loading() {
  return (
    <div className="flex min-h-[60vh] w-full flex-col items-center justify-center gap-6">
      <div className="film-strip" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
        Developing…
      </p>

      <style>{`
        .film-strip {
          display: flex;
          gap: 6px;
          padding: 8px;
          border-top: 2px solid #44403c;
          border-bottom: 2px solid #44403c;
        }
        .film-strip span {
          display: block;
          width: 14px;
          height: 20px;
          background: #292524;
          animation: film-flicker 1.2s ease-in-out infinite;
        }
        .film-strip span:nth-child(2) { animation-delay: 0.12s; }
        .film-strip span:nth-child(3) { animation-delay: 0.24s; }
        .film-strip span:nth-child(4) { animation-delay: 0.36s; }
        .film-strip span:nth-child(5) { animation-delay: 0.48s; }
        @keyframes film-flicker {
          0%, 100% { background: #292524; }
          50% { background: #b45309; }
        }
      `}</style>
    </div>
  );
}
