"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const NavItem = ({ href, children }) => {
  return (
    <li>
      <Link
        href={href}
        className="group relative flex items-center h-6 overflow-hidden text-sm font-medium tracking-wider uppercase"
      >
        <span className="absolute left-0 w-2 h-2 bg-accent mr-3 transition-transform group-hover:scale-125"></span>
        <div className="relative pl-5 transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
          <span className="block text-neutral-light group-hover:text-foreground">
            {children}
          </span>
          <span className="block absolute top-full text-accent">
            {children}
          </span>
        </div>
      </Link>
    </li>
  );
};

const navLinks = [
  { href: "/all-projects", title: "Projects" },
  { href: "/#proficiency", title: "Tools" },
  { href: "/#about", title: "About" },
  { href: "/#contact", title: "Contact" },
];

const Header = ({ hideOnModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [buttonText, setButtonText] = useState("Let's Chat");
  const [isScrolledAway, setIsScrolledAway] = useState(false);
  const lastY = useRef(0);

  const handleMailClick = () => {
    setButtonText("Opening Mail...");
    setTimeout(() => {
      setButtonText("Let's Chat");
    }, 2000);
  };

  // Close the mobile menu on Escape
  useEffect(() => {
    if (!isMenuOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isMenuOpen]);

  // Hide while scrolling down, show again on any scroll up.
  // - always visible near the top of the page
  // - 3px dead zone so snap settling / tiny reversals don't make it flicker
  useEffect(() => {
    // The page scrolls inside #scroll-root (see layout.js), not the window.
    const scroller = document.getElementById("scroll-root") || window;
    const getY = () =>
      scroller === window ? window.scrollY : scroller.scrollTop;
    lastY.current = getY();
    const onScroll = () => {
      const y = getY();
      const delta = y - lastY.current;
      lastY.current = y;

      if (y < 80) {
        setIsScrolledAway(false);
        return;
      }
      if (Math.abs(delta) < 3) return;
      setIsScrolledAway(delta > 0);
    };
    scroller.addEventListener("scroll", onScroll, { passive: true });
    return () => scroller.removeEventListener("scroll", onScroll);
  }, []);

  // Never hide while the mobile menu is open.
  const shouldHide = hideOnModal || (isScrolledAway && !isMenuOpen);

  return (
    <header
      className={`
        fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl z-50
        transition-all duration-300 ease-in-out
        ${
          shouldHide
            ? "opacity-0 -translate-y-[calc(100%+2rem)] pointer-events-none focus-within:opacity-100 focus-within:translate-y-0 focus-within:pointer-events-auto"
            : "opacity-100"
        }
      `}
    >
      {/*
        Padding is equal on top, bottom and right (6px) at desktop, so the
        "Let's Chat" pill sits concentric inside the bar. Mobile keeps normal
        padding because the hamburger is on the right.
      */}
      <div className="flex justify-between items-center bg-neutral-darkest/80 backdrop-blur-md border border-white/10 rounded-full py-2 pl-6 pr-6 md:py-1.5 md:pr-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center">
            <img
              src="/Logos/maybeworkinglogo.png"
              alt="Logo - Return to Home"
              className="h-8 w-auto hover:opacity-80 transition-opacity"
            />
          </Link>
        </div>

        <nav className="hidden md:flex" aria-label="Primary">
          <ul className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavItem key={link.title} href={link.href}>
                {link.title}
              </NavItem>
            ))}
          </ul>
        </nav>

        <div className="hidden md:flex flex-shrink-0">
          <a
            href="mailto:ashfarmerch@gmail.com"
            onClick={handleMailClick}
            className="flex items-center bg-accent text-foreground text-xs font-bold tracking-wider uppercase py-2.5 px-5 rounded-full hover:bg-accent-hover hover:scale-105 transition-all duration-200 shadow-md"
          >
            {buttonText}
            <span className="w-1.5 h-1.5 rounded-full bg-foreground ml-2 animate-flash"></span>
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative w-6 h-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <span
              className={`absolute left-0 w-full h-0.5 bg-foreground transition-all duration-300 ease-in-out origin-center ${
                isMenuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
              }`}
            ></span>
            <span
              className={`absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-foreground transition-all duration-300 ease-in-out origin-center ${
                isMenuOpen ? "opacity-0 scale-x-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`absolute left-0 w-full h-0.5 bg-foreground transition-all duration-300 ease-in-out origin-center ${
                isMenuOpen
                  ? "bottom-1/2 translate-y-1/2 -rotate-45"
                  : "bottom-0"
              }`}
            ></span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute top-16 left-0 w-full bg-neutral-darkest/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
          >
            <nav className="p-8" aria-label="Mobile">
              <ul className="flex flex-col items-center space-y-6">
                {navLinks.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-2xl font-bold text-neutral-light hover:text-accent transition-colors duration-300 tracking-wide"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}

                <li className="pt-4 w-full">
                  <a
                    href="mailto:ashfarmerch@gmail.com"
                    onClick={() => {
                      handleMailClick();
                      setTimeout(() => setIsMenuOpen(false), 500);
                    }}
                    className="flex justify-center items-center w-full bg-accent text-foreground text-sm font-bold tracking-wider uppercase py-3 rounded-xl"
                  >
                    {buttonText}
                  </a>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
