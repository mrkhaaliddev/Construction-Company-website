"use client";

// ** Components
import Wrapper from "../Wrapper";

// ** Motion
import { motion } from "motion/react";

export default function OurWork() {
  return (
    <div className="bg-yellow-400">
      <Wrapper>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="py-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6 justify-items-center items-center text-center">
            {/* First Stat */}
            <div className="flex flex-col items-center">
              <p className="text-secondary text-5xl font-bold">2035</p>
              <p className="mt-2 text-secondary text-base">Year Established</p>
            </div>

            {/* Second Stat */}
            <div className="flex flex-col items-center">
              <p className="text-secondary text-5xl font-bold">206</p>
              <p className="mt-2 text-secondary text-base">
                Projects Completed
              </p>
            </div>

            {/* Third Stat */}
            <div className="flex flex-col items-center">
              <p className="text-secondary text-5xl font-bold">870</p>
              <p className="mt-2 text-secondary text-base">
                Contractors Appointed
              </p>
            </div>

            {/* Fourth Stat */}
            <div className="flex flex-col items-center">
              <p className="text-secondary text-5xl font-bold">26</p>
              <p className="mt-2 text-secondary text-base">Awards Won</p>
            </div>
          </div>
        </motion.div>
      </Wrapper>
    </div>
  );
}
