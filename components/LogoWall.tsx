"use client";

import { useState } from "react";
import { techLogos } from "@/lib/data";

function Logo({ slug, label }: { slug: string; label: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    // Graceful fallback: a mono wordmark instead of a broken image.
    return (
      <span className="font-mono text-sm font-medium tracking-tight text-ink-muted">
        {label}
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://cdn.simpleicons.org/${slug}/71717a`}
      alt={label}
      width={28}
      height={28}
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-7 w-auto opacity-60 transition-opacity hover:opacity-100"
    />
  );
}

export default function LogoWall() {
  const row = [...techLogos, ...techLogos];

  return (
    <section
      aria-label="Tools and platforms"
      className="border-b border-border bg-surface py-12"
    >
      <p className="mb-8 text-center text-sm font-medium text-ink-muted">
        The platforms and tools I build with
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="animate-marquee flex w-max items-center gap-14">
          {row.map((t, i) => (
            <div key={`${t.slug}-${i}`} className="flex shrink-0 items-center">
              <Logo slug={t.slug} label={t.label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
