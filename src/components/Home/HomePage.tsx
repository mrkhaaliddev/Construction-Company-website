"use client";
// ** React imports
import React from "react";

// ** framer motion
import { motion } from "motion/react";

// ** third party
import { Link as ScrollLink, Element } from "react-scroll";

export default function HomePage() {
  return (
    <Element name="home" className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/assets/homeVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-3xl md:text-6xl font-semibold text-white leading-loose md:leading-[70px]"
        >
          LEADERS IN QUALITY <br />
          CONSTRUCTION AND <br />
          INFRASTRUCTURE
        </motion.h1>
        <ScrollLink
          to="services"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active"
        >
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="mt-8 flex items-center justify-center bg-white text-black px-3 py-3 rounded-full hover:bg-gray-300 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.button>
        </ScrollLink>
      </div>
    </Element>
  );
}
