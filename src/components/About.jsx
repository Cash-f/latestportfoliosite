"use client";

import React from "react";
import SectionTitleAnimated from "@/components/SectionTitleAnimated";
import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2021",
    title: "Started Game Development Course",
    description:
      "Began my journey at UCNL, diving deep into the fundamentals of the craft.",
  },
  {
    year: "2022",
    title: "First Major Project",
    description: "Began a large solo-project in Unreal Engine.",
  },
  {
    year: "2023",
    title: "Specialized in 3D Art",
    description:
      "Mastered the 3D asset pipeline, from Blender to Substance Painter.",
  },
  {
    year: "2024",
    title: "Graduation & Portfolio",
    description:
      "Graduated with distinction and began compiling my best work for the industry.",
  },
];

const About = ({ className }) => {
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

        <div className="relative mt-24">
          <div className="absolute left-0 w-full h-0.5 bg-neutral-medium/50 bottom-2"></div>

          <div className="relative flex justify-between items-end">
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

                <div className="w-0.5 h-8 bg-neutral-medium/50 "></div>

                <div className="h-4 w-4 rounded-full bg-accent border-2 border-background z-10"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
