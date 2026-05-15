# Portfolio v3 Audit Implementation Plan

> **For agentic workers:** Execute tasks in order. Test after each task. Commit after each task. Do not combine tasks.

**Goal:** Fix all critical and high-impact issues from the v3 audit across both pages, prioritized by regression severity first.

**Architecture:** Two-page Next.js portfolio (`/` + `/design`) with shared components. Fixes are grouped into three phases by severity and dependency.

**Tech Stack:** Next.js 14, React, Tailwind v4, TypeScript, Framer Motion, simpleicons CDN, Lucide icons

---

## Phase 1: Blockers & Correctness (Critical Issues)

### Task 1: Fix broken animated headings in DisplayHeading.tsx

**Files:**
- Modify: `components/DisplayHeading.tsx:1-26`

**Current bug:** `"AA... (display heading)bout Me"` — screen reader announces garbled text.

- [ ] **Step 1: Read the current implementation**

```tsx
// Current implementation at components/DisplayHeading.tsx
// Shows: <span aria-hidden="true">{String(children).charAt(0)}</span>
// <span className="sr-only">{String(children)[0]}... (display heading)</span>
```

- [ ] **Step 2: Fix the accessibility issue**

Replace with word-level split or proper aria-label approach:

```tsx
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function DisplayHeading({ children, className }: Props) {
  const text = String(children);
  
  return (
    <h2 className={cn("leading-none", className)} aria-label={text}>
      <span
        style={{ fontFamily: "var(--font-script)" }}
        className="inline text-[1.15em] text-[var(--color-accent)]"
        aria-hidden="true"
      >
        {text.split(' ').map((word, wi) => (
          <span key={wi} className="inline-block mr-[0.25em]">
            {word.split('').map((char, ci) => (
              <span key={ci} className="inline-block">{char}</span>
            ))}
          </span>
        ))}
      </span>
    </h2>
  );
}
```

Or simpler — just use aria-label without splitting:

```tsx
export default function DisplayHeading({ children, className }: Props) {
  return (
    <h2 
      className={cn("leading-none", className)}
      aria-label={String(children)}
    >
      <span
        style={{ fontFamily: "var(--font-script)" }}
        className="inline text-[1.15em] text-[var(--color-accent)]"
        aria-hidden="true"
      >
        {children}
      </span>
    </h2>
  );
}
```

- [ ] **Step 3: Test in browser**
- [ ] **Step 4: Commit**

```bash
git add components/DisplayHeading.tsx
git commit -m "fix: remove garbled text from animated headings (C-01)"
```

---

### Task 2: Fix CV download link path

**Files:**
- Modify: `components/Navbar.tsx:109,175`

- [ ] **Step 1: Check what files exist in /public**

Run: `ls -la public/*.pdf`

- [ ] **Step 2: Verify the working link path**

The audit says Nav links to `/public/subrat-cv.pdf` (404), Hero links to `/subrat-jena-cv.pdf`. Next.js serves `/public/` at root, so the correct link should be `/subrat-jena-cv.pdf`.

- [ ] **Step 3: Update Navbar.tsx links**

Change both instances in Navbar.tsx:
- Line 109: `href="/subrat-cv.pdf"` → `href="/subrat-jena-cv.pdf"`
- Line 175 (mobile): `href="/subrat-cv.pdf"` → `href="/subrat-jena-cv.pdf"`

- [ ] **Step 4: Check Hero.tsx for any other CV link**

Run: `grep -n "cv" components/Hero.tsx`

- [ ] **Step 5: Update if needed**

- [ ] **Step 6: Commit**

```bash
git add components/Navbar.tsx components/Hero.tsx
git commit -m "fix: normalize CV link to /subrat-jena-cv.pdf (C-02)"
```

---

### Task 3: Remove direction: rtl hack from project cards

**Files:**
- Modify: `components/Projects.tsx`

- [ ] **Step 1: Search for the rtl pattern**

Run: `grep -n "direction.*rtl\|\.project-card--reverse" components/Projects.tsx`

- [ ] **Step 2: Replace with CSS order or flex-direction**

Instead of `direction: rtl`, use:
```css
/* In the grid container, use order property */
.grid > :nth-child(even) {
  order: 1; /* or use flex-direction: row-reverse on the container */
}
```

Or simpler — just swap the visual order in the JSX. Remove any `.project-card--reverse` CSS class and let the grid naturally flow.

- [ ] **Step 3: Commit**

```bash
git add components/Projects.tsx
git commit -m "fix: remove direction: rtl hack (C-06)"
```

---

### Task 4: Fix Safari/iOS animation-timeline fallback

