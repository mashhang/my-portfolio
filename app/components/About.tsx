"use client";

import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section className="w-full bg-[#0d0d0d] py-20 border-t border-neutral-800">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">
          About Me
        </h2>

        <motion.div
          className="text-base sm:text-lg text-neutral-400 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p>
            I'm a passionate frontend developer with a knack for creating smooth
            and interactive web experiences. My development journey started out
            of curiosity and quickly grew into a deep love for building things
            that look good and work even better.
          </p>

          <p className="mt-6">
            Currently, I’m focused on leveling up my React and TypeScript game
            while learning new design patterns and keeping up with UI/UX trends.
            I enjoy collaborating on creative projects that push the boundaries
            of what’s possible on the web.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
