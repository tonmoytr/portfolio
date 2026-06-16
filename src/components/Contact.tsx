"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contacts"
      className="relative bg-[var(--background)] text-[var(--foreground)] pt-32 pb-10 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-[var(--accent)] blur-[150px] opacity-[0.05] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-[12vw] leading-[0.8] font-bold tracking-tighter uppercase mb-4 neon-gradient-text">
            Let's Work
          </h2>
          <h2
            className="text-[12vw] leading-[0.8] font-bold tracking-tighter uppercase mb-16 text-transparent"
            style={{ WebkitTextStroke: "2px var(--foreground)", opacity: 0.8 }}
          >
            Together
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-[var(--border)] pt-16">
          <div className="flex flex-col">
            <h3 className="text-3xl font-bold mb-8">Got a project in mind?</h3>
            <p className="text-[var(--muted)] text-xl max-w-md mb-12">
              I'm always open to discussing product design work or partnership
              opportunities.
            </p>
            <div className="mt-auto">
              <a
                href="mailto:tonmoytr0110@gmail.com"
                className="text-2xl md:text-4xl font-medium hover:text-[var(--accent)] transition-colors border-b border-transparent hover:border-[var(--accent)] pb-2 inline-flex items-center gap-2"
              >
                tonmoytr0110@gmail.com <ArrowUpRight className="w-8 h-8" />
              </a>
            </div>
          </div>

          <div>
            <form className="flex flex-col gap-8 glass p-10 rounded-3xl">
              <div className="flex flex-col">
                <input
                  type="text"
                  placeholder="What's your name?"
                  className="bg-transparent border-b border-[var(--border)] pb-4 text-xl focus:outline-none focus:border-[var(--accent)] transition-colors placeholder:text-[var(--muted)]"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-transparent border-b border-[var(--border)] pb-4 text-xl focus:outline-none focus:border-[var(--accent)] transition-colors placeholder:text-[var(--muted)]"
                />
              </div>
              <div className="flex flex-col">
                <textarea
                  placeholder="Tell me about your project"
                  rows={4}
                  className="bg-transparent border-b border-[var(--border)] pb-4 text-xl focus:outline-none focus:border-[var(--accent)] transition-colors resize-none placeholder:text-[var(--muted)]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="self-start mt-4 px-10 py-4 bg-[var(--foreground)] text-[var(--background)] font-bold rounded-full hover:bg-[var(--accent)] hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                Send Message <ArrowUpRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-32 pt-8 flex flex-col md:flex-row justify-between items-center text-[var(--muted)] text-sm border-t border-[var(--border)]">
          <p>&copy; {new Date().getFullYear()} TONMOY | All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            {/* <a
              href="#"
              className="hover:text-[var(--foreground)] transition-colors"
            >
              Twitter
            </a> */}
            <a
              href="https://www.linkedin.com/in/tr-tonmoy-roy/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--foreground)] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/tonmoytr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--foreground)] transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
