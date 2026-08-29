import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#05070A",
          panel: "#0B0F16",
          elevated: "#10151F",
          border: "#1C232F",
          borderSoft: "#151B25",
        },
        ink: {
          DEFAULT: "#E9EDF3",
          dim: "#9AA4B5",
          faint: "#5B6478",
        },
        ember: {
          DEFAULT: "#FF6A3D",
          soft: "#FFA379",
          dim: "#7A3B23",
        },
        signal: {
          green: "#3DDC8A",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
        "ember-radial":
          "radial-gradient(circle at 50% 0%, rgba(255,106,61,0.16), transparent 60%)",
      },
      boxShadow: {
        card: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 24px 48px -24px rgba(0,0,0,0.6)",
        glow: "0 0 0 1px rgba(255,106,61,0.4), 0 0 32px 0 rgba(255,106,61,0.25)",
      },
      keyframes: {
        "pulse-node": {
          "0%, 100%": { opacity: "0.35", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.4)" },
        },
        "drift": {
          "0%": { transform: "translate3d(0,0,0)" },
          "100%": { transform: "translate3d(-40px,-40px,0)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "pulse-node": "pulse-node 3.2s ease-in-out infinite",
        "drift": "drift 60s linear infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
