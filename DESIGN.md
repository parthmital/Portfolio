# Design

The portfolio is styled as a graphite-on-paper working notebook: each section is a ruled sheet, headings are hand lettered, and annotations read like margin notes. This file describes the design system as it exists in the code. Tokens and classes live in [src/styles.css](src/styles.css); primitives live in [src/components/notebook](src/components/notebook). Keep this file in sync with both.

## Signature idea

Numbered notebook pages. Every section is a `PaperSheet` with 35px ruled lines, an optional red margin line, and a handwritten eyebrow such as `// page 3`. Projects are labelled `case 01`, experience entries `record 01`. This one idea carries the identity; nothing else is decorative.

## Palette

Strict greyscale in OKLCH (chroma 0). Token names come from the notebook metaphor: `ink-blue` and `ink-red` are grey despite their names; they mark accent and margin roles, not hues. Dark is the default theme; light is set by `data-theme="light"` on `<html>`.

| Token            | Dark           | Light          | Role                                                    |
| ---------------- | -------------- | -------------- | ------------------------------------------------------- |
| `paper`          | `oklch(0.08)`  | `oklch(0.955)` | Page and default sheet background                       |
| `paper-2`        | `oklch(0.135)` | `oklch(0.925)` | Alternate sheet background (`PaperSheet variant="alt"`) |
| `paper-edge`     | `oklch(0.36)`  | `oklch(0.66)`  | Sheet borders, dividers, nav borders                    |
| `graphite`       | `oklch(0.94)`  | `oklch(0.19)`  | Primary text, headings, filled button                   |
| `graphite-soft`  | `oklch(0.76)`  | `oklch(0.34)`  | Body copy on secondary content, annotations             |
| `graphite-muted` | `oklch(0.56)`  | `oklch(0.49)`  | Labels, indices, inactive nav, icons at rest            |
| `ink-blue`       | `oklch(0.70)`  | `oklch(0.45)`  | Focus ring, hero stamp                                  |
| `ink-red`        | `oklch(0.62)`  | `oklch(0.50)`  | Notebook margin line (58% opacity)                      |
| `rule-line`      | `oklch(0.25)`  | `oklch(0.82)`  | Ruled lines on sheets                                   |

The shadcn-style semantic tokens (`background`, `foreground`, `border`, `ring`, and so on) map onto these and are kept for Tailwind utilities. A fixed SVG noise layer on `body::before` adds paper grain (8% soft-light in dark, 5% multiply in light). The browser `theme-color` is `#000000` in dark and `#f2f2f2` in light.

## Typography

Four families, loaded from Google Fonts in `index.html`:

| Role    | Family              | Token / utility | Used for                                        |
| ------- | ------------------- | --------------- | ----------------------------------------------- |
| Body    | Inter               | `font-sans`     | Paragraphs, labels, buttons, navigation         |
| Display | Architects Daughter | `font-arch`     | `h1` to `h4`, project titles, values, logo text |
| Scrawl  | Kalam               | `font-scrawl`   | Role line, taglines, dates, skill tags          |
| Hand    | Caveat              | `font-hand`     | Eyebrows, indices, annotations, hero stamp      |

Scale (utilities in `styles.css` and the sizes used in components):

| Use                       | Size                                                   |
| ------------------------- | ------------------------------------------------------ |
| Hero name (`.hero-title`) | `clamp(3rem, 9vw, 6.75rem)`, line height 0.95, max 9ch |
| Section heading           | 1.875rem, 2.25rem from `md`                            |
| Card title                | 1.5rem                                                 |
| Subtitle / role           | 1.25rem, 1.5rem from `md`                              |
| Body                      | 1rem, line height 1.625                                |
| Secondary body, captions  | 0.875rem                                               |
| Labels                    | 0.75rem uppercase                                      |
| Mobile nav labels         | 10px                                                   |

The hero title is the one place size follows the viewport, and it is clamped at both ends. Mobile nav labels sit below the 14px body minimum; each sits under a 20px icon and inside a 48px-wide target.

## Spacing and layout

- Page container: `max-w-6xl` (72rem), centred, side padding 16px, 24px from `sm`, 32px from `md`. Vertical gap between sheets 20px, 32px from `md`.
- Top padding clears the fixed 64px nav. Bottom padding of 96px below `md` clears the mobile bottom nav.
- Sheet padding: 24px / 32px on phones, growing to 64px / 56px at `lg`. With a margin line, content gets an extra 24px (`sm`) or 40px (`md`) left offset.
- Section anchors use `scroll-mt-24` so headings are not hidden under the nav.
- Radius: 6px for sheets and notecards, `rounded-md` for controls, fully rounded for tags.

## Breakpoints

Tailwind defaults. What changes at each:

