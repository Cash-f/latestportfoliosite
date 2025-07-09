// src/components/Features.js
'use client';

import React, { useState } from 'react';

import ScrollFloat from '@/blocks/TextAnimations/ScrollFloat/ScrollFloat'; 
import ProjectModal from './ProjectModal'; 

// A single Project Card component for cleanliness
const ProjectCard = ({ project, onClick }) => {
  return (
    <div
      onClick={() => onClick(project)}
      className="group block bg-gray-800 rounded-lg overflow-hidden border-2 border-transparent hover:border-orange-500 transition-all duration-300 cursor-pointer"
    >
      {/* Project Image */}
      <div className="overflow-hidden">
        <img
          src={project.imageUrl}
          alt={`Screenshot of ${project.title}`}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content Area */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>

        {/* Your Role */}
        <p className="text-orange-400 font-semibold mb-4">{project.role}</p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2">
          {project.tech && project.tech.map((item) => (
            <span key={item} className="bg-gray-700 text-gray-300 text-xs font-semibold px-3 py-1 rounded-full">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Project Cyberscape",
      role: "Lead Gameplay Programmer",
      tech: ["Unity", "C#", "HLSL", "Photon"],
      imageUrl: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      longDescription: "A fast-paced multiplayer arena shooter set in a dystopian future. Developed with Unity, focusing on responsive controls and network synchronization. Implemented custom shader effects for unique visual feedback.",
      features: [
        "Real-time multiplayer with Photon PUN 2.",
        "Customizable character loadouts and abilities.",
        "Dynamic environment destruction.",
        "Procedural level generation for unique matches."
      ],
      challenges: "Synchronizing fast-moving projectiles and player states across a network with minimal latency was a significant challenge. We utilized client-side prediction and server reconciliation to achieve a smooth player experience.",
      links: [
        { text: "View GitHub", url: "https://github.com/yourusername/cyberscape" },
        { text: "Watch Trailer", url: "https://youtube.com/yourtrailer" }
      ]
    },
    {
      title: "Pixel Raiders",
      role: "Solo Developer",
      tech: ["Godot", "GDScript", "Aseprite"],
      imageUrl: "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      longDescription: "A retro-style 2D platformer with rogue-like elements. Explored procedural generation for levels and item drops. All art assets created using Aseprite.",
      features: [
        "Procedural level generation.",
        "Randomized item and enemy spawns.",
        "Challenging boss battles with unique mechanics.",
        "Dynamic pixel art animations."
      ],
      challenges: "Balancing difficulty with progression in a rogue-like was tricky. Iterative design and extensive playtesting were key to finding the sweet spot, ensuring replayability without feeling unfair.",
      links: [
        { text: "Play Demo", url: "https://yourgame.itch.io/pixelraiders" }
      ]
    },
    {
      title: "Aetheria Chronicles",
      role: "UI/UX & Systems Designer",
      tech: ["Unreal Engine", "Blueprints", "C++"],
      imageUrl: "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      longDescription: "A narrative-driven RPG focusing on player choice and immersive world-building. My role involved designing intuitive user interfaces and robust gameplay systems within Unreal Engine.",
      features: [
        "Branching dialogue and quest systems.",
        "Modular inventory and crafting UI.",
        "Dynamic character ability trees.",
        "Integration of C++ for performance-critical systems."
      ],
      challenges: "Creating a highly modular UI system in Unreal Engine, allowing designers to easily create new screens without programmer intervention, required careful planning of UMG widgets and data structures.",
      links: []
    }
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
    <section id="projects" className="py-20">
      <div className="container mx-auto px-8">
        {/* Replace ScrollReveal with ScrollFloat */}
        <ScrollFloat
          containerClassName="text-center mb-12"
          textClassName="text-4xl md:text-5xl font-bold text-white font-montserrat"
          // Optional: Customize ScrollFloat specific props here
          // animationDuration={1.2}
          // ease="power3.out"
          // scrollStart="top center"
          // scrollEnd="bottom top"
          // stagger={0.08}
        >
          Recent Projects
        </ScrollFloat>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onClick={openModal}
            />
          ))}
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