# Copilot Instructions - WT Ingelec Web Platform

This is an **Astro 5.x static site** for WT Ingelec, a Colombian electrical engineering company. The platform prioritizes performance (JAMstack), interactive animations, and responsive design.

## Architecture & Key Patterns

### Core Framework Stack
- **Astro 5.0** (static-first JAMstack) with TypeScript strict mode
- **Tailwind CSS 3.4** for utility-first styling with custom theme colors
- **GSAP 3.14** + **ScrollTrigger** for scroll-triggered animations
- **Lenis 1.0** for smooth scrolling experience
- **Swiper 11** for carousel/slider components

### Color Scheme (CSS Variables in `global.css`)
```
--blue: #003A74 (primary - buttons, branding)
--blueSecondary: #55AAFF (hover states, accents)
--green: #b9ff66 (highlights, CTAs)
--dark: #191a23 (dark backgrounds)
--gray: #e7e7e7 (borders, dividers)
--white: #ffffff (text on dark)
```

### Project Structure
- **`src/pages/`** - Static pages (index, about, services, 404)
- **`src/components/sections/`** - Full-width page sections (Hero, About, Services, Team, etc.)
- **`src/components/ui/`** - Reusable UI components (Navbar, Footer, Cards, Forms, etc.)
- **`src/layouts/`** - `MainLayout.astro` is the default wrapper; pages extend it
- **`src/data/`** - JSON data files (`siteData.json`, `clientData.json`) for content/config
- **`src/utils/`** - JS utilities: `animations.js` (GSAP init), `lenis.js` (scroll), `slugify.js`, `jsonLD.js`

## Critical Developer Workflows

### Development & Build
```bash
npm run dev          # Start dev server (localhost:3000)
npm run build        # Build + TypeScript check (required before deployment)
npm run preview      # Preview production build locally
```

### Path Aliases
TypeScript path aliases are configured: `@/*` → `src/*`. Always use `@/` imports:
```astro
import Hero from "@/components/sections/Hero.astro";
import { formatDate } from "@/utils.ts";
```

## Component & Animation Patterns

### Animations via GSAP Classes
Components use these CSS classes to trigger animations on scroll (defined in `animations.js`):
- **`.gsap-fade-up`** - Single element: opacity 0→1, y: 50→0, duration 1s
- **`.gsap-stagger-container`** + **`.gsap-stagger-item`** - Parent/child stagger: opacity 0→1, y: 30→0, stagger 0.2s

**Example in `.astro` component:**
```astro
<div class="gsap-stagger-container">
  <div class="gsap-stagger-item">Item 1</div>
  <div class="gsap-stagger-item">Item 2</div>
</div>
```

### Hero Section Animation Pattern
The Hero component (`src/components/sections/Hero.astro`) uses **inline animation IDs** with JavaScript timelines:
- Elements with `id="hero-title"`, `id="hero-desc"`, `id="hero-btn"` have `opacity-0 translate-y-10` initial state
- GSAP timeline animates them sequentially on page load (see `animations.js` initialization in `MainLayout.astro`)

### Form Components
- **`Form.astro`** - Main contact form (uses form submission)
- **`ShortForm.astro`** - Lightweight form variant
- **`SearchForm.astro`** - Blog/search form

Forms include validation and should post to configured backend endpoint.

### Carousel/Slider Pattern
- **`SwiperSlider.astro`** wraps Swiper.js for client-side interactivity
- Used in testimonials, clients sections
- Swiper options can be customized per instance (slides-per-view, autoplay, etc.)

## Content & Data Management

### Site Configuration
- **`src/data/siteData.json`** - Global site metadata (title, description, OG image)
- **`src/data/clientData.json`** - Client/portfolio data
- **`astro.config.mjs`** - Site URL: `https://wtingelec.com.co`, enables sitemap generation

### Blog/Content
- **`src/content/config.ts`** - Content collections configuration
- **`src/content/blog/`** - Markdown blog posts (`.md` files)
- Posts use Astro's native content API (not external CMS)

### SEO & Meta
- **`src/components/seo/Seo.astro`** - Handles meta tags, OG, JSON-LD
- **`src/utils/jsonLD.js`** - Structured data helpers
- All pages should import `Seo` component with proper props

## Key Styling Conventions

### Typography
- Font family: **Space Grotesk** (loaded from `public/fonts/grotesk/`)
- Custom weights: `font-regular` (400), `font-medium` (500)
- Use `font-grotesk` class on body (already in `MainLayout.astro`)

### Responsive Breakpoints
Standard Tailwind (sm: 640px, md: 768px, lg: 1024px, xl: 1280px). Astro default uses `flex-col-reverse` + `md:flex-row` pattern for mobile-first layouts.

### Custom CSS Utilities (in `global.css`)
- **`.font-outline`** / **`.font-outline-sm`** - Text stroke effect (2.5px / 1.2px black outline)
- **`@layer base`** - Custom font-face declarations for Space Grotesk

### Lenis Integration
Smooth scrolling is enabled globally via `lenis.js` script (injected in `MainLayout.astro`). The CSS classes handle scroll behavior:
```css
html.lenis { height: auto; }
.lenis.lenis-smooth { scroll-behavior: auto; }
```

## External Integrations

### Sitemap & SEO
- **`@astrojs/sitemap`** automatically generates `sitemap.xml` on build
- Configure `site` URL in `astro.config.mjs` (already set to `https://wtingelec.com.co`)

### Deployment
- Configured for **static hosting** (Vercel adapter is commented but available)
- Build output: `dist/` folder with pure HTML/CSS/JS

### Image Optimization
- Use Astro's native `<Image>` component with `import { Image } from "astro:assets"`
- Supports `.webp`, `.jpg`, `.png`; lazy loading and format optimization automatic
- Example: See `src/components/sections/Hero.astro` for `Image` usage with `loading="eager"` and `fetchpriority="high"`

## Important Conventions & Gotchas

1. **No JavaScript framework in HTML** - Astro ships zero JS by default. Use `<script>` tags (runs in page context) for interactivity, not React/Vue.

2. **Client-side scripts in `.astro` files** - Must be wrapped in `<script>` tags within component. These run after hydration.

3. **Stacking Context** - Hero and overlays use `z-10`, `z-0`, `-z-10` classes. Verify z-index when adding fixed/absolute elements.

4. **Image paths** - Use `@/assets/` for all image imports. Astro optimizes them at build time.

5. **CSS Grid for layouts** - Some sections use `grid` instead of flexbox for 2D layouts (e.g., Team, Services). Customize `grid-cols-*` with Tailwind.

6. **No .env files** - Configuration is in `astro.config.mjs` and JSON data files. For secrets, use Vercel/hosting provider environment variables.

7. **Build requirement** - Always run `npm run build` (includes TypeScript check) before committing. This catches type errors early.
