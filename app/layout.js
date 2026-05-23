import { Agdasima } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

const asimovian = localFont({
  src: "./fonts/Asimovian-Regular.ttf",
  variable: "--font-asimovian",
  display: "swap",
  fallback: ["Impact", "Orbitron", "Space Grotesk", "sans-serif"],
});

const agdasima = Agdasima({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-agdasima",
  display: "swap",
});

export const metadata = {
  title: "Erim Hayretci — Photography",
  description: "Collecting light, one city at a time.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${asimovian.variable} ${agdasima.variable} bg-page text-ink font-sans antialiased`}
      >
        <Navbar />
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
