import { ArrowRight, CircleDot } from "lucide-react";
import { hero } from "@/data/portfolio";
import SystemGraphBackground from "./SystemGraphBackground";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-40 sm:pb-28 sm:pt-48">
      <SystemGraphBackground />

      <div className="container-page relative">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-base-border bg-base-panel/60 px-3.5 py-1.5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal-green opacity-60" />
              <CircleDot className="h-2 w-2 text-signal-green" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-dim">
              {hero.eyebrow}
            </span>
          </div>

          <h1 className="max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl">
            {hero.heading}
          </h1>

          <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-ink-dim sm:text-lg">
            {hero.subheading}
          </p>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <a href={hero.primaryCta.href} className="btn-primary group w-full sm:w-auto">
              {hero.primaryCta.label}
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <a href={hero.secondaryCta.href} className="btn-secondary w-full sm:w-auto">
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
