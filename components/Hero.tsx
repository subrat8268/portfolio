"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  const mockups = [
    {
      label: "AU Small Finance Bank",
      tag: "BFSI · Enterprise",
      lines: ["Branch locator", "Site search", "Voice search"],
      rotate: "-rotate-2",
      offset: "left-0 top-10",
      delay: "0s",
      startRotate: "-10deg",
      finalRotate: "-2deg",
      accent: "var(--accent)",
    },
    {
      label: "XPharms Xchange",
      tag: "Next.js · B2B",
      lines: ["Onboarding flow", "92+ Lighthouse", "JWT access"],
      rotate: "rotate-1",
      offset: "left-[60px] top-0",
      delay: "0.12s",
      startRotate: "8deg",
      finalRotate: "1deg",
      accent: "var(--color-primary)",
    },
    {
      label: "Research Assist",
      tag: "React · Redux",
      lines: ["Analyst Chat UI", "5+ REST APIs", "-40% Q&A time"],
      rotate: "rotate-5",
      offset: "left-[120px] top-14",
      delay: "0.24s",
      startRotate: "18deg",
      finalRotate: "5deg",
      accent: "var(--color-success)",
    },
  ];

  const motionProps = shouldReduceMotion
    ? {
        initial: false,
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0 },
      }
    : undefined;

  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden bg-[var(--bg-page)]">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-24 lg:grid-cols-2 lg:py-28">
        {/* LEFT — identity */}
        <div className="flex flex-col gap-4">
          <motion.div
            initial={motionProps?.initial ?? { opacity: 0, y: 16 }}
            animate={motionProps?.animate ?? { opacity: 1, y: 0 }}
            transition={
              motionProps?.transition ?? {
                duration: 0.5,
                delay: 0.05,
                ease: [0.16, 1, 0.3, 1],
              }
            }
          >
            <div className="mb-3 flex flex-wrap items-center gap-3">
              <span className="flex items-center gap-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-3 py-1 text-[0.65rem] uppercase tracking-[0.15em] text-[var(--text-muted)]">
                <span
                  className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-success)]"
                  style={
                    prefersReducedMotion
                      ? {}
                      : { animation: "pulse 2s ease-in-out infinite" }
                  }
                />
                Open to opportunities
              </span>
              <span className="text-[0.65rem] uppercase tracking-[0.15em] text-[var(--text-muted)]">
                Mumbai, India
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={motionProps?.initial ?? { opacity: 0, y: 28 }}
            animate={motionProps?.animate ?? { opacity: 1, y: 0 }}
            transition={
              motionProps?.transition ?? {
                duration: 0.65,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }
            }
          >
            <h1 className="text-[clamp(2.75rem,6vw,4.5rem)] font-semibold leading-none -mb-6">
              <span
                style={{ fontFamily: "var(--font-display)" }}
                className="text-[var(--text-primary)]"
              >
                Subrat Jena
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={motionProps?.initial ?? { opacity: 0, y: 20 }}
            animate={motionProps?.animate ?? { opacity: 1, y: 0 }}
            transition={
              motionProps?.transition ?? {
                duration: 0.55,
                delay: 0.28,
                ease: [0.16, 1, 0.3, 1],
              }
            }
          >
            <p className="mt-1 text-[clamp(1.4rem,2.8vw,2.25rem)] font-bold text-[var(--text-primary)] [font-family:var(--font-body)]">
              Frontend Developer
            </p>
          </motion.div>

          <motion.div
            initial={motionProps?.initial ?? { opacity: 0 }}
            animate={motionProps?.animate ?? { opacity: 1, y: 0 }}
            transition={motionProps?.transition ?? { duration: 0.5, delay: 0.38 }}
          >
            <div className="mt-1 flex flex-wrap gap-2">
              {["React", "Next.js", "TypeScript", "React Native", "AEM", "WCAG"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-2.5 py-1 text-[0.68rem] uppercase tracking-[0.1em] text-[var(--text-muted)]"
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>
          </motion.div>

          <motion.div
            initial={motionProps?.initial ?? { opacity: 0 }}
            animate={motionProps?.animate ?? { opacity: 1, y: 0 }}
            transition={motionProps?.transition ?? { duration: 0.5, delay: 0.48 }}
          >
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[var(--text-muted)]">
              2+ years · BFSI &amp; product · DEPT® &amp; Rejolut.
            </p>
          </motion.div>

          <motion.div
            initial={motionProps?.initial ?? { opacity: 0, y: 10 }}
            animate={motionProps?.animate ?? { opacity: 1, y: 0 }}
            transition={motionProps?.transition ?? { duration: 0.4, delay: 0.6 }}
            className="mt-6 flex flex-wrap items-center justify-start gap-3"
          >
            <Link
              href="#projects"
              className="inline-flex items-center gap-1.5 bg-[var(--accent)] px-5 py-2.5 text-sm text-white transition-colors duration-200 hover:bg-[var(--accent-hover)]"
            >
              View Projects
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-5 py-2.5 text-sm text-[var(--text-muted)] transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--text-primary)]"
            >
              Get in Touch
            </Link>
            <Link
              href="/design"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.08em] text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--text-primary)]"
            >
              Design Work →
            </Link>
          </motion.div>
        </div>

        {/* RIGHT — browser mockup cards */}
        <div className="relative h-[360px] sm:h-[420px] lg:h-[520px]">
          <div className="relative h-full w-full">
            {mockups.map((m, index) => (
              <div
                key={m.label}
                className={`absolute h-[250px] w-[180px] sm:h-[300px] sm:w-[220px] overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-elevated)] shadow-2xl ${m.rotate} ${m.offset} ${index === 2 ? "hidden sm:block" : ""}`}
                style={
                  prefersReducedMotion
                    ? undefined
                    : {
                        animationName: "cardSettle",
                        animationDuration: "0.7s",
                        animationTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
                        animationFillMode: "both",
                        animationDelay: m.delay,
                        ["--start-rotate" as string]: m.startRotate,
                        ["--final-rotate" as string]: m.finalRotate,
                      }
                }
              >
                {/* Browser chrome */}
                <div className="flex h-7 items-center gap-1.5 border-b border-[var(--border-subtle)] bg-[var(--bg-offset)] px-2">
                  <span className="h-2 w-2 rounded-full bg-[var(--text-faint)]" />
                  <span className="h-2 w-2 rounded-full bg-[var(--text-muted)]" />
                  <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                  <span className="ml-2 truncate text-[0.55rem] text-[var(--text-muted)]">
                    {m.label}
                  </span>
                </div>
                {/* Mockup body */}
                <div className="flex h-[calc(100%-1.75rem)] flex-col justify-between p-3">
                  <div>
                    <p className="text-[0.55rem] uppercase tracking-[0.12em] text-[var(--text-muted)]">
                      {m.tag}
                    </p>
                    <div className="mt-2 space-y-1.5">
                      {m.lines.map((line) => (
                        <div
                          key={line}
                          className="rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-offset)] px-2 py-1 text-[0.6rem] text-[var(--text-muted)]"
                        >
                          {line}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    className="h-1 w-full rounded-full"
                    style={{ background: m.accent, opacity: 0.7 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes cardSettle {
          0% {
            opacity: 0;
            transform: translate3d(0, -40px, 0) rotate(var(--start-rotate));
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0) rotate(var(--final-rotate));
          }
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.4;
          }
        }
      `}</style>
    </section>
  );
}
