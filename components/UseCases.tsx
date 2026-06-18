"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Bot,
  ScanText,
  ShieldCheck,
  Gauge,
  BarChart3,
  HardHat,
  GraduationCap,
  Mail,
  ReceiptText,
  Workflow,
  Network,
  Sparkles,
  Search,
  ArrowUpRight,
  Languages,
  ShieldAlert,
  FileText,
  HeartPulse,
  FileSearch,
  MessagesSquare,
} from "lucide-react";
import { useCases, useCaseCategories, type UseCase } from "@/lib/data";

const iconMap = {
  agent: Bot,
  doc: ScanText,
  shield: ShieldCheck,
  gauge: Gauge,
  chart: BarChart3,
  safety: HardHat,
  advisor: GraduationCap,
  mail: Mail,
  invoice: ReceiptText,
  flow: Workflow,
  agents: Network,
  adoption: Sparkles,
  search: Search,
  translate: Languages,
  fraud: ShieldAlert,
  clinical: FileText,
  patient: HeartPulse,
  contract: FileSearch,
  meeting: MessagesSquare,
} as const;

const ease = [0.16, 1, 0.3, 1] as const;
const filters = ["All", ...useCaseCategories] as const;
type Filter = (typeof filters)[number];

function Card({ uc }: { uc: UseCase }) {
  const Icon = iconMap[uc.icon as keyof typeof iconMap] ?? Bot;
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, ease }}
      className="group flex flex-col rounded-card border border-border bg-surface p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-pop"
    >
      <div className="flex items-center justify-between">
        <span className="grid size-11 place-items-center rounded-control bg-accent-soft text-accent transition-colors group-hover:bg-accent-grad group-hover:text-white">
          <Icon size={20} />
        </span>
        <span className="rounded-full border border-border bg-bg px-2.5 py-1 text-[11px] font-medium text-ink-muted">
          {uc.category}
        </span>
      </div>
      <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">{uc.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{uc.blurb}</p>
      <ul className="mt-4 flex flex-wrap gap-1.5">
        {uc.stack.map((s) => (
          <li
            key={s}
            className="rounded-md border border-border bg-bg px-2 py-0.5 text-[11px] font-medium text-ink-soft"
          >
            {s}
          </li>
        ))}
      </ul>
      <p className="mt-5 flex items-center gap-1.5 border-t border-border pt-4 text-sm font-medium text-accent">
        <ArrowUpRight size={15} />
        {uc.impact}
      </p>
    </motion.article>
  );
}

export default function UseCases() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<Filter>("All");

  const list = active === "All" ? useCases : useCases.filter((u) => u.category === active);

  return (
    <section id="use-cases" className="relative border-b border-border py-24 sm:py-28">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease }}
        >
          <p className="text-sm font-semibold text-accent">What I can build for you</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            AI use cases, ready to develop.
          </h2>
          <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-ink-soft">
            Solutions I can design and ship with my stack. Filter by sector to
            see what fits your organization.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((f) => {
            const isActive = f === active;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                aria-pressed={isActive}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all active:scale-[0.97] ${
                  isActive
                    ? "border-accent bg-accent text-white shadow-soft"
                    : "border-border bg-surface text-ink-soft hover:border-accent/50 hover:text-accent"
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>

        {/* Animated grid */}
        <motion.div layout className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((uc) => (
              <Card key={uc.id} uc={uc} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
