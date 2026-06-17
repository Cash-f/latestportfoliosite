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
    [isOpen, onClose],
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
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-neutral-darkest backdrop-blur-sm"
          ></motion.div>

          {/* Modal Container */}
          <motion.div
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
            exit={{ y: "100vh", opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="relative bg-neutral-dark rounded-lg shadow-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto z-10 p-6 sm:p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-neutral-medium [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-accent"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-neutral-lighter hover:text-foreground text-2xl"
              aria-label="Close modal"
            >
              ×
            </button>

            {/* --- PRIMARY IMAGE --- */}
            {project.imageUrl && (
              <div className="mb-6 overflow-hidden rounded-md">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={800}
                  height={450}
                  className="w-full h-auto max-h-80 object-cover"
                />
              </div>
            )}

            <h2 className="text-4xl md:text-5xl font-bold text-accent mb-2 font-playfair">
              {project.title}
            </h2>

            <p className="text-accent-hover font-semibold mb-4 text-lg">
              {project.role}
            </p>

            {/* Tech Tags */}
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

            {/* --- CONTENT SECTIONS --- */}
            <div className="text-neutral-light leading-relaxed font-montserrat space-y-6">
              <section>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  About the Project:
                </h3>
                <p>
                  {project.longDescription ||
                    "No detailed description available."}
                </p>
              </section>

              {/* --- TECHNICAL BREAKDOWN GALLERY (IMAGE 2 & 3) --- */}
              {(project.image2Url || project.image3Url) && (
                <section className="space-y-4 pt-4 border-t border-neutral-medium">
                  <h3 className="text-xl font-bold text-foreground">
                    Technical Breakdown:
                  </h3>
                  <div className="flex flex-col gap-6">
                    {project.image2Url && (
                      <div className="space-y-2">
                        <Image
                          src={project.image2Url}
                          alt="Technical map breakdown"
                          width={800}
                          height={450}
                          className="rounded-md border border-neutral-medium object-cover w-full h-48"
                        />
                        {project.image2Subtitle && (
                          <p className="text-xs text-neutral-lighter italic">
                            {project.image2Subtitle}
                          </p>
                        )}
                      </div>
                    )}
                    {project.image3Url && (
                      <div className="space-y-2">
                        <Image
                          src={project.image3Url}
                          alt="Graph or detail view"
                          width={800}
                          height={450}
                          className="rounded-md border border-neutral-medium object-cover w-full h-48"
                        />
                        {project.image3Subtitle && (
                          <p className="text-xs text-neutral-lighter italic">
                            {project.image3Subtitle}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </section>
              )}

              {/* Features List */}
              {project.features && (
                <section>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Key Features:
                  </h3>
                  {Array.isArray(project.features) ? (
                    <ul className="list-disc list-inside space-y-1">
                      {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="whitespace-pre-line">{project.features}</p>
                  )}
                </section>
              )}

              {/* Challenges */}
              {project.challenges && (
                <section>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Challenges & Solutions:
                  </h3>
                  <p>{project.challenges}</p>
                </section>
              )}
            </div>

            {/* Optional Extras (Models, Code, etc) */}
            {project.modelUrl && (
              <div className="mt-8">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Interactive 3D Model
                </h3>
                <ModelViewer modelUrl={project.modelUrl} />
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

            {/* Links Section */}
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
                    {link.text || "View Project"}
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
