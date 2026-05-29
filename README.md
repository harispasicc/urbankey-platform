# UrbanKey Sarajevo

Production marketing site for **UrbanKey Sarajevo** — professional Airbnb and Booking.com apartment management for property owners in Sarajevo.

**Live:** [www.urbankey.ba](https://www.urbankey.ba)

![UrbanKey Sarajevo landing page](./docs/screenshot.png)

---

## Overview

A bilingual, SEO-optimized landing page built with Next.js App Router. The site presents services, process, and trust signals, and routes consultation requests through Formspree. Rendering is static-first with no custom backend in the current release.

---

## Features

- **Bilingual support (English / Bosnian)** — locale-aware copy across all sections, with client-side language switching and persisted preference
- **Responsive design** — mobile-first layout from small phones through large desktop viewports
- **SEO optimization** — metadata, canonical URLs, Open Graph, Twitter cards, sitemap, and robots configuration
- **JSON-LD structured data** — Organization and FAQ schema for richer search results
- **Contact form integration** — validated consultation form via Formspree
- **Automated testing** — Vitest unit tests and Playwright end-to-end coverage
- **CI/CD pipeline** — GitHub Actions quality gate on every push and pull request to `main`

---

## Tech stack

**Framework** — Next.js 16 (App Router), React 19, TypeScript

**Styling** — Tailwind CSS v4, custom UrbanKey design tokens

**Internationalization** — typed translation modules (`en` / `bs`), React context with `useSyncExternalStore`, and `localStorage` persistence (no runtime translation APIs)

**Forms** — Formspree (contact submissions)

**Testing** — Vitest, Testing Library, Playwright

**CI** — GitHub Actions

**Deployment** — Vercel

---

## Architecture

**Component-driven UI** — the landing page is composed of focused section components (hero, services, FAQ, contact, footer) orchestrated from a single route.

**Reusable building blocks** — shared primitives for branding, CTAs, form fields, navigation, and layout containers reduce duplication and keep styling consistent.

**Static-first rendering** — pages are pre-rendered at build time where possible, minimizing runtime overhead and improving performance on production hosting.

**SEO-first approach** — metadata, structured data, and crawlable content are defined at the layout and section level rather than bolted on afterward.

**Separation of concerns** — copy lives in `src/i18n`, validation in `src/lib`, presentation in `src/components`, and routing/metadata in `src/app`.

---

## Getting started

### Prerequisites

- Node.js 20+ (CI runs on Node 24)
- npm

### Install and run

```bash
git clone https://github.com/harispasicc/urbankey-platform.git
cd urbankey-platform
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

Copy `.env.example` to `.env.local` and configure:

- **`NEXT_PUBLIC_SITE_URL`** — public site URL used for canonical links, Open Graph, and sitemap generation
- **`NEXT_PUBLIC_FORMSPREE_FORM_ID`** — Formspree form ID for contact submissions
- **`GOOGLE_SITE_VERIFICATION`** — optional Google Search Console verification token

### Scripts

- **`npm run dev`** — start the development server
- **`npm run build`** — create a production build
- **`npm run start`** — serve the production build locally
- **`npm run lint`** — run ESLint
- **`npm run test`** — run Vitest in watch mode
- **`npm run test:run`** — run Vitest once (CI)
- **`npm run test:e2e`** — run Playwright end-to-end tests
- **`npm run test:all`** — unit tests, production build, and E2E in sequence

---

## Project structure

```
src/
├── app/           # App Router: layout, page, metadata, favicon
├── components/    # Section and UI components
├── i18n/          # Translation types, EN/BS copy, language context
└── lib/           # Site config, form validation, layout utilities
e2e/               # Playwright specs
public/            # Static assets (logo, hero image)
.github/workflows/ # CI pipeline
```

---

## Deployment

### Vercel

The live site is deployed on [Vercel](https://vercel.com), connected to the GitHub repository. Pushes to `main` trigger automatic production deployments after CI passes. Environment variables from `.env.example` must be configured in the Vercel project settings.

### GitHub Actions

The workflow in `.github/workflows/ci.yml` runs on every push and pull request to `main`:

1. Install dependencies (`npm ci`)
2. Lint (`npm run lint`)
3. Unit tests (`npm run test:run`)
4. Production build (`npm run build`)
5. Playwright browser dependencies
6. End-to-end tests (`npm run test:e2e`)

This pipeline ensures changes are lint-clean, tested, and buildable before they reach production.

---

## Potential future enhancements

- **Backend API** — owner dashboard, lead management, and in-house form storage
- **CMS or admin panel** — edit marketing copy and FAQ without code changes
- **Platform integrations** — Airbnb and Booking.com calendar and reservation sync
- **Analytics** — conversion tracking on contact and CTA interactions
- **Multi-property portal** — portfolio overview and reporting for owners

---

## License

Private project. All rights reserved.
