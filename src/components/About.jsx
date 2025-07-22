'use client'; 

import React from 'react';

import ScrollFloat from '@/blocks/TextAnimations/ScrollFloat/ScrollFloat';
const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-8 text-center max-w-4xl">
        
        <ScrollFloat
          containerClassName="mb-12"
          textClassName="text-4xl md:text-5xl font-bold text-orange-500 font-playfair"
          
        >
          About Me
        </ScrollFloat>

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