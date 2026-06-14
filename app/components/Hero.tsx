"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden">
        <div className="absolute w-[700px] h-[700px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-6xl font-bold"
      >
        Juwan Dobson
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="relative z-10 text-2xl text-blue-400 mt-4"
      >
        Cloud & DevOps Engineer
      </motion.h2>

      <p className="relative z-10 mt-6 max-w-2xl mx-auto text-gray-400">
        Building scalable cloud infrastructure with
        Azure, Terraform, Docker, Kubernetes and GitHub Actions.
      </p>

        <div className="flex flex-wrap gap-3 justify-center mt-8">
  {[
    "Azure",
    "Terraform",
    "Docker",
    "Kubernetes",
    "GitHub Actions",
  ].map((tech) => (
    <span
      key={tech}
      className="px-4 py-2 rounded-full bg-slate-800 border border-blue-500"
    >
      {tech}
    </span>
  ))}
</div>

    <div className="mt-10 flex gap-4">
  <a
    href="#projects"
    className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-500"
  >
    View Projects
  </a>

  <a
    href="https://github.com/jdm0521"
    target="_blank"
    className="border border-blue-500 px-6 py-3 rounded-lg"
  >
    GitHub
  </a>
</div>
    </section>
  );
}