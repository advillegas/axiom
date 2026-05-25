import type { Locale } from "./use-locale";

type Copy = Record<Locale, string>;

export const t = {
  // ---------- Navbar ----------
  navHome: { en: "Home", es: "Inicio" } satisfies Copy,
  navServices: { en: "Services", es: "Servicios" } satisfies Copy,
  navProjects: { en: "Projects", es: "Proyectos" } satisfies Copy,
  navProcess: { en: "Process", es: "Proceso" } satisfies Copy,
  navCoverage: { en: "Coverage", es: "Cobertura" } satisfies Copy,
  navAbout: { en: "About", es: "Nosotros" } satisfies Copy,
  navContact: { en: "Contact", es: "Contacto" } satisfies Copy,
  navCta: { en: "Get a Quote", es: "Cotización" } satisfies Copy,
  callNow: { en: "Call (562) 753-7047", es: "Llamar (562) 753-7047" } satisfies Copy,

  // ---------- Hero ----------
  heroEyebrow: {
    en: "California IAS-accredited inspection agency",
    es: "Agencia de inspección acreditada en California",
  },
  heroTitle: {
    en: "Special / Deputy Inspections,",
    es: "Inspecciones Especiales,",
  },
  heroTitleAccent: {
    en: "done with rigor.",
    es: "hechas con rigor.",
  },
  heroBody: {
    en: "Independent, code-compliant Special Inspections and Material Testing for commercial, residential, and public-works construction across California — delivered on time, with reports your engineer of record can defend.",
    es: "Inspecciones Especiales y Pruebas de Materiales independientes y conformes al código para construcción comercial, residencial y de obras públicas en toda California — entregadas a tiempo, con informes que tu ingeniero responsable puede defender.",
  },
  heroCta: { en: "Request a Free Quote", es: "Solicitar Cotización Gratis" },
  heroCta2: { en: "View Services", es: "Ver Servicios" },
  heroStat1: { en: "Years combined experience", es: "Años de experiencia combinada" },
  heroStat2: { en: "Projects inspected", es: "Proyectos inspeccionados" },
  heroStat3: { en: "Counties covered", es: "Condados cubiertos" },

  // ---------- Trust strip ----------
  trustHeading: {
    en: "Approved by jurisdictions across California",
    es: "Aprobados por jurisdicciones en toda California",
  },

  // ---------- Mission ----------
  missionEyebrow: { en: "Our mission", es: "Nuestra misión" },
  missionTitle: {
    en: "Long-term partnerships built on technical rigor.",
    es: "Alianzas duraderas construidas sobre rigor técnico.",
  },
  missionBody: {
    en: "At Axiom Inspection Services, we deliver independent, code-compliant inspections that protect our clients' projects, investments, and peace of mind. We pair the technical rigor your project requires with the responsive, respectful communication your team deserves.",
    es: "En Axiom Inspection Services entregamos inspecciones independientes y conformes al código que protegen los proyectos, las inversiones y la tranquilidad de nuestros clientes. Combinamos el rigor técnico que tu proyecto requiere con la comunicación responsiva y respetuosa que tu equipo merece.",
  },
  missionPoint1: {
    en: "Independent third-party verification, never compromised.",
    es: "Verificación independiente de terceros, sin compromiso.",
  },
  missionPoint2: {
    en: "Reports written for engineers of record — defensible and clear.",
    es: "Informes redactados para ingenieros responsables — defendibles y claros.",
  },
  missionPoint3: {
    en: "Bilingual field staff (EN / ES). Hablamos Español.",
    es: "Personal de campo bilingüe (EN / ES). Hablamos Español.",
  },

  // ---------- Services ----------
  servicesEyebrow: { en: "Full-service inspection & testing", es: "Inspección y pruebas integrales" },
  servicesTitle: {
    en: "Code-compliant special inspections, end to end.",
    es: "Inspecciones especiales conformes al código, de principio a fin.",
  },
  servicesBody: {
    en: "Twelve disciplines under one roof — backed by ICC-certified inspectors and an in-house material-testing lab.",
    es: "Doce disciplinas bajo un mismo techo — respaldadas por inspectores certificados ICC y un laboratorio de pruebas de materiales propio.",
  },
  servicesAll: { en: "View all services", es: "Ver todos los servicios" },
  servicesUnsure: {
    en: "Unsure if your project requires special inspections?",
    es: "¿No estás seguro si tu proyecto requiere inspecciones especiales?",
  },
  servicesUnsureBody: {
    en: "Send us your plans. We'll review them and tell you exactly what's required — no pressure, no confusion.",
    es: "Envíanos tus planos. Los revisaremos y te diremos exactamente qué se requiere — sin presión, sin confusión.",
  },
  servicesUnsureCta: { en: "Submit Plans for Review", es: "Enviar planos para revisión" },

  // ---------- Process ----------
  processEyebrow: { en: "How we work", es: "Cómo trabajamos" },
  processTitle: { en: "Four steps from quote to closeout.", es: "Cuatro pasos del presupuesto al cierre." },

  // ---------- Coverage ----------
  coverageEyebrow: { en: "Service area", es: "Área de servicio" },
  coverageTitle: {
    en: "Statewide coverage. Local response.",
    es: "Cobertura estatal. Respuesta local.",
  },
  coverageBody: {
    en: "Field inspectors dispatched daily across Southern, Central, and Northern California.",
    es: "Inspectores de campo despachados diariamente por todo el sur, centro y norte de California.",
  },

  // ---------- Why us ----------
  whyEyebrow: { en: "Why Axiom", es: "Por qué Axiom" },
  whyTitle: {
    en: "Built for the projects that can't afford a redo.",
    es: "Construido para los proyectos que no pueden permitirse rehacerlos.",
  },

  // ---------- Projects ----------
  projectsEyebrow: { en: "Recent work", es: "Trabajo reciente" },
  projectsTitle: {
    en: "A sample of projects we've helped deliver.",
    es: "Una muestra de proyectos que hemos ayudado a entregar.",
  },

  // ---------- Testimonials ----------
  testimonialsEyebrow: { en: "Client trust", es: "Confianza del cliente" },
  testimonialsTitle: {
    en: "Project teams who keep us on speed-dial.",
    es: "Equipos de proyecto que nos tienen en marcado rápido.",
  },

  // ---------- FAQ ----------
  faqEyebrow: { en: "Common questions", es: "Preguntas comunes" },
  faqTitle: { en: "Frequently asked.", es: "Preguntas frecuentes." },

  // ---------- Contact ----------
  contactEyebrow: { en: "Get in touch", es: "Contáctanos" },
  contactTitle: {
    en: "Request a free quote.",
    es: "Solicita una cotización gratuita.",
  },
  contactBody: {
    en: "Tell us a little about your project. We'll respond within one business day. Hablamos Español.",
    es: "Cuéntanos un poco sobre tu proyecto. Te responderemos en un día hábil. Hablamos Español.",
  },
  formName: { en: "Full name", es: "Nombre completo" },
  formEmail: { en: "Email", es: "Correo electrónico" },
  formPhone: { en: "Phone", es: "Teléfono" },
  formCompany: { en: "Company (optional)", es: "Empresa (opcional)" },
  formProject: { en: "Project location / address", es: "Ubicación / dirección del proyecto" },
  formMessage: { en: "How can we help?", es: "¿Cómo podemos ayudar?" },
  formMessagePh: {
    en: "Tell us about scope, timing, and any required disciplines…",
    es: "Cuéntanos sobre el alcance, el tiempo y las disciplinas requeridas…",
  },
  formSend: { en: "Send Request", es: "Enviar solicitud" },
  formSending: { en: "Sending…", es: "Enviando…" },
  formSuccess: {
    en: "Thanks — we'll be in touch within one business day.",
    es: "Gracias — te contactaremos en un día hábil.",
  },
  formError: {
    en: "Something went wrong. Please call (562) 753-7047.",
    es: "Algo salió mal. Por favor llama al (562) 753-7047.",
  },

  // ---------- Footer ----------
  footerTagline: {
    en: "Special / Deputy Inspections & Material Testing — California.",
    es: "Inspecciones Especiales / Diputadas y Pruebas de Materiales — California.",
  },
  footerRights: {
    en: "All rights reserved.",
    es: "Todos los derechos reservados.",
  },
} as const;

