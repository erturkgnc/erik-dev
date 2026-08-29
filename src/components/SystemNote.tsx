import { systemNote } from "@/data/portfolio";

export default function SystemNote() {
  return (
    <div className="container-page">
      <p className="mx-auto max-w-2xl text-center text-xs leading-relaxed text-ink-faint">
        {systemNote}
      </p>
    </div>
  );
}