**Files:**
- Modify: `app/globals.css:162-176`
- Modify: `components/RevealOnScroll.tsx` (check if it has IntersectionObserver)

- [ ] **Step 1: Check current RevealOnScroll implementation**

Run: `cat components/RevealOnScroll.tsx`

- [ ] **Step 2: Ensure IntersectionObserver fallback exists**

The audit says `@supports` guard blocks the fallback. Remove the feature detection or ensure RevealOnScroll uses pure IntersectionObserver without animation-timeline.

- [ ] **Step 3: Update globals.css**

```css
/* Remove animation-timeline or guard it properly */
@media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth;
  }
}

/* Remove or fix animation-timeline if used */
@supports (animation-timeline: view()) {
  /* keep if it works */
}

/* Ensure fallback works on Safari/iOS */
.fade-in {
  opacity: 0;
  transition: opacity 0.6s ease-out;
}

.fade-in.visible {
  opacity: 1;
}
```

- [ ] **Step 4: Test on mobile viewport**

- [ ] **Step 5: Commit**

```bash
git add app/globals.css components/RevealOnScroll.tsx
git commit -m "fix: add IntersectionObserver fallback for iOS (T-03)"
```

---

### Task 5: Add scroll-padding-top for anchor links

**Files:**
- Modify: `app/globals.css:255-257`

- [ ] **Step 1: Check existing scroll-margin-top**

Currently: `section[id] { scroll-margin-top: 6.5rem; }`

- [ ] **Step 2: Add to html element**

```css
html {
  scroll-padding-top: 72px;
}
```

- [ ] **Step 3: Commit**

```bash
git add app/globals.css
git commit -m "fix: add scroll-padding-top for anchor links (T-02, N-04)"
```

---

## Phase 2: Content & Hierarchy Cleanup (High Impact)

### Task 6: Remove duplicated project bullet list in About

**Files:**
- Modify: `components/About.tsx:39-59`

- [ ] **Step 1: Identify the duplicate content**

Lines 39-59 show bullet list of projects. This duplicates Projects section.

- [ ] **Step 2: Remove the bullet list, keep personality content**

Replace with 2-3 sentences about what drives you, why frontend specifically.

- [ ] **Step 3: Commit**

```bash
git add components/About.tsx
git commit -m "fix: remove duplicate project list from About (C-03)"
```

---

### Task 7: Replace "Currently building" strip in About

**Files:**
- Modify: `components/About.tsx:170-195`

- [ ] **Step 1: Remove the strip**

The "Currently building: KreditBook" strip duplicates the featured projects.

- [ ] **Step 2: Replace with something that shows current signal**

Options: GitHub contribution count, "Currently shipping KreditBook in React Native" single line, or remove entirely.

- [ ] **Step 3: Commit**

```bash
git add components/About.tsx
git commit -m "fix: remove repetitive currently-building strip (C-04)"
```

---

### Task 8: Remove CreditBook from Experience strip

**Files:**
- Modify: `components/ExperienceStrip.tsx:22-30`

- [ ] **Step 1: Identify CreditBook entry**

Lines 22-30 show KredBook as an employer.

- [ ] **Step 2: Remove the CreditBook block**

Keep only DEPT® and Rejolut entries.

- [ ] **Step 3: Commit**

```bash
git add components/ExperienceStrip.tsx
git commit -m "fix: remove CreditBook from experience strip (C-05)"
```

---

### Task 9: Fix Skills icon issues

**Files:**
- Modify: `components/Skills.tsx:17-77`

- [ ] **Step 1: Fix Zustand icon**

Line 49: `icon: "https://cdn.simpleicons.org/npm/CB3837"` — npm logo instead of Zustand.

Fix: `icon: "https://cdn.simpleicons.org/zustand/3F3F3F"` (or check for correct simpleicons URL)

- [ ] **Step 2: Fix Next.js/Vercel icons for dark mode**

Lines 24, 62: Use black icons that are invisible in dark mode.

Fix: Use white icons for dark mode, add `invert: true` for light mode.

```tsx
{
  name: "Next.js",
  icon: "https://cdn.simpleicons.org/nextdotjs/ffffff",
  invert: true, // inverts to black in light mode
},
{
  name: "Vercel", 
  icon: "https://cdn.simpleicons.org/vercel/ffffff",
  invert: true,
},
```

- [ ] **Step 3: Fix Supabase icon colour**

Line 65: Uses Firebase yellow `FFCA28` instead of Supabase green `3ECF8E`.

Fix: `icon: "https://cdn.simpleicons.org/supabase/3ECF8E"`

