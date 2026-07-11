import type { Dictionary } from "../dictionary";

// NOTE: traduction assistée par IA, en attente d'une relecture native avant
// mise en production (aucun locuteur natif ES dans l'équipe pour l'instant).
export const es: Dictionary = {
  meta: {
    title: "Calyroc — Estudio web para sitios modernos y de alto rendimiento",
    description:
      "Sitios web corporativos y de comercio electrónico a medida, diseñados y desarrollados por Thomas Prud'homme. Stack moderno, entrega rápida, precios transparentes.",
  },
  nav: {
    services: "Servicios",
    work: "Proyectos",
    pricing: "Precios",
    contact: "Contacto",
  },
  home: {
    eyebrow: "Estudio web con sede en Suiza",
    heroTitle: "Sitios web rápidos y a medida, sin rodeos.",
    heroSubtitle:
      "Calyroc diseña y desarrolla sitios web corporativos y de comercio electrónico modernos para autónomos, pymes y startups — stack de vanguardia, contacto directo, precios claros.",
    ctaPrimary: "Solicitar presupuesto",
    ctaSecondary: "Ver proyectos",
    servicesEyebrow: "Lo que hago",
    servicesTitle: "Tres formas de empezar, un enfoque a medida.",
    servicesCta: "Ver todos los servicios",
    workEyebrow: "Proyectos",
    workTitle: "Proyectos reales, no maquetas.",
    workCta: "Ver todos los proyectos",
    ctaBandTitle: "¿Tienes un proyecto en mente?",
    ctaBandSubtitle: "Descríbelo en pocas líneas, te respondo en menos de 48h.",
    ctaBandLabel: "Empezar la conversación",
  },
  footer: {
    tagline: "Estudio web independiente — Suiza y Europa.",
    legalLinks: {
      mentionsLegales: "Aviso legal",
      confidentialite: "Privacidad",
      cgv: "Condiciones",
    },
  },
  servicesPage: {
    eyebrow: "Servicios",
    title: "Un sitio pensado para tu negocio, no una plantilla reciclada.",
    subtitle:
      "Cada servicio se define de antemano: qué incluye, la tecnología utilizada, el plazo indicativo. Sin sorpresas en la factura.",
    ctaLabel: "Solicitar presupuesto",
    includesLabel: "Incluye",
    techLabel: "Stack",
    timelineLabel: "Plazo indicativo",
    items: [
      {
        title: "Sitio corporativo",
        description: "Presenta tu negocio, genera confianza y convierte visitas en contactos.",
        includes: [
          "Diseño a medida, sin plantillas genéricas",
          "Responsive móvil/tablet/escritorio",
          "Formulario de contacto integrado",
          "SEO técnico básico",
        ],
        tech: "React, TypeScript, Cloudflare Workers",
        timeline: "1 a 2 semanas",
      },
      {
        title: "E-commerce",
        description: "Vende online con un catálogo claro y pagos fiables.",
        includes: [
          "Catálogo de productos y gestión de stock",
          "Pago seguro con Stripe",
          "Cuenta de cliente (pedidos, historial)",
          "Emails transaccionales automáticos",
        ],
        tech: "React, Stripe, Cloudflare Workers",
        timeline: "4 a 6 semanas",
      },
      {
        title: "Rediseño",
        description: "Moderniza un sitio existente sin perder el posicionamiento SEO.",
        includes: [
          "Auditoría del sitio actual (rendimiento, SEO, contenido)",
          "Migración del contenido existente",
          "Redirecciones correctas para preservar el SEO",
          "Nuevo diseño, misma URL",
        ],
        tech: "Adaptado al sitio existente",
        timeline: "2 a 4 semanas",
      },
      {
        title: "Landing page",
        description: "Una página única, centrada en una oferta, producto o lanzamiento.",
        includes: [
          "Estructura orientada a la conversión",
          "Formulario o llamada a la acción única",
          "Optimizada para carga instantánea",
        ],
        tech: "React, Cloudflare Workers",
        timeline: "3 a 5 días",
      },
      {
        title: "Mantenimiento",
        description: "Hosting, actualizaciones y pequeños cambios, sin preocuparte.",
        includes: [
          "Hosting Cloudflare incluido",
          "Actualizaciones de seguridad",
          "Pequeños cambios de contenido",
          "Soporte por email",
        ],
        tech: "—",
        timeline: "Suscripción mensual",
      },
      {
        title: "SEO técnico",
        description: "Estructura, rendimiento e indexación para aparecer en Google.",
        includes: [
          "Auditoría de rendimiento (Core Web Vitals)",
          "Datos estructurados (JSON-LD)",
          "Sitemap y robots.txt",
          "Recomendaciones de contenido",
        ],
        tech: "Independiente del stack",
        timeline: "1 semana",
      },
      {
        title: "Identidad visual",
        description: "Un logo simple y una paleta coherente para empezar con una imagen clara.",
        includes: [
          "Logo (formatos web e impresión)",
          "Paleta de colores y tipografías",
          "Variantes favicon / redes sociales",
        ],
        tech: "—",
        timeline: "1 semana",
      },
    ],
  },
  workPage: {
    eyebrow: "Proyectos",
    title: "Proyectos reales, no maquetas.",
    subtitle: "Dos proyectos construidos y en producción, con usuarios y tráfico reales.",
    problemLabel: "Contexto",
    stackLabel: "Stack",
    featuresLabel: "Funcionalidades",
    resultsLabel: "Resultado",
    linkLabel: "Ver el sitio",
    ctaTitle: "¿Tu proyecto, el próximo en esta página?",
    ctaSubtitle: "Hablemos de lo que quieres construir.",
    ctaLabel: "Empezar un proyecto",
    caseStudies: [
      {
        title: "Swiss3Design",
        tagline: "Plataforma e-commerce de impresión 3D multicolor",
        category: "E-commerce",
        problem:
          "Vender objetos impresos en 3D hasta con 4 colores, con presupuestos a medida y pago online, desde un taller en Gland (VD).",
        stack: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle", "Stripe", "Cloudflare Workers"],
        features: [
          "Catálogo de productos con configurador de colores",
          "Presupuestos a medida a partir de archivos 3D",
          "Pagos Stripe reales en producción",
          "Cuentas de cliente con autenticación de dos factores",
          "Panel de administración completo del negocio",
        ],
        results: ["Plataforma en producción con pedidos y pagos reales", "Multilingüe FR/DE/IT/EN"],
        url: "https://swiss3design.ch",
      },
      {
        title: "Portfolio — thomastp.ch",
        tagline: "Portfolio personal con animaciones avanzadas",
        category: "Corporativo",
        problem:
          "Presentar una trayectoria y proyectos técnicos de forma memorable, con un acabado capaz de destacar.",
        stack: ["React", "TypeScript", "GSAP", "Lenis", "Cloudflare Workers"],
        features: [
          "Hero con partículas 3D animadas",
          "Scroll fluido y animaciones al desplazarse",
          "Asistente conversacional integrado",
          "Bilingüe FR/EN",
        ],
        results: ["Puntuación de rendimiento alta (Core Web Vitals)"],
        url: "https://thomastp.ch",
      },
    ],
  },
  pricingPage: {
    eyebrow: "Precios",
    title: "Precios claros, sin letra pequeña.",
    subtitle: "Tres planes base para empezar rápido, y un presupuesto a medida para todo lo demás.",
    packs: [
      {
        name: "Esencial",
        price: "590 CHF",
        priceNote: "unos 600 €",
        description: "Un sitio profesional de una página, para empezar rápido.",
        features: [
          "Sitio de una página",
          "Diseño a medida",
          "Responsive móvil/escritorio",
          "Formulario de contacto",
          "2 idiomas (FR/EN)",
        ],
        highlighted: false,
      },
      {
        name: "Pro",
        price: "1.490 CHF",
        priceNote: "unos 1.550 €",
        description: "Un sitio multipágina completo, listo para convertir visitantes.",
        features: [
          "Sitio multipágina (5-6 páginas)",
          "Hasta 3 idiomas",
          "Animaciones cuidadas",
          "SEO técnico incluido",
          "Blog opcional",
        ],
        highlighted: true,
      },
      {
        name: "A medida",
        price: "Desde 2.900 CHF",
        priceNote: "presupuesto personalizado",
        description: "E-commerce, aplicación web o una necesidad específica.",
        features: [
          "E-commerce o web app",
          "Panel de administración",
          "Pago online integrado",
          "Integraciones complejas",
          "Hasta 6 idiomas",
        ],
        highlighted: false,
      },
    ],
    maintenanceTitle: "Mantenimiento",
    maintenanceText:
      "35 CHF/mes: hosting, actualizaciones de seguridad y pequeños cambios de contenido, sin preocuparte.",
    termsTitle: "Cómo funciona",
    terms: [
      "Depósito del 30-50% al encargar, pagado online",
      "Saldo facturado en la entrega, antes de publicar",
      "2 rondas de revisiones incluidas por plan",
      "Plazo indicativo: 1-2 semanas (Esencial) a 6 semanas (A medida)",
    ],
    faqTitle: "Preguntas frecuentes",
    faq: [
      {
        question: "¿El precio incluye el dominio?",
        answer:
          "No, el dominio (unos 15 CHF/año para un .ch) y el hosting van aparte, pero puedo gestionarlo todo por ti si lo prefieres.",
      },
      {
        question: "¿Cuántas revisiones incluye?",
        answer:
          "Dos rondas de revisiones por plan. Más allá, los cambios adicionales se facturan aparte.",
      },
      {
        question: "¿Y si mi proyecto no encaja en ningún plan?",
        answer:
          "Hablémoslo directamente — el plan A medida existe justo para proyectos que se salen del marco estándar.",
      },
      {
        question: "¿Cómo funciona el pago?",
        answer:
          "Un depósito del 30-50% al encargar vía Stripe, y el saldo en la entrega, antes de publicar.",
      },
    ],
    ctaLabel: "Solicitar presupuesto",
  },
  contactPage: {
    eyebrow: "Contacto",
    title: "Hablemos de tu proyecto.",
    subtitle: "Describe lo que quieres construir, te respondo en 48h con una valoración concreta.",
    formName: "Nombre",
    formEmail: "Email",
    formBudget: "Presupuesto indicativo",
    formBudgetOptions: [
      "Esencial (desde 590 CHF)",
      "Pro (desde 1.490 CHF)",
      "A medida (desde 2.900 CHF)",
      "Aún no lo sé",
    ],
    formMessage: "Tu proyecto",
    formMessagePlaceholder: "Describe tu negocio, lo que quieres construir, tus plazos...",
    formSubmit: "Enviar",
    formSubmitting: "Enviando...",
    formSuccess: "Mensaje enviado — te respondo en 48h.",
    formError: "Ha ocurrido un error. Escríbeme directamente a hello@calyroc.com.",
    directTitle: "O escríbeme directamente",
    responseTime: "Respuesta en 48h, en días laborables.",
  },
  legalPageNotice:
    "Esta página legal solo existe en francés, versión de referencia legalmente válida.",
  chatbot: {
    label: "Pregunta a Calyroc",
    title: "Ask Calyroc",
    intro:
      "¡Hola! Puedo responder preguntas sobre los servicios y precios de Calyroc. Para un presupuesto real, ve al formulario de contacto.",
    placeholder: "Escribe tu pregunta...",
    send: "Enviar",
    errorMessage: "Ha ocurrido un error, inténtalo de nuevo o escribe a hello@calyroc.com.",
    disclaimer: "Respuestas generadas por IA, sin valor contractual.",
  },
};
