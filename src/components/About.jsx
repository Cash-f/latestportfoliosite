"use client";

import React from "react";
import SectionTitleAnimated from "../components/SectionTitleAnimated";
import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2026",
    title: "Team Leadership & Production",
    description:
      "Acting as Project Lead for a collaborative university project, managing agile workflows, version control (Gitflow), and cross-disciplinary communication.",
    tech: ["Project Management", "Jira & Trello", "Leadership"],
  },
  {
    year: "2025",
    title: "Advanced 3D Art & Scripting",
    description:
      "Developing high-fidelity hero assets, complex hard-surface topology, and technical scripting to support scalable gameplay systems.",
    tech: ["Hard Surface Modelling", "C# Scripting", "Technical Art"],
  },
  {
    year: "2024",
    title: "Game Development at UCNL",
    // TODO: replace with what you actually built/learned (named project, pipeline, result)
    description: "Learning professional workflows and theoretical knowledge",
    tech: ["Academic Studies", "Teamwork"],
  },
  {
    year: "2023",
    title: "3D Art & Programming Integration",
    description:
      "Bridged the gap between asset creation in Blender and engine implementation, focusing on custom shaders and pipeline optimization.",
    tech: ["Blender", "C++", "Shaders"],
  },
  {
    year: "2022",
    title: "Unreal Engine Solo Project",
    description:
      "Architected a large-scale solo project to master the full scope of game production, rendering pipelines, and Blueprint logic.",
    tech: ["Unreal Engine 5", "Blueprints"],
  },
];

const About = ({ className = "" }) => {
  return (
    <section
      id="about"
      className={`min-h-screen flex flex-col pt-[10.5rem] pb-12 relative overflow-hidden ${className}`}
    >
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />

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
              My background spans both 3D asset pipelines and systems
              programming, allowing me to author complex shaders, develop
              procedural generation tools, and profile scenes for strict
              performance targets.
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

                <p className="text-neutral-light text-lg mb-4 max-w-2xl">
                  {item.description}
                </p>

                {item.tech && (
                  <div className="flex gap-2 flex-wrap">
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
    </section>
  );
};

export default About;
