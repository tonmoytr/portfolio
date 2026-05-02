"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const TypewriterText = () => {
  const lines = ["FRONT-END DEVELOPER", "CODER", "PROBLEM SOLVER."];
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const type = () => {
      const fullText = lines[currentIndex];

      if (isDeleting) {
        setCurrentText((prev) => prev.slice(0, -1));
      } else {
        setCurrentText((prev) => fullText.slice(0, prev.length + 1));
      }

      let typeSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && currentText === fullText) {
        typeSpeed = 2000; // Pause at end of word
        setIsDeleting(true);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % lines.length);
        typeSpeed = 500; // Pause before typing next word
      }

      timeout = setTimeout(type, typeSpeed);
    };

    timeout = setTimeout(type, 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex, lines]); // Added proper dependencies

  return (
    <div className="h-[120px] md:h-[150px] flex items-center mb-8">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.2] tracking-tighter">
        <span className="text-[var(--foreground)]">Hello, I AM A</span>
        <br />
        <span className="neon-gradient-text">{currentText}</span>
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block w-1 h-10 md:h-14 bg-[var(--accent)] ml-2 align-middle"
        />
      </h1>
    </div>
  );
};

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-12"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[rgba(var(--accent-rgb),0.05)] to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-xl font-medium tracking-[0.2em] text-[var(--muted)] mb-6 uppercase flex items-center gap-4">
            <span className="w-8 h-[2px] bg-[var(--accent)]"></span> Tonmoy Roy
          </h2>

          <TypewriterText />

          <p className="text-lg text-[var(--muted)] max-w-lg mb-10 font-light border-l-2 border-[var(--border)] pl-4">
            Passionate full-stack developer dedicated to crafting robust,
            scalable, and visually stunning digital products. I transform
            complex problems into elegant interfaces.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-[var(--foreground)] text-[var(--background)] font-bold rounded-full hover:bg-[var(--accent)] hover:text-white transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(var(--accent-rgb),0.4)]"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contacts"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-[var(--border)] text-[var(--foreground)] font-bold rounded-full hover:border-[var(--accent)] transition-colors duration-300 glass"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="relative flex justify-center items-center h-[500px] lg:h-[600px]"
        >
          {/* Animated Background Blob */}
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute w-[400px] h-[400px] rounded-full border border-[var(--border)] opacity-20"
            style={{ borderStyle: "dashed" }}
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-[350px] h-[350px] bg-[var(--accent)] rounded-full blur-[100px] opacity-40 dark:opacity-30"
          />

          {/* Headshot container */}
          <div className="relative z-10 w-[300px] h-[400px] lg:w-[350px] lg:h-[450px] rounded-2xl overflow-hidden glass p-2 group">
            <div className="w-full h-full relative rounded-xl overflow-hidden bg-[var(--card)]">
              <Image
                src="/dev1.png"
                alt="Jensen Omega"
                fill
                className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700"
                priority
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[var(--background)] rounded-tr-3xl flex items-center justify-center border-t border-r border-[var(--border)]">
              <div className="w-3 h-3 rounded-full bg-[var(--accent)] animate-ping"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
