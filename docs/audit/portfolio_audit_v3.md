# Portfolio Audit v3 — mysjportfolio.vercel.app
**Both pages audited live:** `/` + `/design`  
**Lens 1:** UI/UX Designer — visual hierarchy, spacing, readability, flow, delight  
**Lens 2:** Technical — code quality, accessibility, performance, SEO, correctness  
**Date:** May 2026

---

## OVERALL VERDICT

**Main page (`/`):** C+
The structure is now correct — right projects, right identity, right order of priority. But the page has serious rendering defects (broken animated headings visible as garbled text), content redundancy that makes it feel padded, and unresolved technical issues from the last two audits that are still live.

**Design page (`/design`):** C
Title and OG tags are finally fixed. The content is real. But only 6 pieces of work, the Twitter card still points at the wrong image, the featured section has a duplicate H2, the nav has no CV download link, and the category filter is decorative — it doesn't actually filter anything when you only have 6 items across 5 categories.

---

## PART 1 — MAIN PAGE `/`

---

## 🔴 CRITICAL

---

### C-01 · Animated headings are rendering broken text — visible in DOM and screen readers
**Section:** About, Projects, Skills, Contact  
**What's happening:**  
The section headings are split-letter animated but the implementation is breaking the actual heading text into garbled prefixes:
- `"AA... (display heading)bout Me"` 
- `"SS... (display heading)elected Work"`
- `"WW... (display heading)hat I build with."`
- `"CC... (display heading)ontact"`

This is almost certainly a GSAP `SplitText` or custom character-split implementation where each letter is wrapped in a `<span>`, but the text content is also being concatenated into a visible prefix before the animation fires. This means:
1. **Screen readers announce** "AA dot dot dot bout Me" — completely inaccessible
2. **Google crawls** "AA... (display heading)bout Me" — your section headings are gibberish to search bots
3. **Users with slow connections or JS disabled** see broken text permanently

**Fix:**
```tsx
// Wrap the visible heading in aria-hidden spans for animation
// Put the real text in aria-label on the parent
<h2 aria-label="About Me">
  {'About Me'.split('').map((char, i) => (
    <span aria-hidden="true" key={i} className="split-char">{char}</span>
  ))}
</h2>
```
Or simpler: don't split individual characters. Split by word instead. Word-level animations look just as good and don't cause this problem.

---

### C-02 · CV download link is broken — 404s
**Nav:** `↓ CV` links to `https://mysjportfolio.vercel.app/public/subrat-cv.pdf`  
**Hero:** `↓ Download CV` links to `https://mysjportfolio.vercel.app/subrat-jena-cv.pdf`

Two different links, two different filenames. The nav link uses the wrong `/public/` prefix (Next.js serves `/public` at root, so the URL should be `/subrat-cv.pdf` not `/public/subrat-cv.pdf`). The hero link uses a different filename (`subrat-jena-cv.pdf`). One or both of these 404. This was flagged in the previous audit (N-07) and is still live.

**Fix:**
1. Put one file in `/public/subrat-jena-cv.pdf`
2. Update every link to `/subrat-jena-cv.pdf`
3. Delete the other reference

---

### C-03 · About section — bullet list of projects is still there, duplicating Projects section
**Section:** About  
The About section still contains:
```
- XPharms Xchange - Next.js trading platform
- Research Assist - AI Copilot
- AU Small Finance Bank - AEM + WCAG
- IndiaFirst KYC flows - validation and payments
- Rejo AI - enterprise SaaS delivery
- CreditBook - React Native app
```
This is a verbatim repeat of every project card below it. A visitor who reads About and then scrolls to Projects sees the same list twice. It makes the page feel like it has no original content — just repeated data in different formats.  
**Fix:** Delete the bullet list. Replace with 2–3 sentences of actual personality. What drives you. What you care about. Why frontend specifically.

---

