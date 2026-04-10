// src/components/Features.jsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import SectionTitleAnimated from "./SectionTitleAnimated"; // Assuming you have this from your other page!

export default function Features({
  className,
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

  // Grab only the first 3 projects to feature on the homepage
  const featuredProjects = allProjects.slice(0, 3);

  return (
    <section className={className}>
      {/* 1. The Container keeps it centered and off the left edge */}
      <div className="container mx-auto px-8">
        {/* 2. Your Titles */}
        <SectionTitleAnimated colorClass="text-accent">
          Featured Work
        </SectionTitleAnimated>
        <p className="text-center text-neutral-light max-w-2xl mx-auto -mt-8 mb-12">
          A selection of my latest 3D art and development projects.
        </p>

        {/* 3. The Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => handleOpenModal(project)}
            />
          ))}
        </div>

        {/* 4. The Link to the Archive Page */}
        <div className="flex justify-center pb-24 md:pb-32 mt-16">
          <Link
            href="/all-projects"
            className="bg-accent hover:bg-accent-hover text-foreground font-bold py-3 px-8 rounded-md transition-colors duration-300 shadow-lg"
          >
            View Full Project Archive
          </Link>
        </div>
      </div>

      {/* The Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
      />
    </section>
  );
}
