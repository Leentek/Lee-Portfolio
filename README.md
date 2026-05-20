# Lee Robin Dela Cruz — Portfolio

Built with Next.js 15, Tailwind CSS v4, deployed serverless on Vercel.

## Setup

```bash
npm install
npm run dev
```

## Deployment to Vercel

1. Push this folder to a new GitHub repo
2. Import the repo on vercel.com
3. Vercel auto-detects Next.js — no config needed
4. Hit Deploy

## ⚠️ PDF Files Required

Before deploying, copy your 3 CV PDFs into the `/public` folder:

```
public/
  CV1_VirtualExecutiveAssistant_LeeDC.pdf
  CV2_TalentAcquisition_RecruitmentCoordinator_LeeDC.pdf
  CV3_CustomerSupport_LeeDC.pdf
```

These are linked from the navigation Download CV button and the Contact section.
The `/public` folder is served as static assets on Vercel automatically.

## Structure

```
app/
  layout.tsx          → fonts, metadata, root layout
  page.tsx            → assembles all sections
  globals.css         → Tailwind v4 + Optimus design tokens + animations
components/portfolio/
  navigation.tsx      → floating nav with mobile menu
  hero-section.tsx    → animated sphere + rotating role words
  stats-marquee.tsx   → scrolling stats bar
  experience-section.tsx → work history cards
  projects-section.tsx   → Nexus, JobTrack, Hungry Villains
  tools-section.tsx      → double marquee of tools
  automation-section.tsx → Zapier/n8n/Make projects
  contact-section.tsx    → contact links + CV downloads + tetrahedron
  footer-section.tsx     → footer with wave animation
  animated-sphere.tsx    → canvas sphere (ported from Optimus)
  animated-tetrahedron.tsx → canvas tetrahedron (ported from Optimus)
  animated-wave.tsx      → canvas wave background (ported from Optimus)
```
