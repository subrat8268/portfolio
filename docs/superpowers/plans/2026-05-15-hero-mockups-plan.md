# Hero Browser Mockups Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace tilted floating hero cards with realistic browser-window mockups showing dummy website UIs for three projects.

**Architecture:** Two new components (BrowserCard, HeroMockups) that integrate into existing Hero.tsx. Uses Framer Motion for tilt/parallax effects.

**Tech Stack:** React, TypeScript, Framer Motion, Tailwind CSS, existing CSS variables

---

### Task 1: Create BrowserCard Component

**Files:**
- Create: `components/BrowserCard.tsx`

- [ ] **Step 1: Create BrowserCard.tsx**

```tsx
"use client";

import { type ReactNode } from "react";
import { Lock } from "lucide-react";

interface BrowserCardProps {
  children: ReactNode;
  label: string;
  url: string;
  className?: string;
}

export default function BrowserCard({
  children,
  label,
  url,
  className = "",
}: BrowserCardProps) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${className}`}
    >
      {/* Browser bar */}
      <div className="flex h-8 items-center gap-2 border-b border-[var(--border-subtle)] bg-[var(--bg-offset)] px-3">
        {/* Traffic lights */}
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
        
        {/* URL pill */}
        <div className="ml-2 flex flex-1 items-center gap-1.5 overflow-hidden rounded-full bg-[var(--bg-page)] px-2.5 py-1">
          <Lock className="h-3 w-3 shrink-0 text-[var(--text-muted)]" />
          <span className="truncate text-[0.6rem] text-[var(--text-muted)]">
            {url}
          </span>
        </div>
        
        {/* Label */}
        <span className="shrink-0 text-[0.55rem] uppercase tracking-[0.08em] text-[var(--text-muted)]">
          {label}
        </span>
      </div>
      
      {/* Content */}
      <div className="flex flex-1 flex-col">
        {children}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/BrowserCard.tsx
git commit -m "feat: create BrowserCard component"
```

---

### Task 2: Create AU Small Finance Bank Card Content

**Files:**
- Create: `components/AUBankMockup.tsx`

- [ ] **Step 1: Create AU Bank mockup component**

```tsx
"use client";

import { Search, Mic } from "lucide-react";

