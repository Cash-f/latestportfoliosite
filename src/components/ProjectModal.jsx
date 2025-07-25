"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ModelViewer from "./ModelViewer";
import CodeBlock from "./CodeBlock";

const ProjectModal = ({ project, onClose, isOpen }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleEscapeKey = useCallback(
    (event) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    },
    [isOpen, onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [handleEscapeKey]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-neutral-darkest backdrop-blur-sm"
          ></motion.div>

          <motion.div
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
            exit={{ y: "100vh", opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="relative bg-neutral-dark rounded-lg shadow-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto z-10 p-6 sm:p-8"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-neutral-lighter hover:text-foreground text-2xl"
              aria-label="Close modal"
            >
              ×
            </button>

            {project.imageUrl && (
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={800}
                height={450}
                className="w-full h-auto max-h-80 object-cover rounded-md mb-6"
              />
            )}

            <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4 font-playfair">
              {project.title}
            </h2>

            <p className="text-accent-hover font-semibold mb-4 text-lg">
              {project.role}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech &&
                project.tech.map((item) => (
                  <span
                    key={item}
                    className="bg-neutral-medium text-neutral-light text-sm font-semibold px-4 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
            </div>

            <div className="text-neutral-light leading-relaxed font-montserrat space-y-6">
              <p>
                {project.longDescription ||
                  "No detailed description available."}
              </p>

              {project.features && (
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Key Features:
                  </h3>
                  <ul className="list-disc list-inside space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.challenges && (
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Challenges & Solutions:
                  </h3>
                  <p>{project.challenges}</p>
                </div>
              )}
            </div>

            {project.modelUrl && (
              <div className="mt-8">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Interactive 3D Model
                </h3>
                <ModelViewer modelUrl={project.modelUrl} />
              </div>
            )}

            {project.topologyImageUrl && (
              <div className="mt-8">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Topology & Wireframe
                </h3>
                <Image
                  src={project.topologyImageUrl}
                  alt={`${project.title} topology wireframe`}
                  width={1920}
                  height={1080}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            )}

            {project.codeSnippets && (
              <div className="mt-8">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Code Spotlight
                </h3>
                <CodeBlock snippets={project.codeSnippets} />
              </div>
            )}

            {project.links && project.links.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-4">
                {project.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-accent hover:bg-accent-hover text-foreground font-bold py-2 px-6 rounded-md transition-colors duration-300"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
