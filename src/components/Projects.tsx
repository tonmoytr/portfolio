"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const projects = [
  {
    title: "BloodBridge",
    description:
      "Bridging Hope to Life | A digital lifeline connecting verified donors with patients in critical need. One tap, one connection, infinite impact",
    image: "/images/1.png",
    tags: ["Next.js", "Tailwind", "MongoDB", "Mongoose"],
    github: "https://github.com/tonmoytr/blood-bridge",
    live: "https://blood-bridge-lac.vercel.app/",
  },
  {
    title: "KeenKeeper",
    description:
      "Friends to keep close in your life | Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.",
    image: "/images/2.png",
    tags: ["NextJs", "Tailwind", "Recharts", "React DOM"],
    github: "https://github.com/tonmoytr/keenkeeper",
    live: "https://keenkeeper-trt.vercel.app/",
  },
  {
    title: "Digitools",
    description:
      "Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.",
    image: "/images/3.png",
    tags: ["ReactJs", "React-DOM", "Tailwind", "DaisyUI"],
    github: "https://tr-digitools-platform.vercel.app/",
    live: "https://github.com/tonmoytr/tr-digitools-platform",
  },
  {
    title: "Job App Tracker",
    description:
      "Track and manage your job applications in one organized place.",
    image: "/images/4.png",
    tags: ["React", "TypeScript", "Chart.js", "Firebase"],
    github: "https://tr-job-app-tracker.vercel.app/",
    live: "https://github.com/tonmoytr/tr-job-app-tracker",
  },
];

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative h-[600px] w-full flex items-end justify-center overflow-hidden rounded-3xl group shadow-lg"
    >
      {/* Parallax Image */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover brightness-50 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[rgba(var(--background-rgb),0.5)] to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full p-6 lg:p-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass p-8 rounded-3xl w-full border border-[var(--border)] group-hover:border-[var(--accent)] transition-colors duration-500"
        >
          <div className="flex flex-col gap-4 mb-6">
            <div className="flex justify-between items-start w-full">
              <p className="text-[var(--accent)] font-mono tracking-widest text-xs font-semibold">
                0{index + 1} &mdash; FEATURED
              </p>
              <div className="flex gap-3">
                <a
                  href={project.github}
                  className="w-10 h-10 rounded-full bg-[var(--background)] border border-[var(--border)] flex items-center justify-center hover:bg-[var(--accent)] hover:border-transparent hover:text-white transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
                <a
                  href={project.live}
                  className="w-10 h-10 rounded-full bg-[var(--accent)] text-white flex items-center justify-center hover:bg-[var(--accent-hover)] hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-[rgba(var(--accent-rgb),0.3)]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" x2="21" y1="14" y2="3" />
                  </svg>
                </a>
              </div>
            </div>

            <h3 className="text-3xl xl:text-4xl font-bold tracking-tight uppercase text-left">
              {project.title}
            </h3>
          </div>

          <div className="flex flex-col gap-6 items-start">
            <p className="text-base text-[var(--muted)] text-left font-light line-clamp-3">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 w-full justify-start">
              {project.tags.map((tag: string, i: number) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-[var(--background)] rounded-full text-[10px] font-semibold tracking-wider uppercase border border-[var(--border)] text-[var(--foreground)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-[var(--background)]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <h2 className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter">
              SELECTED WORKS
            </h2>
            <div className="w-24 h-1 bg-[var(--accent)]"></div>
          </div>
          <p className="text-[var(--muted)] max-w-sm text-lg">
            A showcase of my latest engineering endeavors, combining aesthetics
            with robust architecture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
