"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { Home, Layers, MessageSquare, Moon, Sun, User } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", icon: <Home size={18} /> },
    { name: "About", icon: <User size={18} /> },
    { name: "Projects", icon: <Layers size={18} /> },
    { name: "Contacts", icon: <MessageSquare size={18} /> },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center mt-6 px-4"
    >
      <div
        className={clsx(
          "flex items-center justify-between px-8 py-3 rounded-full transition-all duration-500",
          scrolled
            ? "glass shadow-[0_0_30px_rgba(0,0,0,0.1)] dark:shadow-[0_0_30px_rgba(0,0,0,0.5)] w-full max-w-4xl"
            : "bg-transparent border border-transparent w-full max-w-6xl",
        )}
      >
        <Link
          href="/"
          className="text-xl font-bold tracking-tighter flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[var(--accent)] to-purple-500 flex items-center justify-center text-white text-xs">
            TR
          </div>
          TONMOY<span className="text-[var(--accent)]"></span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[var(--muted)]">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={`#${item.name.toLowerCase()}`}
              className="relative group hover:text-[var(--foreground)] transition-colors duration-300 flex items-center gap-1.5"
            >
              <span className="text-[var(--accent)]">{item.icon}</span>
              <span>{item.name}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--accent)] group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full border border-[var(--border)] hover:border-[var(--accent)] transition-colors text-[var(--muted)] hover:text-[var(--foreground)]"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
          <Link
            href="#contacts"
            className="hidden md:block px-6 py-2 rounded-full border border-[var(--border)] hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white dark:hover:text-black transition-all duration-300 font-semibold text-sm"
          >
            Let's Talk
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
