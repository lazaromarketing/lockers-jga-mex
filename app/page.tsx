// app/page.tsx - VERSIÓN CORREGIDA
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import CategoriesSection from '@/components/sections/CategoriesSection';
import ClientsSection from '@/components/sections/ClientsSection';
import LogisticsSection from '@/components/sections/LogisticsSection';

export default function Home() {
  return (
    // QUITAR: <Header /> y <Footer />
    // El layout.tsx YA los incluye automáticamente
    
    // El contenido del home va directo, sin wrappers extra:
    <>
      <HeroSection />
      <FeaturesSection />
      <CategoriesSection />
      <ClientsSection />
      <LogisticsSection />
    </>
  );
}