- [ ] **Step 4: Move Canva out of Enterprise**

Line 73: Canva is in Enterprise category — move to Design page only.

- [ ] **Step 5: Commit**

```bash
git add components/Skills.tsx
git commit -m "fix: correct skill icon colours - Zustand, Next.js, Vercel, Supabase (H-01, H-02)"
```

---

### Task 10: Replace tutorial-level code snippet in About

**Files:**
- Modify: `components/About.tsx:130-168`

- [ ] **Step 1: Replace the simple Hero.tsx snippet**

Current shows tutorial-level code. Replace with something more impressive:
- Intersection observer hook from RevealOnScroll
- Custom useFetch hook
- Redux slice example
- Typed API response handler

- [ ] **Step 2: Commit**

```bash
git add components/About.tsx
git commit -m "fix: replace tutorial code with production snippet (H-03)"
```

---

### Task 11: Improve project descriptions (SNOX, KreditBook)

**Files:**
- Modify: `components/Projects.tsx:72-97`

- [ ] **Step 1: Fix SNOX result**

Current: "Result: a production-ready storefront with secure order handling"

Add metric: "Result: production-ready storefront handling 500+ orders/mo"

- [ ] **Step 2: Fix KreditBook result**

Current: "Result: an in-progress fintech product with clear role separation"

Add what's done: "Super Admin dashboard live, WhatsApp ledger sync implemented, RBAC across 3 user tiers"

- [ ] **Step 3: Commit**

```bash
git add components/Projects.tsx
git commit -m "fix: add concrete metrics to SNOX and KreditBook (H-04)"
```

---

### Task 12: Remove "2026" from hero tag cloud

**Files:**
- Modify: `components/Hero.tsx:117-150`

- [ ] **Step 1: Remove "2026" from tech tags**

The tag cloud shows: React, Next.js, TypeScript, React Native, AEM, WCAG, 2026

- [ ] **Step 2: Remove the year**

- [ ] **Step 3: Commit**

```bash
git add components/Hero.tsx
git commit -m "fix: remove graduation-year from hero tags (H-05)"
```

---

### Task 13: Add work previews to DesignTeaser

**Files:**
- Modify: `components/DesignTeaser.tsx:62-83`

- [ ] **Step 1: Add 2-3 thumbnail previews**

Current is one sentence + button. Add inline thumbnails of actual design work.

- [ ] **Step 2: Commit**

```bash
git add components/DesignTeaser.tsx
git commit -m "fix: add design work previews to DesignTeaser (H-07)"
```

---

### Task 14: Replace resume card with contact form in Contact

**Files:**
- Modify: `components/Contact.tsx:70-108`

- [ ] **Step 1: Replace right column**

Current: resume summary in a box. Replace with simple form or mailto link.

- [ ] **Step 2: Commit**

```bash
git add components/Contact.tsx
git commit -m "fix: replace resume card with contact form (H-08)"
```

---

### Task 15: Simplify footer

**Files:**
- Modify: `components/Footer.tsx:88-96`

- [ ] **Step 1: Remove redundant navigation**

Keep only copyright + one line of identity + social links.

- [ ] **Step 2: Remove duplicate copyright line**

Currently shows "Made with ❤️ by Subrat Jena" separately from copyright.

- [ ] **Step 3: Commit**

```bash
git add components/Footer.tsx
git commit -m "fix: simplify redundant footer (N-02)"
```

---

## Phase 3: Design Page Fixes

### Task 16: Fix Twitter card metadata for /design

**Files:**
- Modify: `app/design/layout.tsx:1-31`

- [ ] **Step 1: Add twitter metadata**

```tsx
export const metadata: Metadata = {
  // ... existing og tags
  twitter: {
    card: 'summary_large_image',
    title: 'Visual Design Work — Subrat Jena',
    description: 'Logos, banners, invitations, and social graphics for real clients.',
    images: ['https://mysjportfolio.vercel.app/og-design.png'],
  },
};
```

- [ ] **Step 2: Add og:image alt text**

```tsx
openGraph: {
  images: [
    {
      url: "/og-design.png",
      width: 1200,
      height: 630,
      alt: "Visual Design Work — Subrat Jena",
    },
  ],
},
```

- [ ] **Step 3: Commit**

```bash
git add app/design/layout.tsx
git commit -m "fix: add twitter card meta and og image alt for design page (DC-01, DN-03)"
```

---

### Task 17: Fix duplicate H1/H2 in design page

**Files:**
- Modify: `app/design/page.tsx:16-24`

- [ ] **Step 1: Identify duplicate headings**

H1: "Design as a second language."
H2: Same text with animation prefix

