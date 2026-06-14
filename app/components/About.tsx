"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-5xl mx-auto px-6 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-8 text-center">
          About Me
        </h2>

        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 backdrop-blur-sm">
          <p className="text-lg text-gray-300 leading-8">
            I'm an IT professional focused on Cloud and DevOps
            engineering. My primary interests include Azure,
            Terraform, Kubernetes, CI/CD automation, and
            Infrastructure as Code.
          </p>

          <p className="text-lg text-gray-300 leading-8 mt-6">
            I enjoy building hands-on projects that simulate
            real-world enterprise environments. Through these
            projects I continue expanding my knowledge of cloud
            infrastructure, automation, platform engineering,
            and modern deployment practices.
          </p>

          <p className="text-lg text-gray-300 leading-8 mt-6">
            Currently focused on strengthening expertise in
            Azure, Terraform, GitHub Actions, Docker, and
            Kubernetes while building a portfolio that reflects
            practical engineering experience.
          </p>
        </div>
      </motion.div>
    </section>
  );
}