export type TKey = keyof typeof t;

export function tx(key: TKey, locale: Locale): string {
  return t[key][locale];
}

// ---------- Service catalog (bilingual) ----------
export type ServiceItem = {
  id: string;
  iconKey:
    | "concrete"
    | "post-tension"
    | "shotcrete"
    | "epoxy"
    | "steel"
    | "wood"
    | "soils"
    | "fireproofing"
    | "masonry"
    | "lab"
    | "spray"
    | "roofing";
  en: { title: string; blurb: string; bullets: string[] };
  es: { title: string; blurb: string; bullets: string[] };
};

export const SERVICES: ServiceItem[] = [
  {
    id: "concrete",
    iconKey: "concrete",
    en: {
      title: "Reinforced Concrete",
      blurb:
        "Placement, consolidation, and rebar verification per ACI 318 and CBC Chapter 17.",
      bullets: ["Mix-design review", "Cylinder casting & curing", "Slump & air content"],
    },
    es: {
      title: "Concreto Reforzado",
      blurb:
        "Colocación, consolidación y verificación de varillas según ACI 318 y CBC Capítulo 17.",
      bullets: ["Revisión de mezcla", "Cilindros y curado", "Revenimiento y aire"],
    },
  },
  {
    id: "post-tension",
    iconKey: "post-tension",
    en: {
      title: "Post-Tensioned Concrete",
      blurb:
        "PT placement, stressing, elongation logs, and tendon grouting witnessed end-to-end.",
      bullets: ["Stressing & elongation", "Tendon profile", "Grout testing"],
    },
    es: {
      title: "Concreto Postensado",
      blurb:
        "Colocación de PT, tensado, registros de elongación e inyección de tendones, paso a paso.",
      bullets: ["Tensado y elongación", "Perfil del tendón", "Pruebas de lechada"],
    },
  },
  {
    id: "shotcrete",
    iconKey: "shotcrete",
    en: {
      title: "Shotcrete",
      blurb:
        "Wet- and dry-mix placement, pre-construction mock-ups, and core sampling.",
      bullets: ["Mock-up panels", "Nozzleman qualification", "Core extraction"],
    },
    es: {
      title: "Concreto Lanzado",
      blurb:
        "Colocación en mezcla húmeda y seca, paneles pre-construcción y extracción de núcleos.",
      bullets: ["Paneles de prueba", "Calificación de boquillero", "Extracción de núcleos"],
    },
  },
  {
    id: "epoxy",
    iconKey: "epoxy",
    en: {
      title: "Epoxy & Wedge Anchors",
      blurb:
        "Post-installed anchor inspections per ACI 355 / 318-19 with pull-out testing.",
      bullets: ["Hole prep", "Adhesive proportioning", "Tension/torque verification"],
    },
    es: {
      title: "Anclajes Epóxicos y de Cuña",
      blurb:
        "Inspecciones de anclajes post-instalados según ACI 355 / 318-19 con pruebas de extracción.",
      bullets: ["Preparación del orificio", "Proporción del adhesivo", "Verificación de torque"],
    },
  },
  {
    id: "steel",
    iconKey: "steel",
    en: {
      title: "Structural Steel & Welding",
      blurb:
        "AWS D1.1 / D1.8 visual and NDT — magnetic-particle, dye-penetrant, ultrasonic.",
      bullets: ["AWS-certified CWIs", "MT / PT / UT", "High-strength bolting"],
    },
    es: {
      title: "Acero Estructural y Soldadura",
      blurb:
        "Inspección visual y NDT según AWS D1.1 / D1.8 — partículas magnéticas, líquidos penetrantes, ultrasonido.",
      bullets: ["Inspectores CWI certificados", "MT / PT / UT", "Pernos de alta resistencia"],
    },
  },
  {
    id: "wood",
    iconKey: "wood",
    en: {
      title: "Wood Framing & Shear Walls",
      blurb:
        "Nailing, holdowns, drag straps, and panel verification for high-seismic regions.",
      bullets: ["Nailing schedules", "Holdown anchorage", "Diaphragm continuity"],
    },
    es: {
      title: "Estructura de Madera y Muros de Corte",
      blurb:
        "Clavado, anclajes y arrastres verificados para zonas sísmicas.",
      bullets: ["Patrones de clavado", "Anclaje de holdowns", "Continuidad del diafragma"],
    },
  },
  {
    id: "soils",
    iconKey: "soils",
    en: {
      title: "Soils & Geotechnical Support",
      blurb:
        "Compaction, fill verification, and foundation excavation oversight.",
      bullets: ["Sand-cone & nuclear gauge", "Fill mapping", "Footing observation"],
    },
    es: {
      title: "Suelos y Apoyo Geotécnico",
      blurb:
        "Compactación, verificación de relleno y supervisión de excavación de cimientos.",
      bullets: ["Densímetro nuclear", "Mapeo de relleno", "Observación de zapatas"],
    },
  },
  {
    id: "fireproofing",
    iconKey: "fireproofing",
    en: {
      title: "Spray-Applied Fireproofing",
      blurb:
        "SFRM thickness, density, bond, and adhesion / cohesion per UL design.",
      bullets: ["Thickness mapping", "Density samples", "Bond tests"],
    },
    es: {
      title: "Protección Contra Fuego",
      blurb:
        "Espesor, densidad, adhesión y cohesión de SFRM según diseño UL.",
      bullets: ["Mapa de espesores", "Muestras de densidad", "Pruebas de adhesión"],
    },
  },
  {
    id: "masonry",
    iconKey: "masonry",
    en: {
      title: "Masonry",
      blurb:
        "CMU placement, grout lifts, mortar, and prism testing per TMS 402 / 602.",
      bullets: ["Grout-lift verification", "Prism casting", "Reinforcement layout"],
    },
    es: {
      title: "Mampostería",
      blurb:
        "Colocación de CMU, levantes de lechada, mortero y prismas según TMS 402 / 602.",
      bullets: ["Verificación de lechada", "Prismas", "Distribución de refuerzo"],
    },
  },
  {
    id: "lab",
    iconKey: "lab",
    en: {
      title: "Material Testing Lab",
      blurb:
        "AASHTO-accredited lab — concrete, soils, asphalt, masonry, and aggregates.",
      bullets: ["Compressive strength", "Sieve analysis", "Proctor curves"],
    },
    es: {
      title: "Laboratorio de Pruebas de Materiales",
      blurb:
        "Laboratorio acreditado por AASHTO — concreto, suelos, asfalto, mampostería y agregados.",
      bullets: ["Resistencia a compresión", "Análisis granulométrico", "Curvas Proctor"],
    },
  },
  {
    id: "spray",
    iconKey: "spray",
    en: {
      title: "Waterproofing & Sealants",
      blurb:
        "Below-grade and split-slab waterproofing observation, including flood testing.",
      bullets: ["Membrane continuity", "Flood testing", "Sealant joint review"],
    },
    es: {
      title: "Impermeabilización y Selladores",
      blurb:
        "Observación de impermeabilización bajo nivel y losa dividida, incluidas pruebas de inundación.",
      bullets: ["Continuidad de membrana", "Pruebas de inundación", "Revisión de juntas"],
    },
  },
  {
    id: "roofing",
    iconKey: "roofing",
    en: {
      title: "Roofing & Cladding",
      blurb:
        "High-wind uplift, fastener pull-out, and weather-barrier inspections.",
      bullets: ["Uplift testing", "Fastener verification", "Weather-barrier review"],
    },
    es: {
      title: "Techos y Recubrimientos",
      blurb:
        "Inspección de levantamiento por viento, anclajes y barreras meteorológicas.",
      bullets: ["Pruebas de levantamiento", "Verificación de anclajes", "Revisión de barrera"],
    },
  },
];

