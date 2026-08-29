import { approach } from "@/data/portfolio";
import SectionReveal from "./SectionReveal";

export default function ApproachSection() {
  return (
    <section className="relative border-t border-base-border py-16 sm:py-20">
      <div className="container-page">
        <SectionReveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Approach</span>
          <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            {approach.heading}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-dim sm:text-base">{approach.body}</p>
        </SectionReveal>
      </div>
    </section>
  );
}
