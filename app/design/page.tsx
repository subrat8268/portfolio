"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";

import CountUp from "@/components/CountUp";
import DisplayHeading from "@/components/DisplayHeading";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { DesignGallery } from "@/components/DesignGallery";
import { designItems } from "@/lib/design-work";

const heroPreviews = designItems.filter((item) => item.featured).slice(0, 3);

export default function DesignPage() {
  const shouldReduceMotion = false;
  const statsRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4">
        <section className="relative flex min-h-[calc(100dvh-4rem)] items-center overflow-hidden py-0">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <motion.div
              aria-hidden="true"
              className="absolute left-[-8rem] top-[4rem] h-72 w-72 rounded-full bg-[var(--color-primary)]/10 blur-3xl"
              animate={shouldReduceMotion ? undefined : { y: [0, -18, 0], x: [0, 12, 0] }}
              transition={shouldReduceMotion ? undefined : { duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              aria-hidden="true"
              className="absolute right-[5%] top-[7rem] h-64 w-64 rounded-full bg-[var(--color-primary-highlight)]/35 blur-3xl"
              animate={shouldReduceMotion ? undefined : { y: [0, 16, 0], x: [0, -10, 0] }}
              transition={shouldReduceMotion ? undefined : { duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
              <p className="text-[0.65rem] uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
                Design Portfolio
              </p>
              <DisplayHeading className="mt-3 text-[clamp(2.8rem,6.5vw,5rem)] leading-[1.08] tracking-[-0.02em] text-[var(--color-text)]">
                Crafted for{" "}
                <em
                  className="not-italic"
                  style={{ fontStyle: "italic", color: "var(--color-primary)" }}
                >
                  real clients.
                </em>
              </DisplayHeading>
              <p className="mt-5 max-w-2xl text-sm leading-6 text-[var(--color-text-muted)] md:text-base">
                Logos, banners, invitations, and social graphics — made in Canva
                for businesses and events across Mumbai.
              </p>
              <Link
                href="/"
                className="mt-3 block text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-200"
              >
                ← Back to frontend work
              </Link>

              <div ref={statsRef} className="mt-5 flex flex-wrap gap-4 text-sm text-[var(--color-text-muted)]">
                <div>
                  <span className="font-[var(--font-display)] text-[1.8rem] leading-none text-[var(--color-text)]">
                    <CountUp value="15+" delayMs={0} />
                  </span>
                  <p className="mt-1 text-xs uppercase tracking-[0.12em]">Projects delivered</p>
                </div>
                <div>
                  <span className="font-[var(--font-display)] text-[1.8rem] leading-none text-[var(--color-text)]">
                    <CountUp value="8+" delayMs={150} />
                  </span>
                  <p className="mt-1 text-xs uppercase tracking-[0.12em]">Real clients</p>
                </div>
                <div>
                  <span className="font-[var(--font-display)] text-[1.8rem] leading-none text-[var(--color-text)]">
                    <CountUp value="3" delayMs={300} />
                  </span>
                  <p className="mt-1 text-xs uppercase tracking-[0.12em]">Design disciplines</p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Canva",
                  "Brand Systems",
                  "Social Graphics",
                  "Print Layouts",
                ].map((item, index) => (
                  <motion.span
                    key={item}
                    className={`rounded-full border px-3 py-1 text-[0.62rem] uppercase tracking-[0.12em] ${
                      index === 0
                        ? "border-[var(--color-primary)]/20 bg-[var(--color-primary-highlight)] text-[var(--color-primary)]"
                        : "border-[var(--color-border)] bg-[var(--color-surface-2)] text-[var(--color-text-muted)]"
                    }`}
                    animate={shouldReduceMotion ? undefined : { y: [0, -2, 0] }}
                    transition={shouldReduceMotion ? undefined : { duration: 4 + index, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>

            </div>

            <motion.div
              className="relative isolate mx-auto rounded-[34px] border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-[var(--shadow-lg)] lg:mx-0"
              whileHover={shouldReduceMotion ? undefined : { rotateX: 2, rotateY: -4, y: -4 }}
              transition={shouldReduceMotion ? undefined : { type: "spring", stiffness: 120, damping: 18 }}
              style={{ transformStyle: "preserve-3d", perspective: 1200 }}
            >
              <div className="pointer-events-none absolute inset-0 rounded-[34px] bg-[radial-gradient(circle_at_top_left,var(--color-primary-highlight)_0%,transparent_42%),radial-gradient(circle_at_bottom_right,var(--color-primary)_0%,transparent_28%)] opacity-60" />
              <div className="relative overflow-hidden rounded-[28px] border border-[var(--color-border)] bg-[var(--color-bg)]/60 p-4">
                <div className="grid gap-3 sm:grid-cols-[1.05fr_0.95fr]">
                  <motion.div
                    className="relative overflow-hidden rounded-[24px] border border-[var(--color-border)] bg-[var(--color-primary-highlight)]/15"
                    style={{ aspectRatio: heroPreviews[0]?.aspectRatio ?? "1 / 1" }}
                    animate={shouldReduceMotion ? undefined : { y: [0, -10, 0], rotate: [-1, 1, -1] }}
                    transition={shouldReduceMotion ? undefined : { duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {heroPreviews[0] ? (
                      <Image
                        src={heroPreviews[0].thumbnail}
                        alt={heroPreviews[0].title}
                        fill
                        priority
                        className="object-contain p-4"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                    ) : null}
                  </motion.div>

                  <div className="grid gap-3">
                    {heroPreviews.slice(1).map((item, index) => (
                      <motion.div
                        key={item.id}
                        className="relative overflow-hidden rounded-[24px] border border-[var(--color-border)] bg-[var(--color-primary-highlight)]/12"
                        style={{ aspectRatio: item.aspectRatio }}
                        animate={shouldReduceMotion ? undefined : { y: [0, -8 - index * 2, 0], rotate: index === 0 ? [1.5, -1.5, 1.5] : [-1.5, 1.5, -1.5] }}
                        transition={shouldReduceMotion ? undefined : { duration: 7 + index, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Image
                          src={item.thumbnail}
                          alt={item.title}
                          fill
                          className="object-contain p-4"
                          sizes="(max-width: 1024px) 100vw, 20vw"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap items-center justify-between gap-3 rounded-[22px] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3">
                  <div>
                    <p className="text-[0.62rem] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                      Gallery mode
                    </p>
                    <p className="mt-1 text-sm text-[var(--color-text)]">
                      Hover to explore, click to inspect.
                    </p>
                  </div>
                  <div className="rounded-full border border-[var(--color-primary)]/25 bg-[var(--color-primary-highlight)] px-3 py-1 text-[0.62rem] uppercase tracking-[0.12em] text-[var(--color-primary)]">
                    6 pieces
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mt-14">
          <DesignGallery items={designItems} />
        </section>

        <section className="pb-20 pt-8">
          <div className="border border-[var(--color-border)] bg-[var(--color-surface)] p-6 md:p-8">
            <h2 className="text-2xl font-semibold">
              Let&apos;s make something{" "}
              <em className="italic not-italic [font-style:italic] [color:var(--color-primary)]">
                together.
              </em>
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--color-text-muted)]">
              One person. Design + code. No handoff, no agency fees.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <Link
                href="/#contact"
                className="inline-flex items-center rounded-full bg-[var(--color-accent)] px-4 py-2 font-medium text-white transition-all duration-200 hover:bg-[var(--color-accent-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
              >
                Get in touch
              </Link>
              <Link
                href="/"
                className="inline-flex items-center rounded-full border border-[var(--color-border)] px-4 py-2 font-medium text-[var(--color-text)] transition-all duration-200 hover:border-white/40 hover:text-[var(--color-text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
              >
                View frontend work
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
