# Axiom Inspection Services — Website

A modern marketing site for **Axiom Inspection Services, Inc.** — Special/Deputy Inspections & Material Testing across California.

Reimagined from [goaxiom.com](https://goaxiom.com/) using the [Nero Design System](https://github.com/neroai-com/design): Tailwind v4 + shadcn/ui with OKLCH tokens, dark mode, and 55+ accessible components.

## Stack

| Package | Purpose |
| --- | --- |
| Next.js 16 (App Router) | Framework + SSR |
| React 19 | UI |
| Tailwind CSS v4 | Styling |
| shadcn/ui | Component primitives |
| Radix UI | Headless accessible primitives |
| next-themes | Dark / light / system |
| framer-motion | Reveal animations |
| lucide-react | Icons |
| sonner | Toast notifications |

## Quick Start

```bash
npm install
npm run dev
# open http://localhost:3010
```

## What's Different vs. goaxiom.com

- **Modern, polished UI** — full OKLCH color system, dark mode toggle, smooth scroll-reveal animations, glass-morphism nav.
- **Bilingual** — proper EN/ES toggle (the original just says "Hablamos Español").
- **Real services grid** — 12 distinct inspection categories (concrete, post-tension, structural steel, masonry, soils, etc.) with clear descriptions instead of duplicated cards.
- **Process timeline** — explains how a project flows from quote → inspection → report.
- **Service-area coverage map** — covers LA County, OC, San Diego, Bay Area, etc.
- **Project case studies** — real-world examples with metrics.
- **Accessible contact form** — proper validation, success state, no captcha lock-in.
- **Performance** — Next/Image, edge-friendly, no jQuery, no GoDaddy widget bloat.
- **SEO-ready** — open graph, structured data, sitemap.

## Project Structure

```
src/
  app/
    globals.css          # OKLCH tokens (Axiom Steel Blue + safety-orange)
    layout.tsx           # Root layout: fonts + ThemeProvider
    page.tsx             # One-page landing
  components/
    theme-provider.tsx
    ui/                  # shadcn primitives (button, card, badge, …)
    landing/             # marketing sections (hero, services, …)
  i18n/
    content.ts           # EN/ES copy
    use-locale.ts        # locale store
  lib/
    utils.ts             # cn() helper
```

## License

Private — © Axiom Inspection Services, Inc.
