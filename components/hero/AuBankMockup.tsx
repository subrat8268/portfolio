"use client";

import { Mic, Search } from "lucide-react";
import { motion } from "framer-motion";

type AuBankMockupProps = {
  reduceMotion?: boolean;
};

const products = [
  { title: "Savings Account", width: "48%" },
  { title: "Fixed Deposit", width: "62%" },
  { title: "Personal Loan", width: "68%" },
  { title: "Credit Card", width: "44%" },
];

export default function AuBankMockup({
  reduceMotion = false,
}: AuBankMockupProps) {
  return (
    <div className="flex h-full flex-col p-5">
      <p className="mb-3.5 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
        AU SMALL FINANCE BANK
      </p>

      <div className="mb-5 flex items-center gap-1.5">
        {[28, 36, 24, 32].map((width, idx) => (
          <span
            key={`${width}-${idx}`}
            className="h-1.5 rounded-full bg-[var(--text-faint)]"
            style={{ width: `${width}px` }}
          />
        ))}
      </div>

      <motion.div
        className="mb-4 flex items-center gap-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-page)] px-3 py-2"
        animate={
          reduceMotion
            ? undefined
            : {
                boxShadow: [
                  "0 0 0 color-mix(in oklab, var(--color-primary) 0%, transparent)",
                  "0 0 16px color-mix(in oklab, var(--color-primary) 20%, transparent)",
                  "0 0 0 color-mix(in oklab, var(--color-primary) 0%, transparent)",
                ],
              }
        }
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Search
          className="h-3.5 w-3.5 text-[var(--text-faint)]"
          aria-hidden="true"
        />
        <div className="flex flex-1 flex-col gap-1">
          <span className="h-1 w-4/5 rounded-full bg-[var(--text-faint)]" />
          <span className="h-1 w-2/5 rounded-full bg-[var(--text-faint)]" />
        </div>
        <Mic
          className="h-3.5 w-3.5 text-[var(--text-faint)]"
          aria-hidden="true"
        />
      </motion.div>

      <div className="grid flex-1 grid-cols-2 gap-3 pb-1.5">
        {products.map((item, idx) => (
          <div
            key={item.title}
            className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-offset)] p-2.5"
          >
            <motion.div
              className="mb-2 h-4 w-4 rounded-sm"
              style={{
                background:
                  idx < 2
                    ? "color-mix(in oklab, var(--color-primary) 70%, white 6%)"
                    : "color-mix(in oklab, var(--text-faint) 55%, transparent)",
              }}
              animate={reduceMotion ? undefined : { opacity: [0.72, 1, 0.72] }}
              transition={{
                duration: 2.6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: idx * 0.2,
              }}
            />
            <span className="mb-1 block h-1 w-4/5 rounded-full bg-[var(--text-muted)]/70" />
            <span
              className="block h-1 rounded-full bg-[var(--text-faint)]/80"
              style={{ width: item.width }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
