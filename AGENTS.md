# AGENTS.md - WT Ingelec Astro Project

Guidelines for AI agents working on this Astro 5.x static site for WT Ingelec (Colombian electrical engineering company).

## Build Commands

```bash
pnpm install         # Install dependencies (pnpm-lock.yaml is the source of truth)
pnpm dev             # Start dev server (localhost:4321)
pnpm build           # Build + TypeScript check (REQUIRED before deployment)
pnpm preview         # Preview production build locally
pnpm astro           # Astro CLI commands
```

**CRITICAL**: Always run `pnpm build` before committing to catch type errors.

**Package manager**: this repo now uses **pnpm** with Node 24 (`package-lock.json` was removed; CI workflow installs with pnpm).

## Project Structure

```
src/
  assets/           # Images and SVG assets for processing
  components/
    sections/        # Full-width page sections (Hero, About, Services, etc.)
    ui/             # Reusable UI components (Navbar, Footer, Cards, Form, Badge)
    seo/            # Seo.astro component
    effects/        # Visual effects (Snow.astro)
    Icons/          # SVG icon components
  layouts/          # MainLayout.astro (default wrapper)
  pages/            # Static routes (index.astro, 404.astro)
  data/             # JSON config files (siteData.json, clientData.json)
  utils/            # JS utilities (animations.js, lenis.js, slugify.js, jsonLD.js)
  utils.ts          # Shared TypeScript utilities
  styles/           # global.css with Tailwind directives
  content/          # Blog content collection (config.ts, blog/*.md)
public/             # Static assets (fonts, favicons)
```

## Code Style Guidelines

### Imports
- **ALWAYS use `@/` path alias**: `import Hero from "@/components/sections/Hero.astro"`
- Never use relative paths like `../components/` or `./components/`
- Group imports: Astro imports → External libs → Internal modules

### TypeScript
- Strict mode enabled (extends `astro/tsconfigs/strict`)
- Use `.ts` for utilities, `.astro` for components
- Props typed via `Astro.props` destructuring: `const { isUnderline } = Astro.props;`

### Naming Conventions
- **Components**: PascalCase (e.g., `Hero.astro`, `ServiceCard.astro`)
- **Files**: camelCase for JS/TS (e.g., `animations.js`, `slugify.js`)
- **CSS Classes**: kebab-case (e.g., `gsap-fade-up`, `btn-primary`)
- **Variables/Functions**: camelCase

### Component Patterns

#### Astro Components
```astro
---
// Props at top
const { title, description } = Astro.props;
---

<!-- Template with Tailwind classes -->
<div class="gsap-fade-up px-4 py-2">
  <h1>{title}</h1>
  <slot />
</div>

<!-- Client-side scripts at bottom -->
<script>
  import { gsap } from "gsap";
  // Component-specific animations
</script>
```

#### Animation Classes (GSAP)
Add these classes to elements for scroll-triggered animations:
- `.gsap-fade-up` - Single element fade + slide up
- `.gsap-stagger-container` + `.gsap-stagger-item` - Staggered children animation

#### Hero Pattern
Hero sections use inline IDs with GSAP timeline:
- `#hero-title`, `#hero-desc`, `#hero-btn` with initial classes `opacity-0 translate-y-10`

### Styling (Tailwind CSS)

#### Colors (CSS Variables in global.css)
```
--blue: #003A74 (primary)
--blueSecondary: #55AAFF (accent/hover)
--green: #b9ff66 (CTAs/highlights)
--dark: #191a23 (dark backgrounds)
--gray: #e7e7e7 (borders/dividers)
--white: #ffffff
--black: rgb(0, 0, 0)
```

#### Custom Utility Classes (in global.css)
- `.btn-primary`, `.btn-secondary`, `.btn-tertiary`, `.btn-outline`, `.btn-ghost` - Button variants
- `.greenhead`, `.bluehead`, `.bluehead-secondary`, `.blackhead`, `.whitehead` - Highlighted text backgrounds
- `.font-outline`, `.font-outline-sm` - Text stroke effects

#### Responsive Pattern
Mobile-first with `md:` and `lg:` prefixes:
```astro
<div class="flex flex-col-reverse md:flex-row items-center md:items-start">
```

### Images
Use Astro's Image component with `@/assets/` imports:
```astro
import { Image } from "astro:assets";
import HeroImg from "@/assets/pics/hero.webp";

<Image src={HeroImg} alt="Description" loading="eager" fetchpriority="high" />
```

### Error Handling
- TypeScript strict mode catches most errors at build time
- Always check `pnpm build` output for type errors
- Use optional chaining for potentially undefined data: `data?.property`

## Critical Conventions

1. **Zero JS by default**: Astro ships no JavaScript unless explicitly added via `<script>` tags
2. **Path aliases**: Always use `@/` for imports from `src/`
3. **Build before commit**: Run `pnpm build` to validate TypeScript
4. **Images**: Import from `@/assets/` and use Astro's `<Image>` component
5. **Colors**: Use CSS custom properties or Tailwind theme colors
6. **Animations**: Use provided GSAP classes or inline timeline scripts for Hero
7. **SEO**: Use `Seo.astro` component on all pages with proper meta props
8. **Hero spacing on landing pages**: use the shared top clearance `mt-[64px] pt-6 pb-16 md:pt-8 md:pb-24` (applied consistently on about, services, contact).
9. **`Form.astro` is atomic** — renders the form only (props: `title`, `description`, `redirectUrl`; its script
   enables the round checkboxes and auto-fills the message when "Pedir presupuesto" is checked). The 2-column
   composition with the decorative image lives in `sections/Contact.astro` (home page); other pages compose
   their own card/layout around `<Form />`.

## Known Quirks

- **Tailwind + CSS variables**: opacity modifiers on arbitrary `var()` colors fail silently (`bg-[var(--x)]/10` generates no rule). Use hex values instead (e.g. `bg-[#003A74]/10`).
- **`[hidden]` vs Tailwind `.flex`**: an author-level `display: flex` beats the browser's native `[hidden]` style. To keep an element hidden while it has `hidden`, force it with `#some-id[hidden] { display: none !important; }` (see the contact-feedback banner in `contact.astro`).
- **Commenting out template blocks with `<!-- -->` in `.astro`**: always check `dist/` afterwards — the compiler behavior on commented blocks has been inconsistent (it once kept rendering the commented components). A more robust alternative is a frontmatter flag rendered as `{SHOW_SECTIONS && (<Section>…)}`.
- **sharp + pnpm**: pnpm does not hoist Astro's optional `sharp` dependency; if the build fails with `MissingSharp`, install it explicitly (`pnpm add sharp`).

## External Dependencies

- **GSAP 3.14** + ScrollTrigger - Animations (already registered in animations.js)
- **Lenis 1.0** - Smooth scrolling (auto-initialized in MainLayout.astro)
- **Swiper 11** - Carousels/sliders
- **Tailwind CSS 3.4** - Utility-first styling
- **@astrojs/sitemap** - Auto-generates sitemap.xml on build
- **astro-navbar** - Accessible navbar component

## No Testing Setup

This project does not have a test framework configured. There are no test commands available.
