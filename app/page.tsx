import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="bg-slate-900 text-white min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
    </main>
  );
}