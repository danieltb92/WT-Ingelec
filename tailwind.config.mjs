/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        grotesk: ["Space Grotesk", "sans-serif"],
        sans: ["Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
        heading: ["Space Grotesk", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
      },
      colors: {
        /* Colores base (backward compatibility) */
        green: "var(--green)",
        black: "var(--black)",
        dark: "var(--dark)",
        gray: "var(--gray)",
        white: "var(--white)",
        blue: "var(--blue)",
        blueSecondary: "var(--blueSecondary)",
        
        /* Colores semánticos */
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        error: "var(--color-error)",
        
        /* Fondos y superficies */
        "bg-primary": "var(--color-bg-primary)",
        "bg-secondary": "var(--color-bg-secondary)",
        "bg-dark": "var(--color-bg-dark)",
        surface: "var(--color-surface)",
        
        /* Texto */
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        "text-muted": "var(--color-text-muted)",
        "text-inverse": "var(--color-text-inverse)",
        
        /* Bordes */
        border: "var(--color-border)",
        "border-dark": "var(--color-border-dark)",
      },
      spacing: {
        "1": "4px",
        "2": "8px",
        "3": "12px",
        "4": "16px",
        "5": "20px",
        "6": "24px",
        "8": "32px",
        "10": "40px",
        "12": "48px",
        "16": "64px",
        "20": "80px",
        "24": "96px",
      },
      boxShadow: {
        "sm": "var(--shadow-sm)",
        "md": "var(--shadow-md)",
        "lg": "var(--shadow-lg)",
        "xl": "var(--shadow-xl)",
        "card": "var(--shadow-card)",
        "card-hover": "var(--shadow-card-hover)",
      },
      borderRadius: {
        "sm": "4px",
        "md": "8px",
        "lg": "12px",
        "xl": "16px",
        "2xl": "24px",
      },
    },
  },
  plugins: [],
};