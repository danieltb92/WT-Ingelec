# Documento de Requisitos del Producto (PRD)

**Nombre del Proyecto:** WT Ingelec - Plataforma Corporativa Web  
**Versión:** 1.0  
**Estado:** En Desarrollo  
**Fecha:** 16 de Diciembre, 2024

---

## 1. Resumen Ejecutivo

El proyecto consiste en el desarrollo de una **landing page corporativa de alto impacto** para **WT Ingelec SAS**, una empresa líder en soluciones de ingeniería eléctrica. El objetivo principal es establecer una presencia digital sólida que comunique profesionalismo, innovación y confiabilidad (principios clave de la marca), sirviendo como herramienta principal para la captación de clientes y la presentación de portafolio.

## 2. Objetivos del Negocio

- **Captación de Leads:** Facilitar que clientes potenciales (industriales y comerciales) contacten a la empresa fácilmente.
- **Autoridad de Marca:** Mostrar experiencia a través de casos de éxito reales (ej. Aeronáutica Civil, Petrobras).
- **Presentación de Servicios:** Explicar claramente el catálogo de servicios (Mantenimiento, Diseños Eléctricos, Montajes).
- **Performance:** Garantizar una carga ultrarrápida y una experiencia de usuario fluida para mejorar el posicionamiento SEO.

## 3. Público Objetivo (User Personas)

1.  **Gerentes de Operaciones / Infraestructura:** Buscan proveedores confiables para mantenimiento o proyectos nuevos en sus empresas (ej. Aeropuertos, Estaciones de Servicio). Valoran la experiencia técnica y certificaciones.
2.  **Dueños de Negocios Industriales:** Buscan soluciones integrales (diseño + montaje) para no lidiar con múltiples contratistas.
3.  **Entidades Estatales:** Buscan contratistas con historial comprobado de cumplimiento en licitaciones (ej. Aeronáutica Civil).

## 4. Alcance Funcional (Sitemap & Features)

### 4.1. Página de Inicio (Home)

La entrada principal debe impactar visualmente y guiar al usuario.

- **Hero Section:**
  - Título H1 claro ("Soluciones Eléctricas | WT Ingelec").
  - Subtítulo de valor (Innovación y confiabilidad).
  - Call-to-Action (CTA) primario ("Solicitar Cotización" o "Ver Servicios").
  - _Posible mejora:_ Integración de animaciones de fondo (Vanta.js o partículas) para denotar "energía".
- **Sección de Clientes / Sponsors:** Carrusel de logotipos de clientes actuales para generar confianza inmediata.
- **Casos de Éxito (Cases):**
  - Visualización de proyectos destacados (data proveniente de `clientData.json`).
  - Detalles: Cliente, Tipo de Proyecto y Descripción técnica breve.
- **Propuesta de Valor (Proposal):** Sección destacada de por qué elegir a WT Ingelec.
- **Testimonios:** Slider con reseñas de clientes satisfechos.

### 4.2. Página de Servicios

- **Listado de Servicios:** Desglose detallado de la oferta (posiblemente usando `AccordionServices.astro` para ahorrar espacio).
- **Proceso de Trabajo (Process):** Explicación visual paso a paso de cómo trabajan (Diagnóstico -> Propuesta -> Ejecución).

### 4.3. Página "Sobre Nosotros" (About)

- **Historia y Misión:** Narrativa de la empresa.
- **Equipo (Team):** Fotos y roles del personal clave para humanizar la marca.

### 4.4. Contacto

- Formulario de contacto funcional.
- Datos de ubicación, teléfono y correo electrónico.
- Mapa (opcional).

### 4.5. Componentes Transversales

- **Navegación (Navbar):** Menú responsivo (mobile-first).
- **Footer:** Enlaces rápidos, legales y datos de contacto.

## 5. Requisitos No Funcionales (Técnicos)

### 5.1. Stack Tecnológico

- **Core:** [Astro](https://astro.build/) (v5.x) - Elegido por su rendimiento y capacidad de generar HTML estático.
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/) - Para desarrollo rápido y diseño responsivo customizado.
- **Lenguaje:** TypeScript - Para seguridad de tipos y mantenibilidad.
- **Animaciones:**
  - **GSAP (GreenSock):** Para animaciones complejas de entrada y scroll.
  - **Lenis:** Para "smooth scrolling" (desplazamiento suave de lujo).
- **Componentes UI:** Swiper (para carruseles/sliders).

### 5.2. Rendimiento (Performance)

- **Core Web Vitals:** El sitio debe puntuar >90 en Lighthouse (Performance, Accessibility, SEO).
- **Imágenes:** Uso de formatos modernos (WebP/AVIF) y lazy loading nativo de Astro.
- **SEO:** Etiquetas meta dinámicas (título, descripción) para cada página (gestionado en `siteData.json` y layouts).

### 5.3. Diseño (UI/UX)

- **Estética:** "Ingeniería Moderna". Uso de paleta de colores corporativa (probablemente azules, blancos, grises industriales o acentos eléctricos).
- **Responsividad:** Diseño 100% adaptable a móviles, tablets y escritorio.

## 6. Estructura de Datos Actual

El proyecto maneja datos estructurados para facilitar actualizaciones sin tocar código duro:

- `siteData.json`: Información global del sitio (Metadata SEO, Título general).
- `clientData.json`: Base de datos de proyectos realizados (Cliente, Descripción, Link).

## 7. Roadmap y Próximos Pasos Sugeridos

1.  **Fase 1 (MVP - Actual):** Estructura base, migración de contenido real, despliegue inicial.
2.  **Fase 2 (Interacción):** Refinar animaciones GSAP para que los elementos aparezcan al hacer scroll (fade-ins, slides). Implementar efecto de partículas en el Hero.
3.  **Fase 3 (Contenido):** Expandir la sección de `Cases.astro` para tener páginas de detalle individuales por proyecto si es necesario.
4.  **Fase 4 (Optimización):** Auditoría de SEO técnico y accesibilidad.
