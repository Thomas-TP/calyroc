import type { Dictionary } from "../dictionary";

// NOTE: traduction assistée par IA, en attente d'une relecture native avant
// mise en production (aucun locuteur natif PL dans l'équipe pour l'instant).
export const pl: Dictionary = {
  meta: {
    title: "Calyroc — Studio webowe dla nowoczesnych, szybkich stron internetowych",
    description:
      "Strony wizytówkowe i e-commerce szyte na miarę, projektowane i tworzone przez Thomasa Prud'homme'a. Nowoczesny stack, szybka realizacja, przejrzyste ceny.",
  },
  nav: {
    services: "Usługi",
    work: "Realizacje",
    pricing: "Cennik",
    about: "O mnie",
    blog: "Blog",
    studio: "Studio",
    contact: "Kontakt",
    themeToLight: "Przełącz na jasny motyw",
    themeToDark: "Przełącz na ciemny motyw",
    openMenu: "Otwórz menu",
    closeMenu: "Zamknij menu",
  },
  home: {
    eyebrow: "Studio webowe z siedzibą w Szwajcarii",
    heroTitle: "Szybkie strony na miarę, dostarczone bez zbędnych okrężnych dróg.",
    heroSubtitle:
      "Calyroc projektuje i buduje nowoczesne strony wizytówkowe i e-commerce dla freelancerów, MŚP i startupów — nowoczesny stack, bezpośredni kontakt, przejrzyste ceny.",
    ctaPrimary: "Poproś o wycenę",
    ctaSecondary: "Zobacz realizacje",
    trustLine:
      "Rozmawia Pan/Pani z Thomasem, a nie z kierownikiem projektu — od pierwszej odpowiedzi po dzień uruchomienia.",
    scrollHint: "Przewiń w dół",
    processEyebrow: "Jak to działa",
    processTitle: "Cztery kroki, żadnych szarych stref.",
    processSteps: [
      {
        title: "Opisuje Pan/Pani swój projekt",
        description:
          "Przez formularz kontaktowy lub bezpośrednio z Ask Calyroc — dwie minuty wystarczą, by ustalić podstawy.",
      },
      {
        title: "Jasna wycena w ciągu 48h",
        description: "Stała cena i realistyczny harmonogram, a nie widełki, które później rosną.",
      },
      {
        title: "Realizacja z bieżącymi konsultacjami",
        description:
          "Widzi Pan/Pani, jak strona nabiera kształtu, i zgłasza uwagi przed finalnym odbiorem, nie po nim.",
      },
      {
        title: "Dostawa + 2 rundy poprawek w cenie",
        description:
          "Strona należy do Pana/Pani, z dwiema rundami poprawek wliczonymi w cenę wyceny.",
      },
    ],
    priceCompareEyebrow: "Ta sama strona, gdzie indziej",
    priceCompareTitle: "Ile kosztuje podobna strona w typowej agencji.",
    priceCompareAgencyLabel: "Typowa agencja",
    priceCompareItems: [
      { label: "Analiza i strategia", range: "CHF 800 – 1500" },
      { label: "Design i UX", range: "CHF 1500 – 3000" },
      { label: "Programowanie", range: "CHF 3000 – 6000" },
      { label: "SEO i wdrożenie", range: "CHF 800 – 1500" },
    ],
    priceCompareAgencyTotal: "CHF 6000 – 12 000",
    priceCompareCalyrocLabel: "W Calyroc",
    priceCompareNote:
      "Orientacyjny przedział na podstawie standardowych stawek rynkowych w Szwajcarii dla profesjonalnej wielostronicowej witryny porównywalnej z pakietem Pro.",
    servicesEyebrow: "Czym się zajmuję",
    servicesTitle: "Trzy sposoby na start, jedno podejście dopasowane do potrzeb.",
    servicesCta: "Zobacz wszystkie usługi",
    workEyebrow: "Wybrane realizacje",
    workTitle: "Prawdziwe projekty, nie makiety.",
    workCta: "Zobacz wszystkie realizacje",
    ctaBandTitle: "Ma Pan/Pani projekt w głowie?",
    ctaBandSubtitle: "Opisz go w kilku zdaniach, odpowiem w ciągu 48h.",
    ctaBandLabel: "Rozpocznij rozmowę",
  },
  footer: {
    tagline: "Niezależne studio webowe — Szwajcaria i Europa.",
    legalLinks: {
      mentionsLegales: "Nota prawna",
      confidentialite: "Prywatność",
      cgv: "Regulamin",
    },
  },
  servicesPage: {
    eyebrow: "Usługi",
    title: "Strona zbudowana dla Twojej firmy, a nie odgrzewany szablon.",
    subtitle:
      "Każda usługa jest precyzyjnie określona z góry: co jest wliczone, jaki stack jest używany, orientacyjny harmonogram. Żadnych niespodzianek na fakturze.",
    ctaLabel: "Poproś o wycenę",
    includesLabel: "W cenie",
    techLabel: "Stack technologiczny",
    timelineLabel: "Orientacyjny harmonogram",
    items: [
      {
        title: "Strona wizytówkowa",
        description:
          "Zaprezentuj swoją firmę, uspokój odwiedzających i zamień wizyty w zapytania kontaktowe.",
        includes: [
          "Projekt na miarę, żaden ogólny szablon",
          "Responsywność na mobile/tablet/desktop",
          "Wbudowany formularz kontaktowy",
          "Podstawowe techniczne SEO",
        ],
        tech: "React, TypeScript, Cloudflare Workers",
        timeline: "1 do 2 tygodni",
      },
      {
        title: "E-commerce",
        description: "Sprzedawaj online z przejrzystym katalogiem i niezawodnymi płatnościami.",
        includes: [
          "Katalog produktów i zarządzanie magazynem",
          "Bezpieczne płatności przez Stripe",
          "Konto klienta (zamówienia, historia)",
          "Automatyczne e-maile transakcyjne",
        ],
        tech: "React, Stripe, Cloudflare Workers",
        timeline: "4 do 6 tygodni",
      },
      {
        title: "Redesign",
        description: "Zmodernizuj istniejącą stronę bez utraty pozycji SEO.",
        includes: [
          "Audyt obecnej strony (wydajność, SEO, treść)",
          "Migracja istniejących treści",
          "Poprawne przekierowania zachowujące SEO",
          "Nowy design, ten sam adres URL",
        ],
        tech: "Dopasowane do Twojego obecnego stacku",
        timeline: "2 do 4 tygodni",
      },
      {
        title: "Landing page",
        description: "Jedna strona, skupiona na jednej ofercie, produkcie lub premierze.",
        includes: [
          "Struktura zorientowana na konwersję",
          "Jeden formularz lub wezwanie do działania",
          "Zoptymalizowana pod natychmiastowe ładowanie",
        ],
        tech: "React, Cloudflare Workers",
        timeline: "3 do 5 dni",
      },
      {
        title: "Utrzymanie",
        description: "Hosting, aktualizacje i drobne zmiany, bez konieczności myślenia o tym.",
        includes: [
          "Hosting Cloudflare w cenie",
          "Aktualizacje bezpieczeństwa",
          "Drobne zmiany treści",
          "Wsparcie mailowe",
        ],
        tech: "—",
        timeline: "Abonament miesięczny",
      },
      {
        title: "SEO techniczne",
        description: "Struktura, wydajność i indeksacja, by być widocznym w Google.",
        includes: [
          "Audyt wydajności (Core Web Vitals)",
          "Dane strukturalne (JSON-LD)",
          "Mapa strony i robots.txt",
          "Rekomendacje dotyczące treści",
        ],
        tech: "Niezależne od stacku technologicznego",
        timeline: "1 tydzień",
      },
      {
        title: "Identyfikacja wizualna",
        description: "Proste logo i spójna paleta kolorów na dobry początek.",
        includes: [
          "Logo (formaty web + print)",
          "Paleta kolorów i typografia",
          "Warianty favicony / mediów społecznościowych",
        ],
        tech: "—",
        timeline: "1 tydzień",
      },
    ],
  },
  workPage: {
    eyebrow: "Realizacje",
    title: "Prawdziwe projekty, nie makiety.",
    subtitle:
      "Dwa projekty zbudowane i wdrożone produkcyjnie — działająca platforma e-commerce i osobiste portfolio — z prawdziwymi użytkownikami i prawdziwym ruchem.",
    problemLabel: "Kontekst",
    stackLabel: "Stack technologiczny",
    featuresLabel: "Funkcje",
    resultsLabel: "Rezultat",
    linkLabel: "Odwiedź stronę",
    ctaTitle: "Twój projekt, kolejny na tej stronie?",
    ctaSubtitle: "Porozmawiajmy o tym, co chcesz zbudować.",
    ctaLabel: "Rozpocznij projekt",
    caseStudies: [
      {
        title: "Swiss3Design",
        tagline: "Platforma e-commerce do wielokolorowego druku 3D",
        category: "E-commerce",
        problem:
          "Sprzedaż obiektów drukowanych w 3D w maksymalnie 4 kolorach, z wycenami na miarę i płatnością online, z warsztatu w Gland (VD).",
        stack: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle", "Stripe", "Cloudflare Workers"],
        features: [
          "Katalog produktów z konfiguratorem kolorów",
          "Wyceny na miarę na podstawie przesłanych plików 3D",
          "Płatności Stripe na żywo w produkcji",
          "Konta klientów z uwierzytelnianiem dwuskładnikowym",
          "Panel administracyjny do pełnego zarządzania firmą",
        ],
        results: [
          "Działająca platforma z prawdziwymi zamówieniami i płatnościami",
          "Wielojęzyczność FR/DE/IT/EN",
        ],
        url: "https://swiss3design.ch",
      },
      {
        title: "Portfolio — thomastp.ch",
        tagline: "Osobiste portfolio z zaawansowaną animacją",
        category: "Strona wizytówkowa",
        problem:
          "Zaprezentować doświadczenie i projekty techniczne w sposób zapadający w pamięć, z poziomem dopracowania, który wyróżnia się na tle innych.",
        stack: ["React", "TypeScript", "GSAP", "Lenis", "Cloudflare Workers"],
        features: [
          "Animowane hero z cząsteczkami 3D",
          "Płynne przewijanie i animacja sterowana przewijaniem",
          "Wbudowany asystent konwersacyjny",
          "Dwujęzyczność FR/EN",
        ],
        results: ["Wysoki wynik wydajności (Core Web Vitals)"],
        url: "https://thomastp.ch",
      },
    ],
  },
  pricingPage: {
    eyebrow: "Cennik",
    title: "Przejrzyste ceny, żadnych ukrytych pozycji.",
    subtitle:
      "Trzy podstawowe pakiety w stałej cenie na szybki start bez niespodzianek na fakturze, plus wycena na miarę dla wszystkiego, co wykracza poza ten zakres.",
    guaranteeLabel:
      "Cena podana w wycenie to cena, którą Pan/Pani płaci — żadnych ukrytych kosztów.",
    deliveryLabel: "Harmonogram",
    finderEyebrow: "Nie wiesz, który pakiet wybrać?",
    finderTitle: "Znajdź swój w 3 pytaniach.",
    finderSubtitle:
      "Odpowiedz na kilka pytań, a powiemy Ci, który pakiet pasuje do Twojego projektu.",
    finderTypeQuestion: {
      question: "Co chcesz zbudować?",
      options: [
        { value: "vitrine", label: "Strona wizytówkowa" },
        { value: "multipage", label: "Strona wielostronicowa" },
        { value: "ecommerce", label: "Sklep internetowy" },
        { value: "webapp", label: "Aplikacja na miarę" },
      ],
    },
    finderPagesQuestion: {
      question: "Ile mniej więcej podstron?",
      options: [
        { value: "1", label: "1 podstrona" },
        { value: "few", label: "2 do 5 podstron" },
        { value: "many", label: "6+ podstron" },
      ],
    },
    finderLanguagesQuestion: {
      question: "Ile języków?",
      options: [
        { value: "1-2", label: "1 do 2 języków" },
        { value: "3", label: "3 języki" },
        { value: "4-6", label: "4 do 6 języków" },
      ],
    },
    finderResultTitle: "Ten pakiet wygląda na dopasowany:",
    finderResultCta: "Zobacz szczegóły",
    finderRestartLabel: "Zacznij od nowa",
    finderBackLabel: "Wstecz",
    packs: [
      {
        id: "essentiel",
        name: "Essential",
        price: "CHF 590",
        priceNote: "ok. 600 €",
        description: "Profesjonalna jednostronicowa strona, by szybko zacząć.",
        features: [
          "Jednostronicowa strona wizytówkowa",
          "Projekt na miarę",
          "Responsywność mobile/desktop",
          "Formularz kontaktowy",
          "2 języki (FR/EN)",
        ],
        timeline: "1 do 2 tygodni",
        highlighted: false,
      },
      {
        id: "pro",
        name: "Pro",
        price: "CHF 1490",
        priceNote: "ok. 1550 €",
        description: "Kompletna wielostronicowa strona, gotowa do konwersji odwiedzających.",
        features: [
          "Strona wielostronicowa (5-6 podstron)",
          "Do 3 języków",
          "Dopracowana animacja",
          "SEO techniczne w cenie",
          "Opcjonalny blog",
        ],
        timeline: "2 do 4 tygodni",
        highlighted: true,
      },
      {
        id: "sur-mesure",
        name: "Na miarę",
        price: "Od CHF 2900",
        priceNote: "wycena indywidualna",
        description: "E-commerce, aplikacja webowa lub konkretna potrzeba.",
        features: [
          "E-commerce lub aplikacja webowa",
          "Panel administracyjny",
          "Zintegrowana płatność online",
          "Złożone integracje",
          "Do 6 języków",
        ],
        timeline: "Od 4 tygodni",
        highlighted: false,
      },
    ],
    maintenanceTitle: "Utrzymanie",
    maintenanceText:
      "CHF 35/miesiąc: hosting, aktualizacje bezpieczeństwa i drobne zmiany treści, bez konieczności myślenia o tym.",
    termsTitle: "Jak to działa",
    terms: [
      "Zaliczka 30-50% przy zamówieniu, płatna online",
      "Pozostała kwota fakturowana przy dostawie, przed uruchomieniem",
      "2 rundy poprawek w cenie każdego pakietu",
      "Orientacyjny harmonogram: 1-2 tygodnie (Essential) do 6 tygodni (Na miarę)",
    ],
    faqTitle: "Najczęściej zadawane pytania",
    faq: [
      {
        question: "Czy cena obejmuje domenę?",
        answer:
          "Nie, domena (ok. CHF 15/rok za .ch) i hosting są osobno, ale mogę zająć się wszystkim za Pana/Panią, jeśli woli się Pan/Pani tym nie zajmować.",
      },
      {
        question: "Ile poprawek jest w cenie?",
        answer:
          "Dwie rundy poprawek w każdym pakiecie. Powyżej tego dodatkowe zmiany są fakturowane osobno.",
      },
      {
        question: "Co jeśli mój projekt nie pasuje do żadnego pakietu?",
        answer:
          "Porozmawiajmy bezpośrednio — pakiet Na miarę istnieje właśnie dla projektów wykraczających poza standardowy zakres.",
      },
      {
        question: "Jak wygląda płatność?",
        answer:
          "Zaliczka 30-50% przy zamówieniu przez Stripe, a następnie pozostała kwota przy dostawie, przed uruchomieniem strony.",
      },
    ],
    faqSeeMoreLabel: "Zobacz wszystkie pytania",
    ctaLabel: "Poproś o wycenę",
  },
  aboutPage: {
    eyebrow: "O mnie",
    title: "Deweloper, nie agencja.",
    subtitle:
      "Calyroc to ja — Thomas. Żadnego kierownika projektu, żadnego podwykonawstwa, żadnych kosztów agencji doliczonych do Pana/Pani wyceny.",
    founderRole: "Samodzielny deweloper · Praktykant CFC IT",
    portfolioLabel: "Moje portfolio",
    linkedinLabel: "LinkedIn",
    storyTitle: "Moja droga",
    storyParagraphs: [
      "Nazywam się Thomas Prud'homme, odbywam praktykę CFC w zakresie infrastruktury i operacji IT, z siedzibą w Genewie, w Szwajcarii.",
      "Calyroc powstało z prostej obserwacji: większość freelancerów i małych firm nie potrzebuje dziesięcioosobowej agencji, by mieć szybką i dobrze zbudowaną stronę. Potrzebują jednej kompetentnej osoby, która szybko odpowiada i dotrzymuje terminów.",
      "Pracuję z wykorzystaniem workflow wspomaganego przez AI — przyspiesza to pisanie kodu, a nie myślenie o tym, co Twoja strona ma robić. Efekt: krótsze terminy realizacji i niższe ceny niż w tradycyjnej agencji, bez obniżania jakości.",
      "Najlepszy dowód: Swiss3Design, platforma e-commerce do druku 3D z płatnościami Stripe na żywo w produkcji. Nie makieta — prawdziwa strona, z prawdziwymi klientami.",
    ],
    whyTitle: "Dlaczego to dla Ciebie ważne",
    whyPoints: [
      {
        title: "Bezpośredni kontakt",
        description:
          "Piszesz do mnie e-mail, odpowiadam. Żadnej kolejki zgłoszeń, żadnej rotacji zespołu w trakcie projektu.",
      },
      {
        title: "Kontrolowane ceny",
        description: "Żadnych kosztów agencji doliczanych do Twojej wyceny.",
      },
      {
        title: "Nowoczesny stack technologiczny",
        description:
          "Cloudflare Workers, React, TypeScript — ten sam stack, którego używam do własnych projektów produkcyjnych.",
      },
      {
        title: "Szczerość",
        description:
          "Nadal się szkolę i mówię o tym otwarcie od razu. To oznaka elastyczności i uczciwych cen, nie wymówka.",
      },
    ],
    ctaTitle: "Masz projekt w głowie?",
    ctaSubtitle: "Opisz mi go, odpowiem w ciągu 48h.",
    ctaLabel: "Rozpocznij rozmowę",
  },
  contactPage: {
    eyebrow: "Kontakt",
    title: "Porozmawiajmy o Twoim projekcie.",
    subtitle:
      "Opisz, co chcesz zbudować, a odpowiem w ciągu 48h z konkretną informacją zwrotną i jasnym zakresem w stałej cenie.",
    formName: "Imię i nazwisko",
    formEmail: "E-mail",
    formPackLabel: "Pakiet",
    formPackUnsureLabel: "Jeszcze nie wiem",
    formMessage: "Twój projekt",
    formMessagePlaceholder: "Opisz swoją firmę, co chcesz zbudować, swój harmonogram...",
    formSubmit: "Wyślij",
    formSubmitting: "Wysyłanie...",
    formSuccess: "Wiadomość wysłana — odpowiem w ciągu 48h.",
    formError: "Coś poszło nie tak. Napisz do mnie bezpośrednio na hello@calyroc.com.",
    directTitle: "Lub napisz do mnie bezpośrednio",
    responseTime: "Odpowiedź w ciągu 48h, w dni robocze.",
    paymentSuccessTitle: "Płatność potwierdzona",
    paymentSuccessBody:
      "Dziękuję, Pana/Pani płatność została zarejestrowana. Wkrótce otrzyma Pan/Pani potwierdzenie e-mailem.",
    paymentCancelledTitle: "Płatność anulowana",
    paymentCancelledBody:
      "Płatność została anulowana i żadna kwota nie została pobrana. Może Pan/Pani spróbować ponownie w dowolnym momencie lub napisać do mnie bezpośrednio.",
  },
  legalPageNotice:
    "Ta strona została przetłumaczona dla Państwa wygody; jedynie wersja francuska jest prawnie wiążąca w przypadku sporu lub rozbieżności interpretacyjnej.",
  blogPage: {
    eyebrow: "Blog",
    title: "Notatki ze studia.",
    subtitle:
      "Decyzje techniczne, wyciągnięte wnioski i kulisy projektów Calyroc, pisane przez dewelopera, który je buduje.",
    readMoreLabel: "Czytaj artykuł",
    backLabel: "← Powrót do bloga",
    minutesLabel: "min czytania",
  },
  faqPage: {
    eyebrow: "FAQ",
    title: "Wszystkie pytania.",
    subtitle:
      "Poza cennikiem: proces, technologia, co dzieje się po dostawie. Nie widzisz swojego pytania? Napisz do mnie bezpośrednio.",
    items: [
      {
        question: "Jak wygląda projekt od pierwszego kontaktu do uruchomienia?",
        answer:
          "Opisujesz swój projekt przez formularz kontaktowy lub Ask Calyroc. W ciągu 48 godzin otrzymujesz jasną wycenę, ze stałą ceną i realistycznym harmonogramem. Realizacja zaczyna się po wpłacie zaliczki, z regularnymi konsultacjami, dzięki którym widzisz, jak strona nabiera kształtu. Przy dostawie w cenie są dwie rundy poprawek, zanim strona zostanie uruchomiona.",
      },
      {
        question: "Jakiej technologii używasz?",
        answer:
          "Next.js, TypeScript i Cloudflare Workers dla większości projektów — ten sam stack, którego używam do własnych stron produkcyjnych. Wybory techniczne nadal dostosowują się do każdego projektu (baza danych, płatności, konkretne integracje).",
      },
      {
        question: "Czy moja strona będzie dobrze się pozycjonować w Google?",
        answer:
          "Podstawowe SEO techniczne jest wliczone w każdy pakiet: semantyczna struktura, zoptymalizowane czasy ładowania, dane strukturalne, mapa strony. Dobre pozycjonowanie zależy też od treści i czasu, ale techniczne fundamenty są gotowe od pierwszego dnia.",
      },
      {
        question: "Kto jest właścicielem kodu i strony po dostarczeniu projektu?",
        answer:
          "Kod źródłowy i wszystkie materiały są w pełni przekazywane Panu/Pani po zakończeniu płatności. Zachowuję jedynie prawo do wspomnienia o projekcie w moim portfolio, chyba że ustalono inaczej.",
      },
      {
        question: "Czy oferujesz utrzymanie po dostawie?",
        answer:
          "Tak, jako opcję za CHF 35/miesiąc: hosting, aktualizacje bezpieczeństwa i drobne zmiany treści, bez konieczności myślenia o tym.",
      },
      {
        question: "Czy współpracujesz z klientami spoza Szwajcarii?",
        answer:
          "Tak, cały proces odbywa się zdalnie, a strona (podobnie jak asystent Ask Calyroc) jest dostępna w 6 językach — francuskim, angielskim, hiszpańskim, włoskim, niemieckim i portugalskim.",
      },
      {
        question: "Jak mogę się z Tobą skontaktować w trakcie realizacji?",
        answer:
          "Bezpośrednio — masz do czynienia ze mną, a nie z kierownikiem projektu czy działem wsparcia. To jedna z głównych zalet pracy z samodzielnym studiem zamiast z agencją.",
      },
    ],
  },
  trackingPage: {
    eyebrow: "Śledzenie projektu",
    title: "Na jakim etapie jest Twój projekt?",
    subtitle: "Postęp w czasie rzeczywistym, bez konieczności pytania.",
    steps: [
      {
        title: "Kontakt",
        description: "Twoje zgłoszenie zostało przyjęte.",
      },
      {
        title: "Wycena",
        description: "Cena i termin zostały potwierdzone.",
      },
      {
        title: "Realizacja",
        description: "Strona jest tworzona, z regularnymi aktualizacjami postępu.",
      },
      {
        title: "Dostawa",
        description: "Strona jest już online. Dostępne są jeszcze dwie rundy poprawek.",
      },
    ],
    currentBadge: "W trakcie",
    doneBadge: "Zakończone",
    ctaTitle: "Pytanie dotyczące postępu?",
    ctaLabel: "Napisz do Thomasa",
    summaryHeading: "Twój projekt",
    todayHeading: "Na jakim etapie jest dzisiaj Twój projekt",
    updatesHeading: "Aktualizacje projektu",
    updatesEmpty: "Aktualizacje projektu będą się tutaj pojawiać w miarę postępu prac.",
    previewCta: "Zobacz podgląd strony",
    filesHeading: "Zdjęcia i makiety",
    approveHeading: "Strona jest gotowa do sprawdzenia",
    approveDescription:
      "Sprawdź podgląd powyżej, a następnie zatwierdź, aby przejść do publikacji.",
    approveButton: "Zatwierdzam, gotowe do publikacji",
    approvedNotice: "Zatwierdziłeś stronę — publikacja jest przygotowywana.",
    overviewNavLabel: "Podgląd",
    paymentsNavLabel: "Płatność",
    paymentsHeading: "Płatności",
    paymentsSubtitle: "Twoja zaliczka i pozostała kwota w jednym miejscu.",
    paymentsEmpty: "Brak płatności na razie.",
    payNowLabel: "Zapłać teraz",
    payErrorLabel: "Wystąpił błąd, spróbuj ponownie lub skontaktuj się z Thomasem.",
    paidLabel: "Zapłacone",
    paymentSuccessNotice: "Płatność otrzymana, dziękujemy!",
  },
  notFoundPage: {
    eyebrow: "404",
    title: "Ta strona nie istnieje.",
    subtitle:
      "Link mógł się zdezaktualizować, a adres może zawierać literówkę. Oto jak wrócić na właściwy trop.",
    ctaHome: "Powrót do strony głównej",
    ctaContact: "Skontaktuj się z nami",
  },
  chatbot: {
    label: "Ask Calyroc",
    title: "Ask Calyroc",
    aiBadge: "AI",
    intro:
      "Cześć! Jestem asystentem AI Calyroc i mogę odpowiedzieć na pytania dotyczące usług i cen. Po prawdziwą wycenę skorzystaj z [formularza kontaktowego](/pl/contact).",
    placeholder: "Zadaj pytanie...",
    send: "Wyślij",
    errorMessage: "Coś poszło nie tak, spróbuj ponownie lub napisz na hello@calyroc.com.",
    disclaimer: "Odpowiedzi generowane przez AI, niewiążące umownie.",
    close: "Zamknij",
    copy: "Kopiuj",
    copied: "Skopiowano",
    expand: "Rozwiń",
    collapse: "Zwiń",
    resizeHandle: "Zmień rozmiar okna",
  },
  email: {
    clientConfirmation: {
      subject: "Twoja wiadomość została odebrana — Calyroc",
      preview: "Dziękuję za kontakt, odpowiem w ciągu 48h.",
      heading: "Wiadomość odebrana",
      intro:
        "Dziękuję za wiadomość. Oto podsumowanie tego, co przesłano — odpowiem w ciągu 48h z konkretną informacją zwrotną.",
      recapTitle: "Podsumowanie",
      packLabel: "Pakiet",
      messageLabel: "Twoja wiadomość",
      responseTimeText: "Odpowiedź w ciągu 48h, w dni robocze.",
      signature: "Do usłyszenia,<br>Thomas",
    },
    paymentLink: {
      subject: "Twój link do płatności Calyroc",
      preview: "Bezpieczny link do płatności jest gotowy.",
      heading: "Twój link do płatności",
      intro: "Oto bezpieczny link do płatności za Twój projekt Calyroc.",
      amountLabel: "Kwota",
      descriptionLabel: "Opis",
      ctaLabel: "Zapłać online",
      expiryNote: "Ten link pozostaje ważny do momentu wykorzystania.",
      signature: "Do usłyszenia,<br>Thomas",
    },
    paymentReceipt: {
      subject: "Potwierdzenie płatności — Calyroc",
      preview: "Twoja płatność została potwierdzona.",
      heading: "Płatność potwierdzona",
      intro: "Dziękuję, Twoja płatność została odebrana. Oto podsumowanie.",
      amountLabel: "Zapłacona kwota",
      dateLabel: "Data",
      nextStepsText: "Wkrótce skontaktuję się w sprawie kolejnych kroków projektu.",
      signature: "Dziękuję za zaufanie,<br>Thomas",
    },
    clientMessage: {
      preview: "Masz nową wiadomość od Calyroc.",
      heading: "Wiadomość od Calyroc",
      signature: "Do usłyszenia,<br>Thomas",
    },
  },
};