| Breakpoint | Width  | Changes                                                                                                                                                                                                           |
| ---------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| base       | 0      | Single column; bottom nav; hero proof points in 2 columns; margin line hidden                                                                                                                                     |
| `sm`       | 640px  | Margin line shown at 28px; focus areas in 2 columns; contact cards in 3 columns                                                                                                                                   |
| `md`       | 768px  | Top nav links shown, bottom nav hidden; margin line at 56px; proof points in 4 columns; About in 2 columns (0.85fr / 1.15fr); projects in 2 columns, an odd last card spans both; skill rows split label and tags |
| `lg`       | 1024px | Larger sheet padding only                                                                                                                                                                                         |

## Components

Primitives in `src/components/notebook` (content-free, props only):

| Component        | Purpose                                         | Variants and states                                                       |
| ---------------- | ----------------------------------------------- | ------------------------------------------------------------------------- |
| `PaperSheet`     | Section wrapper with ruled lines and margin     | `default` / `alt` background; `withMargin` on or off                      |
| `SectionHeading` | Eyebrow, `h2` with pencil underline, annotation | Eyebrow and annotation optional                                           |
| `Eyebrow`        | Handwritten `// page n` label                   | None                                                                      |
| `Button`         | Action or link styled as a button               | `filled`, `outline`, `ghost`; `sm`, `md`; renders `<a>` when `href` given |
| `ExpandToggle`   | "Read more" / "Show less" text button           | Collapsed or expanded, exposed via `aria-expanded`                        |
| `ContactCard`    | Bordered link with label, value, arrow icon     | Hover darkens border and arrow                                            |

Section level patterns in `styles.css`:

- `.notecard`: framed box for projects, experience, and education. The only card style; cards are never nested.
- `.tag`: rounded pill for skill items, in Kalam.
- `.hero-stamp`: bordered label rotated -1.4deg, the single tilted element on the page.
- `.hero-proof`: ruled grid of four figures from the resume.
- `.field-strip`, `.skill-row`, `.education-row`: rows separated by rules instead of boxes.

States in use:

| State          | Treatment                                                                                                                   |
| -------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Hover          | Text or border moves one step towards `graphite`; `.retrace` raises contrast; project cards lift 2px (not on touch devices) |
| Focus visible  | 2px `ink-blue` outline, 3px offset, on every focusable element                                                              |
| Active section | Mobile nav item inverts to `graphite` background, `paper` text, `aria-current="page"`                                       |
| Pressed        | Theme toggle exposes `aria-pressed`                                                                                         |
| Expanded       | Project summary drops `line-clamp-3`; experience shows all bullets                                                          |
| Scrolled       | Top nav goes from 35% to 90% opaque paper with a shadow after 12px of scroll                                                |

There are no forms, loading, empty, or error states because all content is static and always present.

## Icons

Lucide React only, at 1.5 stroke (2 when active in the mobile nav). Navigation icons are defined once in `src/site/navigation.ts`: User, BriefcaseBusiness, FolderKanban, Wrench, GraduationCap, Mail. Other icons: Sun and Moon (theme), ArrowRight (hero call to action), ExternalLink (project titles), ArrowUpRight (contact cards). The logo is `public/Portfolio Website.svg`, inverted in light mode.

## Motion

- Transitions are 180ms ease on colour, border, filter, shadow, and transform.
- Smooth scrolling for in-page anchors.
- `prefers-reduced-motion: reduce` disables smooth scrolling and cuts animations and transitions to 0.01ms; the mobile nav also scrolls instantly.
- Nothing animates on load.

## Copy and terminology

- Section names match across nav, headings, and anchors: About, Experience (short label "Work"), Projects ("Selected Projects" as heading), Skills, Education, Contact ("Get in touch" as heading).
- Calls to action name the destination: "See projects", "Get in touch", "Resume".
- Annotations are short first-person margin notes, not marketing copy.
- Figures in the hero come from the resume; do not add numbers that are not on it.

## Decisions

- **Greyscale only.** Hierarchy comes from value and typeface, not hue, which keeps the notebook look and makes both themes easy to balance.
- **Dark by default.** The inline script in `index.html` applies the stored theme before React loads, so there is no flash of the wrong theme.
- **Rules instead of boxes.** Most groups are separated by lines, so the ruled paper stays visible and cards are reserved for repeated items.
- **Bottom nav on mobile.** Six sections are reachable with one thumb tap without a menu overlay.
- **Margin line from `sm` up.** On phones it would eat width, so it is hidden.

## Known deviations

- Mobile nav labels are 10px, below the 14px body minimum.
- Some focus and selection details rely on browser defaults: text selection colour, caret, and scrollbars are not styled.
- Visual rendering was not checked with screenshots when this file was written; it is derived from the source.
