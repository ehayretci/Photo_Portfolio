export default function Loading() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-6">
      <div className="dot-row" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <p className="ui-label text-muted">Loading</p>

      <style>{`
        .dot-row {
          display: flex;
          gap: 8px;
        }
        .dot-row span {
          display: block;
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          background: #e5e7eb;
          animation: dot-pulse 1.2s ease-in-out infinite;
        }
        .dot-row span:nth-child(2) { animation-delay: 0.18s; }
        .dot-row span:nth-child(3) { animation-delay: 0.36s; }
        @keyframes dot-pulse {
          0%, 100% { background: #e5e7eb; transform: scale(1); }
          50% { background: #eb2f96; transform: scale(1.15); }
        }
      `}</style>
    </div>
  );
}
