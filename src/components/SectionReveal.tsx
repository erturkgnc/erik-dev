"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { EASE_OUT, DURATION } from "@/lib/motion";

export default function SectionReveal({
  children,
  delay = 0,
  amount = 0.2,
  className,
}: {
  children: ReactNode;
  delay?: number;
  amount?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: DURATION.section, delay, ease: EASE_OUT }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
