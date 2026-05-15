# Enhanced Sticky Navbar Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add glassmorphism effect with scroll detection and radial accent glow to the existing navbar.

**Architecture:** Single component modification in Navbar.tsx with scroll state management. No new files needed - just enhance existing component.

**Tech Stack:** React (useState, useEffect), CSS/Tailwind, existing theme CSS variables

---

### Task 1: Add Scroll State Detection

**Files:**
- Modify: `components/Navbar.tsx:15-34` (useState + useEffect section)

- [ ] **Step 1: Add isScrolled state variable**

Add `const [isScrolled, setIsScrolled] = useState(false);` after existing state declarations (around line 18).

- [ ] **Step 2: Add scroll event listener**

In the existing useEffect (lines 20-34), add scroll detection logic:

```javascript
// Add after setIsMounted(true);
const handleScroll = () => {
  setIsScrolled(window.scrollY > 50);
};

window.addEventListener("scroll", handleScroll);
handleScroll(); // Check initial position

// Add cleanup to the return function:
return () => window.removeEventListener("scroll", handleScroll);
```

- [ ] **Step 3: Commit**

```bash
git add components/Navbar.tsx
git commit -m "feat: add scroll state detection to navbar"
```

---

### Task 2: Apply Glassmorphism Classes

**Files:**
- Modify: `components/Navbar.tsx:45-52` (header element classes)

- [ ] **Step 1: Update header classes for default glass effect**

Replace the existing header element (lines 45-52) with enhanced glass effect classes:

```jsx
<header
  className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-all duration-300 ${
    isScrolled 
      ? "shadow-[0_0_30px_rgba(139,26,26,0.25)]" 
      : ""
  }`}
  style={{
    borderColor: "var(--border-subtle)",
    backgroundColor: isScrolled
      ? "color-mix(in oklab, var(--bg-page) 85%, transparent)"
      : "color-mix(in oklab, var(--bg-page) 70%, transparent)",
  }}
>
```

- [ ] **Step 2: Commit**

```bash
git add components/Navbar.tsx
git commit -m "feat: apply glassmorphism and glow effects to navbar"
```

---

### Task 3: Verify and Test

**Files:**
- Test: Run dev server and visually verify

- [ ] **Step 1: Run lint check**

```bash
npm run lint
```
Expected: No errors

- [ ] **Step 2: Start dev server and verify**

```bash
npm run dev
```

- [ ] **Step 3: Test scroll behavior**

1. Load page - navbar should have frosted glass effect immediately
2. Scroll down past 50px - navbar should get subtle red glow shadow
3. Scroll up - glow should disappear smoothly

- [ ] **Step 4: Commit final changes**

```bash
git add components/Navbar.tsx
git commit -m "feat: complete navbar glassmorphism enhancement"
```

---

## Spec Coverage Check

- ✅ Default state: Full glass effect (backdrop-blur-xl + 70% opacity bg)
- ✅ Scrolled state: Enhanced glow with 85% opacity bg
- ✅ Glow: box-shadow with accent color at 25% opacity
- ✅ Transitions: 300ms duration on all changes
- ✅ Scroll threshold: 50px