export default function AUBankMockup() {
  return (
    <div className="flex flex-1 flex-col p-4">
      {/* Nav pills */}
      <div className="mb-3 flex flex-wrap gap-1.5">
        {["Home", "Personal", "Business", "About"].map((item) => (
          <span
            key={item}
            className="rounded-full border border-[var(--border-subtle)] px-2 py-0.5 text-[0.5rem] uppercase tracking-[0.05em] text-[var(--text-muted)]"
          >
            {item}
          </span>
        ))}
      </div>
      
      {/* Search bar */}
      <div className="mb-4 flex items-center gap-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-page)] px-3 py-2">
        <Search className="h-4 w-4 text-[var(--text-muted)]" />
        <span className="flex-1 text-[0.65rem] text-[var(--text-faint)]">Search...</span>
        <Mic className="h-4 w-4 text-[var(--text-muted)]" />
      </div>
      
      {/* 2x2 Product grid */}
      <div className="grid grid-cols-2 gap-2">
        {[
          { name: "Savings Account", accent: true },
          { name: "Fixed Deposit", accent: true },
          { name: "Personal Loan", accent: false },
          { name: "Credit Card", accent: false },
        ].map((product) => (
          <div
            key={product.name}
            className={`rounded-lg border border-[var(--border-subtle)] p-2 ${
              product.accent ? "bg-[var(--accent)]/10" : "bg-[var(--bg-offset)]"
            }`}
          >
            <div className="h-1 w-8 rounded bg-[var(--accent)]/60" />
            <span className="mt-1 block text-[0.55rem] text-[var(--text-muted)]">
              {product.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/AUBankMockup.tsx
git commit -m "feat: create AU Bank mockup component"
```

---

### Task 3: Create XPharms Xchange Card Content

**Files:**
- Create: `components/XPharmsMockup.tsx`

- [ ] **Step 1: Create XPharms mockup component**

```tsx
"use client";

export default function XPharmsMockup() {
  return (
    <div className="flex flex-1 flex-col p-3">
      {/* Hero area */}
      <div className="mb-3 rounded-lg bg-gradient-to-br from-[var(--accent)]/20 to-[var(--color-primary)]/10 p-3">
        <div className="h-2 w-24 rounded bg-[var(--text-faint)]" />
        <div className="mt-2 h-8 rounded-lg bg-[var(--bg-page)]" />
      </div>
      
      {/* Stats */}
      <div className="mb-3 flex gap-2">
        <div className="rounded border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-2 py-1">
          <span className="text-[0.6rem] font-bold text-[var(--accent)]">92+</span>
        </div>
        <div className="rounded border border-[var(--color-success)]/30 bg-[var(--color-success)]/10 px-2 py-1">
          <span className="text-[0.6rem] font-bold text-[var(--color-success)]">&lt;2s</span>
        </div>
        <div className="rounded border border-[var(--border-subtle)] bg-[var(--bg-offset)] px-2 py-1">
          <span className="text-[0.6rem] text-[var(--text-muted)]">SSR</span>
        </div>
      </div>
      
      {/* Dummy lines */}
      <div className="space-y-1.5">
        <div className="h-1 w-full rounded bg-[var(--border-subtle)]" />
        <div className="h-1 w-4/5 rounded bg-[var(--border-subtle)]" />
        <div className="h-1 w-3/5 rounded bg-[var(--border-subtle)]" />
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/XPharmsMockup.tsx
git commit -m "feat: create XPharms mockup component"
```

---

### Task 4: Create Research Assist Card Content

**Files:**
- Create: `components/ResearchAssistMockup.tsx`

- [ ] **Step 1: Create Research Assist mockup component**

```tsx
"use client";

export default function ResearchAssistMockup() {
  return (
    <div className="flex flex-1 flex-col p-3">
      {/* Chat UI left side */}
      <div className="mb-3 flex flex-col gap-2">
        <div className="max-w-[70%] rounded-lg bg-[var(--bg-offset)] p-2">
          <div className="h-1.5 w-20 rounded bg-[var(--text-faint)]" />
        </div>
        <div className="max-w-[60%] rounded-lg bg-[var(--accent)]/20 p-2">
          <div className="h-1.5 w-16 rounded bg-[var(--accent)]/40" />
        </div>
      </div>
      
      {/* Right side red action blocks */}
      <div className="mb-3 flex justify-end gap-2">
        <div className="w-16 rounded bg-[var(--accent)] p-1.5">
          <div className="h-1 w-10 rounded bg-white/60" />
        </div>
        <div className="w-16 rounded bg-[var(--accent)] p-1.5">
          <div className="h-1 w-8 rounded bg-white/60" />
        </div>
      </div>
      
      {/* Muted dummy lines */}
      <div className="mt-auto space-y-1.5">
        <div className="h-1 w-full rounded bg-[var(--border-subtle)]" />
        <div className="h-1 w-4/5 rounded bg-[var(--border-subtle)]" />
        <div className="h-1 w-3/4 rounded bg-[var(--border-subtle)]" />
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/ResearchAssistMockup.tsx
git commit -m "feat: create Research Assist mockup component"
```

---

### Task 5: Create HeroMockups Main Component

**Files:**
- Create: `components/HeroMockups.tsx`

- [ ] **Step 1: Create HeroMockups with tilt/parallax**

```tsx
"use client";

import { type MouseEvent, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import BrowserCard from "./BrowserCard";
import AUBankMockup from "./AUBankMockup";
import XPharmsMockup from "./XPharmsMockup";
import ResearchAssistMockup from "./ResearchAssistMockup";

export default function HeroMockups() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * 12;
    const rotateX = (0.5 - py) * 8;
    setTilt({ x: rotateX, y: rotateY });
  };

  const resetTilt = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  const motionProps = shouldReduceMotion
    ? { initial: false, animate: { opacity: 1 } }
    : undefined;

  const cardData = [
    { label: "AU SMALL FINANCE BANK", url: "au.bank.in" },
    { label: "XPHARMS XCHANGE", url: "xpharmsxchange.com" },
    { label: "AI COPILOT · INTERNAL TOOL", url: "Research Assist — ICRA" },
  ];

  return (
    <div className="relative hidden h-[520px] items-center justify-center overflow-hidden lg:flex">
      {/* Glow behind */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(139,26,26,0.15)_0%,transparent_70%)] pointer-events-none" />
      
      <motion.div
        className="relative h-[400px] w-[420px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={resetTilt}
        onMouseMove={handleMouseMove}
        style={{ perspective: 1000 }}
        animate={
          shouldReduceMotion
            ? { rotateX: 0, rotateY: 0 }
            : { rotateX: tilt.x, rotateY: tilt.y }
        }
        transition={{ type: "spring", stiffness: 120, damping: 18, mass: 0.5 }}
      >
        {/* Left tall card */}
        <motion.div
          className="absolute left-0 top-0 h-[340px] w-[220px]"
          animate={
            shouldReduceMotion
              ? { x: 0, y: 0 }
              : {
                  x: isHovered ? 12 : 0,
                  y: isHovered ? -8 : 0,
                }
          }
          transition={{ type: "spring", stiffness: 170, damping: 20 }}
        >
          <BrowserCard label={cardData[0].label} url={cardData[0].url}>
            <AUBankMockup />
          </BrowserCard>
        </motion.div>
        
        {/* Right stacked cards */}
        <div className="absolute left-[236px] top-0 flex flex-col gap-3">
          <motion.div
            animate={
              shouldReduceMotion
                ? { x: 0, y: 0 }
                : {
                    x: isHovered ? 6 : 0,
                    y: isHovered ? -4 : 0,
                  }
            }
            transition={{ type: "spring", stiffness: 170, damping: 20 }}
          >
            <BrowserCard label={cardData[1].label} url={cardData[1].url} className="h-[160px]">
              <XPharmsMockup />
            </BrowserCard>
          </motion.div>
          
          <motion.div
            animate={
              shouldReduceMotion
                ? { x: 0, y: 0 }
                : {
                    x: isHovered ? 3 : 0,
                    y: isHovered ? -2 : 0,
                  }
            }
            transition={{ type: "spring", stiffness: 170, damping: 20 }}
          >
            <BrowserCard label={cardData[2].label} url={cardData[2].url} className="h-[160px]">
              <ResearchAssistMockup />
            </BrowserCard>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/HeroMockups.tsx
git commit -m "feat: create HeroMockups component with tilt effects"
```

---

### Task 6: Update Hero.tsx to Use HeroMockups

**Files:**
- Modify: `components/Hero.tsx:214-297`

- [ ] **Step 1: Replace right column with HeroMockups**

Replace the entire right column div (lines 214-297) with:

```tsx
{/* RIGHT — browser mockup cards */}
<HeroMockups />
```

- [ ] **Step 2: Add import at top of Hero.tsx**

```tsx
import HeroMockups from "./HeroMockups";
```

- [ ] **Step 3: Remove old mockups data array**

Remove the `mockups` array (lines 19-56) as it's no longer needed.

- [ ] **Step 4: Remove mobile mockups section**

Remove the mobile mockups section (lines 299-319) since HeroMockups handles hiding on mobile.

- [ ] **Step 5: Commit**

```bash
git add components/Hero.tsx
git commit -m "refactor: use HeroMockups component in Hero"
```

---

### Task 7: Verify and Test

**Files:**
- Test: Run lint and build

- [ ] **Step 1: Run lint**

```bash
npm run lint
```
Expected: No errors

- [ ] **Step 2: Run build**

```bash
npm run build
```
Expected: No errors

- [ ] **Step 3: Commit final**

```bash
git add -A
git commit -m "feat: complete hero mockups implementation"
```

---

## Spec Coverage Check

- ✅ BrowserCard component with browser bar, traffic lights, URL pill, label
- ✅ AU Bank card with nav pills, search bar, 2x2 product grid, red accents
- ✅ XPharms card with hero area, stats boxes, dummy lines
- ✅ Research Assist card with chat UI, red action blocks, dummy lines
- ✅ Mouse tilt on container
- ✅ Parallax movement on cards
- ✅ Hover lift effect
- ✅ Red glow behind group
- ✅ Reduced motion support
- ✅ Dark/light theme support via CSS variables
- ✅ Mobile hidden (lg breakpoint)
- ✅ TypeScript, no new deps, lint passes