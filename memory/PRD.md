# Boltlabs — Landing Page PRD

## Original Problem Statement
Build a production-ready, highly interactive dark-themed 3D landing page for agency "Boltlabs" inspired by Awwwards sites (labs.noomoagency.com, third-dimension.agency). React + Tailwind + Framer Motion + Lenis + Three.js/R3F. Sections: glassmorphism navbar, 3D interactive hero ("We Build Digital Dimensions."), infinite marquee, 3D tilt service cards, FAQ accordion, contact form + footer. SEO meta tags, semantic HTML, fully responsive.

## User Choices
- Contact form submissions → save to MongoDB
- No logo image, sleek "Boltlabs" typography
- Accent: futuristic purple/violet (#9D4CDD)
- Work section: placeholder showcase included

## Architecture
- Frontend: React (CRA/craco), Tailwind, Framer Motion, Lenis smooth scroll, @react-three/fiber + drei (TorusKnot hero with mouse tracking, MeshPhysicalMaterial + clearcoat, canvas pointer-events:none so it never blocks scroll)
- Backend: FastAPI — POST/GET /api/contact (ContactMessage model, EmailStr validation)
- DB: MongoDB `contact_messages` collection
- Fonts: Unbounded (headings) + Space Grotesk (body)
- Components: /app/frontend/src/components/boltlabs/{Navbar,Hero,Scene3D,MarqueeStrip,Services,Work,FAQ,Contact,Footer,TiltCard}.jsx

## Implemented (July 2026)
- [x] Glassmorphism fixed navbar + mobile menu + smooth scroll nav
- [x] 3D hero: TorusKnot + orbiting icosahedrons + sparkles, mouse-reactive, staggered headline reveal
- [x] Infinite marquee (outline text, hover purple)
- [x] Services: 3 tilt cards with glow hover
- [x] Work showcase: 3 placeholder projects, bento grid
- [x] FAQ accordion (Framer Motion height transitions, 5 questions)
- [x] Contact form → MongoDB (validated, success/error toasts)
- [x] Footer: founder info, social icons with hover animations
- [x] SEO meta tags, semantic HTML, heading hierarchy
- [x] E2E tested: 100% backend + frontend (iteration_1.json)
- [x] Email notification via Resend to boltlabs1@gmail.com on new lead (non-blocking, July 2026)
- [x] Privacy Policy (/privacy-policy) & Terms and Conditions (/terms-and-conditions) pages for Meta/Google ads compliance, footer legal links (July 2026)

## Backlog
- P1: Admin view/protection for GET /api/contact (currently public)
- P2: Real project case-study pages for Work section
- P2: Page transition loader / preloader animation
- P2: prefers-reduced-motion refinements
