# Graph Report - .  (2026-05-15)

## Corpus Check
- Corpus is ~13,448 words - fits in a single context window. You may not need a graph.

## Summary
- 191 nodes · 196 edges · 19 communities detected
- Extraction: 90% EXTRACTED · 10% INFERRED · 0% AMBIGUOUS · INFERRED: 20 edges (avg confidence: 0.84)
- Token cost: 3,847 input · 3,847 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Core UI Components|Core UI Components]]
- [[_COMMUNITY_Radix UI Pattern|Radix UI Pattern]]
- [[_COMMUNITY_Navigation Components|Navigation Components]]
- [[_COMMUNITY_Portfolio Page Layout|Portfolio Page Layout]]
- [[_COMMUNITY_Deployment Config|Deployment Config]]
- [[_COMMUNITY_Design Assets|Design Assets]]
- [[_COMMUNITY_App Router Layout|App Router Layout]]
- [[_COMMUNITY_Reusable UI Patterns|Reusable UI Patterns]]
- [[_COMMUNITY_Accessibility|Accessibility]]
- [[_COMMUNITY_Image Config|Image Config]]
- [[_COMMUNITY_Tailwind CSS v4|Tailwind CSS v4]]
- [[_COMMUNITY_DesignItem Types|DesignItem Types]]
- [[_COMMUNITY_Import Alias|Import Alias]]
- [[_COMMUNITY_Project Showcases|Project Showcases]]
- [[_COMMUNITY_ESLint Config|ESLint Config]]
- [[_COMMUNITY_Sitemap|Sitemap]]
- [[_COMMUNITY_Robots|Robots]]
- [[_COMMUNITY_Two Route Architecture|Two Route Architecture]]
- [[_COMMUNITY_Tailwind CSS|Tailwind CSS]]

## God Nodes (most connected - your core abstractions)
1. `cn()` - 19 edges
2. `cn Utility Function` - 16 edges
3. `Home Page` - 10 edges
4. `Button Component` - 8 edges
5. `Design Page` - 6 edges
6. `Radix Accordion Primitive` - 6 edges
7. `Design Gallery` - 6 edges
8. `DisplayHeading Component` - 5 edges
9. `RevealOnScroll Component` - 5 edges
10. `AlertDialog Component` - 5 edges

## Surprising Connections (you probably didn't know these)
- `WCAG Accessibility` --semantically_similar_to--> `Prefers Reduced Motion`  [INFERRED] [semantically similar]
  public/icons/wcag-icon.webp → DEPLOY.md
- `npm Package Manager` --semantically_similar_to--> `Next.js Framework`  [INFERRED] [semantically similar]
  AGENTS.md → README.md
- `Design Gallery` --conceptually_related_to--> `USSEPP Logo Design`  [INFERRED]
  AGENTS.md → public/design/ussepp-logo.png
- `Design Gallery` --conceptually_related_to--> `Ekadant Banner 2023`  [INFERRED]
  AGENTS.md → public/design/ekadant-banner-2023.png
- `Design Gallery` --conceptually_related_to--> `Ekadant Banner 2024`  [INFERRED]
  AGENTS.md → public/design/ekadant-banner-2024.png

## Hyperedges (group relationships)
- **Main Page Component Composition** — app_page, navbar_component, hero_component, experience_strip_component, about_component, projects_component, design_teaser_component, skills_component, contact_component, footer_component [EXTRACTED 1.00]
- **Design Page Component Composition** — app_design_page, navbar_component, display_heading_component, design_gallery_component, footer_component [EXTRACTED 1.00]
- **Framer Motion Animation System** — framer_motion, reveal_on_scroll_component, hero_component, projects_component [EXTRACTED 1.00]
- **Radix UI Wrapper Components** — accordion, alertdialog, aspectratio, avatar, collapsible, dialog, switch, tabs, toggle, tooltip [EXTRACTED 1.00]
- **CVA Variant Components** — alert, badge, button, toggle [EXTRACTED 1.00]
- **Dialog-based Components** — alertdialog, command, dialog [EXTRACTED 1.00]
- **Vercel Deployment Workflow** — deployment-checklist, vercel-deployment, vercel, nextjs [EXTRACTED 0.95]
- **Design Portfolio Assets** — ussepp-logo, ekadant-banner-2023, ekadant-banner-2024, laxmi-global-logo, ritika-birthday-invite, design-gallery [EXTRACTED 0.90]
- **Project Showcase Assets** — au-bank-project, icra-project [EXTRACTED 0.95]

## Communities (41 total, 11 thin omitted)

### Community 1 - "Radix UI Pattern"
Cohesion: 0.11
Nodes (27): Accordion Component, Alert Component, AlertDialog Component, AspectRatio Component, Avatar Component, Badge Component, Breadcrumb Component, Button Component (+19 more)

### Community 2 - "Navigation Components"
Cohesion: 0.08
Nodes (3): DesignTeaser Component, Lucide React Icons, ScrollToTopButton Component

### Community 3 - "Portfolio Page Layout"
Cohesion: 0.17
Nodes (16): About Component, Design Page, Home Page, Contact Component, DesignGallery Component, DisplayHeading Component, ExperienceStrip Component, Footer Component (+8 more)

### Community 4 - "Deployment Config"
Cohesion: 0.25
Nodes (8): Client Components Pattern, Deployment Checklist, ESLint Configuration, Next.js Configuration, Next.js Framework, npm Package Manager, Vercel Deployment Platform, Vercel Deployment Process

### Community 5 - "Design Assets"
Cohesion: 0.25
Nodes (8): Adobe Experience Manager, Canva Design Tool, Design Gallery, Ekadant Banner 2023, Ekadant Banner 2024, Laxmi Global Logo, Ritika Birthday Invite, USSEPP Logo Design

### Community 10 - "App Router Layout"
Cohesion: 0.67
Nodes (3): Design Layout, Root Layout, Next.js App Router

### Community 11 - "Reusable UI Patterns"
Cohesion: 0.67
Nodes (3): DisplayHeading Component, RevealOnScroll Component, Skills Component

### Community 12 - "Accessibility"
Cohesion: 0.67
Nodes (3): Mobile Testing, Prefers Reduced Motion, WCAG Accessibility

## Knowledge Gaps
- **40 isolated node(s):** `Design Layout`, `Next.js Configuration`, `PostCSS Configuration`, `ESLint Configuration`, `Skills Component` (+35 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **11 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.