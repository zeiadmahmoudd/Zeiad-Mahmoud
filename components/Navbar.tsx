"use client";

import { useState } from "react";
import { motion, useReducedMotion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#skills", label: "Skills" },
  { href: "#architecture", label: "Architecture" },
  { href: "#use-cases", label: "Use cases" },
  { href: "#experience", label: "Experience" },
];

export default function Navbar() {
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 16);
  });

  return (
    <motion.header
      initial={reduce ? false : { y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`mx-auto flex h-16 max-w-[1180px] items-center justify-between px-5 transition-colors duration-300 sm:px-8 ${
          scrolled
            ? "border-b border-border/80 bg-bg/80 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <a href="#top" className="group flex items-center gap-2.5" aria-label="Zeiad Mahmoud, home">
          <span className="grid size-8 place-items-center rounded-[10px] border border-border-strong bg-surface font-mono text-sm font-semibold text-accent">
            ZM
          </span>
          <span className="hidden text-sm font-medium tracking-tight text-ink sm:block">
            Zeiad Mahmoud
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 rounded-control bg-accent-grad px-4 py-2 text-sm font-semibold text-white shadow-soft transition-all hover:brightness-110 active:scale-[0.97]"
          >
            Get in touch
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid size-9 place-items-center rounded-lg border border-border text-ink-soft md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="border-b border-border bg-bg/95 backdrop-blur-xl md:hidden">
          <nav className="mx-auto flex max-w-[1180px] flex-col px-5 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-ink-soft hover:text-ink"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-control bg-accent px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Get in touch
            </a>
          </nav>
        </div>
      )}
    </motion.header>
  );
}
