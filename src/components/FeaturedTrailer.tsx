"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Clapperboard, Play } from "lucide-react";
import type { FeaturedTrailer as FeaturedTrailerData } from "@/data/portfolio";
import VideoModal from "./VideoModal";

export default function FeaturedTrailer({ trailer }: { trailer: FeaturedTrailerData }) {
  const [videoOpen, setVideoOpen] = useState(false);
  const mediaRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const hasTrailer = trailer.url.trim().length > 0;
  const hasThumbnail = trailer.thumbnail.trim().length > 0;

  const { scrollYProgress } = useScroll({
    target: mediaRef,
    offset: ["start end", "end start"],
  });
  const mediaParallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    [shouldReduceMotion ? 0 : -10, shouldReduceMotion ? 0 : 10]
  );

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-ember/30 bg-base-panel/90 shadow-[0_1px_0_0_rgba(255,255,255,0.05)_inset,0_30px_70px_-38px_rgba(255,106,61,0.5)] transition-[border-color,box-shadow,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-ember/50 hover:shadow-[0_1px_0_0_rgba(255,255,255,0.07)_inset,0_34px_80px_-34px_rgba(255,106,61,0.65)]">
      <div className="pointer-events-none absolute -top-28 left-1/2 h-64 w-3/4 -translate-x-1/2 rounded-full bg-ember/15 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative border-b border-base-border px-6 py-6 sm:px-8 sm:py-7">
        <span className="eyebrow">{trailer.eyebrow}</span>
        <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          {trailer.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-dim sm:text-base">
          {trailer.subtitle}
        </p>
      </div>

      <motion.div ref={mediaRef} className="relative aspect-video overflow-hidden bg-base-elevated">
        <motion.div
          style={{ y: mediaParallaxY }}
          className="absolute inset-0 scale-[1.06] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.1]"
        >
          {hasThumbnail ? (
            <Image
              src={trailer.thumbnail}
              alt={`${trailer.title} poster`}
              fill
              priority={false}
              sizes="(min-width: 1280px) 1152px, (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)"
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,106,61,0.25),transparent_55%),linear-gradient(135deg,#10151F,#05070A)]">
              <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-40" />
              <Clapperboard
                className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 text-white/10"
                strokeWidth={1}
              />
            </div>
          )}
        </motion.div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-black/25" />

        <button
          type="button"
          onClick={() => hasTrailer && setVideoOpen(true)}
          disabled={!hasTrailer}
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center disabled:cursor-default"
          aria-label={hasTrailer ? `Watch ${trailer.title}` : `${trailer.title} link coming soon`}
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/25 bg-black/45 shadow-[0_0_30px_rgba(255,106,61,0.2)] backdrop-blur-md transition-[transform,border-color,background-color,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:border-ember/60 group-hover:bg-ember/20 group-hover:shadow-[0_0_38px_rgba(255,106,61,0.35)] sm:h-20 sm:w-20">
            <Play className="ml-1 h-6 w-6 text-white sm:h-7 sm:w-7" fill="white" />
          </span>
          <span className="rounded-full border border-white/15 bg-black/45 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-white/90 backdrop-blur-md sm:text-[11px]">
            {hasTrailer ? "Watch Trailer" : "Trailer Coming Soon"}
          </span>
        </button>
      </motion.div>

      {videoOpen && hasTrailer && (
        <VideoModal
          url={trailer.url}
          title={trailer.title}
          descriptor="trailer"
          onClose={() => setVideoOpen(false)}
        />
      )}
    </article>
  );
}
