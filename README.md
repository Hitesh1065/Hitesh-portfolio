# M.Hitesh — Portfolio

Personal portfolio of **M.Hitesh**, a Backend & ML Engineer. A single-page site built with
React, TypeScript, Tailwind CSS, and Framer Motion — a warm coral/cream design system with a
polished light/dark mode.

## Features

- 🎨 **Warm, minimal design** — Anthropic-inspired coral on a paper-texture background
- 🌗 **Light / dark mode** — CSS-variable theming with a no-flash toggle (respects system preference)
- ⚡ **Fast** — Vite build, ~113 kB gzipped JS
- 🎭 **Smooth motion** — Framer Motion entrance + scroll animations (respects `prefers-reduced-motion`)
- 📱 **Responsive** — mobile-first, works across breakpoints
- 🖱️ **Custom cursor** — only on precise-pointer (desktop) devices; touch keeps native behaviour
- 🔍 **SEO-ready** — Open Graph / Twitter meta, semantic markup, self-hosted résumé PDF

## Sections

- **Hero** — role, tagline, availability badge, and a “by the numbers” stats strip
- **About** — bio with an animated tech-tree visualization
- **Experience** — current role (QORRO) with quantified highlights, plus **Education**
- **Skills** — technologies grouped by category
- **Projects** — flagship professional work + selected personal/systems projects
- **Open Source** — merged pull requests to [`medusajs/medusa`](https://github.com/medusajs/medusa)
- **Contact** — email, phone, and social links

## Tech Stack

React 19 · TypeScript · Vite · Tailwind CSS · Framer Motion · Lucide Icons

## Getting Started

```bash
npm install      # install dependencies
npm run dev      # start dev server
npm run build    # type-check + production build
npm run preview  # preview the production build
npm run lint     # run ESLint
```

Requires Node.js 20.10+ (developed on Node 22).

## Project Structure

```
public/
├── favicon.svg
└── M.hitesh_resume.pdf      # self-hosted résumé (linked from the navbar/hero)
src/
├── components/                 # Navbar, Hero, About, Experience, Skills, Projects,
│                               # OpenSource, Contact, Footer, ThemeToggle, CustomCursor, TechTree
├── data/portfolio.ts           # all site content (single source of truth)
├── types/portfolio.ts          # content types
├── App.tsx
└── index.css                   # theme variables + global styles
```

## Customization

All content lives in **`src/data/portfolio.ts`** — personal info, experience, education, skills,
projects, and open-source contributions. Theme colors are CSS variables in `src/index.css`
(`:root` for light, `.dark` for dark) and mapped to Tailwind tokens in `tailwind.config.js`.

## Color Palette

| Token   | Light                | Dark                 |
| ------- | -------------------- | -------------------- |
| Accent  | `#d97757` coral      | `#e99170` coral      |
| Text    | `#2a2a2a`            | `#eae9e4`            |
| Surface | `#ffffff`            | `#1c1c20`            |
| Bg      | `#f5f5f0` paper      | `#101012` near-black |

## Deployment

Optimized for **Vercel** / **Netlify** (root-path deploys). The résumé link is root-relative
(`/Manneru_Hitesh_Amazon_ML_Summer_School_2026 (1) (1).pdf`); for a GitHub Pages *project* path, set Vite's `base` accordingly.

## Author

**M. Hitesh** — AI & Backend Engineer

- GitHub: [@Hitesh1065](https://github.com/Hitesh1065)
- LinkedIn: [M. Hitesh](YOUR_LINKEDIN_URL)
- Email: YOUR_EMAIL@gmail.com

## License

MIT
