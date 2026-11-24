# VULFAX — Official Website (Phase 1)

A premium, dark, futuristic single-page corporate landing page for **VULFAX**, engineered as the
foundation of a larger corporate site and platform — not as a throwaway prototype.

- **Stack:** Next.js 15 (App Router) · React 19 · TypeScript (strict) · Tailwind CSS v4 · Motion for React · GSAP (scroll progress only) · Zod · React Hook Form · Vitest + React Testing Library · Playwright
- **Rendering:** statically prerendered landing page, no backend, no database, no accounts
- **Theme:** dark only, art-directed, CSS/SVG visuals (no WebGL/Three.js)

---

## 1. Quick start

```bash
npm install
cp .env.example .env.local   # optional; see § 5
npm run dev                  # http://localhost:3000
```

Node 20+ is recommended (verified on Node 26).

### Scripts

| Script              | Purpose                                              |
| ------------------- | ---------------------------------------------------- |
| `npm run dev`       | Development server                                   |
| `npm run build`     | Production build                                     |
| `npm run start`     | Serve the production build                           |
| `npm run lint`      | ESLint (Next core-web-vitals + TypeScript rules)     |
| `npm run typecheck` | `tsc --noEmit`                                       |
| `npm test`          | Vitest unit / component tests                        |
| `npm run test:e2e`  | Playwright end-to-end tests (builds and serves :3100) |

---

## 2. Page structure

Exactly one route (`/`), composed of nine sections in this order:

| #   | Section          | Component                             | Anchor         |
| --- | ---------------- | ------------------------------------- | -------------- |
| 01  | Navigation       | `components/layout/Navbar.tsx`        | —              |
| 02  | Hero             | `components/sections/Hero.tsx`        | `#home`        |
| 03  | Brand statement  | `components/sections/BrandStatement.tsx` | `#about`    |
| 04  | Capabilities     | `components/sections/Capabilities.tsx`   | `#capabilities` |
| 05  | How we work      | `components/sections/Process.tsx`     | `#process`     |
| 06  | Why VULFAX       | `components/sections/WhyVulfax.tsx`   | `#why-vulfax`  |
| 07  | Future vision    | `components/sections/Vision.tsx`      | `#vision`      |
| 08  | Final CTA        | `components/sections/Contact.tsx`     | `#contact`     |
| 09  | Footer           | `components/layout/Footer.tsx`        | —              |

---

## 3. Project structure

```
vulfax/
├── public/            images · videos · icons · fonts · models (empty by design)
├── src/
│   ├── app/           layout · page · globals.css · not-found · error · sitemap · robots
│   │                  icon.svg · opengraph-image.tsx
│   ├── components/
│   │   ├── layout/    Navbar · Footer · Container · Logo
│   │   ├── sections/  one file per page section
│   │   ├── ui/        Button · GlassCard · SectionHeading · AnimatedText · MagneticButton
│   │   │              Icon · OrbVisual · AmbientGlow
│   │   └── animations/ MotionProvider · Reveal · Parallax · PageTransition
│   ├── config/        site.ts · navigation.ts · theme.ts
│   ├── content/       en.ts · ar.ts · index.ts
│   ├── hooks/         useActiveSection · useMediaQuery · useReducedMotion
│   ├── lib/           utils · constants · validation
│   ├── styles/        animations.css
│   └── types/         content.ts · site.ts
└── tests/
    ├── components/    Button · validation
    └── e2e/           landing.spec.ts
```

Architectural rules honoured throughout:

- every page section is its own component, none oversized;
- reusable UI is independent of business content;
- tokens, navigation, content and copy are centralised in `config/` and `content/`;
- changing copy, colours, nav items or adding a capability card requires no JSX surgery;
- Server Components by default, `"use client"` only where interactivity requires it.

---

## 4. Design system

Tokens live in `src/app/globals.css` (`@theme`) and are mirrored for TypeScript in
`src/config/theme.ts`.

| Token         | Value     | Role                        |
| ------------- | --------- | --------------------------- |
| `void`        | `#08090D` | Page background             |
| `surface`     | `#10131B` | Secondary background        |
| `elevated`    | `#191E2A` | Elevated surface            |
| `ink`         | `#F4F6FC` | Primary text                |
| `muted`       | `#9299AB` | Secondary text              |
| `accent`      | `#6575FF` | Primary accent              |
| `violet`      | `#8B5CF6` | Secondary accent (lighting) |
| `cyan`        | `#00D4FF` | Additional glow             |

Usage discipline: ~75% dark neutrals, ~15% high-contrast type and whitespace, ~10% luminous
accents. Glassmorphism is limited to the navbar, cards and form panel.

**Typography:** Space Grotesk (display) + Inter (body), loaded and self-optimised by
`next/font/google` — no browser-default fonts, no external font requests at runtime.

`font-display` and `font-sans` are wired through CSS variables, so swapping the typeface is a
one-file change in `src/app/layout.tsx`.

---

## 5. Configuration & content

| Concern                | File                                   |
| ---------------------- | -------------------------------------- |
| Brand, URL, contact    | `src/config/site.ts`                   |
| Navigation / section ids | `src/config/navigation.ts`           |
| TypeScript design tokens | `src/config/theme.ts`                |
| All editable copy      | `src/content/en.ts`, `src/content/ar.ts` |
| Form schema            | `src/lib/validation.ts`                |

### Environment variables

```env
NEXT_PUBLIC_SITE_URL=        # canonical origin for metadata, sitemap, robots
NEXT_PUBLIC_CONTACT_ENDPOINT= # optional JSON POST endpoint for the contact form
```

See `.env.example`. No secrets are required, and no secret is exposed to the client.

### Intentional placeholders (do not ship as-is)

