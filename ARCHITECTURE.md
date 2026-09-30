# Architecture

A static, single page React 19 + TypeScript + Vite + Tailwind CSS 4 site. No backend, database, environment variables, or runtime API calls. The build output (`dist`) is plain static files.

## Module map

| Module                    | Responsibility                                                  | Public API                                |
| ------------------------- | --------------------------------------------------------------- | ----------------------------------------- |
| `src/main.tsx`            | Mounts React into `#root`.                                      | Entry point                               |
| `src/App.tsx`             | Composes layout and sections in page order.                     | `App`                                     |
| `src/data`                | All portfolio content and its types.                            | `src/data/index.ts`                       |
| `src/site/navigation.ts`  | Section anchors, labels, and icons in page order; logo path.    | `navSections`, `navSectionIds`, `logoUrl` |
| `src/components/layout`   | Page chrome: top `Nav` and mobile `BottomNav`.                  | `Nav`, `BottomNav`                        |
| `src/components/sections` | One file per page section; `ProjectCard` belongs to `Projects`. | One component per file                    |
| `src/components/notebook` | Content-free UI primitives of the notebook design system.       | `src/components/notebook/index.ts`        |
| `src/hooks`               | Browser state: persisted theme, active section observer.        | `useTheme`, `useActiveSection`            |
| `src/lib`                 | Framework-free helpers: class merging, new-tab link attributes. | `cn`, `newTabLinkProps`                   |
| `src/styles.css`          | Tailwind setup, theme tokens, and layout classes.               | CSS classes                               |
| `scripts/dev.mjs`         | `npm run dev` launcher.                                         | CLI                                       |

## Dependency rules

Enforced by `npm run arch` ([.dependency-cruiser.cjs](.dependency-cruiser.cjs)); CI fails on any violation.

```text
App -> layout, sections
layout -> notebook, hooks, site, data, lib
sections -> notebook, data, site, lib
notebook -> lib only
hooks -> (react only)
site -> (icons only)
data, lib -> nothing inside src
```

- No cycles and no orphan modules.
- Sections never import other sections or layout (except `Projects` -> `ProjectCard`).
- Everything outside `src/components/notebook` imports primitives through its `index.ts`.

## Where new code goes

- New or changed content: `src/data` only. Add a type in `types.ts` first.
- New page section: a file in `src/components/sections`, an entry in `navSections` if it should appear in navigation, and one line in `App.tsx`.
- New reusable visual element: `src/components/notebook`, exported from `index.ts`, receiving content through props.
- New browser behaviour (storage, observers, media queries): a hook in `src/hooks`.
- New pure helper: a file in `src/lib` named by responsibility. No `utils`, `helpers`, or `common` files.

## Decisions

- **Single package, layered folders.** The site is about 1,100 lines of TSX/TS. A monorepo or feature packages would add ceremony without benefit.
- **Navigation defined once.** `Nav` and `BottomNav` previously kept separate section lists; both now read `navSections`, which carries a full and a short label.
- **Hooks for side effects.** Theme persistence and section observation moved out of the nav components so the components only render.
- **No tests beyond static checks.** There is no logic beyond rendering static data. The refactor was verified by comparing server-rendered HTML before and after. Add Vitest when real logic appears (see growth signals).
- **No environment config.** Nothing is configurable per environment, so there is no `.env.example`.
- **Vite `--strictPort`.** The launcher fails fast on a busy port instead of silently changing it.

## Allowed duplication

- `index.html` inline theme script repeats the `portfolio-theme` key and theme values from `src/hooks/useTheme.ts`. It must run before React loads to avoid a theme flash, so it cannot import the module.
- `index.html`, `public/robots.txt`, and `public/sitemap.xml` each contain the canonical site URL; they are static files served as is.
- The dark and light theme blocks in `src/styles.css` share token names by design; values differ.
- The Node version range appears in `package.json` `engines` and in the check inside `scripts/dev.mjs`.

## Growth signals for the next pass

- Content edits by non-developers, or more than about 15 projects: move content to Markdown/MDX or a headless CMS.
- More than one page or deep links: add a router and move to `src/features/<page>` folders.
- Any non-trivial logic (filtering, search, forms): add Vitest and Testing Library, with tests next to the code.
- Any runtime config (analytics, API keys): add validated `import.meta.env` config in `src/config.ts` and `.env.example`.
- Bundle over about 300 kB gzip: lazy load sections below the fold.
