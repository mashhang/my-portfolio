// lux-portfolio/src/components/Navbar.tsx
"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    const shouldUseDark = theme === "dark";
    document.documentElement.classList[shouldUseDark ? "add" : "remove"](
      "dark"
    );
    setDarkMode(shouldUseDark);
  }, []);

  const toggleDarkMode = () => {
    const nextMode = !darkMode;
    setDarkMode(nextMode);
    document.documentElement.classList[nextMode ? "add" : "remove"]("dark");
    localStorage.setItem("theme", nextMode ? "dark" : "light");
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 dark:bg-[#0D1117] dark:text-white sticky top-0 z-50">
      <motion.a
        href="#"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-xl font-bold tracking-widest"
      >
        King
      </motion.a>

      <div className="flex items-center gap-4">
        <a href="#projects" className="hover:text-purple-400 transition">
          Projects
        </a>
        <a href="#contact" className="hover:text-purple-400 transition">
          Contact
        </a>
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
        >
          <motion.div
            key={darkMode ? "moon" : "sun"}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {darkMode ? <Moon size={18} /> : <Sun size={18} />}
          </motion.div>
        </button>
      </div>
    </nav>
  );
}
