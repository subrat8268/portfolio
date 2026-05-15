"use client";

import { type MouseEvent, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Mic, Search } from "lucide-react";
import BrowserCard from "@/components/BrowserCard";

const auProducts = [
  "Savings Account",
  "Fixed Deposit",
  "Personal Loan",
  "Credit Card",
];

export default function HeroMockups() {
  const reducedMotionPreference = useReducedMotion();
  const reduceMotion = Boolean(reducedMotionPreference);
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    setTilt({ x: (0.5 - py) * 5, y: (px - 0.5) * 6.5 });
  };

  return (
    <div className="relative hidden h-[560px] items-center justify-center overflow-hidden lg:flex">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[410px] w-[410px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--color-primary) 22%, transparent) 0%, transparent 72%)",
        }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--color-primary) 10%, transparent) 0%, transparent 68%)",
        }}
        animate={
          reduceMotion
            ? undefined
            : {
                opacity: [0.45, 0.7, 0.45],
                scale: [0.98, 1.02, 0.98],
              }
        }
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <motion.div
        className="relative h-[438px] w-[456px] -translate-x-4"
        style={{ perspective: 1100 }}
        onMouseMove={handleMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setTilt({ x: 0, y: 0 });
        }}
        animate={
          reduceMotion
            ? { rotateX: 0, rotateY: 0 }
            : {
                rotateX: tilt.x,
                rotateY: tilt.y,
                y: isHovered ? -2 : [0, -4, 0],
              }
        }
        transition={
          reduceMotion
            ? { duration: 0 }
            : {
                rotateX: { type: "spring", stiffness: 120, damping: 18, mass: 0.5 },
                rotateY: { type: "spring", stiffness: 120, damping: 18, mass: 0.5 },
                y: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              }
        }
      >
        <motion.div
          className="absolute left-0 top-3 h-[396px] w-[250px]"
          animate={
            reduceMotion
              ? { x: 0, y: 0 }
              : { x: isHovered ? 9 : 0, y: isHovered ? -11 : 0 }
          }
          transition={{ type: "spring", stiffness: 180, damping: 22 }}
        >
          <BrowserCard
            label="AU SMALL FINANCE BANK"
            url="au.bank.in"
            faviconLabel="AU"
            className="h-full"
            reduceMotion={reduceMotion}
          >
            <div className="flex h-full flex-col p-4">
              <p className="mb-2 text-[0.58rem] font-medium uppercase tracking-[0.1em] text-[var(--text-primary)]">
                AU Small Finance Bank
              </p>

              <div className="mb-3 flex items-center gap-1.5">
                {[28, 36, 24, 32].map((w, idx) => (
                  <span
                    key={w + idx}
                    className="h-1.5 rounded-full bg-[var(--text-faint)]"
                    style={{ width: `${w}px` }}
                  />
                ))}
              </div>

              <motion.div
                className="mb-3 flex items-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-page)] px-2.5 py-1.5"
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        boxShadow: [
                          "0 0 0 color-mix(in oklab, var(--color-primary) 0%, transparent)",
                          "0 0 14px color-mix(in oklab, var(--color-primary) 18%, transparent)",
                          "0 0 0 color-mix(in oklab, var(--color-primary) 0%, transparent)",
                        ],
                      }
                }
                transition={{ duration: 2.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <Search className="h-3 w-3 text-[var(--text-faint)]" aria-hidden="true" />
                <div className="flex flex-1 flex-col gap-1">
                  <span className="h-1 w-4/5 rounded-full bg-[var(--text-faint)]" />
                  <span className="h-1 w-2/5 rounded-full bg-[var(--text-faint)]" />
                </div>
                <Mic className="h-3 w-3 text-[var(--text-faint)]" aria-hidden="true" />
              </motion.div>

              <div className="grid flex-1 grid-cols-2 gap-2.5">
                {auProducts.map((item, idx) => (
                  <div
                    key={item}
                    className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-offset)] p-2"
                  >
                    <motion.div
                      className="mb-1.5 h-4 w-4 rounded-md"
                      animate={
                        reduceMotion
                          ? undefined
                          : {
                              opacity: [0.7, 1, 0.7],
                            }
                      }
                      transition={{
                        duration: 2.4,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: idx * 0.2,
                        ease: "easeInOut",
                      }}
                      style={{
                        background:
                          idx < 2
                            ? "color-mix(in oklab, var(--color-primary) 72%, white 6%)"
                            : "color-mix(in oklab, var(--text-faint) 55%, transparent)",
                      }}
                    />
                    <span className="mb-1 block h-1 w-4/5 rounded-full bg-[var(--text-muted)]/70" />
                    <span className="block h-1 rounded-full bg-[var(--text-faint)]/75" style={{ width: `${[50, 60, 70, 45][idx]}%` }} />
                  </div>
                ))}
              </div>
            </div>
          </BrowserCard>
        </motion.div>

        <div className="absolute right-0 top-1 flex w-[196px] flex-col gap-3.5">
          <motion.div
            className="h-[188px]"
            animate={
              reduceMotion ? { x: 0, y: 0 } : { x: isHovered ? 6 : 0, y: isHovered ? -7 : 0 }
            }
            transition={{ type: "spring", stiffness: 180, damping: 22 }}
          >
            <BrowserCard
              label="XPHARMS XCHANGE"
              url="xpharmsxchange.com"
              faviconLabel="XP"
              className="h-full"
              reduceMotion={reduceMotion}
            >
              <div className="p-3.5">
                <p className="mb-2 text-[0.55rem] font-medium text-[var(--text-primary)]">XPharms Xchange</p>
                <div className="mb-2.5 flex items-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-offset)] px-2 py-1.5">
                  <span className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                  <span className="h-1 w-16 rounded-full bg-[var(--text-faint)]" />
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  {[
                    { label: "92+", tone: "var(--accent)" },
                    { label: "<2s", tone: "var(--color-success)" },
                    { label: "SSR", tone: "var(--text-muted)" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-offset)] px-1 py-1.5 text-center text-[0.58rem] font-medium"
                      style={{ color: stat.tone }}
                    >
                      {stat.label}
                      <span className="mx-auto mt-1 block h-1 rounded-full bg-[var(--text-faint)]/70" style={{ width: "65%" }} />
                    </div>
                  ))}
                </div>
              </div>
            </BrowserCard>
          </motion.div>

          <motion.div
            className="h-[188px]"
            animate={
              reduceMotion ? { x: 0, y: 0 } : { x: isHovered ? 3 : 0, y: isHovered ? -3 : 0 }
            }
            transition={{ type: "spring", stiffness: 180, damping: 22 }}
          >
            <BrowserCard
              label="AI COPILOT · INTERNAL TOOL"
              url="Research Assist — ICRA"
              faviconLabel="AI"
              className="h-full"
              reduceMotion={reduceMotion}
            >
              <div className="p-3.5">
                <p className="mb-2 text-[0.55rem] font-medium text-[var(--text-primary)]">AI Copilot · Internal Tool</p>
                <div className="space-y-1.5">
                  <div className="w-4/5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-offset)] p-1.5">
                    <span className="mb-1 block h-1 rounded-full bg-[var(--text-faint)]" />
                    <span className="block h-1 w-[55%] rounded-full bg-[var(--text-faint)]" />
                  </div>
                  <div className="w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-offset)] p-1.5">
                    <span className="mb-1 block h-1 rounded-full bg-[var(--text-faint)]" />
                    <span className="block h-1 rounded-full bg-[var(--text-faint)]" />
                  </div>
                  <div className="ml-auto w-3/4 rounded-lg border border-[color:var(--color-primary)]/30 bg-[var(--color-primary-highlight)] p-1.5">
                    <span className="block h-1 w-[80%] rounded-full bg-[var(--color-primary)]/60" />
                  </div>
                </div>
              </div>
            </BrowserCard>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
