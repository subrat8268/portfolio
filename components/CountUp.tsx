"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  value: string;
  className?: string;
  start?: boolean;
  durationMs?: number;
  delayMs?: number;
};

const pattern = /^([^\d]*)(\d+(?:\.\d+)?)([^\d]*)$/;

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export default function CountUp({
  value,
  className,
  start = true,
  durationMs = 10000,
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
    if (!start) {
      setDisplayValue(`${prefix}0${suffix}`);
      return;
    }

    if (!match || isNaN(target)) {
      setDisplayValue(value);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const scaledDuration = durationMs;

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
            setTimeout(
              () => ref.current?.classList.remove("countup-done"),
              700,
            );
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
      { threshold: 0 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (timeoutRef.current !== null) clearTimeout(timeoutRef.current);
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, [value, durationMs, delayMs, start]);

  return (
    <span ref={ref} className={className} aria-label={value}>
      {displayValue}
    </span>
  );
}
