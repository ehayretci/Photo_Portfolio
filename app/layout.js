import { Playfair_Display, DM_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";
import PageTransition from "@/components/PageTransition";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata = {
  title: "Photo Portfolio",
  description: "A photo portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${dmMono.variable} bg-page text-ink font-serif antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="relative flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <GrainOverlay />
      </body>
    </html>
  );
}
