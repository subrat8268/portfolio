import RevealOnScroll from "@/components/RevealOnScroll";

const experiences = [
  {
    id: "dept",
    initials: "D",
    logoBg: "#000000",
    logoColor: "#ffffff",
    company: "DEPT®",
    role: "AU Small Finance Bank · IndiaFirst Life KYC",
    detail: "Frontend delivery, AEM, WCAG",
  },
  {
    id: "rejolut",
    initials: "RJT",
    logoBg: "#1a1a2e",
    logoColor: "#e94560",
    company: "Rejolut",
    role: "XPharms Xchange · Research Assist · Rejo AI",
    detail: "Next.js, React, product builds",
  },
  {
    id: "creditbook",
    initials: "CB",
    logoBg: "var(--color-primary-highlight)",
    logoColor: "var(--color-primary)",
    company: "KredBook",
    role: "Ongoing React Native app work",
    detail: "Fintech, WhatsApp-ledger, RBAC",
  },
];

export default function ExperienceStrip() {
  return (
    <div className="border-t border-b border-[var(--color-divider)] py-10">
      <div className="mx-auto max-w-6xl px-4">
        <RevealOnScroll>
          <p className="mb-6 text-center text-[0.65rem] font-bold uppercase tracking-[0.1em] text-[var(--color-text-faint)]">
            Experience
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="flex items-center gap-3 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-3"
              >
                <div
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--radius-md)] text-[11px] font-black tracking-tight"
                  style={{
                    background: exp.logoBg,
                    color: exp.logoColor,
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {exp.initials}
                </div>
                <div>
                  <p className="mb-0.5 text-sm leading-none font-bold text-[var(--color-text)]">
                    {exp.company}
                  </p>
                  <p className="text-[0.65rem] text-[var(--color-text-muted)]">{exp.role}</p>
                  <p className="mt-0.5 text-[0.6rem] uppercase tracking-[0.1em] text-[var(--color-text-faint)]">
                    {exp.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}
