'use client';

import { useState, useEffect } from 'react';
import { 
  FiFilter, FiX, FiCheck, FiShield, FiTool, 
  FiDroplet, FiLock, FiDollarSign, FiChevronRight 
} from 'react-icons/fi';
import { 
  FaWhatsapp, FaIndustry, FaSchool, FaBuilding, 
  FaHospital, FaDumbbell, FaStore, FaFire,
  FaShippingFast, FaCertificate, FaHardHat
} from 'react-icons/fa';
import { GiMetalPlate, GiWoodBeam } from 'react-icons/gi';
import { products, categories, sectors, narrativeFilters, getSectorIcon } from '@/data/products';
import Image from 'next/image';
import Link from 'next/link';

export default function CatalogoPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSectors, setSelectedSectors] = useState<string[]>([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [activeNarrativeFilter, setActiveNarrativeFilter] = useState<string | null>(null);

  // Renderizar barras de durabilidad
  const renderDurabilityBars = (level: number) => {
    const bars = [];
    for (let i = 1; i <= 5; i++) {
      bars.push(
        <div 
          key={i} 
          className={`h-2 rounded-full ${i <= level ? 'bg-brand-red' : 'bg-gray-300'}`}
          style={{ width: '18px' }}
        />
      );
    }
    
    let label = "";
    let color = "";
    
    if (level === 5) {
      label = "USO RUDO MINERO";
      color = "text-red-600";
    } else if (level >= 4) {
      label = "ALTA RESISTENCIA";
      color = "text-orange-600";
    } else if (level === 3) {
      label = "USO INDUSTRIAL";
      color = "text-yellow-600";
    } else if (level === 2) {
      label = "USO COMERCIAL";
      color = "text-blue-600";
    } else {
      label = "USO LIGERO";
      color = "text-green-600";
    }
    
    return (
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex gap-1">{bars}</div>
          <span className={`text-xs font-bold ${color}`}>{label}</span>
        </div>
      </div>
    );
  };

  // Aplicar filtros narrativos
  const applyNarrativeFilter = (filterId: string) => {
    const filter = narrativeFilters.find(f => f.id === filterId);
    if (!filter) return;
    
    setActiveNarrativeFilter(filterId);
    
    if (filter.id === 'humidity') {
      setSelectedCategories(['plastico']);
      setSelectedSectors([]);
    } else if (filter.id === 'sanitario') {
      setSelectedCategories(['metalicos']);
      setSelectedSectors(['hospital']);
      setSearchQuery('hospitalario');
    } else if (filter.id === 'impact') {
      setSelectedCategories(['metalicos']);
      setSelectedSectors(['industrial']);
      setSearchQuery('');
    } else if (filter.id === 'celulares') {
      setSelectedCategories([]);
      setSelectedSectors(['oficina']);
      setSearchQuery('celulares');
    } else if (filter.id === 'tech') {
      setSelectedCategories(['tecnologia']);
      setSelectedSectors([]);
    } else if (filter.id === 'bancas') {
      setSelectedCategories(['bancas']);
      setSelectedSectors(['gym']);
    }
  };

  // Aplicar filtros técnicos
  useEffect(() => {
    let result = products;

    if (selectedCategories.length > 0) {
      result = result.filter(product => 
        selectedCategories.includes(product.category)
      );
    }

    if (selectedSectors.length > 0) {
      result = result.filter(product => 
        selectedSectors.includes(product.sector)
      );
    }

    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      result = result.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.specs.toLowerCase().includes(query)
      );
    }

    setFilteredProducts(result);
  }, [selectedCategories, selectedSectors, searchQuery]);

  // Componente de tarjeta de producto
  const ProductCard = ({ product }: { product: typeof products[0] }) => (
    <div 
      className={`bg-white rounded-xl border-2 border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${
        product.isHero ? 'md:col-span-2 lg:col-span-2' : ''
      } ${product.isBestSeller ? 'border-brand-red/30' : ''}`}
      onMouseEnter={() => setHoveredProduct(product.id)}
      onMouseLeave={() => setHoveredProduct(null)}
    >
      {/* Badges superiores */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {product.isNew && (
          <span className="bg-brand-red text-white px-3 py-1 rounded-full text-sm font-bold">
            NUEVO
          </span>
        )}
        {product.isBestSeller && (
          <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
            🏆 BEST-SELLER
          </span>
        )}
        {product.isHero && (
          <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-bold">
            EL ESTÁNDAR DE LA INDUSTRIA
          </span>
        )}
      </div>

    {/* Imagen REAL del producto */}
<div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
  {/* Imagen principal */}
  <div className={`absolute inset-0 transition-opacity duration-500 ${
    hoveredProduct === product.id && product.blueprintImage ? 'opacity-0' : 'opacity-100'
  }`}>
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-full object-cover"
    />
    {product.isHero && (
      <div className="absolute bottom-4 left-4 bg-black/80 text-white px-3 py-2 rounded-lg">
        <div className="flex items-center gap-2">
          <FaHardHat />
          <span className="text-sm font-bold">ESTRUCTURA 100% SOLDADA</span>
        </div>
      </div>
    )}
  </div>
  
  {/* Efecto Radiografía (Blueprint) - cuando hay hover */}
  {product.blueprintImage && (
    <div className={`absolute inset-0 transition-opacity duration-500 ${
      hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
    }`}>
      <img
        src={product.blueprintImage}
        alt={`Blueprint ${product.name}`}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-blue-900/30 flex items-center justify-center">
        <div className="text-center p-4">
          <div className="text-4xl mb-4 text-white">
            <FiTool />
          </div>
          <div className="text-white font-bold mb-2">RADIOGRAFÍA TÉCNICA</div>
          <p className="text-white/90 text-sm max-w-xs">
            {product.construction === 'soldado' 
              ? "Estructura monoblock soldada - CERO remaches"
              : product.construction === 'ensamblado'
              ? "Ensamblado de precisión industrial"
              : product.construction === 'carpinteria'
              ? "Carpintería especializada MDF"
              : "Sistema especializado"}
          </p>
        </div>
      </div>
    </div>
  )}
</div>

      {/* Contenido */}
      <div className="p-6">
        {/* Categoría y sector - CORREGIDO */}
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-gray-800 bg-gray-100 px-3 py-1 rounded-full">
              {product.category.toUpperCase()}
            </span>
            {product.construction === 'soldado' && product.category !== 'tecnologia' && (
              <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full flex items-center gap-1">
                <FaFire className="text-xs" /> 100% SOLDADO
              </span>
            )}
            {product.construction === 'ensamblado' && (
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full flex items-center gap-1">
                <FiTool className="text-xs" /> ENSAMBLADO INDUSTRIAL
              </span>
            )}
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            <span className="text-xl">{getSectorIcon(product.sector)}</span>
            <span className="text-xs font-medium ml-1">{product.sector}</span>
          </div>
        </div>

        {/* Nombre */}
        <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">
          {product.name}
        </h3>

        {/* Barra de durabilidad */}
        <div className="mb-4">
          {renderDurabilityBars(product.durabilityLevel)}
        </div>

        {/* Especificaciones */}
        <div className="mb-4 p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-700 font-medium">{product.specs}</p>
              <p className="text-xs text-gray-500 mt-1">
                <span className="font-bold">Garantía:</span> {product.warranty}
              </p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1 text-green-600">
                <FaShippingFast />
                <span className="text-sm font-bold">{product.leadTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Descripción */}
        <p className="text-gray-700 mb-4 line-clamp-2 text-sm">
          {product.description}
        </p>

        {/* Features */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {product.features.slice(0, 3).map((feature, idx) => (
              <span
                key={idx}
                className="text-xs bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg font-medium"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Botón WhatsApp mejorado */}
        <a
          href={`https://wa.me/5215518246146?text=${encodeURIComponent(
            `Hola Lockers JGA, me interesa cotizar el modelo: ${product.name}\nEspecificaciones: ${product.specs}\nGarantía: ${product.warranty}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <FaWhatsapp className="text-xl" />
          <span>COTIZAR POR WHATSAPP</span>
          <FiChevronRight />
        </a>
        
        {/* Nota especial para productos hero */}
        {product.isHero && (
          <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="flex items-center gap-2">
              <FaCertificate className="text-yellow-600" />
              <p className="text-sm text-yellow-800 font-bold">
                Proyectos +50 unidades: Solicita muestra física en tu empresa
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  // Componente de bloque educativo
  const EducationalBlock = ({ index }: { index: number }) => {
    const blocks = [
      {
        title: "¿SABÍAS QUE?",
        content: "Un locker remachado dura 70% menos que uno soldado. Nosotros solo soldamos.",
        icon: "🔧"
      },
      {
        title: "DATOS TÉCNICOS",
        content: "Calibre 26 es papel. Calibre 22 es acero real. Revisa siempre el grosor del material.",
        icon: "📊"
      },
      {
        title: "GARANTÍA REAL",
        content: "10 años estructural significa que la estructura base no fallará. No confíes en garantías de 1 año.",
        icon: "🛡️"
      },
      {
        title: "INSTALACIÓN PROFESIONAL",
        content: "Un locker mal instalado puede ser inseguro. Incluimos kit profesional de anclaje.",
        icon: "⚙️"
      }
    ];
    
    const block = blocks[index % blocks.length];
    
    return (
      <div className="col-span-full bg-gradient-to-r from-gray-900 to-black text-white p-8 rounded-2xl my-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-4xl mb-4">{block.icon}</div>
          <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
            {block.title}
          </h3>
          <p className="text-xl text-gray-300">
            {block.content}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header de Autoridad */}
      <div className="bg-black text-white py-12 md:py-20 relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-red/10 rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full translate-x-48 translate-y-48"></div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center">
            {/* Stock Banner */}
            <div className="inline-flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 px-4 py-2 rounded-full mb-8">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Stock actualizado: Tepic, Nayarit</span>
            </div>
            
            {/* Título Principal */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              NO COMPRES LOCKERS<br />
              <span className="text-brand-red">DESECHABLES</span>
            </h1>
            
            {/* Subtítulo */}
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
              Navega el <span className="font-bold text-white">único catálogo en México</span> con 
              <span className="text-brand-red font-bold"> Garantía Estructural de Fábrica</span>. 
              Si buscas calibre 26 (papel), este no es tu lugar.
            </p>
            
            {/* Badges de autoridad */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 bg-gray-800/60 px-4 py-2 rounded-lg border border-gray-700">
                <FiShield className="text-brand-red" />
                <span className="font-medium">10 años estructural</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-800/60 px-4 py-2 rounded-lg border border-gray-700">
                <GiMetalPlate className="text-brand-red" />
                <span className="font-medium">Solo acero real</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-800/60 px-4 py-2 rounded-lg border border-gray-700">
                <FaHardHat className="text-brand-red" />
                <span className="font-medium">100% soldado</span>
              </div>
            </div>
            
            {/* CTA Inicial */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#productos"
                className="px-8 py-3 bg-brand-red text-white font-bold rounded-lg hover:bg-red-700 transition-colors text-lg"
              >
                VER CATÁLOGO DE ACERO REAL
              </a>
              <a 
                href="https://wa.me/5215518246146"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gray-800 border border-gray-700 text-white font-bold rounded-lg hover:bg-gray-700 transition-colors text-lg flex items-center justify-center gap-2"
              >
                <FaWhatsapp /> CHAT TÉCNICO
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Asesor Narrativo */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12" id="productos">
        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg mb-12">
          <h2 className="font-heading text-3xl font-bold text-center mb-8">
            ¿DÓNDE INSTALARÁS TUS LOCKERS?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {narrativeFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => applyNarrativeFilter(filter.id)}
                className={`p-4 rounded-xl border-2 transition-all ${
                  activeNarrativeFilter === filter.id
                    ? 'border-brand-red bg-red-50'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <div className="text-3xl mb-2">{filter.icon}</div>
                <h3 className="font-bold text-gray-800 mb-1">{filter.label}</h3>
                <p className="text-sm text-gray-600">{filter.description}</p>
              </button>
            ))}
          </div>
          
          {/* Muestra Física */}
          <div className="mt-12 p-6 bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-xl">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <h3 className="font-heading text-2xl font-bold mb-2">
                  ¿TIENES UN PROYECTO DE MÁS DE 50 PUERTAS?
                </h3>
                <p className="text-blue-100">
                  Ningún revendedor de Mercado Libre hace esto. Te enviamos una muestra física a tu empresa.
                </p>
              </div>
              <a 
                href="https://wa.me/5215518246146?text=Solicito muestra física para proyecto empresarial (+50 puertas)"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-white text-blue-900 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg whitespace-nowrap"
              >
                SOLICITAR MUESTRA FÍSICA
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="hidden lg:block w-full lg:w-1/4">
            <div className="sticky top-8 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              {/* Búsqueda */}
              <div className="mb-8">
                <h3 className="font-heading text-lg font-bold mb-3 text-gray-800">Buscar por especificación</h3>
                <input
                  type="text"
                  placeholder="Ej: calibre 22, soldado, hospitalario..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Filtros Técnicos */}
              <div className="space-y-8">
                <div>
                  <h3 className="font-heading text-lg font-bold mb-3 text-gray-800 flex items-center gap-2">
                    <GiMetalPlate /> Material
                  </h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => {
                          if (selectedCategories.includes(category.id)) {
                            setSelectedCategories(selectedCategories.filter(id => id !== category.id));
                          } else {
                            setSelectedCategories([...selectedCategories, category.id]);
                          }
                        }}
                        className={`flex items-center justify-between w-full p-3 rounded-lg border transition-all ${
                          selectedCategories.includes(category.id)
                            ? 'bg-brand-red/10 border-brand-red text-brand-red'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-5 h-5 rounded border flex items-center justify-center ${
                            selectedCategories.includes(category.id)
                              ? 'bg-brand-red border-brand-red'
                              : 'border-gray-300'
                          }`}>
                            {selectedCategories.includes(category.id) && (
                              <FiCheck className="text-white text-sm" />
                            )}
                          </div>
                          <span className="font-medium">{category.label}</span>
                        </div>
                        <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          {category.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Filtros por Sector */}
                <div>
                  <h3 className="font-heading text-lg font-bold mb-3 text-gray-800 flex items-center gap-2">
                    <FaBuilding /> Sector
                  </h3>
                  <div className="space-y-2">
                    {sectors.map((sector) => (
                      <button
                        key={sector.id}
                        onClick={() => {
                          if (selectedSectors.includes(sector.id)) {
                            setSelectedSectors(selectedSectors.filter(id => id !== sector.id));
                          } else {
                            setSelectedSectors([...selectedSectors, sector.id]);
                          }
                        }}
                        className={`flex items-center justify-between w-full p-3 rounded-lg border transition-all ${
                          selectedSectors.includes(sector.id)
                            ? 'bg-brand-red/10 border-brand-red text-brand-red'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-5 h-5 rounded border flex items-center justify-center ${
                            selectedSectors.includes(sector.id)
                              ? 'bg-brand-red border-brand-red'
                              : 'border-gray-300'
                          }`}>
                            {selectedSectors.includes(sector.id) && (
                              <FiCheck className="text-white text-sm" />
                            )}
                          </div>
                          <span className="font-medium">{sector.label}</span>
                        </div>
                        <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          {sector.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Botón limpiar filtros */}
              {(selectedCategories.length > 0 || selectedSectors.length > 0 || searchQuery) && (
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <button
                    onClick={() => {
                      setSelectedCategories([]);
                      setSelectedSectors([]);
                      setSearchQuery('');
                      setActiveNarrativeFilter(null);
                    }}
                    className="w-full px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-lg transition-colors"
                  >
                    Limpiar todos los filtros
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Grid de productos */}
          <div className="w-full lg:w-3/4">
            {/* Contador y info */}
            <div className="mb-8">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="font-heading text-2xl font-bold text-gray-800">
                    {filteredProducts.length} {filteredProducts.length === 1 ? 'PRODUCTO' : 'PRODUCTOS'} DE ACERO REAL
                  </h2>
                  <p className="text-gray-600">
                    Fabricación directa - Sin intermediarios
                  </p>
                </div>
                <button
                  onClick={() => setMobileFiltersOpen(true)}
                  className="lg:hidden flex items-center gap-2 bg-white border border-gray-300 px-4 py-3 rounded-lg font-bold hover:bg-gray-50"
                >
                  <FiFilter />
                  Filtros Técnicos
                </button>
              </div>
            </div>

            {/* Grid con bloques educativos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProducts.map((product, index) => (
  <div key={product.id}>
    <ProductCard product={product} />
    {/* Insertar bloque educativo cada 3 productos */}
    {(index + 1) % 3 === 0 && <EducationalBlock index={index} />}
  </div>
))}
            </div>

            {/* Sin resultados */}
            {filteredProducts.length === 0 && (
              <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
                <div className="text-6xl mb-6 text-gray-300">🔧</div>
                <h3 className="font-heading text-2xl font-bold text-gray-800 mb-4">
                  ¿BUSCAS ALGO A MEDIDA?
                </h3>
                <p className="text-gray-600 max-w-md mx-auto mb-8">
                  Fabricamos diseños especiales según tus necesidades específicas. 
                  Medidas no estándar, colores corporativos, sistemas de seguridad avanzados.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => {
                      setSelectedCategories([]);
                      setSelectedSectors([]);
                      setSearchQuery('');
                      setActiveNarrativeFilter(null);
                    }}
                    className="px-6 py-3 bg-gray-800 text-white font-bold rounded-lg hover:bg-black"
                  >
                    VER TODOS LOS PRODUCTOS
                  </button>
                  <a
                    href="https://wa.me/5215518246146?text=Necesito locker a medida, quiero cotizar diseño especial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-brand-red text-white font-bold rounded-lg hover:bg-red-700 inline-flex items-center justify-center gap-2"
                  >
                    <FaWhatsapp /> SOLICITAR DISEÑO ESPECIAL
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal de filtros móvil */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 lg:hidden">
          <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-xl overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-heading text-xl font-bold">Filtros Técnicos</h3>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <FiX size={24} />
                </button>
              </div>

              {/* Búsqueda */}
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Buscar especificación..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Categorías */}
              <div className="mb-8">
                <h4 className="font-bold mb-3">Material</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        if (selectedCategories.includes(category.id)) {
                          setSelectedCategories(selectedCategories.filter(id => id !== category.id));
                        } else {
                          setSelectedCategories([...selectedCategories, category.id]);
                        }
                      }}
                      className={`flex items-center justify-between w-full p-3 rounded-lg border ${
                        selectedCategories.includes(category.id)
                          ? 'bg-brand-red/10 border-brand-red'
                          : 'border-gray-200'
                      }`}
                    >
                      <span>{category.label}</span>
                      <span className="text-sm text-gray-500">({category.count})</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Sectores */}
              <div className="mb-8">
                <h4 className="font-bold mb-3">Sector</h4>
                <div className="space-y-2">
                  {sectors.map((sector) => (
                    <button
                      key={sector.id}
                      onClick={() => {
                        if (selectedSectors.includes(sector.id)) {
                          setSelectedSectors(selectedSectors.filter(id => id !== sector.id));
                        } else {
                          setSelectedSectors([...selectedSectors, sector.id]);
                        }
                      }}
                      className={`flex items-center justify-between w-full p-3 rounded-lg border ${
                        selectedSectors.includes(sector.id)
                          ? 'bg-brand-red/10 border-brand-red'
                          : 'border-gray-200'
                      }`}
                    >
                      <span>{sector.label}</span>
                      <span className="text-sm text-gray-500">({sector.count})</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Botones */}
              <div className="space-y-3">
                <button
                  onClick={() => {
                    setSelectedCategories([]);
                    setSelectedSectors([]);
                    setSearchQuery('');
                    setActiveNarrativeFilter(null);
                  }}
                  className="w-full px-4 py-3 bg-gray-100 text-gray-800 font-bold rounded-lg"
                >
                  Limpiar filtros
                </button>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="w-full px-4 py-3 bg-brand-red text-white font-bold rounded-lg"
                >
                  Ver {filteredProducts.length} productos
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}