"use client";

import React, { useState } from "react";
import ShaderField from "./ShaderField";
import ProjectModal from "./ProjectModal";
import { CHUNKS } from "./shaderSource";

// Reuses ProjectModal + CodeBlock: the shader is presented like any project.
const shaderProject = {
  title: "Hero Shader",
  role: "Fragment shader · GLSL ES 3.00 · WebGL2",
  tech: ["GLSL", "WebGL2", "fbm noise", "Domain warping", "fwidth AA"],
  longDescription:
    "The visual beside the headline is a single full-screen quad running a fragment shader: domain-warped noise becomes a height field, drawn as anti-aliased contour lines. This is the exact source being compiled right now, not a copy.",
  features: [
    "1 draw call, 0 textures, no models",
    "Pauses when off-screen or when the tab is hidden",
    "Static frame under reduced-motion preferences",
    "Resolution capped at 1.5x device pixel ratio",
  ],
  codeSnippets: CHUNKS.map(({ explanation, code }) => ({
    explanation,
    code,
    language: "glsl",
  })),
};

const Hero = ({ className = "", onModalToggle }) => {
  const [showSource, setShowSource] = useState(false);

  const openSource = () => {
    setShowSource(true);
    if (onModalToggle) onModalToggle(true);
  };
  const closeSource = () => {
    setShowSource(false);
    if (onModalToggle) onModalToggle(false);
  };

  return (
    <section
      id="hero"
      className={`relative min-h-screen flex items-center ${className}`}
    >
      {/*
        Same container as the other sections, so the headline lines up with
        everything below it. Both columns are centred on one shared axis.
      */}
      <div className="container mx-auto w-full px-8 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="md:w-1/2 text-center md:text-left pt-24 md:pt-0">
          <h1 className="text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl font-playfair tracking-tighter text-foreground">
            Charlie Ash-Farmer
            <br />
            <span className="text-accent font-playfair">Technical Artist</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-xl font-montserrat text-neutral-light mx-auto md:mx-0">
            I specialize in shaders, procedural content generation, and scene
            optimization to build beautiful, highly-performant worlds.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="/all-projects"
              className="bg-accent hover:bg-accent-hover text-foreground font-bold text-sm tracking-wider uppercase py-3 px-8 rounded-full transition-colors duration-300 shadow-lg"
            >
              View Projects
            </a>
            {/* Put your CV at /public/CV.pdf (or change the href) */}
            <a
              href="/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-accent/50 text-accent hover:bg-accent/10 font-bold text-sm tracking-wider uppercase py-3 px-8 rounded-full transition-colors duration-300"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="relative w-full md:w-1/2 h-[45vh] md:h-[70vh]">
          <ShaderField />
          <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 flex flex-col items-end gap-2">
            <p className="text-[10px] md:text-xs font-geist-mono text-neutral-lighter/70 tracking-wide text-right pointer-events-none">
              Live fragment shader · domain-warped fbm → iso-contours
              <br />1 draw call · 0 textures · move your cursor
            </p>
            <button
              type="button"
              onClick={openSource}
              className="font-geist-mono text-xs text-accent border border-accent/40 hover:bg-accent/10 hover:border-accent rounded-full px-4 py-1.5 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {"</>"} View GLSL source
            </button>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#work"
        aria-label="Scroll to featured work"
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-neutral-lighter hover:text-accent transition-colors"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="block w-px h-8 bg-current animate-bounce" />
      </a>

      <ProjectModal
        project={shaderProject}
        isOpen={showSource}
        onClose={closeSource}
      />
    </section>
  );
};

export default Hero;
