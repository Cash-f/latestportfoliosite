"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const NavItem = ({ href, children }) => {
  return (
    <li>
      <Link
        href={href}
        className="group relative flex items-center h-6 overflow-hidden text-sm font-medium tracking-wider uppercase"
      >
        <span className="absolute left-0 w-2 h-2 bg-accent mr-3"></span>
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

const Header = ({ hideOnModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [buttonText, setButtonText] = useState("Let's Chat");

  const handleMailClick = () => {
    setButtonText("Opening Mail...");
    setTimeout(() => {
      setButtonText("Let's Chat");
    }, 2000);
  };

  const navLinks = [
    { href: "/#projects", title: "Projects" },
    { href: "/#about", title: "About" },
    { href: "/#contact", title: "Contact" },
  ];

  return (
    <header
      className={`
        md:py-8 fixed top-0 left-0 w-full z-[9999]
        transition-opacity duration-300 ease-in-out
        ${hideOnModal ? "opacity-0 pointer-events-none" : "opacity-100"}
      `}
    >
      <div className="container mx-auto flex justify-between items-center bg-neutral-darkest rounded-xl py-4 px-4 md:px-8">
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center h-12 px-4">
            <img
              src="/Logos/maybeworkinglogo.png"
              alt="Logo - Return to Home"
              className="h-10 w-auto"
            />
          </Link>
        </div>

        <nav className="hidden md:flex">
          <ul className="flex items-center space-x-10">
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
            className="flex items-center bg-accent text-foreground text-sm font-bold tracking-wider uppercase py-3 px-5 rounded-md hover:bg-accent-hover transition-colors duration-200"
          >
            {buttonText}
            <span className="w-2 h-2 bg-foreground ml-3 animate-flash"></span>
          </a>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-8 h-8 flex flex-col justify-around items-center z-[101] relative"
          >
            <span
              className={`block w-full h-0.5 bg-foreground transition-transform duration-300 ease-in-out ${
                isMenuOpen ? "rotate-45 translate-y-[5px]" : ""
              }`}
            ></span>
            <span
              className={`block w-full h-0.5 bg-foreground transition-opacity duration-300 ease-in-out ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-full h-0.5 bg-foreground transition-transform duration-300 ease-in-out ${
                isMenuOpen ? "-rotate-45 -translate-y-[5px]" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-neutral-darkest z-[100] flex items-center justify-center"
          >
            <nav>
              <ul className="flex flex-col items-center space-y-8">
                {navLinks.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-3xl font-bold text-neutral-light hover:text-accent transition-colors duration-300"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
