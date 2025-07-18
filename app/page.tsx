import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Projects from "@/app/components/Projects";
import Contact from "@/app/components/Contacts";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main className="bg-white text-gray-900 min-h-screen scroll-smooth">
      <Navbar />
      <div className="dark:bg-[#0D1117]">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
