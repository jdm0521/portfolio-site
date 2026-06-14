"use client";

import { motion } from "framer-motion";

const particles = [
  { x: 100, y: 100 },
  { x: 250, y: 300 },
  { x: 500, y: 150 },
  { x: 700, y: 400 },
  { x: 900, y: 250 },
  { x: 1100, y: 500 },
  { x: 300, y: 600 },
  { x: 800, y: 650 },
];

export default function Background() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-6 h-6 rounded-full bg-blue-400 opacity-40 blur-sm"
          initial={{
            x: particle.x,
            y: particle.y,
          }}
          animate={{
            y: particle.y - 200,
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );
}