"use client";

// ** React Scroll
import { Element } from "react-scroll";

// ** Motion
import { motion } from "motion/react";

export default function ContactPage() {
  return (
    <Element name="contact" className="mt-20">
      <div className="text-center pb-16  px-4 mx-auto max-w-5xl sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-3xl md:text-4xl lg:text-5xl font-semibold text-secondary"
        >
          CONTACT
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-24 h-2 bg-primary mx-auto mt-4"
        ></motion.div>
      </div>

      <motion.form
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 70 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className=" px-4 mx-auto max-w-5xl sm:px-6 lg:px-8 bg-white shadow-md rounded-sm p-5"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Full Name */}
          <div>
            <label
              htmlFor="full-name"
              className="block text-gray-700 text-sm font-medium"
            >
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              placeholder="Enter your full name"
              className="mt-2 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
              required
            />
          </div>
          {/* Last Name */}
          <div>
            <label
              htmlFor="last-name"
              className="block text-gray-700 text-sm font-medium"
            >
              Last Name
            </label>
            <input
              type="text"
              id="last-name"
              name="last-name"
              placeholder="Enter your last name"
              className="mt-2 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-medium"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="mt-2 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
            required
          />
        </div>

        {/* Subject */}
        <div className="mb-6">
          <label
            htmlFor="subject"
            className="block text-gray-700 text-sm font-medium"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Enter your subject"
            className="mt-2 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
            required
          />
        </div>

        {/* Message */}
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-gray-700 text-sm font-medium"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            rows={5}
            className="mt-2 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full md:w-1/2 bg-primary text-white px-6 py-3 rounded-lg shadow-md font-medium hover:bg-primary-dark focus:ring-2 focus:ring-primary-light focus:outline-none transition duration-300"
          >
            Submit
          </button>
        </div>
      </motion.form>

      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 70 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className=" px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative pb-20 pt-16"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0858476817564!2d-122.41941668468195!3d37.77492927975926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808dfd3eaf03%3A0x738f3e9bc3c0a9aa!2sCivic%20Center%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1697643930973!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>
    </Element>
  );
}
