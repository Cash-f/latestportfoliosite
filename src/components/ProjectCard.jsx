import React from "react";
import Image from "next/image";

const ProjectCard = ({ project, onClick }) => {
  return (
    <div
      onClick={() => onClick(project)}
      className="group relative flex flex-col bg-card-background rounded-2xl border border-neutral-medium/20 shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_8px_30px_rgba(var(--accent-rgb),0.15)] cursor-pointer h-full"
    >
      {/* Hover Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

      {/* Content Wrapper (z-10 to sit above the gradient) */}
      <div className="relative z-10 flex flex-col h-full">
        <div className="overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={`Screenshot of ${project.title}`}
            width={600}
            height={400}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="p-6 sm:p-8 flex-grow flex flex-col">
          <h3 className="text-2xl font-bold text-foreground mb-2">
            {project.title}
          </h3>
          <p className="text-accent-hover font-semibold mb-4">{project.role}</p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tech.map((item) => (
              <span
                key={item}
                className="bg-neutral-medium/50 border border-white/5 text-neutral-light text-xs font-semibold px-3 py-1 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
