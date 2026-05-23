import AlbumGrid from "@/components/AlbumGrid";
import WorldMap from "@/components/WorldMap";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div
      id="snap-wrapper"
      className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth snap-wrapper"
    >
      <section
        id="intro"
        className="snap-start snap-section h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-page"
      >
        <div className="glow-sphere left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2" />
        <div className="relative z-10 flex flex-col items-center px-6 text-center">
          <p className="ui-label mb-10 text-muted">Photography · 2005 — 2026</p>
          <h1 className="font-title uppercase tracking-[0.16em] text-ink text-4xl leading-[1.1] sm:text-6xl md:text-7xl lg:text-8xl max-w-5xl">
            Collecting light,
            <br />
            one city at a time.
          </h1>
          <p className="ui-label mt-12 text-muted">Scroll to begin ↓</p>
        </div>
      </section>

      <section
        id="travels"
        className="snap-start snap-section h-screen w-full flex flex-col justify-center relative overflow-hidden bg-page"
      >
        <div className="glow-sphere-soft right-[-150px] top-[-150px] h-[600px] w-[600px]" />
        <div className="relative z-10 mx-auto w-full max-w-[1500px] px-6 pt-24 pb-8 md:px-12">
          <div className="mb-6 flex items-baseline justify-between border-b border-hairline pb-4">
            <h2 className="ui-label text-muted">Travels</h2>
            <span className="ui-label text-muted">Lived & visited</span>
          </div>
          <WorldMap />
        </div>
      </section>

      <section
        id="photography"
        className="snap-start snap-section min-h-screen md:h-screen md:overflow-y-auto w-full relative bg-page photo-scroll"
      >
        <div className="mx-auto w-full max-w-[1800px] px-6 pt-24 md:px-10">
          <div className="mb-8 flex items-baseline justify-between border-b border-hairline pb-4">
            <h2 className="ui-label text-muted">Photography</h2>
            <span className="ui-label text-muted">13 Albums</span>
          </div>
        </div>
        <div className="mx-auto w-full max-w-[1800px] px-6 md:px-10">
          <AlbumGrid />
        </div>
        <Footer />
      </section>
    </div>
  );
}
