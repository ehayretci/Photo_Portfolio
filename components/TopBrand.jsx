import Image from "next/image";

const CONTACT_URL = "mailto:hello@erimhayretci.com";

// Navbar lives inside the intro section (absolute top), so it scrolls away
// with the page — not sticky. Bar height = 70px to the 1px black bottom stroke.
export default function TopBrand() {
  return (
    <div
      className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between border-b border-ink bg-page"
      style={{ height: "70px", borderBottomWidth: "1px" }}
    >
      <a
        href="/"
        aria-label="Erim Hayretci — home"
        className="ml-6 flex items-center md:ml-10"
      >
        <Image
          src="/new_logo.svg"
          alt="Erim Hayretci logo"
          width={40}
          height={40}
          priority
          className="h-10 w-10"
        />
      </a>

      <a
        href={CONTACT_URL}
        className="mr-6 transition-colors duration-300 hover:text-accent md:mr-10"
        style={{
          fontFamily:
            "var(--font-agdasima), ui-sans-serif, system-ui, sans-serif",
          fontSize: "20px",
          letterSpacing: "0.02em",
          lineHeight: 1,
        }}
      >
        Contact
      </a>
    </div>
  );
}
