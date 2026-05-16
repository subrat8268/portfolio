"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  value: string;
  className?: string;
  durationMs?: number;
  delayMs?: number;
};

// Matches: optional prefix (e.g. "$"), digits, optional decimal, optional suffix (e.g. "M+", "+", "%")
// For "10M+" → prefix="", digits="10", suffix="M+"
// For "92+"  → prefix="", digits="92", suffix="+"
// For "2+"   → prefix="", digits="2",  suffix="+"
const pattern = /^([^\d]*)(\d+(?:\.\d+)?)([^\d]*)$/;

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export default function CountUp({
  value,
  className,
  durationMs = 2000,
  delayMs = 0,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const frameRef = useRef<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const match = value.match(pattern);
  const prefix = match?.[1] ?? "";
  const digits = match?.[2] ?? "";
  const suffix = match?.[3] ?? "";
  const target = parseFloat(digits);
  const isDecimal = digits.includes(".");

  // Always show "0" + suffix from first render so layout doesn't shift
  const [displayValue, setDisplayValue] = useState(`${prefix}0${suffix}`);

  useEffect(() => {
    if (!match || isNaN(target)) {
      setDisplayValue(value);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Duration scaled only on the visible digit count (max ~100 scale)
    // e.g. "10M+" → target=10 → scaledDuration ≈ 2000*(10/100)=200 → clamped to 800
    // e.g. "92+"  → target=92 → scaledDuration ≈ 2000*(92/100)=1840
    const scaledDuration = Math.min(
      Math.max(durationMs * (target / 100), 800),
      durationMs,
    );

    const runAnimation = () => {
      if (prefersReducedMotion) {
        setDisplayValue(value);
        return;
      }

      const startTime = performance.now();

      const tick = (now: number) => {
        const raw = Math.min((now - startTime) / scaledDuration, 1);
        const eased = easeOutExpo(raw);
        const current = isDecimal
          ? (target * eased).toFixed(1)
          : String(Math.round(target * eased));
        setDisplayValue(`${prefix}${current}${suffix}`);

        if (raw < 1) {
          frameRef.current = requestAnimationFrame(tick);
        } else {
          setDisplayValue(value);
          if (ref.current) {
            ref.current.classList.add("countup-done");
            setTimeout(() => ref.current?.classList.remove("countup-done"), 700);
          }
        }
      };

      frameRef.current = requestAnimationFrame(tick);
    };

    // Only animate when element enters viewport
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
      { threshold: 0.3 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (timeoutRef.current !== null) clearTimeout(timeoutRef.current);
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  // value string is the only real dep — everything else derives from it
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, durationMs, delayMs]);

  return (
    <span ref={ref} className={className} aria-label={value}>
      {displayValue}
    </span>
  );
}
