"use client";

import React, { useState } from "react";

const NavItem = ({ href, children }) => {
  return (
    <li>
      <a
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
      </a>
    </li>
  );
};

const Header = ({ hideOnModal }) => {
  const [buttonText, setButtonText] = useState("Let's Chat");

  const handleMailClick = () => {
    setButtonText("Opening Mail...");

    setTimeout(() => {
      setButtonText("Let's Chat");
    }, 2000);
  };

  return (
    <header
      className={`
 py-8 fixed top-0 left-0 w-full z-[9999]
 transition-opacity duration-300 ease-in-out
  ${hideOnModal ? "opacity-0 pointer-events-none" : "opacity-100"}
 `}
    >
      <div className="container mx-auto flex justify-between items-center bg-neutral-darkest rounded-xl py-4 px-8">
        <div className="flex-shrink-0">
          <a href="#" className="flex items-center h-12 px-4">
            <img
              src="/Logos/maybeworkinglogo.png"
              alt="Logo"
              className="h-10 w-auto"
            />
          </a>
        </div>

        <nav className="hidden md:flex">
          <ul className="flex items-center space-x-10">
            <NavItem href="#projects">Projects</NavItem>
            <NavItem href="#about">About</NavItem>
            <NavItem href="#contact">Contact</NavItem>
          </ul>
        </nav>

        <div className="flex-shrink-0">
          {/* 4. Update the button */}
          <a
            href="mailto:ashfarmerch@gmail.com" // Set the mailto link
            onClick={handleMailClick} // Add the click handler
            className="flex items-center bg-accent text-foreground text-sm font-bold tracking-wider uppercase py-3 px-5 rounded-md hover:bg-accent-hover transition-colors duration-200"
          >
            {buttonText} {/* Use the state variable for the text */}
            <span className="w-2 h-2 bg-foreground ml-3 animate-flash"></span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
