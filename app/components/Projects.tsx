"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/app/components/data/projects";
import { Button } from "@/app/components/ui/Button";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"
      >
        Projects
      </motion.h2>

      <div className="overflow-x-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-700">
        <div className="flex gap-6 min-w-full snap-x snap-mandatory px-1">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-[320px] sm:w-[360px] md:w-[400px] bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow snap-center"
            >
              {project.image && (
                <div className="relative h-60 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top-left"
                  />
                </div>
              )}

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-transparent bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text dark:from-purple-300 dark:to-pink-300">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-400 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-zinc-800 px-2 py-1 rounded-full text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.liveUrl && (
                    <Button variant="default" className="text-white">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="outline" className="text-white">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
