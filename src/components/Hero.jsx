// src/components/Hero.jsx

import React from "react";
import InteractiveParticles from "./InteractiveParticles";

const Hero = ({ className }) => {
  return (
    // Revert to items-center and add the -translate-y class
    <section
      className={`flex flex-col md:flex-row items-center justify-center -translate-y-20 ${className}`}
    >
      {/* Left Column: Text Content */}
      <div className="container md:w-1/2 px-8 text-left py-16 md:py-0">
        <h1 className="text-5xl md:text-7xl font-playfair tracking-tighter text-foreground">
          Charlie Ash-Farmer
          <br />
          <span className="text-accent font-playfair">Game Developer</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-2xl font-montserrat text-neutral-light">
          Specialising in Unreal Engine Blueprints and C++, I create robust
          gameplay systems, user-friendly player controls and engaging mechanics
          - From prototype to fully finished product. I am also well-versed with
          animation pipelines and 3D asset creation workflows allowing me to
          help ensure seamless integration across every stage of development.
        </p>
      </div>

      {/* Right Column: Particle System */}
      <div className="relative w-full h-[60vh] md:h-screen md:w-1/2">
        <InteractiveParticles />
      </div>
    </section>
  );
};

export default Hero;
