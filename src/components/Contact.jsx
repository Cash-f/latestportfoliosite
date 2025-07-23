"use client";

import React from "react";
import SectionTitleAnimated from "@/components/SectionTitleAnimated";

const Contact = ({ className }) => {
  return (
    <section id="contact" className={`py-5 bg-neutral-darkest ${className}`}>
      <div className="container mx-auto px-8 text-center max-w-3xl">
        <SectionTitleAnimated colorClass="text-accent">
          Contact Me
        </SectionTitleAnimated>

        <p className="mt-8 text-lg text-neutral-light leading-relaxed font-montserrat">
          I'm always open to new opportunities, collaborations, and
          conversations. Whether you have a project in mind, a question, or just
          want to connect, feel free to reach out!
        </p>

        <div className="mt-10 space-y-6">
          <div className="flex items-center justify-center gap-x-4">
            <img
              src="/Logos/communication.png"
              alt="Email Logo"
              className="h-10 w-10"
            />
            <a
              href="mailto:ashfarmerch@gmail.com"
              className="text-foreground text-xl md:text-2xl font-bold hover:text-accent transition-colors duration-300 font-montserrat"
            >
              ashfarmerch@gmail.com
            </a>
          </div>

          <div className="flex items-center justify-center gap-x-4">
            <img
              src="/Logos/github.png"
              alt="GitHub Logo"
              className="h-8 w-8"
            />
            <a
              href="https://github.com/Cash-f"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground text-xl md:text-2xl font-bold hover:text-accent transition-colors duration-300 font-montserrat"
            >
              GitHub Profile
            </a>
          </div>

          <div className="flex items-center justify-center gap-x-4">
            <img
              src="/Logos/artstation-logo-white.png"
              alt="Artstation Logo"
              className="h-6 w-auto"
            />
            <a
              href="https://www.artstation.com/charlieash-farmer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground text-xl md:text-2xl font-bold hover:text-accent transition-colors duration-300 font-montserrat"
            >
              Artstation Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
