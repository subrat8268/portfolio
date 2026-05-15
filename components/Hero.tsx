"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Atom,
  Briefcase,
  Code2,
  Globe,
  Smartphone,
} from "lucide-react";
import HeroMockups from "@/components/hero/HeroMockups";

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

  const motionProps = shouldReduceMotion
    ? {
        initial: false,
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0 },
      }
    : undefined;

  return (
    <section className="relative flex min-h-[calc(100dvh-64px)] items-center overflow-hidden bg-[var(--bg-page)]">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 lg:grid-cols-2 lg:gap-10">
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
              <span className="flex items-center gap-1.5 rounded-full border border-[color:var(--color-success)]/20 bg-[var(--color-success-highlight)] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[var(--color-success)]">
                <Briefcase className="h-3.5 w-3.5 text-[var(--color-success)]" aria-hidden="true" />
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
            <p className="mt-1 inline-flex items-center gap-2 text-[clamp(1.4rem,2.8vw,2.25rem)] font-bold text-[var(--color-primary)] [font-family:var(--font-body)]">
              Frontend Developer
              <Code2 className="h-4 w-4 opacity-80" aria-hidden="true" />
            </p>
          </motion.div>

          <motion.div
            initial={motionProps?.initial ?? { opacity: 0 }}
            animate={motionProps?.animate ?? { opacity: 1, y: 0 }}
            transition={
              motionProps?.transition ?? { duration: 0.5, delay: 0.38 }
            }
          >
            <div className="mt-1 flex flex-wrap gap-2">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "React Native",
                "AEM",
                "WCAG",
              ].map((tech) => {
                const isAccent =
                  tech === "React" ||
                  tech === "Next.js" ||
                  tech === "React Native";
                const Icon =
                  tech === "React"
                    ? Atom
                    : tech === "Next.js"
                      ? Globe
                      : tech === "React Native"
                        ? Smartphone
                        : null;
                return (
                  <span
                    key={tech}
                    className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.68rem] uppercase tracking-[0.1em] transition-all duration-200 ${
                      isAccent
                        ? "border-[color:var(--color-primary)]/35 bg-[var(--color-primary-highlight)] text-[var(--color-primary)] hover:border-[var(--color-primary)]"
                        : "border-[var(--border-subtle)] bg-[var(--bg-elevated)] text-[var(--text-muted)] hover:border-[var(--accent)]"
                    }`}
                  >
                    {Icon ? <Icon className="h-3.5 w-3.5" aria-hidden="true" /> : null}
                    {tech}
                  </span>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={motionProps?.initial ?? { opacity: 0 }}
            animate={motionProps?.animate ?? { opacity: 1, y: 0 }}
            transition={
              motionProps?.transition ?? { duration: 0.5, delay: 0.48 }
            }
          >
            <p className="mt-2 max-w-md text-sm leading-relaxed text-[var(--text-muted)]">
              2+ years building enterprise-grade interfaces for BFSI companies
              and product startups. From AU Small Finance Bank&apos;s site-wide
              search to B2B fintech platforms at Rejolut.
            </p>
          </motion.div>

          <motion.div
            initial={motionProps?.initial ?? { opacity: 0, y: 10 }}
            animate={motionProps?.animate ?? { opacity: 1, y: 0 }}
            transition={
              motionProps?.transition ?? { duration: 0.4, delay: 0.6 }
            }
            className="mt-6 flex flex-wrap items-center justify-start gap-4"
          >
            <Link
              href="#projects"
              className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-md)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-primary-hover)]"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              </svg>
              View Projects
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-6 py-3 font-semibold text-sm text-[var(--text-muted)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-primary)] hover:text-[var(--text-primary)] hover:shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-primary)_25%,transparent)]"
            >
              Get in Touch
            </Link>
            <Link
              href="/design"
              className="group font-semibold inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.08em] text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--text-primary)]"
            >
              Design Work
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>
          </motion.div>
        </div>

        <HeroMockups />
      </div>

      <style jsx>{`
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
