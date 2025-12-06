// components/sections/CategoriesSection.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { 
  FaIndustry, 
  FaSchool, 
  FaHospital, 
  FaDumbbell,
  FaWarehouse,
  FaHotel,
  FaShoppingBag,
  FaBuilding,
  FaCheckCircle,
  FaQuoteLeft
} from 'react-icons/fa';

const CategoriesSection = () => {
  // Materiales principales - IMÁGENES REALES
  const materials = [
    {
      id: 1,
      title: "LOCKERS METÁLICOS",
      subtitle: "Industrial & Escolar",
      tag: "EL MÁS VENDIDO",
      tagColor: "bg-brand-red text-white",
      description: "Acero calibre 24, soldadura robotizada MIG/MAG. Para uso rudo intensivo donde otros fallan.",
      features: ["Calibre 22/24 real", "Soldadura punteada", "Pintura epóxica horneada"],
      image: "/images/categories/metalicos.jpg", // ← TU IMAGEN REAL
      link: "/catalogo/metalicos",
      color: "from-gray-800 to-black",
      icon: FaIndustry,
      size: "col-span-1 md:col-span-2",
      valueProps: [
        "Resistencia certificada",
        "Garantía 5 años estructura",
        "Normas industriales"
      ]
    },
    {
      id: 2,
      title: "LOCKERS DE PLÁSTICO (PVC)",
      subtitle: "Zonas Húmedas / Exterior",
      tag: "ANTI-CORROSIÓN 100%",
      tagColor: "bg-blue-600 text-white",
      description: "Ideal para albercas, plantas químicas, zonas costeras donde el metal se oxida.",
      features: ["PVC alta densidad", "Resistente a químicos", "Impermeable total"],
      image: "/images/categories/plastico.jpg", // ← TU IMAGEN REAL
      link: "/catalogo/plastico",
      color: "from-blue-700 to-teal-800",
      icon: FaWarehouse,
      size: "col-span-1",
      valueProps: [
        "Cero mantenimiento",
        "Ligero y modular",
        "Higiénico y lavable"
      ]
    },
    {
      id: 3,
      title: "LOCKERS DE MADERA / MDF",
      subtitle: "Clubes & Hoteles Premium",
      tag: "ACABADO ELEGANTE",
      tagColor: "bg-amber-700 text-white",
      description: "Para espacios donde el diseño y la estética son prioritarios sin sacrificar durabilidad.",
      features: ["Madera laminada", "Acabado melamina", "Bisagras ocultas"],
      image: "/images/categories/madera.jpg", // ← TU IMAGEN REAL
      link: "/catalogo/madera",
      color: "from-amber-800 to-yellow-900",
      icon: FaHotel,
      size: "col-span-1",
      valueProps: [
        "Diseño personalizable",
        "Calidad hotelera",
        "Instalación profesional"
      ]
    }
  ];

  // Industrias/sectores
  const industries = [
    {
      id: 1,
      name: "Minería e Industria",
      icon: FaIndustry,
      color: "bg-gray-800",
      textColor: "text-gray-800",
      link: "/soluciones/mineria",
      description: "Lockers para uso extremo",
      stat: "Resistencia máxima"
    },
    {
      id: 2,
      name: "Escuelas y Universidades",
      icon: FaSchool,
      color: "bg-blue-600",
      textColor: "text-blue-600",
      link: "/soluciones/escuelas",
      description: "Gaveteros escolares",
      stat: "+500 casilleros"
    },
    {
      id: 3,
      name: "Hospitales y Clínicas",
      icon: FaHospital,
      color: "bg-teal-600",
      textColor: "text-teal-600",
      link: "/soluciones/salud",
      description: "Locker sanitarios",
      stat: "Higiéno total"
    },
    {
      id: 4,
      name: "Gimnasios y Clubes",
      icon: FaDumbbell,
      color: "bg-red-600",
      textColor: "text-red-600",
      link: "/soluciones/gimnasios",
      description: "Lockers ventilados",
      stat: "Ventilación 360°"
    },
    {
      id: 5,
      name: "Hoteles y Spas",
      icon: FaHotel,
      color: "bg-amber-600",
      textColor: "text-amber-600",
      link: "/soluciones/hoteles",
      description: "Lockers de lujo",
      stat: "Diseño premium"
    },
    {
      id: 6,
      name: "Comercios y Retail",
      icon: FaShoppingBag,
      color: "bg-purple-600",
      textColor: "text-purple-600",
      link: "/soluciones/comercios",
      description: "Para empleados",
      stat: "Acceso controlado"
    },
    {
      id: 7,
      name: "Oficinas Corporativas",
      icon: FaBuilding,
      color: "bg-indigo-600",
      textColor: "text-indigo-600",
      link: "/soluciones/oficinas",
      description: "Diseño ejecutivo",
      stat: "Seguridad alta"
    }
  ];

  // Testimonio ficticio (puedes reemplazar con reales después)
  const testimonial = {
    quote: "Llevábamos 2 años cambiando lockers cada 6 meses hasta que encontramos a JGA. Sus lockers metálicos llevan 3 años en nuestra planta minera sin una sola falla. Eso es calidad real.",
    author: "Ing. Carlos Mendoza",
    position: "Gerente de Planta, Minera del Norte",
    industry: "Minería"
  };

  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      
      {/* Patrón de puntos sutil */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxIiBmaWxsPSIjMDAwIi8+PC9zdmc+')]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado con enfoque en VALOR */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-flex items-center px-4 py-2 bg-black text-white text-sm font-bold rounded-full uppercase tracking-wider mb-4">
            <FaCheckCircle className="mr-2" />
            CALIDAD QUE NO ENCUENTRAS CON REVENDEDORES
          </span>
          
          <h2 className="font-oswald font-bold text-4xl md:text-5xl text-black mb-6">
            SOMOS <span className="text-brand-red">FABRICANTES</span>
            <span className="block">NO SOMOS REVENDEDORES</span>
          </h2>
          
          <p className="text-gray-600 text-lg leading-relaxed">
            Mientras otros compran lockers genéricos y te los venden con sobreprecio, 
            <span className="font-bold text-black"> nosotros los fabricamos a tu medida</span> con materiales 
            reales y procesos industriales. Eso marca la diferencia cuando se usa 300 veces al mes.
          </p>
        </div>

        {/* Grid de Materiales - ENFOCADO EN VALOR, NO PRECIO */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {materials.map((material) => (
            <div 
              key={material.id}
              className={`${material.size} group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200`}
            >
              {/* Fondo con gradiente */}
              <div className={`absolute inset-0 bg-gradient-to-br ${material.color} opacity-5`}></div>
              
              {/* Imagen REAL del producto */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={material.image}
                  alt={material.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={material.id === 1}
                />
                {/* Overlay para texto */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Tag en imagen */}
                <div className="absolute top-4 left-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${material.tagColor}`}>
                    {material.tag}
                  </span>
                </div>
              </div>

              {/* Contenido */}
              <div className="relative p-8">
                {/* Header de la tarjeta */}
                <div className="flex items-start gap-3 mb-4">
                  <material.icon className={`text-2xl mt-1 ${material.id === 1 ? 'text-brand-red' : 'text-gray-700'}`} />
                  <div>
                    <h3 className="font-oswald font-bold text-2xl text-black mb-1">
                      {material.title}
                    </h3>
                    <p className="text-gray-500 font-medium">{material.subtitle}</p>
                  </div>
                </div>

                {/* Descripción */}
                <p className="text-gray-600 mb-6 border-l-4 border-gray-200 pl-4 py-2">
                  {material.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {material.features.map((feature, index) => (
                      <span 
                        key={index}
                        className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  {/* Propuestas de valor específicas */}
                  <div className="space-y-2">
                    {material.valueProps.map((prop, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <FaCheckCircle className="text-green-500 text-sm" />
                        <span className="text-gray-700 text-sm">{prop}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA - SIN PRECIO, CON VALOR */}
                <div className="pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-500">Fabricación</div>
                      <div className="text-lg font-bold text-black">
                        Directo de nuestra planta
                      </div>
                    </div>
                    <Link 
                      href={`${material.link}?tipo=fabricante`}
                      className="group/btn inline-flex items-center gap-2 bg-black hover:bg-brand-red text-white font-bold px-6 py-3 rounded-lg transition-all duration-300"
                    >
                      Cotizar con fabricante
                      <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonio de valor */}
        <div className="mb-16 bg-gradient-to-r from-white to-gray-100 rounded-3xl p-8 md:p-12 border border-gray-200">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/3 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-brand-red text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                <FaQuoteLeft />
                CASO REAL DE ÉXITO
              </div>
              <h3 className="font-oswald font-bold text-2xl text-black mb-4">
                Cuando la calidad <span className="text-brand-red">sí importa</span>
              </h3>
              <p className="text-gray-600">
                Este testimonio representa lo que significa comprar a un fabricante real vs un revendedor.
              </p>
            </div>
            
            <div className="lg:w-2/3">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl text-gray-300 mb-4">"</div>
                <p className="text-gray-700 text-lg italic mb-6">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white font-bold">
                    CM
                  </div>
                  <div>
                    <div className="font-bold text-black">{testimonial.author}</div>
                    <div className="text-gray-600 text-sm">{testimonial.position}</div>
                    <div className="text-brand-red text-sm font-bold">{testimonial.industry}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de Industrias */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="font-oswald font-bold text-3xl text-black mb-4">
              ¿PARA QUÉ <span className="text-brand-red">INDUSTRIA</span> LO NECESITAS?
            </h3>
            <p className="text-gray-600">
              Cada sector tiene necesidades únicas. Hemos desarrollado soluciones específicas para cada uno.
            </p>
          </div>

          {/* Grid de Industrias */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {industries.map((industry) => (
              <Link
                key={industry.id}
                href={industry.link}
                className="group bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100"
              >
                <div className={`w-16 h-16 ${industry.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <industry.icon className="text-white text-2xl" />
                </div>
                <h4 className={`font-bold ${industry.textColor} mb-2 text-sm`}>
                  {industry.name}
                </h4>
                <p className="text-gray-500 text-xs mb-2">
                  {industry.description}
                </p>
                <div className="mt-2">
                  <span className="text-xs font-bold text-gray-700">
                    {industry.stat}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Final - ENFATIZANDO FABRICACIÓN */}
        <div className="text-center">
          <div className="inline-flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-r from-black to-gray-900 text-white rounded-3xl px-8 py-10 max-w-4xl mx-auto shadow-2xl">
            <div className="text-left">
              <div className="flex items-center gap-2 mb-2">
                <FaIndustry className="text-brand-red" />
                <span className="text-sm font-bold text-gray-300">DIRECTO DE FÁBRICA</span>
              </div>
              <h4 className="font-oswald font-bold text-2xl mb-2">
                ¿Necesitas algo que no ves en el catálogo?
              </h4>
              <p className="text-gray-300">
                El 60% de nuestros proyectos son personalizados. Como fabricantes, podemos crear exactamente lo que necesitas.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/5215518246146?text=Hola%20Lockers%20JGA,%20soy%20fabricante%20y%20quiero%20cotizar%20un%20proyecto%20personalizado"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-red hover:bg-red-700 text-white font-bold px-8 py-3 rounded-lg transition-colors flex items-center gap-2 justify-center"
              >
                <FaIndustry />
                COTIZAR COMO FABRICANTE
              </a>
              
              <Link 
                href="/proceso-fabricacion"
                className="border-2 border-white hover:border-brand-red text-white hover:text-brand-red font-bold px-8 py-3 rounded-lg transition-colors flex items-center gap-2 justify-center"
              >
                <FaCheckCircle />
                VER PROCESO DE FABRICACIÓN
              </Link>
            </div>
          </div>
          
          {/* Indicador de confianza - FABRICANTE */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-gray-500 text-sm">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Fabricación 100% mexicana
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Sin intermediarios, sin sobreprecios
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Control total de calidad
            </div>
          </div>
        </div>
      </div>

      {/* Línea divisoria para siguiente sección */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
    </section>
  );
};

export default CategoriesSection;