// ---------- Process steps ----------
export const PROCESS = [
  {
    n: "01",
    en: { t: "Plans review & quote", b: "Send us your plans. We identify which CBC Chapter 17 special inspections apply and return a fixed-fee quote — usually within 24 hours." },
    es: { t: "Revisión de planos y cotización", b: "Envíanos tus planos. Identificamos qué inspecciones del Capítulo 17 del CBC aplican y devolvemos una cotización fija — usualmente en 24 horas." },
  },
  {
    n: "02",
    en: { t: "Pre-construction kickoff", b: "We coordinate with the EOR, GC, and AHJ to align on inspection schedule, mock-ups, and submittals before mobilization." },
    es: { t: "Inicio pre-construcción", b: "Coordinamos con el EOR, el GC y la AHJ para alinear el cronograma de inspección, paneles de prueba y entregables antes de movilizar." },
  },
  {
    n: "03",
    en: { t: "Field inspection & testing", b: "ICC-certified inspectors on site daily, with same-day digital reports and lab-tested samples turned around quickly." },
    es: { t: "Inspección y pruebas en campo", b: "Inspectores certificados ICC en sitio diariamente, con informes digitales el mismo día y muestras procesadas rápidamente." },
  },
  {
    n: "04",
    en: { t: "Final affidavit & closeout", b: "We deliver the signed Statement of Special Inspections to the AHJ — your project closes out clean." },
    es: { t: "Cierre y declaración final", b: "Entregamos la Declaración de Inspecciones Especiales firmada a la AHJ — tu proyecto cierra sin pendientes." },
  },
] as const;

