import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Catálogo de Lockers Industriales | JGA México 2025',
  description: 'Catálogo técnico de lockers metálicos, plásticos y de madera. Soluciones para industrias, escuelas, gimnasios y oficinas. Cotización directa por WhatsApp.',
  keywords: 'lockers catálogo, lockers industriales, lockers escolares, lockers gimnasio, lockers oficina, precio lockers',
  openGraph: {
    title: 'Catálogo Completo de Lockers | JGA México',
    description: 'Más de 50 modelos de lockers industriales y comerciales',
    type: 'website',
  },
};

export default function CatalogoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}