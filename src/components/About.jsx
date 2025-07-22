"use client";

import React from "react";
import SectionTitleAnimated from "@/components/SectionTitleAnimated";

const About = ({ className }) => {
  return (
    <section id="about" className={`py-20 ${className}`}>
      <div className="container mx-auto px-8 text-center max-w-4xl">
        <SectionTitleAnimated colorClass="text-orange-500">
          About Me
        </SectionTitleAnimated>

        <p className="mt-8 text-lg text-gray-300 leading-relaxed font-montserrat">
          Hello! I'm Charlie Ash-Farmer, Placeholder.
        </p>
        <p className="mt-4 text-lg text-gray-300 leading-relaxed font-montserrat">
          Placeholder.
        </p>
        <p className="mt-4 text-lg text-gray-300 leading-relaxed font-montserrat">
          Placeholder.
        </p>
      </div>
    </section>
  );
};

export default About;
