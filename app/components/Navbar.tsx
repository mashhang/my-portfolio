// lux-portfolio/src/components/Navbar.tsx
"use client";

import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-[#161B22] text-white sticky top-0 z-50 shadow-md">
      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-xl font-bold tracking-widest"
      >
        BOSSING
      </motion.h1>

      <div className="flex items-center gap-4">
        <a href="#projects" className="hover:text-purple-400 transition">
          Projects
        </a>
        <a href="#contact" className="hover:text-purple-400 transition">
          Contact
        </a>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full hover:bg-gray-700 transition"
        >
          {darkMode ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </div>
    </nav>
  );
}
