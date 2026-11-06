// src/components/Features.jsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import SectionTitleAnimated from "./SectionTitleAnimated";

export default function Features({
  className = "",
  onModalToggle,
  allProjects = [],
}) {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    if (onModalToggle) onModalToggle(true);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    if (onModalToggle) onModalToggle(false);
  };

  // Prefer projects flagged `featured: true`; fall back to the first 3
  // so the homepage is never empty before you add the flag.
  const flagged = allProjects.filter((p) => p.featured);
  const featuredProjects = (flagged.length ? flagged : allProjects).slice(0, 3);

  return (
    <section
      id="work"
      className={`relative min-h-screen flex flex-col justify-center py-20 ${className}`}
    >
      <div className="container mx-auto px-8">
        <SectionTitleAnimated colorClass="text-accent">
          Featured Projects
        </SectionTitleAnimated>
        <p className="text-center text-neutral-light max-w-2xl mx-auto -mt-8 mb-12">
          A selection of my latest projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => handleOpenModal(project)}
            />
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <Link
            href="/all-projects"
            className="bg-accent hover:bg-accent-hover text-foreground font-bold py-3 px-8 rounded-md transition-colors duration-300 shadow-lg"
          >
            View Full Project Archive
          </Link>
        </div>
      </div>

      <a
        href="#proficiency"
        aria-label="Scroll to Toolkit section"
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2
    flex-col items-center gap-3 group text-neutral-lighter/50
    hover:text-accent transition-colors duration-500"
      >
        <span
          className="text-[12px] uppercase tracking-[0.35em]
      font-montserrat group-hover:tracking-[0.5em]
      transition-all duration-500"
        >
          Toolkit
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

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
      />
    </section>
  );
}
