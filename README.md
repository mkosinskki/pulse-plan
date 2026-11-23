# PulsePlan

**English** · [Polski](README.pl.md)

**PulsePlan** is a local-first **PWA** daily planner (works offline, installable on mobile and desktop) that connects your **weekly task pool**, **real-world schedule blocks** (one-off and weekly recurring), and **morning energy check-in** (Garmin Body Battery, Samsung Energy Score, or 1–5 mood) to help you decide what to do and when.

## Tech Stack

- **Frontend (`client/`):** React 19.3, Vite 8, Tailwind CSS 4.3, `vite-plugin-pwa`, `lucide-react` (pure JavaScript)
- **Backend (`server/`):** Express (Stage 2 skeleton for AI Daily Planner)
- **Data:** `localStorage` + JSON backup export/import

## Structure

```text
PulsePlan/
├── client/          # React + Vite + PWA app
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── hooks/
│       ├── services/
│       └── utils/
└── server/          # Express server
```

## Local Development

1. **Install dependencies** (from the root directory):
   ```bash
   npm install
   ```
2. **Development server:**
   ```bash
   npm run dev:client
   ```
3. **Production build & PWA preview (offline / Service Worker):**
   ```bash
   npm run build:client
   npm run preview:client
   ```
4. **Linting (ESLint):**
   ```bash
   npm run lint:client
   ```
