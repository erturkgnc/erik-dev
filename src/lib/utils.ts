import { type ClassValue, clsx } from "clsx";
import type { VideoKind } from "@/data/portfolio";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * Determines how a video URL should be embedded and returns a normalized
 * embed URL where relevant (YouTube watch links -> embed links, etc).
 */
export function resolveVideo(url: string): { kind: VideoKind; embedUrl: string } {
  const youtubeMatch = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{6,})/
  );
  if (youtubeMatch) {
    return {
      kind: "youtube",
      embedUrl: `https://www.youtube.com/embed/${youtubeMatch[1]}?autoplay=1&rel=0`,
    };
  }

  if (/drive\.google\.com/.test(url)) {
    // Convert a standard share link to a preview-embeddable link.
    const fileIdMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    const embedUrl = fileIdMatch
      ? `https://drive.google.com/file/d/${fileIdMatch[1]}/preview`
      : url;
    return { kind: "drive", embedUrl };
  }

  if (/\.mp4($|\?)/.test(url)) {
    return { kind: "mp4", embedUrl: url };
  }

  return { kind: "external", embedUrl: url };
}
