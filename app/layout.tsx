import type { Metadata } from "next";
import { Roboto, Oswald } from "next/font/google";
import "./globals.css";
import Script from "next/script"; // Componente para Google Ads

// Importar componentes existentes
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";

// Configuración de fuentes
const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  preload: true,
});

const oswald = Oswald({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-oswald',
  preload: true,
});

// Metadatos Globales
export const metadata: Metadata = {
  title: "Lockers JGA MEX | Fabricantes de Lockers Industriales y PVC",
  description: "Fabricantes directos de lockers metálicos y PVC aséptico desde 2004. Envíos a todo México. Calidad de exportación sin intermediarios.",
  keywords: ["lockers industriales", "lockers pvc", "lockers mexico", "fabricantes de lockers", "lockers para celulares", "muebles metalicos", "lockers asépticos"],
  authors: [{ name: "Lockers JGA MEX" }],
  robots: "index, follow",
  metadataBase: new URL('https://lockersjgamexico.com'), // Tu dominio real
  openGraph: {
    title: "Lockers JGA MEX | Fabricantes Directos desde 2004",
    description: "Trato directo de fábrica. Ahorra 40% evitando intermediarios.",
    type: "website",
    locale: "es_MX",
    url: "https://lockersjgamexico.com",
    siteName: "Lockers JGA México",
  },
};

// Script para limpieza de atributos (Anti-extensions)
function ClientScripts() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          if (typeof window !== 'undefined') {
            const cleanAttributes = () => {
              const elements = [document.documentElement, document.body];
              const badAttrs = ['data-lt-installed', '__processed', 'data-gramm', 'data-new-gr-c-s-check-loaded'];
              elements.forEach(el => {
                badAttrs.forEach(attr => {
                  try { el.removeAttribute(attr); } catch(e) {}
                });
              });
            };
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', cleanAttributes);
            } else {
              cleanAttributes();
            }
          }
        `,
      }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Datos Estructurados (JSON-LD) para que Google entienda tu negocio
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Lockers JGA México",
    "image": "https://lockersjgamexico.com/images/hero-locker-industrial.png",
    "description": "Fabricación y venta de lockers industriales, escolares y de PVC.",
    "url": "https://lockersjgamexico.com",
    "telephone": "+525518246146",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Calle Reyes de Argón Smz 20 Mz 1 Lote 3 Vivienda C",
      "addressLocality": "Chicoloapan",
      "addressRegion": "Estado de México",
      "postalCode": "56383",
      "addressCountry": "MX"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.4167,
      "longitude": -98.9000
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "14:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/p/Lockers-JGA-61567521427622/",
      "https://www.tiktok.com/@lockersjga"
    ],
    "priceRange": "$$"
  };

  return (
    <html 
      lang="es" 
      className={`${roboto.variable} ${oswald.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* GOOGLE ADS TAG (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-11529534054"
          strategy="afterInteractive"
        />
        <Script id="google-ads-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11529534054');
          `}
        </Script>

        {/* JSON-LD Estructurado */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        <ClientScripts />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body 
        className="bg-brand-black text-brand-white font-sans antialiased"
        suppressHydrationWarning
      >
        <Header />
        <WhatsAppFloat />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}