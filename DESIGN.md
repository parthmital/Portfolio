# Design

The portfolio is styled as a graphite-on-paper working notebook: each section is a ruled sheet, headings are hand lettered, and annotations read like margin notes. This file describes the design system as it exists in the code. Tokens and classes live in [src/styles.css](src/styles.css); primitives live in [src/components/notebook](src/components/notebook). Keep this file in sync with both.

## Signature idea

Numbered notebook pages. Every section is a `PaperSheet` with 35px ruled lines, an optional red margin line, and a handwritten eyebrow such as `// page 3`, numbered from the section order in `src/site/navigation.ts`. Projects are labelled `case 01`, experience entries `record 01`. This one idea carries the identity; nothing else is decorative.

## Palette

Strict greyscale in OKLCH (chroma 0). Token names come from the notebook metaphor: `ink-blue` and `ink-red` are grey despite their names; they mark accent and margin roles, not hues. Dark is the default theme; light is set by `data-theme="light"` on `<html>`. Every theme difference is a token value; no component class has a light-mode override.

| Token            | Dark                      | Light                 | Role                                                     |
| ---------------- | ------------------------- | --------------------- | -------------------------------------------------------- |
| `paper`          | `oklch(0.08)`             | `oklch(0.955)`        | Page and default sheet background; text on filled items  |
| `paper-2`        | `oklch(0.135)`            | `oklch(0.925)`        | Alternate sheet background; pressed state fill           |
| `paper-edge`     | `oklch(0.36)`             | `oklch(0.66)`         | Sheet borders, dividers, rules between rows, nav borders |
| `graphite`       | `oklch(0.94)`             | `oklch(0.19)`         | Primary text, headings, filled button, text selection    |
| `graphite-soft`  | `oklch(0.76)`             | `oklch(0.34)`         | Secondary text, annotations                              |
| `graphite-muted` | `oklch(0.56)`             | `oklch(0.49)`         | Labels, indices, inactive nav, icons at rest             |
| `ink-blue`       | `oklch(0.70)`             | `oklch(0.45)`         | Focus ring, hero stamp                                   |
| `ink-red`        | `oklch(0.62)`             | `oklch(0.50)`         | Notebook margin line (58% opacity)                       |
| `rule-line`      | `oklch(0.25)`             | `oklch(0.82)`         | Ruled lines on sheets                                    |
| `card`           | `oklch(0.16 / 0.84)`      | `oklch(0.965 / 0.86)` | Notecard and tag fill                                    |
| `card-edge`      | `oklch(0.44 / 0.58)`      | `oklch(0.68 / 0.7)`   | Notecard, tag, and hero stamp border                     |
| `desk`           | `oklch(0.10)`             | `oklch(0.90)`         | Top of the page background gradient                      |
| `sheet-shadow`   | 1px highlight, soft shade | none                  | Sheet elevation                                          |
| `shadow-ink`     | `black`                   | `transparent`         | Nav bar shadows                                          |
| `grain-*`        | 8%, soft-light            | 5%, multiply          | Paper grain layer on `body::before`                      |
| `logo-filter`    | none                      | `invert(1)`           | Logo colour per theme                                    |

Only the colour tokens above that are needed as Tailwind utilities are registered in `@theme` (`paper`, `paper-2`, `paper-edge`, `graphite*`, `ink-*`). The browser `theme-color` is `#000000` in dark and `#f2f2f2` in light.

## Typography

Four families, loaded from Google Fonts in `index.html` with only the weights in use:

| Role    | Family              | Weight   | Token / utility | Used for                                                        |
| ------- | ------------------- | -------- | --------------- | --------------------------------------------------------------- |
| Body    | Inter               | 400, 500 | `font-sans`     | Paragraphs, labels, buttons, navigation                         |
| Display | Architects Daughter | 400      | `font-arch`     | `h1` to `h4`, card titles, figures, education values, logo text |
| Scrawl  | Kalam               | 400      | `font-scrawl`   | Role line, dates, skill tags                                    |
| Hand    | Caveat              | 500      | `font-hand`     | Eyebrows, indices, annotations, hero stamp                      |

