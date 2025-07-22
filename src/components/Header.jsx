// src/components/Header.js
import React from "react";

const NavItem = ({ href, children }) => {
  return (
    <li>
      <a
        href={href}
        className="group relative flex items-center h-6 overflow-hidden text-sm font-medium tracking-wider uppercase"
      >
        <span className="absolute left-0 w-2 h-2 bg-orange-500 mr-3"></span>
        <div className="relative pl-5 transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
          <span className="block text-gray-300 group-hover:text-white">
            {children}
          </span>
          <span className="block absolute top-full text-white">{children}</span>
        </div>
      </a>
    </li>
  );
};

const Header = () => {
  return (
    <header className="py-8 fixed top-0 left-0 w-full z-[9999]">
      <div className="container mx-auto flex justify-between items-center bg-black rounded-xl py-4 px-8">
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
          <a
            href="#"
            className="flex items-center bg-orange-500 text-white text-sm font-bold tracking-wider uppercase py-3 px-5 rounded-md hover:bg-orange-600 transition-colors duration-200"
          >
            Let's Chat
            <span className="w-2 h-2 bg-white ml-3 animate-flash"></span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
