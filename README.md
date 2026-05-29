# SIVIT — Landing page

Landing page premium para **SIVIT**, academia de conducción en Colombia. Orientada a la conversión: venta online del **Curso de Conducción A2** y del **Examen Médico para renovación**.

Construida con un stack moderno (React + Vite + Tailwind) y experiencias premium: preloader cinematográfico, héroe 3D con React Three Fiber, animaciones GSAP + Framer Motion, smooth scroll con Lenis y SEO técnico completo.

---

## ✨ Características

- **Preloader** cinematográfico con logo animado, barra de progreso y partículas.
- **Héroe 3D** (React Three Fiber): tarjeta-credencial metálica flotante, reactiva al mouse, con iluminación dinámica y partículas. Degrada a una versión estática elegante en móvil o con *reduced motion*.
- **Animaciones**: GSAP + ScrollTrigger (timeline de proceso), Framer Motion (reveals, carrusel, menú), Lenis (smooth scroll), micro-interacciones y hover premium.
- **Secciones**: Héroe · Cursos (pricing) · Beneficios · ¿Por qué SIVIT? · Proceso · Testimonios · Métodos de pago · FAQ · CTA final · Contacto · Footer.
- **CRO**: CTA fijo en navbar, barra de compra fija en móvil, WhatsApp flotante, señales de confianza, énfasis en PSE/Addi.
- **SEO técnico**: meta tags, Open Graph, Twitter Cards, JSON-LD (`DrivingSchool` + `FAQPage`), `sitemap.xml`, `robots.txt`, manifest.
- **Responsive** mobile-first y **accesible** (focus visible, `prefers-reduced-motion`, contraste, labels ARIA).
- Listo para **desplegar en Vercel**.

## 🧱 Stack

React 18 · Vite 5 · Tailwind CSS 3 · Framer Motion · GSAP (ScrollTrigger) · Three.js · @react-three/fiber · @react-three/drei · Lenis · lucide-react · class-variance-authority.

## 🚀 Inicio rápido

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo en http://localhost:5191
npm run build    # build de producción en /dist
npm run preview  # previsualizar el build
```

> Requiere Node 18+.

## 📁 Estructura

```
SIVIT/
├─ public/                 # favicon, logo, og-image, robots, sitemap, manifest
├─ src/
│  ├─ components/
│  │  ├─ ui/               # Button, Badge, Section, Reveal, Marquee (shadcn-style)
│  │  ├─ brand/            # Logo / LogoMark
│  │  ├─ three/            # HeroScene (R3F)
│  │  └─ *.jsx             # Navbar, Hero, Pricing, Benefits, WhyUs, Process,
│  │                       # Testimonials, Payments, FAQ, FinalCTA, Contact,
│  │                       # Footer, WhatsAppButton, MobileCTA, Preloader
│  ├─ config/site.js       # ← datos de contacto, precios, redes, WhatsApp
│  ├─ data/                # contenido de cada sección
│  ├─ hooks/               # useLenis, useMediaQuery, usePrefersReducedMotion
│  ├─ lib/utils.js         # cn(), formatCOP()
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css
├─ index.html              # meta tags + JSON-LD
├─ tailwind.config.js      # design tokens (colores, tipografía, animaciones)
└─ vite.config.js
```

## ⚙️ Configuración

Edita **`src/config/site.js`** para personalizar el sitio sin tocar componentes:

- Teléfono, WhatsApp y mensaje por defecto.
- Dirección y **ciudad** (`address.city`) — recomendado completarla para mejorar el SEO local.
- Redes sociales (Instagram, Facebook).
- `domain` — usado en enlaces canónicos.

Los precios y el contenido de los cursos están en **`src/data/products.js`**.

Antes de publicar, reemplaza el dominio `https://sivit.com.co` en `index.html`, `public/robots.txt` y `public/sitemap.xml` por el dominio real.

### Botones de compra

Los botones de compra abren WhatsApp con un mensaje prellenado por producto. Si más adelante tienes enlaces de pago directos (PSE/Addi), puedes apuntar los CTA a esas URLs en `src/data/products.js`.

## ☁️ Despliegue en Vercel

1. Sube el proyecto a un repositorio (GitHub/GitLab).
2. Importa el repo en [Vercel](https://vercel.com/new). Detecta Vite automáticamente.
   - Build command: `npm run build`
   - Output directory: `dist`
3. Deploy. (Incluye `vercel.json` con cabeceras de caché y reescrituras.)

## 🎨 Identidad

- **Colores**: azul corporativo `#0B5CFF`, negro `#060B16`, blanco/`#F6F8FC`.
- **Tipografía**: Sora (títulos) + Inter (texto).

## 🔄 Regenerar la imagen Open Graph

`public/og-image.png` (1200×630) se generó a partir de una plantilla HTML. Para rehacerla, crea un HTML 1200×630 con el diseño deseado y captúralo como PNG en `public/og-image.png`.

---

© SIVIT. Todos los derechos reservados.
