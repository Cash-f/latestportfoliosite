"use client";

import React from "react";
import SectionTitleAnimated from "@/components/SectionTitleAnimated";

const Contact = ({ className }) => {
  return (
    <section id="contact" className={`py-5 bg-black ${className}`}>
      <div className="container mx-auto px-8 text-center max-w-3xl">
        <SectionTitleAnimated colorClass="text-orange-500">
          Contact Me
        </SectionTitleAnimated>

        <p className="mt-8 text-lg text-gray-300 leading-relaxed font-montserrat">
          I'm always open to new opportunities, collaborations, and
          conversations. Whether you have a project in mind, a question, or just
          want to connect, feel free to reach out!
        </p>

        <div className="mt-10 space-y-6">
          <div className="flex items-center justify-center gap-x-4">
            <img
              src="/Logos/email.png"
              alt="Email Logo"
              className="h-10 w-10"
            />
            <a
              href="mailto:ashfarmerch@gmail.com"
              className="text-white text-xl md:text-2xl font-bold hover:text-orange-400 transition-colors duration-300 font-montserrat"
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
              className="text-white text-xl md:text-2xl font-bold hover:text-orange-400 transition-colors duration-300 font-montserrat"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
