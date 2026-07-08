import { ServiceItem, PrincipleItem, ScenarioItem, ProcessStep } from './types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    name: "Redes",
    subtitle: "Infraestructura diseñada para ofrecer estabilidad y crecimiento.",
    description: "Conectividad robusta e imperceptible que sostiene toda la operación en sus espacios.",
    iconName: "Network",
    items: [
      "Señal de alta fidelidad que cubre cada rincón sin interrupciones.",
      "Canalización impecable diseñada para soportar el crecimiento futuro.",
      "Conectividad silenciosa administrada para una operación fluida.",
      "Enlaces de alta velocidad que garantizan continuidad absoluta."
    ]
  },
  {
    name: "Seguridad",
    subtitle: "Tecnología que protege sin interrumpir.",
    description: "Sistemas inteligentes de monitoreo y protección diseñados para resguardar con sutileza.",
    iconName: "ShieldCheck",
    items: [
      "Lentes de alta resolución integrados de manera imperceptible en los muros.",
      "Flujos de acceso seguros que respetan la estética del acceso principal.",
      "Sensores de alta precisión discretos que resguardan la privacidad.",
      "Monitoreo inteligente para una tranquilidad constante."
    ]
  },
  {
    name: "Comunicación",
    subtitle: "Conectividad pensada para equipos modernos.",
    description: "Enlaces de voz y video unificados que simplifican el contacto y optimizan flujos.",
    iconName: "PhoneCall",
    items: [
      "Telefonía unificada de alta gama que simplifica el contacto humano.",
      "Enlaces de voz diseñados con nitidez y simplicidad de operación.",
      "Interfaces elegantes que reciben al visitante con distinción.",
      "Canales directos para una comunicación ágil y sin esfuerzo."
    ]
  },
  {
    name: "Audio y Video",
    subtitle: "Experiencias audiovisuales integradas con precisión.",
    description: "Espacios inmersivos de colaboración y ambientación acústica diseñados con precisión.",
    iconName: "Volume2",
    items: [
      "Diseñamos espacios donde el sonido acompaña la experiencia sin convertirse en una distracción.",
      "Paneles visuales calibrados con precisión milimétrica para cada ambiente.",
      "Sistemas de proyección y visualización integrados de manera limpia.",
      "Salas de reuniones equipadas con audio e imagen de alta definición."
    ]
  },
  {
    name: "Infraestructura",
    subtitle: "La base que mantiene todo funcionando.",
    description: "El motor silencioso que procesa, respalda y garantiza la continuidad del entorno.",
    iconName: "Server",
    items: [
      "Sistemas de procesamiento silenciosos y redundantes.",
      "Almacenamiento híbrido diseñado para una seguridad de datos total.",
      "Copias de seguridad automatizadas de nivel empresarial.",
      "Servidores virtuales optimizados de alta disponibilidad."
    ]
  },
  {
    name: "Soporte",
    subtitle: "Acompañamiento continuo cuando más lo necesitas.",
    description: "Acompañamiento constante y proactivo para asegurar que todo funcione sin interrupciones.",
    iconName: "LifeBuoy",
    items: [
      "Prevención y mantenimiento continuo con un enfoque proactivo.",
      "Diagnóstico inmediato y silencioso ante cualquier eventualidad.",
      "Asistencia técnica especializada disponible con un solo toque.",
      "Un equipo de ingeniería siempre a su entera disposición."
    ]
  }
];

