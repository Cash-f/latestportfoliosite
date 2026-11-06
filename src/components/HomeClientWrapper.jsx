"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Proficiency from "@/components/Proficiency";

/*
  Each section is sized and snapped HERE, so it behaves the same whether a
  component has its own min-h-screen or not. Duplicate classes are harmless.
  This is your original snapping setup, just with the sections reordered.
*/
export default function HomeClientWrapper({ allProjects = [] }) {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  const handleProjectModalToggle = (isOpen) => {
    setIsProjectModalOpen(isOpen);
  };

  return (
    <main>
      <Header hideOnModal={isProjectModalOpen} />

      <Hero
        className="min-h-screen snap-start flex flex-col md:flex-row items-center justify-center"
        onModalToggle={handleProjectModalToggle}
      />

      <Features
        className="min-h-screen snap-start scroll-mb-24 flex flex-col justify-center"
        onModalToggle={handleProjectModalToggle}
        allProjects={allProjects}
      />

      <Proficiency className="min-h-screen snap-start flex flex-col justify-center" />

      {/* No justify-center so the tall timeline starts at the top */}
      <About className="min-h-screen snap-start flex flex-col pt-42 pb-12" />

      <Contact className="min-h-screen snap-start flex flex-col justify-center" />
    </main>
  );
}
