"use client";

import React, { useState } from "react";
import SectionTitleAnimated from "../components/SectionTitleAnimated";
import { motion, AnimatePresence } from "framer-motion";

const timelineData = [
  {
    year: "2020",
    title: "Started Personal Game Development Studies",
    description:
      "Began my journey learning the basics, diving deep into the fundamentals of the development process.",
    tech: ["Unity", "C# Basics"],
  },
  {
    year: "2022",
    title: "First Major Project",
    description:
      "Began a large solo-project in Unreal Engine, learning the scope of full game production.",
    tech: ["Unreal Engine 5", "Blueprints"],
  },
  {
    year: "2023",
    title: "Specialized in 3D Art and Programming",
    description:
      "Explored the 3D asset pipeline and core programming concepts, bridging the gap between Blender and Game Engines.",
    tech: ["Blender", "C++", "Shaders"],
  },
  {
    year: "2024",
    title: "Began Game Development Course at UCNL",
    description:
      "Enrolled in formal education to enhance professional workflows and theoretical knowledge.",
    tech: ["Academic Studies", "Teamwork"],
  },
  {
    year: "2025",
    title: "Advanced 3D Art & Scripting",
    description:
      "Focused on high-fidelity hero assets, complex hard-surface topology, and technical scripting for gameplay systems.",
    tech: ["Hard Surface Modelling", "C# Scripting", "Technical Art"],
  },
  {
    year: "2026",
    title: "Team Leadership & Production",
    description:
      "Took on the role of Project Lead for our collaborative university project, managing agile workflows and cross-disciplinary teams.",
    tech: ["Project Management", "Jira & Trello", "Gitflow", "Leadership"],
  },
];

const About = ({ className }) => {
  // We use this index for both Mobile (carousel) and Desktop (active point)
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % timelineData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + timelineData.length) % timelineData.length
    );
  };

  return (
    <section
      id="about"
      className={`py-20 relative overflow-hidden ${className}`}
    >
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-8 relative z-10">
        <SectionTitleAnimated colorClass="text-accent">
          About Me
        </SectionTitleAnimated>

        {/* Bio Text Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-neutral-light leading-relaxed font-montserrat">
              For as long as I can remember, games have been a central part of
              my life, evolving from pure enjoyment into a deep curiosity about
              their inner workings. This fascination eventually led me to take
              the leap and pursue a Game Development course at UCNL.
            </p>
            <p className="mt-4 text-lg text-neutral-light leading-relaxed font-montserrat">
              My journey has been driven by a desire to contribute to the
              interactive experiences I've always loved. I thrive on
              problem-solving and the creative challenges inherent in game
              development, constantly seeking new ways to bring ideas to life.
            </p>
          </motion.div>
        </div>

        {/* --- DESKTOP VIEW: Interactive Timeline --- */}
        <div className="hidden md:block mt-20">
          {/* TIMELINE TRACK WRAPPER */}
          <div className="relative mb-12">
            {/* Background Grey Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-neutral-medium/30 -translate-y-1/2 rounded-full z-0"></div>

            {/* Active Orange Line (Progress Bar) */}
            <motion.div
              className="absolute top-1/2 left-0 h-1 bg-accent -translate-y-1/2 rounded-full z-0"
              initial={{ width: "0%" }}
              animate={{
                width: `${(currentIndex / (timelineData.length - 1)) * 100}%`,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />

            {/* The Points (Dots) */}
            <div className="relative flex justify-between items-center w-full z-10">
              {timelineData.map((item, index) => {
                // LOGIC CHANGE: Check if this item is in the past or present
                const isCompleted = index <= currentIndex;
                const isActive = index === currentIndex;

                return (
                  <div key={index} className="relative group">
                    {/* Clickable Dot */}
                    <button
                      onClick={() => setCurrentIndex(index)}
                      className={`relative w-6 h-6 rounded-full border-4 transition-all duration-300 ${
                        isCompleted
                          ? "bg-background border-accent" // Orange for Past & Present
                          : "bg-neutral-medium border-background hover:border-accent" // Grey for Future
                      } ${
                        isActive
                          ? "scale-125 shadow-[0_0_15px_rgba(var(--accent-rgb),0.6)]" // Only Current gets the Glow/Scale
                          : ""
                      }`}
                    />

                    {/* Year Label */}
                    <div
                      className={`absolute top-8 left-1/2 -translate-x-1/2 font-bold text-sm transition-colors duration-300 ${
                        isCompleted ? "text-accent" : "text-neutral-light"
                      }`}
                    >
                      {item.year}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* DESCRIPTION POPUP AREA */}
          <div className="h-48 flex justify-center w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="bg-card-background border border-neutral-medium/30 p-8 rounded-2xl max-w-2xl w-full text-center shadow-xl backdrop-blur-sm"
              >
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {timelineData[currentIndex].title}
                </h3>
                <p className="text-neutral-light text-lg mb-4">
                  {timelineData[currentIndex].description}
                </p>

                {timelineData[currentIndex].tech && (
                  <div className="flex justify-center gap-2 flex-wrap">
                    {timelineData[currentIndex].tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full border border-accent/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* --- MOBILE VIEW: Carousel (Enhanced) --- */}
        <div className="relative md:hidden mt-10">
          <div className="flex items-center justify-center min-h-[300px]">
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-2 z-20 bg-card-background/50 rounded-full backdrop-blur-sm border border-neutral-medium/30 active:scale-95 transition-transform"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-accent"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="flex flex-col items-center text-center w-full px-12"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-6 rounded-xl bg-card-background border border-neutral-medium/30 shadow-lg w-full">
                  <p className="font-bold text-accent text-2xl mb-2">
                    {timelineData[currentIndex].year}
                  </p>
                  <h4 className="font-bold text-foreground text-lg leading-tight mb-3">
                    {timelineData[currentIndex].title}
                  </h4>
                  <p className="text-sm text-neutral-light leading-relaxed">
                    {timelineData[currentIndex].description}
                  </p>
                  {/* Mobile Tags */}
                  {timelineData[currentIndex].tech && (
                    <div className="flex justify-center gap-2 flex-wrap mt-4">
                      {timelineData[currentIndex].tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-2 z-20 bg-card-background/50 rounded-full backdrop-blur-sm border border-neutral-medium/30 active:scale-95 transition-transform"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-accent"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {timelineData.map((_, idx) => (
              <div
                key={idx}
                className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-6 bg-accent" : "w-2 bg-neutral-medium"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
