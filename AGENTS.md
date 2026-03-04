# AGENTS.md

This file provides guidance to AI agents when working with code in this repository.

## Project Overview

A personal homepage powered by Nuxt. The page displays the user's GitHub information and a list of recently updated repositories, with Bing daily wallpaper as the background.

## Common Commands

```bash
# Install dependencies
pnpm install

# Start development server (http://localhost:3000)
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Docker deployment
docker compose up -d
```

## Tech Stack

- **Nuxt 4** + **Vue 3** - Full-stack framework
- **TailwindCSS 4** - Styling (integrated via Vite plugin)
- **@nuxtjs/color-mode** - Dark/light theme toggle
- **@egoist/tailwindcss-icons** + **@iconify-json/carbon** - Icon system

## Code Architecture

### Directory Structure

```
app/
├── assets/css/main.css   # TailwindCSS entry point, defines global styles and component classes
├── components/           # Vue components (e.g., DarkToggle.vue)
├── pages/index.vue       # Main page, includes header, background image, repo cards, footer
└── app.vue              # Root component
server/api/
├── user/index.ts        # GET /api/user - Fetch GitHub user info
├── user/repos.ts        # GET /api/user/repos - Fetch 6 most recently updated repos
└── background.ts        # GET /api/background - Fetch Bing daily wallpaper URL
types/                    # TypeScript type definitions
```

### Key Implementations

- **Theme Toggle**: `DarkToggle.vue` uses the View Transitions API to implement a circular expansion animation effect
- **CSS Components**: `main.css` defines two TailwindCSS component classes: `.btn` and `.icon-btn`
- **ICP Filing Info**: Footer dynamically displays ICP filing or MIT license information based on environment variables `NUXT_PUBLIC_ICP_*` and `NUXT_PUBLIC_POLICE_*`

## Environment Variables

Required:

- `NUXT_GITHUB_TOKEN` - GitHub API Token

Optional (ICP filing info):

- `NUXT_PUBLIC_ICP_NUMBER` / `NUXT_PUBLIC_ICP_LINK`
- `NUXT_PUBLIC_POLICE_NUMBER` / `NUXT_PUBLIC_POLICE_LINK`

## Runtime Requirements

- Node.js >= 22
- pnpm 10.22.0 (managed via corepack)
