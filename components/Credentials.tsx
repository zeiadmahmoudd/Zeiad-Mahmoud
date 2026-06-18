"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BadgeCheck, GraduationCap, Globe } from "lucide-react";
import { certifications, education, languages } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Credentials() {
  const reduce = useReducedMotion();

  const reveal = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.55, delay, ease },
  });

  return (
    <section id="credentials" className="relative border-b border-border py-24 sm:py-28">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <motion.h2
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease }}
          className="max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
        >
          Certifications, education, and languages.
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {/* Certifications */}
          <motion.div
            {...reveal(0)}
            className="rounded-card border border-border bg-surface p-6 shadow-soft"
          >
            <div className="flex items-center gap-2.5 text-accent">
              <BadgeCheck size={20} />
              <h3 className="text-base font-semibold text-ink">Certifications</h3>
            </div>
            <ul className="mt-5 space-y-4">
              {certifications.map((c) => (
                <li key={c.code} className="flex items-start gap-3">
                  <span className="rounded-md border border-accent/20 bg-accent-soft px-2 py-1 text-xs font-semibold text-accent">
                    {c.code}
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-ink">{c.name}</span>
                    <span className="block text-xs text-ink-muted">
                      {c.issuer}, {c.year}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Education */}
          <motion.div
            {...reveal(0.08)}
            className="rounded-card border border-border bg-surface p-6 shadow-soft"
          >
            <div className="flex items-center gap-2.5 text-accent">
              <GraduationCap size={20} />
              <h3 className="text-base font-semibold text-ink">Education</h3>
            </div>
            <ul className="mt-5 space-y-4">
              {education.map((e) => (
                <li key={e.school}>
                  <span className="block text-sm font-medium text-ink">{e.school}</span>
                  <span className="block text-xs text-ink-muted">{e.detail}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Languages */}
          <motion.div
            {...reveal(0.16)}
            className="rounded-card border border-border bg-surface p-6 shadow-soft"
          >
            <div className="flex items-center gap-2.5 text-accent">
              <Globe size={20} />
              <h3 className="text-base font-semibold text-ink">Languages</h3>
            </div>
            <ul className="mt-5 space-y-3">
              {languages.map((l) => (
                <li key={l.name} className="flex items-center justify-between">
                  <span className="text-sm font-medium text-ink">{l.name}</span>
                  <span className="text-xs text-ink-muted">{l.level}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
