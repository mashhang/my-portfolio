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
        I'm a full-stack developer passionate about building scalable web
        applications and engaging digital experiences. From crafting clean and
        responsive UIs to architecting efficient backend systems, I enjoy
        working across the stack to turn ideas into functional, user-friendly
        products.
      </motion.p>

      <motion.p
        className="text-gray-400 text-lg leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        I primarily work with technologies like React, Next.js, TypeScript,
        Node.js, and PostgreSQL. I'm always learning—currently diving deeper
        into system design, cloud deployments, and refining my UI/UX instincts
        to deliver impactful and maintainable software.
      </motion.p>
    </section>
  );
}
