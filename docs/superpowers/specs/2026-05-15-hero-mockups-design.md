# Hero Browser Mockups Design

**Date:** 2026-05-15
**Status:** Approved

## Overview

Replace the current tilted floating hero cards with realistic browser-window mockups showing dummy website UIs for three projects (AU Small Finance Bank, XPharms Xchange, Research Assist/ICRA).

## Architecture

### Components
1. **BrowserCard.tsx** - Reusable browser window wrapper component
2. **HeroMockups.tsx** - Main mockup group with layout logic
3. **Hero.tsx** - Updated to import HeroMockups

### Props

**BrowserCard:**
- `children`: ReactNode - card content
- `label`: string - project name
- `url`: string - display URL
- `className?: string`

## BrowserCard Specifications

### Structure
```
┌─────────────────────────────────────────┐
│ ● ● ●  🔒  url.com            [label]  │  <- browser bar (32px)
├─────────────────────────────────────────┤
│                                         │
│              content                    │  <- flex-1
│                                         │
└─────────────────────────────────────────┘
```

### Browser Bar
- Height: 32px
- Traffic lights: 3 dots (red #ff5f56, yellow #ffbd2e, green #27c93f) - 10px each, 6px gap
- URL pill: rounded-full, bg offset, lock icon + truncated URL
- Label: right-aligned, uppercase, small text

### Styling
- Border radius: 12px (rounded-xl)
- Border: 1px solid var(--border-subtle)
- Shadow: var(--shadow-md), stronger on hover
- Background: var(--bg-elevated)
- Transition: all 200ms ease

### Interactions
- Hover: translateY(-2px), shadow-lg
- Respects prefers-reduced-motion

## Layout

```
┌─────────────────────────────────────────────┐
│  Left (tall)          │  Right (stacked)   │
│  ┌─────────────────┐  │  ┌───────────────┐  │
│  │ AU SMALL        │  │  │ XPHARMS       │  │
│  │ FINANCE BANK    │  │  │ XCHANGE       │  │
│  │                 │  │  └───────────────┘  │
│  │ [Search bar]    │  │  ┌───────────────┐  │
│  │                 │  │  │ Research      │  │
│  │ ┌──┐ ┌──┐      │  │  │ Assist        │  │
│  │ │  │ │  │      │  │  │ ICRA Copilot  │  │
│  │ └──┘ └──┘      │  │  └───────────────┘  │
│  │ ┌──┐ ┌──┐      │  │                    │
│  │ │  │ │  │      │  │                    │
│  │ └──┘ └──┘      │  │                    │
│  └─────────────────┘  │                    │
└─────────────────────────────────────────────┘
```

- Container max-width: 420px
- Left card: 220px wide, ~320px tall
- Right cards: 180px wide each, ~150px tall, 12px gap
- Gap between left/right: 12px
- Centered in hero right column (lg+)

## Card Contents

### AU Small Finance Bank
- Label: "AU SMALL FINANCE BANK"
- URL: "au.bank.in"
- Nav pills: Home · Personal · Business · About (horizontal pills)
- Search bar: rounded, with search icon (left) + mic icon (right), placeholder "Search..."
- 2x2 grid of product cards with red accent blocks
- Products: "Savings Account", "Fixed Deposit", "Personal Loan", "Credit Card"

### XPharms Xchange
- Label: "XPHARMS XCHANGE"
- URL: "xpharmsxchange.com"
- Fake hero: gradient background area
- Stats boxes (3): "92+", "<2s", "SSR" - small rounded boxes
- Muted lines: 3-4 dummy content lines for depth

### Research Assist / ICRA
- Label: "AI COPILOT · INTERNAL TOOL"
- URL: "Research Assist — ICRA"
- Chat UI: left side messages (muted)
- Right side: 2 red action blocks
- Bottom: muted dummy content lines

## Interactions

### Mouse Tilt
- On mouse move over container:
  - rotateX: based on Y position (max ±6deg)
  - rotateY: based on X position (max ±8deg)
- Transition: spring (stiffness 120, damping 18)

### Parallax
- On hover: cards move at different rates
- Card 0 (left): x: 0→10, y: 0→-12
- Card 1 (right-top): x: 0→6, y: 0→-8
- Card 2 (right-bottom): x: 0→4, y: 0→-4

### Hover Lift
- Each card: translateY(-2px), shadow-lg on hover
- Duration: 200ms ease

### Glow
- Behind entire group: soft red radial glow
- box-shadow: 0 0 60px rgba(139, 26, 26, 0.15)
- Only visible on lg+ screens

### Reduced Motion
- Respects prefers-reduced-motion
- Disables tilt, parallax, animations

## Theme Support

### Dark Mode (default)
- Card bg: var(--bg-elevated) (#111111)
- Border: var(--border-subtle) (rgba(255,255,255,0.1))
- Browser bar: var(--bg-offset) (#1f1e1c)
- Text: var(--text-primary), var(--text-muted)

### Light Mode
- Card bg: #ffffff
- Border: rgba(0,0,0,0.1)
- Browser bar: #f5f5f5
- Text: #1a1a1a, #666666

## Mobile

- Hide on screens < lg breakpoint
- Existing mobile view in Hero.tsx stays as-is

## Code Requirements

- TypeScript
- No new dependencies
- No hydration mismatch (use useState/useEffect properly)
- Pass lint and build
- Reusable components