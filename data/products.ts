export interface Product {
  id: string;
  name: string;
  slug: string;
  category: "metalicos" | "plastico" | "madera" | "accesorios" | "bancas" | "tecnologia";
  sector: "industrial" | "escolar" | "oficina" | "hospital" | "gym" | "entretenimiento" | "retail";
  image: string;
  blueprintImage?: string;
  specs: string;
  description: string;
  isNew?: boolean;
  isBestSeller?: boolean;
  isHero?: boolean;
  features: string[];
  durabilityLevel: 1 | 2 | 3 | 4 | 5;
  construction: "soldado" | "remachado" | "ensamblado" | "carpinteria" | "hibrido" | "n/a";
  warranty: string;
  leadTime: string;
}

export const products: Product[] = [
  // ⭐⭐⭐ PRODUCTO HERO - MANTENER ORIGINAL (LVC PRO) ⭐⭐⭐
  {
    id: "lvc-pro",
    name: "LVC PRO - Sistema Modular Industrial",
    slug: "lvc-pro-modular-industrial",
    category: "metalicos",
    sector: "industrial",
image: "/images/products/lvc-pro-hero.jpg",
    blueprintImage: "/images/products/blueprint-lvc.jpg",
    specs: "Calibre 22 | Soldadura Robotizada | Sistema Anti-deformación",
    description: "EL ESTÁNDAR DE LA INDUSTRIA. Sistema modular diseñado para soportar las condiciones más extremas en minería, manufactura y logística. Estructura 100% soldada - cero remaches.",
    isBestSeller: true,
    isHero: true,
    isNew: true,
    features: [
      "Estructura monoblock soldada",
      "Refuerzos en ángulo interno",
      "Bisagras de 5mm con 3 puntos de anclaje",
      "Sistema de ventilación forzada"
    ],
    durabilityLevel: 5,
    construction: "soldado",
    warranty: "10 años estructural",
    leadTime: "15 días hábiles"
  },

  // ========================
  // LOCKERS METÁLICOS (DEL PDF)
  // ========================
  {
    id: "met-imss-sloptop",
    name: "Locker Hospitalario Slop-Top (Tipo IMSS)",
    slug: "locker-imss-sloptop-sanitario",
    category: "metalicos",
    sector: "hospital",
    image: "/images/products/imss-sloptop.jpg",
    blueprintImage: "/images/products/blueprint-sloptop.jpg",
    specs: "Techo Inclinado | Rejilla Acero Inox | No acumula polvo",
    description: "Diseño sanitario especial para hospitales IMSS. Techo inclinado (Slop-Top) que evita acumulación de polvo y bacterias. Rejillas y manijas en acero inoxidable.",
    isBestSeller: true,
    features: ["Normativa IMSS", "Acero Inoxidable", "Fácil limpieza", "Tubo colgador incluido"],
    durabilityLevel: 5,
    construction: "soldado",
    warranty: "5 años estructural",
    leadTime: "Entrega inmediata"
  },

  {
    id: "met-industrial-sin-remaches",
    name: "Locker Industrial Heavy Duty (Sin Remaches)",
    slug: "locker-industrial-sin-remaches",
    category: "metalicos",
    sector: "industrial",
    image: "/images/products/industrial-sin-remaches.jpg",
    blueprintImage: "/images/products/blueprint-sin-remaches.jpg",
    specs: "Marco Cal. 18 | Puerta Cal. 20 | Pintura Epóxica Horneada",
    description: "Estructura 100% soldada - SIN REMACHES que se aflojen. Fabricado para uso rudo en minas y plantas. Pintura epóxica resistente a químicos.",
    isNew: true,
    features: ["Cero remaches", "Pintura horneada 3 capas", "Ventilación reforzada", "Resistente a impactos"],
    durabilityLevel: 5,
    construction: "soldado",
    warranty: "10 años estructural",
    leadTime: "Stock disponible"
  },

  {
    id: "met-puerta-doble",
    name: "Locker Puerta Doble (Apertura ambos lados)",
    slug: "locker-puerta-doble-z",
    category: "metalicos",
    sector: "gym",
    image: "/images/products/puerta-doble.jpg",
    specs: "Diseño en Z | Optimización de espacio | Doble acceso",
    description: "Diseño inteligente en 'Z' o puerta doble para vestidores. Optimiza espacio sin sacrificar capacidad. Apertura cómoda desde ambos lados.",
    features: ["Ahorro de espacio", "Diseño ergonómico", "Barra colgadora", "Ideal para gimnasios"],
    durabilityLevel: 4,
    construction: "soldado",
    warranty: "5 años",
    leadTime: "Fabricación 5-7 días"
  },

  // ========================
  // LOCKERS PVC (DEL PDF)
  // ========================
  {
    id: "pvc-impermeable",
    name: "Locker PVC 100% Impermeable",
    slug: "locker-pvc-impermeable",
    category: "plastico",
    sector: "gym",
    image: "/images/products/pvc-impermeable.jpg",
    specs: "Plástico Ingeniería | Anti-Hongos | Anti-Fuego | No Guarda Olores",
    description: "La solución definitiva para zonas húmedas (albercas, costas, spas). No propaga fuego, no guarda olores, inmune a corrosión y hongos.",
    isBestSeller: true,
    features: ["100% lavable", "Cero óxido", "Resistente a temperaturas", "Personalizable colores"],
    durabilityLevel: 5,
    construction: "ensamblado",
    warranty: "Vida útil +20 años",
    leadTime: "Fabricación a medida"
  },

  {
    id: "pvc-ventana-acrilico",
    name: "Locker PVC con Ventana de Acrílico",
    slug: "locker-pvc-ventana-acrilico",
    category: "plastico",
    sector: "escolar",
    image: "/images/products/pvc-ventana.jpg",
    specs: "Ventana Transparente | Cuerpo PVC | Control visual",
    description: "Permite inspección del contenido sin abrir la puerta. Ventana de acrílico de alta resistencia. Ideal para escuelas y áreas de seguridad.",
    features: ["Control visual", "Elegante", "Seguro", "No guarda olores"],
    durabilityLevel: 4,
    construction: "ensamblado",
    warranty: "5 años",
    leadTime: "Sobre pedido"
  },

  {
    id: "pvc-2puertas",
    name: "Locker PVC 2 Puertas con Ventilación",
    slug: "locker-pvc-2puertas-ventilacion",
    category: "plastico",
    sector: "gym",
    image: "/images/products/pvc-2puertas.jpg",
    specs: "2 Puertas | Sistema ventilación | No guarda humedad",
    description: "Diseño de 2 puertas con arillo de ventilación integrado. Perfecto para vestidores donde se necesita aireación constante.",
    features: ["Ventilación 360°", "Fácil limpieza", "Elegante", "Varios colores"],
    durabilityLevel: 4,
    construction: "ensamblado",
    warranty: "5 años",
    leadTime: "Fabricación 7 días"
  },

  // ========================
  // LOCKERS MADERA/MDF (DEL PDF)
  // ========================
  {
    id: "mad-ejecutivo",
    name: "Locker Ejecutivo MDF / Melamina",
    slug: "locker-ejecutivo-mdf-melamina",
    category: "madera",
    sector: "gym",
    image: "/images/products/ejecutivo-melamina.jpg",
    specs: "MDF Chileno | Melamina Texturizada | Diseño Premium",
    description: "Acabados de lujo para vestidores ejecutivos y clubes deportivos premium. Fabricado sobre diseño en MDF con recubrimiento de melamina.",
    features: ["Diseño premium", "Medidas especiales", "Bisagras ocultas", "Resistente al agua"],
    durabilityLevel: 3,
    construction: "carpinteria",
    warranty: "1 año",
    leadTime: "Fabricación 10 días"
  },

  // ========================
  // BANCAS (DEL PDF)
  // ========================
  {
    id: "banca-pvc-metal",
    name: "Banca de Vestidor (PVC o Metal)",
    slug: "banca-vestidor-pvc-metal",
    category: "bancas",
    sector: "gym",
    image: "/images/products/banca-vestidor.jpg",
    specs: "Largo a medida | Anti-humedad | Varios colores",
    description: "Bancas resistentes a la humedad y uso continuo. Disponible en estructura metálica o 100% plástico para zonas mojadas.",
    features: ["Ergonómica", "Lavable", "Colores variados", "Resistente"],
    durabilityLevel: 5,
    construction: "hibrido",
    warranty: "3 años",
    leadTime: "Fabricación 3 días"
  },

  // ========================
  // MÓDULOS CELULARES (DEL PDF)
  // ========================
  {
    id: "modulo-celulares",
    name: "Módulo de Celulares (10-50 Puertas)",
    slug: "modulo-celulares-seguridad",
    category: "metalicos",
    sector: "oficina",
    image: "/images/products/modulo-celulares.jpg",
    specs: "10 a 50 Puertas | Chapa individual | Alta seguridad",
    description: "Gabinetes de alta densidad para resguardo de dispositivos móviles. Indispensable para áreas restringidas o zonas de producción.",
    features: ["Alta seguridad", "Compacto", "Control de activos", "Ideal para fábricas"],
    durabilityLevel: 3,
    construction: "soldado",
    warranty: "3 años",
    leadTime: "Stock limitado"
  },

  // ========================
  // TECNOLOGÍA Y CERRADURAS (DEL PDF)
  // ========================
  {
    id: "cerradura-ojmar",
    name: "Cerradura Inteligente OJMAR",
    slug: "cerradura-inteligente-ojmar",
    category: "tecnologia",
    sector: "gym",
    image: "/images/products/cerradura-ojmar.jpg",
    specs: "Teclado Touch | App móvil | Colores Plata/Negro",
    description: "Cerradura de lujo con teclado Touch. Se gestiona mediante aplicación móvil. Estándar de oro para clubes premium y oficinas ejecutivas.",
    features: ["Keyless", "Gestión por app", "Diseño lujo", "Seguridad máxima"],
    durabilityLevel: 5,
    construction: "n/a",
    warranty: "Garantía fabricante",
    leadTime: "Accesorio - inmediato"
  },

  {
    id: "cerradura-moneda",
    name: "Cerradura de Moneda (Retornable/Alcancía)",
    slug: "cerradura-moneda-5-pesos",
    category: "tecnologia",
    sector: "industrial",
    image: "/images/products/cerradura-moneda.jpg",
    specs: "Moneda $5 MXN | Mecánica robusta | Versión retornable o alcancía",
    description: "Mecanismo robusto que acepta monedas de $5 MXN. Disponible en versión retornable (para visitas) o alcancía (cobro de uso).",
    features: ["Autogestión", "Ingresos extra", "Uso público", "Fácil instalación"],
    durabilityLevel: 4,
    construction: "n/a",
    warranty: "1 año",
    leadTime: "Accesorio - 2 días"
  },

  {
    id: "cerradura-combinacion",
    name: "Cerradura de Combinación 4 Dígitos",
    slug: "cerradura-combinacion-4-digitos",
    category: "tecnologia",
    sector: "escolar",
    image: "/images/products/cerradura-combinacion.jpg",
    specs: "4 dígitos | Fácil instalación | Se adapta a todos",
    description: "Chapa de combinación de 4 dígitos. De fácil instalación y se adapta a todos los lockers. Precio accesible con máxima seguridad.",
    features: ["Sin llaves", "Reconfigurable", "Segura", "Económica"],
    durabilityLevel: 3,
    construction: "n/a",
    warranty: "1 año",
    leadTime: "Inmediato"
  },

  {
    id: "cerradura-llave",
    name: "Cerradura de Llave Nacional",
    slug: "cerradura-llave-nacional",
    category: "tecnologia",
    sector: "escolar",
    image: "/images/products/cerradura-llave.jpg",
    specs: "Llave nacional | Fácil instalación | Excelente seguridad",
    description: "Cerradura de llave estándar nacional. De fácil instalación, precio accesible y excelente seguridad para uso escolar o industrial.",
    features: ["Llave estándar", "Económica", "Fácil mantenimiento", "Disponible"],
    durabilityLevel: 3,
    construction: "n/a",
    warranty: "1 año",
    leadTime: "Inmediato"
  },

  {
    id: "master-lock",
    name: "Sistema de Seguridad MASTER LOCK",
    slug: "sistema-master-lock",
    category: "tecnologia",
    sector: "industrial",
    image: "/images/products/master-lock.jpg",
    specs: "Candado combinación perilla | Con llave | 4 dígitos",
    description: "Sistemas de seguridad profesional MASTER LOCK. Candados de combinación en perilla, con llave y 4 dígitos.",
    features: ["Marca reconocida", "Alta seguridad", "Resistente", "Garantía internacional"],
    durabilityLevel: 5,
    construction: "n/a",
    warranty: "Garantía Master Lock",
    leadTime: "Stock disponible"
  },

  // ========================
  // ACCESORIOS (MANTENER ORIGINAL)
  // ========================
  {
    id: "acc-1",
    name: "Kit de Instalación Profesional",
    slug: "kit-instalacion-profesional",
    category: "accesorios",
    sector: "industrial",
    image: "/images/products/kit-instalacion.jpg",
    specs: "Incluye anclas, tornillería, nivel",
    description: "Kit completo para instalación profesional de lockers en cualquier superficie.",
    features: ["Anclas expansivas", "Todos los tornillos", "Nivel profesional"],
    durabilityLevel: 5,
    construction: "soldado",
    warranty: "Garantía de por vida",
    leadTime: "Inmediato"
  },
];