### C-04 · "Currently building" strip duplicates the featured projects — same three items
**Section:** Below the About section  
```
au.bank.in — AEM · React · WCAG
XPharms Xchange — Next.js · SEO · JWT
ICRA Copilot — React · Redux · APIs
```
These are the exact same three featured projects shown as full cards below. The visitor sees AU Bank three times: once in the hero mockup card, once in this strip, and once as a full project card. This isn't emphasis — it's repetition that signals a lack of content depth.  
**Fix:** Replace the strip with something that shows *current* real signal — a GitHub contribution count, a "last commit" date, or just a single line: "Currently shipping KreditBook in React Native." Something that a strip makes sense for — velocity, not another project listing.

---

### C-05 · Experience strip shows "CreditBook" as an employer
**Section:** Experience strip below hero  
The experience strip has three blocks: DEPT®, Rejolut, and **CreditBook**. CreditBook is a personal side project you're building solo. It is not an employer. Placing it in an "Experience" strip alongside DEPT® and Rejolut misrepresents your employment history. A recruiter who sees "DEPT® · Rejolut · CreditBook" and clicks will find a personal in-progress app. That's not experience — it's a side project.  
**Fix:** Remove CreditBook from the experience strip. Keep it in the Projects section where it belongs with the "In Progress" badge. The experience strip should only show employers.

---

### C-06 · `direction: rtl` hack still in use for alternating project cards
This was flagged as C-01 in the previous audit. Still not fixed. The `direction: rtl` on `.project-card--reverse` reverses text directionality at the CSS level, breaking screen readers and right-to-left language rendering. Replace with CSS `order` or `flex-direction: row-reverse`.

---

## 🟠 HIGH IMPACT

---

### H-01 · Skills section — Zustand shows npm logo, Vercel/Next.js broken in light mode
**Section:** Skills  
From the live fetch, Zustand is still rendering with `https://cdn.simpleicons.org/npm/CB3837` — the red npm logo — as its fallback. This was flagged in the previous audit (H-01). Still live.

Also confirmed: `https://cdn.simpleicons.org/nextdotjs/000000` and `https://cdn.simpleicons.org/vercel/000000` use black icons. In dark mode these are invisible (black on dark surface). In light mode they'd work fine. The icon colour should be white for dark mode: `nextdotjs/ffffff`, `vercel/ffffff` — with a CSS invert for light mode.

Also: Supabase icon is currently set to `FFCA28` (yellow) — that's the Firebase colour. Supabase's brand colour is `#3ECF8E`. Wrong icon colour.

---

### H-02 · Canva is in the "Enterprise" skill category
**Section:** Skills → Enterprise category  
The Enterprise category has: AEM · WCAG 2.1 · Canva · Figma  
Canva is a consumer design tool. It's on your design page — it does not belong in an "Enterprise" skills category alongside AEM (an Adobe enterprise CMS) and WCAG 2.1 (an accessibility standard). A senior engineer or technical hiring manager who sees "Enterprise: AEM, WCAG, Canva" will question your judgment.  
**Fix:** Move Canva to `/design` page only. Figma can stay if you use it for handoff/specs — rename the category "Design Tooling" or "Tools."

---

### H-03 · About section has a code block showing Hero.tsx — no context for why it's there
**Section:** About  
The right column of the About section shows a code snippet of `Hero.tsx`. The intent is to signal "I'm a developer" in a visual way. Good instinct. But the snippet shows:
```tsx
export default function Hero() {
  return (
    <section>
      <h1>Subrat Jena</h1>
      <p>Frontend Developer</p>
```
This is the simplest possible React component — `<section>`, `<h1>`, `<p>`, a `<Stack>` and two `<Tag>`s. It doesn't demonstrate any actual skill. No hooks, no API calls, no TypeScript generics, no state, no performance pattern. A senior dev will see this and think "tutorial-level code."  
**Fix:** Replace with a snippet that actually shows craft. Options:
- The intersection observer hook used for scroll animations
- A custom `useFetch` with error handling and loading states
- A Redux slice from the ICRA Copilot work
- A typed API response handler with generics

Show something real. Even 15 lines of actual production-adjacent code is more impressive than a component that a beginner writes in their first week.

---

