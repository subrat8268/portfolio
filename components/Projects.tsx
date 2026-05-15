"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

import DisplayHeading from "@/components/DisplayHeading";
import RevealOnScroll from "@/components/RevealOnScroll";

function Pills({
  items,
  accentIndex = -1,
}: {
  items: string[];
  accentIndex?: number;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item, index) => (
        <span
          key={item}
          className={`rounded-full border px-2.5 py-1 text-[0.6rem] uppercase tracking-[0.08em] ${
            index === accentIndex
              ? "border-[var(--color-primary)]/20 bg-[var(--color-primary-highlight)] text-[var(--color-primary)]"
              : "border-[var(--color-border)] bg-[var(--color-surface-2)] text-[var(--color-text-muted)]"
          }`}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function ImpactPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-sm border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/10 px-2 py-1 text-[0.6rem] text-[var(--color-accent)]">
      {children}
    </span>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[var(--color-bg)] py-[clamp(5.5rem,9vw,10rem)]"
    >
      <div className="mx-auto max-w-6xl px-4">
        <RevealOnScroll>
          <p className="section-label mb-3 text-[0.65rem] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
            Featured Work
          </p>
          <DisplayHeading className="text-[clamp(2.75rem,6vw,4rem)]">
            Production projects. Real scale.
          </DisplayHeading>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--color-text-muted)]">
            Built at DEPT® and Rejolut for enterprises serving millions of users
            — not side projects.
          </p>
        </RevealOnScroll>

        <div className="mt-12 space-y-8">
          <RevealOnScroll delay={0.1}>
            <div className="grid overflow-hidden rounded-[28px] border border-[var(--color-border)] bg-[var(--color-primary-highlight)]/20 lg:grid-cols-2">
              <div className="flex min-h-[320px] flex-col justify-between bg-[var(--color-primary-highlight)]/15 p-8">
                <span className="inline-flex self-start bg-[var(--color-primary)] px-2 py-1 text-[0.6rem] uppercase tracking-[0.15em] text-white">
                  Featured
                </span>

                <div className="mx-auto mt-6 w-full max-w-xs overflow-hidden rounded-[24px] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-lg">
                  <div className="flex h-7 items-center gap-1.5 border-b border-[var(--color-border)] bg-[var(--color-primary-highlight)]/10 px-2">
                    <span className="h-2 w-2 rounded-full bg-red-400/70" />
                    <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
                    <span className="h-2 w-2 rounded-full bg-green-400/70" />
                    <span className="ml-2 text-[0.6rem] text-[var(--color-text-muted)]">
                      au.bank.in
                    </span>
                  </div>
                  <div className="p-3">
                    <div className="rounded-[20px] bg-[var(--color-surface-2)] p-3">
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 flex-1 items-center gap-2 rounded-full bg-[var(--color-surface-dynamic)] px-3">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="shrink-0 text-[var(--color-text-faint)]"
                          >
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                          </svg>
                          <span className="text-[11px] text-[var(--color-text-faint)]">
                            Search accounts, loans, branches…
                          </span>
                        </div>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary)]">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2.5"
                          >
                            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
                            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                          </svg>
                        </div>
                      </div>

                      <div className="mt-3 grid grid-cols-2 gap-2">
                        <div className="rounded-[18px] bg-[var(--color-surface-2)] p-3">
                          <div className="mb-2 flex items-center gap-2">
                            <div className="h-4 w-4 rounded-[3px] bg-[var(--color-primary-highlight)]" />
                            <span className="text-[9px] font-bold text-[var(--color-primary)]">
                              Branch Locator
                            </span>
                          </div>
                          <div className="mb-1 h-[5px] rounded-full bg-[var(--color-surface-dynamic)]" />
                          <div className="h-[5px] w-3/5 rounded-full bg-[var(--color-surface-dynamic)]" />
                        </div>
                        <div className="rounded-[18px] bg-[var(--color-surface-2)] p-3">
                          <div className="mb-2 flex items-center gap-2">
                            <div className="h-4 w-4 rounded-[3px] bg-[var(--color-success-highlight)]" />
                            <span className="text-[9px] font-bold text-[var(--color-success)]">
                              WCAG 2.1
                            </span>
                          </div>
                          <div className="mb-1 h-[5px] rounded-full bg-[var(--color-surface-dynamic)]" />
                          <div className="h-[5px] w-3/4 rounded-full bg-[var(--color-surface-dynamic)]" />
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 flex justify-center gap-2">
                      <span className="text-[9px] font-bold tracking-[0.06em] text-[var(--color-text-faint)]">
                        LIVE AT
                      </span>
                      <span className="text-[9px] font-bold text-[var(--color-primary)]">
                        au.bank.in
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  <ImpactPill>10M+ users on au.bank.in</ImpactPill>
                  <ImpactPill>WCAG 2.1 compliance +35%</ImpactPill>
                  <ImpactPill>20+ production bug fixes</ImpactPill>
                </div>
              </div>

              <div className="flex flex-col justify-center gap-4 rounded-[28px] p-8 lg:p-10">
                <p className="text-[0.65rem] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                  BFSI · Enterprise · DEPT®
                </p>
                <h3 className="[font-family:var(--font-display)] text-[clamp(1.4rem,2.8vw,1.9rem)] leading-snug text-[var(--color-text)]">
                  AU Small Finance Bank
                </h3>
                <p className="max-w-[60ch] text-sm leading-relaxed text-[var(--color-text-muted)]">
                  Engineered site-wide search and voice search for au.bank.in
                  serving 10M+ users. Built Branch Locator with AEM components,
                  resolved 20+ production bugs, and lifted WCAG 2.1
                  accessibility compliance by ~35%.
                </p>
                <Pills
                  items={["AEM", "React", "HTML/CSS", "JavaScript", "WCAG"]}
                  accentIndex={0}
                />
                <div className="mt-2">
                  <Link
                    href="https://au.bank.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 border border-[var(--color-border)] px-4 py-2 text-sm text-[var(--color-text)] transition-colors duration-200 hover:border-white/40"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Live: au.bank.in
                  </Link>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <div className="projects-grid grid gap-6 lg:grid-cols-1">
            <RevealOnScroll delay={0.14}>
              <div className="grid overflow-hidden rounded-[28px] border border-[var(--color-border)] bg-[var(--color-primary-highlight)]/20 lg:grid-cols-2 lg:[&>div:first-child]:order-2 lg:[&>div:last-child]:order-1">
                <div className="flex min-h-[280px] flex-col justify-between bg-[var(--color-primary-highlight)]/15 p-8">
                  <div className="mb-4 flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-[var(--color-primary)]" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--color-text)]">
                      XPharms Xchange
                    </span>
                    <span className="ml-auto rounded-full bg-[var(--color-success-highlight)] px-2 py-0.5 text-[9px] font-bold text-[var(--color-success)]">
                      B2B
                    </span>
                  </div>
                  <div className="rounded-md bg-gradient-to-br from-[var(--color-surface-dynamic)] to-[var(--color-surface-2)] p-5 text-center">
                    <div className="mb-1 text-[10px] text-[var(--color-text-faint)]">
                      Lighthouse Score
                    </div>
                    <div className="text-[28px] font-extrabold text-[var(--color-primary)] [font-family:var(--font-display)]">
                      92+
                    </div>
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <div className="rounded-md bg-[var(--color-surface-2)] p-2.5 text-center">
                      <div className="text-[13px] font-bold text-[var(--color-text)]">
                        &lt;2s
                      </div>
                      <div className="text-[9px] text-[var(--color-text-faint)]">
                        Load time
                      </div>
                    </div>
                    <div className="rounded-md bg-[var(--color-surface-2)] p-2.5 text-center">
                      <div className="text-[13px] font-bold text-[var(--color-text)]">
                        SSR
                      </div>
                      <div className="text-[9px] text-[var(--color-text-faint)]">
                        Next.js
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center gap-4 rounded-[28px] p-8 lg:p-10">
                  <p className="text-[0.65rem] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                    Startup · Web3 · B2B SaaS · Rejolut
                  </p>
                  <h3 className="[font-family:var(--font-display)] text-[clamp(1.35rem,2.4vw,1.8rem)] leading-snug text-[var(--color-text)]">
                    XPharms Xchange
                  </h3>
                  <p className="max-w-[60ch] text-sm leading-relaxed text-[var(--color-text-muted)]">
                    Architected a Next.js marketing + onboarding platform for a
                    blockchain-based B2B cannabis marketplace. SSR for SEO, JWT
                    auth, role-based access, real-time chat infrastructure. 92+
                    Lighthouse, sub-2s load times.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    <ImpactPill>92+ Lighthouse score</ImpactPill>
                    <ImpactPill>Sub-2s load time</ImpactPill>
                  </div>
                  <Pills
                    items={["Next.js", "JWT", "REST APIs", "SEO", "Vercel"]}
                    accentIndex={0}
                  />
                  <Link
                    href="https://xpharmsxchange.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 border border-[var(--color-border)] px-4 py-2 text-sm text-[var(--color-text)] transition-colors duration-200 hover:border-white/40"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    xpharmsxchange.com
                  </Link>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.18}>
              <div className="grid overflow-hidden rounded-[28px] border border-[var(--color-border)] bg-[var(--color-primary-highlight)]/20 lg:grid-cols-2 lg:[&>div:first-child]:order-2 lg:[&>div:last-child]:order-1">
                <div className="flex min-h-[280px] flex-col justify-between bg-[var(--color-primary-highlight)]/15 p-8">
                  <div className="mx-auto w-full max-w-[280px] rounded-[var(--radius-lg)] bg-[var(--color-surface-offset)] p-4">
                    <div className="mb-4 flex items-center gap-2">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-[var(--color-primary)]"
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                      <span className="text-[10px] font-bold text-[var(--color-text)]">
                        Research Assist
                      </span>
                      <span className="ml-auto rounded-full bg-[var(--color-primary-highlight)] px-2 py-0.5 text-[9px] font-bold text-[var(--color-primary)]">
                        ICRA
                      </span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="max-w-[85%] rounded-bl-none rounded-md bg-[var(--color-surface-2)] p-2.5">
                        <div className="mb-1 h-[5px] rounded-full bg-[var(--color-surface-dynamic)]" />
                        <div className="h-[5px] w-[70%] rounded-full bg-[var(--color-surface-dynamic)]" />
                      </div>
                      <div className="ml-auto max-w-[75%] rounded-br-none rounded-md bg-[var(--color-primary)] p-2.5">
                        <div className="mb-1 h-[5px] rounded-full bg-white/40" />
                        <div className="h-[5px] w-[55%] rounded-full bg-white/40" />
                      </div>
                      <div className="max-w-[90%] rounded-bl-none rounded-md bg-[var(--color-surface-2)] p-2.5">
                        <div className="mb-1 h-[5px] rounded-full bg-[var(--color-surface-dynamic)]" />
                        <div className="mb-1 h-[5px] rounded-full bg-[var(--color-surface-dynamic)]" />
                        <div className="h-[5px] w-[45%] rounded-full bg-[var(--color-surface-dynamic)]" />
                      </div>
                    </div>
                    <div className="mt-3 flex items-center gap-2 rounded-full bg-[var(--color-surface-dynamic)] px-3 py-2">
                      <span className="h-[5px] flex-1 rounded-full bg-[var(--color-surface-offset)]" />
                      <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[var(--color-primary)]">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="3"
                        >
                          <line x1="22" y1="2" x2="11" y2="13" />
                          <polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center gap-4 rounded-[28px] p-8 lg:p-10">
                  <p className="text-[0.65rem] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                    Enterprise · BFSI · Internal Tool · Rejolut
                  </p>
                  <h3 className="[font-family:var(--font-display)] text-[clamp(1.35rem,2.4vw,1.8rem)] leading-snug text-[var(--color-text)]">
                    Research Assist — ICRA Copilot
                  </h3>
                  <p className="max-w-[60ch] text-sm leading-relaxed text-[var(--color-text-muted)]">
                    Built a Copilot-style internal chat tool for financial
                    analysts at ICRA (India&apos;s leading credit rating
                    agency). 5+ REST API integrations, Redux state management,
                    reduced analyst Q&A turnaround by ~40% for a team of 15+.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    <ImpactPill>Q&amp;A turnaround −40%</ImpactPill>
                    <ImpactPill>15+ financial analysts served</ImpactPill>
                    <ImpactPill>5+ REST API integrations</ImpactPill>
                  </div>
                  <Pills
                    items={["React", "Redux", "GraphQL", "REST APIs"]}
                    accentIndex={0}
                  />
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.22}>
              <div className="grid overflow-hidden rounded-[28px] border border-[var(--color-border)] bg-[var(--color-primary-highlight)]/20 lg:grid-cols-2">
                <div className="flex min-h-[280px] flex-col justify-between bg-[var(--color-primary-highlight)]/15 p-8">
                  <div className="mx-auto w-full max-w-[280px] rounded-[var(--radius-lg)] bg-[var(--color-surface-offset)] p-4">
                    <div className="mb-4 flex items-center gap-2">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-[var(--color-primary)]"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                      <span className="text-[10px] font-bold text-[var(--color-text)]">
                        KYC Verification
                      </span>
                    </div>
                    <div className="mb-4 flex justify-between gap-2">
                      <div className="flex flex-col items-center gap-1">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-primary)]">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="3"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <span className="text-[8px] font-bold text-[var(--color-primary)]">
                          Identity
                        </span>
                      </div>
                      <div className="mt-3 h-px flex-1 bg-[var(--color-primary)]" />
                      <div className="flex flex-col items-center gap-1">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-primary)]">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="3"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <span className="text-[8px] font-bold text-[var(--color-primary)]">
                          Address
                        </span>
                      </div>
                      <div className="mt-3 h-px flex-1 bg-[var(--color-border)]" />
                      <div className="flex flex-col items-center gap-1">
                        <div className="h-6 w-6 rounded-full border-2 border-[var(--color-border)] bg-[var(--color-surface-dynamic)]" />
                        <span className="text-[8px] font-bold text-[var(--color-text-faint)]">
                          Payment
                        </span>
                      </div>
                    </div>
                    <div className="mb-2 rounded-md border border-[var(--color-border)] bg-[var(--color-surface-2)] p-3">
                      <div className="mb-2 h-[6px] w-3/5 rounded-full bg-[var(--color-surface-dynamic)]" />
                      <div className="h-[28px] rounded-md border border-[var(--color-border)] bg-[var(--color-surface-offset)]" />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="rounded-md bg-[var(--color-success-highlight)] p-2 text-center">
                        <div className="text-[11px] font-bold text-[var(--color-success)]">
                          +40%
                        </div>
                        <div className="text-[8px] text-[var(--color-text-faint)]">
                          Validation
                        </div>
                      </div>
                      <div className="rounded-md bg-[var(--color-primary-highlight)] p-2 text-center">
                        <div className="text-[11px] font-bold text-[var(--color-primary)]">
                          −25%
                        </div>
                        <div className="text-[8px] text-[var(--color-text-faint)]">
                          Failures
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center gap-4 rounded-[28px] p-8 lg:p-10">
                  <p className="text-[0.65rem] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                    BFSI · Enterprise · DEPT®
                  </p>
                  <h3 className="[font-family:var(--font-display)] text-[clamp(1.35rem,2.4vw,1.8rem)] leading-snug text-[var(--color-text)]">
                    IndiaFirst Life — KYC Flow
                  </h3>
                  <p className="max-w-[60ch] text-sm leading-relaxed text-[var(--color-text-muted)]">
                    Built multi-stage KYC form flows with comprehensive test
                    coverage. Improved form validation by ~40% and reduced
                    payment pipeline failures by ~25%.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    <ImpactPill>Form validation +40%</ImpactPill>
                    <ImpactPill>Payment failures −25%</ImpactPill>
                  </div>
                  <Pills
                    items={["React", "Jest", "React Testing Library"]}
                    accentIndex={0}
                  />
                </div>
              </div>
            </RevealOnScroll>
          </div>

          <RevealOnScroll delay={0.28}>
            <div className="pt-4">
              <p className="mb-6 text-sm font-semibold text-[var(--color-text-muted)]">
                More projects
              </p>
              <div className="grid gap-6 lg:grid-cols-2">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                className="overflow-hidden rounded-[28px] border border-[var(--color-border)] bg-[var(--color-primary-highlight)]/20"
                >
                  <div className="flex items-center justify-between gap-3 border-b border-[var(--color-border)] bg-[var(--color-surface-offset)] px-4 py-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-2)] text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
                      KB
                    </div>
                    <span className="rounded-full border border-[var(--color-primary)]/35 bg-[var(--color-primary-highlight)] px-2 py-0.5 text-[0.56rem] font-medium uppercase tracking-[0.08em] text-[var(--color-primary)]">
                      In Progress
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-[1rem] leading-snug text-[var(--color-text)] [font-family:var(--font-display)]">
                      KreditBook
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                      Cross-platform ledger app with WhatsApp integration, Super
                      Admin dashboard, JWT auth, and RBAC. Built solo in React
                      Native + Zustand.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {["React Native", "Zustand", "JWT", "Supabase"].map(
                        (tech) => (
                          <span
                            key={tech}
                            className="rounded-sm border border-[var(--color-border)] px-2 py-0.5 text-xs text-[var(--color-text-muted)]"
                          >
                            {tech}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                className="overflow-hidden rounded-[28px] border border-[var(--color-border)] bg-[var(--color-primary-highlight)]/20"
                >
                  <div className="flex items-center justify-between gap-3 border-b border-[var(--color-border)] bg-[var(--color-surface-offset)] px-4 py-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-2)] text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
                      SN
                    </div>
                    <Link
                      href="https://snox.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-[var(--color-text-muted)] transition-colors duration-200 hover:text-[var(--color-text)]"
                    >
                      ↗ snox.in
                    </Link>
                  </div>
                  <div className="p-6">
                    <h3 className="text-[1rem] leading-snug text-[var(--color-text)] [font-family:var(--font-display)]">
                      SNOX
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                      Full-stack e-commerce platform with inventory management,
                      admin dashboard, and order tracking. Firebase + MongoDB
                      backend.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {["React", "MongoDB", "Node.js", "Firebase"].map(
                        (tech) => (
                          <span
                            key={tech}
                            className="rounded-sm border border-[var(--color-border)] px-2 py-0.5 text-xs text-[var(--color-text-muted)]"
                          >
                            {tech}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
