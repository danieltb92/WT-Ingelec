# Documento de Requisitos del Producto (PRD)

**Nombre del Proyecto:** WT Ingelec - Plataforma Corporativa Web  
**Versión:** 1.2  
**Estado:** En Producción (Mejora Continua)  
**Fecha de Última Actualización:** 22 de Diciembre, 2025

---

## 1. Resumen Ejecutivo

El proyecto consiste en el desarrollo de una **landing page corporativa de alto impacto** para **WT Ingelec SAS**, una empresa líder en soluciones de ingeniería eléctrica. El objetivo principal es establecer una presencia digital sólida que comunique profesionalismo, innovación y confiabilidad (principios clave de la marca), sirviendo como herramienta principal para la captación de clientes y la presentación de portafolio.

Actualmente, el proyecto se encuentra en una etapa avanzada de maquetación con componentes funcionales en **Astro**, utilizando **Tailwind CSS** para estilos y **GSAP** para animaciones.

## 2. Objetivos del Negocio

- **Captación de Leads:** Facilitar que clientes potenciales (industriales y comerciales) contacten a la empresa fácilmente a través de formularios optimizados.
- **Autoridad de Marca:** Mostrar experiencia a través de casos de éxito reales (ej. Aeronáutica Civil, Petrobras).
- **Presentación de Servicios:** Explicar claramente el catálogo de servicios (Mantenimiento, Diseños Eléctricos, Montajes).
- **Performance:** Garantizar una carga ultrarrápida y una experiencia de usuario fluida (Core Web Vitals > 90).

## 3. Público Objetivo (User Personas)

1.  **Gerentes de Operaciones / Infraestructura:** Buscan proveedores confiables para mantenimiento o proyectos nuevos.
2.  **Dueños de Negocios Industriales:** Buscan soluciones integrales (diseño + montaje).
3.  **Entidades Estatales:** Buscan contratistas con historial comprobado de cumplimiento.

## 4. Alcance Funcional Actual (Sitemap & Features)

### 4.1. Página de Inicio (Home)

- **Hero Section:**
  - **Estado:** Implementado.
  - **Contenido:** Título H1 Animado ("Soluciones Eléctricas de Vanguardia..."), Subtítulo y Botón CTA ("Empieza tu proyecto").
  - **Visual:** Imagen de fondo estática de alta calidad (`heroNavidad.webp` actualmente activa por temporada).
  - **Animaciones:** Entrada secuencial de textos y botón con GSAP (`gsap.timeline`).
  - _Pendiente:_ Integración final de efectos de fondo interactivos (Vanta.js o partículas/nieve) que se han explorado pero no están activos en la versión principal `Hero.astro`.
- **Sección de Clientes / Sponsors:** `Sponsors.astro` - Carrusel/Grid de logotipos de clientes.
- **Casos de Éxito (Cases):** `Cases.astro` - Visualización de proyectos destacados.
- **Propuesta de Valor (Proposal):** `Proposal.astro`.
- **Testimonios:** `Testimonials.astro` - Implementado con `SwiperSlider`. _Nota: Textos por defecto en inglés, requieren localización a español._

### 4.2. Página de Servicios

- **Pagina Dedicada:** `services.astro`.
- **Componentes:**
  - `AccordionServices.astro`: Desglose detallado de la oferta en formato acordeón para optimizar espacio.
  - `Process.astro`: Sección para explicar el flujo de trabajo (actualmente reutiliza componentes de acordeón, verificar contenido final).

### 4.3. Página "Sobre Nosotros" (About)

- **Pagina Dedicada:** `about.astro`.
- **Componentes:**
  - `About.astro`: Narrativa de la empresa.
  - `Team.astro`: Sección para presentar al equipo de trabajo.

### 4.4. Contacto

- **Componente:** `Contact.astro`.
- **Funcionalidad:** Formulario de contacto funcional (`Form.astro`) integrado en el home y posible página dedicada.

### 4.5. Componentes Transversales

- **Navegación:** `Navbar` responsivo (Astro Navbar).
- **Footer:** Componente de pie de página estándar.

## 5. Requisitos No Funcionales (Técnicos)

### 5.1. Stack Tecnológico (Confirmado)

- **Core:** [Astro](https://astro.build/) (v5.x) - Generación de sitio estático (SSG) / Híbrido.
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/) (v3.x).
- **Lenguaje:** TypeScript.
- **Animaciones:**
  - **GSAP (GreenSock):** Usado extensivamente para timelines y animaciones de entrada.
  - **Lenis:** Implementado para scroll suave.
- **Componentes UI:**
  - `Swiper`: Para carruseles (testimonios, sponsors).
  - `astro-navbar`: Manejo de navegación.

_Nota: React ha sido removido/no está en uso en las dependencias actuales._

### 5.2. Diseño (UI/UX)

- **Estética:** Corporativa moderna, uso de tema oscuro/azul profundo (`#003A74`).
- **Temporada:** Adaptabilidad de assets gráficos (ej. Hero de Navidad).

## 6. Estructura de Datos

- `src/data/siteData.json`: Configuración general y metadatos SEO.
- `src/data/clientData.json`: Información estructurada de proyectos y clientes.

## 7. Estado Actual y Próximos Pasos (Roadmap)

**Estado:** Fase 1 (MVP) Completada y Desplegada. Actualmente en ciclo de mejora continua.

**Pendientes Inmediatos:**

1.  **Localización:** Traducir textos placeholder en `Testimonials` y asegurar consistencia de idioma en todo el sitio.
2.  **Refinamiento de Contenido:** Verificar que `Process.astro` y `AccordionServices.astro` tengan el contenido diferenciado correcto.
3.  **Efectos Visuales:** Decidir e implementar la versión final del fondo del Hero (Estático vs Interactivo/Vanta/Nieve).
4.  **Gestión:** Se ha establecido un tablero Kanban (Jira/Trello) para el seguimiento de tareas pendientes.