### H-04 · Project descriptions use the "Problem / Approach / Result" format inconsistently
**Section:** Projects  
AU Bank, XPharms, Research Assist, IndiaFirst all use the PAR format cleanly. But:
- **SNOX**: "Problem: the store needed live inventory and a cleaner purchase flow. Approach: built a full-stack... Result: a production-ready storefront with secure order handling." — the "Result" is vague. "Production-ready storefront with secure order handling" is not a result, it's a description. Add a metric: load time, order volume, anything.
- **KreditBook**: "Problem: ledger management had to stay fast and accessible on mobile. Approach... Result: an in-progress fintech product with clear role separation." — "in-progress fintech product" is not a result. Results are outcomes. For an in-progress project, say what's done: "Super Admin dashboard live, WhatsApp ledger sync implemented, RBAC across 3 user tiers."

---

### H-05 · Hero tag cloud has "2026" and "Mumbai, India" as text in the corner — redundant with the availability pill
**Section:** Hero  
The hero has an availability pill that says "Open to opportunities · Mumbai, India" and separately in the corner "Frontend Developer · React · Next.js · React Native · 2026". The 2026 year in the hero corner appears to be a holdover from the Canva-style inspiration (Shawn Garcia had "Art Director · 2027" in that corner). For a developer portfolio it reads as a "graduation year" or "portfolio year" — neither of which is flattering. Remove the year. The corner can just show your role or nothing.

---

### H-06 · No scroll-based animation fallback — iOS users see broken or invisible sections
Confirmed still present from the previous audit (C-03). The `animation-timeline: view()` approach fails on Safari/iOS. The `.fade-in` elements will be `opacity: 0` permanently on iPhone. Since recruiter shares often happen over WhatsApp (mobile), a significant portion of your visitors are on iOS and seeing nothing.

---

### H-07 · Design crosslink section is too weak — single line of text + one button
**Section:** The "Also — I also design" interstitial  
The section between Skills and Contact shows:
> "I also design. Logos, banners, invitations, social graphics — built for real clients using Canva."

This is one sentence. The section shows a marquee ticker of design terms but no preview of actual work. A visitor who might want to hire you for both dev and design gets zero visual evidence before they're asked to click. Show 2–3 thumbnail previews of the actual design work inline — the logo, the festival banner, the LGI identity. Let the work sell itself.

---

### H-08 · Contact section "Available for hire" card repeats info from the main contact copy
**Section:** Contact  
Left column copy: "Open to frontend roles at BFSI companies and product startups. Let's build something meaningful."  
Right card: "Frontend Developer · React · Next.js · TypeScript · React Native · Experience: 2+ years · Domain: BFSI · Fintech · B2B SaaS · Previous: DEPT® · Rejolut · Location: Mumbai, India"

This card is your resume summary in a box. It doesn't add information that isn't already on the page. It takes up half the contact section's width.  
**Fix:** Replace the right column with a simple form — Name, Email, Message, Send. This converts passive visitors into active leads. Even without a backend, a `mailto:` form or Formspree integration takes 30 minutes and dramatically increases the chance someone actually contacts you.

---

## 🟡 NICE TO HAVE

---

### N-01 · Nav has "Light" text visible as a broken theme toggle label
**Nav:** The extracted HTML shows "Light" as a visible text node in the nav. This suggests the theme toggle button's icon is either not rendering or loading after the text label flashes. The user sees the word "Light" briefly before the icon loads. Fix by ensuring the icon renders server-side or the button starts with the icon HTML not a text label.

---

### N-02 · Footer duplicates navigation and connect links that are already in the main nav
**Footer:** The footer has a full navigation column (About, Projects, Skills, Design Work, Contact) and a Connect column (LinkedIn, GitHub, Email). On a single-page site with a fixed nav, repeating all nav links in the footer is redundant. A simple footer with copyright, one line of identity, and the three social links is cleaner and more confident.

---

### N-03 · Hero mockup cards have no visible project labels on mobile (they're hidden)
Since `hero__right { display: none }` on mobile (confirmed — was flagged, not yet fixed), visitors on mobile see no dev work visuals in the hero at all. The text-only hero on mobile is weaker than it needs to be.

---

