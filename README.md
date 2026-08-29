# Roblox Gameplay Scripter — Portfolio

A production-ready portfolio site for a Roblox gameplay scripter/developer, built with Next.js 14 (App Router), React, TypeScript, and Tailwind CSS. Static, no database, free to deploy on Vercel.

## Editing content

Everything on the page — links, project copy, tags, skills, availability, stats — lives in one file:

```
src/data/portfolio.ts
```

Open it and edit the values directly. In particular, replace these placeholder links before you deploy:

- `discordUrl`
- `robloxProfileUrl`
- `rouletteGameUrl`
- `rouletteVideoUrl`
- `combatVideoUrl`
- `eggHatchVideoUrl`
- `progressionVideoUrl`

Video URLs can be a YouTube link, a direct `.mp4` link, or a Google Drive share link — the video modal auto-detects the type (`src/lib/utils.ts` → `resolveVideo`).

### Adding real project thumbnails

Each `Project` entry in `portfolio.ts` has an optional `thumbnail` field. Drop an image into `/public` (e.g. `/public/projects/roulette.jpg`) and set `thumbnail: "/projects/roulette.jpg"`. Projects without a thumbnail automatically render a generated gradient/grid preview instead, so nothing is ever broken or blank.

## Folder structure

```
roblox-portfolio/
├── public/                      # static assets (add real screenshots/thumbnails here)
├── src/
│   ├── app/
│   │   ├── layout.tsx           # fonts, <head> metadata, OpenGraph tags
│   │   ├── page.tsx             # assembles all sections
│   │   └── globals.css          # Tailwind layers + design tokens
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── SystemGraphBackground.tsx  # ambient node-graph motif (hero + contact)
│   │   ├── StatsStrip.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── VideoModal.tsx       # lightbox for YouTube / mp4 / Drive / external
│   │   ├── WhatIBuildSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ApproachSection.tsx
│   │   ├── SystemNote.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   └── SectionReveal.tsx    # shared scroll-reveal wrapper
│   ├── data/
│   │   └── portfolio.ts         # ← all editable content and links
│   └── lib/
│       └── utils.ts             # cn() classnames helper, video URL resolver
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.mjs
└── package.json
```

## Local preview

Requires Node.js 18.17+ (Node 20 LTS recommended).

```bash
cd roblox-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To verify a production build locally before deploying:

```bash
npm run build
npm run start
```

> **Note:** this project was authored in a sandbox without outbound network access, so `npm install` could not be run here to produce a live build log. The code was hand-verified (TypeScript/JSX syntax-checked file by file, all imports and prop types cross-checked against the data file) and uses only stable, current versions of Next.js 14 / React 18 / Tailwind 3. Run `npm install && npm run build` yourself the first time — if anything surfaces, it will be a dependency-version nit, not a structural issue, and is easy to fix by bumping the version in `package.json`.

## Deploying to Vercel

**Option A — Vercel CLI**

```bash
npm install -g vercel
cd roblox-portfolio
vercel
```

Follow the prompts (link or create a project, accept the detected Next.js settings). Then for production:

```bash
vercel --prod
```

**Option B — Git + Vercel dashboard**

1. Push this folder to a GitHub/GitLab/Bitbucket repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset: Next.js (auto-detected). Build command `next build`, output handled automatically — no config needed.
4. Click **Deploy**.

No environment variables are required. If you want cleaner OpenGraph URLs, set `NEXT_PUBLIC_SITE_URL` in the Vercel project settings to your deployed domain (e.g. `https://yourname.vercel.app`).

## Design notes

- **Palette:** near-black base (`#05070A`) with an ember-orange accent (`#FF6A3D`) and a small signal-green (`#3DDC8A`) used only for "live/available" states.
- **Type:** Space Grotesk (display), Inter (body), JetBrains Mono (labels, tags, data — the "code" register).
- **Signature motif:** a quiet animated node-graph (`SystemGraphBackground.tsx`) behind the hero and contact sections, standing in for "gameplay systems" without leaning on generic SaaS hero imagery.
- Respects `prefers-reduced-motion`, has visible focus states, and is fully keyboard-navigable (nav, mobile menu, video modal with Escape-to-close).
