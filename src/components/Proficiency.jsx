"use client";

import React from "react";
import SectionTitleAnimated from "../components/SectionTitleAnimated";
import { motion } from "framer-motion";

const softwareTools = [
  {
    name: "Unreal Engine 5",
    icon: "/Logos/white_unreal.png",
    tag: "Engine",
    description:
      "Advanced Blueprints, C++ architecture, shaders, and rendering pipelines.",
  },
  {
    name: "Houdini",
    icon: "/Logos/houdini.png",
    tag: "Procedural",
    description:
      "Procedural content generation (PCG), VEX scripting, and custom tool building.",
  },
  {
    name: "Substance Designer",
    icon: "/Logos/substance-designer.png",
    tag: "Materials",
    description:
      "Procedural material synthesis and node-based texture generation.",
  },
  {
    name: "Gaea",
    icon: "/Logos/gaea.png",
    tag: "Environments",
    description:
      "Advanced procedural terrain generation and erosion simulation.",
  },
  {
    name: "Blender",
    icon: "/Logos/blender.png",
    tag: "3D Pipeline",
    description:
      "3D asset creation, topology optimization, and custom Python tooling.",
  },
  {
    name: "Substance Painter",
    icon: "/Logos/substance-painter.png",
    tag: "Materials",
    description: "High-fidelity texturing and PBR material application.",
  },
  {
    name: "Visual Studio",
    icon: "/Logos/Visual_Studio.png",
    tag: "Development",
    description:
      "Primary IDE for heavy C++ Engine development, profiling, and debugging.",
  },
  {
    name: "Visual Studio Code",
    icon: "/Logos/visual_studio_code.png",
    tag: "Development",
    description:
      "Lightweight editor for Python pipeline scripts, HLSL/GLSL, and web tech.",
  },
  {
    name: "Git / GitHub",
    icon: "/Logos/github.png",
    tag: "Version Control",
    description:
      "Source control and Git LFS management for heavy game assets and collaborative branches.",
  },
];

const Proficiency = ({ className = "" }) => {
  return (
    <section
      id="proficiency"
      className={` relative min-h-screen flex flex-col justify-center py-20 ${className}`}
    >
      <div className="container mx-auto px-8 max-w-6xl">
        <SectionTitleAnimated colorClass="text-accent">
          Toolkit
        </SectionTitleAnimated>

        {/* 9 items = a clean 3x3 grid on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {softwareTools.map((tool, index) => (
            <motion.div
              key={tool.name}
              className="group relative flex flex-col p-8 rounded-2xl bg-card-background border border-neutral-medium/20 shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_8px_30px_rgba(var(--accent-rgb),0.15)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
                ease: "easeOut",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative flex flex-col flex-grow z-10 w-full">
                {/* Header: icon left, text right */}
                <div className="flex items-center w-full mb-4 gap-4">
                  <div className="h-16 w-16 flex-shrink-0 flex items-center justify-center rounded-xl bg-background/50 shadow-inner group-hover:scale-105 transition-transform duration-300 p-3 border border-white/5">
                    <img
                      src={tool.icon}
                      alt=""
                      aria-hidden="true"
                      className="h-full w-full object-contain filter drop-shadow-md"
                    />
                  </div>
                  <div className="flex flex-col items-start text-left">
                    <h3 className="text-lg font-bold text-foreground tracking-wide leading-tight">
                      {tool.name}
                    </h3>
                    <span className="text-xs font-semibold text-accent/80 uppercase tracking-wider mt-1">
                      {tool.tag}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-neutral-light font-montserrat leading-relaxed text-left w-full mt-2">
                  {tool.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <a
        href="#contact"
        aria-label="Scroll to contact section"
        className="hidden md:flex mt-20 absolute bottom-8 left-1/2 -translate-x-1/2
    flex-col items-center gap-3 group text-neutral-lighter/50
    hover:text-accent transition-colors duration-500"
      >
        <span
          className="text-[12px] uppercase tracking-[0.35em]
      font-montserrat group-hover:tracking-[0.5em]
      transition-all duration-500"
        >
          About Me
        </span>

        <span className="relative h-12 w-px overflow-hidden bg-neutral-lighter/20">
          <span
            className="absolute inset-x-0 top-0 h-1/2 bg-accent
        animate-scroll-line"
          />
        </span>

        <span
          className="text-xs opacity-0 -mt-2 group-hover:opacity-100
      group-hover:translate-y-1 transition-all duration-300"
        >
          ↓
        </span>
      </a>
    </section>
  );
};

export default Proficiency;
