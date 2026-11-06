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
      className={`min-h-screen flex flex-col justify-center py-20 ${className}`}
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

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
      />
    </section>
  );
}
