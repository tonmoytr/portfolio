"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import StickySocials from "@/components/StickySocials";
import Contact from "@/components/Contact";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col w-full relative">
      <Navbar />
      <StickySocials />

      {/* Page Header */}
      <section className="pt-40 pb-16 bg-[var(--background)]">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-2">
              <Link href="/" passHref legacyBehavior>
                <a className="text-sm font-mono tracking-widest text-[var(--muted)] hover:text-[var(--accent)] transition-colors flex items-center gap-1">
                  &larr; HOME
                </a>
              </Link>
              <span className="text-[var(--muted)]">/</span>
              <span className="text-sm font-mono tracking-widest text-[var(--accent)] font-semibold">
                PROJECTS
              </span>
            </div>

            <div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-4">
                ALL PROJECTS
              </h1>
              <div className="w-32 h-1.5 bg-[var(--accent)] mb-8"></div>
            </div>
            
            <p className="text-[var(--muted)] max-w-2xl text-xl font-light leading-relaxed">
              A comprehensive showcase of my engineering experiments, full-stack architectures, 
              and frontend designs. Explore repositories, live demos, and project highlights below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="pb-32 bg-[var(--background)]">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          >
            {projects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
