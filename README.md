# Zeiad Mahmoud - Portfolio

Premium, interactive portfolio for an AI Engineer, Presales & Solution Consultant, and Microsoft & AI Specialist. Built to win senior enterprise roles and consulting contracts.

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** (motion, scroll reveals, interactive widgets)
- **lucide-react** icons
- Dark, "premium developer tool" design system. Single azure accent.

## Run locally

```bash
npm install      # already done
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build (type-checks too)
npm run start    # serve the production build
npm run lint
```

## Where things live

| Area | File |
| --- | --- |
| All content (bio, case studies, timeline, UI showcase) | `lib/data.ts` |
| AI ROI simulator logic | `lib/roi.ts` |
| Design tokens (colors, fonts, radii) | `app/globals.css` |
| Page composition | `app/page.tsx` |
| Sections | `components/*.tsx` |
| Your photo | `public/zeiad.jpg` |

### Interactive components

- `Hero.tsx` + `NodeNetwork.tsx` - mouse-reactive node-network background
- `DocumentSlider.tsx` - before/after raw-scan to JSON comparison slider
- `RoiSimulator.tsx` - "Discover your AI ROI" widget
- `UiShowcase.tsx` - interface carousel + modal
- `Timeline.tsx` - interactive project lifecycle stepper

## Editing content

Most copy is data-driven. To change projects, the bio, or the ROI logic, edit
`lib/data.ts` and `lib/roi.ts` - no component changes needed.

Case studies carry a `kind`: `"Delivered"` (real client work) or `"Blueprint"`
(representative solution design). The site labels these so the distinction stays
honest in interviews.

## Deploy

Production-ready for **Vercel** (recommended) or **Netlify**.

**Vercel:** push this folder to a GitHub repo, then import it at vercel.com. No
config needed; framework auto-detects as Next.js.

**Netlify:** build command `npm run build`, uses the official Next.js runtime.

Before deploying, update the canonical URL in `app/layout.tsx` (`siteUrl`) and
the contact email in `lib/data.ts` if needed.
