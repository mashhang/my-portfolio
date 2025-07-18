// components/AboutMe.tsx
"use client";

import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section className="px-4 py-16 max-w-4xl mx-auto text-center">
      <motion.div
        className="text-base md:text-lg text-gray-300 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <p>
          I'm a passionate frontend developer with a knack for creating smooth
          and interactive web experiences. My development journey started out of
          curiosity and quickly grew into a deep love for building things that
          look good and work even better.
        </p>
        <p className="mt-4">
          Currently, I’m focused on leveling up my React and TypeScript game
          while learning new design patterns and keeping up with UI/UX trends. I
          enjoy collaborating on creative projects that push the boundaries of
          what’s possible on the web.
        </p>
      </motion.div>
    </section>
  );
}
