# WD Cafe ☕

A cafe that makes your heart happy.

A warm, cozy landing website for **WD Cafe** (Wapidos, Est. 2024) — Butuan City's
neighborhood coffee shop at **Montilla Blvd**.

> ☕ Brewing Schedule: Sat–Thu, 6:00 PM – 12:00 MN · Closed Friday

**Live site:** https://kulas1203.github.io/WD-Cafe/

## ⚙️ Tech

This is a **Vite + React 18 (JavaScript)** app. It was converted from a plain
HTML/CSS/JS site — the original stylesheet is imported **as-is** (`src/index.css`),
so the design stays pixel-identical (same colors, Playfair Display + Karla fonts,
spacing, layout, and breakpoints). No Tailwind, no restyling.

## ✨ Features

- Componentized page — one file per section in `src/components/`
- All behavior in React hooks (`useState`/`useEffect`): mobile nav, menu tabs,
  form validation, scroll-reveal — no direct DOM manipulation
- **Live REST API demo** — the "Explore dishes" section fetches from
  [TheMealDB](https://www.themealdb.com/api.php) with `useEffect`, stores results
  in `useState`, filters by category (re-fetches on click), and renders explicit
  **loading**, **error** (with retry), and **empty** states — see
  `src/components/ExploreDishes.jsx`
- Reservation form that emails requests straight to the cafe (via FormSubmit)
- Cinematic hero + scroll-driven "Signature Collection", cup click animation,
  fully responsive, respects `prefers-reduced-motion`

## 📁 React source files

The repo reads clearly as a React project:

```
WD-Cafe/
├── index.html                 # Vite entry (loads /src/main.jsx)
├── package.json               # scripts + React/Vite/gh-pages deps
├── vite.config.js             # base: '/WD-Cafe/' for GitHub Pages
├── public/images/             # static assets (photos & illustrations)
└── src/
    ├── main.jsx               # React bootstrap (createRoot)
    ├── App.jsx                # composes all sections in page order
    ├── index.css              # original stylesheet, imported unchanged
    ├── data/                  # editable content (menu, reviews, site info)
    │   ├── menu.js
    │   ├── reviews.js
    │   └── site.js
    ├── hooks/
    │   └── useReveal.js        # IntersectionObserver scroll-reveal hook
    └── components/
        ├── Header.jsx          # navbar: sticky + mobile toggle (useState)
        ├── Hero.jsx
        ├── Marquee.jsx
        ├── Spotlight.jsx       # scroll-driven signature showcase
        ├── About.jsx
        ├── Menu.jsx            # real menu, tab filtering (useState)
        ├── ExploreDishes.jsx   # ← REST API: fetch + loading/error/empty
        ├── Gallery.jsx
        ├── Reviews.jsx
        ├── Visit.jsx           # contact info + <ReservationForm/>
        ├── ReservationForm.jsx # controlled inputs, validation, submit
        ├── CtaBanner.jsx
        ├── Footer.jsx
        ├── Logo.jsx
        └── Reveal.jsx          # wrapper that reveals children on scroll
```

## ✏️ Editing content (no coding needed)

Most changes are one-line edits in `src/data/`:

| To change… | Edit |
|---|---|
| A drink's name, price, description, or tag | `src/data/menu.js` |
| Testimonials / reviews | `src/data/reviews.js` |
| Facebook link, reservation email, hours, marquee, spotlight drinks | `src/data/site.js` |

## 🚀 Run locally

```bash
npm install        # install dependencies (first time only)
npm run dev        # start dev server with hot reload (opens at /WD-Cafe/)
npm run build      # production build → dist/
npm run preview    # preview the production build
```

## 🌐 Deploy to GitHub Pages

**Automatic (recommended, already set up):** every push to `main` triggers
`.github/workflows/deploy-pages.yml`, which runs the build and publishes to
https://kulas1203.github.io/WD-Cafe/ — no commands needed.

**Manual (using the `gh-pages` package):**

```bash
npm run deploy     # runs the build, then pushes dist/ to the gh-pages branch
```

> Note: this repo is currently set to publish via **GitHub Actions** (Settings →
> Pages → Source: GitHub Actions). To use `npm run deploy` instead, switch the
> Pages source to **Deploy from a branch → gh-pages**. Both publish to the same URL.
