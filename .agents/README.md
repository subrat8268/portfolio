# OpenCode Guide

This repo is a Next.js portfolio site.

Read root `AGENTS.md` first for the repo-specific workflow rules.

## Source of truth

- `package.json` for commands and dependencies
- `app/page.tsx` for the home page
- `app/design/page.tsx` for the design gallery
- `components/` for the wired UI blocks
- `lib/design-work.ts` for gallery content

## Commands

- `npm run dev`
- `npm run lint`
- `npm run build`
- `npm run start`

## Skills worth loading

### Workflow

- `project-planner`
- `writing-plans`
- `doc-coauthoring`
- `internal-comms`
- `verification-before-completion`
- `finishing-a-development-branch`

### Code / QA

- `code-reviewer`
- `systematic-debugging`
- `refactor-engineer`

### Next.js / web

- `nextjs-app-router-patterns`
- `next-best-practices`
- `tailwind-design-system`
- `nextjs-seo`
- `deploy-to-vercel`
- `context7-mcp`

### Design / frontend

- `ui-ux-pro-max`
- `frontend-design`
- `brand-guidelines`
- `extract-design-system`
- `sleek-design-mobile-apps`

### TypeScript / data

- `typescript-advanced-types`
- `supabase`
- `supabase-postgres-best-practices`

### Utility

- `brainstorming`
- `find-skills`
- `token-budget-advisor`
- `strategic-compact`
- `skill-creator`

## Repo quirks

- Use the `@/` import alias from `tsconfig.json`
- `app/page.tsx` and `app/design/page.tsx` are client components
- The wired home page uses `Navbar`, `Hero`, `About`, `Projects`, `Skills`, `Contact`, `Footer`
- The older `Header` / `HeroSection` / `ProjectsSection` / `SkillsSection` / `ContactSection` files are legacy
- `next.config.mjs` only allows remote images from `images.pexels.com`
- Tailwind v4 is configured through `postcss.config.mjs`
