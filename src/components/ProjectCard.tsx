"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, ExternalLink, Boxes } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import VideoModal from "./VideoModal";

export default function ProjectCard({
  project,
  reversed = false,
}: {
  project: Project;
  reversed?: boolean;
}) {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <article
      className="card-surface group grid gap-0 overflow-hidden transition-colors duration-300 hover:border-white/15 lg:grid-cols-2"
    >
      {/* Preview */}
      <div
        className={cn(
          "relative aspect-video overflow-hidden bg-base-elevated lg:aspect-auto lg:min-h-[320px]",
          reversed ? "lg:order-2" : "lg:order-1"
        )}
      >
        {project.thumbnail ? (
          <Image
            src={project.thumbnail}
            alt={`${project.title} preview`}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,106,61,0.16),transparent_55%)]">
            <div className="absolute inset-0 bg-grid-pattern bg-[size:32px_32px] opacity-40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Boxes className="h-14 w-14 text-white/10 transition-colors duration-300 group-hover:text-ember/25" strokeWidth={1.2} />
            </div>
          </div>
        )}

        {project.badge && (
          <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-signal-green/30 bg-signal-green/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-signal-green">
            <span className="h-1.5 w-1.5 rounded-full bg-signal-green" />
            {project.badge}
          </span>
        )}

        {project.video && (
          <button
            type="button"
            onClick={() => setVideoOpen(true)}
            className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/30"
            aria-label={`Watch ${project.title} showcase`}
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-black/40 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 group-hover:scale-105">
              <Play className="ml-0.5 h-5 w-5 text-white" fill="white" />
            </span>
          </button>
        )}
      </div>

      {/* Content */}
      <div className={cn("flex flex-col justify-center p-7 sm:p-9", reversed ? "lg:order-1" : "lg:order-2")}>
        <span className="eyebrow mb-3">{project.category}</span>
        <h3 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-[28px]">
          {project.title}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-ink-dim sm:text-[15px]">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="tag-pill">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          {project.playUrl && (
            <a
              href={project.playUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Play Game
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
          {project.video && (
            <button type="button" onClick={() => setVideoOpen(true)} className="btn-secondary">
              Watch Showcase
              <Play className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>

      {videoOpen && project.video && (
        <VideoModal url={project.video} title={project.title} onClose={() => setVideoOpen(false)} />
      )}
    </article>
  );
}
