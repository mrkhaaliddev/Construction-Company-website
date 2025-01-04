"use client";

// ** Next Imports
import Image from "next/image";

// ** third party
import { motion } from "motion/react";
import { Element } from "react-scroll";

// ** Components
import Wrapper from "../Wrapper";

export default function AboutPage() {
  return (
    <Element name="about" className="mt-20 bg-ternary">
      <div className="flex items-center flex-wrap relative">
        <Wrapper>
          {/* Left Content Section */}
          <div className="md:w-[50%] py-12">
            <div className="pb-10">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-3xl md:text-4xl lg:text-5xl font-semibold text-secondary"
              >
                ABOUT
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-24 h-2 bg-primary mt-4"
              ></motion.div>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="md:w-[80%] text-black/80 text-lg font-thin text-clip"
            >
              At Sphere Constructions, we are more than just builders – we are
              creators of innovative spaces that stand the test of time. With
              decades of combined experience in the construction industry, our
              team is dedicated to delivering excellence in every project we
              undertake. From residential developments to large-scale commercial
              projects, our commitment to quality, safety, and client
              satisfaction remains unwavering. <br /> Our journey began with a
              vision: to redefine construction standards by combining
              cutting-edge technology, skilled craftsmanship, and sustainable
              practices. Over the years, we have earned the trust of our clients
              by consistently delivering projects on time and within budget
              while exceeding expectations.
              <br /> At Sphere Constructions, we believe in building more than
              just structures – we build lasting relationships. Let us bring
              your vision to life with integrity, innovation, and unmatched
              professionalism.
            </motion.p>
          </div>
        </Wrapper>
        {/* Right Image Section */}
        <motion.div
          className="relative w-full h-[400px] md:absolute md:right-0 md:top-0 md:w-[50%] md:h-[100%]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Image
            src="/assets/about-us/About-image.avif"
            alt="About image"
            layout="fill"
            objectFit="cover"
            className="rounded-sm"
          />
        </motion.div>
      </div>
    </Element>
  );
}
