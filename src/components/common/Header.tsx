"use client";

// ** Next.js imports
import Link from "next/link";

// ** Third party imports
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import Wrapper from "../Wrapper";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full fixed z-50">
      <div className="bg-secondary z-10">
        <Wrapper>
          <div className="py-3 md:py-0 mx-auto flex items-center justify-between">
            <Link href={"/"}>
              <div className="flex items-center gap-2 md:bg-primary md:px-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 200 200"
                  className="hidden md:flex"
                  width="90"
                  height="90"
                >
                  <path
                    d="M50 50 L150 50 L125 75 L75 75 L50 50 Z 
               M75 75 L125 75 L150 100 L125 125 L75 125 L50 100 L75 75 Z
               M50 100 L75 125 L50 150 L25 125 L50 100 Z
               M150 100 L125 125 L150 150 L175 125 L150 100 Z"
                    stroke="black"
                    strokeWidth="4"
                    fill="none"
                  />
                </svg>

                <div>
                  <h1 className="font-semibold text-lg md:text-2xl text-white md:text-black">
                    SPHERE
                  </h1>
                  <h1 className="text-base md:text-xl text-white md:text-black">
                    CONSTRUCIONS
                  </h1>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex">
              <ul className="flex justify-center items-center gap-7">
                <li>
                  <ScrollLink
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    activeClass="active"
                    className="hover:text-primary cursor-pointer transition-all duration-200 text-white"
                  >
                    HOME
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="services"
                    smooth={true}
                    duration={500}
                    spy={true}
                    activeClass="active"
                    className="hover:text-primary cursor-pointer transition-all duration-200 text-white"
                  >
                    SERVICES
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="about"
                    smooth={true}
                    duration={500}
                    spy={true}
                    activeClass="active"
                    className="hover:text-primary cursor-pointer transition-all duration-200 text-white"
                  >
                    ABOUT
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="projects"
                    smooth={true}
                    duration={500}
                    spy={true}
                    activeClass="active"
                    className="hover:text-primary cursor-pointer transition-all duration-200 text-white"
                  >
                    PROJECTS
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="contact"
                    smooth={true}
                    duration={500}
                    spy={true}
                    activeClass="active"
                    className="hover:text-primary cursor-pointer transition-all duration-200 text-white"
                  >
                    CONTACT
                  </ScrollLink>
                </li>
              </ul>
            </nav>

            {/* Mobile Navigation */}
            <div className="lg:hidden">
              <button onClick={toggleMenu}>
                <Menu className="w-8 h-8 text-white" />
              </button>
            </div>
          </div>
        </Wrapper>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "-100%" }}
          className="fixed top-0 left-0 w-full h-screen bg-secondary z-40 flex flex-col items-center justify-center"
        >
          <button
            onClick={toggleMenu}
            className="absolute top-8 right-5 text-white"
          >
            <X className="w-8 h-8" />
          </button>

          <ul className="flex flex-col gap-7 text-center">
            <li>
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                onClick={toggleMenu}
                className="hover:text-primary cursor-pointer transition-all duration-200 text-white text-xl"
              >
                HOME
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                onClick={toggleMenu}
                className="hover:text-primary cursor-pointer transition-all duration-200 text-white text-xl"
              >
                SERVICES
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                onClick={toggleMenu}
                className="hover:text-primary cursor-pointer transition-all duration-200 text-white text-xl"
              >
                ABOUT
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                onClick={toggleMenu}
                className="hover:text-primary cursor-pointer transition-all duration-200 text-white text-xl"
              >
                PROJECTS
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                onClick={toggleMenu}
                className="hover:text-primary cursor-pointer transition-all duration-200 text-white text-xl"
              >
                CONTACT
              </ScrollLink>
            </li>
          </ul>
        </motion.div>
      )}
    </div>
  );
}
