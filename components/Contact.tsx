"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Mail, Phone, ExternalLink, MapPin, ArrowRight } from "lucide-react";
import { profile } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Contact() {
  const reduce = useReducedMotion();

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="bg-aurora pointer-events-none absolute inset-0 -z-10" aria-hidden />
      <div className="relative mx-auto max-w-[1180px] px-5 sm:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold text-accent">Open to work</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
            Let&apos;s build your AI solution.
          </h2>
          <p className="mx-auto mt-5 max-w-[52ch] text-base leading-relaxed text-ink-soft">
            Available for AI roles and consulting. Based between Ankara and
            Hofuf, and happy to relocate.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 rounded-control bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-all hover:bg-accent-strong active:scale-[0.98]"
            >
              <Mail size={16} />
              Get in touch
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-control border border-border-strong bg-surface px-6 py-3.5 text-sm font-semibold text-ink shadow-soft transition-colors hover:border-accent/50 hover:text-accent"
            >
              <ExternalLink size={16} />
              LinkedIn
            </a>
          </div>

          <div className="mx-auto mt-10 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-control border border-border bg-surface p-4 text-left shadow-soft transition-colors hover:border-accent/40"
            >
              <Mail size={16} className="text-accent" />
              <p className="mt-2 text-xs font-medium text-ink-muted">Email</p>
              <p className="truncate text-sm font-medium text-ink">{profile.email}</p>
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="rounded-control border border-border bg-surface p-4 text-left shadow-soft transition-colors hover:border-accent/40"
            >
              <Phone size={16} className="text-accent" />
              <p className="mt-2 text-xs font-medium text-ink-muted">Phone</p>
              <p className="text-sm font-medium text-ink">{profile.phone}</p>
            </a>
            <div className="rounded-control border border-border bg-surface p-4 text-left shadow-soft">
              <MapPin size={16} className="text-accent" />
              <p className="mt-2 text-xs font-medium text-ink-muted">Location</p>
              <p className="text-sm font-medium text-ink">{profile.location}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-2">
      <div className="mx-auto flex max-w-[1180px] flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8">
        <div className="flex items-center gap-2.5">
          <span className="grid size-7 place-items-center rounded-[8px] border border-border-strong bg-surface text-xs font-semibold text-accent">
            ZM
          </span>
          <span className="text-sm text-ink-soft">{profile.name}</span>
        </div>
        <p className="text-xs text-ink-muted">AI Engineer and Solution Consultant</p>
        <a
          href={`mailto:${profile.email}`}
          className="text-sm text-ink-muted transition-colors hover:text-accent"
        >
          {profile.email}
        </a>
      </div>
    </footer>
  );
}
