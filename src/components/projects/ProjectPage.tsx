"use client";

// ** framer motion
import { motion } from "motion/react";

// ** react scroll
import { Element } from "react-scroll";

export default function ProjectPage() {
  return (
    <Element name="projects" className="mt-20">
      <div className="text-center pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-3xl md:text-4xl lg:text-5xl font-semibold text-secondary"
        >
          PROJECTS
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-24 h-2 bg-primary mx-auto mt-4"
        ></motion.div>
      </div>
    </Element>
  );
}
