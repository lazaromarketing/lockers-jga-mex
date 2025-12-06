import Image from 'next/image';
import { FaRulerCombined, FaHardHat, FaTruck, FaTools, FaHospital, FaIndustry, FaSchool, FaWarehouse } from 'react-icons/fa';
import { MdPhone, MdEmail, MdLocationOn } from 'react-icons/md';

export default function ServiciosPage() {
  return (
    <main className="min-h-screen">
      {/* SECCIÓN 1: HERO TÉCNICO */}
      <section className="relative bg-brand-black text-white py-20 md:py-32 overflow-hidden">
       <Image
  src="/images/servicios/blueprint-background.jpg"
  alt="Blueprint técnico JGA México"
  fill
  className="object-cover opacity-10"
  priority
/>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="w-16 h-1 bg-brand-red mr-4"></div>
              <span className="font-oswald uppercase tracking-widest text-brand-red text-sm">Servicios JGA</span>
              <div className="w-16 h-1 bg-brand-red ml-4"></div>
            </div>
            
            <h1 className="font-oswald text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              MÁS ALLÁ DE LA FABRICACIÓN:<br />
              <span className="text-brand-red">INGENIERÍA DE ESPACIOS</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
              No solo vendemos lockers. Diseñamos, fabricamos e instalamos la solución exacta 
              para vestidores, plantas industriales y espacios institucionales.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/5215566778899?text=Hola%20JGA%20México,%20quiero%20cotizar%20un%20proyecto%20integral%20de%20lockers."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-red hover:bg-red-700 text-white font-bold py-4 px-8 rounded-none text-lg uppercase tracking-wider transition-all duration-300 transform hover:scale-105 font-oswald"
              >
                Cotizar Proyecto Integral
              </a>
              <a 
                href="#especialidades"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-brand-black text-white font-bold py-4 px-8 rounded-none text-lg uppercase tracking-wider transition-all duration-300 font-oswald"
              >
                Ver Especialidades
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: 4 PILARES DE SERVICIO */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-6 text-brand-black">
              SERVICIO <span className="text-brand-red">COMPLETO</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              De la idea al producto instalado, con precisión industrial y garantía total.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Pilar 1 */}
            <div className="group p-6 border-2 border-gray-100 hover:border-brand-red transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                <FaRulerCombined className="text-3xl text-brand-red group-hover:text-white" />
              </div>
              <h3 className="font-oswald text-2xl font-bold mb-4 text-brand-black">
                Diseño y Personalización
              </h3>
              <p className="text-gray-600 mb-4">
                Si no existe, lo creamos. Adaptamos medidas, colores corporativos y configuraciones 
                internas específicas para tu espacio.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>✓ Medidas personalizadas</li>
                <li>✓ Colores RAL a elección</li>
                <li>✓ Configuraciones especiales</li>
              </ul>
            </div>

            {/* Pilar 2 */}
            <div className="group p-6 border-2 border-gray-100 hover:border-brand-red transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                <FaHardHat className="text-3xl text-brand-red group-hover:text-white" />
              </div>
              <h3 className="font-oswald text-2xl font-bold mb-4 text-brand-black">
                Asesoría Técnica y Planimetría
              </h3>
              <p className="text-gray-600 mb-4">
                Optimizamos cada m². Analizamos tus planos y diseñamos la distribución más eficiente 
                para el flujo de personal.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>✓ Interpretación de planos</li>
                <li>✓ Optimización de espacios</li>
                <li>✓ Propuesta 3D visual</li>
              </ul>
            </div>

            {/* Pilar 3 */}
            <div className="group p-6 border-2 border-gray-100 hover:border-brand-red transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                <FaTruck className="text-3xl text-brand-red group-hover:text-white" />
              </div>
              <h3 className="font-oswald text-2xl font-bold mb-4 text-brand-black">
                Instalación Profesional
              </h3>
              <p className="text-gray-600 mb-4">
                Nuestros técnicos especializados instalan, nivelan y anclan cada módulo. 
                Listo para usar desde el primer día.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>✓ Técnicos certificados</li>
                <li>✓ Garantía de instalación</li>
                <li>✓ Limpieza post-instalación</li>
              </ul>
            </div>

            {/* Pilar 4 */}
            <div className="group p-6 border-2 border-gray-100 hover:border-brand-red transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                <FaTools className="text-3xl text-brand-red group-hover:text-white" />
              </div>
              <h3 className="font-oswald text-2xl font-bold mb-4 text-brand-black">
                Mantenimiento y Refacciones
              </h3>
              <p className="text-gray-600 mb-4">
                Vida útil extendida. Stock permanente de repuestos y servicio técnico especializado 
                para mantener tus lockers operativos.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>✓ Repuestos garantizados</li>
                <li>✓ Servicio en 24-48 hrs</li>
                <li>✓ Planes de mantenimiento</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: PROCESO DE TRABAJO */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-6 text-brand-black">
              EL PROCESO <span className="text-brand-red">JGA</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metodología probada que garantiza resultados precisos y a tiempo.
            </p>
          </div>

          <div className="relative">
            {/* Línea de tiempo */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 transform -translate-y-1/2"></div>
            
            <div className="grid lg:grid-cols-4 gap-8 relative">
              {[
                { step: "01", title: "Diagnóstico", desc: "Analizamos tu necesidad específica, flujo de usuarios y condiciones del espacio." },
                { step: "02", title: "Propuesta Técnica", desc: "Presentamos ficha técnica y cotización formal en menos de 24 horas hábiles." },
                { step: "03", title: "Fabricación", desc: "Corte láser, doblado CNC y soldadura robotizada en nuestra planta certificada." },
                { step: "04", title: "Entrega/Instalación", desc: "Transporte especializado e instalación profesional por técnicos certificados." }
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="bg-white p-8 border-2 border-gray-200 hover:border-brand-red transition-all duration-300 h-full">
                    <div className="flex items-start mb-6">
                      <div className="w-12 h-12 bg-brand-red text-white flex items-center justify-center font-bold text-xl mr-4">
                        {item.step}
                      </div>
                      <h3 className="font-oswald text-2xl font-bold pt-2 text-brand-black">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-600">
                      {item.desc}
                    </p>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 text-brand-red transform -translate-y-1/2">
                      <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: ESPECIALIDADES */}
      <section id="especialidades" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-6 text-brand-black">
              SOLUCIONES <span className="text-brand-red">ESPECIALIZADAS</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Adaptamos nuestra ingeniería a los requerimientos específicos de cada industria.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: <FaHospital className="text-3xl" />, 
                title: "Sector Salud", 
                desc: "Lockers Slop-Top para cumplimiento normativo del IMSS y hospitales. Diseño antiderrames y fácil limpieza.",
                color: "bg-blue-50 border-blue-200"
              },
              { 
                icon: <FaIndustry className="text-3xl" />, 
                title: "Plantas Industriales", 
                desc: "Módulos de resguardo de celulares de alta densidad. Materiales resistentes a químicos y ambientes agresivos.",
                color: "bg-gray-50 border-gray-200"
              },
              { 
                icon: <FaSchool className="text-3xl" />, 
                title: "Instituciones Educativas", 
                desc: "Sistemas modulares escolares. Durabilidad comprobada para alto tráfico y uso intensivo diario.",
                color: "bg-green-50 border-green-200"
              },
              { 
                icon: <FaWarehouse className="text-3xl" />, 
                title: "Zonas Húmedas", 
                desc: "Fabricación híbrida o 100% plástica. Resistencia total a humedad, salitre y ambientes corrosivos.",
                color: "bg-cyan-50 border-cyan-200"
              }
            ].map((item, index) => (
              <div key={index} className={`p-6 border-2 ${item.color} hover:border-brand-red transition-all duration-300 hover:shadow-lg h-full`}>
                <div className="text-brand-red mb-4">
                  {item.icon}
                </div>
                <h3 className="font-oswald text-xl font-bold mb-3 text-brand-black">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 5: GALERÍA "RENDER vs REALIDAD" */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-6">
              DEL <span className="text-brand-red">PLANO</span> A LA <span className="text-brand-red">REALIDAD</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transformamos especificaciones técnicas en soluciones físicas de precisión.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="border-2 border-gray-700 p-4">
               <div className="aspect-video relative overflow-hidden">
  <Image
    src="/images/servicios/blueprint-diseno.jpg"
    alt="Plano técnico de locker JGA"
    fill
    className="object-cover"
  />
                  <div className="relative z-10 text-center p-8">
                    <div className="inline-block p-4 bg-gray-900/90 border-2 border-gray-700">
                      <h4 className="font-oswald text-2xl mb-2 text-brand-red">PLANO TÉCNICO</h4>
                      <p className="text-gray-300">Especificaciones exactas y medidas milimétricas</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mt-4 text-center">
                  Blueprint técnico con todas las especificaciones de diseño
                </p>
              </div>
              
              <div className="bg-brand-black p-6 border-l-4 border-brand-red">
                <h4 className="font-oswald text-xl mb-3">Precisión de Ingeniería</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>✓ Mediciones CAD/CAM exactas</li>
                  <li>✓ Tolerancias de ±0.5mm garantizadas</li>
                  <li>✓ Materiales especificados por norma</li>
                  <li>✓ Pruebas de resistencia documentadas</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-2 border-gray-700 p-4">
                <div className="aspect-video bg-gray-800 flex items-center justify-center">
                  {/* Aquí va la foto real del locker instalado */}
                  <div className="relative w-full h-full overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
  <Image
    src="/images/servicios/instalacion-real.jpg"
    alt="Instalación real de lockers JGA"
    fill
    className="object-cover"
  />
                      <h4 className="font-oswald text-2xl mb-2 text-white">INSTALACIÓN REAL</h4>
                      <p className="text-gray-300 mb-4 text-center">Producto fabricado e instalado según especificaciones</p>
                      <div className="flex space-x-4">
                        <div className="w-20 h-20 bg-gray-700/50 border border-gray-600"></div>
                        <div className="w-20 h-20 bg-gray-700/50 border border-gray-600"></div>
                        <div className="w-20 h-20 bg-gray-700/50 border border-gray-600"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mt-4 text-center">
                  Resultado final instalado en planta industrial
                </p>
              </div>
              
              <div className="bg-brand-black p-6 border-l-4 border-brand-red">
                <h4 className="font-oswald text-xl mb-3">Garantía de Calidad</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>✓ Instalación certificada por técnicos</li>
                  <li>✓ Prueba de carga y funcionamiento</li>
                  <li>✓ Documentación técnica completa</li>
                  <li>✓ Garantía de 5 años en estructura</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 6: CTA PARA ARQUITECTOS Y CONTRATISTAS */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white border-2 border-brand-red p-8 md:p-12 shadow-2xl">
            <div className="text-center">
              <div className="inline-block p-3 bg-brand-red/10 mb-6">
                <span className="font-oswald uppercase tracking-widest text-brand-red font-bold">
                  PROYECTOS ESPECIALES
                </span>
              </div>
              
              <h2 className="font-oswald text-3xl md:text-4xl font-bold mb-6 text-brand-black">
                ¿ERES <span className="text-brand-red">ARQUITECTO</span> O <span className="text-brand-red">CONTRATISTA</span>?
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Tenemos condiciones especiales para proyectos de volumen y soporte técnico 
                completo para licitaciones y desarrollos arquitectónicos.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="text-center p-4 border border-gray-200">
                  <div className="text-3xl font-bold text-brand-red mb-2">-15%</div>
                  <p className="text-sm text-gray-600">Descuento en volumen</p>
                </div>
                <div className="text-center p-4 border border-gray-200">
                  <div className="text-3xl font-bold text-brand-red mb-2">24h</div>
                  <p className="text-sm text-gray-600">Respuesta técnica</p>
                </div>
                <div className="text-center p-4 border border-gray-200">
                  <div className="text-3xl font-bold text-brand-red mb-2">100%</div>
                  <p className="text-sm text-gray-600">Documentación completa</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/5215566778899?text=Hola%20JGA%20México,%20soy%20arquitecto/contratista%20y%20necesito%20cotización%20para%20un%20proyecto%20de%20lockers."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-red hover:bg-red-700 text-white font-bold py-4 px-8 rounded-none text-lg uppercase tracking-wider transition-all duration-300 transform hover:scale-105 font-oswald"
                >
                  Contactar Departamento de Proyectos
                </a>
                <a 
                  href="mailto:proyectos@jgamexico.com?subject=Cotización para Proyecto Arquitectónico"
                  className="bg-transparent border-2 border-brand-black hover:bg-brand-black hover:text-white text-brand-black font-bold py-4 px-8 rounded-none text-lg uppercase tracking-wider transition-all duration-300 font-oswald"
                >
                  Solicitar Ficha Técnica
                </a>
              </div>
              
              <p className="text-gray-500 text-sm mt-8">
                Incluye: Planos en CAD, especificaciones técnicas, memoria de cálculo y certificaciones.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}