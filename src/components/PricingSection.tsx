import { pricing } from "@/data/portfolio";
import SectionReveal from "./SectionReveal";

export default function PricingSection() {
  return (
    <section className="relative border-t border-base-border py-16 sm:py-20">
      <div className="container-page">
        <SectionReveal className="mx-auto max-w-2xl">
          <div className="card-surface p-7 text-center sm:p-10">
            <span className="eyebrow">{pricing.eyebrow}</span>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              {pricing.heading}
            </h2>

            <div className="mt-6">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">
                {pricing.rangeLabel}
              </span>
              <p className="mt-2 font-display text-3xl font-semibold tracking-tight text-ember sm:text-4xl">
                {pricing.range}
              </p>
            </div>

            <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-ink-dim sm:text-base">
              {pricing.explanation}
            </p>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-dim sm:text-base">
              {pricing.note}
            </p>

            <p className="mt-6 font-mono text-[11px] uppercase tracking-wide text-ink-faint">
              {pricing.detail}
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
