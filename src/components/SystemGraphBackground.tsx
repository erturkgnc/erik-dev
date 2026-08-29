"use client";

// A quiet, code-editor-adjacent ambient motif: a sparse node graph with
// pulsing connection points, evoking a gameplay system / state diagram.
// Moves at a barely-noticeable parallax rate as its section scrolls by —
// disabled entirely for prefers-reduced-motion users.

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

const NODES: { x: number; y: number; delay: string }[] = [
  { x: 80, y: 90, delay: "0s" },
  { x: 260, y: 40, delay: "0.6s" },
  { x: 430, y: 130, delay: "1.2s" },
  { x: 610, y: 60, delay: "0.3s" },
  { x: 760, y: 160, delay: "1.6s" },
  { x: 190, y: 220, delay: "0.9s" },
  { x: 520, y: 240, delay: "2s" },
  { x: 880, y: 100, delay: "0.2s" },
];

const EDGES: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 5],
  [2, 6],
  [3, 7],
  [5, 6],
];

export default function SystemGraphBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Barely-noticeable drift — graph layer moves a little more than the grid,
  // giving a subtle sense of depth without ever reading as "parallax".
  const graphY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 46]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 20]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 30]);

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        style={{ y: gridY }}
        className="absolute inset-0 bg-grid-pattern bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]"
      />
      <motion.div style={{ y: glowY }} className="absolute inset-0 bg-ember-radial" />
      <motion.svg
        style={{ y: graphY }}
        viewBox="0 0 960 320"
        className="absolute left-1/2 top-0 h-[420px] w-[1100px] -translate-x-1/2 opacity-[0.35]"
        fill="none"
        aria-hidden="true"
      >
        {EDGES.map(([a, b], i) => (
          <line
            key={i}
            x1={NODES[a].x}
            y1={NODES[a].y}
            x2={NODES[b].x}
            y2={NODES[b].y}
            stroke="url(#edge-gradient)"
            strokeWidth="1"
          />
        ))}
        <defs>
          <linearGradient id="edge-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FF6A3D" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#FF6A3D" stopOpacity="0" />
          </linearGradient>
        </defs>
        {NODES.map((n, i) => (
          <circle
            key={i}
            cx={n.x}
            cy={n.y}
            r="3.5"
            fill="#FF6A3D"
            className="animate-pulse-node"
            style={{ animationDelay: n.delay, transformOrigin: `${n.x}px ${n.y}px` }}
          />
        ))}
      </motion.svg>
    </div>
  );
}
