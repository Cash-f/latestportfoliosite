"use client";

import React from "react";
import SectionTitleAnimated from "../components/SectionTitleAnimated";
import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2026",
    title: "Team Leadership & Production",
    bullets: [
      "Acted as Project Lead for a collaborative university project.",
      "Managed agile workflows and version control using GitDesktop.",
      "Facilitated cross-disciplinary communication all teams.",
    ],
    tech: ["Project Management", "Jira & Trello", "Leadership"],
  },
  {
    year: "2025",
    title: "Advanced 3D Art & Scripting",
    bullets: [
      "Developed high-fidelity hero assets with complex hard-surface topology.",
      "Built technical scripts to support scalable gameplay systems.",
      "Begun exploring LLM workflow integration for procedural content generation.",
    ],
    tech: ["Hard Surface Modelling", "Python Scripting", "Technical Art"],
  },
  {
    year: "2024",
    title: "Game Development at UCNL",
    bullets: [
      "Studied professional workflows and theoretical game design knowledge.",
      "Gained hands-on experience with industry-standard tools and methodologies.",
    ],
    tech: ["Academic Studies", "Teamwork"],
  },
  {
    year: "2023",
    title: "3D Art & Programming Integration",
    bullets: [
      "Bridged the gap between asset creation in Blender and engine implementation.",
      "Authored custom shaders and optimized rendering pipelines.",
    ],
    tech: ["Blender", "C++", "Shaders"],
  },
  {
    year: "2022",
    title: "Unreal Engine Solo Project",
    bullets: [
      "Architected a solo project to understand full-scope game production.",
      "Programmed core logic using Blueprints and managed rendering pipelines.",
    ],
    tech: ["Unreal Engine 5", "Blueprints"],
  },
];

const About = ({ className = "" }) => {
  return (
    <section
      id="about"
      className={` relative min-h-screen flex flex-col pt-[10.5rem] pb-40 overflow-hidden ${className}`}
    >
      <div className="container mx-auto px-8 relative z-10">
        <SectionTitleAnimated colorClass="text-accent">
          About Me
        </SectionTitleAnimated>

        {/* Bio Text Section */}
        <div className="max-w-3xl mx-auto mb-20 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-neutral-light leading-relaxed font-montserrat">
              I am a Technical Artist focused on building the systems that
              empower art teams. By bridging the gap between creative vision and
              hardware constraints, I ensure that high-fidelity assets run
              seamlessly in-engine.
            </p>
            <p className="text-lg text-neutral-light leading-relaxed font-montserrat">
              I enjoy authoring complex shaders, developing procedural
              generation tools, and profiling scenes for strict performance
              targets.
            </p>
          </motion.div>
        </div>

        {/* Vertical scannable timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-neutral-medium/30 ml-4 md:ml-8 space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={`${item.year}-${item.title}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-accent ring-4 ring-background shadow-[0_0_10px_rgba(var(--accent-rgb),0.5)]" />

                <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 mb-3">
                  <h3 className="text-2xl font-bold text-foreground">
                    {item.title}
                  </h3>
                  <span className="text-accent font-bold text-lg md:text-sm">
                    {item.year}
                  </span>
                </div>

                {/* Replaced <p> with a <ul> for bullet points */}
                <ul className="list-disc list-outside ml-5 text-neutral-light text-lg mb-4 max-w-2xl space-y-2 marker:text-accent/70">
                  {item.bullets.map((bullet, i) => (
                    <li key={i} className="pl-2">
                      {bullet}
                    </li>
                  ))}
                </ul>

                {item.tech && (
                  <div className="flex gap-2 flex-wrap mt-4">
                    {item.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full border border-accent/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Que */}
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
          Contact Details
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

export default About;
