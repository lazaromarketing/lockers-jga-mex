"use client";

import { useState } from 'react';
import { FaWhatsapp, FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt, FaBuilding, FaTruck, FaFileInvoiceDollar, FaBoxOpen } from 'react-icons/fa';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    industria: '',
    cantidadPuertas: '',
    tienePlanos: '',
    mensaje: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    alert('¡Gracias! Hemos recibido tu solicitud. Te contactaremos en menos de 2 horas.');
    // Reset form
    setFormData({
      nombre: '',
      empresa: '',
      email: '',
      telefono: '',
      industria: '',
      cantidadPuertas: '',
      tienePlanos: '',
      mensaje: ''
    });
  };

  const getWhatsAppMessage = () => {
    const message = `Hola JGA México, vengo de la web y quiero cotizar:\n\n*Nombre:* ${formData.nombre || 'No especificado'}\n*Empresa:* ${formData.empresa || 'No especificado'}\n*Industria:* ${formData.industria || 'No especificado'}\n*Cantidad aproximada:* ${formData.cantidadPuertas || 'No especificado'}`;
    return encodeURIComponent(message);
  };

  return (
    <main className="min-h-screen bg-brand-black">
      {/* SECCIÓN 1: HEADER "SIN ESPERAS" */}
      <section className="relative bg-brand-black text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute top-10 right-10">
          <div className="flex items-center animate-pulse">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span className="text-sm font-semibold text-green-400">Asesores Conectados Ahora</span>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-brand-red/20 border border-brand-red/50 rounded-full mb-8">
              <span className="font-oswald uppercase tracking-widest text-brand-red text-sm">Sin Intermediarios</span>
            </div>
            
            <h1 className="font-oswald text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              ¿TIENES UN PROYECTO?<br />
              <span className="text-brand-red">COTIZAMOS EN MENOS DE 2 HORAS</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Atención directa de fábrica. Sin burocracia, sin intermediarios.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-brand-red rounded-full mr-2"></div>
                Respuesta en minutos, no en días
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-brand-red rounded-full mr-2"></div>
                Ingenieros, no vendedores
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-brand-red rounded-full mr-2"></div>
                Precios directos de fábrica
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: GRID DE CONTACTO */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* COLUMNA IZQUIERDA: CONTACTO DIRECTO */}
            <div>
              <h2 className="font-oswald text-3xl font-bold mb-8 text-brand-black">
                CONTACTO <span className="text-brand-red">DIRECTO</span>
              </h2>
              
              {/* WhatsApp Gigante */}
              <a 
                href={`https://wa.me/525518246146?text=${getWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-green-600 hover:bg-green-700 text-white p-6 rounded-lg mb-8 transition-all duration-300 transform hover:scale-[1.02] text-center group"
              >
                <div className="flex flex-col items-center">
                  <FaWhatsapp className="text-5xl mb-4 animate-bounce" />
                  <span className="font-oswald text-2xl font-bold mb-2">HABLAR CON UN ASESOR AHORA</span>
                  <p className="text-green-100">Respuesta inmediata • Ingeniero especializado</p>
                  <div className="mt-4 text-sm bg-green-700/50 px-3 py-1 rounded-full">
                    Normalmente respondemos en 5 minutos
                  </div>
                </div>
              </a>
              
              {/* Contactos Directos */}
              <div className="space-y-6">
                {/* Teléfono */}
                <div className="border border-gray-200 p-6 rounded-lg hover:border-brand-red transition-colors duration-300">
                  <div className="flex items-start">
                    <div className="bg-brand-red/10 p-3 rounded-lg mr-4">
                      <FaPhone className="text-2xl text-brand-red" />
                    </div>
                    <div>
                      <h3 className="font-oswald text-xl font-bold mb-1 text-brand-black">Teléfono Directo</h3>
                      <a 
                        href="tel:+525518246146" 
                        className="text-2xl font-bold text-gray-800 hover:text-brand-red transition-colors duration-300"
                      >
                        55 1824 6146
                      </a>
                      <p className="text-gray-600 mt-1">Lic. Luis Axel Rosas</p>
                      <p className="text-sm text-gray-500">Atención personalizada del director</p>
                    </div>
                  </div>
                </div>
                
                {/* Email */}
                <div className="border border-gray-200 p-6 rounded-lg hover:border-brand-red transition-colors duration-300">
                  <div className="flex items-start">
                    <div className="bg-brand-red/10 p-3 rounded-lg mr-4">
                      <FaEnvelope className="text-2xl text-brand-red" />
                    </div>
                    <div>
                      <h3 className="font-oswald text-xl font-bold mb-1 text-brand-black">Correo Electrónico</h3>
                      <a 
                        href="mailto:ventasjga.lockers@gmail.com" 
                        className="text-xl text-gray-800 hover:text-brand-red transition-colors duration-300 break-all"
                      >
                        ventasjga.lockers@gmail.com
                      </a>
                      <p className="text-sm text-gray-500 mt-1">Para envío de planos o documentos de licitación</p>
                    </div>
                  </div>
                </div>
                
                {/* Horarios */}
                <div className="border border-gray-200 p-6 rounded-lg hover:border-brand-red transition-colors duration-300">
                  <div className="flex items-start">
                    <div className="bg-brand-red/10 p-3 rounded-lg mr-4">
                      <FaClock className="text-2xl text-brand-red" />
                    </div>
                    <div>
                      <h3 className="font-oswald text-xl font-bold mb-1 text-brand-black">Horarios de Atención</h3>
                      <div className="space-y-1">
                        <p className="text-gray-800"><strong>Lunes a Viernes:</strong> 9:00 - 18:00 hrs</p>
                        <p className="text-gray-800"><strong>Sábados:</strong> 9:00 - 14:00 hrs</p>
                      </div>
                      <p className="text-sm text-gray-500 mt-2">WhatsApp disponible hasta las 20:00 hrs</p>
                    </div>
                  </div>
                </div>
                
                {/* QR Code para Desktop */}
                <div className="hidden lg:block border border-gray-200 p-6 rounded-lg bg-gray-50">
                  <div className="text-center">
                    <h3 className="font-oswald text-xl font-bold mb-3 text-brand-black">Guarda nuestro contacto</h3>
                    <div className="bg-white p-4 inline-block rounded-lg border">
                      <div className="w-32 h-32 bg-gray-200 flex items-center justify-center mb-3 mx-auto">
                        <div className="text-center">
                          <div className="font-bold text-brand-red text-2xl mb-1">JGA</div>
                          <div className="text-xs text-gray-600">ESCANEA</div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">Escanea para guardar nuestro contacto directo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* COLUMNA DERECHA: FORMULARIO INTELIGENTE */}
            <div>
              <h2 className="font-oswald text-3xl font-bold mb-8 text-brand-black">
                SOLICITUD DE <span className="text-brand-red">COTIZACIÓN</span>
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2 font-semibold">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                      placeholder="Ej: Juan Pérez"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2 font-semibold">
                      Empresa / Institución *
                    </label>
                    <input
                      type="text"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                      placeholder="Ej: Planta Automotriz XYZ"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2 font-semibold">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                      placeholder="ejemplo@empresa.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2 font-semibold">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                      placeholder="55 1234 5678"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 font-semibold">
                    Tipo de Industria *
                  </label>
                  <select
                    name="industria"
                    value={formData.industria}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                  >
                    <option value="">Selecciona tu industria</option>
                    <option value="escuela">Escuela / Institución Educativa</option>
                    <option value="hospital">Hospital / Clínica / IMSS</option>
                    <option value="planta">Planta Industrial / Manufactura</option>
                    <option value="gym">Gimnasio / Deportivo</option>
                    <option value="mina">Minería / Construcción</option>
                    <option value="oficina">Oficinas Corporativas</option>
                    <option value="gobierno">Gobierno / Institución Pública</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 font-semibold">
                    Cantidad aproximada de puertas *
                  </label>
                  <select
                    name="cantidadPuertas"
                    value={formData.cantidadPuertas}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                  >
                    <option value="">Selecciona un rango</option>
                    <option value="1-10">1 - 10 puertas</option>
                    <option value="11-50">11 - 50 puertas</option>
                    <option value="51-100">51 - 100 puertas</option>
                    <option value="101-500">101 - 500 puertas</option>
                    <option value="501+">Más de 500 puertas</option>
                  </select>
                  <p className="text-sm text-gray-500 mt-1">
                    Esta información nos ayuda a preparar condiciones especiales para tu proyecto
                  </p>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 font-semibold">
                    ¿Tienes planos o especificaciones técnicas?
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="tienePlanos"
                        value="si"
                        checked={formData.tienePlanos === 'si'}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      Sí, tengo planos
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="tienePlanos"
                        value="no"
                        checked={formData.tienePlanos === 'no'}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      No, necesito asesoría
                    </label>
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 font-semibold">
                    Mensaje adicional o especificaciones especiales
                  </label>
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                    placeholder="Describe tu proyecto, colores especiales, medidas no estándar, etc."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-brand-red hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg uppercase tracking-wider transition-all duration-300 transform hover:scale-[1.02] font-oswald"
                >
                  SOLICITAR COTIZACIÓN FORMAL
                </button>
                
                <p className="text-sm text-gray-500 text-center">
                  * Te enviaremos una cotización formal con especificaciones técnicas en menos de 2 horas hábiles
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: UBICACIÓN FÍSICA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-6 text-brand-black">
              VISITA NUESTRA <span className="text-brand-red">FÁBRICA</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No somos una oficina virtual. Tenemos planta física donde fabricamos cada locker.
            </p>
          </div>
          
          <div className="bg-white rounded-xl overflow-hidden shadow-2xl border border-gray-200">
            {/* Mapa */}
            <div className="h-96 bg-gray-200 relative">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800">
                <div className="text-center text-white p-8">
                  <FaMapMarkerAlt className="text-5xl mx-auto mb-4 text-brand-red" />
                  <h3 className="font-oswald text-2xl mb-2">Ubicación Exacta</h3>
                  <p className="text-gray-300 max-w-md mx-auto">
                    Fábrica JGA México - Chicoloapan, Estado de México
                  </p>
                  <div className="mt-4 inline-block bg-brand-red/20 px-4 py-2 rounded-full">
                    <span className="text-sm">Coordenadas: 19.4167° N, 98.9000° W</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-oswald text-2xl font-bold mb-4 text-brand-black flex items-center">
                    <FaBuilding className="mr-3 text-brand-red" />
                    Dirección de Fábrica
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <p className="font-semibold">Calle Reyes de Argón Smz 20 Mz 1 Lote 3 Vivienda C</p>
                    <p>Chicoloapan, Estado de México</p>
                    <p>C.P. 56383</p>
                    <p className="mt-4 text-sm text-gray-600">
                      <strong>Instrucciones:</strong> A 15 minutos de la Autopista México-Puebla, 
                      salida Chicoloapan. Planta industrial con letrero JGA visible.
                    </p>
                  </div>
                </div>
                
                <div className="bg-brand-red/5 p-6 rounded-lg border border-brand-red/20">
                  <h3 className="font-oswald text-2xl font-bold mb-4 text-brand-black">
                    ¡Visítanos!
                  </h3>
                  <p className="text-gray-700 mb-4">
                    <strong>"Ven a ver tus lockers en proceso de fabricación"</strong>
                  </p>
                  <p className="text-gray-600 mb-4">
                    Coordina una cita para visitar nuestra planta, ver nuestro proceso 
                    industrial y revisar muestras físicas de materiales y acabados.
                  </p>
                  <a 
                    href="https://wa.me/525518246146?text=Hola,%20quiero%20agendar%20una%20visita%20a%20su%20planta%20en%20Chicoloapan."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-brand-red hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                  >
                    <FaWhatsapp className="mr-2" />
                    Agendar Visita a Planta
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: PREGUNTAS FRECUENTES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-6 text-brand-black">
              PREGUNTAS <span className="text-brand-red">FRECUENTES</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Respuestas rápidas a las dudas más comunes de nuestros clientes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: <FaTruck className="text-2xl text-brand-red" />,
                question: "¿Hacen envíos a todo el país?",
                answer: "Sí, tenemos logística propia en CDMX y área metropolitana, y convenios con Castores y Tres Guerras para envíos a toda la República. Cotizamos el flete según tu ubicación."
              },
              {
                icon: <FaFileInvoiceDollar className="text-2xl text-brand-red" />,
                question: "¿Facturan?",
                answer: "Sí, todos nuestros precios son + IVA y facturamos al momento de la compra. Trabajamos con facturas electrónicas CFDI 4.0, válidas ante el SAT."
              },
              {
                icon: <FaBoxOpen className="text-2xl text-brand-red" />,
                question: "¿Tienen stock inmediato?",
                answer: "Mantenemos stock permanente de lockers estándar (1-5 puertas) en color gris industrial y arena. Colores especiales RAL y configuraciones no estándar tienen tiempo de fabricación de 7-10 días hábiles."
              },
              {
                icon: <FaClock className="text-2xl text-brand-red" />,
                question: "¿Cuál es el tiempo de entrega?",
                answer: "Productos en stock: 24-48 horas en CDMX. Fabricaciones especiales: 7-10 días hábiles. Instalación profesional: se agenda según disponibilidad de nuestros técnicos certificados."
              },
              {
                icon: <FaBuilding className="text-2xl text-brand-red" />,
                question: "¿Dan garantía?",
                answer: "Sí, garantía de 5 años en estructura metálica y 1 año en herrajes y cerraduras. Cubrimos defectos de fabricación y proporcionamos refacciones directas de fábrica."
              },
              {
                icon: <FaWhatsapp className="text-2xl text-brand-red" />,
                question: "¿Atienden emergencias?",
                answer: "Sí, para clientes con planes de mantenimiento ofrecemos servicio de emergencia en CDMX y área metropolitana con respuesta en menos de 24 horas para reparaciones críticas."
              }
            ].map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6 hover:border-brand-red transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start mb-4">
                  <div className="bg-brand-red/10 p-3 rounded-lg mr-4">
                    {faq.icon}
                  </div>
                  <h3 className="font-oswald text-xl font-bold text-brand-black">
                    {faq.question}
                  </h3>
                </div>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 mb-6">
              ¿No encontraste respuesta a tu pregunta?
            </p>
            <a 
              href="https://wa.me/525518246146?text=Hola%20JGA,%20tengo%20una%20pregunta%20específica%20sobre..."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-brand-black hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300"
            >
              <FaWhatsapp className="mr-3 text-xl" />
              Preguntar Directamente por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}