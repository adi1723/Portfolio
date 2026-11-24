import type { ReactNode } from "react";
import type { Project } from "@/data/projects";

export function ProjectVisual({ project }: { project: Project }) {
  const panels: Record<Project["visual"], ReactNode> = {
    travel: (
      <div className="relative h-full overflow-hidden p-6">
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background: `radial-gradient(circle at 20% 20%, ${project.accent}55, transparent 45%), linear-gradient(160deg, #0b1220, #102033 60%, #0a1624)`,
          }}
        />
        <div className="relative space-y-3">
          <div className="h-28 rounded-xl border border-white/10 bg-white/5 backdrop-blur" />
          <div className="grid grid-cols-3 gap-3">
            <div className="h-16 rounded-lg border border-white/10 bg-white/8" />
            <div className="h-16 rounded-lg border border-white/10 bg-white/8" />
            <div className="h-16 rounded-lg border border-white/10 bg-white/8" />
          </div>
          <p className="pt-2 font-mono text-xs uppercase tracking-[0.2em] text-white/70">
            travel · booking · admin
          </p>
        </div>
      </div>
    ),
    automation: (
      <div className="relative h-full overflow-hidden p-6">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(145deg, #07140f, #0c1f1a 45%, #082018), radial-gradient(circle at 80% 20%, ${project.accent}44, transparent 40%)`,
          }}
        />
        <div className="relative space-y-2 font-mono text-[11px] text-teal-100/80">
          {[
            "S3 → download → validate",
            "PDF · XLSX · CSV · ZIP",
            "dedupe · missing-file checks",
            "location status matrix",
          ].map((row) => (
            <div
              key={row}
              className="rounded-md border border-teal-200/15 bg-black/20 px-3 py-2"
            >
              {row}
            </div>
          ))}
          <p className="pt-3 text-xs uppercase tracking-[0.18em] text-teal-200/60">
            sanitized architecture view
          </p>
        </div>
      </div>
    ),
    rag: (
      <div className="relative flex h-full items-center justify-center overflow-hidden p-6">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 50% 40%, ${project.accent}33, transparent 50%), linear-gradient(180deg, #120b1f, #1a1030)`,
          }}
        />
        <div className="relative grid w-full max-w-xs grid-cols-3 gap-3">
          {["Docs", "Embed", "Retrieve", "Rank", "Context", "Answer"].map(
            (node) => (
              <div
                key={node}
                className="rounded-lg border border-white/10 bg-white/5 px-2 py-3 text-center text-[11px] text-white/80"
              >
                {node}
              </div>
            ),
          )}
        </div>
      </div>
    ),
    summarizer: (
      <div className="relative h-full overflow-hidden p-6">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(160deg, #1a1408, #241a0b), radial-gradient(circle at 30% 20%, ${project.accent}40, transparent 45%)`,
          }}
        />
        <div className="relative space-y-3">
          <div className="h-20 rounded-lg border border-amber-100/10 bg-white/5 p-3">
            <div className="mb-2 h-2 w-2/3 rounded bg-white/20" />
            <div className="mb-1.5 h-2 w-full rounded bg-white/10" />
            <div className="h-2 w-5/6 rounded bg-white/10" />
          </div>
          <div className="rounded-lg border border-amber-100/10 bg-black/20 p-3 text-xs text-amber-50/80">
            PDF / DOCX → Azure OpenAI → concise summary
          </div>
        </div>
      </div>
    ),
    chatbot: (
      <div className="relative h-full overflow-hidden p-6">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(160deg, #1a0b12, #250f1a), radial-gradient(circle at 70% 30%, ${project.accent}40, transparent 45%)`,
          }}
        />
        <div className="relative space-y-3">
          <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-white/10 px-3 py-2 text-xs text-white/80">
            What does this document say about X?
          </div>
          <div className="max-w-[85%] rounded-2xl rounded-tl-sm border border-white/10 bg-black/25 px-3 py-2 text-xs text-white/80">
            Retrieved context → grounded response with memory.
          </div>
        </div>
      </div>
    ),
  };

  return (
    <div className="aspect-[16/10] w-full overflow-hidden rounded-xl border border-border bg-surface-elevated">
      {panels[project.visual]}
    </div>
  );
}
