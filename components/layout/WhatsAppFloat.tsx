"use client";

import { useState, useEffect } from 'react';
import { FaWhatsapp, FaTimes, FaQuestionCircle, FaQuoteRight, FaRulerCombined, FaCalendarAlt, FaChevronDown } from 'react-icons/fa';
import { MdPhone, MdEmail } from 'react-icons/md';

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isOnline, setIsOnline] = useState(true);

  // Simular estado de conexión (en producción esto vendría de un API)
  useEffect(() => {
    const checkBusinessHours = () => {
      const now = new Date();
      const hours = now.getHours();
      const day = now.getDay(); // 0 = Domingo, 1 = Lunes, etc.
      
      // Lunes a Viernes: 9:00 - 20:00, Sábados: 9:00 - 14:00
      const isWeekday = day >= 1 && day <= 5;
      const isSaturday = day === 6;
      
      if (isWeekday && hours >= 9 && hours < 20) {
        setIsOnline(true);
      } else if (isSaturday && hours >= 9 && hours < 14) {
        setIsOnline(true);
      } else {
        setIsOnline(false);
      }
    };

    checkBusinessHours();
    const interval = setInterval(checkBusinessHours, 60000); // Revisar cada minuto
    
    return () => clearInterval(interval);
  }, []);

  // Ocultar después de 5 segundos si no se interactúa (opcional)
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const getCurrentStatus = () => {
    const now = new Date();
    const hours = now.getHours();
    if (hours < 9 || hours >= 20) return "Volveremos a las 9:00 AM";
    if (!isOnline) return "Fuera de horario";
    return "En línea ahora";
  };

  const getStatusColor = () => {
    if (!isOnline) return "bg-gray-500";
    return "bg-green-500";
  };

  const handleOptionClick = (option: string) => {
    let message = "";
    
    switch(option) {
      case "cotizacion":
        message = "Hola JGA México, quiero una cotización para lockers industriales. ¿Me pueden ayudar?";
        break;
      case "asesoria":
        message = "Hola JGA México, necesito asesoría técnica para un proyecto de lockers. ¿Tienen disponibilidad?";
        break;
      case "medidas":
        message = "Hola JGA México, tengo medidas especiales para lockers. ¿Pueden fabricarlos a medida?";
        break;
      case "visita":
        message = "Hola JGA México, quisiera agendar una visita a su fábrica en Chicoloapan para ver muestras.";
        break;
      default:
        message = "Hola JGA México, vengo de su página web y me interesa conocer más sobre sus lockers.";
    }

    const phoneNumber = "525518246146"; // Número de JGA México
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  const handleMainClick = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      const message = "Hola JGA México, vengo de su página web y me interesa conocer más sobre sus productos.";
      const phoneNumber = "525518246146";
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Menú desplegable */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 animate-fadeIn">
          {/* Header del menú */}
          <div className="bg-brand-red text-white p-4 rounded-t-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full mr-2 ${getStatusColor()} animate-pulse`}></div>
                <span className="font-bold">{getCurrentStatus()}</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <FaTimes />
              </button>
            </div>
            <p className="text-sm mt-1 text-red-100">
              Respuesta en menos de 5 minutos
            </p>
          </div>

          {/* Opciones rápidas */}
          <div className="p-4">
            <h3 className="font-oswald font-bold text-lg mb-3 text-gray-800">
              ¿En qué te podemos ayudar?
            </h3>
            
            <div className="space-y-3">
              <button
                onClick={() => handleOptionClick("cotizacion")}
                className="w-full flex items-center p-3 border border-gray-200 rounded-lg hover:border-brand-red hover:bg-red-50 transition-all duration-200 group"
              >
                <div className="bg-brand-red/10 p-2 rounded-lg mr-3 group-hover:bg-brand-red/20 transition-colors">
                  <FaQuoteRight className="text-brand-red text-lg" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-gray-800 group-hover:text-brand-red">Cotización inmediata</div>
                  <div className="text-sm text-gray-600">Precios directos de fábrica</div>
                </div>
              </button>

              <button
                onClick={() => handleOptionClick("asesoria")}
                className="w-full flex items-center p-3 border border-gray-200 rounded-lg hover:border-brand-red hover:bg-red-50 transition-all duration-200 group"
              >
                <div className="bg-brand-red/10 p-2 rounded-lg mr-3 group-hover:bg-brand-red/20 transition-colors">
                  <FaQuestionCircle className="text-brand-red text-lg" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-gray-800 group-hover:text-brand-red">Asesoría técnica</div>
                  <div className="text-sm text-gray-600">Para proyectos especiales</div>
                </div>
              </button>

              <button
                onClick={() => handleOptionClick("medidas")}
                className="w-full flex items-center p-3 border border-gray-200 rounded-lg hover:border-brand-red hover:bg-red-50 transition-all duration-200 group"
              >
                <div className="bg-brand-red/10 p-2 rounded-lg mr-3 group-hover:bg-brand-red/20 transition-colors">
                  <FaRulerCombined className="text-brand-red text-lg" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-gray-800 group-hover:text-brand-red">Medidas especiales</div>
                  <div className="text-sm text-gray-600">Fabricación a medida</div>
                </div>
              </button>

              <button
                onClick={() => handleOptionClick("visita")}
                className="w-full flex items-center p-3 border border-gray-200 rounded-lg hover:border-brand-red hover:bg-red-50 transition-all duration-200 group"
              >
                <div className="bg-brand-red/10 p-2 rounded-lg mr-3 group-hover:bg-brand-red/20 transition-colors">
                  <FaCalendarAlt className="text-brand-red text-lg" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-gray-800 group-hover:text-brand-red">Visita a fábrica</div>
                  <div className="text-sm text-gray-600">Agendar cita en planta</div>
                </div>
              </button>
            </div>

            {/* Contactos alternativos */}
            <div className="mt-6 pt-4 border-t border-gray-100">
              <h4 className="font-bold text-gray-700 mb-2">Otros contactos:</h4>
              <div className="space-y-2">
                <a 
                  href="tel:+525518246146"
                  className="flex items-center text-gray-600 hover:text-brand-red transition-colors"
                >
                  <MdPhone className="mr-2" />
                  <span>55 1824 6146</span>
                </a>
                <a 
                  href="mailto:ventasjga.lockers@gmail.com"
                  className="flex items-center text-gray-600 hover:text-brand-red transition-colors"
                >
                  <MdEmail className="mr-2" />
                  <span>ventasjga.lockers@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Footer del menú */}
          <div className="bg-gray-50 p-3 rounded-b-xl text-center border-t border-gray-200">
            <p className="text-xs text-gray-500">
              Horarios: Lun-Vie 9:00-20:00 • Sáb 9:00-14:00
            </p>
          </div>

          {/* Flecha hacia abajo */}
          <div className="absolute -bottom-2 right-6 text-white">
            <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
              <path d="M0 0L10 10L20 0H0Z" fill="white" />
            </svg>
          </div>
        </div>
      )}

      {/* Botón principal flotante */}
      <div className="relative">
        {isVisible && !isOpen && (
          <div className="absolute -top-12 right-0 bg-white px-3 py-2 rounded-lg shadow-lg border border-gray-200 animate-fadeIn">
            <div className="flex items-center">
              <div className={`w-2 h-2 rounded-full mr-2 ${getStatusColor()} animate-pulse`}></div>
              <span className="text-sm font-bold text-gray-700">{getCurrentStatus()}</span>
            </div>
            <div className="absolute -bottom-1 right-4 w-2 h-2 bg-white transform rotate-45 border-r border-b border-gray-200"></div>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            ${isOpen ? 'bg-green-600' : 'bg-green-500 hover:bg-green-600'} 
            text-white p-4 rounded-full shadow-2xl 
            transition-all duration-300 transform hover:scale-110
            flex items-center justify-center relative
            ${isVisible ? 'animate-bounce-subtle' : ''}
          `}
          aria-label="Contactar por WhatsApp"
        >
          {isOpen ? (
            <FaTimes className="text-2xl" />
          ) : (
            <>
              <FaWhatsapp className="text-3xl" />
              <div className="absolute -top-1 -right-1 bg-white text-green-600 text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                <FaChevronDown className="text-xs" />
              </div>
            </>
          )}
        </button>
      </div>

      {/* Estilos de animación */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-bounce-subtle {
          animation: bounce-subtle 2s infinite;
        }
      `}</style>
    </div>
  );
}