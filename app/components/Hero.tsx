"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gray-100"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Paul Edrel B. King
      </h1>
      <p className="text-xl md:text-2xl font-medium text-gray-600 mb-6">
        Computer Science Graduate | Web Developer | Gamer 🎮
      </p>
      <div className="space-x-4">
        <a
          href="#projects"
          className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
        >
          See My Projects
        </a>
        <a
          href="#contact"
          className="border border-black px-6 py-2 rounded-full hover:bg-gray-200 transition"
        >
          Contact Me
        </a>
      </div>
    </motion.section>
  );
}
