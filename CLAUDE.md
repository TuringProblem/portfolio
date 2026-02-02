# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm start` - Start local development server with hot reload
- `npm run build` - Generate static production build 
- `npm run typecheck` - Run TypeScript type checking
- `npm run serve` - Serve production build locally
- `npm run clear` - Clear Docusaurus cache
- `npm run deploy` - Deploy to GitHub Pages

## Architecture Overview

This is a Docusaurus-based portfolio website with the following structure:

### Component Organization
Components follow a modular structure with index file exports:
- `src/components/bar/` - Navigation bar components
- `src/components/buttons/` - Reusable button components (intro, breadcrumb)
- `src/components/cards/` - Legacy card components (header-card, main-card)
- `src/components/cardsV2/` - Updated card system (base, header, philosophy-card, text-field-card, navigation-card)
- Each component directory has an `index.ts` for clean imports

### Styling System
- TailwindCSS for utility-first styling with preflight disabled for Docusaurus compatibility
- Custom CSS in `src/css/custom.css` and `src/css/tailwind.css`
- CSS variables for theming in custom.css (e.g., `--about-card-background`, `--philosophy-card-background`)
- Dark/light theme support via `ThemeContext.tsx` and `ThemeToggle.tsx`
- Component-specific CSS modules (e.g., `styles.module.css`)

### Key Configuration
- Site deploys to `https://turingproblem.github.io/portfolio/`
- GitHub Pages deployment configured for `TuringProblem/portfolio` repo
- Navbar includes Projects (docs), Blog, and About sections
- Footer contains social links (GitHub, LinkedIn, Twitter/X)
- Docusaurus v4 future flag enabled for compatibility

### Technology Stack
- Docusaurus 3.9.2 with React 19
- TypeScript for type safety
- TailwindCSS for styling
- Lucide React for icons
- Node.js >=20.0 required

### Page Structure
- `src/pages/index.tsx` - Homepage
- `src/pages/about.tsx` - Main about page with navigation
- `src/pages/about/*.tsx` - About subsections (profile, resume, github, education, contact)
- `src/pages/projects.tsx` - Projects showcase
- `src/pages/components/` - Page-specific components and data
- Blog functionality enabled through Docusaurus preset

### Theme System
The codebase implements a comprehensive theme system:
- `ThemeContext.tsx` provides theme state management with localStorage persistence
- Supports system preference detection and manual theme switching
- CSS variables in `custom.css` define theme-specific colors for both light and dark modes
- Theme defaults to dark mode when no preference is set

When working with this codebase, follow the existing component structure and use the centralized exports from index files. Always run `npm run typecheck` before committing changes.