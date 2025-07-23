import React from "react";
import Image from "next/image";

const ProjectCard = ({ project, onClick }) => {
  return (
    <div
      onClick={() => onClick(project)}
      className="group block bg-card-background rounded-lg overflow-hidden border-2 border-transparent hover:border-accent transition-all duration-300 cursor-pointer h-full"
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
          {project.tech.map((item) => (
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

export default ProjectCard;
