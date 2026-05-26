# Parth Mital Portfolio

A personal portfolio website showcasing projects, skills, and experience through a distinctive notebook-inspired interface.

---

## Audience Navigation Guide

**Recruiters**: Jump to [Key Features](#key-features), [Tech Stack](#tech-stack), and [Projects Overview](#overview) to evaluate technical breadth and project complexity.

**Developers**: Review [System Architecture](#system-architecture) and [Developer Guide](#developer-guide) for implementation details and code organisation.

**End Users**: See [How to Use](#how-to-use) for navigation tips and [Installation Guide](#installation-guide) if you want to run this locally.

**Contributors**: Check [Contribution Guide](#contribution-guide) for setup and contribution workflows.

**Casual Visitors**: Browse [Overview](#overview) and [Community Value](#community-value) to understand what this represents.

---

## Overview

This is a single-page portfolio application designed to present professional work in an engaging, readable format. The interface mimics a physical notebook with ruled pages, margin lines, and handwritten-style typography. Content is organised into six sections that visitors can navigate sequentially or jump to directly.

From a technical standpoint, this is a React-based static site built with modern tooling. It uses TypeScript for type safety, Vite for rapid development and optimised builds, and Tailwind CSS for component styling. The architecture follows a clear separation between data (content definitions), components (UI building blocks), and presentation (section layouts).

---

## Problem Statement

Traditional portfolio websites often suffer from:

- Overused templates that fail to differentiate candidates
- Cluttered layouts that overwhelm visitors with information
- Poor mobile experiences with tiny text and difficult navigation
- Slow load times due to heavy frameworks and unoptimised assets
- Generic presentation that does not reflect the builder's personality or attention to detail

This project solves these issues by:

- Implementing a memorable visual metaphor (notebook aesthetic) that stands out
- Structuring information hierarchically with progressive disclosure
- Providing optimised mobile navigation through a dedicated bottom bar
- Using lightweight dependencies and modern build tools for fast performance
- Demonstrating craft through attention to typographic detail, spacing, and interaction design

---

## Key Features

### User-Facing Features

- **Notebook-Inspired Design**: Dark-themed interface with ruled paper sheets, margin lines, and handwritten fonts that creates a distinctive visual identity
- **Responsive Layout**: Adapts seamlessly from mobile to desktop, with appropriate navigation patterns for each (bottom nav on mobile, top nav on desktop)
- **Project Filtering**: Interactive field-based filtering allowing visitors to view projects by category (Full-Stack, Machine Learning, Computer Vision, etc.)
- **Expandable Project Descriptions**: Two-line summaries with toggle to reveal full project details, keeping the interface clean while preserving depth
- **Smooth Scrolling Navigation**: Anchor links with scroll-to-section functionality and active section highlighting
- **Resume Access**: Direct download link to PDF resume from the navigation bar
- **Contact Integration**: Clickable email, GitHub, and LinkedIn links with visual feedback

### Technical Features

- **Component-Based Architecture**: Reusable UI primitives (PaperSheet, Button, SectionHeading) that enforce consistency
- **Type-Safe Data Layer**: TypeScript interfaces defining all content structures (Profile, Project, Education, SkillGroup)
- **CSS-First Design System**: Custom CSS properties and Tailwind utilities implementing a coherent colour palette and spacing scale
- **Mobile-First Bottom Navigation**: Intersection Observer-based active section tracking with touch-friendly targets
- **Path Aliases**: Clean import statements using @/ prefix mapped to src directory
- **Code Quality Tooling**: ESLint and Prettier configuration for consistent code style

---

## Tech Stack

| Category   | Technology                    | Version |
| ---------- | ----------------------------- | ------- |
| Framework  | React                         | 19.2.0  |
| Language   | TypeScript                    | 5.8.3   |
| Build Tool | Vite                          | 7.3.1   |
| Styling    | Tailwind CSS                  | 4.2.1   |
| Icons      | Lucide React                  | 0.575.0 |
| Utilities  | clsx, tailwind-merge          | Latest  |
| Linting    | ESLint with TypeScript plugin | 9.32.0  |
| Formatting | Prettier with Tailwind plugin | 3.7.3   |

### Build Configuration

- ES2022 target with modern browser support
- React JSX transform for cleaner component syntax
- Path mapping via TypeScript and Vite configuration
- Strict TypeScript checking enabled
- NoEmit configuration for pure type checking

---

## System Architecture

The application follows a layered architecture with clear responsibilities:

**Presentation Layer**: React components render UI based on props and state. Components are organised into two categories:

- Notebook primitives (presentational components with no business logic)
- Section components (page sections that compose primitives and wire data)

**Data Layer**: Static TypeScript files export typed data structures containing all content (profile information, project listings, education history, skill categories). This approach eliminates the need for a backend or CMS while maintaining type safety.

**Utility Layer**: Helper functions for common operations (class name merging via cn utility) live in a dedicated lib directory.

**Styling Layer**: A CSS-first design system implemented through:

- Tailwind CSS v4 with inline theme configuration
- Custom CSS properties for the notebook colour palette (paper, graphite, ink-blue, ink-red, rule-line)
- CSS utility classes for repeated patterns (paper-sheet, notecard, annotation, tag)

**Build Layer**: Vite handles module resolution, TypeScript compilation, and production bundling. The @tailwindcss/vite plugin processes Tailwind directives at build time.

---

## Installation Guide

### Prerequisites

- Node.js (version 18 or higher recommended)
- npm (comes with Node.js) or an alternative package manager

### Steps

1. Clone or download the repository to your local machine

2. Navigate to the project directory in your terminal

3. Install dependencies:

   ```
   npm install
   ```

4. Start the development server:

   ```
   npm run dev
   ```

5. Open your browser and visit the URL displayed in your terminal (typically http://localhost:5173)

---

## How to Use

### As a Visitor

1. Scroll vertically to move through sections (Hero, About, Projects, Skills, Education, Contact)
2. On mobile devices, use the bottom navigation bar to jump between sections quickly
3. On desktop, use the top navigation links or scroll naturally
4. Click project titles to visit their GitHub repositories
5. Use the filter buttons in the Projects section to view projects by category
6. Click "Read more" on project cards to expand full descriptions
7. Click the Resume button in the top navigation to download the PDF
8. Click any contact link (Email, GitHub, LinkedIn) to connect

### As a Developer Running Locally

The development server provides hot module replacement. Edit any file in the src directory and changes will reflect immediately in your browser without losing component state.

---

## Developer Guide

### Local Development Workflow

1. Run `npm run dev` to start the development server
2. Make changes to components, data files, or styles
3. Observe immediate updates in the browser
4. Use `npm run lint` to check code quality
5. Use `npm run format` to apply consistent formatting

### Component Development Patterns

**Creating a New Section**:

1. Create a new file in `src/components/sections/`
2. Import the PaperSheet wrapper from notebook components
3. Import relevant data from `@/data`
4. Compose using existing notebook primitives (Button, SectionHeading)
5. Export the component and add it to App.tsx

**Adding a New Project**:

1. Edit `src/data/projects.ts`
2. Add a new object to the projects array following the Project interface
3. Include id, title, tagline, summary, fields array, and github URL
4. The project will automatically appear in the grid with filtering support

**Modifying Styles**:

- Global design tokens: Edit CSS custom properties in `styles.css` :root
- Component-specific styles: Use Tailwind utility classes in component files
- New utility classes: Add @utility directives in `styles.css`

### Data Flow

1. Content is defined in TypeScript files under `src/data/`
2. Section components import relevant data
3. Data flows down through props to presentational components
4. User interactions (filtering, expanding) use React state and useMemo for derived values
5. No external data fetching or API calls are required

---

## Configuration Guide

### Environment Variables

This project does not require environment variables for basic operation. It is a static site with no backend dependencies.

### Customisation Points

**Personal Information**: Edit `src/data/profile.ts` to update:

- Name and role
- Tagline
- Email and social links
- Resume URL
- About paragraphs
- Education history
- Skill categories

**Projects**: Edit `src/data/projects.ts` to add, remove, or modify project entries.

**Typography**: The site uses Google Fonts (Caveat, Kalam, Architects Daughter, Inter) loaded in `index.html`. To change fonts, update the link tag and corresponding CSS custom properties.

**Colours**: The notebook palette uses OKLCH colour values defined as CSS custom properties in `styles.css`. Key variables include:

- `--paper`: Background colour
- `--graphite`: Primary text colour
- `--graphite-soft`: Secondary text colour
- `--rule-line`: Horizontal rule colour

---

## Core Workflows

### Page Load Flow

1. Browser requests index.html
2. HTML loads styles.css and main.tsx as module
3. React mounts the App component into the root DOM node
4. App renders Nav, then the main content area with all sections, then BottomNav
5. Each section renders inside a PaperSheet wrapper with consistent styling
6. Scroll position tracking activates in Nav component
7. Intersection Observer activates in BottomNav for mobile section detection

### Project Filtering Flow

1. User clicks a field filter button (e.g., "Machine Learning")
2. Projects component updates selectedField state
3. useMemo recalculates filteredProjects based on the new selection
4. React re-renders the project grid with filtered results
5. Active filter button receives visual highlighting

### Mobile Navigation Flow

1. Intersection Observer watches all section elements
2. As user scrolls, sections enter and leave the viewport
3. When a section crosses the -40% threshold, activeSection state updates
4. BottomNav highlights the corresponding navigation item
5. User taps a navigation item
6. scrollIntoView with smooth behavior scrolls to that section
7. Intersection Observer detects the new active section and updates highlighting

---

## API or Module Behaviour

The application does not expose a public API. Internal module boundaries are:

**Data Module** (`src/data/`): Exports typed constants (profile, projects, education, skillGroups) and TypeScript interfaces. Other modules import from the index barrel file.

**Notebook Components** (`src/components/notebook/`): Exports presentational React components with defined prop interfaces. These are pure UI elements with no side effects.

**Section Components** (`src/components/sections/`): Exports section-specific React components that compose notebook primitives and wire them to data. These may contain local state for interactions.

**Utilities** (`src/lib/utils.ts`): Exports helper functions. Currently contains cn() for merging Tailwind classes with clsx and tailwind-merge.

---

## Testing

This project does not include an automated test suite. Testing is currently manual through:

- Visual inspection across device sizes (mobile, tablet, desktop)
- Navigation flow verification
- Link functionality checks
- Build output verification via `npm run build` and `npm run preview`

To add testing, you would typically install Vitest (aligned with the Vite ecosystem) and React Testing Library, then create test files alongside components.

---

## Deployment Overview

This is a static site suitable for deployment on any platform serving HTML/CSS/JS files.

### Build Process

1. `npm run build` executes TypeScript compilation then Vite build
2. Vite processes all assets, applies tree-shaking, and generates optimised bundles
3. Output is written to the `dist/` directory
4. `npm run preview` serves the dist folder locally for verification

### Recommended Platforms

- **Vercel** or **Netlify**: Automatic deployments from Git with branch previews
- **GitHub Pages**: Direct hosting from repository
- **Cloudflare Pages**: Edge-deployed static hosting
- **AWS S3 + CloudFront**: Scalable production hosting

### Deployment Steps

1. Push code to a Git repository
2. Connect repository to your hosting platform
3. Set build command to `npm run build`
4. Set output directory to `dist`
5. Deploy

---

## Performance and Design Considerations

### Performance Optimisations

- **Tree Shaking**: Vite eliminates unused code during build
- **CSS Optimisation**: Tailwind generates only used utility classes
- **Font Loading**: Preconnect hints to Google Fonts reduce connection overhead
- **No Runtime Dependencies**: No heavy state management or routing libraries
- **Static Generation**: Single HTML file with inlined critical CSS

### Design Decisions

- **Single-Page Architecture**: Eliminates page load delays and preserves scroll context
- **CSS-First Approach**: Complex styling (paper grain, ruled lines) implemented in CSS rather than JavaScript for better performance
- **Mobile-First Bottom Navigation**: Recognises that thumb reach on large phones favors bottom positioning
- **Typography Hierarchy**: Handwritten fonts for headings, clean sans-serif for body text creates visual interest without sacrificing readability
- **Dark Theme Default**: Reduces eye strain and enables subtle texture effects (paper grain) that would not work on light backgrounds

### Trade-Offs

- **Static Content**: Updating content requires code changes and rebuild rather than CMS edits
- **No Server-Side Rendering**: SEO relies on proper meta tags in HTML rather than dynamic rendering
- **No Analytics Built-In**: Tracking would need to be added via external service integration

---

## Known Limitations

- Content updates require modifying TypeScript source files and rebuilding
- No backend API or database integration
- No automated testing coverage currently implemented
- No dark/light theme toggle (dark theme is the only option)
- Project images or screenshots are not currently displayed (text-only project cards)
- No blog or dynamic content capability

---

## Troubleshooting

### Development server fails to start

**Issue**: `npm run dev` throws errors or port is already in use
**Solution**: Check if another process is using port 5173. Vite will suggest an alternative port automatically, or you can specify one with `--port` flag.

### Styles not updating

**Issue**: Changes to styles.css not reflecting
**Solution**: Ensure the Vite dev server is running. Tailwind v4 processes styles through the Vite plugin, so a server restart may be required after major CSS changes.

### Type errors after editing data files

**Issue**: TypeScript errors appearing in IDE or build
**Solution**: Ensure all data objects conform to their interface definitions in `types.ts`. Run `npx tsc --noEmit` to check for type errors without building.

### Import path errors

**Issue**: Cannot resolve `@/components/...` or similar imports
**Solution**: Verify tsconfig.json and vite.config.ts path aliases match. The @/ prefix should map to ./src/.

---

## Contribution Guide

Contributions are welcome. This is a personal portfolio, but improvements to accessibility, performance, or code quality are appreciated.

### Getting Started

1. Fork the repository on GitHub
2. Clone your fork locally
3. Create a new branch for your changes: `git checkout -b feature/your-feature-name`
4. Install dependencies: `npm install`
5. Make your changes following the existing code style
6. Run linting: `npm run lint`
7. Run formatting: `npm run format`
8. Build to verify: `npm run build`
9. Commit with a clear message describing your changes
10. Push to your fork and open a pull request

### What to Contribute

- Accessibility improvements (ARIA labels, keyboard navigation, focus management)
- Performance optimisations (image loading, code splitting, caching strategies)
- Responsive design refinements for edge-case device sizes
- Type safety improvements or TypeScript best practice updates
- Documentation improvements or typo fixes

### Code Style

- Use tabs for indentation (configured in .prettierrc.json)
- Follow existing component patterns (functional components, explicit return types optional but encouraged)
- Use the cn() utility for class name merging
- Prefer explicit imports over wildcard imports
- Keep components focused on a single responsibility

---

## Roadmap and Future Improvements

Based on the current codebase structure, potential enhancements include:

- **Project Screenshots**: Add image support to ProjectCard with lazy loading
- **Blog Integration**: Add a writing section with markdown content
- **Analytics**: Integrate privacy-focused analytics (Plausible or Fathom)
- **Search**: Add project search or filtering by technology
- **Animations**: Subtle entrance animations using Framer Motion or CSS transitions
- **Open Graph**: Enhanced social sharing previews with dynamic image generation
- **RSS Feed**: For blog content if added
- **E2E Testing**: Playwright tests for critical user flows

---

## Community Value

This portfolio demonstrates several qualities useful for the developer community:

**As a Reference Implementation**: Shows modern React patterns (TypeScript, hooks, composition) without over-engineering. Suitable for developers learning how to structure small to medium React applications.

**Design System Example**: The notebook aesthetic demonstrates how to implement a cohesive visual theme using only CSS and web fonts, without heavy design system dependencies.

**Static Site Architecture**: Illustrates a clean approach to content-driven static sites that do not require a backend, suitable for personal sites, documentation, or marketing pages.

**Who Would Find It Useful**:

- Developers building their own portfolios seeking architectural patterns
- Students learning React and TypeScript looking for well-organised examples
- Designers interested in implementing unique visual concepts on the web
- Hiring managers evaluating a candidate's approach to code organisation

**Why Developers Care**: The codebase prioritises readability and maintainability over cleverness. It shows practical application of modern web standards without unnecessary complexity, demonstrating that effective engineering often means choosing the right constraints rather than the maximum flexibility.
