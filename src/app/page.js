// src/app/page.js
"use client";
import Header from "@/components/Header";
import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import About from "../components/About";
import Contact from "../components/Contact";
import Proficiency from "@/components/Proficiency";

export default function HomePage() {
  return (
    <main>
      <Header />

      <Hero className="min-h-screen snap-start flex flex-col justify-center" />

      <About className="min-h-screen snap-start flex flex-col justify-center" />

      <Proficiency className="min-h-screen snap-start flex flex-col justify-center" />

      <Features className="min-h-screen snap-start flex flex-col justify-center" />

      <Contact className="min-h-screen snap-start flex flex-col justify-center" />
    </main>
  );
}
