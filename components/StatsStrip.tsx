"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { Briefcase, Building2, BadgeCheck, Globe } from "lucide-react";
import { stats } from "@/lib/data";

const icons = [Briefcase, Building2, BadgeCheck, Globe];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReducedMotion();
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setVal(to);
      return;
    }
    const controls = animate(0, to, {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, reduce]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

export default function StatsStrip() {
  return (
    <section className="relative border-b border-border bg-bg-2">
      <div className="mx-auto grid max-w-[1180px] grid-cols-2 gap-px overflow-hidden px-5 sm:px-8 lg:grid-cols-4">
        {stats.map((s, i) => {
          const Icon = icons[i % icons.length];
          return (
            <div key={s.label} className="flex items-center gap-4 py-8 lg:justify-center">
              <span className="grid size-11 place-items-center rounded-control bg-accent-soft text-accent">
                <Icon size={20} />
              </span>
              <div>
                <p className="text-3xl font-semibold tracking-tight text-ink">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="text-xs text-ink-muted">{s.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
