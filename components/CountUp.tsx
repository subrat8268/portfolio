"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  value: string;
  className?: string;
  /** Total animation duration in ms — scales down automatically for small numbers */
  durationMs?: number;
  /** Delay before animation starts (use for stagger) */
  delayMs?: number;
};

const numberPattern = /^(\d+(?:\.\d+)?)(.*)$/;

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export default function CountUp({
  value,
  className,
  durationMs = 2400,
  delayMs = 0,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const frameRef = useRef<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const match = value.match(numberPattern);
  const suffix = match ? (match[2] ?? "") : "";
  // suffix visible from frame 0: "0+" not "0"
  const [displayValue, setDisplayValue] = useState(`0${suffix}`);

  useEffect(() => {
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const target = parseFloat(match[1]);
    const isDecimal = match[1].includes(".");
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const node = ref.current;
    if (!node) return;

    // Scale duration so "3" still feels deliberate, not instant
    const scaledDuration = prefersReducedMotion
      ? 0
      : Math.max(durationMs * Math.sqrt(target / 100), 900);

    const runAnimation = () => {
      if (prefersReducedMotion) {
        setDisplayValue(value);
        return;
      }

      const scaledDuration = Math.max(durationMs * (target / 100), 600);

      const start = performance.now();

      const tick = (now: number) => {
        const raw = Math.min((now - start) / scaledDuration, 1);
        const eased = easeOutExpo(raw);
        const current = isDecimal
          ? (target * eased).toFixed(1)
          : String(Math.round(target * eased));
        setDisplayValue(`${current}${suffix}`);

        if (raw < 1) {
          frameRef.current = requestAnimationFrame(tick);
        } else {
          setDisplayValue(value);
          // glow pulse on finish
          if (ref.current) {
            ref.current.classList.add("countup-done");
            setTimeout(
              () => ref.current?.classList.remove("countup-done"),
              700,
            );
          }
        }
      };

      frameRef.current = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          if (delayMs > 0) {
            timeoutRef.current = setTimeout(runAnimation, delayMs);
          } else {
            runAnimation();
          }
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (timeoutRef.current !== null) clearTimeout(timeoutRef.current);
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, durationMs, delayMs]);

  return (
    <span ref={ref} className={className} aria-label={value}>
      {displayValue}
    </span>
  );
}
