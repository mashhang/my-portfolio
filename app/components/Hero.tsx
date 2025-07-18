// components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-[93vh] text-center px-4">
      <motion.h1
        className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text p-4 bg-gradient-to-r from-purple-400 to-pink-600"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm Paul Edrel King
      </motion.h1>
      <motion.p
        className="mt-4 text-lg md:text-xl text-gray-400 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        I build elegant frontends & sleek user experiences with modern web tech.
      </motion.p>
      <motion.div
        className="flex gap-6 mt-6 text-2xl text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        <a
          href="https://github.com/mashhang"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white hover:scale-110 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/your-link"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white hover:scale-110 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:your.email@example.com"
          className="hover:text-white hover:scale-110 transition"
        >
          <FaEnvelope />
        </a>
      </motion.div>
      <motion.div
        className="mt-12 text-sm text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="inline-block animate-bounce">▼</span>
      </motion.div>
    </section>
  );
}
