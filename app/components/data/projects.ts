import { li } from "framer-motion/client";

export type Project = {
  title: string;
  description: string;
  image: string;
  carousel: string[];
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
};

// components/data/projects.ts
export const projects = [
  {
    title: "Moksha Clothing Website",
    description:
      "A sleek e-commerce site for Moksha Clothing, showcasing products with a modern design.",
    image: "/images/moksha.png",
    carousel: [
      "/images/moksha.png",
      "/images/mokshaProducts.png",
      "/images/mokshaProductDetails.png",
    ],
    tags: ["Next.js", "Tailwind CSS", "Prisma"],
    liveUrl: "https://moksha-Website.vercel.app",
    githubUrl: "https://github.com/mashhang/moksha-website",
  },
  {
    title: "Math Learning Platform",
    description:
      "Adaptive web app for senior high students to study Gen Math with pre-assessment and visual feedback. Username: 1148-21 Password: Abakada1.",
    image: "/images/progress.png",
    carousel: [
      "/images/dashboard.png",
      "/images/dashboard-mb.png",
      "/images/my-lesson.png",
      "/images/my-lessons-mb.png",
      "/images/current-lesson.png",
      "/images/current-lesson-mb.png",
      "/images/progress.png",
      "/images/progress-mb.png",
    ],
    tags: ["Next.js", "Tailwind", "Supabase", "Prisma", "Render"],
    liveUrl: "https://math-learnings.vercel.app",
    githubUrl: "https://github.com/mashhang/learning",
  },
  {
    title: "LPG POS System",
    description:
      "A modern desktop point-of-sale built with WPF + MVVM. Features inventory, sales, and role-based access.",
    image: "/images/pos.png",
    carousel: ["/images/pos.png", "/images/pos2.png"],
    tags: ["WPF", "MVVM", "C#", "SQLite"],
    liveUrl: "",
    githubUrl: "https://github.com/mashhang/lpg-pos",
  },
];
