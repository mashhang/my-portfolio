"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold">
          Bossing
        </a>
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-blue-600">
            About
          </a>
          <a href="#projects" className="hover:text-blue-600">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-600">
            Contact
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-xl">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white px-4 pb-4">
          <a href="#about" className="block py-2">
            About
          </a>
          <a href="#projects" className="block py-2">
            Projects
          </a>
          <a href="#contact" className="block py-2">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
