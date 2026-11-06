"use client";

import React, { useState } from "react";
import SectionTitleAnimated from "../components/SectionTitleAnimated";

const links = [
  {
    href: "mailto:ashfarmerch@gmail.com",
    label: "ashfarmerch@gmail.com",
    icon: "/Logos/gmail.png",
    alt: "Email",
    iconClass: "h-10 w-10",
    external: false,
    isEmail: true,
  },
  {
    href: "https://www.linkedin.com/in/charlie-ash-farmer-3b1a71173",
    label: "LinkedIn Profile",
    icon: "/Logos/linkedin.png",
    alt: "LinkedIn",
    iconClass: "h-8 w-8",
    external: true,
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
  const [copied, setCopied] = useState(false);

  const handleCopy = (e, email) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className={`min-h-[80vh] flex flex-col justify-center py-20 bg-neutral-darkest ${className}`}
    >
      <div className="container mx-auto px-8 text-center max-w-3xl">
        <SectionTitleAnimated colorClass="text-accent">
          Contact Me
        </SectionTitleAnimated>

        <p className="mt-8 text-lg text-neutral-light leading-relaxed font-montserrat">
          I am actively seeking technical art roles and freelance opportunities.
          Reach out to discuss potential projects or collaborations.
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
              <div className="flex items-center gap-x-2">
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
                {l.isEmail && (
                  <button
                    onClick={(e) => handleCopy(e, l.label)}
                    className="ml-3 px-3 py-2 text-sm whitespace-nowrap text-neutral-light/60 hover:text-accent transition-colors flex items-center justify-center rounded-md bg-neutral-dark border border-neutral-light/20"
                    title="Copy email address"
                    aria-label="Copy email address"
                  >
                    {copied ? "✓" : "Copy Email"}
                  </button>
                )}
              </div>
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
