import type { Metadata } from "next";
import { Roboto, Oswald } from "next/font/google";
import "./globals.css";

// Importar componentes
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat"; // 👈 NUEVO

// Configurar Roboto como fuente principal
const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  preload: true,
});

// Configurar Oswald como fuente para títulos
const oswald = Oswald({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-oswald',
  preload: true,
});

export const metadata: Metadata = {
  title: "Lockers JGA MEX | Fabricantes de Lockers Industriales desde 2004",
  description: "Más de 20 años fabricando lockers industriales de alta calidad. Trato directo de fábrica sin intermediarios. Envíos a toda la República Mexicana.",
  keywords: ["lockers industriales", "lockers México", "fabricantes de lockers", "lockers escolares", "lockers deportivos", "muebles metálicos", "lockers personalizados"],
  authors: [{ name: "Lockers JGA MEX" }],
  robots: "index, follow",
  openGraph: {
    title: "Lockers JGA MEX | Fabricantes Directos desde 2004",
    description: "Trato directo de fábrica. Sin intermediarios. Más de 20 años de experiencia.",
    type: "website",
  },
};

// Client Component para limpieza de extensiones
function ClientScripts() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          // Solo ejecutar en cliente
          if (typeof window !== 'undefined') {
            // Esperar a que el DOM esté listo
            const cleanAttributes = () => {
              const elements = [document.documentElement, document.body];
              const badAttrs = [
                'data-lt-installed',
                '__processed',
                'data-gramm',
                'data-new-gr-c-s-check-loaded'
              ];
              
              elements.forEach(el => {
                badAttrs.forEach(attr => {
                  try {
                    el.removeAttribute(attr);
                  } catch(e) {}
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
  return (
    <html 
      lang="es" 
      className={`${roboto.variable} ${oswald.variable}`}
      suppressHydrationWarning
    >
      <head>
        <ClientScripts />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body 
        className="bg-brand-black text-brand-white font-sans antialiased"
        suppressHydrationWarning
      >
        {/* HEADER */}
        <Header />
        
        {/* WHATSAPP FLOAT (COMPONENTE NUEVO) */}
        <WhatsAppFloat />
        
        {/* CONTENIDO PRINCIPAL */}
        <main className="min-h-screen">
          {children}
        </main>
        
        {/* FOOTER */}
        <Footer />
      </body>
    </html>
  );
}