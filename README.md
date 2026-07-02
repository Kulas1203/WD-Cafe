# WD Cafe ☕

A cafe that makes your heart happy.

A warm, cozy landing website for **WD Cafe** — Butuan City's neighborhood coffee
shop, with branches at **Villa Kananga** and **Montilla Blvd**.

> ☕ Brewing Schedule @ Montilla Blvd: Sat–Thu, 6:00 PM – 12:00 MN · Closed Friday

## ✨ Features

- **Responsive, mobile-first layout** (375px → 1440px+)
- **Sticky navigation** with an accessible mobile menu
- **Hero** with brand story, stats, and an "open 'til midnight" badge
- **Real menu** with filterable categories (Coffee · Non-Coffee Drinks) and ₱ pricing
- **Photo gallery** in a bento-style grid
- **Customer reviews** with rating summary
- **Reservation form** with inline validation and success feedback
- **Scroll-reveal animations** (respects `prefers-reduced-motion`)
- Accessible: skip link, focus states, ARIA labels, 4.5:1 contrast, SVG icons (no emoji)

## 🎨 Design System

Generated with the [ui-ux-pro-max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) design skill.

| Token | Value |
|-------|-------|
| Primary | `#92400E` (warm brown) |
| Accent / CTA | `#C2410C` (terracotta) |
| Background | `#FEF8EE` (soft cream) |
| Display font | Playfair Display |
| Body font | Karla |

## 📁 Structure

```
WD-Cafe/
├── index.html        # Page markup
├── css/styles.css    # Design system + components
└── js/main.js        # Nav, tabs, scroll reveal, form validation
```

## 🚀 Run locally

It's a static site — just open `index.html`, or serve it:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```
