"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { MotionConfig } from "framer-motion";
import Lenis from "lenis";

/**
 * Sets up:
 *  - Lenis smooth scrolling (desktop, non-reduced-motion only — mobile/touch
 *    and prefers-reduced-motion users get plain native scrolling).
 *  - Framer Motion's reducedMotion="user", which automatically strips
 *    transform-based animation (translate/scale) for prefers-reduced-motion
 *    users across every whileInView/animate in the app, while leaving
 *    opacity transitions intact.
 */
export default function Providers({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;

    // Respect OS-level reduced motion and let touch devices keep their
    // native momentum scrolling — Lenis is a desktop-wheel enhancement only.
    if (prefersReducedMotion || isCoarsePointer) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
    });
    lenisRef.current = lenis;

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // Keep in-page anchor links (navbar, hero CTAs, footer) working smoothly
    // through Lenis instead of an abrupt native jump.
    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest('a[href^="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      const destination = document.querySelector(href);
      if (!destination) return;

      event.preventDefault();
      lenis.scrollTo(destination as HTMLElement, { offset: -84 });
      window.history.pushState(null, "", href);
    };
    document.addEventListener("click", handleAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", handleAnchorClick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
