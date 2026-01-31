'use client';

import { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaQuestionCircle, FaWhatsapp } from 'react-icons/fa';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // ESTRATEGIA SEO: Preguntas reales que la gente escribe en Google
  const faqs = [
    {
      question: "¿Cuál es la diferencia entre Lockers de Plástico (PVC) y Metálicos?",
      answer: "La principal diferencia es la resistencia a la humedad. Los Lockers Metálicos (Acero C-24) son ideales para uso rudo en seco (industria, escuelas). Los Lockers de PVC JGA son 100% inoxidables, diseñados para zonas húmedas como albercas, playas o laboratorios. Si hay humedad, elige PVC."
    },
    {
      question: "¿Hacen envíos de lockers a todo México?",
      answer: "Sí. Contamos con flota propia para entregas en CDMX y Área Metropolitana. Para el resto de la República (Monterrey, Guadalajara, Cancún, Tijuana, etc.) tenemos una alianza con Transportes Castores para asegurar que tu pedido llegue intacto y asegurado."
    },
    {
      question: "¿Venden lockers de una sola puerta o tienen mínimo de compra?",
      answer: "Somos fabricantes flexibles. Vendemos desde 1 pieza para particulares hasta proyectos de +1,000 puertas para licitaciones corporativas. El precio mejora por volumen."
    },
    {
      question: "¿Cuánto tiempo tardan en entregar un pedido?",
      answer: "Para productos de línea (stock), el envío es de 24 a 48 horas. Para proyectos personalizados o colores especiales, el tiempo de fabricación es de 8 a 12 días hábiles. Siempre te daremos una fecha real por escrito."
    },
    {
      question: "¿Los lockers ya vienen armados o desarmados?",
      answer: "Entregamos nuestros lockers 100% armados y soldados (monoblock). A diferencia de los lockers de 'caja' que se ensamblan con tornillos y quedan flojos, los nuestros llegan listos para usarse, garantizando mayor rigidez y durabilidad."
    },
    {
      question: "¿Dan factura y garantía?",
      answer: "Sí, todos nuestros precios son + IVA si requieres factura. Ofrecemos 5 años de garantía contra defectos de fabricación en estructura metálica y garantía de por vida contra óxido en la línea de PVC."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        
        {/* Encabezado */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center text-brand-red font-bold tracking-widest uppercase text-sm mb-2">
            <FaQuestionCircle className="mr-2" />
            RESOLVEMOS TUS DUDAS
          </span>
          <h2 className="font-oswald font-bold text-3xl md:text-4xl text-black">
            PREGUNTAS FRECUENTES SOBRE <span className="text-brand-red">LOCKERS</span>
          </h2>
          <p className="text-gray-500 mt-4">
            Respondemos lo que la mayoría de nuestros clientes preguntan antes de comprar.
          </p>
        </div>

        {/* Acordeón de Preguntas */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl transition-all duration-300 ${
                openIndex === index 
                  ? 'border-brand-red bg-red-50/10 shadow-lg' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`font-bold text-lg ${openIndex === index ? 'text-brand-red' : 'text-gray-800'}`}>
                  {faq.question}
                </span>
                <span className={`ml-4 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-brand-red' : 'text-gray-400'}`}>
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-transparent">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Final */}
        <div className="mt-12 text-center bg-gray-50 rounded-2xl p-8 border border-gray-200">
          <p className="font-bold text-gray-900 mb-4">
            ¿Tienes una pregunta más específica?
          </p>
          <a 
            href="https://wa.me/5215518246146?text=Hola%20JGA,%20tengo%20una%20duda%20que%20no%20está%20en%20su%20página..."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-brand-red font-bold hover:underline"
          >
            <FaWhatsapp className="text-xl" />
            Preguntar directo a un Ingeniero
          </a>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;