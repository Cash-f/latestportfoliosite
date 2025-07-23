"use client";
import Header from "@/components/Header";
import React, { useState } from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import About from "../components/About";
import Contact from "../components/Contact";
import Proficiency from "@/components/Proficiency";

export default function HomePage() {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  const handleProjectModalToggle = (isOpen) => {
    setIsProjectModalOpen(isOpen);
  };

  return (
    <main>
      <Header hideOnModal={isProjectModalOpen} />

      <Hero className="min-h-screen snap-start flex flex-col justify-center pt-28" />

      <About className="min-h-screen snap-start flex flex-col justify-center" />

      <Proficiency className="min-h-screen snap-start flex flex-col justify-center" />

      <Features
        className="min-h-screen snap-start flex flex-col justify-center"
        onModalToggle={handleProjectModalToggle}
      />

      <Contact className="min-h-screen snap-start flex flex-col justify-center" />
    </main>
  );
}
