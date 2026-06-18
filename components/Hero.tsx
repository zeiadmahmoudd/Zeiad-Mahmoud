"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, BadgeCheck, MapPin } from "lucide-react";
import { profile } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();

  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease },
  });

  return (
    <section id="top" className="relative isolate overflow-hidden">
      {/* layered, animated background */}
      <div className="bg-aurora pointer-events-none absolute inset-0 -z-10" aria-hidden />
      <div
        className="bg-dots pointer-events-none absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(120%_90%_at_50%_0%,black,transparent_70%)]"
        aria-hidden
      />
      <div
        className="animate-floaty pointer-events-none absolute -left-24 top-10 -z-10 size-72 rounded-full bg-accent/15 blur-3xl"
        aria-hidden
      />
      <div
        className="animate-floaty pointer-events-none absolute right-0 top-1/3 -z-10 size-80 rounded-full bg-accent-2/10 blur-3xl [animation-delay:1.5s]"
        aria-hidden
      />

      <div className="relative mx-auto grid min-h-[90dvh] max-w-[1180px] grid-cols-1 items-center gap-12 px-5 pt-28 pb-16 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10 lg:pt-24">
        {/* Left: message */}
        <div className="border-l-2 border-accent pl-6 sm:pl-8">
          <motion.div
            {...rise(0)}
            className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-accent"
          >
            <span>AI Engineer</span>
            <span className="size-1 rounded-full bg-accent/40" />
            <span>Solution Consultant</span>
          </motion.div>

          <motion.h1
            {...rise(0.08)}
            className="mt-5 text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-6xl"
          >
            {profile.headline}
          </motion.h1>

          <motion.p {...rise(0.16)} className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
            {profile.subline}
          </motion.p>

          <motion.div {...rise(0.24)} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#use-cases"
              className="group inline-flex items-center gap-2 rounded-control bg-accent-grad px-5 py-3 text-sm font-semibold text-white shadow-soft transition-all hover:brightness-110 active:scale-[0.98]"
            >
              Explore what I build
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-control border border-border-strong bg-surface px-5 py-3 text-sm font-semibold text-ink shadow-soft transition-colors hover:border-accent/50 hover:text-accent active:scale-[0.98]"
            >
              Get in touch
            </a>
          </motion.div>

          <motion.div
            {...rise(0.32)}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-muted"
          >
            <span className="inline-flex items-center gap-1.5">
              <BadgeCheck size={16} className="text-accent" /> Microsoft Certified AI-102 and AI-900
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={15} className="text-accent" /> {profile.location}, willing to relocate
            </span>
          </motion.div>
        </div>

        {/* Right: clean portrait */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="mx-auto w-full max-w-[320px] lg:justify-self-end"
        >
          <div className="overflow-hidden rounded-[22px] border border-border bg-surface shadow-soft-lg">
            <Image
              src={profile.photo}
              alt="Zeiad Mahmoud"
              width={640}
              height={760}
              priority
              className="aspect-[5/6] h-auto w-full object-cover"
            />
          </div>

          <div className="relative mt-4 rounded-control border border-border bg-surface px-4 py-3 shadow-soft">
            <span className="absolute left-0 top-3 h-[calc(100%-1.5rem)] w-1 rounded-r bg-accent" aria-hidden />
            <p className="pl-2 text-sm font-semibold text-ink">{profile.name}</p>
            <p className="pl-2 text-xs text-ink-muted">{profile.title}</p>
            <p className="mt-1.5 inline-flex items-center gap-1.5 pl-2 text-xs font-medium text-accent">
              <BadgeCheck size={13} /> Microsoft Certified AI-102, AI-900
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
