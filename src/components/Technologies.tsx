"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const technologies = [
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", color: "#F7DF1E" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", color: "#3178C6" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", color: "#61DAFB" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", color: "#ffffff", invertInDark: true },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg", color: "#339933" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", color: "#ffffff", invertInDark: true },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", color: "#47A248" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", color: "#06B6D4" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg", color: "#F24E1E" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", color: "#F05032" },
];

export default function Technologies() {
  return (
    <section id="technologies" className="py-32 bg-[var(--card)] relative border-t border-[var(--border)] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--accent)] rounded-full blur-[150px] opacity-[0.05] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            My Tech Arsenal
          </h2>
          <div className="w-20 h-1 bg-[var(--accent)] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="glass rounded-2xl p-8 flex flex-col items-center justify-center gap-6 group cursor-pointer border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover Glow */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at center, ${tech.color}, transparent 70%)` }}
              />
              
              <div className="relative w-16 h-16 z-10 filter grayscale group-hover:grayscale-0 transition-all duration-500 flex items-center justify-center">
                <Image 
                  src={tech.icon} 
                  alt={tech.name} 
                  fill 
                  className={`object-contain ${tech.invertInDark ? 'dark:invert' : ''}`}
                  unoptimized // Devicon uses SVGs from CDN, so unoptimized is fine
                />
              </div>
              <h3 className="text-base font-bold text-[var(--foreground)] relative z-10">{tech.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
