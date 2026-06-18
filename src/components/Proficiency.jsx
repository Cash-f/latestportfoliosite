"use client";

import React from "react";
import SectionTitleAnimated from "../components/SectionTitleAnimated";
import { motion } from "framer-motion";

const softwareTools = [
  {
    name: "Unreal Engine",
    icon: "/Logos/white_unreal.png",
    description: "Advanced Blueprints & C++ for game logic, UI, and systems.",
  },
  {
    name: "Blender",
    icon: "/Logos/blender.png",
    description: "3D modeling, sculpting, rigging, animation, and rendering.",
  },
  {
    name: "Substance Painter",
    icon: "/Logos/substance-painter.png",
    description: "Texturing and material creation for 3D assets.",
  },
  {
    name: "Substance Designer",
    icon: "/Logos/substance-designer.png",
    description: "Material synthesis for 3D assets.",
  },
  {
    name: "Git / GitHub",
    icon: "/Logos/github.png",
    description: "Version control for collaborative development.",
  },
  {
    name: "Visual Studio Code",
    icon: "/Logos/visual_studio_code.png",
    description: "Lightweight code editor with extensive plugin support.",
  },
];

const Proficiency = ({ className }) => {
  return (
    <section id="proficiency" className={"py-20 " + className}>
      {/* Added max-w-6xl to keep the grid from stretching too far on ultra-wide screens */}
      <div className="container mx-auto px-8 text-center max-w-6xl">
        <SectionTitleAnimated colorClass="text-accent">
          My Toolset
        </SectionTitleAnimated>

        {/* 
          Grid layout specifically tuned for 6 items:
          Mobile: 1 col | Tablet: 2 cols | Desktop: 3 cols
          This creates a perfect 3x2 layout on desktop with no awkward single items.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {softwareTools.map((tool, index) => (
            <motion.div
              key={index}
              // Added group for hover targets, border, translate hover effect, and softer rounded corners
              className="group relative flex flex-col items-center p-8 rounded-2xl bg-neutral-dark border border-white/5 shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-white/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              {/* Subtle hover background gradient effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative flex flex-col items-center flex-grow text-center z-10">
                {/* New framed background for the icons that scales on hover */}
                <div className="h-20 w-20 mb-6 flex items-center justify-center rounded-xl bg-black/20 shadow-inner group-hover:scale-110 transition-transform duration-500 ease-out p-4">
                  <img
                    src={tool.icon}
                    alt={tool.name + " Logo"}
                    className="h-full w-full object-contain filter drop-shadow-md"
                  />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 tracking-wide">
                  {tool.name}
                </h3>

                <p className="text-sm text-neutral-lighter font-montserrat leading-relaxed">
                  {tool.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proficiency;
