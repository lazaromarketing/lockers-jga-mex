import { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import CategoriesSection from '@/components/sections/CategoriesSection';
import ClientsSection from '@/components/sections/ClientsSection';
import LogisticsSection from '@/components/sections/LogisticsSection';
import FAQSection from '@/components/sections/FAQSection'; // 👈 La nueva sección clave

// METADATOS GLOBALES PARA LA HOME (Lo primero que lee Google)
export const metadata: Metadata = {
  title: 'Fabricantes de Lockers en México | Acero y PVC (Plástico) - JGA',
  description: 'Fábrica de Lockers JGA. Especialistas en lockers de plástico (PVC) inoxidables para zonas húmedas y lockers metálicos industriales. Venta directa y envíos a todo México.',
  keywords: ['lockers mexico', 'fabricantes de lockers', 'lockers pvc', 'lockers metalicos', 'venta de lockers cdmx', 'lockers guadalajara', 'lockers monterrey'],
  alternates: {
    canonical: 'https://lockersjgamexico.com',
  },
};

export default function Home() {
  // 🧠 EL HACK SEO: Datos Estructurados (JSON-LD)
  // Esto le dice a Google explícitamente que eres una Fábrica y responde dudas comunes.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Lockers JGA México",
        "url": "https://lockersjgamexico.com",
        "logo": "https://lockersjgamexico.com/images/logo-lockers-jga.png",
        "description": "Fabricantes de lockers metálicos y de PVC en México con envíos nacionales.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Chicoloapan",
          "addressRegion": "Estado de México",
          "addressCountry": "MX"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+52-55-1824-6146",
          "contactType": "sales",
          "areaServed": "MX",
          "availableLanguage": "Spanish"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "¿Cuál es la diferencia entre Lockers de Plástico y Metálicos?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Los Lockers Metálicos (Acero C-24) son ideales para uso rudo en seco. Los Lockers de PVC JGA son 100% inoxidables, diseñados para zonas húmedas como albercas, playas o laboratorios."
            }
          },
          {
            "@type": "Question",
            "name": "¿Hacen envíos de lockers a todo México?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sí. Contamos con flota propia para entregas en CDMX y Área Metropolitana. Para el resto de la República tenemos alianza con Transportes Castores."
            }
          },
          {
            "@type": "Question",
            "name": "¿Son fabricantes o revendedores?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Somos fabricantes directos con planta en el Estado de México. Esto nos permite ofrecer refacciones garantizadas y precios sin intermediarios."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      {/* Inyección del Script SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Estructura Visual de la Página */}
      <HeroSection />
      <FeaturesSection />
      <CategoriesSection />
      <ClientsSection />
      <LogisticsSection />
      <FAQSection />
    </>
  );
}