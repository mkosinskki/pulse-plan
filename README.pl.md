# PulsePlan

[English](README.md) · **Polski**

**PulsePlan** to aplikacja webowa **PWA** (local-first, działająca offline, instalowalna na telefonie i desktopie), która łączy **tygodniową pulę zadań**, **realne bloki zajętości w harmonogramie dnia** (jednorazowe i cykliczne co tydzień) oraz **poranny poziom energii** (Garmin Body Battery, Samsung Energy Score lub własne samopoczucie 1–5).

## Stack technologiczny

- **Frontend (`client/`):** React 19.3, Vite 8, Tailwind CSS 4.3, `vite-plugin-pwa`, `lucide-react` (czysty JavaScript)
- **Backend (`server/`):** Express (szkielet pod Etap 2: AI Daily Planner)
- **Dane:** `localStorage` + eksport/import backupu JSON

## Struktura

```text
PulsePlan/
├── client/          # Aplikacja React + Vite + PWA
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── hooks/
│       ├── services/
│       └── utils/
└── server/          # Serwer Express
```

## Uruchomienie lokalne

1. **Instalacja zależności** (w głównym katalogu):
   ```bash
   npm install
   ```
2. **Tryb deweloperski:**
   ```bash
   npm run dev:client
   ```
3. **Build produkcyjny i podgląd PWA (tryb offline / Service Worker):**
   ```bash
   npm run build:client
   npm run preview:client
   ```
4. **Sprawdzanie kodu (ESLint):**
   ```bash
   npm run lint:client
   ```
