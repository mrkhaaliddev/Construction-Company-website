"use client";

// ** Next Imports
import Image from "next/image";

// ** framer motion
import { motion } from "motion/react";

// ** react scroll
import { Element } from "react-scroll";
import Link from "next/link";

// ** Project Json
import Projects from "@/components/Projects.json";

export default function ProjectPage() {
  return (
    <Element name="projects" className="mt-20">
      <div className="max-w-5xl p-4 mx-auto">
        {/* Heading */}
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

        {/* Project Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 px-6 md:px-20"
        >
          {Projects.map((project, index) => (
            <Link href={`/projects/${project.number}`} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative cursor-pointer h-96 group"
                // onClick={() => setSelectedProject(project)}
              >
                {/* Parent Container */}
                <div className="h-full w-full relative overflow-hidden rounded-md shadow-lg">
                  {/* Project Image */}
                  <Image
                    src={project.HomeImage}
                    alt={`Project ${project.number}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                  {/* Hover Overlay and Number */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-3xl font-bold">
                      {project.number}
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </Element>
  );
}
