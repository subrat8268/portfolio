"use client";

import { type ReactNode } from "react";
import { Lock } from "lucide-react";
import { motion } from "framer-motion";

type BrowserCardProps = {
  url: string;
  children: ReactNode;
  className?: string;
  reduceMotion?: boolean;
};

export default function BrowserCard({
  url,
  children,
  className,
  reduceMotion = false,
}: BrowserCardProps) {
  return (
    <motion.article
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -5,
              boxShadow:
                "0 24px 46px oklch(0 0 0 / 0.5), 0 0 0 1px color-mix(in oklab, var(--color-primary) 34%, var(--border-subtle))",
            }
      }
      transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
      className={`overflow-hidden rounded-[22px] border bg-[var(--bg-elevated)] shadow-[var(--shadow-lg)] ${className ?? ""}`}
      style={{ borderColor: "color-mix(in oklab, var(--border-subtle) 70%, var(--text-faint) 30%)" }}
    >
      <div
        className="flex h-11 items-center gap-2 border-b bg-[var(--bg-offset)] px-3.5"
        style={{ borderColor: "color-mix(in oklab, var(--border-subtle) 72%, var(--text-faint) 28%)" }}
      >
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />

        <div className="ml-1 flex min-w-0 flex-1 items-center gap-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-page)] px-2.5 py-1">
          <span className="inline-flex h-3 w-3 shrink-0 rounded-[3px] border border-[var(--border-subtle)] bg-[var(--bg-elevated)]" />
          <Lock className="h-2.5 w-2.5 shrink-0 text-[var(--text-faint)]" aria-hidden="true" />
          <span className="truncate text-[0.62rem] text-[var(--text-muted)]">{url}</span>
        </div>
      </div>

      <div className="h-[calc(100%-2.75rem)]">{children}</div>
    </motion.article>
  );
}
