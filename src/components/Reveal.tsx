"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { staggerContainer, fadeUpItem } from "@/lib/motion";

/**
 * Wrap a group of elements to have them fade/rise in with a slight stagger
 * as the group scrolls into view. Children should be <RevealItem>.
 */
export function RevealGroup({
  children,
  className,
  stagger = 0.09,
  delayChildren = 0,
  amount = 0.2,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
  amount?: number;
}) {
  return (
    <motion.div
      variants={staggerContainer(stagger, delayChildren)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={fadeUpItem} className={className}>
      {children}
    </motion.div>
  );
}
