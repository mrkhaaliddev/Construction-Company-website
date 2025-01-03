"use client";

// ** Next imports
import Image from "next/image";

// ** third party
import { Element } from "react-scroll";
import { motion } from "motion/react";
import Wrapper from "../Wrapper";

const ServiceCards = [
  {
    Image: "/assets/services/Architectural-Modelling.avif",
    Title: "Preconstruction Planning",
    Description:
      "I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double-click me to add your own content and make changes to the font. Personalize this space to reflect your unique ideas, vision, and style.",
  },
  {
    Image: "/assets/services/Construction-Management.avif",
    Title: "Architectural Modelling",
    Description:
      "I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double-click me to add your own content and make changes to the font. Personalize this space to reflect your unique ideas, vision, and style.",
  },
  {
    Image: "/assets/services/Preconstruction.avif",
    Title: "Construction Management",
    Description:
      "I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double-click me to add your own content and make changes to the font. Personalize this space to reflect your unique ideas, vision, and style.",
  },
];

export default function ServicePage() {
  return (
    <Wrapper>
      <Element name="services" className="mt-20">
        <div className="text-center pb-16">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-secondary"
          >
            SERVICES
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-24 h-2 bg-primary mx-auto mt-4"
          ></motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {ServiceCards.map((card, index) => (
            <div
              key={index}
              className="bg-ternary rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-100"
            >
              <div className="relative w-full h-56">
                <Image
                  src={card.Image}
                  alt={card.Title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {card.Title}
                </h3>
                <p className="text-gray-600 text-base pb-2">
                  {card.Description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </Element>
    </Wrapper>
  );
}
