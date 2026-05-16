"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  value: string;
  className?: string;
  start?: boolean;
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
  start = true,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const frameRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);

  const match = value.match(numberPattern);
  const suffix = match ? (match[2] ?? "") : "";
  // suffix visible from frame 0: "0+" not "0"
  const [displayValue, setDisplayValue] = useState(`0${suffix}`);

  useEffect(() => {
    if (!match) {
      setDisplayValue(value);
      return;
    }

    if (!start) {
      setDisplayValue(`0${suffix}`);
      return;
    }

    const target = parseFloat(match[1]);
    const isDecimal = match[1].includes(".");
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

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
          frameRef.current = window.requestAnimationFrame(tick);
        } else {
          setDisplayValue(value);
          // glow pulse on finish
          if (ref.current) {
            ref.current.classList.add("countup-done");
            window.setTimeout(
              () => ref.current?.classList.remove("countup-done"),
              700,
            );
          }
        }
      };

      frameRef.current = window.requestAnimationFrame(tick);
    };

    if (delayMs > 0) {
      timeoutRef.current = window.setTimeout(runAnimation, delayMs);
    } else {
      runAnimation();
    }

    return () => {
      if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
    };
  }, [delayMs, durationMs, match, start, suffix, value]);

  return (
    <span ref={ref} className={className} aria-label={value}>
      {displayValue}
    </span>
  );
}
