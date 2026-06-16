"use client";

import { motion } from "framer-motion";
import { CheckCircle, Download } from "lucide-react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function About() {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    // Fetch the animation data from the public folder
    fetch("/sad-developer.json")
      .then((res) => res.json())
      .then((data) => {
        // Simple check to see if it's a valid lottie json (not our empty {})
        if (data && Object.keys(data).length > 0) {
          setAnimationData(data);
        }
      })
      .catch((err) => console.error("Error loading Lottie:", err));
  }, []);

  const highlights = [
    "Clean, maintainable code architecture",
    "Performance optimized web applications",
    "Responsive, accessible user interfaces",
    "Seamless backend integrations",
  ];

  return (
    <section
      id="about"
      className="py-32 bg-[var(--background)] relative border-t border-[var(--border)]"
    >
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Visuals & Stats (Opposite of Hero) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1 relative flex flex-col gap-6"
        >
          {/* Lottie Animation Container */}
          <div className="glass rounded-3xl p-6 relative overflow-hidden flex items-center justify-center min-h-[300px]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent)] rounded-full blur-[80px] opacity-20 transition-opacity duration-500"></div>

            {animationData ? (
              <Lottie
                animationData={animationData}
                loop={true}
                className="w-full max-w-[450px] relative z-10"
              />
            ) : (
              <div className="relative z-10 text-center p-8 border-2 border-dashed border-[var(--border)] rounded-2xl">
                <p className="text-[var(--muted)] mb-2 font-mono text-sm">
                  Lottie Animation Missing
                </p>
                <p className="text-xs text-[var(--muted)] max-w-[250px] mx-auto">
                  <span className="text-[var(--accent)] font-bold">
                    Lottie Animation of a Coder...
                  </span>
                </p>
              </div>
            )}
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="glass rounded-2xl p-6 flex flex-col justify-center items-center text-center group hover:border-[var(--accent)] transition-all duration-300">
              <h4 className="text-3xl font-bold neon-gradient-text mb-1">
                2<span className="text-[var(--foreground)]">+</span>
              </h4>
              <p className="text-[var(--muted)] text-[10px] uppercase tracking-widest font-semibold">
                Years
              </p>
            </div>
            <div className="glass rounded-2xl p-6 flex flex-col justify-center items-center text-center group hover:border-[var(--accent)] transition-all duration-300">
              <h4 className="text-3xl font-bold text-[var(--foreground)] mb-1">
                100<span className="text-[var(--accent)]">+</span>
              </h4>
              <p className="text-[var(--muted)] text-[10px] uppercase tracking-widest font-semibold">
                Projects
              </p>
            </div>
            <div className="glass rounded-2xl p-6 flex flex-col justify-center items-center text-center group hover:border-[var(--accent)] transition-all duration-300">
              <h4 className="text-3xl font-bold text-[var(--foreground)] mb-1">
                99<span className="text-[var(--accent)]">+</span>
              </h4>
              <p className="text-[var(--muted)] text-[10px] uppercase tracking-widest font-semibold">
                Problem Solving
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Text & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Crafting code that <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1px var(--foreground)" }}
            >
              speaks volumes.
            </span>
          </h2>
          <div className="w-20 h-1 bg-[var(--accent)] mb-8"></div>

          <p className="text-lg text-[var(--muted)] leading-relaxed mb-8">
            I am a passionate software engineer focused on crafting clean,
            user-centric experiences. I believe that great architecture is
            invisible, but its effects are felt in every interaction. From
            robust backends to pixel-perfect frontends, I strive for excellence
            in every line of code.
          </p>

          <ul className="flex flex-col gap-4 mb-10">
            {highlights.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-[var(--foreground)] font-medium"
              >
                <CheckCircle className="text-[var(--accent)]" size={20} />
                {item}
              </li>
            ))}
          </ul>

          <motion.a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--accent)] text-white font-bold rounded-full hover:bg-[var(--accent-hover)] transition-colors duration-300 shadow-[0_0_20px_rgba(var(--accent-rgb),0.3)]"
          >
            <Download size={20} /> Download CV
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
