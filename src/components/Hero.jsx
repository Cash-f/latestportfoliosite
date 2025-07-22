import React from "react";

const Hero = ({ className }) => {
  return (
    <section className={`py-32 sm:py-40 ${className}`}>
      {" "}
      <div className="container mx-auto px-8 text-left">
        <h1 className="text-5xl md:text-7xl font-playfair tracking-tighter text-white">
          Charlie Ash-Farmer
          <br />
          <span className="text-orange-500 font-playfair">Game Developer</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl max-w-2xl font-montserrat text-gray-300">
          Specialising in Unreal Engine Blueprints and C++, I create robust
          gameplay systems, user-friendly player controls and engaging mechanics
          - From prototype to fully finished product. I am also well-versed with
          animation pipelines and 3D asset creation workflows allowing me to
          help ensure seamless integration across every stage of development.
        </p>

        <div className="mt-10 flex items-center gap-x-6">
          <a
            href="#projects"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold font-montserrat py-3 px-8 rounded-md transition-colors duration-300"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
