import type { Dictionary } from "../dictionary";

// NOTE: traduction assistée par IA, en attente d'une relecture native avant
// mise en production (aucun locuteur natif ES dans l'équipe pour l'instant).
export const es: Dictionary = {
  meta: {
    title: "Calyroc — Estudio web para sitios modernos y de alto rendimiento",
    description:
      "Sitios web y tiendas online a medida, diseñados y desarrollados por Thomas Prud'homme. Stack moderno, entrega rápida, precios transparentes.",
  },
  nav: {
    services: "Servicios",
    work: "Proyectos",
    pricing: "Precios",
    about: "Sobre mí",
    blog: "Blog",
    studio: "Estudio",
    contact: "Contacto",
    themeToLight: "Cambiar a modo claro",
    themeToDark: "Cambiar a modo oscuro",
    openMenu: "Abrir el menú",
    closeMenu: "Cerrar el menú",
  },
  home: {
    eyebrow: "Estudio web con sede en Suiza",
    heroTitle: "Sitios web rápidos y a medida, sin rodeos.",
    heroSubtitle:
      "Calyroc diseña y desarrolla sitios web corporativos y de comercio electrónico modernos para autónomos, pymes y startups — stack de vanguardia, contacto directo, precios claros.",
    ctaPrimary: "Solicitar presupuesto",
    ctaSecondary: "Ver proyectos",
    trustLine:
      "Habla con Thomas, no con un jefe de proyecto — desde la primera respuesta hasta la publicación.",
    scrollHint: "Desplazarse hacia abajo",
    processEyebrow: "Cómo funciona",
    processTitle: "Cuatro pasos, sin zonas grises.",
    processSteps: [
      {
        title: "Describe su proyecto",
        description:
          "A través del formulario de contacto o directamente con Ask Calyroc — dos minutos bastan para sentar las bases.",
      },
      {
        title: "Presupuesto claro en 48h",
        description: "Un precio fijo y un plazo realista, no una horquilla que se dispara después.",
      },
      {
        title: "Desarrollo con seguimiento",
        description: "Ve el sitio avanzar y da su opinión antes de la entrega final, no después.",
      },
      {
        title: "Entrega + 2 revisiones incluidas",
        description: "El sitio es suyo, con dos rondas de ajustes incluidas en el precio acordado.",
      },
    ],
    priceCompareEyebrow: "El mismo sitio, en otro lugar",
    priceCompareTitle: "Lo que cuesta un sitio comparable en una agencia tradicional.",
    priceCompareAgencyLabel: "Agencia tradicional",
    priceCompareItems: [
      { label: "Descubrimiento y estrategia", range: "800 – 1.500 CHF" },
      { label: "Diseño y UX", range: "1.500 – 3.000 CHF" },
      { label: "Desarrollo", range: "3.000 – 6.000 CHF" },
      { label: "SEO y lanzamiento", range: "800 – 1.500 CHF" },
    ],
    priceCompareAgencyTotal: "6.000 – 12.000 CHF",
    priceCompareCalyrocLabel: "En Calyroc",
    priceCompareNote:
      "Rango indicativo basado en las tarifas estándar del mercado suizo para un sitio multipágina profesional comparable al plan Pro.",
    servicesEyebrow: "Lo que hago",
    servicesTitle: "Tres formas de empezar, un enfoque a medida.",
    servicesCta: "Ver todos los servicios",
    workEyebrow: "Proyectos",
    workTitle: "Proyectos reales, no maquetas.",
    workCta: "Ver todos los proyectos",
    ctaBandTitle: "¿Tiene un proyecto en mente?",
    ctaBandSubtitle: "Descríbalo en pocas líneas, le respondo en menos de 48h.",
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
    title: "Un sitio pensado para su negocio, no una plantilla reciclada.",
    subtitle:
      "Cada servicio se define de antemano: qué incluye, la tecnología utilizada, el plazo indicativo. Sin sorpresas en la factura.",
    ctaLabel: "Solicitar presupuesto",
    includesLabel: "Incluye",
    techLabel: "Stack",
    timelineLabel: "Plazo indicativo",
    items: [
      {
        title: "Sitio corporativo",
        description: "Presenta su negocio, genera confianza y convierte visitas en contactos.",
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
        description: "Hosting, actualizaciones y pequeños cambios, sin preocuparse.",
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
    subtitle:
      "Dos proyectos construidos y en producción — una plataforma de e-commerce y un portfolio personal — con usuarios y tráfico reales.",
    problemLabel: "Contexto",
    stackLabel: "Stack",
    featuresLabel: "Funcionalidades",
    resultsLabel: "Resultado",
    linkLabel: "Ver el sitio",
    ctaTitle: "¿Su proyecto, el próximo en esta página?",
    ctaSubtitle: "Hablemos de lo que desea construir.",
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
    subtitle:
      "Tres planes base a precio fijo para empezar rápido y sin sorpresas en la factura, más un presupuesto a medida para todo lo demás.",
    guaranteeLabel: "El precio acordado es el precio que paga — sin costes ocultos.",
    deliveryLabel: "Plazo",
    finderEyebrow: "¿No sabe qué plan elegir?",
    finderTitle: "Encuentre el suyo en 3 preguntas.",
    finderSubtitle: "Responda algunas preguntas y le indico qué plan encaja con su proyecto.",
    finderTypeQuestion: {
      question: "¿Qué desea construir?",
      options: [
        { value: "vitrine", label: "Sitio corporativo" },
        { value: "multipage", label: "Sitio multipágina" },
        { value: "ecommerce", label: "Tienda online" },
        { value: "webapp", label: "Aplicación a medida" },
      ],
    },
    finderPagesQuestion: {
      question: "¿Cuántas páginas, aproximadamente?",
      options: [
        { value: "1", label: "1 página" },
        { value: "few", label: "2 a 5 páginas" },
        { value: "many", label: "6 páginas o más" },
      ],
    },
    finderLanguagesQuestion: {
      question: "¿Cuántos idiomas?",
      options: [
        { value: "1-2", label: "1 a 2 idiomas" },
        { value: "3", label: "3 idiomas" },
        { value: "4-6", label: "4 a 6 idiomas" },
      ],
    },
    finderResultTitle: "Este plan parece encajar con usted:",
    finderResultCta: "Ver el detalle",
    finderRestartLabel: "Empezar de nuevo",
    finderBackLabel: "Atrás",
    packs: [
      {
        id: "essentiel",
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
        timeline: "1 a 2 semanas",
        highlighted: false,
      },
      {
        id: "pro",
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
        timeline: "2 a 4 semanas",
        highlighted: true,
      },
      {
        id: "sur-mesure",
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
        timeline: "Desde 4 semanas",
        highlighted: false,
      },
    ],
    maintenanceTitle: "Mantenimiento",
    maintenanceText:
      "35 CHF/mes: hosting, actualizaciones de seguridad y pequeños cambios de contenido, sin preocuparse.",
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
          "No, el dominio (unos 15 CHF/año para un .ch) y el hosting van aparte, pero puedo gestionarlo todo por usted si lo prefiere.",
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
    faqSeeMoreLabel: "Ver todas las preguntas",
    ctaLabel: "Solicitar presupuesto",
  },
  aboutPage: {
    eyebrow: "Sobre mí",
    title: "Un desarrollador, no una agencia.",
    subtitle:
      "Calyroc soy yo — Thomas. Sin jefe de proyecto, sin subcontratación, sin costes de estructura repercutidos en su presupuesto.",
    founderRole: "Desarrollador solo · Aprendiz CFC de Informática",
    portfolioLabel: "Mi portfolio",
    linkedinLabel: "LinkedIn",
    storyTitle: "Mi trayectoria",
    storyParagraphs: [
      "Me llamo Thomas Prud'homme. Estoy formándome como aprendiz CFC en informática de explotación e infraestructura, con base en Ginebra, Suiza.",
      "Calyroc nació de una constatación simple: la mayoría de autónomos y pequeñas empresas no necesitan una agencia de diez personas para tener un sitio rápido y bien construido. Necesitan a alguien competente que responda rápido y cumpla los plazos.",
      "Trabajo con un flujo asistido por IA — esto acelera la escritura del código, no la reflexión sobre lo que su sitio necesita. El resultado: plazos más cortos y precios más bajos que una agencia tradicional, sin sacrificar la calidad.",
      "La mejor prueba: Swiss3Design, una plataforma e-commerce de impresión 3D con pagos Stripe reales en producción. No una maqueta — un sitio real, con clientes reales.",
    ],
    whyTitle: "Por qué esto importa para usted",
    whyPoints: [
      {
        title: "Contacto directo",
        description:
          "Me escribe, le respondo. Sin tickets, sin rotación de equipo a mitad de proyecto.",
      },
      {
        title: "Precios controlados",
        description: "Sin costes de estructura de agencia repercutidos en su presupuesto.",
      },
      {
        title: "Stack moderno",
        description:
          "Cloudflare Workers, React, TypeScript — el mismo stack que uso para mis propios proyectos en producción.",
      },
      {
        title: "Honestidad",
        description:
          "Estoy en formación y lo digo claramente. Es garantía de agilidad y precios justos, no una excusa.",
      },
    ],
    ctaTitle: "Hablemos de su proyecto.",
    ctaSubtitle: "Descríbame su proyecto, le respondo en 48h.",
    ctaLabel: "Empezar la conversación",
  },
  contactPage: {
    eyebrow: "Contacto",
    title: "Hablemos de su proyecto.",
    subtitle:
      "Describa lo que desea construir, y le respondo en 48h con una valoración concreta y un presupuesto claro y fijo.",
    formName: "Nombre",
    formEmail: "Email",
    formPackLabel: "Plan deseado",
    formPackUnsureLabel: "Aún no lo sé",
    formMessage: "Su proyecto",
    formMessagePlaceholder: "Describa su negocio, lo que desea construir, sus plazos...",
    formSubmit: "Enviar",
    formSubmitting: "Enviando...",
    formSuccess: "Mensaje enviado — le respondo en 48h.",
    formError: "Ha ocurrido un error. Escríbame directamente a hello@calyroc.com.",
    directTitle: "O escríbame directamente",
    responseTime: "Respuesta en 48h, en días laborables.",
    paymentSuccessTitle: "Pago confirmado",
    paymentSuccessBody:
      "Gracias, su pago se ha registrado correctamente. Recibirá un recibo por email en unos instantes.",
    paymentCancelledTitle: "Pago cancelado",
    paymentCancelledBody:
      "El pago se ha cancelado, no se ha realizado ningún cargo. Puede intentarlo de nuevo en cualquier momento o escribirme directamente.",
  },
  legalPageNotice:
    "Esta página ha sido traducida por su comodidad de lectura; solo la versión francesa es jurídicamente vinculante en caso de litigio o divergencia de interpretación.",
  blogPage: {
    eyebrow: "Blog",
    title: "Notas de estudio.",
    subtitle:
      "Decisiones técnicas, aprendizajes y detrás de escena de los proyectos de Calyroc, escritos por el propio desarrollador.",
    readMoreLabel: "Leer el artículo",
    backLabel: "← Volver al blog",
    minutesLabel: "min de lectura",
  },
  faqPage: {
    eyebrow: "Preguntas frecuentes",
    title: "Todas las preguntas.",
    subtitle:
      "Más allá de los precios: el proceso, la tecnología, qué ocurre tras la entrega. ¿No encuentra su pregunta? Escríbame directamente.",
    items: [
      {
        question: "¿Cómo se desarrolla un proyecto, del primer contacto a la puesta en línea?",
        answer:
          "Describe su proyecto a través del formulario de contacto o Ask Calyroc. Recibe un presupuesto claro en 48 horas, con un precio fijo y un plazo realista. El desarrollo comienza tras el pago del anticipo, con puntos de seguimiento regulares para que vea el sitio avanzar. En la entrega, se incluyen dos rondas de revisiones antes de la puesta en línea definitiva.",
      },
      {
        question: "¿Qué tecnologías utiliza?",
        answer:
          "Next.js, TypeScript y Cloudflare Workers para la mayoría de los proyectos — la misma base que utilizo para mis propios sitios en producción. Las decisiones técnicas se adaptan igualmente a cada proyecto (base de datos, pagos, integraciones específicas).",
      },
      {
        question: "¿Mi sitio tendrá un buen posicionamiento en Google?",
        answer:
          "El SEO técnico básico está incluido en cada formula: estructura semántica, tiempos de carga optimizados, datos estructurados, mapa del sitio. Un buen posicionamiento también depende del contenido y del tiempo, pero las bases técnicas quedan listas desde la entrega.",
      },
      {
        question: "¿Quién es propietario del código y del sitio una vez entregado el proyecto?",
        answer:
          "El código fuente y los entregables se le ceden íntegramente al recibir el pago completo. Solo conservo el derecho de mencionar el proyecto en mi portafolio, salvo acuerdo contrario.",
      },
      {
        question: "¿Ofrece mantenimiento después de la entrega?",
        answer:
          "Sí, como opción por 35 CHF/mes: alojamiento, actualizaciones de seguridad y pequeñas modificaciones de contenido, sin que tenga que preocuparse por ello.",
      },
      {
        question: "¿Trabaja con clientes fuera de Suiza?",
        answer:
          "Sí, todo el proceso se realiza a distancia y el sitio (así como el asistente Ask Calyroc) está disponible en 6 idiomas — francés, inglés, español, italiano, alemán y portugués.",
      },
      {
        question: "¿Cómo puedo contactarle durante el desarrollo?",
        answer:
          "Directamente — trata conmigo, no con un jefe de proyecto ni un servicio de atención al cliente. Es una de las principales ventajas de trabajar con un estudio individual en lugar de una agencia.",
      },
    ],
  },
  trackingPage: {
    eyebrow: "Seguimiento de proyecto",
    title: "¿Cómo va su proyecto?",
    subtitle: "El avance en tiempo real, sin tener que preguntar.",
    currentBadge: "En curso",
    doneBadge: "Terminado",
    ctaTitle: "¿Alguna pregunta sobre el avance?",
    ctaLabel: "Escribir a Thomas",
  },
  notFoundPage: {
    eyebrow: "404",
    title: "Esta página no existe.",
    subtitle:
      "El enlace puede estar desactualizado, o la dirección puede contener un error. Así puede retomar el rumbo.",
    ctaHome: "Volver al inicio",
    ctaContact: "Contáctenos",
  },
  chatbot: {
    label: "Pregunte a Calyroc",
    title: "Ask Calyroc",
    aiBadge: "IA",
    intro:
      "¡Hola! Soy el asistente de IA de Calyroc y puedo responder a sus preguntas sobre los servicios y precios. Para un presupuesto exacto, diríjase al [formulario de contacto](/es/contact).",
    placeholder: "Escriba su pregunta...",
    send: "Enviar",
    errorMessage: "Ha ocurrido un error, inténtelo de nuevo o escriba a hello@calyroc.com.",
    disclaimer: "Respuestas generadas por IA, sin valor contractual.",
    close: "Cerrar",
    copy: "Copiar",
    copied: "Copiado",
    expand: "Ampliar",
    collapse: "Reducir",
    resizeHandle: "Redimensionar la ventana",
  },
  email: {
    clientConfirmation: {
      subject: "Hemos recibido su mensaje — Calyroc",
      preview: "Gracias por su mensaje, le respondo en 48h.",
      heading: "Mensaje recibido",
      intro:
        "Gracias por su mensaje. Aquí tiene un resumen — le respondo en 48h con una valoración concreta.",
      recapTitle: "Resumen",
      packLabel: "Plan",
      messageLabel: "Su mensaje",
      responseTimeText: "Respuesta en 48h, en días laborables.",
      signature: "Hasta pronto,<br>Thomas",
    },
    paymentLink: {
      subject: "Su enlace de pago Calyroc",
      preview: "Le espera un enlace de pago seguro.",
      heading: "Su enlace de pago",
      intro: "Aquí tiene el enlace de pago seguro para su proyecto Calyroc.",
      amountLabel: "Importe",
      descriptionLabel: "Descripción",
      ctaLabel: "Pagar online",
      expiryNote: "Este enlace permanece válido hasta que se utilice.",
      signature: "Hasta pronto,<br>Thomas",
    },
    paymentReceipt: {
      subject: "Recibo de pago — Calyroc",
      preview: "Su pago se ha confirmado correctamente.",
      heading: "Pago confirmado",
      intro: "Gracias, hemos recibido su pago correctamente. Aquí tiene el resumen.",
      amountLabel: "Importe pagado",
      dateLabel: "Fecha",
      nextStepsText: "Me pondré en contacto con usted próximamente para continuar con el proyecto.",
      signature: "Gracias por su confianza,<br>Thomas",
    },
  },
};
