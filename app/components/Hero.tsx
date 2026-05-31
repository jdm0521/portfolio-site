"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="text-center py-32">

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-bold"
      >
        Juwan Dobson
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-2xl text-blue-400 mt-4"
      >
        Cloud & DevOps Engineer
      </motion.h2>

      <p className="mt-6 max-w-2xl mx-auto text-gray-400">
        Building scalable cloud infrastructure with
        Azure, Terraform, Docker, Kubernetes and GitHub Actions.
      </p>
    </section>
  );
}