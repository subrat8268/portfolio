import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";

const experiences = [
  {
    id: "dept",
    logoUrl: "/icons/dept-logo.png",
    company: "DEPT®",
    role: "AU Small Finance Bank · IndiaFirst Life KYC",
    detail: "Frontend delivery, AEM, WCAG",
  },
  {
    id: "rejolut",
    logoUrl: "/icons/rejolut-logo.jfif",
    company: "Rejolut",
    role: "XPharms Xchange · Research Assist · Rejo AI",
    detail: "Next.js, React, product builds",
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
                <Image
                  src={exp.logoUrl}
                  alt={`${exp.company} logo`}
                  width={32}
                  height={32}
                  unoptimized
                  className="h-8 w-8 shrink-0 rounded-[var(--radius-md)]"
                />
                <div>
                  <p className="mb-0.5 text-sm leading-none font-bold text-[var(--color-text)]">
                    {exp.company}
                  </p>
                  <p className="text-[0.65rem] text-[var(--color-text-muted)]">
                    {exp.role}
                  </p>
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
