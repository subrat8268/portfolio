"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { CSSProperties } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  const heroImages = [
    {
      src: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Frontend project preview",
    },
    {
      src: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "BFSI interface preview",
    },
    {
      src: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Dashboard preview",
    },
  ];
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(mediaQuery.matches);

    update();
    mediaQuery.addEventListener("change", update);

    return () => {
      mediaQuery.removeEventListener("change", update);
    };
  }, []);

  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden bg-[var(--color-bg)]">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-24 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mb-2 text-[0.65rem] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
              Based in Mumbai · Available for hire
            </p>
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
            <h1 className="[font-family:var(--font-body)] text-[clamp(2.75rem,6vw,4.5rem)] font-semibold leading-none text-[var(--color-text)]">
              Subrat Jena
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
            <p className="mt-1 text-[clamp(1.5rem,3vw,2.5rem)] text-[var(--color-accent)] [font-family:var(--font-display)]">
              Frontend Developer.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.42 }}
          >
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--color-text-muted)]">
              2 yrs building production React &amp; Next.js interfaces for BFSI
              clients. I also bring design sensibility to every UI I ship.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.55 }}
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
          </motion.div>
        </div>

        <div className="relative h-[400px] lg:h-[500px]">
          <div className="relative h-[240px] w-[320px] sm:h-[340px] sm:w-[380px] lg:h-[420px] lg:w-[420px]">
            {heroImages.map((item, index) => {
              const rotates = ["-rotate-6", "rotate-0", "rotate-6"];
              const offsets = [
                "left-0 top-12",
                "left-[48px] top-0",
                "left-[108px] top-16",
              ];
              const animationDelays = ["0s", "0.12s", "0.24s"];
              const startRotates = ["-18deg", "8deg", "20deg"];
              const finalRotates = ["-6deg", "0deg", "6deg"];
              const animationStyle:
                | (CSSProperties & Record<string, string>)
                | undefined = prefersReducedMotion
                ? undefined
                : {
                    animationName: "cardSettle",
                    animationDuration: "0.7s",
                    animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                    animationFillMode: "both",
                    animationDelay: animationDelays[index] ?? "0s",
                    "--start-rotate": startRotates[index] ?? "0deg",
                    "--final-rotate": finalRotates[index] ?? "0deg",
                  };

              return (
                <div
                  key={`${item.src}-${index}`}
                  className={`absolute h-[300px] w-[220px] overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)] shadow-2xl ${rotates[index] ?? "rotate-0"} ${offsets[index] ?? "left-0 top-0"}`}
                  style={animationStyle}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 160px, 220px"
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              );
            })}

            <div className="group absolute -right-14 top-6 inline-block">
              <svg
                viewBox="0 0 100 100"
                className="h-[60px] w-[60px] text-white"
                aria-label="Available for hire"
                role="img"
                style={
                  prefersReducedMotion
                    ? undefined
                    : {
                        animation: "heroSpin 20s linear infinite",
                      }
                }
              >
                <path
                  d="M50 6 L58 34 L86 22 L66 44 L94 50 L66 56 L86 78 L58 66 L50 94 L42 66 L14 78 L34 56 L6 50 L34 44 L14 22 L42 34 Z"
                  fill="currentColor"
                />
              </svg>
              <span className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[0.6rem] uppercase tracking-[0.15em] text-[var(--color-text-muted)] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                Available for hire
              </span>
            </div>
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

        @keyframes heroSpin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
