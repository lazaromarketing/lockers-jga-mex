'use client';

import { FaTruck, FaShieldAlt, FaClock, FaMapMarkerAlt, FaCheckCircle, FaHandshake } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

import Image from 'next/image';

export default function LogisticsSection() {
  // SEO: Ciudades clave para posicionamiento local
  const cities = [
    'CDMX y Área Metropolitana (Entrega Propia)',
    'Monterrey, Nuevo León',
    'Guadalajara, Jalisco',
    'Querétaro, Qro',
    'Puebla, Pue',
    'Tijuana, Baja California',
    'Cancún y Riviera Maya (Ideal PVC)'
  ];

  return (
    <section className="bg-black text-white py-16 md:py-20 px-4 md:px-8 overflow-hidden" id="envios">
      <div className="max-w-7xl mx-auto">
        
        {/* ENCABEZADO SEO */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-brand-red/20 text-brand-red text-sm font-bold uppercase tracking-wider mb-4 border border-brand-red/30">
            Logística Nacional Segura
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 uppercase">
            ENVÍOS DE LOCKERS A <span className="text-brand-red">TODO MÉXICO</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-light">
            Desde una pieza hasta proyectos completos. Contamos con <span className="text-white font-bold">flota propia en CDMX</span> y alianza estratégica con <span className="text-brand-red font-bold">Castores</span> para el resto del país.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* COLUMNA IZQUIERDA: Mapa Visual + Pilares */}
          <div className="space-y-10">
            
            {/* Mapa Interactivo Visual */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-gray-800 group shadow-2xl shadow-brand-red/10">
              <div className="relative h-80 md:h-96 w-full bg-gray-900">
                {/* Imagen del mapa (Asegúrate que exista o usa un placeholder oscuro) */}
                <Image
                  src="/images/logistics/mapa-mexico-estilizado.jpg"
                  alt="Cobertura de envíos de lockers en México"
                  fill
                  className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Overlay Gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                
                {/* Puntos de cobertura (Animados) */}
                <div className="absolute top-[45%] left-[48%] animate-pulse z-10">
                  <div className="relative group/point">
                    <div className="w-6 h-6 bg-brand-red rounded-full border-4 border-black shadow-[0_0_15px_rgba(220,38,38,0.8)]"></div>
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold px-3 py-1 rounded shadow-lg whitespace-nowrap opacity-0 group-hover/point:opacity-100 transition-opacity">
                      FÁBRICA (EdoMex)
                    </div>
                  </div>
                </div>

                {/* Puntos secundarios */}
                {[
                  { top: '30%', left: '40%', label: 'MTY' }, // Monterrey
                  { top: '50%', left: '40%', label: 'GDL' }, // Guadalajara
                  { top: '45%', left: '80%', label: 'CANCÚN' }, // Cancún
                  { top: '20%', left: '15%', label: 'TJ' }, // Tijuana
                ].map((point, i) => (
                  <div key={i} className="absolute w-3 h-3 bg-white rounded-full animate-pulse" style={{ top: point.top, left: point.left, animationDelay: `${i * 0.5}s` }}></div>
                ))}

              </div>
              
              {/* Leyenda Flotante */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/90 backdrop-blur-md px-4 py-3 rounded-xl border border-gray-700 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-brand-red rounded-full animate-pulse"></div>
                  <span className="text-xs font-bold uppercase text-gray-300">Cobertura Total</span>
                </div>
                <div className="text-xs text-gray-400">32 Estados</div>
              </div>
            </div>

            {/* 3 Pilares de Logística */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Pilar 1 */}
              <div className="bg-gray-900 p-5 rounded-xl border border-gray-800 hover:border-brand-red transition-colors group">
                <FaTruck className="text-3xl text-brand-red mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-lg mb-1">Flota Propia</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Entregas directas sin costo extra en CDMX y Zona Metropolitana.
                </p>
              </div>

              {/* Pilar 2 */}
              <div className="bg-gray-900 p-5 rounded-xl border border-gray-800 hover:border-brand-red transition-colors group">
                <FaHandshake className="text-3xl text-brand-red mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-lg mb-1">Red Castores</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Tarifas preferenciales y rastreo 24/7 para envíos foráneos.
                </p>
              </div>

              {/* Pilar 3 */}
              <div className="bg-gray-900 p-5 rounded-xl border border-gray-800 hover:border-brand-red transition-colors group">
                <FaShieldAlt className="text-3xl text-brand-red mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-lg mb-1">Embalaje Pro</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Cartón corrugado y playo industrial. Tu locker llega intacto.
                </p>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: Lista SEO + Calculadora */}
          <div className="space-y-8 flex flex-col justify-center">
            
            {/* Lista de Ciudades (SEO LOCAL) */}
            <div className="bg-gray-900/80 p-8 rounded-2xl border border-gray-800">
              <h3 className="font-heading text-2xl font-bold mb-6 flex items-center gap-3">
                <FaMapMarkerAlt className="text-brand-red" />
                RUTAS FRECUENTES
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                {cities.map((city, index) => (
                  <div key={index} className="flex items-start gap-2 text-sm text-gray-300">
                    <FaCheckCircle className="text-brand-red mt-1 shrink-0" />
                    <span>{city}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-700 text-xs text-gray-500">
                *Tiempos de entrega: 2-5 días hábiles dependiendo la zona (Sujeto a existencias).
              </div>
            </div>

            {/* CTA / Calculadora de Flete */}
            <div className="bg-gradient-to-br from-brand-red to-red-900 p-8 rounded-2xl shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
              
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-2 relative z-10">
                ¿CUÁNTO CUESTA EL ENVÍO?
              </h3>
              <p className="text-red-100 mb-6 relative z-10">
                Ingresa tu Código Postal y recibe una cotización exacta en minutos vía WhatsApp.
              </p>
              
              <div className="relative z-10">
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    const input = e.currentTarget.querySelector('input[type="text"]') as HTMLInputElement;
                    const zipCode = input.value;
                    
                    if (zipCode.length === 5 && /^\d{5}$/.test(zipCode)) {
                      const message = `Hola JGA, quiero cotizar el envío de lockers al Código Postal: ${zipCode}. ¿Me pueden dar precio?`;
                      const whatsappUrl = `https://wa.me/525518246146?text=${encodeURIComponent(message)}`;
                      window.open(whatsappUrl, '_blank');
                    } else {
                      alert('Por favor ingresa un código postal válido de 5 dígitos.');
                    }
                  }} 
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <input
                    type="text"
                    placeholder="Tu Código Postal (Ej: 06600)"
                    className="flex-1 px-5 py-4 rounded-xl bg-white text-gray-900 font-bold placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-red-400 text-lg shadow-inner"
                    maxLength={5}
                    pattern="\d{5}"
                    required
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 bg-black text-white font-bold rounded-xl hover:bg-gray-900 transition-all text-lg shadow-lg flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    <FaWhatsapp className="text-xl text-green-400" />
                    COTIZAR
                  </button>
                </form>
                <p className="text-xs text-red-200 mt-3 font-medium text-center sm:text-left">
                  Respuesta inmediata con costo desglosado.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}