"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Building2 } from "lucide-react";
import { experience } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

export default function Experience() {
  const reduce = useReducedMotion();

  return (
    <section id="experience" className="relative border-b border-border bg-bg-2 py-24 sm:py-28">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease }}
        >
          <p className="text-sm font-semibold text-accent">Experience</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Building and shipping AI in production.
          </h2>

          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 rounded-card border border-border bg-surface p-5 shadow-soft">
            <span className="grid size-11 place-items-center rounded-control bg-accent-soft text-accent">
              <Building2 size={20} />
            </span>
            <div className="mr-auto">
              <p className="text-base font-semibold text-ink">{experience.role}</p>
              <p className="text-sm text-ink-muted">{experience.company}</p>
            </div>
            <span className="rounded-full border border-border bg-bg px-3 py-1 text-sm font-medium text-ink-soft">
              {experience.period}
            </span>
          </div>

          <p className="mt-5 max-w-[68ch] text-base leading-relaxed text-ink-soft">
            {experience.summary}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2"
        >
          {experience.highlights.map((h) => (
            <motion.div
              key={h.title}
              variants={item}
              className="rounded-card border border-border bg-surface p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-pop"
            >
              <h3 className="text-lg font-semibold tracking-tight text-ink">{h.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{h.body}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {h.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-md border border-accent/20 bg-accent-soft px-2 py-1 text-xs font-medium text-accent"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Organizations and sectors served (names only) */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease }}
          className="mt-8 rounded-card border border-border bg-surface p-6 shadow-soft"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
            Organizations & sectors served
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {experience.clients.map((c) => (
              <li
                key={c}
                className={`rounded-full border px-3.5 py-1.5 text-sm font-medium ${
                  c === "and more"
                    ? "border-dashed border-border-strong text-ink-muted"
                    : "border-border bg-bg text-ink"
                }`}
              >
                {c}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
