"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import { navLinks } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { EASE_OUT } from "@/lib/motion";

const SECTION_IDS = navLinks.map((link) => link.href.replace("#", ""));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        scrolled
          ? "border-b border-base-border bg-canvas/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="container-page flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-display text-sm font-semibold tracking-tight text-ink">
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-base-border bg-base-elevated text-ember">
            <Terminal className="h-3.5 w-3.5" strokeWidth={2.5} />
          </span>
          <span>
            gameplay<span className="text-ember">.dev</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <li key={link.href} className="relative py-1">
                <a
                  href={link.href}
                  className={cn(
                    "text-sm transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    isActive ? "text-ink" : "text-ink-dim hover:text-ink"
                  )}
                >
                  {link.label}
                </a>
                {isActive && (
                  <motion.span
                    layoutId="nav-active-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-ember"
                    transition={{ duration: 0.4, ease: EASE_OUT }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <a href="#contact" className="btn-primary !px-5 !py-2.5 text-sm">
            Hire Me
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-base-border text-ink transition-colors duration-300 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-base-border bg-canvas/95 backdrop-blur-md md:hidden">
          <ul className="container-page flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm text-ink-dim transition-colors duration-300 hover:bg-white/[0.04] hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-primary w-full"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
