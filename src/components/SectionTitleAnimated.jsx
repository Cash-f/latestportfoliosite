"use client";

import React from "react";
import { motion } from "framer-motion";

const SectionTitleAnimated = ({
  children,
  className,
  colorClass = "text-white",
}) => {
  return (
    <motion.div
      className={`text-center mb-12 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2
        className={`text-4xl md:text-5xl font-bold font-playfair ${colorClass}`}
      >
        {children}
      </h2>
    </motion.div>
  );
};

export default SectionTitleAnimated;
