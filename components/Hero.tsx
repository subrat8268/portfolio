"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  const mockups = [
    {
      label: "AU Bank Search",
      tag: "BFSI · Enterprise",
      lines: ["Search branches", "Compare savings", "Voice search"],
      rotate: "-rotate-2",
      offset: "left-0 top-10",
      delay: "0s",
      startRotate: "-10deg",
      finalRotate: "-2deg",
      accent: "#01696f",
    },
    {
      label: "xpharmsxchange.com",
      tag: "Next.js · B2B",
      lines: ["92+ Lighthouse", "SEO-first", "JWT Auth"],
      rotate: "rotate-1",
      offset: "left-[60px] top-0",
      delay: "0.12s",
      startRotate: "8deg",
      finalRotate: "1deg",
      accent: "#7a39bb",
    },
    {
      label: "ICRA Copilot",
      tag: "React · Redux",
      lines: ["Analyst Chat UI", "5+ REST APIs", "-40% Q&A time"],
      rotate: "rotate-5",
      offset: "left-[120px] top-14",
      delay: "0.24s",
      startRotate: "18deg",
      finalRotate: "5deg",
      accent: "#da7101",
    },
  ];

  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden bg-[var(--color-bg)]">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-24 lg:grid-cols-2">
        {/* LEFT — identity */}
        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-3 flex flex-wrap items-center gap-3">
              <span className="flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-[0.65rem] uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                <span
                  className="inline-block h-1.5 w-1.5 rounded-full bg-green-400"
                  style={
                    prefersReducedMotion
                      ? {}
                      : { animation: "pulse 2s ease-in-out infinite" }
                  }
                />
                Open to opportunities
              </span>
              <span className="text-[0.65rem] uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                Mumbai, India
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <h1 className="text-[clamp(2.75rem,6vw,4.5rem)] font-semibold leading-none -mb-6">
              <span
                style={{ fontFamily: "var(--font-script)" }}
                className="text-[1.15em] text-[var(--color-text)]"
              >
                S
              </span>
              <span
                style={{ fontFamily: "var(--font-display)" }}
                className="text-[var(--color-text)]"
              >
                ubrat Jena
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              delay: 0.28,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <p className="mt-1 text-[clamp(1.4rem,2.8vw,2.25rem)] font-semibold text-[var(--color-accent)] [font-family:var(--font-body)]">
              Frontend Developer
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.38 }}
          >
            <div className="mt-1 flex flex-wrap gap-2">
              {["React", "Next.js", "React Native", "TypeScript"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="rounded-sm border border-[var(--color-border)] px-2.5 py-1 text-[0.68rem] uppercase tracking-[0.1em] text-[var(--color-text-muted)]"
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.48 }}
          >
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[var(--color-text-muted)]">
              2+ years · BFSI enterprise · DEPT® &amp; Rejolut. Building
              production React &amp; Next.js interfaces used by millions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="mt-6 flex flex-wrap items-center justify-start gap-3"
          >
            <Link
              href="#projects"
              className="inline-flex items-center gap-1.5 bg-[var(--color-accent)] px-5 py-2.5 text-sm text-white transition-colors duration-200 hover:bg-[var(--color-accent-hover)]"
            >
              View Projects
            </Link>
            <Link
              href="/design"
              className="inline-flex items-center gap-1.5 border border-[var(--color-border)] px-5 py-2.5 text-sm text-[var(--color-text-muted)] transition-all duration-200 hover:border-white/40 hover:text-white"
            >
              Design Work →
            </Link>
            <a
              href="/subrat-jena-cv.pdf"
              download
              className="inline-flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] transition-colors duration-200 hover:text-white"
            >
              ↓ Download CV
            </a>
          </motion.div>
        </div>

        {/* RIGHT — browser mockup cards */}
        <div className="relative h-[420px] lg:h-[520px]">
          <div className="relative h-full w-full">
            {mockups.map((m) => (
              <div
                key={m.label}
                className={`absolute h-[300px] w-[220px] overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)] shadow-2xl ${m.rotate} ${m.offset}`}
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
                <div className="flex h-7 items-center gap-1.5 border-b border-[var(--color-border)] bg-[var(--color-surface-offset)] px-2">
                  <span className="h-2 w-2 rounded-full bg-red-400/70" />
                  <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
                  <span className="h-2 w-2 rounded-full bg-green-400/70" />
                  <span className="ml-2 truncate text-[0.55rem] text-[var(--color-text-muted)]">
                    {m.label}
                  </span>
                </div>
                {/* Mockup body */}
                <div className="flex h-[calc(100%-1.75rem)] flex-col justify-between p-3">
                  <div>
                    <p className="text-[0.55rem] uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
                      {m.tag}
                    </p>
                    <div className="mt-2 space-y-1.5">
                      {m.lines.map((line) => (
                        <div
                          key={line}
                          className="rounded-sm border border-[var(--color-border)] px-2 py-1 text-[0.6rem] text-[var(--color-text-muted)]"
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
