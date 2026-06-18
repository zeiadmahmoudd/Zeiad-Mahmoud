"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ScanLine, Cpu, ShieldCheck, Braces, Search, FolderTree, Layers,
  Database, Bot, MessageSquareText, Download, Box, Boxes, Sparkles, BarChart3,
} from "lucide-react";
import { architectures } from "@/lib/data";

const iconMap = {
  scan: ScanLine, model: Cpu, shield: ShieldCheck, json: Braces, search: Search,
  source: FolderTree, embed: Layers, vector: Database, llm: Bot, answer: MessageSquareText,
  ingest: Download, bronze: Box, silver: Boxes, gold: Sparkles, analytics: BarChart3,
} as const;

const ease = [0.16, 1, 0.3, 1] as const;

const nodeContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};
const nodeItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
};

function Connector() {
  const reduce = useReducedMotion();
  return (
    <div className="relative h-0.5 w-8 shrink-0 self-center rounded bg-white/15 sm:w-12">
      {!reduce && (
        <motion.span
          className="absolute top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-accent-2 shadow-[0_0_8px_2px_rgba(192,38,90,0.6)]"
          animate={{ left: ["0%", "100%"] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
        />
      )}
    </div>
  );
}

export default function Architecture() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(architectures[0].id);
  const arch = architectures.find((a) => a.id === active)!;

  return (
    <section id="architecture" className="bg-deep relative overflow-hidden py-24 text-[color:var(--color-ink-invert)] sm:py-28">
      <div className="bg-dots pointer-events-none absolute inset-0 opacity-[0.15]" aria-hidden />
      <div className="relative mx-auto max-w-[1180px] px-5 sm:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease }}
        >
          <p className="text-sm font-semibold text-accent-soft">How I build it</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Architecture for the solutions I ship.
          </h2>
          <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-white/70">
            The real building blocks behind each solution. Switch between them to
            see the data flow end to end.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="mt-8 flex flex-wrap gap-2">
          {architectures.map((a) => {
            const isActive = a.id === active;
            return (
              <button
                key={a.id}
                type="button"
                onClick={() => setActive(a.id)}
                aria-pressed={isActive}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all active:scale-[0.97] ${
                  isActive
                    ? "border-transparent bg-white text-[color:var(--color-accent)] shadow-soft"
                    : "border-white/20 bg-white/5 text-white/80 hover:bg-white/10"
                }`}
              >
                {a.label}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={arch.id}
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease }}
            className="mt-10"
          >
            <p className="text-lg font-medium text-white/90">{arch.tagline}</p>

            {/* Animated pipeline */}
            <motion.div
              variants={nodeContainer}
              initial={reduce ? false : "hidden"}
              animate="show"
              className="mt-7 flex items-stretch gap-1 overflow-x-auto pb-3 [scrollbar-width:thin]"
            >
              {arch.nodes.map((n, i) => {
                const Icon = iconMap[n.icon as keyof typeof iconMap] ?? Cpu;
                return (
                  <div key={n.label} className="flex items-stretch gap-1">
                    <motion.div
                      variants={nodeItem}
                      className="glass-dark flex w-32 shrink-0 flex-col items-center gap-2.5 rounded-card border border-white/10 px-3 py-4 text-center sm:w-36"
                    >
                      <span className="grid size-11 place-items-center rounded-control bg-accent-grad text-white shadow-soft">
                        <Icon size={20} />
                      </span>
                      <span className="text-xs font-medium leading-tight text-white/90">{n.label}</span>
                    </motion.div>
                    {i < arch.nodes.length - 1 && <Connector />}
                  </div>
                );
              })}
            </motion.div>

            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_0.6fr]">
              <ol className="space-y-3">
                {arch.steps.map((step, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed text-white/80">
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-md bg-white/10 text-xs font-semibold text-accent-soft">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/50">Stack</p>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {arch.stack.map((s) => (
                    <li
                      key={s}
                      className="rounded-md border border-white/15 bg-white/5 px-2.5 py-1 text-xs font-medium text-white/85"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
