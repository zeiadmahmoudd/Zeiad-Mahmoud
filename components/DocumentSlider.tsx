"use client";

import { useRef } from "react";
import { motion, useMotionValue, useMotionTemplate, useTransform } from "framer-motion";
import { FileWarning, Braces, MoveHorizontal } from "lucide-react";

/**
 * Before/After document-understanding demo. Base = parsed JSON, overlay = a
 * raw scan clipped from the left. Position lives in a Motion value so dragging
 * never re-renders the tree.
 */
export default function DocumentSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pos = useMotionValue(46);

  const rightInset = useTransform(pos, (p) => 100 - p);
  const rawClip = useMotionTemplate`inset(0 ${rightInset}% 0 0)`;
  const handleLeft = useMotionTemplate`${pos}%`;

  function setFromClientX(clientX: number) {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    pos.set(Math.max(2, Math.min(98, pct)));
  }

  function onPointerDown(e: React.PointerEvent) {
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    setFromClientX(e.clientX);
  }
  function onPointerMove(e: React.PointerEvent) {
    if (e.buttons !== 1) return;
    setFromClientX(e.clientX);
  }
  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowLeft") pos.set(Math.max(2, pos.get() - 4));
    if (e.key === "ArrowRight") pos.set(Math.min(98, pos.get() + 4));
  }

  return (
    <div
      ref={containerRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      className="relative aspect-[16/11] w-full cursor-ew-resize select-none overflow-hidden rounded-card border border-border-strong bg-bg shadow-soft-lg"
    >
      {/* BASE: structured JSON */}
      <div className="absolute inset-0 overflow-hidden bg-[#1a0a11] p-5 sm:p-6">
        <div className="mb-3 flex items-center gap-2 text-[11px] font-medium text-accent-2">
          <Braces size={14} /> licence_record.json
        </div>
        <pre className="overflow-hidden font-mono text-[10.5px] leading-relaxed text-white/80 sm:text-xs">
{`{
  "licence_id": "ENV-2019-08841",
  "holder": "Coastal Aggregates Ltd",
  "permit_type": "Quarry extraction",
  "status": "Active",
  "issued": "2019-04-12",
  "expires": "2029-04-11",
  "site": { "region": "North coastal", "area_ha": 14.6 },
  "conditions": [
    "Dust suppression monitoring",
    "Quarterly water sampling"
  ],
  "_confidence": 0.974
}`}
        </pre>
        <div className="absolute bottom-3 right-4 rounded-md border border-positive/40 bg-positive/15 px-2 py-1 font-mono text-[10px] text-[#7fe3ab]">
          parsed, validated
        </div>
      </div>

      {/* OVERLAY: raw scan */}
      <motion.div
        style={{ clipPath: rawClip }}
        className="absolute inset-0 overflow-hidden bg-[#ece6da] p-5 text-[#2a2620] sm:p-6"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-50 mix-blend-multiply"
          style={{
            backgroundImage:
              "radial-gradient(120% 80% at 80% -10%, rgba(120,100,60,0.18), transparent 60%), radial-gradient(60% 60% at 10% 110%, rgba(80,70,40,0.18), transparent 60%)",
          }}
          aria-hidden
        />
        <div className="-rotate-1">
          <div className="flex items-center justify-between border-b-2 border-[#2a2620]/40 pb-2">
            <span className="font-mono text-[10px] font-bold tracking-wide">ENVIRONMENTAL LICENCE, FORM 7B</span>
            <span className="font-mono text-[9px] opacity-60">SCAN 08841</span>
          </div>
          <div className="mt-3 space-y-1.5 font-mono text-[10px] leading-relaxed opacity-80 sm:text-[11px]">
            <p>Holder . . . . . C0ASTAL AGGREGATES LTD</p>
            <p className="blur-[0.4px]">Permit . . . . . Quarry extracti0n</p>
            <p>Issued 12/04/2019 &nbsp; Exp 11/04/2029</p>
            <p className="opacity-60">Region: N. coastal &nbsp; Area: 14.6 ha</p>
            <p className="blur-[0.5px] opacity-70">Cond: dust suppr.; qtrly water sampl.</p>
          </div>
          <div className="absolute right-4 top-14 rotate-[14deg] rounded border-2 border-[#8a1538]/50 px-3 py-1 font-mono text-[11px] font-bold tracking-widest text-[#8a1538]/70">
            APPROVED
          </div>
          <div className="mt-4 h-2.5 w-2/3 bg-[#2a2620]/70" />
          <div className="mt-1.5 h-2.5 w-1/3 bg-[#2a2620]/40" />
        </div>
        <div className="absolute bottom-3 left-4 inline-flex items-center gap-1.5 rounded-md bg-[#2a2620]/10 px-2 py-1 font-mono text-[10px] text-[#5a5040]">
          <FileWarning size={12} /> raw scan
        </div>
      </motion.div>

      {/* HANDLE */}
      <motion.div style={{ left: handleLeft }} className="absolute inset-y-0 z-10 -ml-px w-0.5 bg-accent">
        <button
          type="button"
          role="slider"
          aria-label="Reveal structured data"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={50}
          onKeyDown={onKeyDown}
          className="absolute top-1/2 left-1/2 grid size-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-accent bg-white text-accent shadow-[0_0_0_4px_rgba(138,21,56,0.18)]"
        >
          <MoveHorizontal size={16} />
        </button>
      </motion.div>

      <div className="pointer-events-none absolute left-3 top-3 z-20 rounded bg-[#2a2620]/70 px-2 py-1 font-mono text-[10px] font-medium text-[#ece6da]">
        BEFORE
      </div>
      <div className="pointer-events-none absolute right-3 top-3 z-20 rounded border border-accent-2/50 bg-[#1a0a11]/70 px-2 py-1 font-mono text-[10px] font-medium text-accent-2 backdrop-blur">
        AFTER
      </div>
    </div>
  );
}
