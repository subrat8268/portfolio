"use client";

import { type MouseEvent, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import BrowserCard from "@/components/hero/BrowserCard";
import AuBankMockup from "@/components/hero/AuBankMockup";
import XPharmsMockup from "@/components/hero/XPharmsMockup";
import ResearchAssistMockup from "@/components/hero/ResearchAssistMockup";

export default function HeroMockups() {
  const reduceMotion = Boolean(useReducedMotion());
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (event: MouseEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    setTilt({ x: (0.5 - py) * 4.5, y: (px - 0.5) * 6 });
  };

  return (
    <div className="relative hidden h-[600px] items-center justify-center overflow-visible lg:flex">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[470px] w-[470px] -translate-x-[53%] -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--color-primary) 13%, var(--bg-page) 87%) 0%, transparent 72%)",
        }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[510px] w-[510px] -translate-x-[53%] -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--color-primary) 8%, var(--bg-page) 92%) 0%, transparent 68%)",
        }}
        animate={
          reduceMotion
            ? undefined
            : {
                opacity: [0.45, 0.72, 0.45],
                scale: [0.98, 1.02, 0.98],
              }
        }
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="relative origin-center scale-[0.82] xl:scale-100"
        onMouseMove={onMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setTilt({ x: 0, y: 0 });
        }}
        style={{ perspective: 1300 }}
        animate={
          reduceMotion
            ? { rotateX: 0, rotateY: 0 }
            : {
                rotateX: tilt.x,
                rotateY: tilt.y,
                y: isHovered ? -2 : [0, -5, 0],
              }
        }
        transition={
          reduceMotion
            ? { duration: 0 }
            : {
                rotateX: {
                  type: "spring",
                  stiffness: 120,
                  damping: 18,
                  mass: 0.5,
                },
                rotateY: {
                  type: "spring",
                  stiffness: 120,
                  damping: 18,
                  mass: 0.5,
                },
                y: {
                  duration: 6.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                },
              }
        }
      >
        <div className="flex items-start gap-3.5">
          <motion.div
            animate={
              reduceMotion
                ? { x: 0, y: 0 }
                : { x: isHovered ? 10 : 0, y: isHovered ? -10 : 0 }
            }
            transition={{ type: "spring", stiffness: 170, damping: 22 }}
          >
            <BrowserCard
              url="au.bank.in"
              className="h-[420px] w-[262px]"
              reduceMotion={reduceMotion}
            >
              <AuBankMockup reduceMotion={reduceMotion} />
            </BrowserCard>
          </motion.div>

          <div className="flex w-[250px] flex-col gap-3 pt-1">
            <motion.div
              animate={
                reduceMotion
                  ? { x: 0, y: 0 }
                  : { x: isHovered ? 6 : 0, y: isHovered ? -6 : 0 }
              }
              transition={{ type: "spring", stiffness: 170, damping: 22 }}
            >
              <BrowserCard
                url="xpharmsxchange.com"
                className="h-[192.2px] w-[250px]"
                reduceMotion={reduceMotion}
              >
                <XPharmsMockup />
              </BrowserCard>
            </motion.div>

            <motion.div
              animate={
                reduceMotion
                  ? { x: 0, y: 0 }
                  : { x: isHovered ? 3 : 0, y: isHovered ? -3 : 0 }
              }
              transition={{ type: "spring", stiffness: 170, damping: 22 }}
            >
              <BrowserCard
                url="Research Assist — ICRA"
                className="h-[204px] w-[250px]"
                reduceMotion={reduceMotion}
              >
                <ResearchAssistMockup />
              </BrowserCard>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
