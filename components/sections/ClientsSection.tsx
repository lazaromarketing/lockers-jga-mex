'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { 
  FaWhatsapp, 
  FaArrowRight, 
  FaIndustry, // 👈 Importado correctamente
  FaBuilding, 
  FaHotel, 
  FaUniversity, 
  FaShieldAlt,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaDoorClosed,
  FaTrophy
} from 'react-icons/fa';

// Tipos de datos
interface Client {
  id: number;
  name: string;
  logo: string;
  category: 'corporate' | 'entertainment' | 'education';
  width: number;
  height: number;
}

interface SuccessCase {
  client: string;
  group: string;
  challenge: string;
  solution: string;
  result: string;
  years: number;
}

const ClientsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // --- DATOS DE CLIENTES ---
  // Nota: Asegúrate de que las imágenes existan en public/images/clients/...
  const clients: Client[] = [
    // Corporativos
    { id: 1, name: 'Banco de México', logo: '/images/clients/corporativos/banco-mexico.png', category: 'corporate', width: 180, height: 80 },
    { id: 2, name: 'Banco Santander', logo: '/images/clients/corporativos/banco-santander.png', category: 'corporate', width: 180, height: 80 },
    { id: 3, name: 'BMW Group', logo: '/images/clients/corporativos/bmw.png', category: 'corporate', width: 180, height: 80 },
    { id: 4, name: 'Mondelez', logo: '/images/clients/corporativos/mondelez.png', category: 'corporate', width: 180, height: 80 },
    // Entretenimiento
    { id: 5, name: 'Hotel Nickelodeon', logo: '/images/clients/entretenimiento/hotel-nickelodeon.png', category: 'entertainment', width: 180, height: 80 },
    { id: 6, name: 'Hoteles Vidanta', logo: '/images/clients/entretenimiento/hoteles-vidanta.png', category: 'entertainment', width: 180, height: 80 },
    { id: 7, name: 'Acuario Michin CDMX', logo: '/images/clients/entretenimiento/acuario-michin.png', category: 'entertainment', width: 180, height: 80 },
    { id: 8, name: 'Parque Aztlán', logo: '/images/clients/entretenimiento/parque-aztlan.png', category: 'entertainment', width: 180, height: 80 },
    // Educación
    { id: 9, name: 'Universidad UVM', logo: '/images/clients/educacion/uvm.png', category: 'education', width: 180, height: 80 },
    { id: 10, name: 'Colegio Frida Kahlo', logo: '/images/clients/educacion/frida-kahlo.png', category: 'education', width: 180, height: 80 },
  ];

  // Caso de éxito destacado (SEO: Palabras clave de dolor y solución)
  const successCase: SuccessCase = {
    client: 'Hotel Nickelodeon',
    group: 'Grupo Karisma',
    challenge: 'Corrosión extrema en zona de albercas y alto tráfico (500+ usos diarios). Los lockers metálicos convencionales duraban menos de 6 meses.',
    solution: 'Implementación de Lockers de PVC (Plástico) de alta densidad JGA + Herrajes marinos inoxidables.',
    result: '0% de corrosión tras 3 años de operación continua en ambiente salino.',
    years: 3
  };

  const stats = [
    { id: 1, value: '+20,000', label: 'Puertas Instaladas', icon: FaDoorClosed, color: 'text-brand-red' },
    { id: 2, value: '32', label: 'Estados Cubiertos', icon: FaMapMarkerAlt, color: 'text-blue-600' },
    { id: 3, value: '0%', label: 'Fallas Estructurales', icon: FaShieldAlt, color: 'text-green-600' },
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden" id="clientes">
      {/* Decoración superior */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gray-100 opacity-30"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gray-100 opacity-30"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ENCABEZADO SEO */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-800 text-sm font-bold rounded-full uppercase tracking-wider mb-4">
            <FaTrophy className="mr-2 text-brand-red" />
            CLIENTES QUE CONFÍAN EN JGA
          </span>
          
          <h2 className="font-oswald font-bold text-4xl md:text-5xl text-black mb-6">
            INGENIERÍA PROBADA POR
            <span className="block text-brand-red">LÍDERES DE LA INDUSTRIA</span>
          </h2>
          
          <p className="text-gray-600 text-lg leading-relaxed">
            Desde la banca de alta seguridad hasta zonas húmedas de hotelería premium.
            Las empresas más exigentes de México eligen <strong>Lockers JGA</strong> cuando la calidad no es negociable.
          </p>
        </div>

        {/* --- GRID DE LOGOS --- */}
        <div className="mb-20">
          
          {/* 1. Corporativos y Banca */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-4">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <FaBuilding className="text-gray-700" />
              </div>
              <h3 className="font-oswald font-bold text-2xl text-gray-900">Corporativos y Banca</h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {clients.filter(c => c.category === 'corporate').map((client) => (
                <div key={client.id} className="group relative bg-white rounded-xl p-6 border border-gray-100 hover:border-gray-300 hover:shadow-lg transition-all duration-300 flex items-center justify-center h-32">
                  <div className="relative w-full h-full">
                    <Image
                      src={client.logo}
                      alt={`Lockers instalados en ${client.name}`} // SEO ALT OPTIMIZADO
                      fill
                      className="object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Entretenimiento */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-4">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                <FaHotel className="text-blue-600" />
              </div>
              <h3 className="font-oswald font-bold text-2xl text-gray-900">Hoteles y Entretenimiento</h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {clients.filter(c => c.category === 'entertainment').map((client) => (
                <div key={client.id} className="group relative bg-white rounded-xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 flex items-center justify-center h-32">
                  <div className="relative w-full h-full">
                    <Image
                      src={client.logo}
                      alt={`Lockers de PVC en ${client.name}`} // SEO ALT OPTIMIZADO
                      fill
                      className="object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Educación */}
          <div>
            <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-4">
              <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                <FaUniversity className="text-green-600" />
              </div>
              <h3 className="font-oswald font-bold text-2xl text-gray-900">Sector Educativo</h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {clients.filter(c => c.category === 'education').map((client) => (
                <div key={client.id} className="group relative bg-white rounded-xl p-6 border border-gray-100 hover:border-green-200 hover:shadow-lg transition-all duration-300 flex items-center justify-center h-32">
                  <div className="relative w-full h-full">
                    <Image
                      src={client.logo}
                      alt={`Lockers escolares en ${client.name}`} // SEO ALT OPTIMIZADO
                      fill
                      className="object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- CASO DE ÉXITO DESTACADO --- */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Columna 1: Datos Clave */}
              <div className="lg:col-span-3 p-8 bg-gradient-to-br from-brand-red to-red-800 text-white flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <FaTrophy className="text-white text-xl" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider block opacity-80">CASO DE ÉXITO</span>
                      <h3 className="font-oswald font-bold text-xl leading-none">Hotel Resort</h3>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-6xl font-bold mb-1">{successCase.years}+</div>
                    <div className="text-white/80 text-sm font-medium">Años sin corrosión</div>
                    <div className="mt-4 flex items-center gap-2 text-xs bg-black/20 p-2 rounded-lg">
                      <FaCheckCircle className="text-green-300" />
                      <span>Ambiente Salino 90%</span>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-white/20">
                  <div className="font-bold text-lg">{successCase.client}</div>
                  <div className="text-white/70 text-sm">{successCase.group}</div>
                </div>
              </div>
              
              {/* Columna 2: Imagen (Asegúrate que la ruta exista o usa la genérica) */}
              <div className="lg:col-span-4 relative min-h-[300px] md:min-h-[400px]">
                <Image
                  src="/images/hero-locker-industrial.png" // 👈 PUEDES CAMBIAR ESTO POR LA FOTO REAL DE NICKELODEON
                  alt={`Instalación de Lockers PVC en ${successCase.client}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-xs font-bold uppercase text-blue-300">Zona de Albercas</span>
                  </div>
                  <p className="text-sm font-medium">Lockers de PVC JGA + Herrajes Marinos</p>
                </div>
              </div>
              
              {/* Columna 3: Historia */}
              <div className="lg:col-span-5 p-8 lg:p-12 bg-gray-900 text-white">
                <div className="space-y-8">
                  <div>
                    <h4 className="flex items-center gap-2 font-oswald text-lg text-brand-red mb-2">
                      <span className="w-6 h-6 rounded-full bg-brand-red/20 flex items-center justify-center text-xs">1</span> EL RETO
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-brand-red/30 pl-4">
                      {successCase.challenge}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="flex items-center gap-2 font-oswald text-lg text-blue-400 mb-2">
                      <span className="w-6 h-6 rounded-full bg-blue-400/20 flex items-center justify-center text-xs">2</span> LA SOLUCIÓN
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-blue-400/30 pl-4">
                      {successCase.solution}
                    </p>
                  </div>

                  <div className="bg-green-900/20 border border-green-800 rounded-xl p-5">
                    <h4 className="flex items-center gap-2 font-oswald text-lg text-green-400 mb-2">
                      <FaCheckCircle /> RESULTADO FINAL
                    </h4>
                    <p className="text-green-100 font-medium text-lg italic">
                      "{successCase.result}"
                    </p>
                    <div className="mt-4 flex gap-2">
                      <span className="text-[10px] uppercase bg-green-800/50 text-green-300 px-2 py-1 rounded">Cero Óxido</span>
                      <span className="text-[10px] uppercase bg-green-800/50 text-green-300 px-2 py-1 rounded">Cero Mtto.</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* --- ESTADÍSTICAS --- */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-xl mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center px-4 py-4 md:py-0">
                <div className={`w-16 h-16 mx-auto ${stat.color.replace('text-', 'bg-')} bg-opacity-10 rounded-2xl flex items-center justify-center mb-4`}>
                  <stat.icon className={`${stat.color} text-3xl`} />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm font-bold uppercase text-gray-500 tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 pt-8 border-t border-gray-100 text-center">
            <p className="text-gray-500 text-sm italic">
              "Cuando compras a un fabricante real, obtienes una garantía real. Sin letras chiquitas."
            </p>
          </div>
        </div>

        {/* --- CTA FINAL --- */}
        <div className="text-center">
          <div className="inline-block bg-black text-white rounded-full px-6 py-2 text-sm font-bold mb-8 animate-bounce-slow">
            ¿Listo para equipar tu empresa?
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5215518246146?text=Hola%20JGA,%20vi%20sus%20casos%20de%20éxito%20y%20quiero%20una%20solución%20igual%20para%20mi%20empresa."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-red hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-red-900/30 flex items-center justify-center gap-3"
            >
              <FaCheckCircle className="text-xl" />
              COTIZAR MI PROYECTO
            </a>
            
            <button
              onClick={() => {
                if (window.confirm("¿Te gustaría conocer nuestra fábrica en Chicoloapan y ver cómo producimos tus lockers?")) {
                  window.location.href = "/nosotros";
                }
              }}
              className="group border-2 border-black hover:border-brand-red text-black hover:text-brand-red font-bold px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-3 bg-white"
            >
              <FaIndustry className="text-xl group-hover:scale-110 transition-transform" />
              CONOCER AL FABRICANTE
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ClientsSection;