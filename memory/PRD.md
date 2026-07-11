# Boltlabs — Landing Page PRD

## Original Problem Statement
Build a production-ready, highly interactive dark-themed 3D landing page for agency "Boltlabs" inspired by Awwwards sites. Sections: glassmorphism navbar, 3D interactive hero ("We Build Digital Dimensions."), infinite marquee, 3D tilt service cards, work showcase, FAQ accordion, contact form + footer. SEO, fully responsive.

## Current Architecture (MIGRATED July 2026)
- **Next.js 15 App Router, frontend-only** (user request: better SEO, no backend needed)
- Location: /app/frontend (supervisor runs `next dev -H 0.0.0.0 -p 3000` via yarn start)
- Contact form → Next.js route handler `POST /contact-form` (src/app/contact-form/route.js) → Resend email to boltlabs1@gmail.com. NO database.
- Env (frontend/.env): RESEND_API_KEY, SENDER_EMAIL, NOTIFY_EMAIL
- FastAPI backend is INERT (health message only, not used). Old Mongo contact storage removed.
- Pages: / (SSG), /privacy-policy (SSG), /terms-and-conditions (SSG) — server-rendered metadata per page
- Components: src/components/boltlabs/* (all "use client"), SmoothScroll provider (Lenis + sonner Toaster) in layout
- 3D: R3F TorusKnot hero via next/dynamic ssr:false; Fonts: Unbounded + Space Grotesk
- Production build verified: 7/7 static pages (`yarn build`)
- ⚠ Gotcha: running `next build` while dev server active leaves stale .next artifacts → chunk 404s. Fix: `rm -rf /app/frontend/.next && sudo supervisorctl restart frontend`

## User Choices History
- Purple/violet accents (#9D4CDD); founder: Rajat Adhikari; contacts: boltlabs1@gmail.com, +91 9971210492, IG @boltlabs
- Work showcase: 4 real projects (LUXONN, PIXZEN, Rajjo, Boltlabs Studio) with preview images in public/work/
- Deployment intent: Vercel (Emergent deployment not supported for Next.js stack per support)

## Implemented
- [x] Full landing page (hero 3D, marquee, services, work, FAQ, contact, footer) — June 2026
- [x] Resend email notifications for leads
- [x] Footer: founder Rajat Adhikari, Instagram/Email/Phone icons only
- [x] Work section: real projects + preview images, external links
- [x] Privacy Policy & Terms pages (Meta/Google ads compliance)
- [x] Phone field in contact form (required, 5-20 chars)
- [x] Next.js 15 migration, backend removed — July 2026, tested 100% (iteration_7)

## Backlog
- P1: Push to GitHub → deploy on Vercel (user action; set RESEND_API_KEY, SENDER_EMAIL, NOTIFY_EMAIL env vars in Vercel)
- P2: Verify custom domain in Resend for branded sender
- P2: Meta Pixel + Google Analytics tags for ad conversion tracking
- P2: Cookie consent banner (if targeting EU)
- P2: Escape name/email/phone in email HTML template (minor)