### N-04 · `scroll-padding-top` is needed for fixed nav anchor links
The fixed nav is approximately 60–70px tall. Clicking `#about`, `#projects`, `#skills`, `#contact` will scroll to the section but the heading will be hidden behind the fixed nav. Add `scroll-padding-top: 70px` to `html` or to each section.

---

### N-05 · No `rel="noopener noreferrer"` audit — verify all external links
External links to `au.bank.in`, `xpharmsxchange.com`, `snox.in`, `github.com`, `linkedin.com` all need `target="_blank" rel="noopener noreferrer"`. Missing `noopener` on a `target="_blank"` link is a known security vulnerability (tab-napping). Verify every external link has both attributes.

---

---

## PART 2 — DESIGN PAGE `/design`

---

## 🔴 CRITICAL

---

### DC-01 · Twitter card meta still points to wrong image and wrong title
**File:** `/design` `<head>`  
From the live fetch:
```
meta-twitter:image: https://mysjportfolio.vercel.app/og-image.png   ← main site image
meta-twitter:title: Subrat Jena — Frontend Developer                 ← main site title
meta-twitter:description: Frontend developer with BFSI enterprise experience.
```
The `/design` page has correct `og:` tags now (fixed) but the `twitter:` tags are still pulling from the main site's metadata. When someone shares the `/design` URL on Twitter/X, the preview shows "Frontend Developer" — not "Visual Design Work."  
**Fix in `design/page.tsx`:**
```tsx
export const metadata: Metadata = {
  twitter: {
    card: 'summary_large_image',
    title: 'Visual Design Work — Subrat Jena',
    description: 'Logos, banners, invitations, and social graphics for real clients.',
    images: ['https://mysjportfolio.vercel.app/og-design.png'],
  },
}
```

---

### DC-02 · H1 and H2 both say "Design as a second language." — duplicate heading
**Section:** Design hero  
From the live fetch:
```
# Design as a second language.        ← H1 (visible page title)
## DD... Design as a second language. ← H2 (animated section heading, same text)
```
The page has two headings with identical text — one `<h1>` and one `<h2>`. The H2 is likely the animated version of the hero headline while the H1 is a static version. This breaks heading hierarchy, confuses screen readers, and the H2 still has the same broken animation prefix (`DD...`) as the main site headings.  
**Fix:** The hero should have exactly one `<h1>`. The animated version replaces the static one — not duplicates it. Pick one implementation and remove the other.

---

### DC-03 · Design page nav has no CV download link
**Nav:** The `/design` nav has: About · Projects · Skills · Design Work · Contact — but no CV download.  
The main site nav has `↓ CV`. The `/design` nav doesn't. If a design client visits `/design` and wants to know your background, they have no way to get your CV without navigating back to the main site.  
**Fix:** Add the CV link to the shared `<Nav />` component so it appears on both pages.

---

### DC-04 · Only 6 pieces of work — category filter is meaningless at this count
**Section:** Full grid  
Category tabs: All · Logos · Banners · Invitations · Social  
Actual work breakdown:
- Logos: 2 (Education emblem, LGI corporate identity)
- Banners: 3 (Festival 2024, Festival 2023, Campus event)
- Invitations: 1 (Birthday invite)
- Social: 0

"Social" is an empty category. "Invitations" has 1 item. The filter tabs exist but serve no meaningful purpose with this volume of work. A visitor clicks "Social" and gets nothing — that's a worse experience than no filter at all.  
**Fix option A:** Add more work — minimum 12 pieces across categories (see previous audit H-08).  
**Fix option B:** Remove filter tabs until you have enough work to justify them. Show all 6 in a clean grid with category labels on each card.

---

## 🟠 HIGH IMPACT

---

