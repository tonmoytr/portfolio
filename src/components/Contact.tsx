"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { useState, FormEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMessage("All fields are required.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        // Reset success state after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage(resData.error || "Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error("Submit error:", err);
      setStatus("error");
      setErrorMessage("An unexpected error occurred. Please try again.");
    }
  };

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
            <form onSubmit={handleSubmit} className="flex flex-col gap-8 glass p-10 rounded-3xl">
              <div className="flex flex-col">
                <input
                  type="text"
                  placeholder="What's your name?"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-transparent border-b border-[var(--border)] pb-4 text-xl focus:outline-none focus:border-[var(--accent)] transition-colors placeholder:text-[var(--muted)]"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="email"
                  placeholder="Your email address"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-transparent border-b border-[var(--border)] pb-4 text-xl focus:outline-none focus:border-[var(--accent)] transition-colors placeholder:text-[var(--muted)]"
                />
              </div>
              <div className="flex flex-col">
                <textarea
                  placeholder="Tell me about your project"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-transparent border-b border-[var(--border)] pb-4 text-xl focus:outline-none focus:border-[var(--accent)] transition-colors resize-none placeholder:text-[var(--muted)]"
                ></textarea>
              </div>

              {/* Status Message */}
              <AnimatePresence mode="wait">
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 text-emerald-500 font-medium text-sm bg-emerald-500/10 p-4 rounded-xl border border-emerald-500/20"
                  >
                    <CheckCircle2 size={18} />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 text-red-500 font-medium text-sm bg-red-500/10 p-4 rounded-xl border border-red-500/20"
                  >
                    <AlertCircle size={18} />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="submit"
                disabled={status === "loading"}
                className="self-start mt-4 px-10 py-4 bg-[var(--foreground)] text-[var(--background)] font-bold rounded-full hover:bg-[var(--accent)] hover:text-white disabled:bg-[var(--border)] disabled:text-[var(--muted)] transition-all duration-300 flex items-center gap-2 cursor-pointer disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    Sending <Loader2 className="w-5 h-5 animate-spin" />
                  </>
                ) : (
                  <>
                    Send Message <ArrowUpRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-32 pt-8 flex flex-col md:flex-row justify-between items-center text-[var(--muted)] text-sm border-t border-[var(--border)]">
          <p>&copy; {new Date().getFullYear()} TONMOY | All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
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
