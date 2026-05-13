# Deploy Checklist

## Before going live

- [ ] Replace public/about/photo-1.svg with real personal photo
      (rename to photo-1.jpg or .png, update src in components/About.tsx)
- [ ] Replace public/about/photo-2.svg with real personal photo
      (rename to photo-2.jpg or .png, update src in components/About.tsx)
- [ ] Replace public/projects/au-bank-mockup.png with real BFSI screenshot
      (1200×675 recommended)
- [ ] Replace public/projects/icra-mockup.png with real ICRA screenshot
- [ ] Add Canva export files to public/design/ and update paths in
      lib/design-work.ts (5 items: ussepp-logo, ekadant-banner-2024,
      ekadant-banner-2023, laxmi-global-logo, ritika-birthday-invite)
- [ ] Update Contact.tsx mailto: link to your real email address
- [ ] Test on mobile at 375px: Hero card animation, Projects grid, Skills pills
- [ ] Verify prefers-reduced-motion: open DevTools → Rendering → enable
      "Emulate prefers-reduced-motion" and confirm no card animation plays

## Deploy steps

1. git push to main branch
2. Go to vercel.com/new → Import the subrat8268/portfolio repo
3. Vercel auto-detects Next.js — no custom build config needed
4. After deploy verify in browser:
   - / — Hero cards animate on load
   - / — Projects shows BFSI card first with "Internal — NDA" badge
   - / — "I also design." crosslink block is visible between Projects and Skills
   - /design — Gallery renders all 5 design items with filter pills + modal
   - No broken image 404s in browser DevTools console

## Environment variables

None required. No database, no API keys, no auth in current setup.
