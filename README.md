# WT Ingelec - Plataforma Corporativa Web

![Astro](https://img.shields.io/badge/Astro-v5.0-orange?style=flat-square&logo=astro)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v3.4-38B2AC?style=flat-square&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-v5.4-3178C6?style=flat-square&logo=typescript)
![Status](https://img.shields.io/badge/Status-En_Desarrollo-green?style=flat-square)

> **Una experiencia digital de alto impacto para soluciones de ingeniería eléctrica.**

Este proyecto es la **Landing Page Corporativa oficial de WT Ingelec SAS**, diseñada para comunicar profesionalismo, innovación y confianza en el sector de la ingeniería eléctrica. Desarrollada con tecnologías modernas para garantizar un rendimiento excepcional y una experiencia de usuario fluida.

---

## 🌟 Características Principales

- **⚡ Rendimiento Extremo:** Construido sobre **Astro** para entregar HTML estático por defecto, asegurando tiempos de carga mínimos y puntajes perfectos en Core Web Vitals.
- **🎨 Diseño UI/UX Moderno:** Interfaz limpia y corporativa utilizando **Tailwind CSS**, con un tema oscuro y elegante (`#003A74`).
- **✨ Animaciones Avanzadas:** Integración de **GSAP** para animaciones de entrada secuenciales y timelines complejos en el Hero y otras secciones.
- **🌊 Scroll Suave:** Experiencia de navegación premium implementada con **Lenis**.
- **📱 Diseño Responsivo:** Totalmente adaptado para móviles, tablets y escritorio.
- **🧩 Componentes Interactivos:**
  - Carruseles de clientes y testimonios con **Swiper.js**.
  - Acordeones de servicios optimizados.
  - Formularios de contacto funcionales.

## 🛠️ Stack Tecnológico

Este proyecto utiliza una arquitectura moderna JAMstack:

- **Core:** [Astro](https://astro.build/) (v5.x) - Framework metaframwork para web.
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework.
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/) - Para mayor robustez y tipado estático.
- **Animaciones:**
  - [GSAP](https://gsap.com/) - GreenSock Animation Platform.
  - [Lenis](https://lenis.studiofreight.com/) - Smooth Scrolling.
- **UI Components:**
  - [Swiper](https://swiperjs.com/) - Modern touch slider.
  - `astro-navbar` - Gestión de navegación.

## 🚀 Instalación y Uso Local

Sigue estos pasos para ejecutar el proyecto en tu máquina local:

1.  **Clonar el repositorio:**

    ```bash
    git clone https://github.com/tu-usuario/WT-Ingelec.git
    cd WT-Ingelec
    ```

2.  **Instalar dependencias:**

    ```bash
    npm install
    ```

3.  **Iniciar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    El sitio estará disponible en `http://localhost:4321`.

## 📂 Estructura del Proyecto

```text
/
├── public/             # Assets estáticos (imágenes, favicons)
├── src/
│   ├── components/     # Componentes UI reutilizables
│   │   ├── sections/   # Secciones principales (Hero, About, Services...)
│   │   └── ui/         # Elementos base (Botones, Inputs...)
│   ├── data/           # Datos estáticos (JSON) para contenido
│   ├── layouts/        # Plantillas base (MainLayout, HeadLayout)
│   ├── pages/          # Rutas y páginas del sitio (Astro file-based routing)
│   └── styles/         # Estilos globales y configuraciones de Tailwind
└── astro.config.mjs    # Configuración de Astro
```

## 🎯 Enfoque del Desarrollo (Portfolio Highlights)

Este proyecto destaca por varias decisiones técnicas clave enfocadas en la calidad:

- **Optimización de Recursos:** Uso de formatos de imagen modernos (WebP) y carga diferida (lazy loading) para mejorar el LCP (Largest Contentful Paint).
- **Arquitectura de Componentes:** Estructura modular que permite la fácil escalabilidad y mantenimiento del código.
- **Tipografía y Accesibilidad:** Selección cuidadosa de fuentes y colores para asegurar legibilidad y contraste adecuado.
- **Mejora Progresiva:** Funcionalidades básicas garantizadas incluso sin JavaScript, con mejoras interactivas añadidas progresivamente.

---

Desarrollado con ❤️ y ⚡ (Astro)
