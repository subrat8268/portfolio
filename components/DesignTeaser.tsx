"use client";

import Link from "next/link";

const marqueeItems = [
  "Logo Design",
  "Festival Banners",
  "Brand Identity",
  "Social Media Graphics",
  "Invitations",
  "Print Design",
  "Canva Expert",
  "Real Client Work",
  "Logo Design",
  "Festival Banners",
  "Brand Identity",
  "Social Media Graphics",
  "Invitations",
  "Print Design",
  "Canva Expert",
  "Real Client Work",
];

export default function DesignTeaser() {
  return (
    <section className="overflow-hidden border-y border-[var(--color-border)]">
      <div className="overflow-hidden bg-[var(--color-accent)] py-3">
        <div
          className="flex w-max gap-10 whitespace-nowrap"
          style={{
            animation: "marqueeScroll 22s linear infinite",
          }}
        >
          {marqueeItems.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-4 text-[0.65rem] uppercase tracking-[0.2em] text-white"
            >
              {item}
              <span className="text-xs text-white/30">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="bg-[var(--color-surface)] py-14">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 px-4 sm:flex-row sm:items-center">
          <div>
            <p className="mb-2 text-[0.65rem] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
              Also
            </p>
            <h3 className="[font-family:var(--font-display)] text-[clamp(1.75rem,4vw,2.75rem)] leading-tight text-[var(--color-text)]">
              I also design.
            </h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-[var(--color-text-muted)]">
              Logos, banners, invitations, social graphics — built for real
              clients using Canva.
            </p>
          </div>
          <Link
            href="/design"
            className="shrink-0 inline-flex items-center gap-2 bg-[var(--color-accent)] px-7 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-[var(--color-accent-hover)]"
          >
            View Design Work →
          </Link>
        </div>
      </div>
    </section>
  );
}
