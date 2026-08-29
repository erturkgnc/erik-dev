// ─────────────────────────────────────────────────────────────────────────
// MOTION SYSTEM
// Central tokens so every reveal, hover, and scroll transition in the site
// shares the same easing curve and timing scale. Change values here to
// retune the whole site's motion feel.
// ─────────────────────────────────────────────────────────────────────────

/** Premium "ease out expo"-adjacent curve used across the site. */
export const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const DURATION = {
  /** Buttons, icons, small hover feedback. */
  micro: 0.28,
  /** Cards, individual reveal elements. */
  element: 0.55,
  /** Whole-section reveals. */
  section: 0.75,
};

/** Standalone fade + rise, for a single element revealing on scroll. */
export const fadeUpVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.section, ease: EASE_OUT },
  },
};

/** Container variant: reveals itself invisibly, staggers children instead. */
export function staggerContainer(stagger = 0.09, delayChildren = 0) {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren,
      },
    },
  };
}

/** Child item for use inside a staggerContainer parent. */
export const fadeUpItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.element, ease: EASE_OUT },
  },
};

/** Slightly smaller rise + scale, for media/preview panels. */
export const mediaRevealVariants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION.element, ease: EASE_OUT },
  },
};

/** Fast fade for tags/buttons that should trail after main content. */
export const trailingFadeItem = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.micro, ease: EASE_OUT },
  },
};
