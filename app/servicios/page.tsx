import { Metadata } from 'next'; // Importante para SEO
import Image from 'next/image';
import { FaRulerCombined, FaHardHat, FaTruck, FaTools, FaHospital, FaIndustry, FaSchool, FaWarehouse, FaCheckCircle } from 'react-icons/fa';
import { MdPhone, MdEmail, MdLocationOn } from 'react-icons/md';

// 1. METADATOS SEO PODEROSOS
export const metadata: Metadata = {
  title: 'Servicios de Ingeniería y Mantenimiento de Lockers | JGA México',
  description: 'Expertos en diseño, instalación y mantenimiento de lockers industriales y de PVC. Proyectos llave en mano para escuelas, gimnasios y plantas en todo México.',
  keywords: ['mantenimiento lockers', 'instalacion de lockers', 'fabricacion lockers a medida', 'reparacion de lockers', 'proyectos lockers mexico'],
};

export default function ServiciosPage() {
  
  // 2. HACK SEO: SCHEMA MARKUP PARA SERVICIOS
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Instalación y Mantenimiento de Lockers",
    "provider": {
      "@type": "Organization",
      "name": "Lockers JGA México"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Mexico"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios Industriales",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Diseño de Vestidores Industriales" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mantenimiento Preventivo de Lockers" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Instalación de Lockers a Nivel Nacional" } }
      ]
    }
  };

  return (
    <main className="min-h-screen">
      {/* Inyección de Schema SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* SECCIÓN 1: HERO TÉCNICO */}
      <section className="relative bg-brand-black text-white py-20 md:py-32 overflow-hidden">
        <Image
          src="/images/servicios/blueprint-background.jpg" // Asegúrate que esta imagen exista
          alt="Ingeniería y Diseño de Lockers Industriales JGA"
          fill
          className="object-cover opacity-10"
          priority
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="w-16 h-1 bg-brand-red mr-4"></div>
              <span className="font-oswald uppercase tracking-widest text-brand-red text-sm font-bold">
                SOLUCIONES INTEGRALES JGA
              </span>
              <div className="w-16 h-1 bg-brand-red ml-4"></div>
            </div>
            
            <h1 className="font-oswald text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight uppercase">
              Ingeniería de Espacios <br />
              <span className="text-brand-red">& Mantenimiento</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-light">
              Más que fabricantes, somos tus socios de ingeniería. Diseñamos, instalamos y damos mantenimiento a proyectos de lockers en todo México.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/5215518246146?text=Hola%20JGA,%20necesito%20cotizar%20un%20proyecto%20de%20instalación/mantenimiento."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-red hover:bg-red-700 text-white font-bold py-4 px-8 rounded-none text-lg uppercase tracking-wider transition-all duration-300 transform hover:scale-105 font-oswald shadow-lg shadow-red-900/50"
              >
                Cotizar Proyecto
              </a>
              <a 
                href="#especialidades"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-brand-black text-white font-bold py-4 px-8 rounded-none text-lg uppercase tracking-wider transition-all duration-300 font-oswald"
              >
                Ver Servicios
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: 4 PILARES DE SERVICIO (SEO Optimizado) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-6 text-brand-black uppercase">
              Servicio <span className="text-brand-red">Llave en Mano</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nos encargamos de todo el ciclo de vida de tu proyecto de lockers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Pilar 1 */}
            <div className="group p-6 border-2 border-gray-100 hover:border-brand-red transition-all duration-300 hover:shadow-xl bg-white">
              <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                <FaRulerCombined className="text-3xl text-brand-red group-hover:text-white" />
              </div>
              <h3 className="font-oswald text-2xl font-bold mb-4 text-brand-black">
                Diseño a Medida
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                Adaptamos medidas, colores RAL y configuraciones internas. Si tu espacio es irregular, fabricamos el locker exacto que necesitas.
              </p>
              <ul className="text-xs font-bold text-gray-500 space-y-2">
                <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500"/> Planos CAD/3D</li>
                <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500"/> Colores Corporativos</li>
              </ul>
            </div>

            {/* Pilar 2 */}
            <div className="group p-6 border-2 border-gray-100 hover:border-brand-red transition-all duration-300 hover:shadow-xl bg-white">
              <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                <FaHardHat className="text-3xl text-brand-red group-hover:text-white" />
              </div>
              <h3 className="font-oswald text-2xl font-bold mb-4 text-brand-black">
                Ingeniería Civil
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                Optimizamos el flujo de personal en vestidores industriales. Calculamos capacidades y rutas de evacuación.
              </p>
              <ul className="text-xs font-bold text-gray-500 space-y-2">
                <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500"/> Análisis de Flujo</li>
                <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500"/> Normativa STPS</li>
              </ul>
            </div>

            {/* Pilar 3 */}
            <div className="group p-6 border-2 border-gray-100 hover:border-brand-red transition-all duration-300 hover:shadow-xl bg-white">
              <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                <FaTruck className="text-3xl text-brand-red group-hover:text-white" />
              </div>
              <h3 className="font-oswald text-2xl font-bold mb-4 text-brand-black">
                Instalación Nacional
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                Cuadrillas propias en CDMX y red de instaladores certificados en toda la República. Nivelación y anclaje profesional.
              </p>
              <ul className="text-xs font-bold text-gray-500 space-y-2">
                <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500"/> Anclaje Sísmico</li>
                <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500"/> Entrega Llave en Mano</li>
              </ul>
            </div>

            {/* Pilar 4 */}
            <div className="group p-6 border-2 border-gray-100 hover:border-brand-red transition-all duration-300 hover:shadow-xl bg-white">
              <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                <FaTools className="text-3xl text-brand-red group-hover:text-white" />
              </div>
              <h3 className="font-oswald text-2xl font-bold mb-4 text-brand-black">
                Mantenimiento y Reparación
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                Extendemos la vida de tus activos. Servicio de reparación de puertas, cambio de chapas y pintura electrostática en sitio.
              </p>
              <ul className="text-xs font-bold text-gray-500 space-y-2">
                <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500"/> Refacciones Originales</li>
                <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500"/> Pólizas Anuales</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: PROCESO (Sin cambios mayores, solo visual) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-6 text-brand-black uppercase">
              Metodología <span className="text-brand-red">Certificada</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Garantizamos tiempos de entrega y calidad en cada etapa.
            </p>
          </div>

          <div className="relative">
            {/* Línea conectora */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2 z-0"></div>
            
            <div className="grid lg:grid-cols-4 gap-8 relative z-10">
              {[
                { step: "01", title: "Diagnóstico", desc: "Visita técnica o análisis de planos para entender tu necesidad." },
                { step: "02", title: "Ingeniería", desc: "Diseño y propuesta técnica con renders y fichas de especificación." },
                { step: "03", title: "Fabricación", desc: "Producción ISO en nuestra planta con corte láser y soldadura MIG." },
                { step: "04", title: "Ejecución", desc: "Logística, instalación, nivelación y entrega final al cliente." }
              ].map((item, index) => (
                <div key={index} className="relative group">
                  <div className="bg-white p-8 border-2 border-gray-200 hover:border-brand-red transition-all duration-300 h-full shadow-lg group-hover:-translate-y-2">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 bg-brand-red text-white flex items-center justify-center font-bold text-2xl mr-4 rounded-lg shadow-lg shadow-brand-red/30">
                        {item.step}
                      </div>
                      <h3 className="font-oswald text-xl font-bold pt-1 text-brand-black uppercase">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: ESPECIALIDADES POR INDUSTRIA */}
      <section id="especialidades" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-6 text-brand-black uppercase">
              Soluciones por <span className="text-brand-red">Industria</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No es lo mismo un hospital que una mina. Tenemos la experiencia para cada sector.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: <FaHospital className="text-4xl text-blue-500" />, 
                title: "Sector Salud (IMSS)", 
                desc: "Lockers Slop-Top (Techo inclinado) para cumplir norma de higiene. Pintura antibacterial y acero inoxidable.",
                color: "border-blue-100 hover:border-blue-500 bg-blue-50/30"
              },
              { 
                icon: <FaIndustry className="text-4xl text-gray-600" />, 
                title: "Industria Pesada", 
                desc: "Lockers de carga pesada calibre 20/22. Resistentes a golpes, grasa y uso rudo continuo (3 turnos).",
                color: "border-gray-200 hover:border-gray-600 bg-gray-50"
              },
              { 
                icon: <FaSchool className="text-4xl text-green-500" />, 
                title: "Sector Educativo", 
                desc: "Sistemas modulares antivandálicos. Puertas reforzadas y bisagras ocultas para escuelas y universidades.",
                color: "border-green-100 hover:border-green-500 bg-green-50/30"
              },
              { 
                icon: <FaWarehouse className="text-4xl text-cyan-500" />, 
                title: "Zonas Húmedas", 
                desc: "Tecnología PVC JGA. 100% Inoxidable para albercas, vestidores de minas y plataformas petroleras.",
                color: "border-cyan-100 hover:border-cyan-500 bg-cyan-50/30"
              }
            ].map((item, index) => (
              <div key={index} className={`p-8 border-2 ${item.color} transition-all duration-300 hover:shadow-xl rounded-xl h-full flex flex-col items-center text-center`}>
                <div className="mb-6 transform transition-transform group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="font-oswald text-xl font-bold mb-3 text-brand-black uppercase">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 5: GALERÍA "RENDER vs REALIDAD" */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        {/* Fondo sutil */}
        <div className="absolute inset-0 bg-[url('/images/pattern-grid.png')] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-6 uppercase">
              Del <span className="text-brand-red">Plano</span> a la <span className="text-brand-red">Realidad</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              La precisión es nuestra firma. Lo que diseñamos es exactamente lo que instalamos.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* LADO A: DISEÑO */}
            <div className="space-y-6 group">
              <div className="border-2 border-gray-700 p-2 bg-gray-800 rounded-lg transform transition-transform hover:-translate-y-1 hover:border-brand-red">
                <div className="aspect-video relative overflow-hidden rounded">
                  <Image
                    src="/images/servicios/blueprint-diseno.jpg" // Asegúrate que exista
                    alt="Plano técnico de locker JGA"
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute bottom-0 left-0 bg-brand-red px-4 py-1 text-xs font-bold uppercase tracking-wider">
                    Fase 1: Ingeniería
                  </div>
                </div>
              </div>
              
              <div className="px-4">
                <h4 className="font-oswald text-xl mb-3 text-white flex items-center gap-2">
                  <FaRulerCombined className="text-brand-red"/> Especificación Técnica
                </h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Planimetría CAD detallada</li>
                  <li>• Cálculo de cargas y resistencia</li>
                  <li>• Selección de materiales por norma</li>
                </ul>
              </div>
            </div>

            {/* LADO B: REALIDAD */}
            <div className="space-y-6 group">
              <div className="border-2 border-gray-700 p-2 bg-gray-800 rounded-lg transform transition-transform hover:-translate-y-1 hover:border-green-500">
                <div className="aspect-video relative overflow-hidden rounded">
                  <Image
                    src="/images/servicios/instalacion-real.jpg" // Asegúrate que exista
                    alt="Instalación real de lockers JGA"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 bg-green-600 px-4 py-1 text-xs font-bold uppercase tracking-wider">
                    Fase 2: Entrega Final
                  </div>
                </div>
              </div>
              
              <div className="px-4">
                <h4 className="font-oswald text-xl mb-3 text-white flex items-center gap-2">
                  <FaCheckCircle className="text-green-500"/> Instalación Certificada
                </h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Ejecución milimétrica</li>
                  <li>• Pruebas de funcionamiento</li>
                  <li>• Entrega llave en mano</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 6: CTA ARQUITECTOS (Conversión B2B) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 p-10 md:p-14 rounded-3xl shadow-2xl relative overflow-hidden">
            {/* Decoración */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>

            <div className="relative z-10 text-center">
              <span className="inline-block py-1 px-3 rounded-full bg-brand-red/10 text-brand-red font-bold text-xs uppercase tracking-widest mb-6 border border-brand-red/20">
                Atención B2B Especializada
              </span>
              
              <h2 className="font-oswald text-3xl md:text-5xl font-bold mb-6 text-brand-black">
                ¿ERES <span className="text-brand-red">ARQUITECTO</span> O <span className="text-brand-red">CONTRATISTA</span>?
              </h2>
              
              <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-light">
                Sabemos lo que necesitas: <strong>Tiempos de entrega reales, fichas técnicas completas y precios competitivos</strong> para ganar licitaciones.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="text-4xl font-bold text-brand-red mb-1">-15%</div>
                  <div className="text-xs font-bold uppercase text-gray-500">Precio Distribuidor</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="text-4xl font-bold text-brand-red mb-1">24h</div>
                  <div className="text-xs font-bold uppercase text-gray-500">Cotización Express</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="text-4xl font-bold text-brand-red mb-1">DWG</div>
                  <div className="text-xs font-bold uppercase text-gray-500">Archivos Editables</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/5215566778899?text=Hola%20JGA,%20soy%20arquitecto/contratista%20y%20necesito%20precio%20especial%20para%20proyecto."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-red hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-red-900/40 flex items-center justify-center gap-2"
                >
                  <MdPhone /> Contactar Proyectos
                </a>
                <a 
                  href="mailto:proyectos@jgamexico.com?subject=Solicitud de Ficha Técnica y Lista de Precios"
                  className="bg-white border-2 border-gray-300 hover:border-brand-black hover:text-brand-black text-gray-600 font-bold py-4 px-8 rounded-lg text-lg uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <MdEmail /> Solicitar Catálogo PDF
                </a>
              </div>
              
              <p className="text-gray-400 text-xs mt-8">
                *Descuentos aplicables en compras por volumen superiores a 20 unidades.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}