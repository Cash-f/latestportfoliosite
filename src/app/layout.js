import {
  Geist,
  Geist_Mono,
  Montserrat,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";
import GridBackground from "@/blocks/Backgrounds/GridBackground";

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
      className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${playfair.variable} scroll-smooth`}
    >
      <body className="antialiased font-montserrat bg-background text-foreground">
        <GridBackground
          size={50}
          color="rgba(255, 255, 255, 0.05)"
          thickness={1}
          fade={true}
          className="fixed inset-0 z-0"
        />

        <div className="relative h-screen w-full overflow-y-scroll snap-y snap-mandatory">
          {children}
        </div>
      </body>
    </html>
  );
}
