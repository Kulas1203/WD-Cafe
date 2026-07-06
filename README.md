# WD Cafe ☕

A cafe that makes your heart happy.

A warm, cozy landing website for **WD Cafe** (Wapidos, Est. 2024) — Butuan City's
neighborhood coffee shop at **Montilla Blvd**.

> ☕ Brewing Schedule: Sat–Thu, 6:00 PM – 12:00 MN · Closed Friday

**Live site:** https://kulas1203.github.io/WD-Cafe/

## ⚙️ Tech

Built with **React 18 + Vite**. Deploys automatically to GitHub Pages on every
push to `main` (see `.github/workflows/deploy-pages.yml`).

## ✨ Features

- Cinematic hero + scroll-driven "Signature Collection" showcase
- Filterable menu (Coffee · Non-Coffee · Snacks) with real product photos
- Cups that jiggle when clicked
- Reservation form that emails requests straight to the cafe (via FormSubmit)
- Facebook messaging throughout
- Scroll-reveal animations, fully responsive, respects `prefers-reduced-motion`

## ✏️ Editing content (no coding needed)

Most changes are one-line edits in `src/data/`:

| To change… | Edit |
|---|---|
| A drink's name, price, description, or tag | `src/data/menu.js` |
| Testimonials / reviews | `src/data/reviews.js` |
| Facebook link, reservation email, hours, marquee, spotlight drinks | `src/data/site.js` |

Push the change to `main` and it goes live in ~2 minutes.

## 📁 Structure

```
WD-Cafe/
├── index.html            # Vite entry
├── public/images/        # Drink photos & illustrations
├── src/
│   ├── main.jsx          # App bootstrap
│   ├── App.jsx           # Page composition
│   ├── index.css         # Design system + all styles
│   ├── data/             # ← edit menu, reviews, site info here
│   ├── hooks/            # Scroll-reveal hook
│   └── components/       # Header, Hero, Menu, Visit, Footer, …
└── .github/workflows/    # Auto-deploy to GitHub Pages
```

## 🚀 Run locally

```bash
npm install
npm run dev        # dev server with hot reload
npm run build      # production build → dist/
npm run preview    # preview the production build
```
