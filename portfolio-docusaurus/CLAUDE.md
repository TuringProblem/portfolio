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
- `src/components/cards/` - Card components (header-card, main-card)
- Each component directory has an `index.ts` for clean imports

### Styling System
- TailwindCSS for utility-first styling
- Custom CSS in `src/css/custom.css` and `src/css/tailwind.css`
- Component-specific CSS modules (e.g., `styles.module.css`)
- Dark/light theme support via `ThemeContext.tsx` and `ThemeToggle.tsx`

### Key Configuration
- Site deploys to `https://turingproblem.github.io/portfolio/`
- GitHub Pages deployment configured for `TuringProblem/portfolio` repo
- Navbar includes Projects (docs), Blog, and About (intro) sections
- Footer contains social links (GitHub, LinkedIn, Twitter/X)

### Technology Stack
- Docusaurus 3.9.2 with React 19
- TypeScript for type safety
- TailwindCSS for styling
- Lucide React for icons
- Node.js >=20.0 required

### Page Structure
- `src/pages/index.tsx` - Homepage
- `src/pages/intro.tsx` - About page
- `src/pages/projects.tsx` - Projects showcase
- Blog functionality enabled through Docusaurus preset

When working with this codebase, follow the existing component structure and use the centralized exports from index files. Always run `npm run typecheck` before committing changes.