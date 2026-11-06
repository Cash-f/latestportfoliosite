"use client";

import React from "react";
import SectionTitleAnimated from "../components/SectionTitleAnimated";

const links = [
  {
    href: "mailto:ashfarmerch@gmail.com",
    label: "ashfarmerch@gmail.com",
    icon: "/Logos/communication.png",
    alt: "Email",
    iconClass: "h-10 w-10",
    external: false,
  },
  {
    href: "https://github.com/Cash-f",
    label: "GitHub Profile",
    icon: "/Logos/github.png",
    alt: "GitHub",
    iconClass: "h-8 w-8",
    external: true,
  },
  {
    href: "https://www.artstation.com/charlieash-farmer",
    label: "Artstation Profile",
    icon: "/Logos/artstation-logo-white.png",
    alt: "Artstation",
    iconClass: "h-6 w-auto",
    external: true,
  },
];

const Contact = ({ className = "" }) => {
  return (
    <section
      id="contact"
      className={`min-h-[80vh] flex flex-col justify-center py-20 bg-neutral-darkest ${className}`}
    >
      <div className="container mx-auto px-8 text-center max-w-3xl">
        <SectionTitleAnimated colorClass="text-accent">
          Contact Me
        </SectionTitleAnimated>

        {/* TODO: say what you're looking for (placement, graduate role, freelance) */}
        <p className="mt-8 text-lg text-neutral-light leading-relaxed font-montserrat">
          I'm always open to new opportunities, collaborations, and
          conversations. Whether you have a project in mind, a question, or just
          want to connect, feel free to reach out!
        </p>

        <div className="mt-10 space-y-6">
          {links.map((l) => (
            <div
              key={l.href}
              className="flex items-center justify-center gap-x-4"
            >
              <img
                src={l.icon}
                alt=""
                aria-hidden="true"
                className={l.iconClass}
              />
              <a
                href={l.href}
                {...(l.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="text-foreground text-xl md:text-2xl font-bold hover:text-accent transition-colors duration-300 font-montserrat"
              >
                {l.label}
                <span className="sr-only"> ({l.alt})</span>
              </a>
            </div>
          ))}
        </div>
      </div>

      <footer className="mt-20 text-center text-sm text-neutral-light/60 font-montserrat">
        © {new Date().getFullYear()} Charlie Ash-Farmer
      </footer>
    </section>
  );
};

export default Contact;