// ========================
// FILTROS NARRATIVOS (ACTUALIZADOS CON PDF)
// ========================
export const narrativeFilters = [
  {
    id: "humidity",
    icon: "💧",
    label: "Hay mucha humedad/agua",
    description: "Lockers PVC 100% impermeables",
    filters: { category: ["plastico"] }
  },
  {
    id: "sanitario",
    icon: "🏥",
    label: "Necesito normativa hospitalaria",
    description: "Slop-Top para IMSS y clínicas",
    filters: { name: "hospitalario" }
  },
  {
    id: "impact",
    icon: "🔨",
    label: "Los van a golpear duro",
    description: "Calibre 18/20 - Sin remaches",
    filters: { category: ["metalicos"], durabilityLevel: [4, 5] }
  },
  {
    id: "celulares",
    icon: "📱",
    label: "Control de celulares en área",
    description: "Módulos de 10-50 puertas",
    filters: { name: "celulares" }
  },
  {
    id: "tech",
    icon: "🔐",
    label: "Tecnología avanzada",
    description: "Cerraduras Ojmar y digitales",
    filters: { category: ["tecnologia"] }
  },
  {
    id: "bancas",
    icon: "🪑",
    label: "Necesito bancas de vestidor",
    description: "PVC o metal para gimnasios",
    filters: { category: ["bancas"] }
  }
];

