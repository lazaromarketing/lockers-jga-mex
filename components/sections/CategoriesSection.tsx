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
  FaQuoteLeft,
  FaWhatsapp,
  FaFilePdf
} from 'react-icons/fa';

const CategoriesSection = () => {
  
  // DATOS DE PRODUCTOS (Optimizados para SEO y Ventas)
  const materials = [
    {
      id: 1,
      title: "LOCKERS METÁLICOS",
      subtitle: "1 a 5 Puertas | Uso Rudo",
      tag: "MÁS VENDIDO",
      tagColor: "bg-brand-red text-white",
      description: "Acero calibre 24 con soldadura robotizada. La opción #1 para empresas y escuelas que buscan durabilidad extrema.",
      features: ["Acero C-24 Real", "Pintura Epóxica", "Soldadura MIG"],
      image: "/images/categories/metalicos.jpg", 
      color: "from-gray-800 to-black",
      icon: FaIndustry,
      size: "col-span-1 md:col-span-2",
      valueProps: ["Garantía 5 años", "Refacciones inmediatas", "Norma Industrial"],
      // Mensaje para Cotizar
      waCotizar: "Hola%20JGA,%20me%20interesan%20los%20LOCKERS%20METÁLICOS%20(1-5%20puertas).%20¿Me%20pueden%20cotizar?",
      // Mensaje para Ficha Técnica
      waFicha: "Hola%20JGA,%20solicito%20la%20FICHA%20TÉCNICA%20PDF%20de%20los%20Lockers%20Metálicos."
    },
    {
      id: 2,
      title: "LOCKERS DE PLÁSTICO (PVC)",
      subtitle: "100% Inoxidable | Zonas Húmedas",
      tag: "ANTI-CORROSIÓN",
      tagColor: "bg-blue-600 text-white",
      description: "Diseñados para playa, albercas y laboratorios. El PVC de alta densidad nunca se oxida y es lavable a chorro de agua.",
      features: ["PVC 16mm Sólido", "Anti-Hongos", "Lavable"],
      image: "/images/categories/plastico.jpg", 
      color: "from-blue-700 to-teal-800",
      icon: FaWarehouse,
      size: "col-span-1",
      valueProps: ["Ideal Hoteles Playa", "Certificado Aséptico", "Vida útil +20 años"],
      waCotizar: "Hola%20JGA,%20me%20interesan%20los%20LOCKERS%20DE%20PVC%20(Plástico).%20¿Me%20pueden%20cotizar?",
      waFicha: "Hola%20JGA,%20solicito%20la%20FICHA%20TÉCNICA%20PDF%20de%20los%20Lockers%20de%20PVC."
    },
    {
      id: 3,
      title: "LOCKERS DE MADERA / MDF",
      subtitle: "Línea Executive | Clubs & Spas",
      tag: "DISEÑO PREMIUM",
      tagColor: "bg-amber-700 text-white",
      description: "Elegancia para vestidores exclusivos. Acabados en melamina texturizada con resistencia industrial interna.",
      features: ["Melamina Texturizada", "Bisagra Oculta", "Cerradura Digital"],
      image: "/images/categories/madera.jpg", 
      color: "from-amber-800 to-yellow-900",
      icon: FaHotel,
      size: "col-span-1",
      valueProps: ["Apariencia de Lujo", "Personalizable", "Instalación Incluida"],
      waCotizar: "Hola%20JGA,%20busco%20LOCKERS%20DE%20MADERA%20para%20un%20proyecto%20ejecutivo.%20¿Me%20pueden%20contactar?",
      waFicha: "Hola%20JGA,%20solicito%20la%20FICHA%20TÉCNICA%20PDF%20de%20los%20Lockers%20de%20Madera."
    }
  ];

  // Industrias (SEO Interno)
  const industries = [
    { id: 1, name: "Minería e Industria", icon: FaIndustry, color: "bg-gray-800", textColor: "text-gray-800", link: "/catalogo?industria=mineria", description: "Uso Extremo" },
    { id: 2, name: "Escuelas y Universidades", icon: FaSchool, color: "bg-blue-600", textColor: "text-blue-600", link: "/catalogo?industria=educacion", description: "Anti-Vandalismo" },
    { id: 3, name: "Hospitales (SSA)", icon: FaHospital, color: "bg-teal-600", textColor: "text-teal-600", link: "/catalogo?industria=salud", description: "Asépticos" },
    { id: 4, name: "Gimnasios y Clubes", icon: FaDumbbell, color: "bg-red-600", textColor: "text-red-600", link: "/catalogo?industria=deportes", description: "Ventilados" },
    { id: 5, name: "Hoteles de Playa", icon: FaHotel, color: "bg-amber-600", textColor: "text-amber-600", link: "/catalogo?industria=hoteles", description: "Inoxidables" },
    { id: 6, name: "Retail y Comercios", icon: FaShoppingBag, color: "bg-purple-600", textColor: "text-purple-600", link: "/catalogo?industria=comercios", description: "Paquetería" },
    { id: 7, name: "Oficinas Corporativas", icon: FaBuilding, color: "bg-indigo-600", textColor: "text-indigo-600", link: "/catalogo?industria=oficinas", description: "Ejecutivos" }
  ];

  // Testimonio
  const testimonial = {
    quote: "Llevábamos años batallando con lockers chinos que se doblaban. Los de JGA son tanques de guerra. Llevan 3 años en la planta y siguen como nuevos.",
    author: "Ing. Roberto M.",
    position: "Jefe de Compras, Planta Automotriz Bajío",
    industry: "Sector Automotriz"
  };

  // Función original restaurada
  const handleProcessClick = () => {
    if (window.confirm("🎬 ¡Pronto tendremos un video exclusivo de nuestro proceso industrial!\n\n¿Te gustaría visitar nuestra sección 'Nosotros' para ver fotos reales de nuestra planta?")) {
      window.location.href = "/nosotros";
    }
  };

  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden" id="catalogo-destacado">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxIiBmaWxsPSIjMDAwIi8+PC9zdmc+')]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER SEO */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-flex items-center px-4 py-2 bg-black text-white text-sm font-bold rounded-full uppercase tracking-wider mb-4 shadow-lg">
            <FaCheckCircle className="mr-2 text-brand-red" />
            CATÁLOGO DIRECTO DE FÁBRICA
          </span>
          <h2 className="font-oswald font-bold text-4xl md:text-5xl text-black mb-6">
            TIPOS DE <span className="text-brand-red">LOCKERS JGA</span>
            <span className="block text-gray-500 text-2xl md:text-3xl mt-2">METAL, PLÁSTICO Y MADERA</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Fabricamos desde un casillero individual hasta proyectos completos. 
            Elige el material ideal para tu clima y uso.
          </p>
        </div>

        {/* GRID DE MATERIALES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {materials.map((material) => (
            <div 
              key={material.id}
              className={`${material.size} group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200 flex flex-col`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${material.color} opacity-5`}></div>
              
              {/* Imagen con SEO ALT */}
              <div className="relative h-64 overflow-hidden shrink-0">
                <Image
                  src={material.image}
                  alt={`Venta de ${material.title} en México`} 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold shadow-md ${material.tagColor}`}>
                    {material.tag}
                  </span>
                </div>
              </div>

              {/* Contenido */}
              <div className="relative p-8 flex flex-col flex-grow">
                <div className="flex items-start gap-3 mb-4">
                  <material.icon className={`text-3xl mt-1 ${material.id === 1 ? 'text-brand-red' : 'text-gray-700'}`} />
                  <div>
                    <h3 className="font-oswald font-bold text-2xl text-black mb-1 uppercase leading-none">
                      {material.title}
                    </h3>
                    <p className="text-gray-500 font-medium text-sm">{material.subtitle}</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 border-l-4 border-gray-200 pl-4 py-2 text-sm leading-relaxed flex-grow">
                  {material.description}
                </p>

                <div className="mb-6 space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {material.features.map((feature, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-bold rounded uppercase">
                        {feature}
                      </span>
                    ))}
                  </div>
                  {material.valueProps.map((prop, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-500 text-sm" />
                      <span className="text-gray-700 text-sm font-medium">{prop}</span>
                    </div>
                  ))}
                </div>

                {/* BOTONES DE ACCIÓN (Corregidos) */}
                <div className="pt-6 border-t border-gray-100 mt-auto">
                  <div className="flex flex-col gap-3">
                    <a 
                      href={`https://wa.me/525518246146?text=${material.waCotizar}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-3 rounded-xl transition-all shadow-lg shadow-green-200"
                    >
                      <FaWhatsapp className="text-xl" />
                      Cotizar por WhatsApp
                    </a>
                    
                    {/* Botón FICHA TÉCNICA -> Ahora va a WhatsApp */}
                    <a 
                      href={`https://wa.me/525518246146?text=${material.waFicha}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-200 hover:border-black text-black font-bold px-4 py-3 rounded-xl transition-all hover:bg-gray-50 cursor-pointer"
                    >
                      <FaFilePdf className="text-red-500" /> Solicitar Ficha Técnica
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* TESTIMONIO (Social Proof) */}
        <div className="mb-16 bg-gradient-to-r from-gray-900 to-black rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red opacity-10 rounded-full blur-3xl"></div>
          
          <div className="flex flex-col lg:flex-row items-center gap-10 relative z-10">
            <div className="lg:w-1/3 text-center lg:text-left">
              <span className="text-brand-red font-bold tracking-widest uppercase text-xs mb-2 block">
                Opinión de Clientes
              </span>
              <h3 className="font-oswald font-bold text-3xl mb-4">
                CASOS DE ÉXITO
              </h3>
              <p className="text-gray-400 text-sm">
                Este testimonio representa la diferencia entre comprar a un fabricante real vs un revendedor.
              </p>
            </div>
            
            <div className="lg:w-2/3">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                <FaQuoteLeft className="text-brand-red text-4xl mb-4 opacity-50" />
                <p className="text-xl italic font-light mb-6 text-gray-200">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4 border-t border-white/10 pt-4">
                  <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center font-bold text-white text-sm">
                    RM
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">{testimonial.author}</div>
                    <div className="text-gray-400 text-xs">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* INDUSTRIAS (Link Juice) */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="font-oswald font-bold text-3xl text-black mb-2 uppercase">
              Soluciones por <span className="text-brand-red">Industria</span>
            </h3>
            <p className="text-gray-500 text-sm">Encuentra el modelo exacto para tu sector.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {industries.map((industry) => (
              <Link
                key={industry.id}
                href={industry.link}
                className="group bg-white rounded-xl p-4 text-center shadow hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col items-center h-full justify-center"
              >
                <div className={`w-12 h-12 ${industry.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-inner`}>
                  <industry.icon className="text-white text-xl" />
                </div>
                <h4 className={`font-bold ${industry.textColor} mb-1 text-xs uppercase leading-tight`}>
                  {industry.name}
                </h4>
                <p className="text-gray-400 text-[10px] uppercase tracking-wide">
                  {industry.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA FINAL - RESTAURADO (FABRICANTE) */}
        <div className="text-center">
          <div className="inline-flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-r from-black to-gray-900 text-white rounded-3xl px-8 py-10 max-w-4xl mx-auto shadow-2xl">
            <div className="text-left">
              <div className="flex items-center gap-2 mb-2">
                <FaIndustry className="text-brand-red" />
                <span className="text-sm font-bold text-gray-300">DIRECTO DE FÁBRICA</span>
              </div>
              <h4 className="font-oswald font-bold text-2xl mb-2">
                ¿Eres Distribuidor o Fabricante?
              </h4>
              <p className="text-gray-300 text-sm">
                El 60% de nuestros proyectos son personalizados. Podemos fabricar tu marca blanca o maquilar a medida.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/525518246146?text=Hola%20JGA%20México,%20soy%20fabricante/distribuidor%20y%20quiero%20cotizar%20un%20proyecto%20de%20maquila."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-red hover:bg-red-700 text-white font-bold px-8 py-3 rounded-lg transition-colors flex items-center gap-2 justify-center shadow-lg whitespace-nowrap"
              >
                <FaIndustry />
                COTIZAR MAQUILA
              </a>
              
              <button 
                onClick={handleProcessClick}
                className="border-2 border-white hover:border-brand-red text-white hover:text-brand-red font-bold px-8 py-3 rounded-lg transition-colors flex items-center gap-2 justify-center whitespace-nowrap"
              >
                <FaCheckCircle />
                VER PROCESO
              </button>
            </div>
          </div>
          
          {/* Trust Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-gray-500 text-sm">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Fabricación 100% mexicana
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Sin intermediarios
            </div>
          </div>
        </div>

      </div>
      
      {/* Línea divisoria */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
    </section>
  );
};

export default CategoriesSection;