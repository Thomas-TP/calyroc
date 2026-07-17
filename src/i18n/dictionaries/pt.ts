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
    blog: "Blog",
    studio: "Estúdio",
    contact: "Contacto",
    themeToLight: "Mudar para modo claro",
    themeToDark: "Mudar para modo escuro",
    openMenu: "Abrir o menu",
    closeMenu: "Fechar o menu",
  },
  home: {
    eyebrow: "Estúdio web sediado na Suíça",
    heroTitle: "Sites rápidos e sob medida, entregues sem rodeios.",
    heroSubtitle:
      "A Calyroc projeta e desenvolve sites institucionais e de e-commerce modernos para autónomos, PMEs e startups — stack de ponta, contacto direto, preços claros.",
    ctaPrimary: "Pedir orçamento",
    ctaSecondary: "Ver projetos",
    trustLine:
      "Fala com o Thomas, não com um gestor de projeto — desde a primeira resposta até à publicação.",
    scrollHint: "Deslizar para baixo",
    processEyebrow: "Como funciona",
    processTitle: "Quatro passos, sem zonas cinzentas.",
    processSteps: [
      {
        title: "Descreve o seu projeto",
        description:
          "Através do formulário de contacto ou diretamente com o Ask Calyroc — dois minutos chegam para lançar as bases.",
      },
      {
        title: "Orçamento claro em 48h",
        description: "Um preço fixo e um prazo realista, não um intervalo que dispara mais tarde.",
      },
      {
        title: "Desenvolvimento com pontos de situação",
        description: "Vê o site a avançar e dá a sua opinião antes da entrega final, não depois.",
      },
      {
        title: "Entrega + 2 revisões incluídas",
        description: "O site é seu, com duas rondas de ajustes incluídas no preço acordado.",
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
    title: "Um site pensado para o seu negócio, não um template reciclado.",
    subtitle:
      "Cada serviço é definido à partida: o que está incluído, a stack utilizada, o prazo indicativo. Sem surpresas na fatura.",
    ctaLabel: "Pedir orçamento",
    includesLabel: "Incluído",
    techLabel: "Stack",
    timelineLabel: "Prazo indicativo",
    backLabel: "← Voltar aos serviços",
    processTitle: "Como funciona",
    faqTitle: "Perguntas frequentes",
    pricingLinkLabel: "Ver preços",
    otherServicesTitle: "Descobrir outros serviços",
    learnMoreLabel: "Saber mais",
    items: [
      {
        title: "Site institucional",
        description:
          "Apresenta o seu negócio, transmite confiança e transforma visitas em contactos.",
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
        description: "Alojamento, atualizações e pequenas alterações, sem se preocupar.",
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
        description: "Estrutura, desempenho e indexação para ser encontrado no Google.",
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
    subtitle:
      "Dois projetos construídos e em produção — uma plataforma de e-commerce e um portfólio pessoal — com utilizadores e tráfego reais.",
    problemLabel: "Contexto",
    stackLabel: "Stack",
    featuresLabel: "Funcionalidades",
    resultsLabel: "Resultado",
    linkLabel: "Ver o site",
    ctaTitle: "O seu projeto, o próximo nesta página?",
    ctaSubtitle: "Vamos falar sobre o que quer construir.",
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
      "Três planos base a preço fixo para começar depressa sem surpresas na fatura, mais um orçamento sob medida para tudo o resto.",
    guaranteeLabel: "O preço acordado é o preço que paga — sem custos escondidos.",
    deliveryLabel: "Prazo",
    finderEyebrow: "Não sabe qual pacote escolher?",
    finderTitle: "Encontre o seu em 3 perguntas.",
    finderSubtitle:
      "Responda a algumas perguntas e dizemos-lhe qual pacote combina com o seu projeto.",
    finderTypeQuestion: {
      question: "O que quer construir?",
      options: [
        { value: "vitrine", label: "Site institucional" },
        { value: "multipage", label: "Site multipágina" },
        { value: "ecommerce", label: "Loja online" },
        { value: "webapp", label: "Aplicação sob medida" },
      ],
    },
    finderPagesQuestion: {
      question: "Quantas páginas, aproximadamente?",
      options: [
        { value: "1", label: "1 página" },
        { value: "few", label: "2 a 5 páginas" },
        { value: "many", label: "6 páginas ou mais" },
      ],
    },
    finderLanguagesQuestion: {
      question: "Quantos idiomas?",
      options: [
        { value: "1-2", label: "1 a 2 idiomas" },
        { value: "3", label: "3 idiomas" },
        { value: "4-6", label: "4 a 6 idiomas" },
      ],
    },
    finderResultTitle: "Este pacote parece combinar consigo:",
    finderResultCta: "Ver o detalhe",
    finderRestartLabel: "Recomeçar",
    finderBackLabel: "Voltar",
    packs: [
      {
        id: "essentiel",
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
        id: "pro",
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
        id: "sur-mesure",
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
      "35 CHF/mês: alojamento, atualizações de segurança e pequenas alterações de conteúdo, sem se preocupar.",
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
          "Não, o domínio (cerca de 15 CHF/ano para um .ch) e o alojamento são à parte, mas posso tratar de tudo por si se preferir.",
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
    faqSeeMoreLabel: "Ver todas as perguntas",
    ctaLabel: "Pedir orçamento",
  },
  aboutPage: {
    eyebrow: "Sobre mim",
    title: "Um developer, não uma agência.",
    subtitle:
      "A Calyroc sou eu — Thomas. Sem gestor de projeto, sem subcontratação, sem custos de estrutura repercutidos no seu orçamento.",
    founderRole: "Developer solo · Aprendiz CFC de Informática",
    portfolioLabel: "O meu portfolio",
    linkedinLabel: "LinkedIn",
    storyTitle: "O meu percurso",
    storyParagraphs: [
      "Chamo-me Thomas Prud'homme. Estou em formação como aprendiz CFC em informática de exploração e infraestrutura, sediado em Genebra, na Suíça.",
      "A Calyroc nasceu de uma constatação simples: a maioria dos autónomos e pequenas empresas não precisa de uma agência de dez pessoas para ter um site rápido e bem construído. Precisa de alguém competente que responda depressa e cumpra prazos.",
      "Construo com um fluxo de trabalho assistido por IA — isso acelera a escrita de código, não a reflexão sobre o que o seu site precisa de fazer. Resultado: prazos mais curtos e preços mais baixos do que uma agência tradicional, sem abdicar da qualidade.",
      "A melhor prova: Swiss3Design, uma plataforma e-commerce de impressão 3D com pagamentos Stripe reais em produção. Não é uma maquete — é um site real, com clientes reais.",
    ],
    whyTitle: "Porque é que isto importa para si",
    whyPoints: [
      {
        title: "Contacto direto",
        description:
          "Escreve-me, eu respondo. Sem tickets, sem rotação de equipa a meio do projeto.",
      },
      {
        title: "Preços controlados",
        description: "Sem custos de estrutura de agência repercutidos no seu orçamento.",
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
    ctaSubtitle: "Descreva-me o seu projeto, respondo em 48h.",
    ctaLabel: "Iniciar a conversa",
  },
  contactPage: {
    eyebrow: "Contacto",
    title: "Vamos falar sobre o seu projeto.",
    subtitle:
      "Descreva o que quer construir, respondo em 48h com um retorno concreto e um orçamento claro, fixo e sem surpresas.",
    formName: "Nome",
    formEmail: "Email",
    formPackLabel: "Pacote pretendido",
    formPackUnsureLabel: "Ainda não sei",
    formMessage: "O seu projeto",
    formMessagePlaceholder: "Descreva o seu negócio, o que quer construir, os seus prazos...",
    formSubmit: "Enviar",
    formSubmitting: "A enviar...",
    formSuccess: "Mensagem enviada — respondo em 48h.",
    formError: "Ocorreu um erro. Escreva-me diretamente para hello@calyroc.com.",
    directTitle: "Ou escreva-me diretamente",
    responseTime: "Resposta em 48h, em dias úteis.",
    paymentSuccessTitle: "Pagamento confirmado",
    paymentSuccessBody:
      "Obrigado, o seu pagamento foi registado com sucesso. Receberá um recibo por email dentro de instantes.",
    paymentCancelledTitle: "Pagamento cancelado",
    paymentCancelledBody:
      "O pagamento foi cancelado, não foi cobrado qualquer montante. Pode tentar novamente a qualquer momento ou escrever-me diretamente.",
  },
  legalPageNotice:
    "Esta página foi traduzida para maior comodidade de leitura; apenas a versão francesa é juridicamente vinculativa em caso de litígio ou divergência de interpretação.",
  blogPage: {
    eyebrow: "Blog",
    title: "Notas de estúdio.",
    subtitle:
      "Escolhas técnicas, aprendizagens e bastidores dos projetos Calyroc, escritos pelo próprio developer que os constrói.",
    readMoreLabel: "Ler o artigo",
    backLabel: "← Voltar ao blog",
    minutesLabel: "min de leitura",
    byLabel: "Por",
  },
  faqPage: {
    eyebrow: "Perguntas frequentes",
    title: "Todas as perguntas.",
    subtitle:
      "Para além dos preços: o processo, as tecnologias, o que acontece após a entrega. Não encontra a sua pergunta? Escreva-me diretamente.",
    servicesLinkLabel: "Descobrir os nossos serviços",
    items: [
      {
        question: "Como decorre um projeto, do primeiro contacto até à publicação?",
        answer:
          "Descreve o seu projeto através do formulário de contacto ou do Ask Calyroc. Recebe um orçamento claro em 48 horas, com preço fixo e prazo realista. O desenvolvimento começa após o pagamento do sinal, com pontos de situação regulares para acompanhar a evolução do site. Na entrega, estão incluídas duas rondas de revisões antes da publicação definitiva.",
      },
      {
        question: "Que tecnologias utiliza?",
        answer:
          "Next.js, TypeScript e Cloudflare Workers para a maioria dos projetos — a mesma base que utilizo nos meus próprios sites em produção. As escolhas técnicas adaptam-se, no entanto, a cada projeto (base de dados, pagamentos, integrações específicas).",
      },
      {
        question: "O meu site vai ficar bem posicionado no Google?",
        answer:
          "O SEO técnico básico está incluído em cada pacote: estrutura semântica, tempos de carregamento otimizados, dados estruturados, mapa do site. Um bom posicionamento também depende do conteúdo e do tempo, mas as bases técnicas ficam prontas desde a entrega.",
      },
      {
        question: "A quem pertence o código e o site depois de o projeto ser entregue?",
        answer:
          "O código-fonte e os entregáveis são-lhe integralmente cedidos após a receção do pagamento completo. Reservo apenas o direito de mencionar o projeto no meu portefólio, salvo acordo em contrário.",
      },
      {
        question: "Oferece manutenção após a entrega?",
        answer:
          "Sim, como opção por 35 CHF/mês: alojamento, atualizações de segurança e pequenas alterações de conteúdo, sem que tenha de se preocupar com isso.",
      },
      {
        question: "Trabalha com clientes fora da Suíça?",
        answer:
          "Sim, todo o processo decorre à distância e o site (assim como o assistente Ask Calyroc) está disponível em 9 idiomas — francês, inglês, espanhol, italiano, alemão, português, neerlandês, polaco e russo.",
      },
      {
        question: "Como posso contactá-lo durante o desenvolvimento?",
        answer:
          "Diretamente — lida comigo, não com um gestor de projeto nem com um serviço de apoio ao cliente. É uma das principais vantagens de trabalhar com um estúdio individual em vez de uma agência.",
      },
      {
        question: "Qual serviço é o certo para mim?",
        answer:
          "Depende do seu ponto de partida. Um negócio totalmente novo costuma começar com um Site institucional; um site existente que precisa de ser modernizado pede um Redesign; uma campanha pontual ou o lançamento de um produto é melhor servido por uma Landing page. Consulte a página de Serviços para uma visão completa, ou descreva a sua situação no formulário de contacto para uma recomendação direta.",
      },
      {
        question: "Posso combinar vários serviços, como um redesign e SEO técnico?",
        answer:
          "Sim — os serviços são frequentemente combinados na prática. Um Redesign inclui frequentemente SEO técnico por defeito, e a Identidade visual é habitualmente associada a um primeiro projeto de Site institucional ou Loja online. Descreva o que precisa no formulário de contacto e o âmbito é combinado num único orçamento claro.",
      },
      {
        question: "Constroem lojas online, não só sites institucionais?",
        answer:
          "Sim, a Loja online é um dos sete serviços oferecidos, construída em torno do Stripe para pagamento seguro e um catálogo de produtos completo com controlo de stock — consulte a página dedicada da Loja online para mais detalhes.",
      },
      {
        question: "Já tenho um site — podem apenas melhorar algumas partes?",
        answer:
          "Sim. Um Redesign completo nem sempre é necessário — o SEO técnico, uma nova Identidade visual, ou uma Landing page adicional para uma campanha específica podem cada um ser entregues como projeto autónomo sobre um site já existente.",
      },
      {
        question: "Posso começar com um serviço e adicionar mais depois?",
        answer:
          "Sim, é um caminho comum — muitos clientes começam com um Site institucional e adicionam depois Manutenção, uma Landing page para uma futura campanha, ou SEO técnico assim que o site está online e a gerar tráfego.",
      },
    ],
  },
  trackingPage: {
    eyebrow: "Acompanhamento do projeto",
    title: "Em que ponto está o seu projeto?",
    subtitle: "O progresso em tempo real, sem ter de perguntar.",
    steps: [
      {
        title: "Contacto",
        description: "O seu pedido foi recebido.",
      },
      {
        title: "Orçamento",
        description: "O preço e o prazo foram confirmados.",
      },
      {
        title: "Desenvolvimento",
        description: "O site está a ser desenvolvido, com pontos de situação regulares.",
      },
      {
        title: "Entrega",
        description: "O site está online. Restam disponíveis duas rondas de ajustes.",
      },
    ],
    currentBadge: "Em curso",
    doneBadge: "Concluído",
    ctaTitle: "Alguma pergunta sobre o progresso?",
    ctaLabel: "Escrever ao Thomas",
    summaryHeading: "O seu projeto",
    todayHeading: "Em que ponto está o seu projeto hoje",
    updatesHeading: "Atualizações do projeto",
    updatesEmpty: "As atualizações do projeto aparecerão aqui à medida que o trabalho avança.",
    previewCta: "Ver a pré-visualização do site",
    filesHeading: "Imagens e maquetes",
    approveHeading: "O site está pronto para revisão",
    approveDescription:
      "Consulte a pré-visualização acima e depois aprove para avançar para o lançamento.",
    approveButton: "Aprovo, pronto para o lançamento",
    approvedNotice: "Aprovou o site — o lançamento está a ser preparado.",
    overviewNavLabel: "Resumo",
    paymentsNavLabel: "Pagamento",
    paymentsHeading: "Pagamentos",
    paymentsSubtitle: "O seu sinal e saldo, num só lugar.",
    paymentsEmpty: "Ainda não há pagamentos.",
    payNowLabel: "Pagar agora",
    payErrorLabel: "Ocorreu um erro, tente novamente ou contacte o Thomas.",
    paidLabel: "Pago",
    paymentSuccessNotice: "Pagamento recebido, obrigado!",
  },
  notFoundPage: {
    eyebrow: "404",
    title: "Esta página não existe.",
    subtitle:
      "O link pode estar desatualizado, ou o endereço contém um erro. Eis como retomar o caminho certo.",
    ctaHome: "Voltar ao início",
    ctaContact: "Contacte-nos",
  },
  chatbot: {
    label: "Pergunte à Calyroc",
    title: "Ask Calyroc",
    aiBadge: "IA",
    intro:
      "Olá! Sou o assistente de IA da Calyroc e posso responder a perguntas sobre os serviços e preços. Para um orçamento real, aceda ao [formulário de contacto](/pt/contact).",
    placeholder: "Escreva a sua pergunta...",
    send: "Enviar",
    errorMessage: "Ocorreu um erro, tente novamente ou escreva para hello@calyroc.com.",
    disclaimer: "Respostas geradas por IA, sem valor contratual.",
    close: "Fechar",
    copy: "Copiar",
    copied: "Copiado",
    expand: "Ampliar",
    collapse: "Reduzir",
    resizeHandle: "Redimensionar a janela",
  },
  email: {
    clientConfirmation: {
      subject: "A sua mensagem foi recebida — Calyroc",
      preview: "Obrigado pela sua mensagem, respondo em 48h.",
      heading: "Mensagem recebida",
      intro:
        "Obrigado pela sua mensagem. Aqui está um resumo — respondo em 48h com um retorno concreto.",
      recapTitle: "Resumo",
      packLabel: "Pacote",
      messageLabel: "A sua mensagem",
      responseTimeText: "Resposta em 48h, em dias úteis.",
      signature: "Até já,<br>Thomas",
    },
    paymentLink: {
      subject: "O seu link de pagamento Calyroc",
      preview: "Um link de pagamento seguro está à sua espera.",
      heading: "O seu link de pagamento",
      intro: "Aqui está o link de pagamento seguro para o seu projeto Calyroc.",
      amountLabel: "Montante",
      descriptionLabel: "Descrição",
      ctaLabel: "Pagar online",
      expiryNote: "Este link permanece válido até ser utilizado.",
      suiviLinkLabel: "Ver o acompanhamento do meu projeto",
      signature: "Até já,<br>Thomas",
    },
    paymentReceipt: {
      subject: "Recibo de pagamento — Calyroc",
      preview: "O seu pagamento foi confirmado com sucesso.",
      heading: "Pagamento confirmado",
      intro: "Obrigado, o seu pagamento foi recebido com sucesso. Aqui está o resumo.",
      amountLabel: "Montante pago",
      dateLabel: "Data",
      nextStepsText: "Entrarei em contacto brevemente para os próximos passos do projeto.",
      signature: "Obrigado pela confiança,<br>Thomas",
    },
    clientMessage: {
      preview: "Tem uma nova mensagem da Calyroc.",
      heading: "Mensagem da Calyroc",
      suiviLinkLabel: "Ver o acompanhamento do meu projeto",
      signature: "Até já,<br>Thomas",
    },
  },
};
