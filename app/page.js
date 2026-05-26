import AlbumGrid from "@/components/AlbumGrid";
import TravelsSection from "@/components/TravelsSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import TopBrand from "@/components/TopBrand";
import travels from "@/data/travels";

export default function HomePage() {
  const visitedCount = Object.keys(travels).length;

  return (
    <div
      id="snap-wrapper"
      className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth snap-wrapper"
    >
      {/* INTRO */}
      <section
        id="intro"
        className="snap-start snap-section relative flex h-screen w-full flex-col items-start justify-center overflow-hidden bg-page"
      >
        {/* Non-sticky brand — scrolls away with the page */}
        <TopBrand />
        <div className="glow-sphere left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2" />
        <Hero />
      </section>

      {/* TRAVELS — wrapped in a client component so it can hide its own
          overlay chrome while a country modal is open. */}
      <TravelsSection visitedCount={visitedCount} />

      {/* PHOTOGRAPHY */}
      <section
        id="photography"
        className="snap-start snap-section relative min-h-screen w-full bg-page md:h-screen md:overflow-y-auto photo-scroll"
      >
        <div className="mx-auto w-full max-w-[1800px] px-6 pt-16 md:px-10 md:pt-20">
          <h2
            className="font-title uppercase text-ink"
            style={{ fontSize: "56px", letterSpacing: "0.06em", lineHeight: 1 }}
          >
            Photography
          </h2>
        </div>
        <div className="mx-auto w-full max-w-[1800px] px-6 pt-10 pb-16 md:px-10 md:pt-12">
          <AlbumGrid />
        </div>
        <Footer />
      </section>
    </div>
  );
}
