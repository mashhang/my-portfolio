"use client";

import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="px-4 py-12 max-w-6xl mx-auto text-center md:text-left"
    >
      <motion.h2
        className="text-3xl md:text-4xl text-center p-2 font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="text-gray-400 text-lg leading-relaxed mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        I'm a passionate frontend developer with a knack for creating smooth and
        interactive web experiences. My journey started from curiosity and grew
        into a deep love for crafting products that both look great and work
        beautifully.
      </motion.p>

      <motion.p
        className="text-gray-400 text-lg leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        These days, I’m leveling up my React & TypeScript skills, exploring new
        design patterns, and staying on top of UI/UX trends. I love
        collaborating on creative projects that push web boundaries and deliver
        impactful experiences.
      </motion.p>
    </section>
  );
}
