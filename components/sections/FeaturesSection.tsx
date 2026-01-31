'use client';

import { 
  FaIndustry, 
  FaShieldAlt, 
  FaLayerGroup, 
  FaBolt,
  FaWeightHanging,
  FaBacteria, 
  FaWater
} from 'react-icons/fa';
import { MdOutlineCleaningServices } from 'react-icons/md';

const FeaturesSection = () => {
  const features = [
    {
      icon: FaIndustry,
      title: "Fabricantes en México", // SEO: Palabra clave principal
      description: "Sin intermediarios. Al ser fabricantes de lockers en México, garantizamos refacciones y el mejor precio en Acero y PVC.",
      highlight: "Envíos a toda la República",
      color: "from-red-500 to-red-700"
    },
    {
      icon: FaShieldAlt,
      title: "Lockers Metálicos JGA", // SEO: Especificamos "Metálicos"
      description: "Para uso rudo. Cuerpos 100% soldados (sin remaches flojos). La opción #1 para empresas y gimnasios que buscan durabilidad.",
      highlight: "Soldadura robotizada MIG",
      color: "from-gray-900 to-black"
    },
    {
      icon: FaBacteria,
      title: "Lockers de PVC (Plástico)", // SEO: Agregamos "Plástico" para búsqueda
      description: "La solución definitiva contra la humedad. Plástico industrial de 16mm. Ideal para lockers de playa, albercas y laboratorios.",
      highlight: "100% Inoxidable Garantizado",
      color: "from-gray-700 to-gray-900"
    },
    {
      icon: FaLayerGroup,
      title: "Calibres Reales (C-24)",
      description: "No vendemos lámina delgada. Usamos Acero Calibre 24 real o PVC macizo. Pésalos y nota la diferencia de calidad JGA.",
      highlight: "Certificado de Calidad",
      color: "from-brand-red to-red-800"
    }
  ];

  const technicalSpecs = [
    { icon: FaBolt, label: "Metal", value: "Soldadura MIG" },
    { icon: FaWater, label: "PVC", value: "Anti-Humedad" }, 
    { icon: FaWeightHanging, label: "Resistencia", value: "150kg/nivel" },
    { icon: MdOutlineCleaningServices, label: "Higiene", value: "Lavable" } 
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
            CALIDAD DE EXPORTACIÓN
          </span>
          
          {/* H2 OPTIMIZADO PARA GOOGLE */}
          <h2 className="font-oswald font-bold text-4xl md:text-5xl text-black mb-6 leading-tight uppercase">
            Fabricantes de Lockers en México:
            <span className="block text-brand-red">Acero y PVC</span>
          </h2>
          
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            La ingeniería más robusta del mercado. Elige entre la resistencia de nuestros 
            <span className="font-bold text-black"> Lockers Metálicos</span> para industria o la tecnología de nuestros
            <span className="font-bold text-black"> Lockers de Plástico (PVC)</span> para zonas húmedas.
          </p>
        </div>

        {/* Grid de 4 características principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-brand-red/30 transition-all duration-300 hover:shadow-2xl hover:shadow-red-100"
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold font-oswald text-lg">
                0{index + 1}
              </div>
              
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className={`text-3xl ${index === 0 || index === 3 ? 'text-brand-red' : 'text-gray-800'}`} />
                </div>
              </div>
              
              {/* Títulos con H3 para estructura SEO */}
              <h3 className="font-oswald font-bold text-xl md:text-2xl text-black mb-4 group-hover:text-brand-red transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                {feature.description}
              </p>
              
              <div className="pt-4 border-t border-gray-100">
                <span className="inline-block bg-gray-50 text-gray-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  {feature.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Comparativa visual JGA vs Competencia */}
        <div className="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-8 md:p-12 border border-gray-200 mb-16 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Lado izquierdo - Tabla comparativa */}
            <div>
              <h3 className="font-oswald font-bold text-3xl text-black mb-8 uppercase">
                Comparativa <span className="text-brand-red">JGA</span> vs Otros
              </h3>
              
              <div className="space-y-4">
                {/* JGA Acero */}
                <div className="flex items-center justify-between p-4 bg-white rounded-xl border-l-4 border-l-brand-red border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 p-2 rounded-full text-green-700 font-bold">✓</div>
                    <div>
                      <span className="font-bold text-gray-900 block">JGA Acero</span>
                      <span className="text-xs text-gray-500">Soldado y Punteado (Monoblock)</span>
                    </div>
                  </div>
                </div>
                
                {/* JGA PVC */}
                <div className="flex items-center justify-between p-4 bg-white rounded-xl border-l-4 border-l-brand-red border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 p-2 rounded-full text-green-700 font-bold">✓</div>
                    <div>
                      <span className="font-bold text-gray-900 block">JGA PVC (Plástico)</span>
                      <span className="text-xs text-gray-500">Inmune al óxido y bacterias</span>
                    </div>
                  </div>
                </div>
                
                {/* Competencia */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200 opacity-75">
                  <div className="flex items-center gap-4">
                    <div className="bg-red-100 p-2 rounded-full text-red-700 font-bold">✗</div>
                    <div>
                      <span className="font-bold text-gray-600 block">Lockers Genéricos</span>
                      <span className="text-xs text-gray-400">Se oxidan, usan remaches flojos</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Lado derecho - Ficha Técnica */}
            <div className="bg-black rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red opacity-10 rounded-full blur-2xl"></div>
              
              <h4 className="font-oswald font-bold text-2xl mb-6 text-white relative z-10">
                FICHA TÉCNICA <span className="text-brand-red">RESUMIDA</span>
              </h4>
              
              <div className="grid grid-cols-2 gap-4 mb-8 relative z-10">
                {technicalSpecs.map((spec, index) => (
                  <div key={index} className="bg-gray-900/80 rounded-xl p-4 text-center border border-gray-800">
                    <spec.icon className="text-brand-red text-2xl mx-auto mb-2" />
                    <div className="text-xs text-gray-400 uppercase">{spec.label}</div>
                    <div className="font-bold text-white text-sm">{spec.value}</div>
                  </div>
                ))}
              </div>
              
              <div className="pt-6 border-t border-gray-800 relative z-10 text-center">
                <p className="text-gray-300 text-sm mb-4">
                  ¿Necesitas especificaciones para licitación?
                </p>
                <a 
                  href="/catalogo"
                  className="text-brand-red font-bold hover:text-white transition-colors uppercase text-sm tracking-wide border-b border-brand-red pb-1"
                >
                  Descargar Fichas Técnicas PDF
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Asesoría */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-gray-900 text-white rounded-2xl px-8 py-6 shadow-2xl border border-gray-800">
            <div className="text-left">
              <h4 className="font-oswald font-bold text-xl text-white">¿PVC O METAL? TE AYUDAMOS A ELEGIR</h4>
              <p className="text-gray-400 text-sm">Nuestros ingenieros analizan tu ubicación y uso.</p>
            </div>
            <a 
              href="https://wa.me/5215518246146?text=Hola%20JGA,%20no%20sé%20si%20elegir%20PVC%20o%20Acero,%20¿me%20asesoran?"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-red hover:bg-red-700 text-white font-bold px-8 py-3 rounded-lg uppercase tracking-wider transition-colors shadow-lg shadow-red-900/50"
            >
              Asesoría Gratis WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;