export const PRINCIPLES_DATA: PrincipleItem[] = [
  {
    title: "Diseñamos antes de instalar.",
    description: "No creemos en la improvisación. Cada cable, dispositivo e interfaz se planea detalladamente en planos digitales antes de colocar el primer tornillo en su espacio."
  },
  {
    title: "Cada proyecto es único.",
    description: "No aplicamos plantillas genéricas. Analizamos la arquitectura, los materiales, la iluminación y las dinámicas humanas del espacio para crear una solución a la medida."
  },
  {
    title: "La tecnología debe adaptarse al espacio.",
    description: "No al revés. Buscamos que los equipos se integren armónicamente con la arquitectura, ocultando lo innecesario para preservar la pureza visual de sus interiores."
  },
  {
    title: "El orden también es parte de la ingeniería.",
    description: "Un rack perfectamente peinado y etiquetado no es solo por estética; es la garantía de un mantenimiento eficiente, mayor vida útil y un diagnóstico inmediato."
  },
  {
    title: "Buscamos soluciones duraderas.",
    description: "Seleccionamos componentes de estándar industrial que soporten el paso del tiempo, configurados bajo protocolos estándar que eviten la obsolescencia temprana."
  },
  {
    title: "La tranquilidad también se diseña.",
    description: "Configuramos sistemas redundantes y sistemas de alimentación de respaldo para que la tecnología simplemente funcione, incluso ante fallas de energía o proveedor."
  }
];

export const SCENARIOS_DATA: ScenarioItem[] = [
  {
    title: "Oficinas",
    description: "Espacios de alto rendimiento donde la conectividad ágil estimula la colaboración.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200",
    details: ["Sistemas WiFi integrales sin zonas muertas", "Respaldo energético y almacenamiento centralizado", "Salas de juntas listas para conferencias con un solo toque"]
  },
  {
    title: "Casas Inteligentes",
    description: "Residencias contemporáneas donde el confort y la tecnología conviven en equilibrio silencioso.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
    details: ["Cámaras de vigilancia discretas de alta resolución", "Control de acceso invisible", "Audio de alta fidelidad distribuido", "Redes robustas ocultas en la arquitectura"]
  },
  {
    title: "Restaurantes",
    description: "Atmósferas sensoriales cuidadas para complementar la experiencia gastronómica.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200",
    details: ["Audio ambiental uniforme y cálido", "Puntos de cobro inalámbricos de alta disponibilidad", "CCTV de seguridad discreto en accesos"]
  },
  {
    title: "Consultorios",
    description: "Privacidad, orden y ambientes tranquilos para el cuidado de los pacientes.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200",
    details: ["Redes seguras que cumplen normativas de privacidad", "Intercomunicación instantánea y discreta", "Audio ambiental relajante calibrado a bajo volumen"]
  },
  {
    title: "Clubes Deportivos",
    description: "Sistemas de alta durabilidad preparados para resistir y cubrir grandes superficies.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200",
    details: ["CCTV perimetral de largo alcance", "Audio distribuido resistente a la intemperie", "Control de acceso rápido para socios"]
  }
];

export const PROCESS_DATA: ProcessStep[] = [
  {
    phase: "01",
    title: "Descubrimos",
    description: "Escuchamos sus necesidades, analizamos el plano del lugar y comprendemos la visión arquitectónica y funcional del espacio."
  },
  {
    phase: "02",
    title: "Diseñamos",
    description: "Creamos la ingeniería de detalle: planos de canalización, diagramas de conexión, simulación de cobertura WiFi y selección de componentes."
  },
  {
    phase: "03",
    title: "Integramos",
    description: "Realizamos la instalación física con rigurosa limpieza y precisión. Fijaciones impecables, cables peinados y canalización oculta."
  },
  {
    phase: "04",
    title: "Configuramos",
    description: "Programamos cada dispositivo bajo estándares estrictos de seguridad, optimizando anchos de banda, direccionamiento IP y niveles acústicos."
  },
  {
    phase: "05",
    title: "Documentamos",
    description: "Entregamos un dossier digital completo: planos finales 'As-Built', diagrama del rack, contraseñas seguras y guías rápidas de operación."
  },
  {
    phase: "06",
    title: "Acompañamos",
    description: "Brindamos soporte post-entrega continuo, monitoreo remoto y pólizas de mantenimiento preventivo para que nunca deba preocuparse."
  }
];
