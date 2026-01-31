'use client';

import { useState } from 'react';
import { Menu, Phone, MapPin, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Importamos esto para saber en qué página estamos

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Hook para detectar ruta actual

  const navItems = [
    { href: '/', label: 'Inicio' },
    { href: '/catalogo', label: 'Catálogo' },
    { href: '/servicios', label: 'Servicios' },
    { href: '/blog', label: 'Blog' }, // 👈 AQUÍ AGREGAMOS EL BLOG
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/contacto', label: 'Contacto' },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-brand-black/95 backdrop-blur-sm border-b border-brand-gray">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            
            {/* LOGO REAL */}
            <div className="flex items-center space-x-3">
              <Link href="/" className="relative w-48 h-16">
                <Image
                  src="/images/logo-lockers-jga.png"
                  alt="Lockers JGA MEX - Fabricantes de Lockers Industriales"
                  fill
                  className="object-contain"
                  priority
                />
              </Link>
              <div className="hidden md:block border-l border-gray-700 pl-3">
                <p className="text-xs text-brand-white/60 font-sans italic">
                  Trato directo de fábrica. Sin intermediarios.
                </p>
              </div>
            </div>

            {/* DESKTOP NAVIGATION */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`transition-colors font-medium text-sm uppercase tracking-wide ${
                      isActive ? 'text-brand-red font-bold' : 'text-brand-white hover:text-brand-red'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* CONTACT INFO & MOBILE MENU */}
            <div className="flex items-center space-x-4">
              
              {/* CONTACT INFO - Desktop */}
              <div className="hidden xl:flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-brand-red" />
                  <div>
                    <p className="text-brand-white font-sans text-sm font-medium">55 1824 6146</p>
                    <p className="text-brand-white/50 text-xs">24/7 Cotizaciones</p>
                  </div>
                </div>
                
                <div className="h-6 w-px bg-gray-700"></div>
                
                <div className="hidden 2xl:flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-brand-red" />
                  <div>
                    <p className="text-brand-white font-sans text-sm font-medium">Chicoloapan, Méx.</p>
                    <p className="text-brand-white/50 text-xs">Fábrica principal</p>
                  </div>
                </div>
              </div>

              {/* WHATSAPP CTA BUTTON */}
              <a 
                href="https://wa.me/5215518246146" 
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-brand-white font-bold rounded-lg transition-colors shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.507 14.307l-.009.075c-.266-1.118-1.445-2.01-2.599-1.818l-.088.025c-.403.114-.835.136-1.252.067l-.178-.03c-1.142-.223-2.442-.955-2.842-2.156-.183-.544-.12-1.205.113-1.84l.082-.2c.217-.533.176-1.173-.108-1.686l-.116-.213c-.356-.654-1.033-1.15-1.855-1.15H8.47c-.597 0-1.113.421-1.237 1.001l-.053.25c-.204.97-.336 1.94-.392 2.913l-.009.18c-.092 1.856.415 3.857 1.52 5.287l.177.229c1.042 1.351 2.635 2.302 4.358 2.576l.218.032c.732.108 1.486.103 2.218-.014l.208-.034c1.538-.251 3.024-1.108 4.072-2.405l.172-.21c.939-1.153 1.402-2.625 1.402-4.1v-.172c0-1.735-.635-3.403-1.785-4.692l-.164-.167a6.938 6.938 0 00-4.913-2.04h-.137a6.92 6.92 0 00-4.913 2.04l-.164.167a6.963 6.963 0 00-1.785 4.692v.172c0 1.735.635 3.403 1.785 4.692l.164.167a6.938 6.938 0 004.913 2.04h.137a6.92 6.92 0 004.913-2.04l.164-.167a6.963 6.963 0 001.785-4.692v-.172c0-.484-.072-.965-.214-1.426l-.073-.204a5.115 5.115 0 01-1.336 1.466z"/>
                </svg>
                <span>WhatsApp</span>
              </a>

              {/* MOBILE MENU BUTTON */}
              <button 
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 text-brand-white hover:text-brand-red transition-colors"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* MOBILE SLOGAN */}
          <div className="md:hidden mt-2 text-center">
            <p className="text-xs text-brand-white/60 font-sans italic">
              Trato directo de fábrica. Sin intermediarios.
            </p>
          </div>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="absolute top-0 right-0 h-full w-full max-w-xs bg-brand-black border-l border-brand-gray shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-brand-gray">
              <div className="relative w-40 h-12">
                <Image
                  src="/images/logo-lockers-jga.png"
                  alt="Lockers JGA MEX"
                  fill
                  className="object-contain"
                />
              </div>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-brand-white hover:text-brand-red"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="p-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-3 text-lg font-medium border-b border-brand-gray/50 ${
                     pathname === item.href ? 'text-brand-red' : 'text-brand-white hover:text-brand-red'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Contact Info */}
            <div className="p-6 border-t border-brand-gray">
              <div className="space-y-4">
                <a 
                  href="tel:5518246146"
                  className="flex items-center space-x-3 text-brand-white hover:text-brand-red"
                >
                  <Phone className="w-5 h-5" />
                  <div>
                    <p className="font-bold">55 1824 6146</p>
                    <p className="text-sm text-brand-white/60">24/7 Cotizaciones</p>
                  </div>
                </a>
                
                <div className="flex items-center space-x-3 text-brand-white">
                  <MapPin className="w-5 h-5" />
                  <div>
                    <p className="font-bold">Chicoloapan, Méx.</p>
                    <p className="text-sm text-brand-white/60">Fábrica principal</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button Mobile */}
              <a 
                href="https://wa.me/5215518246146"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center space-x-2 w-full py-3 bg-green-600 hover:bg-green-700 text-brand-white font-bold rounded-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.507 14.307l-.009.075c-.266-1.118-1.445-2.01-2.599-1.818l-.088.025c-.403.114-.835.136-1.252.067l-.178-.03c-1.142-.223-2.442-.955-2.842-2.156-.183-.544-.12-1.205.113-1.84l.082-.2c.217-.533.176-1.173-.108-1.686l-.116-.213c-.356-.654-1.033-1.15-1.855-1.15H8.47c-.597 0-1.113.421-1.237 1.001l-.053.25c-.204.97-.336 1.94-.392 2.913l-.009.18c-.092 1.856.415 3.857 1.52 5.287l.177.229c1.042 1.351 2.635 2.302 4.358 2.576l.218.032c.732.108 1.486.103 2.218-.014l.208-.034c1.538-.251 3.024-1.108 4.072-2.405l.172-.21c.939-1.153 1.402-2.625 1.402-4.1v-.172c0-1.735-.635-3.403-1.785-4.692l-.164-.167a6.938 6.938 0 00-4.913-2.04h-.137a6.92 6.92 0 00-4.913 2.04l-.164.167a6.963 6.963 0 00-1.785 4.692v.172c0 1.735.635 3.403 1.785 4.692l.164.167a6.938 6.938 0 004.913 2.04h.137a6.92 6.92 0 004.913-2.04l.164-.167a6.963 6.963 0 001.785-4.692v-.172c0-.484-.072-.965-.214-1.426l-.073-.204a5.115 5.115 0 01-1.336 1.466z"/>
                </svg>
                <span>Abrir WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;