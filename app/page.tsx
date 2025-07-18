import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Projects from "@/app/components/Projects";
import Contact from "@/app/components/Contacts";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="bg-white text-gray-900 min-h-screen scroll-smooth">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
