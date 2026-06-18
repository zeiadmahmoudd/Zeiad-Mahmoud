"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Bot, Database, Boxes, Cloud, Code2, Briefcase } from "lucide-react";
import { skillGroups } from "@/lib/data";

const iconMap = {
  copilot: Bot,
  data: Database,
  microsoft: Boxes,
  cloud: Cloud,
  dev: Code2,
  consulting: Briefcase,
} as const;

const ease = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
const card: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

export default function Skills() {
  const reduce = useReducedMotion();

  return (
    <section id="skills" className="relative border-b border-border py-24 sm:py-28">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease }}
        >
          <p className="text-sm font-semibold text-accent">What I do</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            The skills I bring to enterprise AI.
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillGroups.map((group) => {
            const Icon = iconMap[group.icon];
            return (
              <motion.div
                key={group.title}
                variants={card}
                className="group rounded-card border border-border bg-surface p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-pop"
              >
                <span className="grid size-11 place-items-center rounded-control bg-accent-soft text-accent transition-colors group-hover:bg-accent-grad group-hover:text-white">
                  <Icon size={20} />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">{group.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {group.skills.map((s) => (
                    <li
                      key={s}
                      className="rounded-md border border-border bg-bg px-2.5 py-1 text-xs font-medium text-ink-soft"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
