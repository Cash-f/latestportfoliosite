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
      className={`${montserrat.variable} ${playfair.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="antialiased bg-background text-foreground overflow-x-hidden font-montserrat">
        {/* Layer 0: Grid */}
        <GridBackground
          size={50}
          color="rgba(255, 255, 255, 0.05)"
          thickness={1}
          fade={true}
          className="fixed inset-0 z-0 pointer-events-none"
        />

        {/* Layer 1: Ambient lighting */}
        <div className="ambient-background" aria-hidden="true">
          <div className="ambient-glow ambient-glow-one" />
          <div className="ambient-glow ambient-glow-two" />
          <div className="ambient-glow ambient-glow-three" />
        </div>

        {/* Layer 2: Website content */}
        <div
          id="scroll-root"
          className="relative z-10 h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth"
        >
          {children}
        </div>

        <div id="modal-root" />
      </body>
    </html>
  );
}