- [ ] **Step 2: Remove one**

Keep the animated DisplayHeading as the only visible heading, remove the sr-only H1.

- [ ] **Step 3: Commit**

```bash
git add app/design/page.tsx
git commit -m "fix: remove duplicate heading in design page (DC-02)"
```

---

### Task 18: Add CV download link to design page

**Files:**
- Modify: `components/Navbar.tsx` (shared component)

- [ ] **Step 1: Verify Navbar has CV link**

The Navbar is shared — if fixed in Task 2, it applies to both pages.

- [ ] **Step 2: Commit**

Already covered by Task 2 if Navbar is shared.

---

### Task 19: Fix gallery filter (add work or remove)

**Files:**
- Modify: `components/DesignGallery.tsx:15-21`
- Modify: `lib/design-work.ts:15-125`

- [ ] **Step 1: Decision needed**

Option A: Add 6+ more design pieces to justify filter
Option B: Remove filter tabs, show all in clean grid

- [ ] **Step 2: Implement choice**

Recommend Option B — simpler, remove empty "Social" category filter.

- [ ] **Step 3: Commit**

```bash
git add components/DesignGallery.tsx
git commit -m "fix: remove gallery filter tabs with insufficient work (DC-04)"
```

---

### Task 20: Remove layout description text from DesignGallery

**Files:**
- Modify: `components/DesignGallery.tsx:294-301, 328-335`

- [ ] **Step 1: Remove visible subtitle text**

Lines 298-300: "Larger featured cards with an asymmetric desktop layout."
Lines 332-334: "Remaining work shown in a compact responsive grid."

- [ ] **Step 2: Keep just the section labels**

- [ ] **Step 3: Commit**

```bash
git add components/DesignGallery.tsx
git commit -m "fix: remove layout descriptions leaking into design gallery (DH-01, DH-02)"
```

---

### Task 21: Add context to Birthday invite and Campus banner

**Files:**
- Modify: `lib/design-work.ts:92-124`

- [ ] **Step 1: Add client name/year to Birthday invite**

Currently has no client/year. Add:
- clientOrEvent: should have something
- year: "2024"

- [ ] **Step 2: Add client/context to Campus banner**

- [ ] **Step 3: Commit**

```bash
git add lib/design-work.ts
git commit -m "fix: add missing context to design items (DH-03, DH-04)"
```

---

### Task 22: Strengthen design CTA copy

**Files:**
- Modify: `app/design/page.tsx:60-82`

- [ ] **Step 1: Improve CTA copy**

Current: "I can handle brand touchpoints alongside code work, from launch graphics to simple identity systems."

Better: "I design and build — logos, launch graphics, and full component-level UI. One person, zero handoff."

- [ ] **Step 2: Commit**

```bash
git add app/design/page.tsx
git commit -m "fix: strengthen design page CTA copy (DH-05)"
```

---

### Task 23: Replace "5+ designs" stat

**Files:**
- Modify: `app/design/page.tsx:37-54`

- [ ] **Step 1: Replace stat**

Current: "5+ designs" — harmful when small.

Replace with: "Real client work" or "Mumbai · Available for commissions"

- [ ] **Step 2: Commit**

```bash
git add app/design/page.tsx
git commit -m "fix: replace small portfolio stat with credibility signal (DH-06)"
```

---

### Task 24: Add visual to design page hero

**Files:**
- Modify: `app/design/page.tsx:16-54`

- [ ] **Step 1: Add thumbnail previews in hero**

Current is text-only hero. Add 2-3 thumbnail previews of design work above the fold.

- [ ] **Step 2: Commit**

```bash
git add app/design/page.tsx
git commit -m "fix: add visual previews to design page hero (DN-02)"
```

---

### Task 25: Final lint & build check

**Files:**
- Run: `npm run lint && npm run build`

- [ ] **Step 1: Run lint**

Run: `npm run lint`

- [ ] **Step 2: Run build**

Run: `npm run build`

- [ ] **Step 3: Fix any issues**

- [ ] **Step 4: Commit**

```bash
git commit -m "chore: run lint and build, fix any issues"
```

---

## Summary

| Phase | Tasks | Focus |
|-------|-------|-------|
| 1 | 5 | Blockers — broken headings, CV link, rtl hack, iOS animation, anchor scroll |
| 2 | 10 | Content cleanup — duplicate content, skill icons, code snippet, project metrics, CTA, form |
| 3 | 9 | Design page — metadata, headings, gallery, gallery content, CTA, stats, hero visual |
| Final | 1 | Lint & build verification |

Execute each task in order. Test in browser after each critical fix. Commit after each task.