// ---------- Service areas ----------
export const SERVICE_AREAS: { en: string; es: string }[] = [
  { en: "Los Angeles City", es: "Ciudad de Los Ángeles" },
  { en: "LA County", es: "Condado de LA" },
  { en: "Long Beach", es: "Long Beach" },
  { en: "Santa Monica", es: "Santa Monica" },
  { en: "Glendale", es: "Glendale" },
  { en: "Pasadena", es: "Pasadena" },
  { en: "Newport Beach", es: "Newport Beach" },
  { en: "Orange County", es: "Condado de Orange" },
  { en: "San Diego", es: "San Diego" },
  { en: "Santa Barbara", es: "Santa Barbara" },
  { en: "Ventura County", es: "Condado de Ventura" },
  { en: "Inland Empire", es: "Inland Empire" },
  { en: "Bay Area", es: "Bay Area" },
  { en: "Sacramento", es: "Sacramento" },
  { en: "Fresno", es: "Fresno" },
  { en: "Bakersfield", es: "Bakersfield" },
];

// ---------- Why-us pillars ----------
export const PILLARS = [
  {
    iconKey: "shield",
    en: { t: "Independence", b: "Third-party verification, no conflicts of interest." },
    es: { t: "Independencia", b: "Verificación de terceros sin conflictos de interés." },
  },
  {
    iconKey: "clock",
    en: { t: "Same-day reports", b: "Digital field reports delivered the same day, every time." },
    es: { t: "Informes el mismo día", b: "Informes de campo digitales entregados el mismo día, siempre." },
  },
  {
    iconKey: "badge",
    en: { t: "ICC-certified staff", b: "Every inspector carries the certifications your AHJ requires." },
    es: { t: "Personal certificado ICC", b: "Cada inspector cuenta con las certificaciones que tu AHJ requiere." },
  },
  {
    iconKey: "headset",
    en: { t: "Bilingual response", b: "EN/ES coverage from quote through closeout." },
    es: { t: "Respuesta bilingüe", b: "Cobertura EN/ES desde la cotización hasta el cierre." },
  },
] as const;