Scale:

| Use                       | Size                                                      |
| ------------------------- | --------------------------------------------------------- |
| Hero name (`.hero-title`) | 3rem, 4.5rem from `sm`, 6rem from `md`, 6.75rem from `lg` |
| Section heading           | 1.875rem, 2.25rem from `md`                               |
| Card title                | 1.5rem                                                    |
| Subtitle / role           | 1.25rem, 1.5rem from `md`                                 |
| Body                      | 1rem, line height 1.625                                   |
| Secondary body, captions  | 0.875rem                                                  |
| Annotations, indices      | 1.125rem (Caveat runs small, so this reads like 0.875rem) |
| Labels                    | 0.75rem uppercase                                         |
| Mobile nav labels         | 11px                                                      |

Type steps at breakpoints; no size scales with the viewport width.

## Spacing and layout

- Page container: `max-w-6xl` (72rem), centred, side padding 16px, 24px from `sm`, 32px from `md`. Vertical gap between sheets 20px, 32px from `md`.
- Top padding clears the fixed 64px nav. Bottom padding of 96px below `md` clears the mobile bottom nav.
- Sheet padding: 24px / 32px on phones, growing to 64px / 56px at `lg`. With a margin line, content gets an extra 24px (`sm`) or 40px (`md`) left offset.
- Section anchors use `scroll-mt-24` so headings are not hidden under the nav.
- Radius: 6px for sheets, notecards, and controls; fully rounded for tags.
- Touch targets: every link and button is at least 44px tall (`min-h-11`), including card title links and disclosure buttons. Links inside running text are exempt.

## Breakpoints

Tailwind defaults. What changes at each:

| Breakpoint | Width  | Changes                                                                                                                                                                                                      |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| base       | 0      | Single column; bottom nav; hero figures in a 2 by 2 ruled grid; margin line hidden                                                                                                                           |
| `sm`       | 640px  | Margin line shown at 28px; focus areas in 2 columns; contact cards in 3 columns; card headers put dates on the right                                                                                         |
| `md`       | 768px  | Top nav links shown, bottom nav hidden; margin line at 56px; figures in 4 columns; About in 2 columns (0.85fr / 1.15fr); projects in 2 columns, an odd last card spans both; skill rows split label and tags |
| `lg`       | 1024px | Larger sheet padding; largest hero name                                                                                                                                                                      |

Checked with screenshots at 320, 390, 768, and 1280px in both themes: no horizontal scroll and no clipped text.

## Components

Primitives in `src/components/notebook` (content-free, props only):

| Component        | Purpose                                                      | Variants and states                                                                             |
| ---------------- | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| `PaperSheet`     | Section wrapper with ruled lines and margin                  | `default` / `alt` background; `withMargin` on or off                                            |
| `SectionHeading` | Eyebrow, `h2` with pencil underline, annotation              | Annotation optional                                                                             |
| `ButtonLink`     | Call to action; always an anchor                             | `filled`, `outline`; hover, pressed, focus                                                      |
| `Highlights`     | Summary, then its points behind a "Show n highlights" button | Collapsed or expanded via `aria-expanded`, `aria-controls`; the list is `hidden` when collapsed |
| `ContactCard`    | Bordered link with label, value, arrow icon                  | Hover darkens border and arrow                                                                  |

Layout components in `src/components/layout`:

- `SiteNavigation`: skip link ("Skip to content", shown on focus), `TopNav`, `BottomNav`, and the shared active section.
- `TopNav`: logo, section links (current one underlined, `aria-current="location"`), theme toggle, resume link.
- `BottomNav`: six icon and label links below `md`; current one inverted.

Section level patterns in `styles.css`:

