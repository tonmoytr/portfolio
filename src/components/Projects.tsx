"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  // Only show the first 4 projects on the home page
  const featuredProjects = projects.slice(0, 4);

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
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* See All Projects Button */}
        <div className="flex justify-center mt-20">
          <Link href="/projects">
            <motion.span
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white font-bold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(var(--accent-rgb),0.1)] hover:shadow-[0_0_30px_rgba(var(--accent-rgb),0.4)] cursor-pointer"
            >
              <span>See All Projects</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </motion.span>
          </Link>
        </div>
      </div>
    </section>
  );
}
