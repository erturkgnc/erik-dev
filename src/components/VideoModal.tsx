"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { resolveVideo } from "@/lib/utils";

export default function VideoModal({
  url,
  title,
  onClose,
}: {
  url: string;
  title: string;
  onClose: () => void;
}) {
  const { kind, embedUrl } = resolveVideo(url);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} showcase video`}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-base-border bg-base-elevated shadow-card"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-base-border px-4 py-3">
          <span className="truncate font-mono text-xs uppercase tracking-wide text-ink-dim">
            {title} — showcase
          </span>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-ink-dim transition-colors hover:bg-white/[0.06] hover:text-ink"
            aria-label="Close video"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="aspect-video w-full bg-black">
          {kind === "youtube" || kind === "drive" ? (
            <iframe
              src={embedUrl}
              title={`${title} showcase video`}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          ) : kind === "mp4" ? (
            // eslint-disable-next-line jsx-a11y/media-has-caption
            <video src={embedUrl} controls autoPlay className="h-full w-full" />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 px-6 text-center">
              <p className="text-sm text-ink-dim">
                This showcase opens on an external page.
              </p>
              <a
                href={embedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Open Video
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