- `.notecard`: framed box for projects, experience, and education. The only card style; cards are never nested.
- `.tag`: rounded pill for skill items, in Kalam.
- `.hero-stamp`: bordered label rotated -1.4deg, the single tilted element on the page.
- `.hero-proof`: ruled `<dl>` of four figures from the experience and project text.
- `.field-strip`, `.skill-row`, `.education-row`: rows separated by rules instead of boxes.

States in use:

| State         | Treatment                                                                                                                   |
| ------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Hover         | Text or border moves one step towards `graphite`; `.retrace` raises contrast; project cards lift 2px (not on touch devices) |
| Pressed       | Outline controls and inactive mobile nav items fill with `paper-2`; the filled button darkens to `graphite-muted`           |
| Focus visible | 2px `ink-blue` outline, 3px offset, on every focusable element; `main` takes focus from the skip link without an outline    |
| Current       | Mobile nav item inverts to `graphite` background, `paper` text; desktop nav link turns `graphite` and is underlined         |
| Toggled       | Theme toggle exposes `aria-pressed`                                                                                         |
| Expanded      | `Highlights` shows the bullet list and the button reads "Hide highlights"                                                   |
| Scrolled      | Top nav goes from 35% to 90% opaque paper with a shadow after 12px of scroll                                                |
| Selection     | Selected text is `paper` on `graphite`; the caret is `graphite`                                                             |
| Scrollbars    | `scrollbar-color` uses `paper-edge` on `paper`                                                                              |

There are no forms, loading, empty, or error states because all content is static and always present. No browser-native widgets are used (no `select`, `dialog`, `details`, native tooltips, or pickers).

## Icons

Lucide React only, at 1.5 stroke (2 for the current item in the mobile nav). Lucide marks icons `aria-hidden`; any meaning they carry is in text (for example, project links end with a visually hidden "(GitHub, opens in a new tab)"). Navigation icons are defined once in `src/site/navigation.ts`: User, BriefcaseBusiness, FolderKanban, Wrench, GraduationCap, Mail. Other icons: Sun and Moon (theme), ArrowRight (hero call to action), ExternalLink (project titles), ArrowUpRight (contact cards). The logo is `public/Portfolio Website.svg`, inverted in light mode, and decorative (`alt=""`) because the name follows it.

## Motion

- Transitions are 180ms ease on colour, border, filter, shadow, and transform.
- Smooth scrolling for in-page anchors, from CSS only.
- `prefers-reduced-motion: reduce` disables smooth scrolling and cuts animations and transitions to 0.01ms.
- Nothing animates on load.

## Copy and terminology

- Section names match across nav, headings, and anchors: About, Experience (short label "Work"), Projects ("Selected Projects" as heading), Skills, Education, Contact ("Get in touch" as heading).
- Calls to action name the destination: "See projects", "Get in touch", "Resume". Disclosures name their content and count: "Show 5 highlights", "Hide highlights".
- Annotations are short first-person margin notes, not marketing copy.
- Hero figures come from the experience and project text in `src/data`; do not add numbers that are not stated there.

## Decisions

- **Greyscale only.** Hierarchy comes from value and typeface, not hue, which keeps the notebook look and makes both themes easy to balance.
- **Dark by default.** The inline script in `index.html` applies the stored theme before React loads, so there is no flash of the wrong theme.
- **Rules instead of boxes.** Most groups are separated by lines, so the ruled paper stays visible and cards are reserved for repeated items.
- **Summary first, points on request.** Each project and role shows one sentence; the full points are one tap away. The cards stay scannable and the same height in a row, with the toggle pinned to the bottom.
- **Bottom nav on mobile.** Six sections are reachable with one thumb tap without a menu overlay.
- **Margin line from `sm` up.** On phones it would eat width, so it is hidden.

## Known deviations

- Mobile nav labels are 11px, below the 14px body minimum. Six labels must fit a 320px screen; each sits under a 20px icon inside a target of at least 48 by 44px.
- Skill counts and contact card labels are 12px secondary labels.
