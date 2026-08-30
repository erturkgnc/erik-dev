import { featuredTrailer, projects } from "@/data/portfolio";
import FeaturedTrailer from "./FeaturedTrailer";
import ProjectCard from "./ProjectCard";
import SectionReveal from "./SectionReveal";

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="container-page">
        <SectionReveal className="mb-14 max-w-2xl">
          <span className="eyebrow">Featured Work</span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Projects &amp; System Showcases
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-dim sm:text-base">
            One public game and a set of system-focused prototypes, each built to demonstrate a
            specific slice of gameplay engineering end to end.
          </p>
        </SectionReveal>

        <div className="flex flex-col gap-6">
          <SectionReveal amount={0.12}>
            <FeaturedTrailer trailer={featuredTrailer} />
          </SectionReveal>

          {projects.map((project, i) => (
            <SectionReveal key={project.id} delay={(i + 1) * 0.05}>
              <ProjectCard project={project} reversed={i % 2 === 1} />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
