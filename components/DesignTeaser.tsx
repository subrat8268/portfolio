"use client";

import { useEffect, useRef, useState } from "react";
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

const disciplineChips = [
  "Logos",
  "Branding",
  "Banners",
  "Social Graphics",
  "Print",
  "Invitations",
];

const stats = [
  { value: "15+", label: "Projects" },
  { value: "8+", label: "Real Clients" },
  { value: "3", label: "Categories" },
  { value: "100%", label: "Canva Built" },
];

export function DesignMarquee() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-y border-[var(--color-border)] bg-[var(--color-accent)] py-[0.6rem]">
      <div
        className="flex w-max gap-10 whitespace-nowrap"
        aria-hidden="true"
        style={
          prefersReducedMotion
            ? { transform: "translateX(0)" }
            : { animation: "marqueeScroll 24s linear infinite" }
        }
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
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
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
      // Fix 1: lowered threshold from 0.24 → 0.10 so animation triggers reliably
      { threshold: 0.10 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="design-teaser-heading"
      // Fix 2: removed hardcoded teaserTheme inline style — now uses global CSS tokens
      className={[
        "mx-auto my-8 max-w-6xl overflow-hidden",
        "rounded-[1.5rem] border border-[var(--color-border)]",
        "bg-[var(--color-surface)] transition-all duration-700",
        "[transition-timing-function:cubic-bezier(0.16,1,0.3,1)]",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
      ].join(" ")}
    >
      {/* Subtle radial glow */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute right-[-60px] top-[-60px] h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--color-accent)_10%,transparent)_0%,transparent_70%)]" />

        <div className="grid gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16 lg:px-14 lg:py-16">

          {/* ── Left copy ── */}
          <div className="max-w-xl">
            <p className="mb-3 text-[0.625rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-text-faint)]">
              Beyond the code
            </p>

            <h2
              id="design-teaser-heading"
              className="text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.1] text-[var(--color-text)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Pixels with{" "}
              <em className="italic text-[var(--color-accent)]">purpose.</em>
            </h2>

            {/* Fix 3: hyphen → proper em-dash */}
            <p className="mt-3 max-w-[44ch] text-[0.9rem] leading-[1.65] text-[var(--color-text-muted)]">
              Logos, event banners, brand identity systems, and social graphics
              {" "}&#8212;{" "}
              crafted for real clients in Canva. Clean, considered, and built
              to leave an impression.
            </p>

            {/* Thumbnail strip */}
            <div className="mt-8 flex gap-3 overflow-x-auto pb-1 sm:gap-3.5">
              {featuredItems.map((item) => (
                <Link
                  key={item.id}
                  href="/design"
                  aria-label={`View ${item.title}`}
                  className="group relative h-[4.5rem] w-[4.5rem] shrink-0 overflow-hidden rounded-[0.75rem] border border-[var(--color-border)] bg-[var(--color-surface-2)] transition-all duration-200 ease-out hover:-translate-y-1 hover:scale-[1.04] hover:border-[color-mix(in_oklab,var(--color-accent)_35%,transparent)] hover:shadow-[0_12px_28px_oklch(0_0_0_/_.4)]"
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

            {/* Discipline chips */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              {disciplineChips.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex rounded-full border border-[var(--color-border)] bg-[var(--color-surface-2)] px-3 py-1 text-[0.7rem] font-medium tracking-[0.04em] text-[var(--color-text-muted)] transition-all duration-200 hover:border-[color-mix(in_oklab,var(--color-accent)_35%,transparent)] hover:bg-[color-mix(in_oklab,var(--color-accent)_12%,transparent)] hover:text-[var(--color-text)]"
                >
                  {chip}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Link
                href="/design"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_16px_color-mix(in_oklab,var(--color-accent)_28%,transparent)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[var(--color-accent-hover)] hover:shadow-[0_8px_24px_color-mix(in_oklab,var(--color-accent)_38%,transparent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] active:translate-y-0"
              >
                {/* Shimmer sweep */}
                <span className="absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.14)_50%,transparent_100%)] transition-transform duration-500 ease-out group-hover:translate-x-full" />
                <span className="relative">Explore Design Work</span>
                <svg
                  className="relative h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Fix 4: image stack now visible at md: (768px) not just lg: (1024px) */}
          <div className="relative hidden h-[290px] w-[260px] shrink-0 md:block">
            <div className="group relative h-full w-full">
              {featuredItems.map((item, index) => {
                const positions = [
                  { left: "0px",  top: "0px",   width: "140px", height: "140px", rotate: "-6deg",  translateX: "-8px" },
                  { left: "55px", top: "50px",  width: "155px", height: "155px", rotate: "2deg",   translateX: "0px" },
                  { left: "10px", top: "130px", width: "125px", height: "125px", rotate: "-2deg",  translateX: "0px" },
                ];
                const hoverClasses = [
                  "group-hover:-translate-x-4 group-hover:-translate-y-2 group-hover:rotate-[-10deg]",
                  "group-hover:-translate-y-1.5 group-hover:rotate-[4deg]",
                  "group-hover:translate-x-1.5 group-hover:translate-y-1.5 group-hover:rotate-0",
                ];
                const p = positions[index];
                return (
                  <div
                    key={item.id}
                    aria-hidden="true"
                    className={`absolute overflow-hidden rounded-[1rem] border border-[var(--color-border)] bg-[var(--color-surface-2)] shadow-[0_8px_24px_oklch(0_0_0_/.35)] transition-transform duration-[400ms] ease-out ${hoverClasses[index]}`}
                    style={{
                      left: p.left,
                      top: p.top,
                      width: p.width,
                      height: p.height,
                      transform: `rotate(${p.rotate}) translateX(${p.translateX})`,
                      zIndex: index + 1,
                    }}
                  >
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes={p.width}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 border-t border-[var(--color-border)] sm:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={[
                "flex flex-col gap-0.5 px-4 py-5 sm:px-5",
                index < 3 ? "border-r border-[var(--color-border)]" : "",
                index >= 2 ? "border-t border-[var(--color-border)] sm:border-t-0" : "",
              ].join(" ")}
            >
              <span
                className="text-[clamp(1.4rem,3vw,2rem)] leading-none text-[var(--color-text)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {stat.value}
              </span>
              <span className="text-[0.7rem] font-medium uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
