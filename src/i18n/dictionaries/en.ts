import type { Dictionary } from "../dictionary";

export const en: Dictionary = {
  meta: {
    title: "Calyroc — Web studio for modern, high-performance websites",
    description:
      "Custom showcase and e-commerce websites, designed and built by Thomas Prud'homme. Modern stack, fast delivery, transparent pricing.",
  },
  nav: {
    services: "Services",
    work: "Work",
    pricing: "Pricing",
    about: "About",
    contact: "Contact",
  },
  home: {
    eyebrow: "Web studio based in Switzerland",
    heroTitle: "Fast, custom websites, delivered without the detour.",
    heroSubtitle:
      "Calyroc designs and builds modern showcase and e-commerce websites for freelancers, SMEs and startups — cutting-edge stack, direct contact, clear pricing.",
    ctaPrimary: "Request a quote",
    ctaSecondary: "See the work",
    trustLine: "You talk to Thomas, not a project manager — from the first reply to launch day.",
    processEyebrow: "How it works",
    processTitle: "Four steps, no grey areas.",
    processSteps: [
      {
        title: "You describe your project",
        description:
          "Through the contact form or directly with Ask Calyroc — two minutes is enough to lay the groundwork.",
      },
      {
        title: "Clear quote within 48h",
        description: "A fixed price and a realistic timeline, not a range that balloons later.",
      },
      {
        title: "Development with progress check-ins",
        description:
          "You see the site take shape and give feedback before final delivery, not after.",
      },
      {
        title: "Delivery + 2 rounds of revisions included",
        description: "The site is yours, with two rounds of tweaks included in the quoted price.",
      },
    ],
    servicesEyebrow: "What I do",
    servicesTitle: "Three ways to start, one tailored approach.",
    servicesCta: "View all services",
    workEyebrow: "Selected work",
    workTitle: "Real projects, not mockups.",
    workCta: "View all work",
    ctaBandTitle: "Got a project in mind?",
    ctaBandSubtitle: "Describe it in a few lines, I'll reply within 48h.",
    ctaBandLabel: "Start the conversation",
  },
  footer: {
    tagline: "Independent web studio — Switzerland & Europe.",
    legalLinks: {
      mentionsLegales: "Legal notice",
      confidentialite: "Privacy",
      cgv: "Terms",
    },
  },
  servicesPage: {
    eyebrow: "Services",
    title: "A website built for your business, not a recycled template.",
    subtitle:
      "Every service is scoped upfront: what's included, the stack used, the indicative timeline. No surprises on the invoice.",
    ctaLabel: "Request a quote",
    includesLabel: "Included",
    techLabel: "Stack",
    timelineLabel: "Indicative timeline",
    items: [
      {
        title: "Showcase website",
        description:
          "Present your business, reassure your visitors, and turn visits into contact requests.",
        includes: [
          "Custom design, no generic theme",
          "Mobile/tablet/desktop responsive",
          "Built-in contact form",
          "Basic technical SEO",
        ],
        tech: "React, TypeScript, Cloudflare Workers",
        timeline: "1 to 2 weeks",
      },
      {
        title: "E-commerce",
        description: "Sell online with a clear catalog and reliable payments.",
        includes: [
          "Product catalog and stock management",
          "Secure payment via Stripe",
          "Customer account (orders, history)",
          "Automatic transactional emails",
        ],
        tech: "React, Stripe, Cloudflare Workers",
        timeline: "4 to 6 weeks",
      },
      {
        title: "Redesign",
        description: "Modernize an existing site without losing your SEO ranking.",
        includes: [
          "Audit of the current site (perf, SEO, content)",
          "Migration of existing content",
          "Clean redirects to preserve SEO",
          "New design, same URL",
        ],
        tech: "Adapted to your current stack",
        timeline: "2 to 4 weeks",
      },
      {
        title: "Landing page",
        description: "A single page, focused on one offer, product, or launch.",
        includes: [
          "Conversion-focused structure",
          "Single form or call-to-action",
          "Optimized for instant loading",
        ],
        tech: "React, Cloudflare Workers",
        timeline: "3 to 5 days",
      },
      {
        title: "Maintenance",
        description: "Hosting, updates and small changes, without thinking about it.",
        includes: [
          "Cloudflare hosting included",
          "Security updates",
          "Small content changes",
          "Email support",
        ],
        tech: "—",
        timeline: "Monthly subscription",
      },
      {
        title: "Technical SEO",
        description: "Structure, performance and indexing to get found on Google.",
        includes: [
          "Performance audit (Core Web Vitals)",
          "Structured data (JSON-LD)",
          "Sitemap and robots.txt",
          "Content recommendations",
        ],
        tech: "Stack-independent",
        timeline: "1 week",
      },
      {
        title: "Visual identity",
        description: "A simple logo and a coherent palette to start with a clear image.",
        includes: [
          "Logo (web + print formats)",
          "Color palette and typography",
          "Favicon / social media variants",
        ],
        tech: "—",
        timeline: "1 week",
      },
    ],
  },
  workPage: {
    eyebrow: "Work",
    title: "Real projects, not mockups.",
    subtitle: "Two projects built and shipped to production, with real users and real traffic.",
    problemLabel: "Context",
    stackLabel: "Stack",
    featuresLabel: "Features",
    resultsLabel: "Outcome",
    linkLabel: "Visit the site",
    ctaTitle: "Your project, next on this page?",
    ctaSubtitle: "Let's talk about what you want to build.",
    ctaLabel: "Start a project",
    caseStudies: [
      {
        title: "Swiss3Design",
        tagline: "Multicolor 3D printing e-commerce platform",
        category: "E-commerce",
        problem:
          "Sell 3D-printed objects in up to 4 colors, with custom quotes and online payment, from a workshop in Gland (VD).",
        stack: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle", "Stripe", "Cloudflare Workers"],
        features: [
          "Product catalog with color configurator",
          "Custom quotes from uploaded 3D files",
          "Live Stripe payments in production",
          "Customer accounts with two-factor authentication",
          "Admin dashboard for full business management",
        ],
        results: ["Live platform with real orders and payments", "Multilingual FR/DE/IT/EN"],
        url: "https://swiss3design.ch",
      },
      {
        title: "Portfolio — thomastp.ch",
        tagline: "Personal portfolio with advanced animation",
        category: "Showcase",
        problem:
          "Present a background and technical projects memorably, with a level of polish that stands out.",
        stack: ["React", "TypeScript", "GSAP", "Lenis", "Cloudflare Workers"],
        features: [
          "Animated 3D particle hero",
          "Smooth scrolling and scroll-driven animation",
          "Built-in conversational assistant",
          "Bilingual FR/EN",
        ],
        results: ["High performance score (Core Web Vitals)"],
        url: "https://thomastp.ch",
      },
    ],
  },
  pricingPage: {
    eyebrow: "Pricing",
    title: "Clear pricing, no hidden line items.",
    subtitle: "Three base packages to start fast, and a custom quote for anything beyond that.",
    guaranteeLabel: "The price you're quoted is the price you pay — no hidden costs.",
    deliveryLabel: "Timeline",
    packs: [
      {
        name: "Essential",
        price: "CHF 590",
        priceNote: "about €600",
        description: "A professional one-page site, to get started fast.",
        features: [
          "One-page showcase site",
          "Custom design",
          "Mobile/desktop responsive",
          "Contact form",
          "2 languages (FR/EN)",
        ],
        timeline: "1 to 2 weeks",
        highlighted: false,
      },
      {
        name: "Pro",
        price: "CHF 1,490",
        priceNote: "about €1,550",
        description: "A complete multi-page site, ready to convert your visitors.",
        features: [
          "Multi-page site (5-6 pages)",
          "Up to 3 languages",
          "Polished animation",
          "Technical SEO included",
          "Optional blog",
        ],
        timeline: "2 to 4 weeks",
        highlighted: true,
      },
      {
        name: "Custom",
        price: "From CHF 2,900",
        priceNote: "custom quote",
        description: "E-commerce, web app, or a specific need.",
        features: [
          "E-commerce or web app",
          "Admin dashboard",
          "Integrated online payment",
          "Complex integrations",
          "Up to 6 languages",
        ],
        timeline: "From 4 weeks",
        highlighted: false,
      },
    ],
    maintenanceTitle: "Maintenance",
    maintenanceText:
      "CHF 35/month: hosting, security updates and small content changes, without thinking about it.",
    termsTitle: "How it works",
    terms: [
      "30-50% deposit at order, paid online",
      "Balance invoiced at delivery, before going live",
      "2 rounds of revisions included per package",
      "Indicative timeline: 1-2 weeks (Essential) to 6 weeks (Custom)",
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      {
        question: "Does the price include the domain name?",
        answer:
          "No, the domain name (about CHF 15/year for a .ch) and hosting are separate, but I can manage everything for you if you'd rather not deal with it.",
      },
      {
        question: "How many revisions are included?",
        answer:
          "Two rounds of revisions per package. Beyond that, additional changes are billed separately.",
      },
      {
        question: "What if my project doesn't fit any package?",
        answer:
          "Let's talk directly — the Custom package exists exactly for projects that go beyond the standard scope.",
      },
      {
        question: "How does payment work?",
        answer:
          "A 30-50% deposit at order via Stripe, then the balance at delivery, before the site goes live.",
      },
    ],
    ctaLabel: "Request a quote",
  },
  aboutPage: {
    eyebrow: "About",
    title: "A developer, not an agency.",
    subtitle:
      "Calyroc is me — Thomas. No project manager, no subcontracting, no agency overhead baked into your quote.",
    storyTitle: "My background",
    storyParagraphs: [
      "I'm Thomas Prud'homme, training as a CFC apprentice in IT infrastructure and operations, based in Gland, in the canton of Vaud.",
      "Calyroc came from a simple observation: most freelancers and small businesses don't need a ten-person agency to get a fast, well-built website. They need one competent person who replies quickly and keeps their deadlines.",
      "I build with an AI-augmented workflow — it speeds up writing code, not thinking through what your site needs to do. The result: shorter timelines and lower prices than a traditional agency, without cutting corners on quality.",
      "The best proof: Swiss3Design, a 3D-printing e-commerce platform with live Stripe payments in production. Not a mockup — a real site, with real customers.",
    ],
    whyTitle: "Why that matters for you",
    whyPoints: [
      {
        title: "Direct contact",
        description: "You email me, I reply. No ticket queue, no team rotation mid-project.",
      },
      {
        title: "Controlled pricing",
        description: "No agency overhead getting passed on to your quote.",
      },
      {
        title: "Modern stack",
        description:
          "Cloudflare Workers, React, TypeScript — the same stack I use for my own projects in production.",
      },
      {
        title: "Honesty",
        description:
          "I'm still in training, and I say so upfront. It's a sign of agility and fair pricing, not an excuse.",
      },
    ],
    ctaTitle: "Got a project in mind?",
    ctaSubtitle: "Describe it to me, I'll reply within 48h.",
    ctaLabel: "Start the conversation",
  },
  contactPage: {
    eyebrow: "Contact",
    title: "Let's talk about your project.",
    subtitle:
      "Describe what you want to build, I'll get back to you within 48h with real feedback.",
    formName: "Name",
    formEmail: "Email",
    formBudget: "Indicative budget",
    formBudgetOptions: [
      "Essential (from CHF 590)",
      "Pro (from CHF 1,490)",
      "Custom (from CHF 2,900)",
      "Not sure yet",
    ],
    formMessage: "Your project",
    formMessagePlaceholder: "Describe your business, what you want to build, your timeline...",
    formSubmit: "Send",
    formSubmitting: "Sending...",
    formSuccess: "Message sent — I'll get back to you within 48h.",
    formError: "Something went wrong. Email me directly at hello@calyroc.com.",
    directTitle: "Or email me directly",
    responseTime: "Reply within 48h, on weekdays.",
  },
  legalPageNotice:
    "This legal page only exists in French, the legally authoritative reference version.",
  chatbot: {
    label: "Ask Calyroc",
    title: "Ask Calyroc",
    intro:
      "Hi! I can answer questions about Calyroc's services and pricing. For a real quote, head to the contact form.",
    placeholder: "Ask a question...",
    send: "Send",
    errorMessage: "Something went wrong, try again or email hello@calyroc.com.",
    disclaimer: "AI-generated answers, not contractually binding.",
  },
};
