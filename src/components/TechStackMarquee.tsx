"use client";

import { motion } from "framer-motion";

const technologies = [
  "HTML5",
  "CSS",
  "Javascript",
  "Node.js",
  "React",
  "Git",
  "Github",
  "Next.js",
  "TailwindCSS",
];

export default function TechStackMarquee() {
  return (
    <div className="w-full bg-[var(--card)] py-6 overflow-hidden flex shadow-lg relative z-20 border-y border-[var(--border)]">
      <motion.div
        className="flex whitespace-nowrap gap-16 px-8 items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        }}
      >
        {/* Duplicate array for seamless infinite scroll */}
        {[...technologies, ...technologies].map((tech, index) => (
          <span
            key={index}
            className="text-2xl md:text-3xl font-semibold text-[var(--muted)] hover:text-white transition-colors duration-300 cursor-default"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
