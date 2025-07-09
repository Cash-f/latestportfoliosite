'use client'; 

import React from 'react';

import ScrollFloat from '@/blocks/TextAnimations/ScrollFloat/ScrollFloat';
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-8 text-center max-w-4xl">
        
        <ScrollFloat
          containerClassName="mb-12"
          textClassName="text-4xl md:text-5xl font-bold text-orange-500 font-playfair"
          
        >
          About Me
        </ScrollFloat>

        <p className="mt-8 text-lg text-gray-300 leading-relaxed font-montserrat">
          Hello! I'm Charlie Ash-Farmer, a dedicated Game Developer specializing in bringing interactive experiences to life. My journey in game development has equipped me with a strong foundation in both technical implementation and creative problem-solving.
        </p>
        <p className="mt-4 text-lg text-gray-300 leading-relaxed font-montserrat">
          I thrive on the challenges of creating robust gameplay systems, intuitive player controls, and engaging mechanics. My expertise lies primarily in Unreal Engine, where I leverage both Blueprints for rapid prototyping and C++ for performance-critical systems.
        </p>
        <p className="mt-4 text-lg text-gray-300 leading-relaxed font-montserrat">
          Beyond programming, I'm well-versed in animation pipelines and 3D asset creation workflows, allowing me to contribute effectively across various stages of development and ensure seamless integration of all game elements. I'm passionate about continuous learning and always looking for new ways to push the boundaries of interactive entertainment.
        </p>

        <div className="mt-10">
          <a
            href="/path/to/your/resume.pdf"
            download
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-md transition-colors duration-300 font-montserrat"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;