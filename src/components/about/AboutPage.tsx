"use client";

// ** Next Imports
import Image from "next/image";

// ** third party
import { motion } from "motion/react";
import { Element } from "react-scroll";
import Wrapper from "../Wrapper";

export default function AboutPage() {
  return (
    <Element name="about" className="mt-20 bg-ternary">
      <Wrapper>
        <div className="flex items-center flex-wrap">
          <div className="md:w-[50%] py-12">
            <div className="pb-10">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-3xl md:text-4xl lg:text-6xl font-semibold text-secondary"
              >
                About
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
              className="md:w-[90%] text-black/80 text-lg font-thin "
            >
              I&apos;m a paragraph. Click here to add your own text and edit me.
              It&apos;s easy. Just click “Edit Text” or double click me to add
              your own content and make changes to the font. Feel free to drag
              and drop me anywhere you like on your page. I&apos;m a great place
              for you to tell a story and let your users know a little more
              about you This is a great space to write long text about your
              company and your services. You can use this space to go into a
              little more detail about your company. Talk about your team and
              what services you provide. Tell your visitors the story of how you
              came up with the idea for your business and what makes you
              different from your competitors. Make your company stand out and
              show your visitors who you are.
            </motion.p>
          </div>
          <motion.div
            className="w-full md:w-[50%] h-[590px] relative"
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
      </Wrapper>
      <motion.div />
    </Element>
  );
}
