"use client";

export default function XPharmsMockup() {
  return (
    <div className="h-full p-4">
      <p className="mb-3 text-[0.58rem] font-semibold uppercase tracking-[0.1em] text-[var(--text-primary)]">
        XPHARMS XCHANGE
      </p>

      <div className="mb-3 flex items-center gap-1.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-offset)] px-2.5 py-2">
        <span className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />
        <span className="h-1 w-16 rounded-full bg-[var(--text-faint)]" />
      </div>

      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "92+", tone: "var(--color-primary)" },
          { label: "<2s", tone: "var(--color-success)" },
          { label: "SSR", tone: "var(--text-muted)" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-offset)] px-1.5 py-2 text-center"
          >
            <span className="block text-[0.6rem] font-semibold" style={{ color: item.tone }}>
              {item.label}
            </span>
            <span className="mx-auto mt-1 block h-1 w-2/3 rounded-full bg-[var(--text-faint)]/75" />
          </div>
        ))}
      </div>

      <div className="mt-3 space-y-1.5">
        <span className="block h-1 rounded-full bg-[var(--border-subtle)]" />
        <span className="block h-1 w-4/5 rounded-full bg-[var(--border-subtle)]" />
      </div>
    </div>
  );
}
