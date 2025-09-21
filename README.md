### **Overview**

This is a **personal portfolio website** for Parth Mital, a Computer Science student showcasing his diverse skills across multiple creative and technical domains. The app is built as a modern, responsive single-page application using **Preact** (a lightweight React alternative) and **Vite** as the build tool.

### **Technical Architecture**

**Frontend Framework:** Preact 10.26.5

- Chosen for its lightweight nature (3KB) compared to React
- Maintains React-like syntax and component structure
- Optimized for performance and bundle size

**Build System:** Vite 6.3.5

- Fast development server with hot module replacement
- Optimized production builds
- Configured for GitHub Pages deployment with base path `/Portfolio/`

**Styling:** Custom CSS with CSS Variables

- Comprehensive design system with consistent spacing, colors, and typography
- Responsive design with mobile-first approach
- Dark theme with neon accent colors that change randomly on each page load

### **Core Features & Functionality**

#### **1. Navigation & Layout**

- **Fixed Header:** Contains logo and navigation menu with smooth scrolling
- **Responsive Design:** Mobile-optimized with collapsible navigation
- **Active Section Tracking:** Automatically highlights current section based on scroll position
- **Smooth Scrolling:** CSS-based smooth transitions between sections

#### **2. Home Section**

- **Hero Introduction:** Large typography with dynamic accent color
- **Call-to-Action Buttons:** "View My Work" and "Download CV" buttons
- **Social Media Links:** LinkedIn, GitHub, and Gmail with hover effects
- **Professional Description:** Overview of skills and interests

#### **3. About Section**

- **Personal Introduction:** Detailed description of background and interests
- **Multi-disciplinary Focus:** Covers development, design, 3D work, video editing, and music production

#### **4. Projects Section**

- **Horizontal Scrolling Gallery:** Showcases featured projects with thumbnails
- **Project Cards:** Each project displays:
  - Project thumbnail image
  - Title and description
  - Technology tags
  - Direct links to project repositories or files

#### **5. Skills Section**

- **Categorized Skills:** Organized into 5 main categories:
  - Programming & Development
  - UI/UX & Design
  - 3D Modelling & Texturing
  - Video Editing & Motion Graphics
  - Music Production & Audio
- **Filterable Interface:** Category-based filtering system
- **Interactive Cards:** Each skill links to its official documentation/website
- **Visual Icons:** Professional software logos for each skill

### **Data Management**

- **JSON-based Content:** Projects and skills data stored in separate JSON files
- **Modular Structure:** Easy to update content without touching code
- **External Links:** All skills link to official documentation
- **Project Metadata:** Structured data including images, descriptions, and tags

### **Design System**

#### **Color Palette**

- **Primary:** Black (#000) background with white text
- **Accent:** Dynamic neon colors (12 different options) that change on each page load
- **Grays:** Various shades for secondary text and borders
- **Interactive:** Hover effects with color transitions

#### **Typography**

- **Primary Font:** Inter (Google Fonts)
- **Decorative Fonts:** Birthstone, Imperial Script, Pattaya, Tangerine for special elements
- **Hierarchy:** 12px to 72px font sizes with consistent weight system

#### **Spacing & Layout**

- **CSS Variables:** Consistent spacing system (4px to 64px)
- **Responsive Breakpoints:** Mobile-first approach with 768px breakpoint
- **Card-based Design:** Consistent card layouts for projects and skills

### **Interactive Elements**

- **Hover Effects:** Scale transforms and color changes
- **Smooth Transitions:** 0.25s transition timing
- **Custom Scrollbar:** Styled with accent color
- **Button States:** Active, hover, and focus states

### **Performance Optimizations**

- **Component-based Architecture:** Reusable Project and Skill components
- **Efficient Rendering:** Conditional rendering based on filters
- **Optimized Images:** Proper sizing and object-fit properties
- **Lazy Loading:** Images load as needed

### **Deployment & Hosting**

- **GitHub Pages:** Configured for automatic deployment
- **gh-pages Package:** Automated deployment workflow
- **Base Path Configuration:** Properly configured for GitHub Pages subdirectory

### **Accessibility & UX**

- **Semantic HTML:** Proper heading hierarchy and structure
- **Keyboard Navigation:** Accessible navigation and interactions
- **Responsive Design:** Works across all device sizes
- **Visual Feedback:** Clear hover states and transitions
- **External Links:** Proper `target="_blank"` and `rel="noopener noreferrer"` attributes

This portfolio effectively presents Parth Mital as a multi-disciplinary creative technologist with expertise spanning from traditional software development to cutting-edge creative media production, all wrapped in a modern, professional web interface.
