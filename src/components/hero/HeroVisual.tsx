"use client";

import { motion, useReducedMotion } from "framer-motion";

const lines = [
  { label: "pipeline", value: "aws.s3.download()" },
  { label: "validate", value: "dedupe · schema · verify" },
  { label: "automate", value: "130 locations · 8h runtime" },
  { label: "ship", value: "python · fastapi · flutter" },
];

export function HeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div
        className="absolute -inset-8 rounded-[2rem] opacity-70 blur-3xl"
        style={{ background: "var(--hero-sheen)" }}
        aria-hidden
      />

      <motion.div
        className="relative overflow-hidden rounded-2xl border border-border bg-surface/80 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.55)] backdrop-blur"
        initial={reduceMotion ? false : { opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            systems.overview
          </span>
        </div>

        <div className="space-y-3 p-5 font-mono text-sm">
          {lines.map((line, index) => (
            <motion.div
              key={line.label}
              className="grid grid-cols-[88px_1fr] gap-3 rounded-lg border border-border/70 bg-surface-elevated/60 px-3 py-2.5"
              initial={reduceMotion ? false : { opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 + index * 0.08, duration: 0.45 }}
            >
              <span className="text-accent">{line.label}</span>
              <span className="truncate text-foreground/90">{line.value}</span>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-px border-t border-border bg-border">
          {[
            { k: "Focus", v: "Automation" },
            { k: "Stack", v: "Python · Cloud" },
            { k: "Based", v: "Pune" },
          ].map((item) => (
            <div key={item.k} className="bg-surface px-3 py-3">
              <p className="text-[10px] uppercase tracking-[0.16em] text-muted">
                {item.k}
              </p>
              <p className="mt-1 text-sm text-foreground">{item.v}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
