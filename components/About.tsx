"use client";

import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef } from "react";

import CountUp from "@/components/CountUp";
import DisplayHeading from "@/components/DisplayHeading";
import RevealOnScroll from "@/components/RevealOnScroll";

const stats: [string, string, number][] = [
  ["2+",  "Years of experience", 0],
  ["10M+","Users on production", 150],
  ["20+", "Production bug fixes", 300],
  ["92+", "Lighthouse score",    450],
];

export default function About() {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      className="bg-[var(--color-bg)] py-[clamp(3.5rem,6vw,6rem)]"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:items-start">
        <div>
          <RevealOnScroll direction="left">
            <DisplayHeading className="text-[clamp(2.35rem,5.2vw,3.45rem)]">
              About Me
            </DisplayHeading>
          </RevealOnScroll>
          <div className="mt-4 max-w-[62ch] space-y-4 text-[14px] leading-[1.72] text-[var(--color-text)] [font-family:var(--font-body)]">
            <RevealOnScroll delay={0.1}>
              <p>
                I&apos;m a Frontend Developer with 2+ years of experience
                building enterprise-grade web interfaces. At DEPT®, I worked on
                AU Small Finance Bank&apos;s public-facing site serving millions
                of users — implementing site-wide search, voice search, and the
                Branch Locator.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <p>
                At Rejolut, I built XPharms Xchange (a Next.js B2B platform
                achieving 92+ Lighthouse scores) and Research Assist, an
                internal AI copilot for ICRA&apos;s financial analyst team.
              </p>
            </RevealOnScroll>
          </div>

          <RevealOnScroll delay={0.35}>
            <div ref={statsRef} className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map(([value, label, delay]) => (
                <div
                  key={label}
                  className="group rounded-[20px] border border-[var(--color-border)] bg-[var(--color-surface)] p-3 text-center transition-all duration-200 motion-safe:hover:-translate-y-0.5 motion-safe:hover:border-[var(--color-primary)]/40 motion-safe:hover:shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-primary)_18%,transparent),0_10px_24px_color-mix(in_oklab,var(--color-primary)_10%,transparent)]"
                >
                  <CountUp
                    value={value}
                    delayMs={delay}
                    durationMs={2400}
                    start={statsInView}
                    className="text-[1.35rem] font-semibold leading-none text-[var(--color-primary)] [font-family:var(--font-display)] transition-colors duration-200 group-hover:text-[var(--color-primary-hover)]"
                  />
                  <div className="mt-1 text-[0.62rem] uppercase tracking-[0.1em] text-[var(--color-text-muted)]">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>

        <div className="grid gap-4 lg:grid-cols-2 lg:auto-rows-auto">
          <RevealOnScroll
            direction="right"
            delay={0.03}
            className="lg:col-start-1 lg:row-start-1 lg:row-span-2"
          >
            <div className="group relative overflow-hidden rounded-[28px] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-lg)] transition-transform duration-300 motion-safe:hover:-translate-y-1">
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 75% 12%, color-mix(in oklab, var(--color-primary) 24%, transparent) 0%, transparent 40%), radial-gradient(circle at 24% 84%, color-mix(in oklab, var(--color-primary) 10%, transparent) 0%, transparent 36%)",
                }}
              />
              <div className="relative grid gap-3 p-3.5 sm:p-4">
                <div className="relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-2)] shadow-[inset_0_0_0_1px_color-mix(in_oklab,var(--color-primary)_10%,transparent)]">
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)]/12 via-transparent to-transparent opacity-90" />
                  <Image
                    src="/subrat-profile.jpg"
                    alt="Subrat Jena portrait"
                    width={520}
                    height={640}
                    className="h-[220px] w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.03] md:h-[248px]"
                    priority
                  />
                  <div className="absolute right-3 top-3 rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-bg)]/90 px-2.5 py-1 text-[0.56rem] font-semibold uppercase tracking-[0.12em] text-[var(--color-primary)] shadow-[0_8px_18px_color-mix(in_oklab,var(--color-primary)_14%,transparent)] transition-transform duration-200 motion-safe:group-hover:-translate-y-0.5">
                    <CountUp value="2+" delayMs={0} durationMs={2400} className="inline-block" /> Years
                  </div>
                </div>
                <div>
                  <p className="text-[0.62rem] uppercase tracking-[0.14em] text-[var(--text-faint)]">
                    Profile / Frontend
                  </p>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--text-muted)]">
                    Design-sensitive frontend developer shipping production UI.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {["React", "Next.js", "AEM", "WCAG", "BFSI", "Mumbai"].map(
                      (badge) => (
                        <span
                          key={badge}
                          className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-2)] px-2.5 py-1 text-[0.58rem] uppercase tracking-[0.1em] text-[var(--text-muted)]"
                        >
                          {badge}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll
            direction="right"
            delay={0.05}
            className="lg:col-start-2 lg:row-start-1"
          >
            <div className="relative overflow-hidden rounded-[22px] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-md)] transition-transform duration-300 motion-safe:hover:-translate-y-1">
              <div className="flex h-8 items-center gap-1.5 border-b border-[var(--color-border)] bg-[var(--color-surface-offset)] px-3">
                <span className="h-2 w-2 rounded-full bg-red-400/70" />
                <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
                <span className="h-2 w-2 rounded-full bg-green-400/70" />
                <span className="ml-2 text-[0.6rem] text-[var(--color-text-muted)]">
                  about-engineer.ts
                </span>
              </div>
              <pre
                className="overflow-hidden p-3.5 text-[0.56rem] leading-[1.65] sm:p-4"
                aria-label="Code snippet"
              >
                <div className="text-[var(--color-text-muted)]">
                  {"// Subrat Jena · Frontend Developer"}
                </div>
                <div className="text-[var(--color-text-muted)]">
                  const engineer = {"{"}
                </div>
                <div className="text-[var(--color-text-muted)]">
                  {" "}
                  name:{" "}
                  <span className="text-[var(--color-text)]">
                    &quot;Subrat Jena&quot;
                  </span>
                  ,
                </div>
                <div className="text-[var(--color-text-muted)]">
                  {" "}
                  role:{" "}
                  <span className="text-[var(--color-text)]">
                    &quot;Frontend Developer&quot;
                  </span>
                  ,
                </div>
                <div className="text-[var(--color-text-muted)]">
                  {" "}
                  location:{" "}
                  <span className="text-[var(--color-text)]">
                    &quot;Mumbai, India&quot;
                  </span>
                  ,
                </div>
                <div className="text-[var(--color-text-muted)]">
                  {" "}
                  experience:{" "}
                  <span className="text-[var(--color-text)]">
                    &quot;2+ years&quot;
                  </span>
                  ,
                </div>
                <div className="text-[var(--color-text-muted)]">
                  {" "}
                  employers: [
                </div>
                <div className="text-[var(--color-text-muted)]">
                  {" "}
                  <span className="text-[var(--color-text)]">
                    &quot;DEPT®&quot;
                  </span>
                  ,
                </div>
                <div className="text-[var(--color-text-muted)]">
                  {" "}
                  <span className="text-[var(--color-text)]">
                    &quot;Rejolut&quot;
                  </span>
                </div>
                <div className="text-[var(--color-text-muted)]"> ],</div>
                <div className="text-[var(--color-text-muted)]">
                  {" "}
                  focus: [
                  <span className="text-[var(--color-text)]">
                    &quot;BFSI&quot;
                  </span>
                  ,{" "}
                  <span className="text-[var(--color-text)]">
                    &quot;Enterprise&quot;
                  </span>
                  ],
                </div>
                <div className="text-[var(--color-text-muted)]">
                  {" "}
                  available:{" "}
                  <span className="text-[var(--color-success)]">true</span>,
                </div>
                <div className="text-[var(--color-text-muted)]">{"};"}</div>
                <span className="code-cursor ml-1 inline-block h-[11px] w-[1px] bg-[var(--color-primary)] align-middle" />
              </pre>
            </div>
          </RevealOnScroll>

          <RevealOnScroll
            direction="right"
            delay={0.1}
            className="lg:col-start-2 lg:row-start-2"
          >
            <div className="overflow-hidden rounded-[22px] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-md)] transition-transform duration-300 motion-safe:hover:-translate-y-1">
              <div className="h-[2px] w-full bg-[var(--color-primary)]" />
              <div className="p-3.5">
                <p className="text-[0.65rem] uppercase tracking-[0.15em] text-[var(--color-primary)]">
                  Currently building
                </p>
                <div className="mt-2.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-offset)] p-3 transition-all duration-200 motion-safe:hover:-translate-y-0.5 motion-safe:hover:border-[var(--color-primary)]/45 motion-safe:hover:bg-[var(--color-surface)]">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[var(--color-primary)]/25 bg-[var(--color-primary-highlight)] text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-[var(--color-primary)]">
                        KB
                      </div>
                      <p className="text-[0.8rem] font-semibold text-[var(--color-text)]">
                        KreditBook
                      </p>
                    </div>
                    <span className="rounded-full border border-[var(--color-primary)]/35 bg-[var(--color-primary-highlight)] px-2 py-0.5 text-[0.56rem] font-medium uppercase tracking-[0.08em] text-[var(--color-primary)]">
                      In Progress
                    </span>
                  </div>
                  <p className="mt-1.5 text-[0.63rem] leading-relaxed text-[var(--color-text-muted)]">
                    Cross-platform ledger app with WhatsApp sharing, Super Admin
                    dashboard, JWT auth, and role-based access.
                  </p>
                  <p className="mt-2 text-[0.58rem] uppercase tracking-[0.08em] text-[var(--text-faint)]">
                    React Native, Zustand, Supabase, JWT, WhatsApp
                  </p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
