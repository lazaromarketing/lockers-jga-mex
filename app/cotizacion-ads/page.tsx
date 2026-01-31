"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // 👈 1. IMPORTANTE: Para la redirección
import Image from 'next/image';
import { 
  FaWhatsapp, FaCheckCircle, FaIndustry, FaShieldAlt, 
  FaTruck, FaClock, FaStar, FaBiohazard, FaTint, FaUserShield 
} from 'react-icons/fa';

export default function CotizacionAdsPage() {
  const router = useRouter(); // 👈 2. INICIALIZAR ROUTER
  
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    whatsapp: '',
    tipoLocker: 'PVC Aséptico Indestructible',
    cantidad: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // FUNCIÓN PARA REGISTRAR CONVERSIÓN EN GOOGLE ADS
  const trackConversion = (label: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': `AW-11529534054/${label}`, 
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Rastreo de conversión
    trackConversion('TU_ETIQUETA_FORM');

    const nTelefono = "525518246146";
    const mensajeWA = `🔥 COTIZACIÓN PRIORITARIA PVC - Google Ads:
*Nombre:* ${formData.nombre}
*Empresa:* ${formData.empresa}
*WhatsApp:* ${formData.whatsapp}
*Producto:* ${formData.tipoLocker}
*Cantidad:* ${formData.cantidad}

Solicito presupuesto para proyecto de alta durabilidad.`;

    const url = `https://wa.me/${nTelefono}?text=${encodeURIComponent(mensajeWA)}`;
    
    // Abrir WhatsApp en otra pestaña
    window.open(url, '_blank');

    // 👇 3. REDIRECCIÓN A TU PÁGINA DE GRACIAS (Aquí estaba el cambio)
    setTimeout(() => {
      router.push('/cotizacion-ads/gracias-ads'); 
    }, 1500); // Esperamos 1.5 segs para que no bloquee el popup de WhatsApp
  };

  const whatsappDirecto = () => {
    trackConversion('TU_ETIQUETA_WA');
    const mensaje = "Hola JGA México, busco los lockers de PVC Premium que vi en Google. ¿Me pueden asesorar?";
    window.open(`https://wa.me/525518246146?text=${encodeURIComponent(mensaje)}`, '_blank');
    
    // Opcional: También redirigir si dan clic al botón directo
    // setTimeout(() => router.push('/cotizacion-ads/gracias-ads'), 1500);
  };

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">
      
      {/* SECCIÓN 1: HERO - CONVERSION FOCUS */}
      <section className="relative bg-[#0a0a0a] text-white pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="inline-flex items-center bg-brand-red/20 border border-brand-red/50 text-brand-red px-4 py-1.5 rounded-full mb-6">
                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">Fabricantes Directos | Envío a todo México</span>
              </div>
              
              <h1 className="font-oswald text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
                LOCKERS DE <span className="text-brand-red">PVC</span> <br />
                <span className="text-white uppercase">El fin del óxido</span>
              </h1>
              
              <p className="text-lg md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 font-light">
                La solución definitiva para <span className="text-white font-bold italic underline decoration-brand-red">entornos húmedos y asépticos</span>. 100% resistentes a químicos, agua y bacterias.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                <div className="flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg">
                  <FaTint className="text-blue-400" />
                  <span className="text-sm font-bold">100% Impermeables</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg">
                  <FaBiohazard className="text-green-400" />
                  <span className="text-sm font-bold">Grado Hospitalario</span>
                </div>
              </div>

              <button onClick={whatsappDirecto} className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-black py-5 px-10 rounded-2xl text-xl flex items-center justify-center transition-all shadow-2xl uppercase font-oswald active:scale-95">
                <FaWhatsapp className="text-3xl mr-3" /> ¡Cotizar por WhatsApp!
              </button>
            </div>

            {/* FORMULARIO ADS */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-6 md:p-8 border-t-[10px] border-brand-red">
                <h2 className="font-oswald text-3xl font-bold text-black text-center uppercase mb-1">Cotización Express</h2>
                <p className="text-center text-gray-500 text-sm mb-6 font-bold uppercase tracking-widest">Respuesta en menos de 2 horas</p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required placeholder="Nombre Completo *" className="w-full px-4 py-4 border-2 border-gray-100 rounded-xl bg-gray-50 text-black outline-none focus:border-brand-red transition-all" />
                  <input type="text" name="empresa" value={formData.empresa} onChange={handleChange} required placeholder="Empresa / Institución *" className="w-full px-4 py-4 border-2 border-gray-100 rounded-xl bg-gray-50 text-black outline-none focus:border-brand-red transition-all" />
                  <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} required placeholder="WhatsApp de Contacto *" className="w-full px-4 py-4 border-2 border-gray-100 rounded-xl bg-gray-50 text-black outline-none focus:border-brand-red transition-all" />
                  
                  <select name="tipoLocker" value={formData.tipoLocker} onChange={handleChange} className="w-full px-4 py-4 border-2 border-gray-100 rounded-xl bg-gray-50 text-black outline-none focus:border-brand-red transition-all">
                    <option value="PVC Aséptico Indestructible">PVC Premium (Altamente Recomendado)</option>
                    <option value="Acero Industrial">Acero Industrial Reforzado</option>
                    <option value="Modulo Celulares">Módulos para Celulares</option>
                  </select>

                  <select name="cantidad" value={formData.cantidad} onChange={handleChange} required className="w-full px-4 py-4 border-2 border-gray-100 rounded-xl bg-gray-50 text-black outline-none focus:border-brand-red transition-all">
                    <option value="">Cantidad de puertas aproximadas *</option>
                    <option value="1-20">1 a 20 puertas</option>
                    <option value="21-100">21 a 100 puertas</option>
                    <option value="100+">Más de 100 puertas</option>
                  </select>

                  <button type="submit" disabled={isSubmitting} className="w-full bg-brand-red hover:bg-red-700 text-white font-black py-5 rounded-2xl text-xl uppercase font-oswald shadow-lg transition-all active:scale-95">
                    {isSubmitting ? 'Redirigiendo...' : 'Obtener mi Presupuesto'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: LOGOS DE AUTORIDAD */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-400 text-[10px] font-black uppercase tracking-[0.4em] mb-8">Equipando a los mejores:</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="relative w-24 h-12">
              <Image 
                src="/images/clients/corporativos/bmw.png" 
                alt="Cliente Corporativo BMW confía en Lockers JGA" 
                fill 
                className="object-contain"
                sizes="(max-width: 768px) 100px, 150px"
              />
            </div>
            <div className="relative w-32 h-12">
              <Image 
                src="/images/clients/corporativos/banco-santander.png" 
                alt="Banco Santander cliente de Lockers JGA México" 
                fill 
                className="object-contain"
                sizes="(max-width: 768px) 120px, 180px"
              />
            </div>
            <div className="relative w-28 h-16">
              <Image 
                src="/images/clients/entretenimiento/hotel-nickelodeon.png" 
                alt="Hotel Nickelodeon equipado por Lockers JGA" 
                fill 
                className="object-contain"
                sizes="(max-width: 768px) 100px, 150px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: GALERÍA DE PRODUCTO */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase text-black">Máxima <span className="text-brand-red">Resistencia</span></h2>
            <p className="text-gray-500 font-medium mt-4">Nuestra línea de producción directa en México garantiza calidad industrial.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* CARD 1 */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 transition-all hover:-translate-y-2">
              <div className="relative w-full h-64">
                <Image 
                  src="/images/categories/plastico.jpg" 
                  alt="Locker de PVC 100% plástico aséptico"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <span className="text-brand-red font-bold text-xs tracking-tighter uppercase">Especialidad</span>
                <h3 className="font-bold text-xl text-black">Lockers PVC 16mm</h3>
                <p className="text-sm text-gray-500 mt-2 italic">A prueba de albercas, químicos y alta humedad.</p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 transition-all hover:-translate-y-2">
              <div className="relative w-full h-64">
                <Image 
                  src="/images/products/modulo-celulares.jpg" 
                  alt="Módulo de lockers pequeños para celulares"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <span className="text-brand-red font-bold text-xs tracking-tighter uppercase">Tecnología</span>
                <h3 className="font-bold text-xl text-black">Módulos de Celulares</h3>
                <p className="text-sm text-gray-500 mt-2 italic">Control total de dispositivos en zona de trabajo.</p>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 transition-all hover:-translate-y-2">
              <div className="relative w-full h-64">
                <Image 
                  src="/images/products/puerta-doble.jpg" 
                  alt="Locker de acero industrial reforzado"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <span className="text-brand-red font-bold text-xs tracking-tighter uppercase">Industrial</span>
                <h3 className="font-bold text-xl text-black">Acero Reforzado</h3>
                <p className="text-sm text-gray-500 mt-2 italic">Calibre 24 con pintura horneada de alta durabilidad.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: COMPARATIVA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-oswald text-3xl md:text-4xl font-bold text-center mb-12 uppercase text-black">JGA México vs <span className="text-gray-400">Importados</span></h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg border-l-8 border-brand-red">
              <h3 className="font-bold text-brand-red text-2xl mb-6">Fabricación JGA</h3>
              <ul className="space-y-4">
                <li className="flex items-start"><FaCheckCircle className="text-green-500 mt-1 mr-3 shrink-0" /><span className="text-sm font-bold text-gray-700">Ahorro del 40% al ser fabricante</span></li>
                <li className="flex items-start"><FaCheckCircle className="text-green-500 mt-1 mr-3 shrink-0" /><span className="text-sm font-bold text-gray-700">PVC Industrial de 16mm real</span></li>
                <li className="flex items-start"><FaCheckCircle className="text-green-500 mt-1 mr-3 shrink-0" /><span className="text-sm font-bold text-gray-700">Garantía estructural de 5 años</span></li>
                <li className="flex items-start"><FaCheckCircle className="text-green-500 mt-1 mr-3 shrink-0" /><span className="text-sm font-bold text-gray-700">Instalación profesional certificada</span></li>
              </ul>
            </div>
            <div className="bg-gray-200/50 p-8 rounded-3xl border-l-8 border-gray-400 opacity-60">
              <h3 className="font-bold text-gray-500 text-2xl mb-6">Revendedores</h3>
              <ul className="space-y-4">
                <li className="flex items-start text-gray-500 text-sm font-medium"><span className="mr-3 font-black">X</span> Sobreprecio por intermediarios</li>
                <li className="flex items-start text-gray-500 text-sm font-medium"><span className="mr-3 font-black">X</span> Tiempos de entrega de 30 a 60 días</li>
                <li className="flex items-start text-gray-500 text-sm font-medium"><span className="mr-3 font-black">X</span> Garantías limitadas y lentas</li>
                <li className="flex items-start text-gray-500 text-sm font-medium"><span className="mr-3 font-black">X</span> Sin servicio técnico local</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 5: CASOS DE USO */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-oswald text-4xl font-bold mb-12 uppercase text-black">Soluciones Especializadas</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {[
              { icon: <FaShieldAlt />, label: "Hospitales", sub: "Material Aséptico" },
              { icon: <FaIndustry />, label: "Fábricas", sub: "Uso Pesado" },
              { icon: <FaUserShield />, label: "Gimnasios", sub: "Resistencia Agua" },
              { icon: <FaClock />, label: "Escuelas", sub: "Seguridad Reforzada" }
            ].map((item, i) => (
              <div key={i} className="p-6 border border-gray-100 rounded-2xl bg-gray-50 hover:border-brand-red transition-all">
                <div className="text-brand-red text-3xl mb-3 flex justify-center">{item.icon}</div>
                <p className="font-bold text-black text-sm md:text-base">{item.label}</p>
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 6: CTA FINAL */}
      <section className="py-24 bg-brand-red relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-oswald text-4xl md:text-7xl font-bold text-white mb-8 uppercase italic leading-none">¿Licitación o Proyecto Urgente?</h2>
          <p className="text-white text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-medium opacity-90">
            Tenemos la capacidad de fabricar y entregar en tiempos récord. Habla hoy mismo con nuestro director de ventas.
          </p>
          <button onClick={whatsappDirecto} className="bg-white text-brand-red hover:bg-gray-100 font-black py-6 px-12 rounded-3xl text-2xl inline-flex items-center transition-all shadow-2xl active:scale-95 uppercase font-oswald">
            <FaWhatsapp className="text-4xl mr-4 text-green-500" /> ¡Contactar vía WhatsApp!
          </button>
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white font-black uppercase text-xs tracking-[0.2em]">
            <div className="flex items-center"><FaCheckCircle className="mr-2" /> Precios + IVA</div>
            <div className="flex items-center"><FaCheckCircle className="mr-2" /> Facturamos hoy</div>
            <div className="flex items-center"><FaCheckCircle className="mr-2" /> Envío Nacional</div>
          </div>
        </div>
      </section>

      <footer className="bg-black py-12 text-center">
        <p className="font-oswald text-white text-xl tracking-widest uppercase">JGA MÉXICO</p>
        <p className="text-gray-500 text-xs mt-4">Chicoloapan, Estado de México | Tel: 55 1824 6146</p>
      </footer>
    </main>
  );
}