"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  value: string;
  className?: string;
  durationMs?: number;
  delayMs?: number;
};

const numberPattern = /^(\d+(?:\.\d+)?)(.*)$/;

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export default function CountUp({
  value,
  className,
  durationMs = 2200,
  delayMs = 0,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const frameRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);
  const [displayValue, setDisplayValue] = useState(
    `0${value.replace(/^\d+(\.\d+)?/, "")}`,
  );

  useEffect(() => {
    const match = value.match(numberPattern);

    if (!match) {
      setDisplayValue(value);
      return;
    }

    const target = Number(match[1]);
    const suffix = match[2] ?? "";
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const node = ref.current;

    if (!node) return;

    const run = () => {
      if (delayMs > 0) {
        timeoutRef.current = window.setTimeout(() => {
          timeoutRef.current = null;
          runAnimation();
        }, delayMs);
        return;
      }

      runAnimation();
    };

    const runAnimation = () => {
      if (prefersReducedMotion) {
        setDisplayValue(value);
        return;
      }

      const scaledDuration = Math.max(durationMs * (target / 100), 600);

      const start = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - start) / scaledDuration, 1);
        const eased = easeOutCubic(progress);
        const current = Math.round(target * eased);
        setDisplayValue(`${current}${suffix}`);

        if (progress < 1) {
          frameRef.current = window.requestAnimationFrame(tick);
        } else {
          setDisplayValue(value);
          if (ref.current) {
            ref.current.classList.add("countup-done");
            window.setTimeout(() => ref.current?.classList.remove("countup-done"), 600);
          }
        }
      };

      frameRef.current = window.requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          run();
        }
      },
      { threshold: 0.45 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [delayMs, durationMs, value]);

  return (
    <span ref={ref} className={className} aria-label={value}>
      {displayValue}
    </span>
  );
}
