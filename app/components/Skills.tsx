// components/Skills.tsx
"use client";

import { motion } from "framer-motion";
import { JSX } from "react";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiFramer,
  SiFirebase,
  SiSupabase,
  SiPrisma,
  SiGit,
  SiGithub,
  SiPostgresql,
} from "react-icons/si";

type SkillGroup = {
  title: string;
  skills: { name: string; icon: JSX.Element }[];
};

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <SiReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-teal-300" />,
      },
      { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <SiCss3 className="text-blue-400" /> },
      { name: "Framer Motion", icon: <SiFramer className="text-pink-400" /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
      { name: "Supabase", icon: <SiSupabase className="text-green-400" /> },
      { name: "Prisma", icon: <SiPrisma className="text-white" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <SiGit className="text-red-400" /> },
      { name: "GitHub", icon: <SiGithub className="text-white" /> },
    ],
  },
];

const fadeIn = (delay: number = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { delay, duration: 0.6 } },
});

export default function Skills() {
  return (
    <section className="px-4 py-20 max-w-5xl mx-auto text-center" id="skills">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r p-4 from-purple-400 to-pink-500 mb-8"
        {...fadeIn(0)}
      >
        My Skills
      </motion.h2>

      <div className="space-y-16">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            className="text-left"
            {...fadeIn(index * 0.3)}
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-200">
              {group.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {group.skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  className="flex items-center gap-3 p-4 bg-gray-800 hover:bg-gray-700 hover:shadow-lg rounded-xl text-gray-100 transition-transform duration-200 cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 10,
                    duration: 0.6,
                  }}
                >
                  <span className="text-xl">{skill.icon}</span>
                  <span className="text-sm md:text-base font-medium">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
