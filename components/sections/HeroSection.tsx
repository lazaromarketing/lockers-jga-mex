// components/sections/HeroSection.tsx
import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp, FaDownload, FaShieldAlt, FaIndustry, FaTruck, FaBacteria } from 'react-icons/fa';
import { MdOutlineCleaningServices } from 'react-icons/md';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black">
      {/* Fondo con textura industrial sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-brand-gray to-black z-0">
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzAgMTVMMTUgMzBsMTUgMTUgMTUtMTUtMTUtMTV6IiBmaWxsPSJub25lIiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMC41Ii8+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvc3ZnPg==')]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* COLUMNA IZQUIERDA - CONTENIDO */}
          <div className="text-left">
            {/* Badge superior - ENFOCADO EN PVC */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-gray to-gray-900 border border-gray-800 rounded-full px-4 py-2 mb-6 lg:mb-8">
              <MdOutlineCleaningServices className="text-brand-red text-sm" />
              <span className="text-white text-sm font-medium tracking-wide">
                100% ASÉPTICO | CERO CORROSIÓN EN PVC
              </span>
            </div>

            {/* Título H1 - Corto y Directo (Sin línea roja extra) */}
            <h1 className="font-oswald font-bold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight uppercase mb-4 lg:mb-6">
              LOCKERS JGA
              <br />
              <span className="text-brand-red">ACERO Y PVC</span>
              <br />
              FABRICANTES REALES
            </h1>

            {/* Subtítulo - PVC principal, Acero secundario */}
            <p className="text-gray-300 font-roboto text-lg sm:text-xl md:text-2xl leading-relaxed mb-8 lg:mb-10 max-w-3xl">
              Expertos en <span className="text-brand-red font-semibold">PVC Industrial 16mm</span> (Aséptico/Antihongos) y <span className="text-white font-semibold">Acero Calibre 24</span>. 
              Resistencia garantizada por 5 años.
            </p>

            {/* Botones de CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 lg:mb-12">
              {/* Botón Principal */}
              <a
                href="https://wa.me/5215518246146?text=Hola%20Lockers%20JGA,%20quiero%20cotizar%20PVC%20o%20Acero%20directo%20con%20fábrica"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-brand-red hover:bg-red-700 text-white font-bold font-oswald text-lg sm:text-xl px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-red-900/50 uppercase tracking-wider"
              >
                <FaWhatsapp className="text-xl" />
                COTIZAR DIRECTO
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>

              {/* Botón Secundario */}
              <Link
                href="/catalogo"
                className="group inline-flex items-center justify-center gap-3 border-2 border-white hover:border-brand-red text-white hover:text-brand-red font-bold font-oswald text-lg sm:text-xl px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] uppercase tracking-wider"
              >
                <FaDownload />
                VER CATÁLOGO
              </Link>
            </div>

            {/* Llamada de atención - PVC Hook */}
            <div className="bg-gray-900/50 border-l-4 border-brand-red p-4 rounded-r-lg mb-10">
              <p className="text-gray-200 font-roboto text-sm">
                <span className="font-bold text-white">¿Higiene o Carga Pesada?</span>{' '}
                Tenemos ambas: <span className="text-brand-red font-bold">PVC Inoxidable</span> sellado con silicón antihongos para zonas húmedas, y Acero reforzado para uso rudo.
              </p>
            </div>

            {/* Barra de Confianza - Prioridad PVC */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-800">
              {/* PVC */}
              <div className="flex items-center gap-3">
                <div className="bg-brand-red/20 p-2 rounded-lg">
                  <MdOutlineCleaningServices className="text-brand-red text-xl" />
                </div>
                <div>
                  <p className="text-white font-bold text-lg">PVC 16mm</p>
                  <p className="text-gray-400 text-sm">Cero Corrosión</p>
                </div>
              </div>

              {/* Acero */}
              <div className="flex items-center gap-3">
                <div className="bg-brand-red/20 p-2 rounded-lg">
                  <FaIndustry className="text-brand-red text-xl" />
                </div>
                <div>
                  <p className="text-white font-bold text-lg">Acero C-24</p>
                  <p className="text-gray-400 text-sm">Máxima Solidez</p>
                </div>
              </div>

              {/* Garantía */}
              <div className="flex items-center gap-3">
                <div className="bg-brand-red/20 p-2 rounded-lg">
                  <FaShieldAlt className="text-brand-red text-xl" />
                </div>
                <div>
                  <p className="text-white font-bold text-lg">5 Años</p>
                  <p className="text-gray-400 text-sm">Garantía Real</p>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA - IMAGEN ORIGINAL */}
          <div className="relative lg:pl-8 xl:pl-12">
            <div className="relative">
              {/* Efecto de brillo */}
              <div className="absolute -inset-4 bg-gradient-to-r from-transparent via-brand-red/10 to-transparent blur-2xl opacity-50"></div>
              
              {/* Marco industrial */}
              <div className="relative border-2 border-gray-800 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black p-2 shadow-2xl">
                {/* Imagen Original */}
                <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-xl overflow-hidden">
                  <Image
                    src="/images/hero-locker-industrial.png"
                    alt="Locker Industrial JGA - Acero y PVC"
                    fill
                    className="object-contain"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  
                  {/* Overlay sutil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>

                {/* Badge en imagen */}
                <div className="absolute bottom-6 left-6 bg-brand-red text-white px-4 py-2 rounded-lg font-bold font-oswald text-sm uppercase tracking-wider shadow-lg">
                  HECHO EN MÉXICO
                </div>
              </div>
            </div>

            {/* Indicador de scroll */}
            <div className="hidden lg:flex flex-col items-center absolute -bottom-20 left-1/2 transform -translate-x-1/2">
              <span className="text-gray-500 text-sm mb-2">SCROLL</span>
              <div className="w-px h-12 bg-gradient-to-b from-brand-red to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Ola decorativa inferior */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-12 text-brand-gray" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;