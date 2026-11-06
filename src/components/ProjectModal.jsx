"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ModelViewer from "./ModelViewer";
import CodeBlock from "./CodeBlock";

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

const ProjectModal = ({ project, onClose, isOpen }) => {
  const dialogRef = useRef(null);
  const closeBtnRef = useRef(null);
  const lastFocused = useRef(null);

  // Parents clear `project` on close, which used to unmount the modal before
  // its exit animation could play. Remember the last project so it can fade out.
  const lastProject = useRef(project);
  if (project) lastProject.current = project;
  const data = project || lastProject.current;

  // Lock page scroll while open. The page scrolls inside #scroll-root (see
  // layout.js), so that is what must be locked; body/html are kept as a fallback.
  useEffect(() => {
    if (!isOpen) return;
    const targets = [
      document.getElementById("scroll-root"),
      document.documentElement,
      document.body,
    ].filter(Boolean);
    const previous = targets.map((el) => el.style.overflow);
    targets.forEach((el) => {
      el.style.overflow = "hidden";
    });
    return () => {
      targets.forEach((el, i) => {
        el.style.overflow = previous[i];
      });
    };
  }, [isOpen]);

  // Move focus into the dialog on open, return it to the card on close.
  useEffect(() => {
    if (!isOpen) return;
    lastFocused.current = document.activeElement;
    const t = setTimeout(() => closeBtnRef.current?.focus(), 50);
    return () => {
      clearTimeout(t);
      lastFocused.current?.focus?.();
    };
  }, [isOpen]);

  // Escape to close + keep Tab focus inside the dialog.
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;
      const nodes = dialogRef.current.querySelectorAll(FOCUSABLE);
      if (!nodes.length) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  if (!data) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden="true"
            className="absolute inset-0 bg-neutral-darkest backdrop-blur-sm"
          ></motion.div>

          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
            exit={{ y: "100vh", opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            // MATCHED STYLES HERE:
            className="relative bg-card-background border border-neutral-medium/20 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.5)] w-full max-w-3xl max-h-[90vh] overflow-y-auto overscroll-contain z-10 p-6 sm:p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-neutral-medium [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-accent"
          >
            {/* Optional: Add the same subtle gradient to the modal background */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-50 pointer-events-none z-0" />

            {/* Wrap your existing close button and modal content in a relative z-10 div */}
            <div className="relative z-10">
              <button
                ref={closeBtnRef}
                onClick={onClose}
                className="absolute -top-2 -right-2 w-10 h-10 flex items-center justify-center rounded-full bg-neutral-dark/50 text-neutral-lighter hover:text-foreground text-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors"
                aria-label="Close modal"
              >
                <span aria-hidden="true">×</span>
              </button>

              {/* --- PRIMARY IMAGE --- */}
              {data.imageUrl && (
                <div className="mb-6 overflow-hidden rounded-md">
                  <Image
                    src={data.imageUrl}
                    alt={data.title}
                    width={800}
                    height={450}
                    className="w-full h-auto max-h-80 object-cover"
                  />
                </div>
              )}

              <h2
                id="project-modal-title"
                className="text-4xl md:text-5xl font-bold text-accent mb-2 font-playfair"
              >
                {data.title}
              </h2>

              <p className="text-accent-hover font-semibold mb-4 text-lg">
                {data.role}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {data.tech &&
                  data.tech.map((item) => (
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
                    {data.longDescription ||
                      "No detailed description available."}
                  </p>
                </section>

                {/* --- TECHNICAL BREAKDOWN GALLERY (IMAGE 2 & 3) --- */}
                {(data.image2Url || data.image3Url) && (
                  <section className="space-y-4 pt-4 border-t border-neutral-medium">
                    <h3 className="text-xl font-bold text-foreground">
                      Technical Breakdown:
                    </h3>
                    <div className="flex flex-col gap-6">
                      {data.image2Url && (
                        <div className="space-y-2">
                          <Image
                            src={data.image2Url}
                            alt={
                              data.image2Subtitle ||
                              `${data.title} technical breakdown`
                            }
                            width={800}
                            height={450}
                            className="rounded-md border border-neutral-medium object-cover w-full h-48"
                          />
                          {data.image2Subtitle && (
                            <p className="text-xs text-neutral-lighter italic">
                              {data.image2Subtitle}
                            </p>
                          )}
                        </div>
                      )}
                      {data.image3Url && (
                        <div className="space-y-2">
                          <Image
                            src={data.image3Url}
                            alt={
                              data.image3Subtitle || `${data.title} detail view`
                            }
                            width={800}
                            height={450}
                            className="rounded-md border border-neutral-medium object-cover w-full h-48"
                          />
                          {data.image3Subtitle && (
                            <p className="text-xs text-neutral-lighter italic">
                              {data.image3Subtitle}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </section>
                )}

                {/* Features List */}
                {data.features && (
                  <section>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Key Features:
                    </h3>
                    {Array.isArray(data.features) ? (
                      <ul className="list-disc list-inside space-y-1">
                        {data.features.map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="whitespace-pre-line">{data.features}</p>
                    )}
                  </section>
                )}

                {/* Challenges */}
                {data.challenges && (
                  <section>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Challenges & Solutions:
                    </h3>
                    <p>{data.challenges}</p>
                  </section>
                )}
              </div>

              {/* Optional Extras (Models, Code, etc) */}
              {data.modelUrl && (
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Interactive 3D Model
                  </h3>
                  <ModelViewer modelUrl={data.modelUrl} />
                </div>
              )}

              {data.codeSnippets && (
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Code Spotlight
                  </h3>
                  <CodeBlock snippets={data.codeSnippets} />
                </div>
              )}

              {/* Links Section */}
              {data.links && data.links.length > 0 && (
                <div className="mt-8 flex flex-wrap gap-4">
                  {data.links.map((link) => (
                    <a
                      key={link.url}
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
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
