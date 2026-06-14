import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Background from "./components/Background";
import About from "./components/About";

export default function Home() {
  return (
    <main className="relative bg-slate-900 text-white min-h-screen">
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
    </main>
  );
}