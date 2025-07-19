"use client";

import { motion } from "framer-motion";
import { MailIcon, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 max-w-6xl mx-auto">
      <motion.h2
        className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Get in Touch
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.1 }}
      >
        {/* Left: Contact Info */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-xl font-semibold dark:text-gray-300">
            Let’s connect!
          </h3>
          <p className="text-gray-700 dark:text-gray-400">
            Feel free to reach out for collaborations or just a friendly chat.
          </p>

          <div className="flex items-center gap-3">
            <MailIcon className="text-purple-500" />
            <a
              href="mailto:edrel610@gmail.com"
              className="text-gray-800 dark:text-gray-300 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              edrel610@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="text-pink-500" />
            <p className="text-gray-700 dark:text-gray-400">
              Laguna, Philippines
            </p>
          </div>

          {/* Socials */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://github.com/mashhang"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-purple-500 transition"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/paul-king-36a26814a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </motion.div>

        {/* Right: Quote */}
        <motion.div
          className="hidden md:flex flex-col justify-center items-center text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <blockquote className="italic text-muted-foreground max-w-[80%] dark:text-gray-300">
            "Responsive design isn’t a feature. It’s a must."
            <p className="text-right">– Karen McGrane</p>
          </blockquote>
        </motion.div>
      </motion.div>
    </section>
  );
}
