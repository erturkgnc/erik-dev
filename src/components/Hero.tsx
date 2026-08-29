"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight, CircleDot } from "lucide-react";
import { hero } from "@/data/portfolio";
import SystemGraphBackground from "./SystemGraphBackground";
import { staggerContainer, fadeUpItem } from "@/lib/motion";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // As the visitor scrolls away from the hero, let the content settle out
  // gently rather than just disappearing under the next section.
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, shouldReduceMotion ? 1 : 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.7], [0, shouldReduceMotion ? 0 : -28]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative overflow-hidden pb-20 pt-40 sm:pb-28 sm:pt-48"
    >
      <SystemGraphBackground />

      <motion.div style={{ opacity: contentOpacity, y: contentY }} className="container-page relative">
        <motion.div
          variants={staggerContainer(0.12, 0.05)}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          <motion.div
            variants={fadeUpItem}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-base-border bg-base-panel/60 px-3.5 py-1.5 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal-green opacity-60" />
              <CircleDot className="h-2 w-2 text-signal-green" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-dim">
              {hero.eyebrow}
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUpItem}
            className="max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl"
          >
            {hero.heading}
          </motion.h1>

          <motion.p
            variants={fadeUpItem}
            className="mt-6 max-w-xl text-balance text-base leading-relaxed text-ink-dim sm:text-lg"
          >
            {hero.subheading}
          </motion.p>

          <motion.div
            variants={fadeUpItem}
            className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
          >
            <a href={hero.primaryCta.href} className="btn-primary group w-full sm:w-auto">
              {hero.primaryCta.label}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1" />
            </a>
            <a href={hero.secondaryCta.href} className="btn-secondary w-full sm:w-auto">
              {hero.secondaryCta.label}
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
