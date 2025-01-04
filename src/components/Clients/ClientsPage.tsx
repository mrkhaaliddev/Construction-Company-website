"use client";

import Image from "next/image";

// ** Components
import Wrapper from "../Wrapper";

// ** Motion
import { motion } from "motion/react";

const Clients = [
  {
    Client: "/assets/clients/Client 1.avif",
  },
  {
    Client: "/assets/clients/Client 2.avif",
  },
  {
    Client: "/assets/clients/Client 3.avif",
  },
  {
    Client: "/assets/clients/Client 4.avif",
  },
  {
    Client: "/assets/clients/Client 5.avif",
  },
];

export default function ClientsPage() {
  return (
    <div className="mt-20">
      <Wrapper>
        <div className="text-center pb-12">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-secondary"
          >
            CLIENTS
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-24 h-2 bg-primary mx-auto mt-4"
          ></motion.div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-center items-center">
          {Clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="group relative"
            >
              <Image
                src={client.Client}
                alt="client"
                width={100}
                height={100}
                className=" group-hover:opacity-100 opacity-40 transition-opacity duration-300"
              />
            </motion.div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
}
