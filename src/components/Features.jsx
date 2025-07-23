"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SectionTitleAnimated from "@/components/SectionTitleAnimated";
import ProjectModal from "./ProjectModal";
import ProjectCard from "./ProjectCard";
import { allProjects } from "@/data/projectsData";

const featuredProjects = allProjects.slice(0, 3); // Get first 3 projects to feature

const Features = ({ className, onModalToggle }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (onModalToggle) {
      onModalToggle(isModalOpen);
    }
  }, [isModalOpen, onModalToggle]);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className={`py-20 ${className}`}>
      <div className="container mx-auto px-8">
        <SectionTitleAnimated colorClass="text-accent">
          Recent Projects
        </SectionTitleAnimated>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard project={project} onClick={openModal} />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/all-projects"
            className="inline-block bg-accent hover:bg-accent-hover text-foreground font-bold font-montserrat py-3 px-8 rounded-md transition-colors duration-300"
          >
            View More Projects
          </a>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default Features;
