import { buildCards } from "@/data/portfolio";
import SectionReveal from "./SectionReveal";
import { RevealGroup, RevealItem } from "./Reveal";

export default function WhatIBuildSection() {
  return (
    <section id="systems" className="section-padding relative border-t border-base-border">
      <div className="container-page">
        <SectionReveal className="mb-14 max-w-2xl">
          <span className="eyebrow">Capabilities</span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            What I Build
          </h2>
        </SectionReveal>

        <RevealGroup
          stagger={0.06}
          amount={0.15}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {buildCards.map((card) => (
            <RevealItem key={card.title}>
              <div className="card-surface h-full p-6 hover:-translate-y-1 hover:border-white/15">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ember">
                  [{card.tag}]
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold text-ink">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-dim">{card.description}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
