// components/sections/ClientsSection.tsx
'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaWhatsapp, FaArrowRight, FaIndustry } from 'react-icons/fa'; // 👈 AGREGAR FaIndustry

import { 
  FaBuilding, 
  FaHotel, 
  FaUniversity, 
  FaShieldAlt,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaDoorClosed,
  FaTrophy
} from 'react-icons/fa';

// Tipos de clientes
interface Client {
  id: number;
  name: string;
  logo: string;
  category: 'corporate' | 'entertainment' | 'education';
  width: number;
  height: number;
}

// Caso de éxito
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

  // Datos de clientes - ACTUALIZA ESTAS RUTAS CON TUS LOGOS REALES
  const clients: Client[] = [
    // Corporativos y Banca
    { id: 1, name: 'Banco de México', logo: '/images/clients/corporativos/banco-mexico.png', category: 'corporate', width: 180, height: 80 },
    { id: 2, name: 'Banco Santander', logo: '/images/clients/corporativos/banco-santander.png', category: 'corporate', width: 180, height: 80 },
    { id: 3, name: 'BMW Group', logo: '/images/clients/corporativos/bmw.png', category: 'corporate', width: 180, height: 80 },
    { id: 4, name: 'Mondelez', logo: '/images/clients/corporativos/mondelez.png', category: 'corporate', width: 180, height: 80 },
    
    // Entretenimiento y Turismo
    { id: 5, name: 'Hotel Nickelodeon', logo: '/images/clients/entretenimiento/hotel-nickelodeon.png', category: 'entertainment', width: 180, height: 80 },
    { id: 6, name: 'Hoteles Vidanta', logo: '/images/clients/entretenimiento/hoteles-vidanta.png', category: 'entertainment', width: 180, height: 80 },
    { id: 7, name: 'Acuario Michin CDMX', logo: '/images/clients/entretenimiento/acuario-michin.png', category: 'entertainment', width: 180, height: 80 },
    { id: 8, name: 'Parque Aztlán', logo: '/images/clients/entretenimiento/parque-aztlan.png', category: 'entertainment', width: 180, height: 80 },
    
    // Educación
    { id: 9, name: 'Universidad UVM', logo: '/images/clients/educacion/uvm.png', category: 'education', width: 180, height: 80 },
    { id: 10, name: 'Colegio Frida Kahlo', logo: '/images/clients/educacion/frida-kahlo.png', category: 'education', width: 180, height: 80 },
  ];

  // Caso de éxito destacado
  const successCase: SuccessCase = {
    client: 'Hotel Nickelodeon',
    group: 'Grupo Karisma',
    challenge: 'Humedad extrema (zona de albercas) y alto tráfico de huéspedes (500+ diarios). Los lockers anteriores se oxidaban en 6 meses.',
    solution: 'Lockers de PVC de alta densidad para zonas húmedas + Lockers metálicos con pintura epóxica marina especial anti-corrosión.',
    result: '0% de corrosión después de 3 años de operación continua en ambiente salino y húmedo.',
    years: 3
  };

  // Estadísticas de impacto
  const stats = [
    { id: 1, value: '+20,000', label: 'Puertas Instaladas', icon: FaDoorClosed, color: 'text-brand-red' },
    { id: 2, value: '32', label: 'Estados Cubiertos', icon: FaMapMarkerAlt, color: 'text-blue-600' },
    { id: 3, value: '0%', label: 'Reclamaciones de Garantía Estructural', icon: FaShieldAlt, color: 'text-green-600' },
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Línea decorativa superior */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      
      {/* Elementos de fondo decorativos */}
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gray-100 opacity-30"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gray-100 opacity-30"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-800 text-sm font-bold rounded-full uppercase tracking-wider mb-4">
            <FaTrophy className="mr-2" />
            REFERENCIAS QUE HABLAN POR NOSOTROS
          </span>
          
          <h2 className="font-oswald font-bold text-4xl md:text-5xl text-black mb-6">
            INGENIERÍA PROBADA POR
            <span className="block text-brand-red">LÍDERES DE LA INDUSTRIA</span>
          </h2>
          
          <p className="text-gray-600 text-lg leading-relaxed">
            Desde la banca de alta seguridad hasta zonas húmedas de hotelería premium.
            Las empresas más exigentes de México confían en JGA cuando la calidad no puede fallar.
          </p>
        </div>

        {/* Carrusel de Logos - Versión Grid Elegante */}
        <div className="mb-20">
          {/* Categoría: Corporativos y Banca */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                <FaBuilding className="text-gray-700 text-xl" />
              </div>
              <h3 className="font-oswald font-bold text-2xl text-gray-900">
                Corporativos y Banca
              </h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {clients
                .filter(client => client.category === 'corporate')
                .map((client) => (
                  <div 
                    key={client.id}
                    className="group relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="relative h-24 flex items-center justify-center">
                      {/* Logo con efecto grayscale a color */}
                      <div className="relative w-full h-full flex items-center justify-center">
                        <Image
                          src={client.logo}
                          alt={`Logo ${client.name}`}
                          width={client.width}
                          height={client.height}
                          className="object-contain opacity-70 group-hover:opacity-100 transition-all duration-500 filter grayscale group-hover:grayscale-0"
                        />
                      </div>
                      
                      {/* Badge de categoría */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">
                        ✓
                      </div>
                    </div>
                    
                    <div className="text-center mt-4">
                      <div className="text-sm text-gray-500 font-medium">
                        {client.name}
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        Cliente corporativo
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Categoría: Entretenimiento y Turismo */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                <FaHotel className="text-blue-600 text-xl" />
              </div>
              <h3 className="font-oswald font-bold text-2xl text-gray-900">
                Entretenimiento y Turismo
              </h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {clients
                .filter(client => client.category === 'entertainment')
                .map((client) => (
                  <div 
                    key={client.id}
                    className="group relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-200 transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="relative h-24 flex items-center justify-center">
                      <Image
                        src={client.logo}
                        alt={`Logo ${client.name}`}
                        width={client.width}
                        height={client.height}
                        className="object-contain opacity-70 group-hover:opacity-100 transition-all duration-500 filter grayscale group-hover:grayscale-0"
                      />
                    </div>
                    
                    <div className="text-center mt-4">
                      <div className="text-sm text-gray-500 font-medium">
                        {client.name}
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        Alta exigencia ambiental
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Categoría: Educación */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                <FaUniversity className="text-green-600 text-xl" />
              </div>
              <h3 className="font-oswald font-bold text-2xl text-gray-900">
                Educación
              </h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {clients
                .filter(client => client.category === 'education')
                .map((client) => (
                  <div 
                    key={client.id}
                    className="group relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-green-200 transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="relative h-24 flex items-center justify-center">
                      <Image
                        src={client.logo}
                        alt={`Logo ${client.name}`}
                        width={client.width}
                        height={client.height}
                        className="object-contain opacity-70 group-hover:opacity-100 transition-all duration-500 filter grayscale group-hover:grayscale-0"
                      />
                    </div>
                    
                    <div className="text-center mt-4">
                      <div className="text-sm text-gray-500 font-medium">
                        {client.name}
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        Uso intensivo diario
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Caso de Éxito Destacado */}
        {/* Caso de Éxito Destacado - VERSIÓN CON IMAGEN */}
<div className="mb-20">
  <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl overflow-hidden shadow-2xl">
    <div className="grid grid-cols-1 lg:grid-cols-12">
      {/* Columna 1: Header del caso - REDUCIDA */}
      <div className="lg:col-span-3 p-8 bg-gradient-to-br from-brand-red to-red-800 text-white">
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
              <FaTrophy className="text-white text-2xl" />
            </div>
            <div>
              <span className="text-sm font-bold uppercase tracking-wider">CASO DE ÉXITO</span>
              <h3 className="font-oswald font-bold text-2xl">Hotel Resort</h3>
            </div>
          </div>
          
          <div className="mb-6 flex-grow">
            <div className="text-5xl font-bold mb-2">{successCase.years}+</div>
            <div className="text-white/80">años sin corrosión</div>
            <div className="mt-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.2 6.5 10.266a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Ambiente marino extremo</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3 pt-4 border-t border-white/20">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <FaCheckCircle className="text-white" />
            </div>
            <div>
              <div className="font-bold text-lg">{successCase.client}</div>
              <div className="text-white/80 text-sm">{successCase.group}</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Columna 2: IMAGEN REAL de la instalación - AQUÍ VA TU IMAGEN */}
      <div className="lg:col-span-4 relative min-h-[300px] md:min-h-[400px]">
        <Image
          src="/images/clients/caso-exito/nickelodeon-instalacion.jpg"
          alt={`Lockers JGA instalados en ${successCase.client} - Resistencia a humedad extrema`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
        {/* Overlay informativo */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            <span className="font-bold">Zona de albercas - Humedad 90%</span>
          </div>
          <p className="text-sm opacity-90 mt-1">Lockers de PVC alta densidad + pintura epóxica marina</p>
        </div>
        {/* Badge de éxito */}
        <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
          ÉXITO TOTAL
        </div>
      </div>
      
      {/* Columna 3: Detalles del caso */}
      <div className="lg:col-span-5 p-8 lg:p-12">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <span className="text-brand-red font-bold text-lg">?</span>
            </div>
            <h4 className="font-oswald font-bold text-xl text-white">El Reto</h4>
          </div>
          <p className="text-gray-300">
            {successCase.challenge}
          </p>
        </div>
        
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-blue-600 font-bold text-lg">✓</span>
            </div>
            <h4 className="font-oswald font-bold text-xl text-white">Nuestra Solución</h4>
          </div>
          <p className="text-gray-300">
            {successCase.solution}
          </p>
        </div>
        
        <div className="pt-6 border-t border-gray-700">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <FaCheckCircle className="text-green-600" />
            </div>
            <h4 className="font-oswald font-bold text-xl text-white">El Resultado</h4>
          </div>
          <div className="bg-green-900/30 border border-green-700 rounded-2xl p-6">
            <p className="text-white font-medium">
              {successCase.result}
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <span className="px-3 py-2 bg-green-800 text-green-100 text-sm font-bold rounded-lg flex items-center gap-2">
                <FaCheckCircle />
                CORROSIÓN: 0%
              </span>
              <span className="px-3 py-2 bg-green-800 text-green-100 text-sm font-bold rounded-lg flex items-center gap-2">
                <FaCheckCircle />
                MANTENIMIENTO: 0%
              </span>
              <span className="px-3 py-2 bg-green-800 text-green-100 text-sm font-bold rounded-lg flex items-center gap-2">
                <FaCheckCircle />
                SATISFACCIÓN: 100%
              </span>
            </div>
            
            {/* Testimonio breve */}
            <div className="mt-6 pt-6 border-t border-green-800">
              <p className="text-green-200 text-sm italic">
                "Los únicos lockers que han resistido 3 años en nuestra zona de albercas sin mostrar signos de oxidación."
              </p>
              <div className="text-green-300 text-xs mt-2 font-bold">
                — Gerente de Mantenimiento, {successCase.client}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        {/* Estadísticas de Impacto */}
        <div className="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-8 md:p-12 border border-gray-200">
          <div className="text-center mb-12">
            <h3 className="font-oswald font-bold text-3xl text-black mb-4">
              IMPACTO <span className="text-brand-red">REAL</span>, NÚMEROS <span className="text-brand-red">REALES</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              No son promesas de marketing. Son resultados medibles que hemos entregado a lo largo de 20+ años.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div 
                key={stat.id}
                className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 ${stat.color.replace('text-', 'bg-')} bg-opacity-10 rounded-xl flex items-center justify-center`}>
                    <stat.icon className={`${stat.color} text-2xl`} />
                  </div>
                  <div className="text-right">
                    <div className="text-4xl md:text-5xl font-bold text-black group-hover:scale-105 transition-transform">
                      {stat.value}
                    </div>
                  </div>
                </div>
                
                <h4 className="font-oswald font-bold text-xl text-black mb-2">
                  {stat.label}
                </h4>
                
                <p className="text-gray-500 text-sm">
                  {stat.id === 1 && "Instalaciones activas en plantas, escuelas y corporativos"}
                  {stat.id === 2 && "Cobertura nacional con instalación y servicio técnico"}
                  {stat.id === 3 && "Desde 2004, cero fallas estructurales en nuestros lockers"}
                </p>
              </div>
            ))}
          </div>
          
          {/* Nota al pie */}
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-500 text-sm">
              <span className="font-bold text-black">¿Por qué estos números importan?</span> Porque cuando compras a un fabricante real, 
              obtienes durabilidad real. No revendedores, no intermediarios, solo calidad industrial probada.
            </p>
          </div>
        </div>

        {/* CTA Final */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-gradient-to-r from-black to-gray-900 text-white rounded-2xl px-8 py-4 mb-8">
            <div className="flex items-center gap-3">
              <FaShieldAlt className="text-brand-red" />
              <span className="font-bold">¿Listo para ser nuestro próximo caso de éxito?</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5215518246146?text=Hola%20Lockers%20JGA,%20vi%20sus%20casos%20de%20éxito%20y%20quiero%20cotizar%20para%20mi%20empresa"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-red hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg transition-colors flex items-center gap-3 justify-center"
            >
              <FaCheckCircle />
              COTIZAR PARA MI EMPRESA
            </a>
            
            <button
  onClick={() => {
    if (window.confirm("Actualmente estamos actualizando nuestros casos de éxito más recientes.\n\n¿Te gustaría conocer nuestra historia completa, ver fotos reales de nuestra fábrica y entender por qué más de 500 clientes confían en nosotros?")) {
      window.location.href = "/nosotros";
    }
  }}
  className="border-2 border-black hover:border-brand-red text-black hover:text-brand-red font-bold px-8 py-4 rounded-lg transition-colors flex items-center gap-3 justify-center group"
>
  <FaIndustry className="group-hover:scale-110 transition-transform" />
  CONOCER AL FABRICANTE
</button>
          </div>
        </div>
      </div>

      {/* Línea divisoria inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
    </section>
  );
};

export default ClientsSection;