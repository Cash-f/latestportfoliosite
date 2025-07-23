"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import SectionTitleAnimated from "@/components/SectionTitleAnimated";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import { allProjects } from "@/data/projectsData";

const categories = ["All", "Unreal Engine", "3D Art", "Web Dev"];

export default function AllProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <>
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-8">
          <SectionTitleAnimated colorClass="text-accent">
            Project Archive
          </SectionTitleAnimated>
          <p className="text-center text-neutral-light max-w-2xl mx-auto -mt-8 mb-12">
            Here's a collection of my work. Use the filters below to navigate
            through different types of projects.
          </p>

          <div className="flex justify-center flex-wrap gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`font-bold py-2 px-5 rounded-md transition-colors duration-300 ${
                  activeCategory === category
                    ? "bg-accent text-foreground"
                    : "bg-card-background hover:bg-neutral-dark"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedProject(project)}
                >
                  <ProjectCard
                    project={project}
                    onClick={() => setSelectedProject(project)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
