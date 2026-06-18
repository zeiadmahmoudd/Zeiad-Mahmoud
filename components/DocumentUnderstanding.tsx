"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ScanText, Tags, ShieldCheck, Bot } from "lucide-react";
import DocumentSlider from "./DocumentSlider";

const ease = [0.16, 1, 0.3, 1] as const;

const capabilities = [
  { icon: ScanText, title: "Extraction", body: "Custom models pull fields from scans, PDFs, and handwriting." },
  { icon: Tags, title: "Classification", body: "Route documents by type before they hit the pipeline." },
  { icon: ShieldCheck, title: "Validation", body: "Per-field confidence, with low-confidence pages sent to review." },
  { icon: Bot, title: "Q&A over docs", body: "RAG agents answer questions grounded in the extracted content." },
];

export default function DocumentUnderstanding() {
  const reduce = useReducedMotion();

  return (
    <section id="document-ai" className="relative border-b border-border py-24 sm:py-28">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease }}
          >
            <p className="text-sm font-semibold text-accent">Document understanding</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              From messy scans to structured data.
            </h2>
            <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-ink-soft">
              Most enterprise knowledge is locked in documents. I build pipelines
              that read them and turn them into clean, validated, queryable data.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {capabilities.map((c) => (
                <div key={c.title} className="flex gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-control bg-accent-soft text-accent">
                    <c.icon size={17} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{c.title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-ink-muted">{c.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease }}
          >
            <DocumentSlider />
            <p className="mt-3 text-center text-xs text-ink-muted">
              Drag the handle: raw scan on the left, structured JSON on the right.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
