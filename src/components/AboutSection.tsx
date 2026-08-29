import { Check } from "lucide-react";
import { about, availability } from "@/data/portfolio";
import SectionReveal from "./SectionReveal";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding relative border-t border-base-border">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionReveal>
            <span className="eyebrow">About</span>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Who I Am
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-ink-dim sm:text-base">{about.body}</p>

            <div className="mt-8">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">
                Available For
              </span>
              <ul className="mt-4 grid grid-cols-2 gap-3">
                {about.availableFor.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-ink-dim">
                    <Check className="h-3.5 w-3.5 shrink-0 text-ember" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="card-surface h-full p-7 sm:p-9">
              <span className="eyebrow">Availability</span>
              <dl className="mt-6 flex flex-col divide-y divide-base-border">
                <div className="flex items-center justify-between py-3.5">
                  <dt className="text-sm text-ink-faint">Timezone</dt>
                  <dd className="font-mono text-sm text-ink">{availability.timezone}</dd>
                </div>
                <div className="flex items-center justify-between py-3.5">
                  <dt className="text-sm text-ink-faint">Status</dt>
                  <dd className="flex items-center gap-2 text-sm text-signal-green">
                    <span className="h-1.5 w-1.5 rounded-full bg-signal-green" />
                    {availability.status}
                  </dd>
                </div>
                <div className="flex items-center justify-between py-3.5">
                  <dt className="text-sm text-ink-faint">Preferred Work</dt>
                  <dd className="text-right font-mono text-sm text-ink">
                    {availability.preferredWork}
                  </dd>
                </div>
                <div className="flex items-center justify-between py-3.5">
                  <dt className="text-sm text-ink-faint">Preferred Payment</dt>
                  <dd className="font-mono text-sm text-ink">{availability.preferredPayment}</dd>
                </div>
              </dl>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
