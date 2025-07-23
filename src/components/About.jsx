"use client";

import React from "react";
import SectionTitleAnimated from "@/components/SectionTitleAnimated";

const About = ({ className }) => {
  return (
    <section id="about" className={`py-20 ${className}`}>
      <div className="container mx-auto px-8 text-center max-w-4xl">
        <SectionTitleAnimated colorClass="text-accent">
          About Me
        </SectionTitleAnimated>

        <p className="mt-8 text-lg text-neutral-light leading-relaxed font-montserrat">
          For as long as I can remember, games have been a central part of my
          life, evolving from pure enjoyment into a deep curiosity about their
          inner workings. This fascination eventually led me to take the leap
          and pursue a Game Development course at UCNL. That decision was
          pivotal, profoundly enhancing my understanding and hands-on
          proficiency in the field.
        </p>
        <p className="mt-4 text-lg text-neutral-light leading-relaxed font-montserrat">
          My journey has been driven by a desire to contribute to the
          interactive experiences I've always loved. I thrive on problem-solving
          and the creative challenges inherent in game development, constantly
          seeking new ways to bring ideas to life. I am committed to continuous
          learning and always eager to explore what's next in interactive
          entertainmen
        </p>
      </div>
    </section>
  );
};

export default About;