// ---------- Projects ----------
export const PROJECTS = [
  {
    id: "downtown-tower",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1600&q=80",
    en: {
      tag: "Commercial High-Rise",
      title: "32-story DTLA Office Tower",
      meta: "PT concrete · structural steel · 18 months",
      body: "Full Chapter 17 special inspection scope on a 1.2 M sq-ft Class-A tower delivered three weeks ahead of certificate-of-occupancy.",
    },
    es: {
      tag: "Torre Comercial",
      title: "Torre de Oficinas DTLA, 32 pisos",
      meta: "Concreto PT · acero estructural · 18 meses",
      body: "Alcance completo de inspecciones especiales del Capítulo 17 en una torre Clase A de 1.2 M pies² entregada tres semanas antes del certificado de ocupación.",
    },
  },
  {
    id: "k12",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1600&q=80",
    en: {
      tag: "DSA / Public Works",
      title: "K-12 STEM Modernization",
      meta: "DSA-certified · Inspector of Record · seismic retrofit",
      body: "Coordinated with the Division of the State Architect for a seismic-retrofit and STEM-lab build-out at a 1,400-student campus.",
    },
    es: {
      tag: "DSA / Obra Pública",
      title: "Modernización STEM K-12",
      meta: "Certificado DSA · Inspector de Registro · refuerzo sísmico",
      body: "Coordinación con la División del Arquitecto del Estado para refuerzo sísmico y laboratorios STEM en un campus de 1,400 estudiantes.",
    },
  },
  {
    id: "warehouse",
    image:
      "https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=1600&q=80",
    en: {
      tag: "Industrial",
      title: "Inland Empire Distribution Center",
      meta: "Tilt-up concrete · 850k sq-ft · 6 months",
      body: "Tilt-up concrete and structural-steel inspection on a 850k-sq-ft cold-storage facility along the I-15 corridor.",
    },
    es: {
      tag: "Industrial",
      title: "Centro de Distribución Inland Empire",
      meta: "Concreto tilt-up · 850k pies² · 6 meses",
      body: "Inspección de concreto tilt-up y acero estructural en una instalación de almacenamiento en frío de 850k pies² sobre el corredor I-15.",
    },
  },
  {
    id: "residential",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
    en: {
      tag: "Hillside Residential",
      title: "Pacific Palisades Custom Home",
      meta: "Caissons · post-tension · shotcrete walls",
      body: "Hillside caissons, post-tension foundation, and shotcrete retaining walls on a steep-grade lot — passed every milestone first try.",
    },
    es: {
      tag: "Residencial en Pendiente",
      title: "Casa Personalizada Pacific Palisades",
      meta: "Cajones · postensado · muros de concreto lanzado",
      body: "Cajones, cimentación postensada y muros de concreto lanzado en un lote con pendiente — aprobada en cada hito a la primera.",
    },
  },
] as const;