// ========================
// CATEGORÍAS (ACTUALIZADAS CON PDF)
// ========================
export const categories = [
  { id: "metalicos", label: "Metálicos", count: 4 },
  { id: "plastico", label: "Plástico (PVC)", count: 3 },
  { id: "madera", label: "Madera/MDF", count: 1 },
  { id: "bancas", label: "Bancas", count: 1 },
  { id: "tecnologia", label: "Cerraduras/Tech", count: 5 },
  { id: "accesorios", label: "Accesorios", count: 1 }
];

// ========================
// SECTORES (ACTUALIZADOS CON PDF)
// ========================
export const sectors = [
  { id: "industrial", label: "Industrial/Minería", count: 5 },
  { id: "hospital", label: "Hospital/IMSS", count: 1 },
  { id: "escolar", label: "Escolar/Universitario", count: 3 },
  { id: "gym", label: "Gimnasio/Club", count: 5 },
  { id: "oficina", label: "Oficina/Fábrica", count: 3 },
  { id: "retail", label: "Retail/Hoteles", count: 1 }
];

// ========================
// ICONOS POR SECTOR
// ========================
export const getSectorIcon = (sectorId: string) => {
  switch (sectorId) {
    case 'industrial': return '🏭';
    case 'hospital': return '🏥';
    case 'escolar': return '🎓';
    case 'gym': return '💪';
    case 'oficina': return '🏢';
    case 'retail': return '🏪';
    case 'entretenimiento': return '🎬';
    default: return '🏭';
  }
};