"use client";

import { experiences } from "@/data/experience";
import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  Code2,
  GitBranch,
  Layout,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";

export default function Experience() {
  // We have our single experience from Ivey Solutions
  const exp = experiences[0];

  // Map each highlight to specific details and icons for a premium look
  const detailedHighlights = [
    {
      title: "Responsive Interface Engineering",
      description: exp.highlights[0],
      icon: <Layout className="text-[var(--accent)] w-6 h-6" />,
      techs: ["HTML5", "CSS3", "Vanilla JS", "Figma"],
      glowColor: "var(--accent)",
    },
    {
      title: "Component-Driven Architecture",
      description: exp.highlights[1],
      icon: <Code2 className="text-[var(--accent)] w-6 h-6" />,
      techs: ["React.js", "Modular UI", "Reusable Components"],
      glowColor: "var(--accent)",
    },
    {
      title: "Agile Collaboration & Version Control",
      description: exp.highlights[2],
      icon: <GitBranch className="text-[var(--accent)] w-6 h-6" />,
      techs: ["Git", "GitHub", "Code Reviews", "Agile Sprints"],
      glowColor: "var(--accent)",
    },
  ];

  return (
    <section
      id="experience"
      className="py-32 bg-[var(--background)] relative border-t border-[var(--border)] overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[var(--accent)] rounded-full blur-[150px] opacity-[0.03] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[var(--accent)] rounded-full blur-[150px] opacity-[0.03] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <h2 className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter uppercase">
              Experience
            </h2>
            <div className="w-24 h-1 bg-[var(--accent)]"></div>
          </div>
          <p className="text-[var(--muted)] max-w-sm text-lg">
            My professional journey of building modular, responsive, and
            collaboration-first web architectures.
          </p>
        </motion.div>

        {/* 12-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Company & Role Main Summary Card (5 Columns) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="glass rounded-3xl p-8 relative overflow-hidden border border-[var(--border)]">
              {/* Corner Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent)] rounded-full blur-[60px] opacity-10" />

              {/* Company Logo Badge */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[var(--accent)] to-purple-600 flex items-center justify-center text-white text-2xl font-bold mb-8 shadow-lg shadow-[rgba(0,240,255,0.15)]">
                <Image
                  src="/images/ivey.png"
                  width={60}
                  height={60}
                  className="rounded-2xl"
                  alt="Ivey Solutions logo"
                />
              </div>

              {/* Title & Company */}
              <h3 className="text-3xl font-bold text-[var(--foreground)] tracking-tight mb-2">
                {exp.role}
              </h3>
              <p className="text-xl text-[var(--accent)] font-semibold mb-6 flex items-center gap-2">
                {exp.company}
              </p>

              <hr className="border-[var(--border)] my-6" />

              {/* Metadata Info */}
              <div className="flex flex-col gap-4 text-[var(--muted)] text-sm font-medium">
                <div className="flex items-center gap-3">
                  <Calendar size={18} className="text-[var(--accent)]" />
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Briefcase size={18} className="text-[var(--accent)]" />
                  <span className="px-3 py-0.5 rounded-full bg-[rgba(37,99,235,0.1)] dark:bg-[rgba(0,240,255,0.1)] text-[var(--accent)] font-semibold text-xs border border-[var(--border)]">
                    {exp.location}
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-xs uppercase tracking-widest font-bold text-[var(--muted)] mb-4">
                  Core Competencies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-xl bg-[var(--card)] border border-[var(--border)] text-xs text-[var(--foreground)] font-semibold hover:border-[var(--accent)] transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Stat Badge */}
            <div className="glass rounded-2xl p-6 flex items-center gap-4 border border-[var(--border)]">
              <div className="p-3 rounded-xl bg-[rgba(37,99,235,0.1)] dark:bg-[rgba(0,240,255,0.1)] text-[var(--accent)]">
                <ShieldCheck size={24} />
              </div>
              <div>
                <p className="text-xs text-[var(--muted)] uppercase tracking-wider font-semibold">
                  Tenure Duration
                </p>
                <p className="text-lg font-bold text-[var(--foreground)]">
                  2 Years 3 Months
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Detailed Achievement Bento Cards (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {detailedHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -5, scale: 1.01 }}
                className="glass rounded-2xl p-8 border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-300 relative overflow-hidden group cursor-default"
              >
                {/* Radial Glow on Hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 10% 20%, ${highlight.glowColor}, transparent 50%)`,
                  }}
                />

                <div className="flex flex-col md:flex-row md:items-start gap-5 relative z-10">
                  {/* Icon Wrapper */}
                  <div className="p-3.5 rounded-2xl bg-[var(--card)] border border-[var(--border)] group-hover:border-[var(--accent)] transition-colors duration-300 shrink-0 shadow-sm">
                    {highlight.icon}
                  </div>

                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-[var(--foreground)] mb-3 group-hover:text-[var(--accent)] transition-colors duration-300">
                      {highlight.title}
                    </h4>
                    <p className="text-[var(--muted)] text-base leading-relaxed mb-4">
                      {highlight.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {highlight.techs.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg bg-[rgba(255,255,255,0.05)] dark:bg-[rgba(255,255,255,0.02)] border border-[var(--border)] text-xs text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
