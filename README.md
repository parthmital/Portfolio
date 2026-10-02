# Parth Mital Portfolio

A single page personal portfolio website for Parth Mital. It presents profile details, experience, selected projects, skills, education, resume access, and contact links through a notebook styled React interface.

The site is fully static: there is no backend, database, environment variable, or runtime API call. The build output in `dist` is plain HTML, CSS, and JavaScript.

## Table of contents

1. [Quick start](#quick-start)
2. [Overview](#overview)
3. [Technology stack](#technology-stack)
4. [Repository structure](#repository-structure)
5. [Scripts and commands](#scripts-and-commands)
6. [Updating content](#updating-content)
7. [Code quality checks](#code-quality-checks)
8. [Build and deployment](#build-and-deployment)
9. [Repository metrics](#repository-metrics)
10. [Security notes](#security-notes)
11. [Troubleshooting](#troubleshooting)
12. [Known limitations](#known-limitations)
13. [Contributing](#contributing)
14. [Licence and contact](#licence-and-contact)

## Quick start

Prerequisites:

- Node.js `^20.19.0 || >=22.12.0` (from `engines` in `package.json`; CI uses the version in `.nvmrc`, which is `22`).
- npm.

Run this from the repository root:

```powershell
npm run dev
```

`npm run dev` runs [scripts/dev.mjs](scripts/dev.mjs), the only launcher. It:

1. Checks that the Node.js version is supported, and stops with a clear message if not.
2. Runs `npm ci` on the first run, or when `package-lock.json` changed since the last install. The lockfile hash is stored in `node_modules/.dev-lock-hash`, so later runs skip installation.
3. Stops with a clear message if port `5173` is busy.
4. Starts Vite on `http://localhost:5173/` with `--strictPort` and opens the browser. The browser is not opened when the `CI` environment variable is set.
5. Stops the whole Vite process tree on Ctrl+C.

Expected result: the browser opens the portfolio at `http://localhost:5173/`. Edits under `src` reload in place.

## Overview

The page renders seven sections, in this order (from `src/App.tsx`):

1. Hero
2. About
3. Experience
4. Selected Projects
5. Skills
6. Education
7. Contact

Features verified in the source:

- Top navigation on desktop and a fixed bottom navigation on mobile (below the `md` breakpoint). The bottom bar highlights the section currently in view.
- Light and dark theme toggle. The choice is stored in `localStorage` under `portfolio-theme`; dark is the default.
- "Read more" and "Show less" toggles for project summaries and experience bullets.
- Resume link to `/Parth_Mital_Resume.pdf`, opened in a new tab.
- Contact cards for email, GitHub, and LinkedIn.
- SEO metadata, Open Graph and Twitter card tags, JSON-LD, `robots.txt`, and `sitemap.xml`.
- Reduced motion support in CSS and in mobile navigation scrolling.

How the code is organised, and the rules that keep it modular, are in [ARCHITECTURE.md](ARCHITECTURE.md). The visual system (palette, type, components, and states) is in [DESIGN.md](DESIGN.md).

## Technology stack

Versions are the installed versions from `package-lock.json`.

| Technology                  |       Version | Purpose and where it is used                                               |
| --------------------------- | ------------: | -------------------------------------------------------------------------- |
| React and React DOM         |        19.2.5 | Renders the UI. Mounted in `src/main.tsx`; components in `src/components`. |
| TypeScript                  |         5.9.3 | Types for components and portfolio data (`src/data/types.ts`).             |
| Vite                        |         7.3.2 | Dev server and production build (`vite.config.ts`).                        |
| `@vitejs/plugin-react`      |         5.2.0 | React support in Vite.                                                     |
| Tailwind CSS                |         4.2.4 | Utility classes and theme tokens, configured in `src/styles.css`.          |
| `@tailwindcss/vite`         |         4.2.4 | Tailwind integration with Vite.                                            |
| `tw-animate-css`            |         1.4.0 | Animation utilities imported in `src/styles.css`.                          |
| Lucide React                |       0.575.0 | SVG icons in navigation, buttons, and cards.                               |
| `clsx` and `tailwind-merge` | 2.1.1 / 3.5.0 | Conditional class merging through `cn` in `src/lib/cn.ts`.                 |
| ESLint                      |        9.39.4 | Linting (`eslint.config.js`).                                              |
| Prettier                    |         3.8.3 | Formatting with tabs and Tailwind class sorting (`.prettierrc.json`).      |
| dependency-cruiser          |        18.4.0 | Module boundary checks (`.dependency-cruiser.cjs`).                        |
| jscpd                       |         5.3.3 | Duplicate code detection (`.jscpd.json`).                                  |

Fonts are loaded from Google Fonts in `index.html`: Inter, Architects Daughter, Kalam, and Caveat.

## Repository structure

```text
.
|-- .github/workflows/ci.yml    CI: npm ci, then npm run check
|-- .dependency-cruiser.cjs     Module boundary rules (npm run arch)
|-- .jscpd.json                 Duplicate detection settings (npm run dupes)
|-- .nvmrc                      Node.js version used by CI
|-- .prettierrc.json            Formatting rules
|-- eslint.config.js            Lint rules
|-- index.html                  Metadata, fonts, theme bootstrap script, React root
|-- vite.config.ts              React and Tailwind plugins, @ alias
|-- tsconfig.json               Compiler settings, @/* path alias
|-- public/                     Served as is: resume PDF, logo SVG, robots.txt, sitemap.xml
|-- scripts/dev.mjs             The npm run dev launcher
`-- src/
    |-- main.tsx                Mounts React
    |-- App.tsx                 Composes navigation and the seven sections
    |-- styles.css              Theme tokens, typography utilities, layout classes
    |-- data/                   All portfolio content and its types
    |-- site/navigation.ts      Section anchors, labels, icons, logo path
    |-- components/layout/      Nav (top) and BottomNav (mobile)
    |-- components/sections/    One file per page section, plus ProjectCard
    |-- components/notebook/    Reusable UI primitives, exported from index.ts
    |-- hooks/                  useTheme, useActiveSection
    `-- lib/                    cn (class merging), newTabLinkProps (link targets)
```

## Scripts and commands

Run all commands from the repository root.

| Command                | What it does                                                           |
| ---------------------- | ---------------------------------------------------------------------- |
| `npm run dev`          | Installs dependencies if needed, then starts Vite on port 5173.        |
| `npm run build`        | Type checks with `tsc`, then builds `dist` with Vite.                  |
| `npm run preview`      | Serves the built `dist` folder. Run `npm run build` first.             |
| `npm run lint`         | Runs ESLint.                                                           |
| `npm run typecheck`    | Runs `tsc`.                                                            |
| `npm run format`       | Formats all files with Prettier. This rewrites files.                  |
| `npm run format:check` | Fails if any file is not formatted.                                    |
| `npm run arch`         | Checks module boundaries and import cycles with dependency-cruiser.    |
| `npm run dupes`        | Fails on any duplicated code block in `src`.                           |
| `npm run check`        | Runs format check, lint, arch, dupes, and build. CI runs this command. |

## Updating content

All text shown on the page lives in `src/data`, typed by `src/data/types.ts`:

| What to change                                 | File                                                    |
| ---------------------------------------------- | ------------------------------------------------------- |
| Name, role, tagline, email, links, resume path | `src/data/profile.ts` (`profile`)                       |
| About paragraphs                               | `src/data/profile.ts` (`about`)                         |
| Experience, education, and skill groups        | `src/data/profile.ts`                                   |
| Projects                                       | `src/data/projects.ts`                                  |
| Resume file                                    | `public/Parth_Mital_Resume.pdf`                         |
| Canonical URL or last modified date            | `index.html`, `public/robots.txt`, `public/sitemap.xml` |

A few short strings are written directly in section components: the Hero focus areas and proof points (`Hero.tsx`), the About working notes (`About.tsx`), and section headings and annotations. Anything placed in these files is shipped to the browser.

## Code quality checks

```powershell
npm run check
```

This is the same command CI runs on every push to `main` and every pull request ([.github/workflows/ci.yml](.github/workflows/ci.yml)). There is no automated test suite; see [ARCHITECTURE.md](ARCHITECTURE.md) for why and when one should be added.

## Build and deployment

```powershell
npm run build
```

The deployable output is the `dist` folder. The repository has no hosting configuration and CI does not deploy. `index.html`, `robots.txt`, and `sitemap.xml` reference `https://parthmital-portfolio.vercel.app/` as the canonical URL.

Settings for any static host:

| Setting          | Value           |
| ---------------- | --------------- |
| Build command    | `npm run build` |
| Output directory | `dist`          |
| Node.js version  | `22` (`.nvmrc`) |

## Repository metrics

Measured on 2 October 2026 with Node.js v24.15.0 and npm 12.1.0.

| Metric                  | Value                                   | Source                                         |
| ----------------------- | --------------------------------------- | ---------------------------------------------- |
| npm scripts             | 10                                      | `package.json`                                 |
| Direct dependencies     | 8 runtime, 15 dev                       | `package.json`                                 |
| Page sections           | 7                                       | `src/App.tsx`                                  |
| Projects                | 5                                       | `src/data/projects.ts`                         |
| Experience entries      | 2                                       | `src/data/profile.ts`                          |
| Education entries       | 3                                       | `src/data/profile.ts`                          |
| Skill groups            | 5 technical, 4 creative                 | `src/data/profile.ts`                          |
| Source lines in `src`   | 1807 (27 files)                         | `npm run dupes`                                |
| Duplicated lines        | 0                                       | `npm run dupes`                                |
| Modules checked by arch | 34, 0 violations                        | `npm run arch`                                 |
| JS bundle               | 248.73 kB raw, 79.94 kB gzip            | `npm run build`                                |
| CSS bundle              | 28.65 kB raw, 6.56 kB gzip              | `npm run build`                                |
| Environment variables   | 0                                       | No `import.meta.env` or `process.env` in `src` |
| Test coverage           | Not measured in the current repository. | No test framework configured                   |

## Security notes

- No secrets or environment variables are needed or read.
- The only stored value is the theme preference in `localStorage`.
- Off-page links open in a new tab with `rel="noopener noreferrer"`; in-page anchors and `mailto:` links stay in the current tab (`src/lib/links.ts`).
- No Content Security Policy is configured, and fonts load from Google Fonts domains.
- Everything in `src/data` and `public` is public. Do not commit private contact details or credentials.

## Troubleshooting

| Problem                              | Likely cause                                       | Diagnostic command                       | Resolution                                                        |
| ------------------------------------ | -------------------------------------------------- | ---------------------------------------- | ----------------------------------------------------------------- |
| `[dev] Node ... is unsupported`      | Node.js is older than the `engines` range          | `node --version`                         | Install Node.js 20.19 or newer in 20.x, or 22.12 or newer.        |
| `[dev] Port 5173 is busy`            | Another process is using the port                  | `Get-NetTCPConnection -LocalPort 5173`   | Stop that process and rerun `npm run dev`.                        |
| `[dev] Run this through npm run dev` | `scripts/dev.mjs` was started with `node` directly | None                                     | Use `npm run dev`.                                                |
| `[dev] npm ci failed`                | Network error or a broken `node_modules`           | `npm ci`                                 | Fix the error shown above it, then rerun.                         |
| `npm run arch` fails                 | An import breaks a module boundary rule            | `npm run arch`                           | Move the code as described in [ARCHITECTURE.md](ARCHITECTURE.md). |
| `npm run format:check` fails         | Files are not formatted                            | `npm run format:check`                   | Run `npm run format`, then review the changes.                    |
| Theme does not persist               | Browser storage is blocked or cleared              | Browser site data settings               | Allow site storage; otherwise dark is used.                       |
| Resume link returns 404              | PDF missing from `public`                          | `Get-Item public/Parth_Mital_Resume.pdf` | Restore the PDF at that path and rebuild.                         |

## Known limitations

- No automated tests; only static checks and the build.
- Content changes need a source edit and a rebuild; there is no CMS.
- No analytics, monitoring, or deployment pipeline.
- No licence file.

## Contributing

1. Create a branch.
2. Run `npm run dev` and make focused changes, following [ARCHITECTURE.md](ARCHITECTURE.md) for where code goes and [DESIGN.md](DESIGN.md) for visual rules.
3. Run `npm run check` and fix anything it reports.
4. Open a pull request; CI runs the same check.

Code style: TypeScript function components, `@/` imports, tabs, and `cn` for conditional classes. Prettier and ESLint enforce the rest.

## Licence and contact

No licence file is present, so the code may not be reused or redistributed without the owner's permission.

Contact details, as rendered in the Contact section (`src/data/profile.ts`):

| Channel  | Value                                |
| -------- | ------------------------------------ |
| Email    | `parth.mital.2004@gmail.com`         |
| GitHub   | `https://github.com/parthmital`      |
| LinkedIn | `https://linkedin.com/in/parthmital` |