// ---------- Testimonials ----------
export const TESTIMONIALS = [
  {
    role: "Structural Engineer of Record",
    image:
      "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&w=400&q=80",
    en: {
      name: "M. Hernandez, SE",
      quote:
        "Reports are clean, timely, and written so a plan-checker can sign off without a phone call. That's all I ask for.",
    },
    es: {
      name: "M. Hernandez, SE",
      quote:
        "Los informes son limpios, oportunos y redactados para que un revisor pueda firmar sin una llamada. Eso es todo lo que pido.",
    },
  },
  {
    role: "General Contractor",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=400&q=80",
    en: {
      name: "K. Patel, GC",
      quote:
        "Same-day digital reports, bilingual field staff, and a real human answering the phone. Axiom punches well above their weight.",
    },
    es: {
      name: "K. Patel, GC",
      quote:
        "Informes digitales el mismo día, personal bilingüe y una persona real al teléfono. Axiom rinde más de lo que su tamaño sugiere.",
    },
  },
  {
    role: "Owner's Representative",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    en: {
      name: "S. Choi",
      quote:
        "On a public-works job we cannot afford a redo. Axiom catches issues before they become RFIs. They've earned every repeat call.",
    },
    es: {
      name: "S. Choi",
      quote:
        "En obras públicas no podemos rehacer. Axiom detecta problemas antes de que se conviertan en RFIs. Se han ganado cada llamada repetida.",
    },
  },
] as const;

// ---------- FAQ ----------
export const FAQ = [
  {
    en: {
      q: "Do I actually need a special inspector?",
      a: "If your project triggers CBC Chapter 17 — which most non-trivial commercial, multi-family, and public projects do — yes. Send us your plans and we'll tell you exactly which disciplines apply.",
    },
    es: {
      q: "¿Realmente necesito un inspector especial?",
      a: "Si tu proyecto activa el Capítulo 17 del CBC — lo cual aplica a la mayoría de los proyectos comerciales, multifamiliares y públicos — sí. Envíanos tus planos y te diremos exactamente qué disciplinas aplican.",
    },
  },
  {
    en: {
      q: "How fast can you mobilize?",
      a: "For most disciplines we can dispatch an inspector within 24–48 hours of contract signing. Emergency response is available with prior arrangement.",
    },
    es: {
      q: "¿Qué tan rápido pueden movilizarse?",
      a: "Para la mayoría de las disciplinas podemos despachar un inspector en 24–48 horas tras la firma del contrato. Respuesta de emergencia disponible con arreglo previo.",
    },
  },
  {
    en: {
      q: "Are you a true third party?",
      a: "Yes. Axiom is independently owned and not affiliated with any contractor or supplier. Independence is the entire point of a special inspector.",
    },
    es: {
      q: "¿Son verdaderamente un tercero independiente?",
      a: "Sí. Axiom es propiedad independiente y no está afiliada a ningún contratista o proveedor. La independencia es el punto central de un inspector especial.",
    },
  },
  {
    en: {
      q: "Do you work outside California?",
      a: "Our home base is Southern California, but we routinely take projects across the entire state. Out-of-state engagements are evaluated case by case.",
    },
    es: {
      q: "¿Trabajan fuera de California?",
      a: "Nuestra base es el sur de California, pero regularmente trabajamos en todo el estado. Los proyectos fuera del estado se evalúan caso por caso.",
    },
  },
  {
    en: {
      q: "How do you handle reports?",
      a: "All field reports are submitted digitally the same day, with photos, GPS-tagged location, and a signed PDF. Owners and EORs receive notifications automatically.",
    },
    es: {
      q: "¿Cómo manejan los informes?",
      a: "Todos los informes de campo se envían digitalmente el mismo día, con fotos, ubicación GPS y un PDF firmado. Propietarios y EORs reciben notificaciones automáticamente.",
    },
  },
] as const;

// ---------- Trust badges (jurisdictions) ----------
export const JURISDICTIONS = [
  "City of Los Angeles LADBS",
  "LA County DPW",
  "City of Long Beach",
  "City of Santa Monica",
  "City of Glendale",
  "City of Pasadena",
  "Newport Beach",
  "City of San Diego",
  "DSA — Division of the State Architect",
  "OSHPD / HCAi",
];
