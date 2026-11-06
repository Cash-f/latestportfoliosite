"use client";

import React, { useState } from "react";
import SectionTitleAnimated from "../components/SectionTitleAnimated";
import { motion } from "framer-motion";

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
    label: "LinkedIn",
    icon: "/Logos/linkedin.png",
    alt: "LinkedIn",
    iconClass: "h-8 w-8",
    external: true,
  },
  {
    href: "https://github.com/Cash-f",
    label: "GitHub",
    icon: "/Logos/github.png",
    alt: "GitHub",
    iconClass: "h-8 w-8",
    external: true,
  },
  {
    href: "https://www.artstation.com/charlieash-farmer",
    label: "Artstation",
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
    e.stopPropagation();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className={`relative min-h-[80vh] flex flex-col justify-center py-20  overflow-hidden ${className}`}
    >
      {/* Subtle background glow to break up the flat black */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-8 text-center max-w-4xl relative z-10">
        <SectionTitleAnimated colorClass="text-accent">
          Contact Me
        </SectionTitleAnimated>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-6 mb-16 text-lg text-neutral-light leading-relaxed font-montserrat max-w-2xl mx-auto"
        >
          I am actively seeking technical art roles and freelance opportunities.
          Reach out to discuss potential projects or collaborations.
        </motion.p>

        {/* Card Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {links.map((l, index) => (
            <motion.div
              key={l.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a
                href={l.href}
                {...(l.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group relative flex flex-col items-center justify-center p-8 h-full bg-neutral-dark/30 hover:bg-neutral-dark/60 border border-neutral-light/5 hover:border-accent/30 rounded-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Hover Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col items-center">
                  <div className="h-16 w-16 mb-4 flex items-center justify-center rounded-full bg-background/50 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(var(--accent-rgb),0.2)] transition-all duration-300">
                    <img
                      src={l.icon}
                      alt=""
                      aria-hidden="true"
                      className={l.iconClass}
                    />
                  </div>

                  <span className="text-foreground text-lg md:text-xl font-bold group-hover:text-accent transition-colors duration-300 font-montserrat">
                    {l.label}
                    <span className="sr-only"> ({l.alt})</span>
                  </span>

                  {l.isEmail && (
                    <button
                      onClick={(e) => handleCopy(e, l.label)}
                      className={`mt-4 px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300 border ${
                        copied
                          ? "bg-accent/20 text-accent border-accent/40"
                          : "bg-background/50 text-neutral-light/70 border-neutral-light/10 hover:text-foreground hover:border-neutral-light/30"
                      }`}
                      title="Copy email address"
                      aria-label="Copy email address"
                    >
                      {copied ? "Copied to clipboard!" : "Copy Email"}
                    </button>
                  )}
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      <footer className="relative z-10 mt-32 text-center text-sm text-neutral-light/40 font-montserrat">
        <div className="w-24 h-px bg-neutral-light/10 mx-auto mb-6" />©{" "}
        {new Date().getFullYear()} Charlie Ash-Farmer. All rights reserved.
      </footer>
    </section>
  );
};

export default Contact;
