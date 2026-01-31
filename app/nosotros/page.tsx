import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import { 
  FaWhatsapp, 
  FaMapMarkerAlt, 
  FaIndustry, 
  FaUsers, 
  FaShieldAlt, 
  FaClock, 
  FaCertificate,
  FaFire,
  FaTools,
  FaPalette,
  FaTruck,
  FaHandshake,
  FaTemperatureHigh,
  FaRocket,
  FaInstagram,
  FaFingerprint,
  FaLeaf,
  FaHistory,
  FaQuoteLeft
} from 'react-icons/fa';
import { GiMetalPlate, GiWeight, GiPlasticDuck } from 'react-icons/gi'; 
import { MdOutlineCleaningServices } from 'react-icons/md';

// 1. METADATOS DE AUTORIDAD (SEO)
export const metadata: Metadata = {
  title: 'Nosotros | Fábrica de Lockers JGA México (Desde 2004)',
  description: 'Conoce la historia de Lockers JGA. No somos revendedores, somos fabricantes en Chicoloapan. Más de 20 años forjando acero y PVC de alta resistencia.',
  keywords: ['fabrica lockers mexico', 'historia lockers jga', 'fabricantes lockers chicoloapan', 'jose luis rosas marcos', 'proveedores de lockers'],
};

export default function NosotrosPage() {
  
  // 2. SCHEMA MARKUP: NEGOCIO LOCAL DE MANUFACTURA
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ManufacturingBusiness",
    "name": "Lockers JGA México",
    "legalName": "Lockers JGA S.A. de C.V.",
    "foundingDate": "2004",
    "founder": {
      "@type": "Person",
      "name": "José Luis Rosas Marcos"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Calle Reyes de Argón Smz 20 Mz 1 Lote 3",
      "addressLocality": "Chicoloapan",
      "addressRegion": "Estado de México",
      "addressCountry": "MX"
    },
    "description": "Fábrica de lockers metálicos y de PVC en México.",
    "slogan": "No somos una bodega, somos una fábrica."
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Inyección de Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* SECCIÓN 1: HERO DE IDENTIDAD (INTACTO) */}
      <div className="bg-black text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-900"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-red/10 rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full translate-x-48 translate-y-48"></div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center">
            {/* Badge de años */}
            <div className="inline-flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 px-4 py-2 rounded-full mb-8">
              <FaCertificate className="text-brand-red" />
              <span className="text-sm font-medium">Desde 2004</span>
            </div>
            
            {/* Título Principal */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              NO SOMOS UNA BODEGA.<br />
              <span className="text-brand-red">SOMOS UNA FÁBRICA.</span>
            </h1>
            
            {/* Subtítulo */}
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
              Mientras otros importan lámina delgada, nosotros forjamos acero en Chicoloapan.
              <span className="font-bold text-white"> Más de 20 años</span> siendo el estándar de resistencia y la opción higiénica en México.
            </p>
            
            {/* Badges de autoridad */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 bg-gray-800/60 px-4 py-2 rounded-lg border border-gray-700">
                <GiMetalPlate className="text-brand-red" />
                <span className="font-medium">Calibre 22 Real</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-800/60 px-4 py-2 rounded-lg border border-gray-700">
                <MdOutlineCleaningServices className="text-brand-red" />
                <span className="font-medium">PVC 16mm Aséptico</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-800/60 px-4 py-2 rounded-lg border border-gray-700">
                <FaFire className="text-brand-red" />
                <span className="font-medium">100% Soldado</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-800/60 px-4 py-2 rounded-lg border border-gray-700">
                <FaUsers className="text-brand-red" />
                <span className="font-medium">Familia Mexicana</span>
              </div>
            </div>
            
            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/catalogo"
                className="px-8 py-3 bg-brand-red text-white font-bold rounded-lg hover:bg-red-700 transition-colors text-lg flex items-center justify-center"
              >
                VER NUESTRO ACERO Y PVC
              </Link>
              <a 
                href="https://wa.me/5215518246146"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gray-800 border border-gray-700 text-white font-bold rounded-lg hover:bg-gray-700 transition-colors text-lg flex items-center justify-center gap-2"
              >
                <FaWhatsapp /> VISITAR PLANTA
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* SECCIÓN 2: HISTORIA DE ORIGEN (OPTIMIZADA) */}
      <div className="bg-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Texto a la izquierda */}
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-brand-red text-white px-4 py-2 rounded-full text-sm font-bold">
                  NUESTRA HISTORIA
                </span>
              </div>
              
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
                Por qué <span className="text-brand-red">nacimos diferentes</span>
              </h2>
              
              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  <span className="font-bold">En 2004,</span> el mercado estaba inundado de lockers desechables. 
                  Se doblaban con mirarlos.
                </p>
                
                <div className="bg-red-50 border-l-4 border-brand-red p-4 rounded-r-lg">
                  <p className="font-bold text-gray-900 text-lg">
                    "Decidimos que México merecía algo mejor: resistencia en acero y salubridad en PVC."
                  </p>
                </div>
                
                <p className="text-lg">
                  JGA nació con una regla inquebrantable: 
                  <span className="font-bold text-gray-900"> Si no aguanta un golpe o no es totalmente aséptico, no sale de nuestra planta.</span>
                </p>
                
                <p className="text-lg">
                  Pasamos de ser un taller local a equipar plantas automotrices y quirófanos, 
                  pero nunca perdimos la esencia: somos una familia mexicana trabajando para 
                  proteger lo que valoras.
                </p>
                
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl mt-6">
                  <FaUsers className="text-brand-red text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">100% Mano de Obra Mexicana</h4>
                    <p className="text-gray-700">
                      Cada locker es fabricado por familias de Chicoloapan con orgullo y dedicación.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Imagen optimizada a la derecha */}
            <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/nosotros/equipo-trabajo.jpg" 
                alt="Equipo JGA México en Fábrica Chicoloapan" 
                fill
                className="object-cover"
              />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-brand-red/10 rounded-full z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gray-900/10 rounded-full z-0"></div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 🟢 NUEVA SECCIÓN: TRAYECTORIA, GUERRA VS MINIFIX Y VISIÓN 2030 🟢 */}
      {/* ========================================================================= */}
      <div className="bg-black text-white py-20 md:py-32 relative overflow-hidden border-t border-gray-800">
        {/* Fondo sutil */}
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          
          {/* Encabezado Sección */}
          <div className="text-center mb-16">
             <div className="inline-flex items-center gap-2 bg-gray-900 border border-gray-700 rounded-full px-4 py-1 mb-6">
                <FaHistory className="text-brand-red" />
                <span className="text-gray-300 text-sm font-bold tracking-wider uppercase">EVOLUCIÓN INDUSTRIAL</span>
              </div>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
              15 AÑOS <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-600">REINVENTANDO</span> EL ESTÁNDAR
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              La historia de cómo José Luis desafió a la industria del "locker barato" y nuestra visión para los próximos 5 años.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* COLUMNA 1: EL PASADO (2010 - LA GUERRA CONTRA EL MINIFIX) */}
            <div className="bg-gray-900/50 p-8 rounded-3xl border border-gray-800 relative group hover:border-brand-red/30 transition-colors">
              <FaQuoteLeft className="text-5xl text-gray-800 absolute -top-6 -left-4" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gray-800 p-3 rounded-xl">
                    <span className="font-bold text-2xl text-white">2010</span>
                </div>
                <h3 className="font-heading text-2xl font-bold text-brand-red">LA REINVENCIÓN</h3>
              </div>

              <div className="space-y-4 text-gray-300">
                <p>
                  Hace 15 años, el mercado enfrentaba una crisis: los clientes compraban lockers de <strong className="text-white">PVC modelo "Minifix" (armado rápido)</strong> creyendo ahorrar.
                </p>
                <p>
                  El resultado siempre era el mismo: estructuras débiles que no aguantaban el uso rudo. <strong className="text-white">José Luis no aceptó vender eso.</strong>
                </p>
                <p>
                  Reinventó el locker utilizando componentes capaces de soportar agua, salinidad y golpes, creando un cuerpo <span className="text-brand-red font-bold">100% Aséptico y Unibody</span>.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-700">
                 <p className="italic text-gray-400 text-sm">
                   "El reto fue educar al cliente: enseñarle que lo barato del minifix sale caro, y que un Locker JGA es una inversión eterna."
                 </p>
              </div>
            </div>

            {/* COLUMNA 2: EL FUTURO (2025-2030 - PROYECTO VISIÓN) */}
            <div className="bg-gradient-to-br from-brand-red/10 to-black p-8 rounded-3xl border border-red-900/30 relative">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                  <FaRocket className="text-8xl text-brand-red" />
               </div>

               <div className="flex items-center gap-4 mb-6">
                <div className="bg-brand-red p-3 rounded-xl">
                    <span className="font-bold text-2xl text-white">2030</span>
                </div>
                <h3 className="font-heading text-2xl font-bold text-white">PROYECTO: FUTURO</h3>
              </div>

              <p className="text-lg text-white mb-6 font-medium">
                Ya demostramos la calidad. Nuestro objetivo a 5 años es consolidarnos como el estándar absoluto en México.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                   <FaShieldAlt className="text-brand-red mt-1 text-lg" />
                   <span className="text-gray-300 text-sm">
                     <strong className="text-white">Erradicación del Minifix:</strong> Sustituir definitivamente los lockers desechables en hotelería y corporativos.
                   </span>
                </li>
                <li className="flex items-start gap-3">
                   <FaFingerprint className="text-brand-red mt-1 text-lg" />
                   <span className="text-gray-300 text-sm">
                     <strong className="text-white">Personalización Total:</strong> Nuevos materiales y diseños que se adaptan a tu marca sin perder resistencia.
                   </span>
                </li>
                <li className="flex items-start gap-3">
                   <FaLeaf className="text-brand-red mt-1 text-lg" />
                   <span className="text-gray-300 text-sm">
                     <strong className="text-white">Tecnología Sustentable:</strong> Procesos más limpios y materiales 100% reciclables.
                   </span>
                </li>
              </ul>
            </div>

          </div>

          {/* SOCIAL PROOF - INSTAGRAM MENTION */}
          <div className="mt-16 bg-gray-900 border border-gray-700 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
             <div className="flex items-center gap-4">
                <div className="bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-600 p-1 rounded-full">
                   <div className="bg-black p-2 rounded-full">
                      <FaInstagram className="text-3xl text-white" />
                   </div>
                </div>
                <div>
                   <h4 className="font-bold text-white text-lg">La comunidad nos respalda</h4>
                   <p className="text-gray-400 text-sm max-w-xl">
                      "Estamos recibiendo cientos de mensajes por el Reel que subimos hoy. La gente ya sabe distinguir la calidad JGA frente al PVC barato. Responderemos uno a uno."
                   </p>
                </div>
             </div>
             <a 
                href="https://www.instagram.com/lockersjga/?igsh=NzR2MzZuZGpzZjZs#" 
                target="_blank"
                className="whitespace-nowrap px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg transition-colors text-sm border border-white/20"
             >
                VER REELS
             </a>
          </div>

        </div>
      </div>
      
      {/* SECCIÓN 3: EL PROCESO "SIN SECRETOS" (INTACTO) */}
      <div className="bg-gray-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mostramos cómo lo hacemos.<br />
              <span className="text-brand-red">Sin trucos, sin atajos.</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              La diferencia entre un locker desechable y uno que dura 20 años está en estos 6 pilares.
            </p>
          </div>
          
          {/* SUBSECCIÓN PVC */}
          <div className='mb-16'>
              <h3 className="text-center font-heading text-2xl md:text-3xl font-bold text-gray-800 mb-8 border-b-2 border-brand-red/50 pb-2">
                  PILAR DE HIGIENE: <span className='text-brand-red'>PVC INDUSTRIAL (16MM)</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Pilar 1: Totalmente Aséptico */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                      <div className="text-5xl text-brand-red mb-6">
                      <MdOutlineCleaningServices />
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                      100% Aséptico
                      </h3>
                      <p className="text-gray-700 mb-6">
                      Sellado completamente con 
                      <span className="font-bold text-gray-900"> silicón Anti-hongos</span> de grado sanitario que evita la propagación de plagas y filtración de hongos.
                      </p>
                      <div className="bg-red-50 px-4 py-3 rounded-lg border border-red-100">
                      <p className="text-sm text-gray-700 font-medium">
                          🔬 <span className="font-bold">Ideal para:</span> Laboratorios, Hospitales, Áreas de Alimentos
                      </p>
                      </div>
                  </div>
                  
                  {/* Pilar 2: Cero Corrosión */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                      <div className="text-5xl text-brand-red mb-6">
                      <GiPlasticDuck />
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                      Cero Corrosión e Inoxidable
                      </h3>
                      <p className="text-gray-700 mb-6">
                      El PVC industrial de 16mm no se degrada. Ofrece
                      <span className="font-bold text-gray-900"> resistencia total a químicos, cloro y humedad extrema</span>. 
                      Garantizado.
                      </p>
                      <div className="bg-red-50 px-4 py-3 rounded-lg border border-red-100">
                      <p className="text-sm text-gray-700 font-medium">
                          💧 <span className="font-bold">Ambientes:</span> Albercas, Regaderas, Zonas de lavado
                      </p>
                      </div>
                  </div>
                  
                  {/* Pilar 3: Estabilidad y Garantía */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                      <div className="text-5xl text-brand-red mb-6">
                      <FaTemperatureHigh />
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                      Estabilidad Extrema
                      </h3>
                      <p className="text-gray-700 mb-6">
                      Cuerpo 100% en PVC de 16mm con 
                      <span className="font-bold text-gray-900"> formaica de alta calidad</span>.
                      Resiste cambios bruscos de temperatura sin deformarse.
                      </p>
                      <div className="bg-red-50 px-4 py-3 rounded-lg border border-red-100">
                      <p className="text-sm text-gray-700 font-medium">
                          🛡️ <span className="font-bold">Garantía PVC:</span> 5 años contra defectos de fabricación
                      </p>
                      </div>
                  </div>
              </div>
          </div>
          
          {/* SUBSECCIÓN ACERO */}
          <div>
              <h3 className="text-center font-heading text-2xl md:text-3xl font-bold text-gray-800 mb-8 border-b-2 border-brand-red/50 pb-2">
                  PILAR DE RESISTENCIA: <span className='text-brand-red'>ACERO INDUSTRIAL</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Pilar 1: Cero Remaches */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                      <div className="text-5xl text-brand-red mb-6">
                      <FaTools />
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                      Cero Remaches
                      </h3>
                      <p className="text-gray-700 mb-6">
                      La competencia usa remaches que vibran y se rompen. Nosotros usamos 
                      <span className="font-bold text-gray-900"> soldadura robotizada y punteado estructural</span>. 
                      Una sola pieza sólida.
                      </p>
                      <div className="bg-red-50 px-4 py-3 rounded-lg border border-red-100">
                      <p className="text-sm text-gray-700 font-medium">
                          🔍 <span className="font-bold">Pídelo:</span> "Quiero ver las soldaduras, no remaches"
                      </p>
                      </div>
                  </div>
                  
                  {/* Pilar 2: La Verdad del Calibre */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                      <div className="text-5xl text-brand-red mb-6">
                      <GiWeight />
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                      La Verdad del Calibre
                      </h3>
                      <p className="text-gray-700 mb-6">
                      No te vendemos 'lámina comercial'. Usamos 
                      <span className="font-bold text-gray-900"> Calibre 24 real para el cuerpo y Calibre 18/20 para marcos</span>. 
                      Pésalos y nota la diferencia.
                      </p>
                      <div className="bg-red-50 px-4 py-3 rounded-lg border border-red-100">
                      <p className="text-sm text-gray-700 font-medium">
                          ⚖️ <span className="font-bold">Compara:</span> Nuestro locker pesa 30% más que la competencia
                      </p>
                      </div>
                  </div>
                  
                  {/* Pilar 3: Acabado Automotriz */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                      <div className="text-5xl text-brand-red mb-6">
                      <FaPalette />
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                      Acabado Automotriz
                      </h3>
                      <p className="text-gray-700 mb-6">
                      Pintura epóxica horneada a alta temperatura. No es estética, 
                      es un <span className="font-bold text-gray-900">escudo contra la corrosión</span> que aguanta 
                      químicos y humedad extrema.
                      </p>
                      <div className="bg-red-50 px-4 py-3 rounded-lg border border-red-100">
                      <p className="text-sm text-gray-700 font-medium">
                          🛡️ <span className="font-bold">Garantía:</span> 10 años contra óxido y descascarado
                      </p>
                      </div>
                  </div>
              </div>
          </div>
          
          {/* Nota técnica */}
          <div className="mt-16 bg-gradient-to-r from-gray-900 to-black text-white p-8 rounded-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="font-heading text-2xl font-bold mb-2">
                  ¿Tienes un proyecto especial?
                </h4>
                <p className="text-gray-300">
                  Visitamos tu obra para medir y asesorar sin costo.
                </p>
              </div>
              <a 
                href="https://wa.me/5215518246146?text=Necesito asesoría técnica en obra para proyecto especial"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
              >
                <FaWhatsapp /> ASESORÍA EN OBRA
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* SECCIÓN 4: GALERÍA DE PROCESO INDUSTRIAL (OPTIMIZADA) */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Así fabricamos<br />
              <span className="text-brand-red">cada locker</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desde el corte de lámina hasta el sellado de PVC, cada paso es supervisado.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Foto 1: Soldadura */}
            <div className="relative h-64 rounded-xl overflow-hidden group">
              <Image 
                src="/images/nosotros/proceso-soldadura.jpg" 
                alt="Proceso de soldadura robotizada de acero" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <div>
                  <div className="text-white font-bold text-lg">Soldadura Robotizada (Acero)</div>
                  <div className="text-white/80 text-sm">Cero remaches, 100% continuo</div>
                </div>
              </div>
            </div>
            
            {/* Foto 2: Control calidad */}
            <div className="relative h-64 rounded-xl overflow-hidden group">
              <Image 
                src="/images/nosotros/control-calidad.jpg" 
                alt="Control de calidad lockers JGA" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <div>
                  <div className="text-white font-bold text-lg">Control de Calibre</div>
                  <div className="text-white/80 text-sm">Verificamos cada milímetro</div>
                </div>
              </div>
            </div>
            
            {/* Foto 3: Sellado */}
            <div className="relative h-64 rounded-xl overflow-hidden group">
              <Image 
                src="/images/nosotros/proceso-pintura.jpg" 
                alt="Sellado aséptico de lockers PVC" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <div>
                  <div className="text-white font-bold text-lg">Sellado Aséptico (PVC)</div>
                  <div className="text-white/80 text-sm">Silicón antihongos para juntas</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Segunda fila */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Foto 4: Logística */}
            <div className="relative h-64 rounded-xl overflow-hidden group">
              <Image 
                src="/images/nosotros/flotilla-camiones.jpg" 
                alt="Flotilla de envíos JGA" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <div>
                  <div className="text-white font-bold text-lg">Logística Propia</div>
                  <div className="text-white/80 text-sm">Entregas seguras a todo México</div>
                </div>
              </div>
            </div>
            
            {/* Foto 5: Embalaje */}
            <div className="relative h-64 rounded-xl overflow-hidden group">
              <Image 
                src="/images/nosotros/embalaje.jpg" 
                alt="Embalaje de lockers industriales" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <div>
                  <div className="text-white font-bold text-lg">Embalaje Industrial</div>
                  <div className="text-white/80 text-sm">Protección total para transporte</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECCIÓN 5: CÓDIGO DE HONOR (INTACTO) */}
      <div className="bg-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-brand-red text-white px-6 py-3 rounded-full text-lg font-bold">
                NUESTRO CÓDIGO DE HONOR
              </span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              No son frases bonitas.<br />
              Son <span className="text-brand-red">reglas que cumplimos.</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Valor 1: Transparencia */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-brand-red/30 transition-all duration-300 group">
              <div className="text-4xl text-brand-red mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaShieldAlt />
              </div>
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">
                Transparencia Radical
              </h3>
              <p className="text-gray-700 mb-4">
                Te decimos el calibre real, el tipo de soldadura, el espesor del PVC y el costo de fabricación. 
                <span className="font-bold text-gray-900"> Sin letras chiquitas, sin sorpresas.</span>
              </p>
              <div className="pt-4 border-t border-gray-200">
                <span className="text-sm font-bold text-brand-red">RESPONSABILIDAD</span>
              </div>
            </div>
            
            {/* Valor 2: Mano de Obra Mexicana */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-brand-red/30 transition-all duration-300 group">
              <div className="text-4xl text-brand-red mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaUsers />
              </div>
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">
                Hecho en México con Orgullo
              </h3>
              <p className="text-gray-700 mb-4">
                Cada locker es fabricado por familias de Chicoloapan. 
                <span className="font-bold text-gray-900"> Apoyamos la economía local</span> desde 2004.
              </p>
              <div className="pt-4 border-t border-gray-200">
                <span className="text-sm font-bold text-brand-red">COMUNIDAD</span>
              </div>
            </div>
            
            {/* Valor 3: Trato Directo */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-brand-red/30 transition-all duration-300 group">
              <div className="text-4xl text-brand-red mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaHandshake />
              </div>
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">
                Trato de Fabricante
              </h3>
              <p className="text-gray-700 mb-4">
                Hablas con quien fabrica, no con un vendedor. 
                <span className="font-bold text-gray-900"> Te entendemos porque hacemos lo que vendemos.</span>
              </p>
              <div className="pt-4 border-t border-gray-200">
                <span className="text-sm font-bold text-brand-red">EMPATÍA</span>
              </div>
            </div>
            
            {/* Valor 4: Puntualidad */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-brand-red/30 transition-all duration-300 group">
              <div className="text-4xl text-brand-red mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaClock />
              </div>
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">
                Palabra Cumplida
              </h3>
              <p className="text-gray-700 mb-4">
                Tu proyecto tiene fecha. Nosotros la respetamos. 
                <span className="font-bold text-gray-900"> Logística propia = cero excusas.</span>
              </p>
              <div className="pt-4 border-t border-gray-200">
                <span className="text-sm font-bold text-brand-red">PUNTUALIDAD</span>
              </div>
            </div>
          </div>
          
          {/* Cita del fundador (OPTIMIZADA) */}
          <div className="mt-20 bg-gradient-to-r from-brand-red/10 to-red-50 border border-brand-red/20 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/4 relative h-48 w-48 mx-auto">
                <Image 
                  src="/images/nosotros/ceo.jpg" 
                  alt="José Luis Rosas - Fundador JGA" 
                  fill
                  className="object-cover rounded-full border-4 border-white shadow-lg"
                />
              </div>
              
              <div className="md:w-3/4">
                <div className="text-4xl text-gray-400 mb-4">"</div>
                <p className="text-2xl md:text-3xl text-gray-800 font-medium italic mb-6">
                  Empezamos fabricando un locker a la vez. Hoy seguimos con la misma regla: 
                  si no lo usaría en mi propia casa, no lo vendo.
                </p>
                <div className="flex items-center gap-4">
                  <div>
                    <p className="font-bold text-gray-900">José Luis Rosas Marcos.</p>
                    <p className="text-gray-600">Fundador - 20 años fabricando</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECCIÓN 6: DONDE NACEN LOS LOCKERS (OPTIMIZADA) */}
      <div className="bg-gray-900 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Texto a la izquierda */}
            <div className="space-y-8">
              <div>
                <div className="inline-block mb-4">
                  <span className="bg-white/20 backdrop-blur-sm border border-white/30 px-6 py-3 rounded-full text-lg font-bold">
                    VISÍTANOS
                  </span>
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                  Ven a ver<br />
                  <span className="text-brand-red">cómo lo hacemos</span>
                </h2>
                <p className="text-xl text-gray-300">
                  Matamos el miedo a la estafa online mostrando nuestra casa.
                  Cada cliente puede visitar nuestra planta y ver su locker nacer.
                </p>
              </div>
              
              {/* Información de contacto */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-red/20 p-3 rounded-lg">
                    <FaMapMarkerAlt className="text-brand-red text-2xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Nuestra Fábrica</h4>
                    <p className="text-gray-300">
                      Calle Reyes de Argón Smz 20 Mz 1 Lote 3<br />
                      Chicoloapan, Estado de México
                    </p>
                    <p className="text-gray-400 text-sm mt-1">
                      Zona industrial con acceso para trailers
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-brand-red/20 p-3 rounded-lg">
                    <FaIndustry className="text-brand-red text-2xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Horarios de Visita</h4>
                    <p className="text-gray-300">
                      Lunes a Viernes: 8:00 AM - 6:00 PM<br />
                      Sábados: 9:00 AM - 2:00 PM (con cita)
                    </p>
                    <p className="text-gray-400 text-sm mt-1">
                      Agendar mínimo 24 horas antes
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-brand-red/20 p-3 rounded-lg">
                    <FaTruck className="text-brand-red text-2xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Logística Propia</h4>
                    <p className="text-gray-300">
                      Flotilla propia para entrega en toda la República<br />
                      Embalaje industrial para cero daños en tránsito
                    </p>
                    <p className="text-gray-400 text-sm mt-1">
                      Seguro incluido en todos los envíos
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Botón CTA */}
              <div className="pt-6">
                <a 
                  href="https://wa.me/5215518246146?text=Quiero agendar visita a planta en Chicoloapan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-brand-red text-white font-bold rounded-lg hover:bg-red-700 transition-colors text-lg"
                >
                  <FaWhatsapp className="text-xl" />
                  AGENDAR VISITA A PLANTA
                </a>
                <p className="text-gray-400 text-sm mt-3">
                  Sin costo - Incluye recorrido por taller y asesoría técnica
                </p>
              </div>
            </div>
            
            {/* Imagen optimizada a la derecha */}
            <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/nosotros/fabrica-exterior.jpg" 
                alt="Fábrica Lockers JGA México exterior" 
                fill
                className="object-cover"
              />
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-brand-red/10 rounded-full"></div>
              <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-white/5 rounded-full"></div>
            </div>
          </div>
          
          {/* Nota de seguridad */}
          <div className="mt-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-green-500/20 p-3 rounded-lg">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Empresa 100% Legal y Establecida</h4>
                  <p className="text-gray-400 text-sm">
                    RFC válido, facturación electrónica, cumplimiento de normas oficiales
                  </p>
                </div>
              </div>
              <a 
                href="https://wa.me/525518246146?text=Hola%20JGA%20M%C3%A9xico,%20necesito%20solicitar%20su%20RFC%20y%20datos%20fiscales%20completos%20para%20proceso%20de%20compra.%20%C2%BFPodr%C3%ADan%20envi%C3%A1rmelos%20por%20favor?"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors flex items-center gap-2"
              >
                <FaWhatsapp className="text-green-400" />
                Solicitar RFC y datos fiscales
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* SECCIÓN 7: CTA FINAL (INTACTO) */}
      <div className="bg-gradient-to-r from-black to-gray-900 text-white py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <div className="space-y-8">
            {/* Icono central */}
            <div className="inline-flex items-center justify-center w-24 h-24 bg-brand-red/20 rounded-full border border-brand-red/30">
              <FaIndustry className="text-brand-red text-4xl" />
            </div>
            
            {/* Título principal */}
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold">
              ¿Listo para trabajar con<br />
              <span className="text-brand-red">fabricantes de verdad?</span>
            </h2>
            
            {/* Subtítulo */}
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              No vendemos lockers. Vendemos <span className="font-bold text-white">tranquilidad</span> de que lo que compras hoy, seguirá funcionando en 2030, sea acero indestructible o PVC aséptico.
            </p>
            
            {/* Estadísticas */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-brand-red mb-2">20+</div>
                <p className="text-gray-300 text-sm">Años fabricando</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-brand-red mb-2">10,000+</div>
                <p className="text-gray-300 text-sm">Lockers instalados</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-brand-red mb-2">32</div>
                <p className="text-gray-300 text-sm">Estados con entregas</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-brand-red mb-2">100%</div>
                <p className="text-gray-300 text-sm">Hecho en México</p>
              </div>
            </div>
            
            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <a 
                href="https://wa.me/5215518246146?text=Quiero cotizar proyecto industrial con fabricantes directos"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-brand-red text-white font-bold rounded-lg hover:bg-red-700 transition-colors text-lg flex items-center justify-center gap-3"
              >
                <FaWhatsapp className="text-xl" />
                HABLAR CON INGENIERÍA
              </a>
              
              <Link 
                href="/catalogo"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-lg hover:bg-white/20 transition-colors text-lg flex items-center justify-center gap-3"
              >
                <GiMetalPlate className="text-xl" />
                VER CATÁLOGO TÉCNICO
              </Link>
            </div>
            
            {/* Nota final */}
            <div className="pt-12 border-t border-white/10">
              <p className="text-gray-400 text-sm">
                📞 <span className="font-bold">Llámanos directo:</span> 55 1824 6146 (Lic. Luis Axel)<br />
                📧 <span className="font-bold">Email técnico:</span> ventasiga.lockers@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}