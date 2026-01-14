# Portfolio Website — Parth Mital

This is a personal portfolio website for **Parth Mital**, a Computer Science student showcasing skills across multiple creative and technical domains.  
The app is built as a modern, responsive single-page application using Preact and Vite.

## Technical Architecture

### Frontend Framework: Preact 10.26.5

- Chosen for its lightweight nature compared to React.
- Maintains React-like syntax and component structure.
- Optimized for performance and bundle size.

### Build System: Vite 6.3.5

- Fast development server with hot module replacement.
- Optimized production builds.

### Styling: Custom CSS with CSS Variables

- Comprehensive design system with consistent spacing, colors, and typography.
- Responsive design with mobile-first approach.
- Dark theme with neon accent colors that change randomly on each page load.

## Core Features & Functionality

### Navigation & Layout

- **Fixed header** with logo and navigation menu.
- Responsive, mobile-optimized layout with collapsible navigation.
- Active section tracking based on scroll position.
- Smooth scrolling between sections.

### Home Section

- Hero introduction with large typography and dynamic accent color.
- Call-to-action buttons: “View My Work” and “Download CV”.
- Social links (LinkedIn, GitHub, Gmail) with hover effects.
- Short professional description summarizing skills and interests.

### About Section

- Personal introduction describing background and interests.
- Emphasis on multi-disciplinary focus across development, design, 3D work, video editing, and music production.

### Skills Section

- Categorized skills organized into:
  - Programming & Development
  - UI/UX & Design
  - 3D Modelling & Texturing
  - Video Editing & Motion Graphics
  - Music Production & Audio
- Category-based filtering interface.
- Interactive skill cards that link to official documentation/websites.
- Visual icons using professional software logos.

## Data Management

- JSON-based content: skills data stored in a separate JSON file.
- Modular structure: update content without changing UI code.
- External links: each skill links to official documentation.

## Design System

### Color Palette

- Primary: black background (`#000`) with white text.
- Accent: dynamic neon colors (12 options) chosen randomly per page load.
- Grays: multiple shades for secondary text and borders.
- Interactive states: hover transitions for color and emphasis.

### Typography

- Primary font: Inter (Google Fonts).
- Decorative fonts: Birthstone, Imperial Script, Pattaya, Tangerine for special elements.
- Clear type scale (12px–72px) with a consistent weight system.

### Spacing & Layout

- CSS variables provide consistent spacing (4px to 64px).
- Mobile-first breakpoints with a 768px layout transition.
- Card-based UI patterns for skills and UI sections.

## Interactive Elements

- Hover effects: scale transforms + accent color changes.
- Smooth transitions: 0.25s timing for UI interactions.
- Custom scrollbar styled using the active accent color.
- Button states: active, hover, and focus styling.

## Performance Optimizations

- Component-based architecture with reusable UI components.
- Efficient conditional rendering for skill filters.
- Optimized assets with appropriate sizing and `object-fit` usage.
- Lazy loading for media where applicable.

## Deployment & Hosting

- Deployed on Vercel using its standard deployment workflow (Preview + Production environments).

## Accessibility & UX

- Semantic HTML structure with proper heading hierarchy.
- Keyboard-friendly navigation and interactions.
- Fully responsive layout across device sizes.
- Clear visual feedback via hover/focus states.
- External links include `target="_blank"` and `rel="noopener noreferrer"`.
