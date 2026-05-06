# Forge AI Website

Single-file marketing website for Forge AI. Pure HTML/CSS/JS — no build step. Deploy instantly to Vercel.

**GitHub:** https://github.com/Jad-RAMOSS/Forge-AI-Website

## Structure

```
website/
├── index.html          # Full website (all CSS + JS inline)
└── uploads/
    ├── Dark-logo-no-bckgrnd.png    # Logo for dark mode
    ├── Dark-logo-no-bckgrnd.ico    # Favicon
    ├── light-logo-no_bckgrnd.png   # Logo for light mode
    ├── anthropic.png               # Provider logo
    ├── OpenAI.svg.png              # Provider logo
    ├── Gemini.svg.png              # Provider logo
    ├── Perplexity.svg.png          # Provider logo
    ├── meta.png.webp               # Provider logo
    └── background.mp4              # Hero video background
```

## Sections

| Section | ID | Description |
|---|---|---|
| Hero | `#hero` | Full-viewport looping video bg + CTA |
| Platform | `#platform` | Provider logos (PNG only, no text) + stats counter row |
| Why Forge AI | `#pillars` | 3-column pillar cards |
| Work | `#work` | 2×2 project cards |
| Contact | `#contact` | Form (FormSubmit) + email |
| Footer | — | Brand + links |

Section dividers between each section: thin fuchsia→cyan→fuchsia gradient line fading on both edges.

## Design System

### Brand Colors
| Token | Value | Usage |
|---|---|---|
| `--f` | `#F71BF8` | Fuchsia — borders, glows, accents |
| `--c` | `#00FFFF` | Cyan — secondary accents |
| `--obs` | `#0A0A0A` dark / `#F0EFFA` light | Page background |

### Liquid Glass Effect (`glass.md` spec — exact implementation)
Every glass surface (cards, work cards, contact form, navbar) uses the same structure:

```html
<div class="glass">
  <div class="gl-blur"></div>    <!-- z:0  — blur(3px) + url(#glass-distortion) + isolation -->
  <div class="g-mesh"></div>     <!-- z:5  — brand-color ambient blob (our touch) -->
  <div class="gl-overlay"></div> <!-- z:10 — semi-transparent white tint (theme variable) -->
  <div class="gl-rim"></div>     <!-- z:20 — inset double white shadow rim -->
  <div class="gl-content">…</div><!-- z:30 — actual content -->
</div>
```

No `::before`/`::after` pseudo-elements on `.glass` — removed because they caused an unwanted white hover flash.

The SVG filter `#glass-distortion` is defined once in `<body>` as a hidden `<svg>`. It uses:
- `feTurbulence` (fractalNoise, baseFrequency 0.001 0.005, seed 17)
- `feSpecularLighting` for the glass glint
- `feDisplacementMap` (scale 200) for the liquid refraction

#### Overlay opacity values
| Surface | Dark | Light |
|---|---|---|
| Cards (pillars, work, form) | `rgba(255,255,255,0.06)` | `rgba(255,255,255,0.52)` |
| Navbar (resting) | `rgba(255,255,255,0.06)` | `rgba(255,255,255,0.42)` |
| Navbar (scrolled) | `rgba(5,2,12,0.52)` | `rgba(245,244,255,0.62)` |

### Navbar
- Pill-shaped, fixed top, uses the same glass.md 3-layer structure as cards
- Content wrapped in `.nav-inner` at `z-index:30` above glass layers
- Links: Europa/Plus Jakarta Sans, 13.5px, `rgba(240,239,255,0.7)` resting — readable without hover
- Overlay densifies on scroll (`.nav.scrolled`) so text stays legible over page content
- Nav links: Platform · Why Us · Pillars · Work · Contact + Get Access CTA

### Glass Theme Switcher (`glass–switcher.md` spec)
Pill-shaped sun/moon switcher in the nav right. Active option gets a glass capsule highlight. Vanilla JS — no framework. Preference saved to `localStorage`.

### Theme System
Two themes via `data-theme` on `<html>`:
- `dark` (default) — `#0A0A0A` bg, white text, dark transparent glass
- `light` — `#F0EFFA` bg, near-black text, bright frosted glass

Logo and favicon swap per theme automatically via CSS `display:none` toggles.

### Provider Logos
All 5 shown as PNG images only — no text labels. Dark mode: `grayscale(1) invert(1)` at `opacity:0.52` → light gray. Hover: full color + white drop-shadow glow. Light mode: `grayscale(1) brightness(.4)` at `opacity:0.65`.

### Stat Counter
Numbers animate from 0 → target with easeOutExpo (1.8s) every time the stat scrolls into view. Resets when scrolled out so it replays on next reveal.

| Stat | Target | Format |
|---|---|---|
| Agents Deployed | 5,000 | `5,000+` |
| Messages Processed | 50 | `50M+` |
| Uptime | 99.999 | `99.999%` |
| Response Time | 500 | `<500ms` |

## Deploy to Vercel

1. Push to GitHub (already at https://github.com/Jad-RAMOSS/Forge-AI-Website)
2. In Vercel: **New Project → Import Git Repository**
3. Framework: **Other** — no build command, no output directory
4. Deploy — Vercel serves `index.html` from root, `uploads/` as static assets

## Adjustments Guide

### Change hero video opacity
`opacity` on `.hero-video` in CSS — currently `0.32`. Increase for more visible video, decrease for subtler.

### Change hero video
Replace `uploads/background.mp4`. Plays at `opacity:0.32`, `brightness(0.55) saturate(0.75)`.

### Add a new section
1. Add `<hr class="section-divider">` before the new `<section>`
2. Use `.glass` with the 4 inner divs (`gl-blur`, `g-mesh`, `gl-overlay`, `gl-rim`, `gl-content`)
3. Add class `reveal` for scroll-in animation — IntersectionObserver picks it up automatically

### Adjust glass transparency
- Cards: `--gl-overlay` in `:root, [data-theme="dark"]` — lower = more transparent
- Navbar resting: `.nav .gl-overlay { background: ... }`
- Navbar scrolled: `.nav.scrolled .gl-overlay { background: ... }`

### Adjust glass distortion strength
`scale` attribute on `<feDisplacementMap>` inside the hidden SVG — currently `200`. Lower = subtler distortion.

### Contact form
Uses [FormSubmit](https://formsubmit.co/) — no backend. Sends to `sales@forgeai.services`. First submission triggers an activation email from FormSubmit to confirm the address.

### Update favicon
Replace `uploads/Dark-logo-no-bckgrnd.ico`. The `<link rel="icon">` in `<head>` points to it.

## Status (2026-04-25)

- [x] Hero — looping video background at `opacity:0.32`
- [x] Favicon — `Dark-logo-no-bckgrnd.ico`
- [x] Liquid glass on all cards, work cards, contact form, and navbar (exact glass.md spec)
- [x] Glass theme switcher in nav (glass–switcher.md spec)
- [x] Dark / Light mode with localStorage persistence + logo swap
- [x] Provider logos — all 5 PNG, no text labels, grayscale→color on hover with white glow
- [x] Gradient section dividers (fuchsia→cyan→fuchsia)
- [x] Scroll-in reveal animations
- [x] Stat count-up animation — replays on every reveal
- [x] Nav — "Why Us" link, larger pill, clear text at correct font/size
- [x] Contact form via FormSubmit
- [x] Deployed to Vercel via GitHub (Jad-RAMOSS/Forge-AI-Website)
