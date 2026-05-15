"use client";

import { type ReactNode } from "react";
import { Lock } from "lucide-react";
import { motion } from "framer-motion";

type BrowserCardProps = {
  label: string;
  url: string;
  children: ReactNode;
  className?: string;
  reduceMotion?: boolean;
  faviconLabel?: string;
};

export default function BrowserCard({
  label,
  url,
  children,
  className,
  reduceMotion = false,
  faviconLabel = "•",
}: BrowserCardProps) {
  return (
    <motion.article
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -5,
              boxShadow:
                "0 22px 44px oklch(0 0 0 / 0.5), 0 0 0 1px color-mix(in oklab, var(--color-primary) 38%, var(--border-subtle))",
            }
      }
      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
      className={`overflow-hidden rounded-[18px] border bg-[var(--bg-elevated)] shadow-[var(--shadow-lg)] ${className ?? ""}`}
      style={{
        borderColor: "color-mix(in oklab, var(--border-subtle) 65%, var(--text-faint) 35%)",
      }}
    >
      <div
        className="flex h-9 items-center gap-2 border-b bg-[var(--bg-offset)] px-3"
        style={{ borderColor: "color-mix(in oklab, var(--border-subtle) 75%, var(--text-faint) 25%)" }}
      >
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />

        <div className="ml-1 flex min-w-0 flex-1 items-center gap-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-page)] px-2 py-1">
          <span
            aria-hidden="true"
            className="inline-flex h-3 w-3 shrink-0 items-center justify-center rounded-[3px] border border-[var(--border-subtle)] bg-[var(--bg-elevated)] text-[0.42rem] font-semibold leading-none text-[var(--text-muted)]"
          >
            {faviconLabel}
          </span>
          <Lock className="h-2.5 w-2.5 shrink-0 text-[var(--text-faint)]" aria-hidden="true" />
          <span className="truncate text-[0.58rem] text-[var(--text-muted)]">{url}</span>
        </div>

        <span className="hidden text-[0.5rem] uppercase tracking-[0.1em] text-[var(--text-faint)] xl:block">
          {label}
        </span>
      </div>

      <div className="relative h-[calc(100%-2.25rem)]">{children}</div>
    </motion.article>
  );
}
