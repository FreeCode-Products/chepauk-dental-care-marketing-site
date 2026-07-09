# Chepauk Dental Care — Marketing Site

Marketing site for **Chepauk Dental Care**, Chennai (Dr. C. Narmadha, BDS MDS).
Built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, Motion (Framer
Motion) and Lenis smooth scrolling. **100% frontend — no backend needed.**

## Features

- **Smooth scrolling** — Lenis inertia scroll wired globally via a provider.
- **Scroll-reveal** — reusable `Reveal`, `Stagger`, `Parallax` primitives.
- **Scroll progress bar** — spring-driven top bar bound to page scroll.
- **Filterable services** — all 15 real treatments, filter by category with an
  animated pill + layout transitions.
- **Frontend booking** — appointment form builds a pre-filled **WhatsApp** (or
  email) message; no server, no database.
- **Easy contact** — click-to-call, WhatsApp, email, embedded Google Map and a
  one-tap "Get directions" link. Opening hours block.
- **Floating WhatsApp CTA** — appears after scroll for instant booking.
- **Brand themed** — blue palette + tooth line-mark logo from the clinic brand.
- **Reduced-motion aware** — decorative animations disabled for users who ask.

## Editing content

Everything lives in one file: [`src/lib/site.ts`](src/lib/site.ts) — clinic
name, doctor, phone, WhatsApp number, email, address, opening hours and the full
service list. Change it there and every section updates.

> Booking sends to WhatsApp number `918248395311`. Update `whatsapp` /
> `phoneRaw` in `site.ts` to change it. Drop real clinic photos into `public/`
> and reference them if you want to replace the gradient visuals.

## Tech

| Concern        | Choice                            |
| -------------- | --------------------------------- |
| Framework      | Next.js 16 (App Router, Turbopack)|
| Language       | TypeScript                        |
| Styling        | Tailwind CSS v4 (`@theme` tokens) |
| Animation      | `motion`                          |
| Smooth scroll  | `lenis`                           |
| Icons          | `lucide-react`                    |

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve production build
```

## Structure

```
src/
  app/
    layout.tsx          # fonts, metadata, SmoothScroll provider
    page.tsx            # landing page composition
    globals.css         # theme tokens, utilities, keyframes
  components/
    smooth-scroll.tsx   # Lenis provider
    motion-primitives.tsx  # Reveal / Stagger / Counter / Parallax / ScrollProgress
    logo.tsx  icon.tsx  ticker.tsx  float-cta.tsx
    navbar.tsx  hero.tsx  services.tsx  about.tsx
    why-us.tsx  booking.tsx  contact.tsx  footer.tsx
    ui/button.tsx
  lib/
    site.ts             # ← all clinic content lives here
    utils.ts            # cn() classnames helper
```

## Customising

- **Clinic content** (name, doctor, phone, hours, services) — `src/lib/site.ts`.
- **Brand colors / fonts / shadows** — `src/app/globals.css` (`@theme` block).
- **Booking / WhatsApp number** — `whatsapp` & `phoneRaw` in `src/lib/site.ts`.
