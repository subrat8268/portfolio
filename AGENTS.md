# AGENTS.md

- `package.json` is the source of truth; this repo uses `npm` (`package-lock.json` is present).
- Use `npm run dev`, `npm run build`, `npm run start`, and `npm run lint`; there is no `test` script.
- `app/page.tsx` is the home route and `app/design/page.tsx` is the other wired route.
- Prefer the component set imported by `app/page.tsx` (`Navbar`, `Hero`, `About`, `Projects`, `Skills`, `Contact`, `Footer`); the older `Header`/`HeroSection`/`ProjectsSection`/`SkillsSection`/`ContactSection` files are not wired into the current routes.
- Use the `@/` import alias from `tsconfig.json` for root-relative imports.
- `app/page.tsx` and `app/design/page.tsx` are client components; only add `"use client"` when hooks or browser APIs are needed.
- `next.config.mjs` only allows remote images from `images.pexels.com`; add new hosts there before using `next/image`.
- `lib/design-work.ts` drives the design gallery, and its thumbnails currently point at `/design/placeholder-*.png` under `public/`.
- Tailwind v4 is wired through `postcss.config.mjs`; there is no `tailwind.config.*` file.
- `eslint.config.mjs` extends `next/core-web-vitals` and `next/typescript`; run `npm run lint` before `npm run build` when verifying changes.
- Ignore `.agents/README.md` for repo commands; it describes a different stack than this workspace.