The specification forbids invented business facts, so these are explicit placeholders:

- **Contact email** — `siteConfig.email` is `null`; the footer renders “Contact details pending
  approval”. Set the approved address to show a real mail link.
- **Social & legal links** — `content.footer.social` and `.legal` are empty arrays. The footer
  renders no dead icons or 404 links until approved URLs exist.
- **Hero / section copy** — deliberately non-specific and review-ready; replace with approved
  brand messaging.
- **Capabilities, process and benefits** — configurable lists, not claims about delivered work.

### Contact form behaviour

- Validated client-side with Zod + React Hook Form (name, email, message; optional company).
- If `NEXT_PUBLIC_CONTACT_ENDPOINT` is set, the form POSTs JSON and reports real success/failure.
- If it is not set, the form validates and then states plainly that delivery is not connected.
  **It never claims a message was delivered.**

---

## 6. Arabic / RTL readiness

Both content packs implement the same `SiteContent` interface. To activate Arabic:

1. set `locale: "ar"` and `direction: "rtl"` in `src/config/site.ts`;
2. set `defaultLocale = "ar"` in `src/content/index.ts`.

Layout uses logical utilities (`ms-*`/`me-*`, `text-start`, flex order) and no LTR-only absolute
positioning for text, so the mirror works without rebuilding components. A language switcher is
intentionally **not** rendered, because only one locale is live.

---

## 7. Motion system

| Effect                    | Implementation                              |
| ------------------------- | ------------------------------------------- |
| Hero entrance / stagger   | Motion (`Hero`, `AnimatedText`)             |
| Section reveals           | Motion `whileInView` (`Reveal`)             |
| Card tilt + spotlight     | Motion springs + CSS variables (`GlassCard`) |
| Magnetic CTA              | Motion springs (`MagneticButton`)           |
| Ambient drift / orbits    | CSS keyframes (`styles/animations.css`)     |
| Scroll-linked progress    | GSAP ScrollTrigger (`Process` only)         |
| Parallax                  | Motion `useScroll` (`Parallax`)             |

Safety rules applied: `transform`/`opacity` only, no scroll hijacking, no infinite heavy effects,
GSAP isolated to one element with `gsap.context().revert()` cleanup, and every effect disabled or
neutralised under `prefers-reduced-motion` (Motion is globally configured via `MotionConfig`
`reducedMotion="user"`; CSS animations are disabled in a media query).

---

## 8. Accessibility

- Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`), single `h1`, ordered headings.
- Skip-to-content link, visible `:focus-visible` rings, keyboard-operable mobile menu with
  `aria-expanded` / `aria-controls` and `Escape` to close.
- Form labels bound to inputs, `aria-invalid`, `aria-describedby` error wiring, `aria-live` status.
- Decorative visuals marked `aria-hidden`; reduced-motion support; AA-oriented contrast on
  `#08090D` (primary text 15.8:1, secondary text ≈ 6.4:1).

---

## 9. SEO

Title template, description, keywords, canonical URL, Open Graph and Twitter cards, generated
`/opengraph-image` (1200×630), `icon.svg` favicon, `sitemap.xml` and `robots.txt`.
No structured data is emitted, because no verified legal/organisational facts are available yet.

---

## 10. Verification (run on this machine)

| Check                | Command              | Result                          |
| -------------------- | -------------------- | ------------------------------- |
| TypeScript strict    | `npx tsc --noEmit`   | pass, 0 errors                  |
| ESLint               | `npx eslint .`       | pass, 0 errors / 0 warnings     |
| Unit + component     | `npx vitest run`     | **7/7 passed**                  |
| End-to-end (Chromium) | `npx playwright test` | **4/4 passed** (incl. no console errors) |
| Production build     | `npx next build`     | pass — `/` prerendered static   |

Build output: `/` = **90.8 kB** page JS, **242 kB** First Load JS, shared JS 103 kB.

E2E coverage: all seven sections present, single `h1`, keyboard/mobile menu behaviour, anchor
navigation, form validation + honest non-delivery state, and a zero-console-error assertion.

Known limitations:

- Lighthouse was not run in this environment; the page ships no third-party scripts, no image
  payload and CSS/SVG-only visuals, but Core Web Vitals still need measuring on the real URL.
- Playwright runs Chromium only; Firefox/WebKit are installed on demand
  (`npx playwright install firefox webkit`) and the same suite applies.
- Layout was reviewed visually at 360, 390, 768, 1024 and 1440 px (captures in
  `screenshots/`); an automated pass confirmed `document.scrollWidth === viewport width` at all
  five widths, so there is no horizontal overflow. 375/430/1280/1920 were not captured
  individually.

---

## 11. Deployment (Vercel)

1. Push the repository and import it in Vercel (framework preset: Next.js — no custom config).
2. Set `NEXT_PUBLIC_SITE_URL` to the production origin (e.g. `https://vulfax.com`) so canonical
   URLs, `sitemap.xml` and `robots.txt` resolve correctly.
3. Set `NEXT_PUBLIC_CONTACT_ENDPOINT` once a form backend (route handler, Resend, form service) is
   approved; otherwise the form stays in explicit local-validation mode.
4. Deploy. The page is fully static, so no runtime configuration is required.

Any Node host also works: `npm run build && npm run start`.

---

## 12. Future phases (deliberately not implemented)

The architecture anticipates, without building: corporate inner pages (About, Services,
Industries, Careers, Blog) as new App Router routes reusing `components/ui`; authentication and a
customer dashboard; subscriptions and payments; backend APIs and a database; i18n routing with the
existing `content/ar.ts` pack.

No backend, database, auth or API scaffolding has been added now, per the Phase 1 scope.
