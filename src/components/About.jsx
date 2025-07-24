"use client";

import React, { useState } from "react";
import SectionTitleAnimated from "@/components/SectionTitleAnimated";
import { motion, AnimatePresence } from "framer-motion";

const timelineData = [
  {
    year: "2020",
    title: "Started Personal Game Development Studies",
    description:
      "Began my journey learning the basics, diving deep into the fundamentals of the development process.",
  },
  {
    year: "2022",
    title: "First Major Project",
    description: "Began a large solo-project in Unreal Engine.",
  },
  {
    year: "2023",
    title: "Specialized in 3D Art and Programming",
    description:
      "Began to further understand the 3D asset pipeline, and programming concepts, from Blender to Unreal Engine.",
  },
  {
    year: "2024",
    title: "Began Game Development Course at UCNL",
    description:
      "Looked to further enhance my skills and knowledge in game development.",
  },
];

const About = ({ className }) => {
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
    <section id="about" className={`py-20 ${className}`}>
      <div className="container mx-auto px-8">
        <SectionTitleAnimated colorClass="text-accent">
          About Me
        </SectionTitleAnimated>

        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-neutral-light leading-relaxed font-montserrat">
            For as long as I can remember, games have been a central part of my
            life, evolving from pure enjoyment into a deep curiosity about their
            inner workings. This fascination eventually led me to take the leap
            and pursue a Game Development course at UCNL. That decision was
            pivotal, profoundly enhancing my understanding and hands-on
            proficiency in the field.
          </p>
          <p className="mt-4 text-lg text-neutral-light leading-relaxed font-montserrat">
            My journey has been driven by a desire to contribute to the
            interactive experiences I've always loved. I thrive on
            problem-solving and the creative challenges inherent in game
            development, constantly seeking new ways to bring ideas to life.
          </p>
        </div>

        <div className="relative mt-10">
          <div className="absolute left-0 w-full h-0.5 bg-neutral-medium/50 bottom-2"></div>

          <div className="relative hidden md:flex justify-between items-end">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center w-48"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="p-4 rounded-lg bg-card-background">
                  <p className="font-bold text-accent text-lg">{item.year}</p>
                  <h4 className="font-bold text-foreground mt-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-neutral-light mt-2">
                    {item.description}
                  </p>
                </div>
                <div className="w-0.5 h-8 bg-neutral-medium/50 -my-1"></div>
                <div className="h-4 w-4 rounded-full bg-accent border-2 border-background z-10"></div>
              </motion.div>
            ))}
          </div>

          <div className="relative md:hidden flex items-end justify-center h-64">
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-2 z-20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-neutral-light"
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
                className="flex flex-col items-center text-center w-64"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-4 rounded-lg bg-card-background">
                  <p className="font-bold text-accent text-lg">
                    {timelineData[currentIndex].year}
                  </p>
                  <h4 className="font-bold text-foreground mt-1">
                    {timelineData[currentIndex].title}
                  </h4>
                  <p className="text-sm text-neutral-light mt-2">
                    {timelineData[currentIndex].description}
                  </p>
                </div>
                <div className="w-0.5 h-8 bg-neutral-medium/50 -my-1"></div>
                <div className="h-4 w-4 rounded-full bg-accent border-2 border-background z-10"></div>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-2 z-20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-neutral-light"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
