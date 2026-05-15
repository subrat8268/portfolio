"use client";

import { Bot } from "lucide-react";

export default function ResearchAssistMockup() {
  return (
    <div className="h-full p-4">
      <p className="mb-3 inline-flex items-center gap-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.1em] text-[var(--text-primary)]">
        <Bot className="h-3.5 w-3.5 text-[var(--color-primary)]" aria-hidden="true" />
        AI COPILOT · INTERNAL TOOL
      </p>

      <div className="space-y-2">
        <div className="w-4/5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-offset)] p-2">
          <span className="mb-1 block h-1 rounded-full bg-[var(--text-faint)]" />
          <span className="block h-1 w-[55%] rounded-full bg-[var(--text-faint)]" />
        </div>
        <div className="w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-offset)] p-2">
          <span className="mb-1 block h-1 rounded-full bg-[var(--text-faint)]" />
          <span className="block h-1 rounded-full bg-[var(--text-faint)]" />
        </div>
        <div className="ml-auto w-3/4 rounded-lg border border-[color:var(--color-primary)]/30 bg-[var(--color-primary-highlight)] p-2">
          <span className="mb-1 block h-1 w-[82%] rounded-full bg-[var(--color-primary)]/65" />
          <span className="block h-1 w-[58%] rounded-full bg-[var(--color-primary)]/55" />
        </div>
      </div>
    </div>
  );
}
