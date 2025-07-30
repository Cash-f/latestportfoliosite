import React from "react";
import InteractiveParticles from "./InteractiveParticles";

const Hero = ({ className }) => {
  return (
    <section
      className={`flex flex-col md:flex-row items-center justify-center md:-translate-y-10 ${className}`}
    >
      <div className="md:w-1/2 px-8 text-center md:text-left pt-24 md:py-0">
        <h1 className="text-5xl md:text-7xl font-playfair tracking-tighter text-foreground">
          Charlie Ash-Farmer
          <br />
          <span className="text-accent font-playfair">Game Developer</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-2xl font-montserrat text-neutral-light mx-auto md:mx-0">
          Specialising in Unreal Engine Blueprints and C++, I create robust
          gameplay systems, user-friendly player controls and engaging mechanics
          - From prototype to fully finished product. I am also well-versed with
          animation pipelines and 3D asset creation workflows allowing me to
          help ensure seamless integration across every stage of development.
        </p>
      </div>

      <div className="relative w-full h-[50vh] md:h-screen md:w-1/2 -mt-16 md:mt-0">
        <InteractiveParticles />
      </div>
    </section>
  );
};

export default Hero;
