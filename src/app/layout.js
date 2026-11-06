import {
  Geist,
  Geist_Mono,
  Montserrat,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";
import GridBackground from "../blocks/Backgrounds/GridBackground.jsx";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Charlie Ash-Farmer",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${playfair.variable}`}
    >
      <body className="antialiased font-montserrat bg-background text-foreground overflow-x-hidden">
        <GridBackground
          size={50}
          color="rgba(255, 255, 255, 0.05)"
          thickness={1}
          fade={true}
          className="fixed inset-0 z-0"
        />
        {/*
          This div is the real scroller (and the snap container), so:
          - Header and ProjectModal look it up by id="scroll-root"
          - scroll-smooth lives HERE; on <html> it does nothing because
            <html> never scrolls in this layout
        */}
        <div
          id="scroll-root"
          className="relative h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth"
        >
          {children}
        </div>

        <div id="modal-root" />
      </body>
    </html>
  );
}
