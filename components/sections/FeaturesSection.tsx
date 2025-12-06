// components/sections/FeaturesSection.tsx
'use client';

import { 
  FaIndustry, 
  FaShieldAlt, 
  FaLayerGroup, 
  FaPaintRoller,
  FaBolt,
  FaHardHat,
  FaWeightHanging,
  FaFireAlt
} from 'react-icons/fa';

const FeaturesSection = () => {
  const features = [
    {
      icon: FaIndustry,
      title: "Trato Directo de Fábrica",
      description: "Elimina intermediarios. Obtén precio real de fabricante y refacciones garantizadas de por vida.",
      highlight: "Ahorro 40% vs importados",
      color: "from-red-500 to-red-700"
    },
    {
      icon: FaShieldAlt,
      title: "Estructura Sin Remaches",
      description: "Olvídate de lockers que se desarman. Nuestros cuerpos son 100% soldados y punteados para uso rudo.",
      highlight: "Soldadura robotizada MIG/MAG",
      color: "from-gray-900 to-black"
    },
    {
      icon: FaLayerGroup,
      title: "Acero Calibre 24 Real",
      description: "No usamos 'lámina comercial'. Usamos acero de alta resistencia que soporta golpes y desgaste diario.",
      highlight: "1.2mm de espesor real",
      color: "from-gray-700 to-gray-900"
    },
    {
      icon: FaPaintRoller,
      title: "Pintura Epóxica Horneada",
      description: "Acabado de doble micraje resistente a la corrosión, humedad y rayaduras. Calidad automotriz.",
      highlight: "120°C horno de curado",
      color: "from-brand-red to-red-800"
    }
  ];

  const technicalSpecs = [
    { icon: FaBolt, label: "Punteado cada 2cm", value: "Refuerzo estructural" },
    { icon: FaHardHat, label: "Norma ISO 9001", value: "Procesos certificados" },
    { icon: FaWeightHanging, label: "Soporta 150kg", value: "Por estante" },
    { icon: FaFireAlt, label: "Resistente", value: "A químicos" }
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-30"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-red-50 opacity-20"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gray-100 opacity-20"></div>
      
      {/* Patrón industrial sutil */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMCA1MGgxMDBNNTAgMHYxMDAiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado centrado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center px-4 py-2 bg-brand-red text-white text-sm font-bold rounded-full uppercase tracking-wider mb-4">
            <FaShieldAlt className="mr-2" />
            ¿POR QUÉ DURAN MÁS?
          </span>
          
          <h2 className="font-oswald font-bold text-4xl md:text-5xl text-black mb-6 leading-tight">
            INGENIERÍA MEXICANA
            <span className="block text-brand-red">HECHA PARA RESISTIR</span>
          </h2>
          
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            No somos revendedores. Somos fabricantes que controlamos cada paso del proceso para entregarte 
            <span className="font-bold text-black"> lockers que sí aguantan el uso rudo industrial</span>.
          </p>
        </div>

        {/* Grid de 4 características principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-brand-red/30 transition-all duration-300 hover:shadow-2xl hover:shadow-red-100"
            >
              {/* Efecto de fondo en hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Número de secuencia */}
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold font-oswald text-lg">
                0{index + 1}
              </div>
              
              {/* Icono con contenedor */}
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className={`text-3xl ${index === 0 || index === 3 ? 'text-brand-red' : 'text-gray-800'}`} />
                </div>
                {/* Efecto decorativo */}
                <div className="absolute -bottom-2 -right-2 w-10 h-10 border-2 border-brand-red/30 rounded-lg"></div>
              </div>
              
              {/* Contenido */}
              <h3 className="font-oswald font-bold text-xl md:text-2xl text-black mb-4 group-hover:text-brand-red transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {feature.description}
              </p>
              
              <div className="pt-4 border-t border-gray-100">
                <span className="inline-block bg-gray-50 text-gray-800 text-sm font-semibold px-3 py-1 rounded-full">
                  {feature.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Comparativa visual */}
        <div className="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-8 md:p-12 border border-gray-200 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Lado izquierdo - Tabla comparativa */}
            <div>
              <h3 className="font-oswald font-bold text-3xl text-black mb-8">
                LOCKERS <span className="text-brand-red">JGA</span> VS<br />
                <span className="text-gray-500">LA COMPETENCIA</span>
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-green-600 font-bold">✓</span>
                    </div>
                    <span className="font-bold text-gray-800">Cuerpo soldado</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-2xl font-bold text-green-600">100%</span>
                    <span className="text-sm text-gray-500">Integridad estructural</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-red-600 font-bold">✗</span>
                    </div>
                    <span className="font-bold text-gray-800">Cuerpo con remaches</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-2xl font-bold text-red-600">75%</span>
                    <span className="text-sm text-gray-500">Falla por vibración</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-green-600 font-bold">✓</span>
                    </div>
                    <span className="font-bold text-gray-800">Garantía 5 años</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-2xl font-bold text-green-600">JGA</span>
                    <span className="text-sm text-gray-500">Confianza real</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-red-600 font-bold">✗</span>
                    </div>
                    <span className="font-bold text-gray-800">Garantía 1 año</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-2xl font-bold text-red-600">OTROS</span>
                    <span className="text-sm text-gray-500">Se lavan las manos</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Lado derecho - Especificaciones técnicas */}
            <div className="bg-black rounded-2xl p-8 text-white">
              <h4 className="font-oswald font-bold text-2xl mb-6 text-white">
                ESPECIFICACIONES <span className="text-brand-red">TÉCNICAS</span>
              </h4>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {technicalSpecs.map((spec, index) => (
                  <div key={index} className="bg-gray-900 rounded-xl p-4 text-center">
                    <div className="w-12 h-12 bg-brand-red/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <spec.icon className="text-brand-red text-xl" />
                    </div>
                    <div className="text-sm text-gray-300">{spec.label}</div>
                    <div className="font-bold text-white mt-1">{spec.value}</div>
                  </div>
                ))}
              </div>
              
              <div className="pt-6 border-t border-gray-800">
                <p className="text-gray-300 text-sm mb-4">
                  <span className="text-white font-bold">¿Por qué importa esto?</span> Un locker industrial se usa 300+ veces al mes. Solo la ingeniería real aguanta.
                </p>
                <a 
                  href="/especificaciones-tecnicas"
                  className="inline-flex items-center text-brand-red font-bold hover:text-red-400 transition-colors"
                >
                  Descargar ficha técnica completa →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA técnico */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-black to-gray-900 text-white rounded-2xl px-8 py-6 shadow-2xl">
            <div className="text-left">
              <h4 className="font-oswald font-bold text-xl mb-1">¿PROYECTO INDUSTRIAL?</h4>
              <p className="text-gray-300 text-sm">Habla con nuestro ingeniero de planta</p>
            </div>
            <a 
              href="https://wa.me/5215518246146?text=Hola%20Lockers%20JGA,%20necesito%20asesoría%20técnica%20para%20un%20proyecto%20industrial"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-red hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg whitespace-nowrap transition-colors"
            >
              ASESORÍA TÉCNICA GRATIS
            </a>
          </div>
        </div>
      </div>

      {/* Línea divisoria para siguiente sección */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
    </section>
  );
};

export default FeaturesSection;