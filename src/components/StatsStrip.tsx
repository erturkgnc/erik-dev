import { stats } from "@/data/portfolio";

export default function StatsStrip() {
  return (
    <section className="relative border-y border-base-border bg-base-panel/40">
      <div className="container-page">
        <div className="grid grid-cols-2 divide-x divide-y divide-base-border sm:grid-cols-3 sm:divide-y-0 lg:grid-cols-6">
          {stats.map((stat) => (
            <div
              key={stat}
              className="flex items-center justify-center px-3 py-5 text-center"
            >
              <span className="font-mono text-[11px] uppercase tracking-wide text-ink-faint sm:text-xs">
                {stat}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
