# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` or `npm start` - Start development server at localhost:3000
- `npm run build` - Build production site to ./dist/
- `npm run preview` - Preview build locally before deploying
- `npm run astro ...` - Run Astro CLI commands (e.g., `astro add`, `astro check`)

## Architecture Overview

This is an Astro-based web application for tracking women's sports games and schedules. The app fetches game data from an external API and displays it in a responsive interface.

### Key Architecture Components

**API Integration**: The app connects to a sports data API at `https://api.sheplays.net/api/` (with localhost fallback commented out in config). All API endpoints and league/sport mappings are centralized in `src/config.ts`.

**Page Structure**: 
- Dynamic pages use file-based routing in `src/pages/`
- Team and network pages use dynamic routes (`[id].astro`)
- Sport-specific pages (wnba.astro, nwsl.astro, etc.) fetch data for specific leagues

**Data Flow**: 
- Games are fetched using the `getGames` utility function in `src/utils/getGames.ts`
- The main page (`index.astro`) first tries to show today's games, falling back to upcoming games
- `GameList.astro` component handles game organization by date/time and renders game cards

**Component Architecture**:
- `GameList.astro` - Core component that groups games by date/time and renders them
- `Card.astro` - Individual game card component
- `Header.astro` - Site header with sport icons
- `TeamSelect.astro` - Team selection interface

**Deployment**: Configured for Cloudflare Pages with server-side rendering (`output: "server"` in astro.config.mjs).

### Key Data Structures

Games have this interface structure:
```typescript
interface Game {
  name: string;
  date_formatted: string;
  networks: string[];
  sport: string;
  league: string;
  time_formatted: string;
  time: number;
  teams?: string[];
  watch_links?: string[];
}
```

### Sport & League Configuration

- League IDs and sport IDs are mapped in `src/config.ts`
- Country codes for team flags/icons are also defined in config
- API endpoints are pre-configured for each league/sport combination