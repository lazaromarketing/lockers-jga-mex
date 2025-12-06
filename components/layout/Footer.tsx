import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaIndustry, FaTruck } from 'react-icons/fa';import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-gray border-t border-gray-900 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          
          {/* LOGO Y DESCRIPCIÓN */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="relative w-56 h-20">
                <Image
                  src="/images/logo-lockers-jga.png"
                  alt="Lockers JGA MEX"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-brand-white/70 font-sans mt-4 max-w-md">
                <strong className="text-brand-red">Más de 20 años de experiencia</strong> fabricando lockers industriales 
                de alta calidad. Trato directo de fábrica sin intermediarios para todo México.
              </p>
            </div>
{/* NAVEGACIÓN RÁPIDA - Agregar después de la descripción */}
<div className="mt-6">
  <h4 className="font-oswald text-lg font-bold text-brand-white mb-3">Navegación</h4>
  <div className="flex flex-wrap gap-3">
    <a href="/" className="text-sm text-gray-300 hover:text-brand-red transition-colors px-3 py-1 bg-gray-900/50 rounded">
      Inicio
    </a>
    <a href="/catalogo" className="text-sm text-gray-300 hover:text-brand-red transition-colors px-3 py-1 bg-gray-900/50 rounded">
      Catálogo
    </a>
    <a href="/nosotros" className="text-sm text-gray-300 hover:text-brand-red transition-colors px-3 py-1 bg-gray-900/50 rounded">
      Nosotros
    </a>
    <a href="/servicios" className="text-sm text-gray-300 hover:text-brand-red transition-colors px-3 py-1 bg-gray-900/50 rounded">
      Servicios
    </a>
    <a href="/contacto" className="text-sm text-gray-300 hover:text-brand-red transition-colors px-3 py-1 bg-gray-900/50 rounded">
      Contacto
    </a>
  </div>
</div>
            {/* EXPERIENCIA Y COBERTURA */}
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="flex items-center space-x-2 bg-black/30 px-3 py-2 rounded">
                <FaIndustry className="w-4 h-4 text-brand-red" />
                <span className="text-brand-white/80 text-sm">Desde 2004</span>
              </div>
              <div className="flex items-center space-x-2 bg-black/30 px-3 py-2 rounded">
                <FaTruck className="w-4 h-4 text-brand-red" />
                <span className="text-brand-white/80 text-sm">Cobertura Nacional</span>
              </div>
            </div>
          </div>

          {/* CONTACTO */}
          <div>
            <h3 className="font-heading text-xl font-bold text-brand-white mb-6">Contacto Directo</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FaPhone className="w-5 h-5 text-brand-red mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-brand-white font-sans font-medium">55 1824 6146</p>
                  <p className="text-brand-white/60 text-xs">Teléfono fijo</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <FaPhone className="w-5 h-5 text-brand-red mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-brand-white font-sans font-medium">+52 1 55 1824 6146</p>
                  <p className="text-brand-white/60 text-xs">WhatsApp 24/7</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <FaEnvelope className="w-5 h-5 text-brand-red mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-brand-white font-sans font-medium">ventasjga.lockers@gmail.com</p>
                  <p className="text-brand-white/60 text-xs">Correo electrónico</p>
                </div>
              </li>
            </ul>
          </div>

          {/* UBICACIÓN Y HORARIO */}
          <div>
            <h3 className="font-heading text-xl font-bold text-brand-white mb-6">Ubicación & Horario</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="w-5 h-5 text-brand-red mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-brand-white font-sans text-sm">
                    Calle Reyes de Argón Smz 20<br />
                    Mz 1 Lote 3 Vivienda C<br />
                    Chicoloapan, México 56383
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <FaClock className="w-5 h-5 text-brand-red mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-brand-white font-sans text-sm">
                    <strong>Lun-Vie:</strong> 8:00 AM - 9:00 PM<br />
                    <strong>Sábado:</strong> 8:00 AM - 6:00 PM<br />
                    <strong>Domingo:</strong> Cerrado<br />
                    <span className="text-brand-red text-xs">Cotizaciones 24/7</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* REDES SOCIALES */}
          <div>
            <h3 className="font-heading text-xl font-bold text-brand-white mb-6">Síguenos</h3>
            <div className="space-y-3">
              <a 
                href="https://www.facebook.com/profile.php?id=61567521427622" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-brand-white/80 hover:text-brand-red transition-colors"
              >
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="font-bold text-white">f</span>
                </div>
                <span>Facebook</span>
              </a>
              
              <a 
                href="https://www.instagram.com/lockersjga/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-brand-white/80 hover:text-brand-red transition-colors"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded flex items-center justify-center">
                  <span className="font-bold text-white">IG</span>
                </div>
                <span>Instagram</span>
              </a>
              
              <a 
                href="https://www.tiktok.com/@lockersjga" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-brand-white/80 hover:text-brand-red transition-colors"
              >
                <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                  <span className="font-bold text-white">TT</span>
                </div>
                <span>TikTok</span>
              </a>
            </div>
          </div>
        </div>

        {/* DIVISOR */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* COPYRIGHT Y LEGAL */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <p className="text-brand-white/50 text-sm font-sans">
              © {currentYear} Lockers JGA MEX. Todos los derechos reservados.
            </p>
            <p className="text-brand-white/40 text-xs font-sans mt-1">
              Fabricantes de lockers industriales desde 2004
            </p>
          </div>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-brand-white/50 hover:text-brand-white text-sm font-sans">
              Términos
            </Link>
            <Link href="#" className="text-brand-white/50 hover:text-brand-white text-sm font-sans">
              Privacidad
            </Link>
            <Link href="#" className="text-brand-white/50 hover:text-brand-white text-sm font-sans">
              Aviso Legal
            </Link>
          </div>
        </div>
        
        {/* CRÉDITOS SOMOSLAZARO */}
        <div className="text-center mt-6 pt-4 border-t border-gray-900">
          <p className="text-brand-white/30 text-xs font-sans">
            Desarrollado con ❤️ por{" "}
            <a 
              href="https://somoslazaro.marketing" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-red/50 hover:text-brand-red transition-colors"
            >
              somoslazaro.marketing
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;