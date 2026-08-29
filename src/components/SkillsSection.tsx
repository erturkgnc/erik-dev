import { skillGroups } from "@/data/portfolio";
import SectionReveal from "./SectionReveal";
import { RevealGroup, RevealItem } from "./Reveal";

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding relative border-t border-base-border bg-base-panel/30">
      <div className="container-page">
        <SectionReveal className="mb-14 max-w-2xl">
          <span className="eyebrow">Stack</span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Technical Skills
          </h2>
        </SectionReveal>

        <RevealGroup
          stagger={0.08}
          amount={0.2}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {skillGroups.map((group) => (
            <RevealItem key={group.label}>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">
                {group.label}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5 border-l border-base-border pl-4">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-ink-dim">
                    {item}
                  </li>
                ))}
              </ul>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
