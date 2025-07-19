"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/app/components/ui/Button";
import { Project } from "@/app/components/data/projects";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [selectedImage, setSelectedImage] = useState(
    project.carousel?.[0] || ""
  );
  const [isClosing, setIsClosing] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Click outside
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      handleClose();
    }
  };

  // Smooth close with animation
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => onClose(), 200); // must match fadeOut duration
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs px-4 py-8 transition-opacity"
    >
      <div
        ref={modalRef}
        className={`relative bg-zinc-900/80 border border-zinc-700 rounded-2xl shadow-lg p-6 w-full max-w-5xl max-h-[90vh] overflow-y-auto ${
          isClosing ? "animate-fadeOut" : "animate-fadeIn"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-0 right-4 text-zinc-400 hover:text-white text-2xl transition"
          aria-label="Close"
        >
          &times;
        </button>

        {/* Big Preview Image */}
        {project.carousel && project.carousel.length > 0 && (
          <div className="relative w-full max-h-[480px] aspect-video rounded-xl overflow-hidden mb-6 mt-4 ">
            <Image
              src={selectedImage}
              alt={`${project.title} main preview`}
              fill
              className="object-contain rounded-xl"
              priority
            />
          </div>
        )}

        {/* Title */}
        <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-zinc-300 text-transparent bg-clip-text mb-2">
          {project.title}
        </h2>

        {/* Description */}
        <p className="text-zinc-300 mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mb-6">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button variant="default" className="cursor-pointer">
                🌐 Live Demo
              </Button>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button variant="default" className="cursor-pointer">
                📁 GitHub
              </Button>
            </a>
          )}
        </div>

        {/* Carousel */}
        {project.carousel?.length > 1 && (
          <div className="flex overflow-x-auto gap-4 pb-2 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent">
            {project.carousel.map((src, idx) => (
              <button
                onClick={() => setSelectedImage(src)}
                key={idx}
                className={`relative w-36 h-24 flex-shrink-0 rounded-lg overflow-hidden group border-2 transition ${
                  selectedImage === src
                    ? "border-white"
                    : "border-transparent hover:border-zinc-400"
                }`}
              >
                <Image
                  src={src}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
