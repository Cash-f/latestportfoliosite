"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import SectionTitleAnimated from "@/components/SectionTitleAnimated";
import ProjectModal from "./ProjectModal";
import { motion } from "framer-motion";

const ProjectCard = ({ project, onClick }) => {
  return (
    <div
      onClick={() => onClick(project)}
      className="group block bg-card-background rounded-lg overflow-hidden border-2 border-transparent hover:border-accent transition-all duration-300 cursor-pointer"
    >
      <div className="overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={`Screenshot of ${project.title}`}
          width={600}
          height={400}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-foreground mb-2">
          {project.title}
        </h3>

        <p className="text-accent-hover font-semibold mb-4">{project.role}</p>

        <div className="flex flex-wrap gap-2">
          {project.tech &&
            project.tech.map((item) => (
              <span
                key={item}
                className="bg-neutral-medium text-neutral-light text-xs font-semibold px-3 py-1 rounded-full"
              >
                {item}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

const Features = ({ className, onModalToggle }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (onModalToggle) {
      onModalToggle(isModalOpen);
    }
  }, [isModalOpen, onModalToggle]);

  const projects = [
    {
      title: "Enviroment Design",
      role: "Solo Developer",
      tech: [
        "Blender",
        "Substance-Designer",
        "Substance-Painter",
        "Unreal Engine",
      ],

      imageUrl: "/Renders_Wireframes/BeachCampfire.png",
      longDescription:
        "A fast-paced multiplayer arena shooter set in a dystopian future. Developed with Unity, focusing on responsive controls and network synchronization. Implemented custom shader effects for unique visual feedback.",
      features: [
        "Real-time multiplayer with Photon PUN 2.",
        "Customizable character loadouts and abilities.",
        "Dynamic environment destruction.",
        "Procedural level generation for unique matches.",
      ],
      challenges:
        "Synchronizing fast-moving projectiles and player states across a network with minimal latency was a significant challenge. We utilized client-side prediction and server reconciliation to achieve a smooth player experience.",
      links: [
        {
          text: "View GitHub",
          url: "https://github.com/yourusername/cyberscape",
        },
        { text: "Watch Trailer", url: "https://youtube.com/yourtrailer" },
      ],
    },
    {
      title: "Detailed 'Hero' Prop Creation",
      role: "Solo Developer",
      tech: [
        "Blender",
        "Substance-Designer",
        "Substance-Painter",
        "Unreal Engine",
      ],

      imageUrl: "/Renders_Wireframes/image.png",
      longDescription:
        "A retro-style 2D platformer with rogue-like elements. Explored procedural generation for levels and item drops. All art assets created using Aseprite.",
      features: [
        "Procedural level generation.",
        "Randomized item and enemy spawns.",
        "Challenging boss battles with unique mechanics.",
        "Dynamic pixel art animations.",
      ],
      challenges:
        "Balancing difficulty with progression in a rogue-like was tricky. Iterative design and extensive playtesting were key to finding the sweet spot, ensuring replayability without feeling unfair.",
      links: [
        { text: "Play Demo", url: "https://yourgame.itch.io/pixelraiders" },
      ],
    },
    {
      title: "Advanced Weapon System",
      role: "Solo Developer",
      tech: ["Unreal Engine", "Blueprints", "C++"],

      imageUrl: "/Renders_Wireframes/ZombieWaveGampeplayExample.png",
      longDescription:
        "A narrative-driven RPG focusing on player choice and immersive world-building. My role involved designing intuitive user interfaces and robust gameplay systems within Unreal Engine.",
      features: [
        "Branching dialogue and quest systems.",
        "Modular inventory and crafting UI.",
        "Dynamic character ability trees.",
        "Integration of C++ for performance-critical systems.",
      ],
      challenges:
        "Creating a highly modular UI system in Unreal Engine, allowing designers to easily create new screens without programmer intervention, required careful planning of UMG widgets and data structures.",
      links: [],
    },
  ];

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
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
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
          <p className="text-lg text-neutral-light font-montserrat">
            Interested in more details about my projects? Click on any project
            card to learn more!
          </p>
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
