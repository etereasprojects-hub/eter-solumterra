// Mock data for the proposal landing page

export const eterBranding = {
  logo: "https://customer-assets.emergentagent.com/job_solumterra-web/artifacts/lbris3lv_ETER%20%2821%29.png",
  name: "Éter",
  tagline: "Desarrollo Web · Sistemas · Integración de IA",
  description: "Startup tecnológica B2B que ofrece a las MIPYMEs todo el poder de la inteligencia artificial"
};

export const clientInfo = {
  name: "Solum Terra Arquitectura",
  type: "Estudio de Arquitectura",
  projectType: "Web Empresarial tipo Portfolio",
  style: "Artístico, minimalista y en tonos grises"
};

export const packages = [
  {
    id: "A",
    name: "Sitio Web Corporativo & Portfolio",
    price: "Gs. 4.500.000",
    paymentType: "pago único",
    description: "Desarrollo completo del sitio web con todas las funcionalidades esenciales",
    features: [
      {
        title: "Formulario de contacto",
        description: "Para que potenciales clientes puedan comunicarse directamente desde la web"
      },
      {
        title: "Formulario de solicitud de citas",
        description: "Permitiendo a los clientes solicitar reuniones en horarios previamente configurados por cada miembro del equipo"
      },
      {
        title: "Sección Portfolio / Galería de proyectos",
        description: "Ideal para exhibir trabajos realizados, generar confianza y transmitir el potencial del estudio"
      },
      {
        title: "Secciones estándar de inicio",
        description: "Presentación, servicios, enfoque de trabajo, equipo, contacto, etc."
      },
      {
        title: "Política de Privacidad",
        description: "Fundamental para cumplimiento de requisitos en plataformas como Google, Meta, TikTok y otros servicios digitales"
      }
    ],
    highlighted: true
  },
  {
    id: "B",
    name: "Sistema Interno de Gestión (Backend)",
    price: "Gs. 2.000.000",
    paymentType: "pago único",
    description: "Panel administrativo interno con acceso mediante usuarios y contraseñas individuales",
    features: [
      {
        title: "Gestión de cobranzas",
        description: "Control y seguimiento de pagos y cuentas por cobrar"
      },
      {
        title: "Gestión de tributación",
        description: "Administración de aspectos fiscales y tributarios"
      },
      {
        title: "Administración del portfolio",
        description: "Gestión de proyectos desde el panel administrativo"
      },
      {
        title: "Gestión de clientes",
        description: "Base de datos y seguimiento de clientes"
      },
      {
        title: "Gestión de mensajes y consultas",
        description: "Administración centralizada de comunicaciones"
      },
      {
        title: "Herramientas adicionales",
        description: "Desarrollo según las necesidades específicas del estudio"
      }
    ],
    highlighted: false
  },
  {
    id: "C",
    name: "Integración de Inteligencia Artificial",
    price: "Gs. 450.000",
    paymentType: "mensual",
    description: "Sistema de IA para atención al cliente 24/7, tanto en la web como en WhatsApp",
    features: [
      {
        title: "Comprensión del negocio",
        description: "La IA comprende en profundidad el modelo de negocio del estudio"
      },
      {
        title: "Comunicación personalizada",
        description: "Adapta su comunicación según las instrucciones y el tono definidos por la empresa"
      },
      {
        title: "Conocimiento de servicios",
        description: "Conoce servicios, capacidades y proyectos disponibles"
      },
      {
        title: "Respuestas contextuales",
        description: "Recibe, interpreta y responde consultas de forma contextual y coherente"
      },
      {
        title: "Gestión automática",
        description: "Crear y gestionar pedidos, registros de clientes, solicitudes de citas, mostrar secciones específicas y recomendar proyectos relevantes"
      }
    ],
    highlighted: false,
    note: "La IA se ofrece bajo modalidad mensual debido a las plataformas y servicios tecnológicos necesarios para su funcionamiento continuo.",
    includesGoogleActivation: true
  }
];

export const additionalInfo = {
  googleActivation: {
    title: "Activación en Google",
    includedIn: "Paquete C",
    separateCost: "Gs. 300.000/mes",
    description: "Trabajos de activación para aparecer en Google, mejorar la presencia, escalar posiciones de búsqueda y hacer la empresa más 'encontrable', aumentando así la cantidad de clientes potenciales orgánicos.",
    timeEstimate: "6 a 12 meses"
  },
  hosting: {
    title: "Hosting Incluido",
    description: "El hosting está incluido en todos los paquetes.",
    domainNote: "El dominio tiene costo aparte y depende del dominio a elegir, pero suele estar alrededor de $15 USD anuales."
  }
};

export const summary = {
  title: "Resumen de Inversión",
  items: [
    { name: "Sitio web – Paquete A", price: "Gs. 4.500.000", type: "único" },
    { name: "Sistema interno – Paquete B", price: "Gs. 2.000.000", type: "único" },
    { name: "IA – Paquete C", price: "Gs. 450.000", type: "mensual" }
  ]
};

// Mock data for Solum Terra prototype page
export const solumTerraPrototype = {
  branding: {
    name: "Solum Terra",
    subtitle: "ARQUITECTURA",
    tagline: "CONSTRUYENDO FUTUROS"
  },
  projects: [
    {
      id: 1,
      title: "RESIDENCIA DOCTOR RIOS",
      category: "Residencial",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800"
    },
    {
      id: 2,
      title: "COMPLEJO HABITACIONAL IBIZA HAVEN",
      category: "Complejo Residencial",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800"
    },
    {
      id: 3,
      title: "TOWNHOUSE RESIDENCIAL LOGO",
      category: "Townhouse",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800"
    },
    {
      id: 4,
      title: "COMPLEJO LA VICTORIA",
      category: "Residencial",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800"
    }
  ],
  team: [
    {
      name: "Arq. Alejandro Salazar",
      role: "CHIEF EXECUTIVE OFFICER",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400"
    },
    {
      name: "Arq. Diego Tanasio",
      role: "CHIEF OPERATING OFFICER",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"
    },
    {
      name: "Robert Hermans",
      role: "INTERNATIONAL RELATIONS",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
    },
    {
      name: "Arq. Araceli Bogado",
      role: "DESIGN DIRECTOR",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400"
    }
  ],
  clients: [
    { name: "SUBARU", logo: "SUBARU" },
    { name: "SIT", logo: "SIT" },
    { name: "Partner", logo: "PARTNER" }
  ],
  contact: {
    phone: "(+595) 984 505733",
    email: "gerenciageneral@solumterra.com"
  },
  philosophy: "Esta combinación de pasión, dedicación y profesionalismo técnico nos permite trascender las expectativas. El resultado es un producto que no es simplemente 'funcional', sino la expresión tangible de tu visión original, construido con la calidad y precisión que solo un enfoque meticuloso puede ofrecer."
};