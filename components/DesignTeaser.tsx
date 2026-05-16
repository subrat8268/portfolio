"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";

import { designItems } from "@/lib/design-work";

const marqueeItems = [
  "Logo Design",
  "Festival Banners",
  "Brand Identity",
  "Social Media Graphics",
  "Invitations",
  "Print Design",
  "Canva Expert",
  "Real Client Work",
  "Logo Design",
  "Festival Banners",
  "Brand Identity",
  "Social Media Graphics",
  "Invitations",
  "Print Design",
  "Canva Expert",
  "Real Client Work",
];

const disciplineChips = ["Logos", "Branding", "Banners", "Social Graphics", "Print", "Invitations"];

const stats = [
  { value: "15+", label: "Projects" },
  { value: "8+", label: "Real Clients" },
  { value: "3", label: "Categories" },
  { value: "100%", label: "Canva Built" },
];

const teaserTheme = {
  "--color-bg": "#171614",
  "--color-surface": "#1c1b19",
  "--color-surface-2": "#201f1d",
  "--color-border": "#393836",
  "--color-text": "#cdccca",
  "--color-text-muted": "#797876",
  "--color-text-faint": "#5a5957",
  "--color-accent": "#e8540e",
  "--color-accent-hover": "#c94200",
} as CSSProperties;

export function DesignMarquee() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(mediaQuery.matches);

    update();
    mediaQuery.addEventListener("change", update);

    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return (
    <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-y border-[var(--color-border)] bg-[var(--color-accent)] py-[0.6rem]">
      <div
        className="flex w-max gap-10 whitespace-nowrap"
        aria-hidden="true"
        style={prefersReducedMotion ? { transform: "translateX(0)" } : { animation: "marqueeScroll 24s linear infinite" }}
      >
        {marqueeItems.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="inline-flex items-center gap-8 text-[0.625rem] font-medium uppercase tracking-[0.22em] text-white"
          >
            {item}
            <span className="text-[0.7em] text-white/30">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function DesignTeaser() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const featuredItems = designItems.filter((item) => item.featured).slice(0, 3);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(mediaQuery.matches);

    update();
    mediaQuery.addEventListener("change", update);

    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.24 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="design-teaser-heading"
      className={`mx-auto my-8 max-w-6xl overflow-hidden rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-bg)] transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={teaserTheme}
    >
      <div className="relative mx-auto max-w-6xl overflow-hidden bg-[var(--color-surface)]">
        <div className="pointer-events-none absolute right-[-60px] top-[-60px] h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(232,84,14,0.1)_0%,transparent_70%)]" />

        <div className="grid gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16 lg:px-14 lg:py-16">
          <div className="max-w-xl">
            <p className="mb-3 text-[0.625rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-text-faint)]">
              Beyond the code
            </p>

            <h3
              id="design-teaser-heading"
              className="text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.1] text-[var(--color-text)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Pixels with <em className="italic text-[var(--color-accent)]">purpose.</em>
            </h3>

            <p className="mt-3 max-w-[44ch] text-[0.9rem] leading-[1.65] text-[var(--color-text-muted)]">
              Logos, event banners, brand identity systems, and social graphics - crafted for real clients in Canva. Clean, considered, and built to leave an impression.
            </p>

            <div className="mt-8 flex gap-3 overflow-x-auto pb-1 sm:gap-3.5">
              {featuredItems.map((item) => (
                <Link
                  key={item.id}
                  href="/design"
                  aria-label={`View ${item.title}`}
                  className="group relative h-[4.5rem] w-[4.5rem] shrink-0 overflow-hidden rounded-[0.75rem] border border-[var(--color-border)] bg-[var(--color-surface-2)] transition-all duration-200 ease-out hover:-translate-y-1 hover:scale-[1.04] hover:border-[rgba(232,84,14,0.35)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.4)] sm:h-[4.75rem] sm:w-[4.75rem]"
                  title={item.title}
                >
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.08]"
                    sizes="80px"
                  />
                </Link>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2.5 sm:gap-2">
              {disciplineChips.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex rounded-full border border-[var(--color-border)] bg-[var(--color-surface-2)] px-3 py-1 text-[0.7rem] font-medium tracking-[0.04em] text-[var(--color-text-muted)] transition-all duration-200 ease-out hover:border-[rgba(232,84,14,0.35)] hover:bg-[rgba(232,84,14,0.12)] hover:text-[var(--color-text)] hover:shadow-[0_0_0_1px_rgba(232,84,14,0.15),0_0_24px_rgba(232,84,14,0.12)]"
                >
                  {chip}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/design"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(232,84,14,0.25)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[var(--color-accent-hover)] hover:shadow-[0_8px_24px_rgba(232,84,14,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
              >
                <span className="absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.14)_50%,transparent_100%)] transition-transform duration-500 ease-out group-hover:translate-x-full" />
                <span className="relative">Explore Design Work</span>
                <svg
                  className="relative h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="relative hidden h-[290px] w-[260px] shrink-0 lg:block">
            <div className="group relative h-full w-full">
              {featuredItems.map((item, index) => {
                const stackClasses = [
                  "left-0 top-0 rotate-[-6deg] translate-x-[-8px]",
                  "left-[55px] top-[50px] rotate-[2deg]",
                  "left-[10px] top-[130px] rotate-[-2deg]",
                ];
                const hoverClasses = [
                  "group-hover:translate-x-[-16px] group-hover:translate-y-[-8px] group-hover:rotate-[-10deg]",
                  "group-hover:translate-y-[-6px] group-hover:rotate-[4deg]",
                  "group-hover:translate-x-[6px] group-hover:translate-y-[6px] group-hover:rotate-0",
                ];

                const sizes = ["140px", "155px", "125px"];

                return (
                  <div
                    key={item.id}
                    className={`absolute overflow-hidden rounded-[1rem] border border-[var(--color-border)] bg-[var(--color-surface-2)] shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-transform duration-[400ms] ease-out ${stackClasses[index]} ${hoverClasses[index]}`}
                    style={{ width: sizes[index], height: sizes[index] }}
                    aria-hidden="true"
                  >
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes={sizes[index]}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 border-t border-[var(--color-border)] sm:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col gap-0.5 px-4 py-5 sm:px-5 ${index < 3 ? "border-r border-[var(--color-border)]" : ""} ${index >= 2 ? "border-t border-[var(--color-border)] sm:border-t-0" : ""}`}
            >
              <span className="text-[clamp(1.4rem,3vw,2rem)] leading-none text-[var(--color-text)]" style={{ fontFamily: "var(--font-display)" }}>
                {stat.value}
              </span>
              <span className="text-[0.7rem] uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
