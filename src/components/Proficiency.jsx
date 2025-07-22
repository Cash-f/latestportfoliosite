"use client";

import React from "react";
import SectionTitleAnimated from "@/components/SectionTitleAnimated";
import { motion } from "framer-motion";

const softwareTools = [
  {
    name: "Unreal Engine",
    icon: "/Logos/white_unreal.png",
    description: "Advanced Blueprints & C++ for game logic, UI, and systems.",
    proficiency: 95,
  },
  {
    name: "Unity 3D",
    icon: "/Logos/unity.png",
    description: "C# scripting for gameplay, VR/AR development, and mobile.",
    proficiency: 75,
  },
  {
    name: "Blender",
    icon: "/Logos/blender.png",
    description: "3D modeling, sculpting, rigging, animation, and rendering.",
    proficiency: 90,
  },
  {
    name: "Substance Painter",
    icon: "/Logos/substance-painter.png",
    description: "Texturing and material creation for 3D assets.",
    proficiency: 85,
  },
  {
    name: "Substance Designer",
    icon: "/Logos/substance-designer.png",
    description: "Material synthesis for 3D assets.",
    proficiency: 50,
  },
  {
    name: "Maya",
    icon: "/Logos/maya.png",
    description: "3D animation, modeling, simulation, and rendering.",
    proficiency: 70,
  },
  {
    name: "Photoshop",
    icon: "/Logos/photoshop1.png",
    description: "Image manipulation, concept art, and UI design.",
    proficiency: 80,
  },
  {
    name: "Git / GitHub",
    icon: "/Logos/github.png",
    description: "Version control for collaborative development.",
    proficiency: 90,
  },
  {
    name: "Visual Studio",
    icon: "/Logos/Visual_Studio.png",
    description: "IDE for C++ and C# development.",
    proficiency: 60,
  },
  {
    name: "Visual Studio Code",
    icon: "/Logos/visual_studio_code.png",
    description: "Lightweight code editor with extensive plugin support.",
    proficiency: 95,
  },
];

const Proficiency = ({ className }) => {
  return (
    <section id="proficiency" className={`py-20 ${className}`}>
      <div className="container mx-auto px-8 text-center">
        <SectionTitleAnimated colorClass="text-orange-500">
          My Toolset
        </SectionTitleAnimated>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mt-10">
          {softwareTools.map((tool, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-6 bg-black rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-full justify-between"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex flex-col items-center flex-grow text-center mb-4">
                <img
                  src={tool.icon}
                  alt={`${tool.name} Logo`}
                  className="h-16 w-16 mb-4 object-contain"
                />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {tool.name}
                </h3>
                <p className="text-sm text-gray-400 font-montserrat">
                  {tool.description}
                </p>
              </div>

              <div className="w-full">
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    className="bg-orange-500 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tool.proficiency}%` }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 1.5,
                      delay: index * 0.1 + 0.3,
                      ease: "easeOut",
                    }}
                  ></motion.div>
                </div>
                <span className="text-xs text-gray-400 mt-1">
                  {tool.proficiency}%
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proficiency;