### DH-01 · Featured section label says "Featured work" + subtitle in extracted text = no visual distinction from the grid
**Section:** Featured vs Full grid  
The featured section has a label and subtitle: "Larger featured cards with an asymmetric desktop layout." This subtitle is visible to users (it's rendered text, not a comment). Design portfolio descriptions that describe their own layout are a red flag — the layout should speak for itself. Remove the subtitle. If the featured cards need a label, "Featured" is enough.

---

### DH-02 · Full grid section subtitle is also visible: "Remaining work shown in a compact responsive grid."
Same problem. "Remaining work shown in a compact responsive grid" is a design brief description that leaked into production. Remove it. The grid section needs no explanation.

---

### DH-03 · First Birthday invitation has no client name or description
**Item:** "First Birthday — Celebration Invite"  
In the full grid, this item has: category tags (Print, Invitation, Pastel, Watercolour, Botanical) but no client name, no year, and no description. Every other featured item has a client + year + description. The invitation feels like an afterthought. Add at minimum the year and a 1-sentence description of the brief.

---

### DH-04 · Campus Event banner has no client name, no description, no year
Same problem. "Campus Event — Promotional Banner" with tags (Campus, Event, Banner, Print & Digital) but nothing else. No context. No story. On a design portfolio, context is what separates "I made a banner" from "I designed a print+digital promotional piece for a campus programme."

---

### DH-05 · Design CTA copy undersells the offer
**Section:** Bottom CTA  
Current: "I can handle brand touchpoints alongside code work, from launch graphics to simple identity systems."  
This is passive and qualified. "Simple identity systems" signals you're not confident in the design work. Compare to: "I design and build — logos, launch graphics, and full component-level UI. One person, zero handoff."  

---

### DH-06 · "5+ designs" stat in the hero is not a selling point
**Section:** Design hero stat strip  
```
5+ designs | Logos, Banners, Invites, Social | Canva | Mumbai
```
"5+ designs" as a headline stat is actually harmful — it tells the visitor this is a very small portfolio. Don't quantify the portfolio size if the number is small. Replace with something that signals quality or client trust: "Real client work" or "Mumbai · Available for commissions."

---

## 🟡 NICE TO HAVE

---

### DN-01 · Footer on `/design` has two copyright/credit lines
From the fetch:
```
© 2026 Subrat Jena
Made with ❤️ by Subrat Jena
```
Both lines appear. One copyright line is enough. Remove "Made with ❤️ by Subrat Jena" — it's redundant when © 2026 Subrat Jena is already there.

---

### DN-02 · Design page hero has no visual — just text and stat pills
The hero is text-only: headline, subtext, crosslink to home, stat strip, filter tabs. No design work is visible above the fold. The first piece of actual design work a visitor sees is below the fold after scrolling past all of this. The hero should tease the work — show 2–3 thumbnail previews or a collage in the hero area so visitors immediately see what kind of design work you do.

---

### DN-03 · `og:image:alt` missing on design page
Main site has `meta-og:image:alt: Subrat Jena — Frontend Developer`. Design page `og:image` has no alt text. Add:
```tsx
images: [{ url: '/og-design.png', width: 1200, height: 630, alt: 'Visual Design Work — Subrat Jena' }]
```

---

---

## PART 3 — TECHNICAL AUDIT (Both Pages)

---

### T-01 · `scroll-behavior: smooth` has no `prefers-reduced-motion` guard
Still present. Still unfixed from audit v1. Every nav link click (About, Projects, Skills, Contact) triggers smooth scroll for users who have system-level motion reduction enabled. WCAG 2.1 SC 2.3.3 violation.

```css
@media (prefers-reduced-motion: no-preference) {
  html { scroll-behavior: smooth; }
}
```

---

### T-02 · `scroll-padding-top` either missing or insufficient
Clicking nav anchor links scrolls sections behind the fixed nav. The nav is approximately 60px tall. Sections need:
```css
html { scroll-padding-top: 72px; }
```

---

### T-03 · `animation-timeline: view()` — broken on Safari/iOS — still not fixed
Third audit in a row. Still live. On every iPhone, the `.fade-in` elements stay at `opacity: 0` permanently. The `@supports` guard stops the IntersectionObserver fallback from loading. Replace with IntersectionObserver (full implementation provided in audit v2).

---

### T-04 · `direction: rtl` on project card — third audit flagged, still live
```css
.project-card--reverse { direction: rtl; }
```
Still in the codebase. Fix: use `order` property on the grid children instead.

---

### T-05 · Two different CV filenames, one broken path
- Nav: `/public/subrat-cv.pdf` → 404 (wrong path prefix)
- Hero: `/subrat-jena-cv.pdf` → may work if file exists under that name
Pick one filename. Make sure the file is in `/public/`. Link to it as `/filename.pdf`.

---

### T-06 · Next.js icon using black SVG in dark mode
`https://cdn.simpleicons.org/nextdotjs/000000` — black icon on a near-black surface (`#0d0d0c`). Invisible in dark mode. Use `ffffff` and invert for light mode with CSS.

---

### T-07 · Supabase icon using wrong colour
`https://cdn.simpleicons.org/supabase/FFCA28` — that's Firebase yellow. Supabase brand colour is `#3ECF8E`. Wrong icon colouring signals sloppy attention to detail to anyone who knows the tech.

---

### T-08 · No `lang` attribute audit
The `<html>` tag should have `lang="en"` or `lang="en-IN"` (preferred given `og:locale: en_IN`). Confirm it's present — the fetch shows `og:locale: en_IN` which is correct at the meta level but the `html` element itself needs `lang` for screen reader language detection.

---

### T-09 · External links need `rel="noopener noreferrer"` audit
Multiple external links confirmed: `au.bank.in`, `xpharmsxchange.com`, `snox.in`, `linkedin.com`, `github.com`. Verify all have `target="_blank" rel="noopener noreferrer"`. Tab-napping vulnerability without `noopener`.

---

### T-10 · `og:image:alt` is set to "Subrat Jena — Frontend Developer" — main site only, design page missing
Already flagged as DN-03. Alt text on OG images is used by screen reader users viewing link previews on social platforms. Required for full accessibility compliance.

---

### T-11 · Font loading — Instrument Serif via Google Fonts CDN, not `next/font`
Using `<link rel="stylesheet" href="https://fonts.googleapis.com/...">` instead of `next/font/google`. This means:
1. No automatic font subsetting — loading full character sets
2. No preloading via Next.js font optimization
3. Additional DNS lookup + CDN roundtrip on every page load
4. Flash of unstyled text (FOUT) more likely

Switch to:
```tsx
import { Instrument_Serif } from 'next/font/google'
const serif = Instrument_Serif({ weight: ['400'], subsets: ['latin'] })
```

---

### T-12 · Missing `fetchpriority="high"` on above-fold images
If hero section has any `<img>` tags (OG image, icons), they should have `fetchpriority="high"` so the browser loads them before below-fold images. This affects LCP (Largest Contentful Paint) score.

---

### T-13 · Skills icons use `loading="lazy"` — not appropriate for above-fold content
If the Skills section is close to the fold or visible on load on large screens, `loading="lazy"` will delay icon rendering. Use `loading="eager"` for images that might be visible on initial load.

---

---

## SUMMARY TABLE

| ID | Section | Issue | Priority | Status |
|---|---|---|---|---|
| C-01 | All headings | Broken animated text — garbled in DOM, inaccessible | 🔴 Critical | NEW |
| C-02 | Nav + Hero | CV link 404 — two different filenames/paths | 🔴 Critical | Persists from v2 |
| C-03 | About | Bullet list duplicates Projects section | 🔴 Critical | NEW |
| C-04 | Below About | "Currently building" strip repeats featured projects | 🔴 Critical | NEW |
| C-05 | Experience strip | CreditBook shown as an employer | 🔴 Critical | NEW |
| C-06 | Projects | `direction: rtl` hack — 3rd audit | 🔴 Critical | Persists from v1 |
| H-01 | Skills | Zustand npm logo, Next.js/Vercel dark icons, Supabase wrong colour | 🟠 High | Persists from v2 |
| H-02 | Skills | Canva in Enterprise category | 🟠 High | Persists from v2 |
| H-03 | About | Code snippet too simple — tutorial-level code | 🟠 High | NEW |
| H-04 | Projects | SNOX + KreditBook results are vague | 🟠 High | NEW |
| H-05 | Hero | "2026" year in corner — wrong pattern for dev portfolio | 🟠 High | NEW |
| H-06 | Global | iOS/Safari fade-in broken — 3rd audit | 🟠 High | Persists from v1 |
| H-07 | Design crosslink | No work previews — one sentence + button | 🟠 High | NEW |
| H-08 | Contact | Right card repeats resume — no contact form | 🟠 High | NEW |
| N-01 | Nav | "Light" text flashing as theme toggle label | 🟡 Nice | NEW |
| N-02 | Footer | Redundant full nav in footer | 🟡 Nice | NEW |
| N-03 | Hero | Mobile hero shows no dev visuals — persists | 🟡 Nice | Persists from v2 |
| N-04 | Global | `scroll-padding-top` missing | 🟡 Nice | NEW |
| N-05 | Global | `rel="noopener noreferrer"` audit needed | 🟡 Nice | NEW |
| DC-01 | /design head | Twitter card wrong image + title | 🔴 Critical | NEW |
| DC-02 | /design hero | Duplicate H1 + H2 same text | 🔴 Critical | NEW |
| DC-03 | /design nav | No CV download link | 🔴 Critical | NEW |
| DC-04 | /design gallery | Only 6 items — filter tabs useless | 🔴 Critical | Persists from v2 |
| DH-01 | /design | Layout description visible as content | 🟠 High | NEW |
| DH-02 | /design | Grid description visible as content | 🟠 High | NEW |
| DH-03 | /design | Birthday invite — no context | 🟠 High | NEW |
| DH-04 | /design | Campus banner — no context | 🟠 High | NEW |
| DH-05 | /design | CTA copy weak + "simple identity systems" | 🟠 High | NEW |
| DH-06 | /design | "5+ designs" stat damages credibility | 🟠 High | NEW |
| DN-01 | /design footer | Two copyright lines | 🟡 Nice | NEW |
| DN-02 | /design hero | No visual work in hero — text only | 🟡 Nice | NEW |
| DN-03 | /design | OG image missing alt text | 🟡 Nice | NEW |
| T-01 | Global CSS | `smooth-scroll` no motion guard — 3rd audit | 🔴 Critical | Persists from v1 |
| T-02 | Global CSS | `scroll-padding-top` missing | 🟠 High | NEW |
| T-03 | Global JS | `animation-timeline` iOS broken — 3rd audit | 🔴 Critical | Persists from v1 |
| T-04 | Project CSS | `direction: rtl` — 3rd audit | 🔴 Critical | Persists from v1 |
| T-05 | Nav + Hero | CV path mismatch — persists | 🔴 Critical | Persists from v2 |
| T-06 | Skills | Next.js icon black on dark bg | 🟠 High | Persists from v2 |
| T-07 | Skills | Supabase wrong brand colour | 🟠 High | NEW |
| T-08 | HTML | `lang` attribute audit needed | 🟠 High | NEW |
| T-09 | Links | `noopener noreferrer` audit | 🟠 High | NEW |
| T-10 | /design | OG image missing alt | 🟡 Nice | NEW |
| T-11 | Fonts | Google Fonts CDN vs `next/font` | 🟡 Nice | NEW |
| T-12 | Images | `fetchpriority` on hero images | 🟡 Nice | NEW |
| T-13 | Skills | `loading="lazy"` on near-fold icons | 🟡 Nice | NEW |

---

## WHAT'S ACTUALLY GOOD — DON'T TOUCH

- **SEO meta tags (main page):** `og:url`, `og:title`, `og:image`, canonical — all correct now. Good work.
- **Project content:** AU Bank, XPharms, ICRA Copilot descriptions are honest, specific, and metric-driven. Keep them exactly.
- **Hero identity:** "Frontend Developer · React · Next.js · React Native" — clear and correct.
- **Availability signal:** The pulsing green "Open to opportunities" pill — good conversion signal, keep it.
- **`og:locale: en_IN`** — thoughtful detail. Keep it.
- **Contact links:** Email, LinkedIn, WhatsApp, GitHub — all correct URLs, all present.
- **Design page OG tags:** Finally fixed. Good.
- **Design page title:** "Visual Design Work — Subrat Jena" — correct.
- **Design featured card copy:** The three descriptions are genuinely good writing. Keep them.
- **Footer copyright year:** 2026 — correct.

---

*Audit complete — May 2026*
