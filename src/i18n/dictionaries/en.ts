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
    blog: "Blog",
    studio: "Studio",
    contact: "Contact",
    themeToLight: "Switch to light mode",
    themeToDark: "Switch to dark mode",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  home: {
    eyebrow: "Web studio based in Switzerland",
    heroTitle: "Fast, custom websites, delivered without the detour.",
    heroSubtitle:
      "Calyroc designs and builds modern showcase and e-commerce websites for freelancers, SMEs and startups — cutting-edge stack, direct contact, clear pricing.",
    ctaPrimary: "Request a quote",
    ctaSecondary: "See the work",
    trustLine: "You talk to Thomas, not a project manager — from the first reply to launch day.",
    scrollHint: "Scroll down",
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
    priceCompareEyebrow: "The same site, elsewhere",
    priceCompareTitle: "What a comparable site costs at a typical agency.",
    priceCompareAgencyLabel: "Typical agency",
    priceCompareItems: [
      { label: "Discovery & strategy", range: "CHF 800 – 1,500" },
      { label: "Design & UX", range: "CHF 1,500 – 3,000" },
      { label: "Development", range: "CHF 3,000 – 6,000" },
      { label: "SEO & launch", range: "CHF 800 – 1,500" },
    ],
    priceCompareAgencyTotal: "CHF 6,000 – 12,000",
    priceCompareCalyrocLabel: "At Calyroc",
    priceCompareNote:
      "Indicative range based on standard Swiss market rates for a professional multi-page site comparable to the Pro package.",
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
    backLabel: "← Back to services",
    processTitle: "How it works",
    faqTitle: "Frequently asked questions",
    pricingLinkLabel: "View pricing",
    otherServicesTitle: "Explore other services",
    learnMoreLabel: "Learn more",
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
    subtitle:
      "Two projects built and shipped to production — a live e-commerce platform and a personal portfolio — with real users and real traffic.",
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
    subtitle:
      "Three fixed-price base packages to start fast with no billing surprises, plus a custom quote for anything beyond that scope.",
    guaranteeLabel: "The price you're quoted is the price you pay — no hidden costs.",
    deliveryLabel: "Timeline",
    finderEyebrow: "Not sure which package?",
    finderTitle: "Find yours in 3 questions.",
    finderSubtitle: "Answer a few questions and we'll tell you which package fits your project.",
    finderTypeQuestion: {
      question: "What do you want to build?",
      options: [
        { value: "vitrine", label: "Showcase website" },
        { value: "multipage", label: "Multi-page website" },
        { value: "ecommerce", label: "Online store" },
        { value: "webapp", label: "Custom application" },
      ],
    },
    finderPagesQuestion: {
      question: "Roughly how many pages?",
      options: [
        { value: "1", label: "1 page" },
        { value: "few", label: "2 to 5 pages" },
        { value: "many", label: "6+ pages" },
      ],
    },
    finderLanguagesQuestion: {
      question: "How many languages?",
      options: [
        { value: "1-2", label: "1 to 2 languages" },
        { value: "3", label: "3 languages" },
        { value: "4-6", label: "4 to 6 languages" },
      ],
    },
    finderResultTitle: "This package looks like a fit:",
    finderResultCta: "See the details",
    finderRestartLabel: "Start over",
    finderBackLabel: "Back",
    packs: [
      {
        id: "essentiel",
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
        id: "pro",
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
        id: "sur-mesure",
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
    faqSeeMoreLabel: "See all questions",
    ctaLabel: "Request a quote",
  },
  aboutPage: {
    eyebrow: "About",
    title: "A developer, not an agency.",
    subtitle:
      "Calyroc is me — Thomas. No project manager, no subcontracting, no agency overhead baked into your quote.",
    founderRole: "Solo developer · CFC IT Apprentice",
    portfolioLabel: "My portfolio",
    linkedinLabel: "LinkedIn",
    storyTitle: "My background",
    storyParagraphs: [
      "I'm Thomas Prud'homme, training as a CFC apprentice in IT infrastructure and operations, based in Geneva, Switzerland.",
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
      "Describe what you want to build, and I'll get back to you within 48h with real feedback and a clear, fixed-price scope.",
    formName: "Name",
    formEmail: "Email",
    formPackLabel: "Package",
    formPackUnsureLabel: "Not sure yet",
    formMessage: "Your project",
    formMessagePlaceholder: "Describe your business, what you want to build, your timeline...",
    formSubmit: "Send",
    formSubmitting: "Sending...",
    formSuccess: "Message sent — I'll get back to you within 48h.",
    formError: "Something went wrong. Email me directly at hello@calyroc.com.",
    directTitle: "Or email me directly",
    responseTime: "Reply within 48h, on weekdays.",
    paymentSuccessTitle: "Payment confirmed",
    paymentSuccessBody:
      "Thank you, your payment has been recorded. You'll receive a receipt by email shortly.",
    paymentCancelledTitle: "Payment cancelled",
    paymentCancelledBody:
      "The payment was cancelled and no amount was charged. You can try again anytime, or email me directly.",
  },
  legalPageNotice:
    "This page has been translated for your convenience; only the French version is legally binding in the event of a dispute or discrepancy in interpretation.",
  blogPage: {
    eyebrow: "Blog",
    title: "Studio notes.",
    subtitle:
      "Technical choices, lessons learned, and behind-the-scenes notes on Calyroc projects, written by the developer who builds them.",
    readMoreLabel: "Read the article",
    backLabel: "← Back to the blog",
    minutesLabel: "min read",
    byLabel: "By",
  },
  faqPage: {
    eyebrow: "FAQ",
    title: "All the questions.",
    subtitle:
      "Beyond pricing: the process, the technology, what happens after delivery. Don't see your question? Write to me directly.",
    servicesLinkLabel: "Explore our services",
    searchPlaceholder: "Search a question…",
    searchNoResults: "No question matches your search.",
    allCategoryLabel: "All",
    generalCategoryLabel: "General",
    items: [
      {
        question: "How does a project go from first contact to launch?",
        answer:
          "You describe your project through the contact form or Ask Calyroc. You get a clear quote within 48 hours, with a fixed price and a realistic timeline. Development starts once the deposit is paid, with regular check-ins so you can see the site take shape. At delivery, two rounds of revisions are included before the site goes live.",
      },
      {
        question: "What technology do you use?",
        answer:
          "Next.js, TypeScript, and Cloudflare Workers for most projects — the same stack I use for my own production sites. The technical choices still adapt to each project (database, payments, specific integrations).",
      },
      {
        question: "Will my site rank well on Google?",
        answer:
          "Baseline technical SEO is included with every pack: semantic structure, optimized load times, structured data, sitemap. Strong rankings also depend on content and time, but the technical foundations are in place from day one.",
      },
      {
        question: "Who owns the code and the site once the project is delivered?",
        answer:
          "The source code and deliverables are fully transferred to you once payment is complete. I only keep the right to mention the project in my portfolio, unless otherwise agreed.",
      },
      {
        question: "Do you offer maintenance after delivery?",
        answer:
          "Yes, as an option at CHF 35/month: hosting, security updates, and small content changes, without you having to think about it.",
      },
      {
        question: "Do you work with clients outside Switzerland?",
        answer:
          "Yes, the whole process happens remotely, and the site (as well as the Ask Calyroc assistant) is available in 9 languages — French, English, Spanish, Italian, German, Portuguese, Dutch, Polish, and Russian.",
      },
      {
        question: "How do I reach you during development?",
        answer:
          "Directly — you deal with me, not a project manager or a support desk. That's one of the main advantages of working with a solo studio rather than an agency.",
      },
      {
        question: "Which service is right for me?",
        answer:
          "It depends on where you're starting from. A brand-new business usually starts with a Showcase Website; an existing site that needs modernizing calls for a Redesign; a single campaign or product launch is better served by a Landing Page. Browse the Services page for the full picture, or describe your situation through the contact form and get a direct recommendation.",
      },
      {
        question: "Can I combine several services, like a redesign and technical SEO?",
        answer:
          "Yes — services are often combined in practice. A Redesign frequently includes Technical SEO by default, and Visual Identity is commonly paired with a first Showcase Website or Ecommerce project. Describe what you need in the contact form and the scope gets combined into a single clear quote.",
      },
      {
        question: "Do you build online stores, not just showcase websites?",
        answer:
          "Yes, Ecommerce is one of the seven services on offer, built around Stripe for secure payment and a full product catalog with stock tracking — see the dedicated Ecommerce page for details.",
      },
      {
        question: "I already have a website — can you just improve parts of it?",
        answer:
          "Yes. A full Redesign isn't always necessary — Technical SEO, a new Visual Identity, or an added Landing Page for a specific campaign can each be delivered as a standalone project on top of an existing site.",
      },
      {
        question: "Can I start with one service and add more later?",
        answer:
          "Yes, that's a common path — many clients start with a Showcase Website and add Maintenance, a Landing Page for a later campaign, or Technical SEO once the site is live and generating traffic.",
      },
    ],
  },
  trackingPage: {
    eyebrow: "Project tracking",
    title: "Where does your project stand?",
    subtitle: "Real-time progress, without having to ask.",
    steps: [
      {
        title: "Contact",
        description: "Your request has been received.",
      },
      {
        title: "Quote",
        description: "The price and timeline have been confirmed.",
      },
      {
        title: "Development",
        description: "The site is being built, with regular progress check-ins.",
      },
      {
        title: "Delivery",
        description: "The site is live. Two rounds of revisions remain available.",
      },
    ],
    currentBadge: "In progress",
    doneBadge: "Done",
    ctaTitle: "A question about progress?",
    ctaLabel: "Write to Thomas",
    summaryHeading: "Your project",
    todayHeading: "Where your project stands today",
    updatesHeading: "Project updates",
    updatesEmpty: "Project updates will appear here as work progresses.",
    previewCta: "View site preview",
    filesHeading: "Images & mockups",
    approveHeading: "The site is ready for review",
    approveDescription: "Check the preview above, then approve to move to launch.",
    approveButton: "I approve, ready for launch",
    approvedNotice: "You've approved the site — launch is being prepared.",
    overviewNavLabel: "Overview",
    paymentsNavLabel: "Payment",
    paymentsHeading: "Payments",
    paymentsSubtitle: "Your deposit and balance, in one place.",
    paymentsEmpty: "No payments yet.",
    payNowLabel: "Pay now",
    payErrorLabel: "Something went wrong, try again or contact Thomas.",
    paidLabel: "Paid",
    paymentSuccessNotice: "Payment received, thank you!",
  },
  notFoundPage: {
    eyebrow: "404",
    title: "This page doesn't exist.",
    subtitle:
      "The link may be outdated, or the address may contain a typo. Here's how to get back on track.",
    ctaHome: "Back to homepage",
    ctaContact: "Contact us",
  },
  chatbot: {
    label: "Ask Calyroc",
    title: "Ask Calyroc",
    aiBadge: "AI",
    intro:
      "Hello! I'm Calyroc's AI assistant, and I can answer your questions about services and pricing. For a real quote, please use the [contact form](/en/contact).",
    placeholder: "Ask a question...",
    send: "Send",
    errorMessage: "Something went wrong, try again or email hello@calyroc.com.",
    disclaimer: "AI-generated answers, not contractually binding.",
    close: "Close",
    copy: "Copy",
    copied: "Copied",
    expand: "Expand",
    collapse: "Collapse",
    resizeHandle: "Resize window",
  },
  email: {
    clientConfirmation: {
      subject: "Your message has been received — Calyroc",
      preview: "Thanks for reaching out, I'll reply within 48h.",
      heading: "Message received",
      intro:
        "Thanks for your message. Here's a summary of what you sent — I'll get back to you within 48h with real feedback.",
      recapTitle: "Summary",
      packLabel: "Package",
      messageLabel: "Your message",
      responseTimeText: "Reply within 48h, on weekdays.",
      signature: "Talk soon,<br>Thomas",
    },
    paymentLink: {
      subject: "Your Calyroc payment link",
      preview: "A secure payment link is ready for you.",
      heading: "Your payment link",
      intro: "Here's the secure payment link for your Calyroc project.",
      amountLabel: "Amount",
      descriptionLabel: "Description",
      ctaLabel: "Pay online",
      expiryNote: "This link stays valid until it's used.",
      suiviLinkLabel: "View my project tracking page",
      signature: "Talk soon,<br>Thomas",
    },
    paymentReceipt: {
      subject: "Payment receipt — Calyroc",
      preview: "Your payment has been confirmed.",
      heading: "Payment confirmed",
      intro: "Thank you, your payment has been received. Here's the summary.",
      amountLabel: "Amount paid",
      dateLabel: "Date",
      nextStepsText: "I'll be in touch shortly about next steps for the project.",
      signature: "Thank you for your trust,<br>Thomas",
    },
    clientMessage: {
      preview: "You have a new message from Calyroc.",
      heading: "Message from Calyroc",
      suiviLinkLabel: "View my project tracking page",
      signature: "Talk soon,<br>Thomas",
    },
  },
};
