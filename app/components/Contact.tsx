"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-5xl mx-auto px-6 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center mb-8">
          Contact
        </h2>

        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 text-center">
          <p className="text-gray-300 mb-8">
            Let's connect and talk about Cloud, DevOps,
            Platform Engineering, and Infrastructure as Code.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/jdm0521"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-500 transition"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/juwan-dobson/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-blue-500 rounded-lg hover:bg-slate-700 transition"
            >
              LinkedIn
            </a>

            <a
              href="mailto:dobsonjuwan@yahoo.com"
              className="px-6 py-3 border border-blue-500 rounded-lg hover:bg-slate-700 transition"
            >
              Email
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}