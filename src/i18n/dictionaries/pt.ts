import type { Dictionary } from "../dictionary";

// NOTE: traduction assistée par IA, en attente d'une relecture native avant
// mise en production (aucun locuteur natif PT dans l'équipe pour l'instant).
export const pt: Dictionary = {
  meta: {
    title: "Calyroc — Estúdio web para sites modernos e de alto desempenho",
    description:
      "Sites institucionais e de e-commerce sob medida, projetados e desenvolvidos por Thomas Prud'homme. Stack moderna, entrega rápida, preços transparentes.",
  },
  nav: {
    services: "Serviços",
    work: "Projetos",
    pricing: "Preços",
    about: "Sobre mim",
    contact: "Contacto",
  },
  home: {
    eyebrow: "Estúdio web sediado na Suíça",
    heroTitle: "Sites rápidos e sob medida, entregues sem rodeios.",
    heroSubtitle:
      "A Calyroc projeta e desenvolve sites institucionais e de e-commerce modernos para autónomos, PMEs e startups — stack de ponta, contacto direto, preços claros.",
    ctaPrimary: "Pedir orçamento",
    ctaSecondary: "Ver projetos",
    trustLine: "Falas com o Thomas, não com um gestor de projeto — desde a primeira resposta até à publicação.",
    processEyebrow: "Como funciona",
    processTitle: "Quatro passos, sem zonas cinzentas.",
    processSteps: [
      {
        title: "Descreves o teu projeto",
        description:
          "Através do formulário de contacto ou diretamente com o Ask Calyroc — dois minutos chegam para lançar as bases.",
      },
      {
        title: "Orçamento claro em 48h",
        description: "Um preço fixo e um prazo realista, não um intervalo que dispara mais tarde.",
      },
      {
        title: "Desenvolvimento com pontos de situação",
        description: "Vês o site a avançar e dás a tua opinião antes da entrega final, não depois.",
      },
      {
        title: "Entrega + 2 revisões incluídas",
        description: "O site é teu, com duas rondas de ajustes incluídas no preço acordado.",
      },
    ],
    priceCompareEyebrow: "O mesmo site, noutro lugar",
    priceCompareTitle: "Quanto custa um site comparável numa agência tradicional.",
    priceCompareAgencyLabel: "Agência tradicional",
    priceCompareItems: [
      { label: "Descoberta e estratégia", range: "800 – 1.500 CHF" },
      { label: "Design e UX", range: "1.500 – 3.000 CHF" },
      { label: "Desenvolvimento", range: "3.000 – 6.000 CHF" },
      { label: "SEO e lançamento", range: "800 – 1.500 CHF" },
    ],
    priceCompareAgencyTotal: "6.000 – 12.000 CHF",
    priceCompareCalyrocLabel: "Na Calyroc",
    priceCompareNote:
      "Intervalo indicativo baseado nas tarifas padrão do mercado suíço para um site multipágina profissional comparável ao pacote Pro.",
    servicesEyebrow: "O que eu faço",
    servicesTitle: "Três formas de começar, uma abordagem sob medida.",
    servicesCta: "Ver todos os serviços",
    workEyebrow: "Projetos",
    workTitle: "Projetos reais, não maquetes.",
    workCta: "Ver todos os projetos",
    ctaBandTitle: "Tem um projeto em mente?",
    ctaBandSubtitle: "Descreva-o em poucas linhas, respondo em até 48h.",
    ctaBandLabel: "Iniciar a conversa",
  },
  footer: {
    tagline: "Estúdio web independente — Suíça e Europa.",
    legalLinks: {
      mentionsLegales: "Aviso legal",
      confidentialite: "Privacidade",
      cgv: "Termos",
    },
  },
  servicesPage: {
    eyebrow: "Serviços",
    title: "Um site pensado para o teu negócio, não um template reciclado.",
    subtitle:
      "Cada serviço é definido à partida: o que está incluído, a stack utilizada, o prazo indicativo. Sem surpresas na fatura.",
    ctaLabel: "Pedir orçamento",
    includesLabel: "Incluído",
    techLabel: "Stack",
    timelineLabel: "Prazo indicativo",
    items: [
      {
        title: "Site institucional",
        description:
          "Apresenta o teu negócio, transmite confiança e transforma visitas em contactos.",
        includes: [
          "Design sob medida, sem templates genéricos",
          "Responsivo em telemóvel/tablet/desktop",
          "Formulário de contacto integrado",
          "SEO técnico básico",
        ],
        tech: "React, TypeScript, Cloudflare Workers",
        timeline: "1 a 2 semanas",
      },
      {
        title: "E-commerce",
        description: "Vende online com um catálogo claro e pagamentos fiáveis.",
        includes: [
          "Catálogo de produtos e gestão de stock",
          "Pagamento seguro via Stripe",
          "Conta de cliente (encomendas, histórico)",
          "Emails transacionais automáticos",
        ],
        tech: "React, Stripe, Cloudflare Workers",
        timeline: "4 a 6 semanas",
      },
      {
        title: "Redesign",
        description: "Moderniza um site existente sem perder o posicionamento SEO.",
        includes: [
          "Auditoria do site atual (desempenho, SEO, conteúdo)",
          "Migração do conteúdo existente",
          "Redirecionamentos corretos para preservar o SEO",
          "Novo design, mesmo URL",
        ],
        tech: "Adaptado ao site existente",
        timeline: "2 a 4 semanas",
      },
      {
        title: "Landing page",
        description: "Uma página única, focada numa oferta, produto ou lançamento.",
        includes: [
          "Estrutura orientada para conversão",
          "Formulário ou chamada de ação única",
          "Otimizada para carregamento instantâneo",
        ],
        tech: "React, Cloudflare Workers",
        timeline: "3 a 5 dias",
      },
      {
        title: "Manutenção",
        description: "Alojamento, atualizações e pequenas alterações, sem te preocupares.",
        includes: [
          "Alojamento Cloudflare incluído",
          "Atualizações de segurança",
          "Pequenas alterações de conteúdo",
          "Suporte por email",
        ],
        tech: "—",
        timeline: "Subscrição mensal",
      },
      {
        title: "SEO técnico",
        description: "Estrutura, desempenho e indexação para seres encontrado no Google.",
        includes: [
          "Auditoria de desempenho (Core Web Vitals)",
          "Dados estruturados (JSON-LD)",
          "Sitemap e robots.txt",
          "Recomendações de conteúdo",
        ],
        tech: "Independente da stack",
        timeline: "1 semana",
      },
      {
        title: "Identidade visual",
        description: "Um logótipo simples e uma paleta coerente para começar com uma imagem clara.",
        includes: [
          "Logótipo (formatos web e impressão)",
          "Paleta de cores e tipografias",
          "Variantes favicon / redes sociais",
        ],
        tech: "—",
        timeline: "1 semana",
      },
    ],
  },
  workPage: {
    eyebrow: "Projetos",
    title: "Projetos reais, não maquetas.",
    subtitle: "Dois projetos construídos e em produção, com utilizadores e tráfego reais.",
    problemLabel: "Contexto",
    stackLabel: "Stack",
    featuresLabel: "Funcionalidades",
    resultsLabel: "Resultado",
    linkLabel: "Ver o site",
    ctaTitle: "O teu projeto, o próximo nesta página?",
    ctaSubtitle: "Vamos falar sobre o que queres construir.",
    ctaLabel: "Iniciar um projeto",
    caseStudies: [
      {
        title: "Swiss3Design",
        tagline: "Plataforma e-commerce de impressão 3D multicolor",
        category: "E-commerce",
        problem:
          "Vender objetos impressos em 3D até 4 cores, com orçamentos sob medida e pagamento online, a partir de um ateliê em Gland (VD).",
        stack: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle", "Stripe", "Cloudflare Workers"],
        features: [
          "Catálogo de produtos com configurador de cores",
          "Orçamentos sob medida a partir de ficheiros 3D",
          "Pagamentos Stripe reais em produção",
          "Contas de cliente com autenticação de dois fatores",
          "Painel de administração completo do negócio",
        ],
        results: [
          "Plataforma em produção com encomendas e pagamentos reais",
          "Multilingue FR/DE/IT/EN",
        ],
        url: "https://swiss3design.ch",
      },
      {
        title: "Portfolio — thomastp.ch",
        tagline: "Portfolio pessoal com animações avançadas",
        category: "Institucional",
        problem:
          "Apresentar um percurso e projetos técnicos de forma memorável, com um acabamento capaz de se destacar.",
        stack: ["React", "TypeScript", "GSAP", "Lenis", "Cloudflare Workers"],
        features: [
          "Hero com partículas 3D animadas",
          "Scroll fluido e animações ao rolar",
          "Assistente conversacional integrado",
          "Bilingue FR/EN",
        ],
        results: ["Pontuação de desempenho elevada (Core Web Vitals)"],
        url: "https://thomastp.ch",
      },
    ],
  },
  pricingPage: {
    eyebrow: "Preços",
    title: "Preços claros, sem letras miúdas.",
    subtitle:
      "Três planos base para começar depressa, e um orçamento sob medida para tudo o resto.",
    guaranteeLabel: "O preço acordado é o preço que pagas — sem custos escondidos.",
    deliveryLabel: "Prazo",
    packs: [
      {
        name: "Essencial",
        price: "590 CHF",
        priceNote: "cerca de 600 €",
        description: "Um site profissional de uma página, para começar depressa.",
        features: [
          "Site institucional de 1 página",
          "Design sob medida",
          "Responsivo telemóvel/desktop",
          "Formulário de contacto",
          "2 idiomas (FR/EN)",
        ],
        timeline: "1 a 2 semanas",
        highlighted: false,
      },
      {
        name: "Pro",
        price: "1.490 CHF",
        priceNote: "cerca de 1.550 €",
        description: "Um site multipágina completo, pronto para converter visitantes.",
        features: [
          "Site multipágina (5-6 páginas)",
          "Até 3 idiomas",
          "Animações cuidadas",
          "SEO técnico incluído",
          "Blog opcional",
        ],
        timeline: "2 a 4 semanas",
        highlighted: true,
      },
      {
        name: "Sob medida",
        price: "Desde 2.900 CHF",
        priceNote: "orçamento personalizado",
        description: "E-commerce, aplicação web ou uma necessidade específica.",
        features: [
          "E-commerce ou web app",
          "Painel de administração",
          "Pagamento online integrado",
          "Integrações complexas",
          "Até 6 idiomas",
        ],
        timeline: "Desde 4 semanas",
        highlighted: false,
      },
    ],
    maintenanceTitle: "Manutenção",
    maintenanceText:
      "35 CHF/mês: alojamento, atualizações de segurança e pequenas alterações de conteúdo, sem te preocupares.",
    termsTitle: "Como funciona",
    terms: [
      "Sinal de 30-50% na encomenda, pago online",
      "Saldo faturado na entrega, antes de publicar",
      "2 rondas de revisões incluídas por plano",
      "Prazo indicativo: 1-2 semanas (Essencial) a 6 semanas (Sob medida)",
    ],
    faqTitle: "Perguntas frequentes",
    faq: [
      {
        question: "O preço inclui o domínio?",
        answer:
          "Não, o domínio (cerca de 15 CHF/ano para um .ch) e o alojamento são à parte, mas posso tratar de tudo por ti se preferires.",
      },
      {
        question: "Quantas revisões estão incluídas?",
        answer:
          "Duas rondas de revisões por plano. Além disso, alterações adicionais são faturadas à parte.",
      },
      {
        question: "E se o meu projeto não couber em nenhum plano?",
        answer:
          "Falamos diretamente — o plano Sob medida existe precisamente para projetos que saem do padrão.",
      },
      {
        question: "Como funciona o pagamento?",
        answer:
          "Um sinal de 30-50% na encomenda via Stripe, depois o saldo na entrega, antes de publicar.",
      },
    ],
    ctaLabel: "Pedir orçamento",
  },
  aboutPage: {
    eyebrow: "Sobre mim",
    title: "Um developer, não uma agência.",
    subtitle:
      "A Calyroc sou eu — Thomas. Sem gestor de projeto, sem subcontratação, sem custos de estrutura repercutidos no teu orçamento.",
    founderRole: "Developer solo · Aprendiz CFC de Informática",
    portfolioLabel: "O meu portfolio",
    linkedinLabel: "LinkedIn",
    storyTitle: "O meu percurso",
    storyParagraphs: [
      "Chamo-me Thomas Prud'homme. Estou em formação como aprendiz CFC em informática de exploração e infraestrutura, sediado em Genebra, na Suíça.",
      "A Calyroc nasceu de uma constatação simples: a maioria dos autónomos e pequenas empresas não precisa de uma agência de dez pessoas para ter um site rápido e bem construído. Precisa de alguém competente que responda depressa e cumpra prazos.",
      "Construo com um fluxo de trabalho assistido por IA — isso acelera a escrita de código, não a reflexão sobre o que o teu site precisa de fazer. Resultado: prazos mais curtos e preços mais baixos do que uma agência tradicional, sem abdicar da qualidade.",
      "A melhor prova: Swiss3Design, uma plataforma e-commerce de impressão 3D com pagamentos Stripe reais em produção. Não é uma maquete — é um site real, com clientes reais.",
    ],
    whyTitle: "Porque é que isto importa para ti",
    whyPoints: [
      {
        title: "Contacto direto",
        description: "Escreves-me, eu respondo. Sem tickets, sem rotação de equipa a meio do projeto.",
      },
      {
        title: "Preços controlados",
        description: "Sem custos de estrutura de agência repercutidos no teu orçamento.",
      },
      {
        title: "Stack moderna",
        description:
          "Cloudflare Workers, React, TypeScript — a mesma stack que uso para os meus próprios projetos em produção.",
      },
      {
        title: "Honestidade",
        description:
          "Estou em formação e digo-o claramente. É garantia de agilidade e preços justos, não uma desculpa.",
      },
    ],
    ctaTitle: "Falamos?",
    ctaSubtitle: "Descreve-me o teu projeto, respondo em 48h.",
    ctaLabel: "Iniciar a conversa",
  },
  contactPage: {
    eyebrow: "Contacto",
    title: "Vamos falar sobre o teu projeto.",
    subtitle: "Descreve o que queres construir, respondo em 48h com um retorno concreto.",
    formName: "Nome",
    formEmail: "Email",
    formBudget: "Orçamento indicativo",
    formBudgetOptions: [
      "Essencial (desde 590 CHF)",
      "Pro (desde 1.490 CHF)",
      "Sob medida (desde 2.900 CHF)",
      "Ainda não sei",
    ],
    formMessage: "O teu projeto",
    formMessagePlaceholder: "Descreve o teu negócio, o que queres construir, os teus prazos...",
    formSubmit: "Enviar",
    formSubmitting: "A enviar...",
    formSuccess: "Mensagem enviada — respondo em 48h.",
    formError: "Ocorreu um erro. Escreve-me diretamente para hello@calyroc.com.",
    directTitle: "Ou escreve-me diretamente",
    responseTime: "Resposta em 48h, em dias úteis.",
  },
  legalPageNotice:
    "Esta página legal só existe em francês, versão de referência legalmente válida.",
  chatbot: {
    label: "Pergunta à Calyroc",
    title: "Ask Calyroc",
    intro:
      "Olá! Posso responder a perguntas sobre os serviços e preços da Calyroc. Para um orçamento real, vai ao formulário de contacto.",
    placeholder: "Escreve a tua pergunta...",
    send: "Enviar",
    errorMessage: "Ocorreu um erro, tenta novamente ou escreve para hello@calyroc.com.",
    disclaimer: "Respostas geradas por IA, sem valor contratual.",
  },
};
