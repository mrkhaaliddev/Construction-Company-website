"use client";

// ** React imports
import React from "react";

// ** Icons
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

// ** Components
import Wrapper from "../Wrapper";

// ** React Scroll
import { Link as ScrollLink } from "react-scroll";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-10 w-full">
      <Wrapper>
        <div className="">
          <div className="flex flex-col md:flex-row justify-between gap-10">
            {/* Logo and About */}
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 200 200"
                  className="w-14 h-14"
                >
                  <path
                    d="M50 50 L150 50 L125 75 L75 75 L50 50 Z 
                   M75 75 L125 75 L150 100 L125 125 L75 125 L50 100 L75 75 Z
                   M50 100 L75 125 L50 150 L25 125 L50 100 Z
                   M150 100 L125 125 L150 150 L175 125 L150 100 Z"
                    stroke="white"
                    strokeWidth="4"
                    fill="none"
                  />
                </svg>
                <div>
                  <h1 className="text-2xl font-bold">SPHERE CONSTRUCTIONS</h1>
                </div>
              </div>
              <p className="text-base text-white/80 max-w-sm">
                Building quality structures that last. Dedicated to delivering
                excellence in every project we undertake.
              </p>
            </div>

            {/* Navigation Links */}
            <div>
              <h2 className="font-bold text-lg mb-4">Quick Links</h2>
              <ul className="space-y-2">
                <li>
                  <ScrollLink
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    activeClass="active"
                    className="hover:text-primary cursor-pointer transition-all duration-200 text-white/80"
                  >
                    Home
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="services"
                    smooth={true}
                    duration={500}
                    spy={true}
                    activeClass="active"
                    className="hover:text-primary cursor-pointer transition-all duration-200 text-white/80"
                  >
                    Service
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="about"
                    smooth={true}
                    duration={500}
                    spy={true}
                    activeClass="active"
                    className="hover:text-primary cursor-pointer transition-all duration-200 text-white/80"
                  >
                    About
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="projects"
                    smooth={true}
                    duration={500}
                    spy={true}
                    activeClass="active"
                    className="hover:text-primary cursor-pointer transition-all duration-200 text-white/80"
                  >
                    Projects
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="contact"
                    smooth={true}
                    duration={500}
                    spy={true}
                    activeClass="active"
                    className="hover:text-primary cursor-pointer transition-all duration-200 text-white/80"
                  >
                    Contact
                  </ScrollLink>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="font-bold text-lg mb-4">Contact</h2>
              <ul className="space-y-2 text-white/80">
                <li>Maka almukarama, Mogadisho</li>
                <li>Email: info@sphereconstruction.com</li>
                <li>Phone: +252 611008043</li>
              </ul>
            </div>

            {/* Social Media Links */}
            <div>
              <h2 className="font-bold text-lg mb-4">Follow Us</h2>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="hover:text-primary transition-all duration-200 text-white/80"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="hover:text-primary transition-all duration-200 text-white/80"
                  aria-label="Twitter"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="hover:text-primary transition-all duration-200 text-white/80"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="hover:text-primary transition-all duration-200 text-white/80"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center border-t border-gray-600 pt-4">
            <p className="text-sm text-white/80">
              © {new Date().getFullYear()}{" "}
              <a href="https://github.com/mrkhaaliddev" target="_blank">
                Mr Khaalid
              </a>
              . All rights reserved.
            </p>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
}
