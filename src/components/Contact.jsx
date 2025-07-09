'use client'; 

import React from 'react';

import ScrollFloat from '@/blocks/TextAnimations/ScrollFloat/ScrollFloat';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-8 text-center max-w-3xl">
        
        <ScrollFloat
          containerClassName="mb-12"
          textClassName="text-4xl md:text-5xl font-bold text-white font-playfair"
          
        >
          Get in Touch
        </ScrollFloat>

        <p className="mt-8 text-lg text-gray-300 leading-relaxed font-montserrat">
          I'm always open to new opportunities, collaborations, and conversations. Whether you have a project in mind, a question, or just want to connect, feel free to reach out!
        </p>

        <div className="mt-10 space-y-6">
          <div className="flex items-center justify-center gap-x-4">
            <span className="text-orange-500 text-3xl">📧</span>
            <a
              href="mailto:your.email@example.com"
              className="text-white text-xl md:text-2xl font-bold hover:text-orange-400 transition-colors duration-300 font-montserrat"
            >
              your.email@example.com
            </a>
          </div>

          <div className="flex items-center justify-center gap-x-4">
            <span className="text-orange-500 text-3xl">🔗</span>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl md:text-2xl font-bold hover:text-orange-400 transition-colors duration-300 font-montserrat"
            >
              LinkedIn Profile
            </a>
          </div>

          <div className="flex items-center justify-center gap-x-4">
            <span className="text-orange-500 text-3xl">💻</span>
            <a
              href="https://github.com/yourusername"
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