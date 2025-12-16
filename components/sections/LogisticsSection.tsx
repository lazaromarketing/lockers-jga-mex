'use client';

import { FaTruck, FaShieldAlt, FaClock, FaMapMarkerAlt, FaCheckCircle, FaHandshake } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

import Image from 'next/image';

export default function LogisticsSection() {
  const cities = [
    'CDMX y Área Metropolitana',
    'Monterrey, NL',
    'Guadalajara, JAL',
    'Querétaro, QRO',
    'Puebla, PUE',
    'Tijuana, BC',
    'Cancún, QROO'
  ];

  return (
    <section className="bg-black text-white py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            TU PROYECTO SEGURO, <span className="text-brand-red">ESTÉS DONDE ESTÉS</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            Contamos con <span className="text-white font-bold">logística propia en CDMX y Área Metropolitana</span>. 
            Para el resto del país, viajamos con la seguridad de <span className="text-brand-red font-bold">Castores</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Columna izquierda: Mapa + Pilares */}
          <div className="space-y-10">
            
            {/* Mapa con imagen (Ruta conservada) */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-gray-800 group">
              <div className="relative h-80 md:h-96 w-full">
                <Image
                  src="/images/logistics/mapa-mexico-estilizado.jpg"
                  alt="Mapa de México - Cobertura nacional JGA Lockers"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                {/* Overlay para mejor contraste */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Puntos interactivos */}
                <div className="absolute top-1/4 left-1/3 animate-pulse">
                  <div className="relative">
                    <div className="w-6 h-6 bg-brand-red rounded-full border-2 border-white"></div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-black/80 px-3 py-1 rounded-lg text-sm font-bold border border-brand-red">
                      CDMX (Propia)
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-1/3 right-1/4 animate-pulse" style={{animationDelay: '0.5s'}}>
                  <div className="relative">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
                
                <div className="absolute bottom-1/3 left-1/3 animate-pulse" style={{animationDelay: '1s'}}>
                  <div className="relative">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
              
              {/* Leyenda */}
              <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-brand-red rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Envíos a los 32 estados</span>
                </div>
              </div>
            </div>

            {/* 3 Pilares de Logística */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Pilar 1 - Logística Propia (Imagen conservada) */}
              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-brand-red/50 transition-all duration-300 hover:transform hover:-translate-y-1">
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-brand-red/20 p-3 rounded-xl">
                      <FaTruck className="text-2xl text-brand-red" />
                    </div>
                    <h3 className="font-heading text-xl font-bold">Flota Propia</h3>
                  </div>
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <Image
                      src="/images/logistics/camion-logistica.jpg"
                      alt="Camiones propios JGA en CDMX"
                      width={300}
                      height={200}
                      className="w-full h-32 object-cover"
                    />
                  </div>
                  <p className="text-gray-300 flex-grow">
                    En <strong>CDMX y Zona Metropolitana</strong> entregamos con unidades y personal propio de JGA.
                  </p>
                </div>
              </div>

              {/* Pilar 2 - Alianza Castores (Imagen conservada) */}
              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-brand-red/50 transition-all duration-300 hover:transform hover:-translate-y-1">
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-brand-red/20 p-3 rounded-xl">
                      <FaHandshake className="text-2xl text-brand-red" />
                    </div>
                    <h3 className="font-heading text-xl font-bold">Alianza Castores</h3>
                  </div>
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <Image
                      src="/images/logistics/seguro-envios.jpg"
                      alt="Envios nacionales por Castores"
                      width={300}
                      height={200}
                      className="w-full h-32 object-cover"
                    />
                  </div>
                  <p className="text-gray-300 flex-grow">
                    Para envíos foráneos, usamos la red de <strong>Transportes Castores</strong> para asegurar tu carga.
                  </p>
                </div>
              </div>

              {/* Pilar 3 - Embalaje (Imagen conservada) */}
              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-brand-red/50 transition-all duration-300 hover:transform hover:-translate-y-1">
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-brand-red/20 p-3 rounded-xl">
                      <FaShieldAlt className="text-2xl text-brand-red" />
                    </div>
                    <h3 className="font-heading text-xl font-bold">Embalaje Seguro</h3>
                  </div>
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <Image
                      src="/images/logistics/embalaje-industrial.jpg"
                      alt="Embalaje industrial anti-golpes"
                      width={300}
                      height={200}
                      className="w-full h-32 object-cover"
                    />
                  </div>
                  <p className="text-gray-300 flex-grow">
                    Cartón corrugado y esquineros. Tu inversión llega intacta, cotizando el flete exacto a tu ubicación.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha: Ciudades + CTA */}
          <div className="space-y-10">
            
            {/* Lista de ciudades SEO */}
            <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-brand-red/20 p-3 rounded-xl">
                  <FaMapMarkerAlt className="text-2xl text-brand-red" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold mb-2">
                    Cobertura Nacional
                  </h3>
                  <p className="text-gray-300">
                    Cotizamos el envío según tu código postal exacto.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {cities.map((city, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-4 p-3 rounded-lg bg-black/30 hover:bg-black/50 transition-colors"
                  >
                    <div className="flex-shrink-0">
                      <FaCheckCircle className="text-brand-red text-lg" />
                    </div>
                    <span className="text-lg font-medium">{city}</span>
                  </div>
                ))}
              </div>
              
              <div className="p-4 bg-gradient-to-r from-black/60 to-gray-900/60 rounded-xl border border-gray-700">
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <FaTruck className="text-brand-red text-xl" />
                  </div>
                  <div>
                    <p className="font-bold text-lg mb-1">Flexibilidad en Envíos</p>
                    <p className="text-gray-300 text-sm">
                      <span className="text-brand-red font-bold">Propia:</span> Entregas directas en el centro del país.<br/>
                      <span className="text-brand-red font-bold">Foránea:</span> Tarifas preferenciales vía Castores.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Final */}
            <div className="text-center bg-gradient-to-br from-gray-900 via-black to-gray-900 p-8 md:p-10 rounded-2xl border-2 border-gray-800 shadow-2xl">
              <div className="mb-6">
                <h3 className="font-heading text-2xl md:text-3xl font-bold mb-3">
                  COTIZA TU FLETE AHORA
                </h3>
                <p className="text-gray-300 text-lg">
                  Calculamos el costo exacto a tu ubicación.
                </p>
              </div>
              
              <div className="max-w-md mx-auto">
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    const input = e.currentTarget.querySelector('input[type="text"]') as HTMLInputElement;
                    const zipCode = input.value;
                    
                    if (zipCode.length === 5 && /^\d{5}$/.test(zipCode)) {
                      const message = `Hola JGA México, quiero cotizar el flete a mi código postal: ${zipCode}. ¿Me pueden indicar costo y paquetería (Propia o Castores)?`;
                      const whatsappUrl = `https://wa.me/525518246146?text=${encodeURIComponent(message)}`;
                      window.open(whatsappUrl, '_blank');
                    } else {
                      alert('Por favor ingresa un código postal válido de 5 dígitos.');
                    }
                  }} 
                  className="space-y-4"
                >
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="text"
                      placeholder="Ingresa tu Código Postal"
                      className="flex-1 px-5 py-4 rounded-xl bg-gray-800 border-2 border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 text-lg"
                      maxLength={5}
                      pattern="\d{5}"
                      title="Código postal de 5 dígitos"
                      required
                    />
                    <button
                      type="submit"
                      className="px-8 py-4 bg-gradient-to-r from-brand-red to-red-700 text-white font-bold rounded-xl hover:from-red-700 hover:to-brand-red transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:transform hover:-translate-y-1 flex items-center gap-2 justify-center"
                    >
                      <FaWhatsapp className="text-xl" />
                      COTIZAR
                    </button>
                  </div>
                  <p className="text-gray-400 text-sm pt-2">
                    <span className="text-brand-red font-bold">Respuesta rápida</span> con costo de flete desglosado.
                  </p>
                </form>
              </div>
              
              {/* Garantía adicional */}
              <div className="mt-8 pt-6 border-t border-gray-800">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-gray-400">
                  <div className="flex items-center justify-center gap-2">
                    <FaShieldAlt className="text-brand-red text-lg" />
                    <span className="font-medium">Envío asegurado</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <FaTruck className="text-brand-red text-lg" />
                    <span className="font-medium">Rastreo Castores</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <FaClock className="text-brand-red text-lg" />
                    <span className="font-medium">Entrega a domicilio</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}