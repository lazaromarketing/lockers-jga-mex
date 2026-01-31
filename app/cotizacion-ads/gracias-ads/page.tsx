import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FaCheckCircle, 
  FaFilePdf, 
  FaArrowRight,
  FaHardHat,
  FaClock
} from 'react-icons/fa';

// 👇 1. SOLUCIÓN ERROR TS: Importamos la interfaz BlogPost
import { getBlogPosts, BlogPost } from '@/lib/contentful';

export const metadata: Metadata = {
  title: 'Solicitud Recibida | Ingeniería JGA',
  description: 'Tu proyecto está en revisión.',
  robots: { index: false, follow: false },
};

export default async function GraciasAdsPage() {
  
  // 👇 2. SOLUCIÓN ERROR TS: Definimos el tipo del array explícitamente
  let recentPosts: BlogPost[] = [];
  
  try {
    const allPosts = await getBlogPosts();
    // Validamos que allPosts exista antes de cortar
    recentPosts = allPosts ? allPosts.slice(0, 3) : [];
  } catch (error) {
    console.error("Blog load error:", error);
    // Si falla, recentPosts se queda como array vacío [] y no rompe nada
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 flex flex-col">
      
      {/* HEADER FLOTANTE (Ajustado para móvil) */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md py-3 md:py-4 px-6 shadow-sm z-50 flex justify-center border-b border-gray-100">
        <div className="font-oswald font-bold text-xl md:text-2xl text-black tracking-widest">
          LOCKERS <span className="text-brand-red">JGA</span>
        </div>
      </header>

      {/* HERO SECTION: CONFIRMACIÓN INDUSTRIAL (Dark Mode) */}
      <section className="bg-[#050505] text-white pt-28 pb-16 md:pt-32 md:pb-20 px-4 relative overflow-hidden">
        {/* Decoración de fondo (Suavizada para móvil) */}
        <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-brand-red/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          
          {/* Icono Animado (Tamaño ajustado) */}
          <div className="mb-6 md:mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-green-500 blur-xl opacity-40 animate-pulse"></div>
              <FaCheckCircle className="relative text-6xl md:text-7xl text-[#25D366] z-10" />
            </div>
          </div>

          <h1 className="font-oswald text-3xl md:text-6xl font-bold uppercase mb-4 tracking-wide leading-tight">
            Solicitud <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">Recibida</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 font-light max-w-xl mx-auto mb-8 md:mb-10 px-2">
            Tu proyecto ya está en manos de ingeniería.<br />
            <span className="text-white font-medium block mt-2">WhatsApp de seguimiento abierto.</span>
          </p>

          {/* Tarjeta de Estatus (Diseño Móvil Vertical) */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 md:p-8 max-w-3xl mx-auto backdrop-blur-sm">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              
              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="bg-brand-red/20 p-3 rounded-full shrink-0">
                  <FaHardHat className="text-brand-red text-xl md:text-2xl" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest font-bold">Estatus Actual</p>
                  <p className="text-base md:text-lg font-bold text-white">Asignando Ingeniero...</p>
                </div>
              </div>

              {/* Línea divisoria responsive */}
              <div className="w-full h-px bg-white/10 md:w-px md:h-12"></div>

              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="bg-blue-500/20 p-3 rounded-full shrink-0">
                  <FaClock className="text-blue-400 text-xl md:text-2xl" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest font-bold">Tiempo de Respuesta</p>
                  <p className="text-base md:text-lg font-bold text-white">~10 a 15 Minutos</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECCIÓN DE ACCIÓN: CATÁLOGO */}
      <section className="bg-white py-12 md:py-16 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-oswald text-2xl md:text-3xl text-black mb-3 uppercase font-bold">
            Mientras esperas...
          </h2>
          <p className="text-gray-600 mb-8 text-sm md:text-base px-4">
            Adelanta tiempo revisando las fichas técnicas y medidas exactas en nuestro catálogo.
          </p>
          
          {/* Botón Full Width en Móvil */}
          <a 
            href="/catalogo"
            className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-brand-red hover:bg-red-800 text-white font-bold py-4 px-10 rounded-xl md:rounded-full shadow-lg hover:shadow-2xl transition-all uppercase tracking-wider text-sm md:text-base group active:scale-95"
          >
            <FaFilePdf className="text-xl" />
            Descargar Catálogo 2025
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* SECCIÓN BLOG */}
      {recentPosts.length > 0 && (
        <section className="bg-gray-50 py-16 px-4 flex-grow">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-brand-red font-bold text-[10px] uppercase tracking-[0.2em] mb-2 block">
                Blog Industrial
              </span>
              <h2 className="font-oswald text-2xl md:text-4xl text-black font-bold uppercase">
                Aprende de los Expertos
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {recentPosts.map((post) => (
                <Link 
                  href={`/blog/${post.fields.slug}`} 
                  key={post.sys.id}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full active:scale-[0.98]"
                >
                  {/* Imagen (Altura ajustada para móvil) */}
                  <div className="relative h-48 md:h-48 w-full overflow-hidden">
                    <Image
                      src={post.fields.imageUrl || '/images/hero-locker-industrial.png'}
                      alt={post.fields.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-black/80 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider backdrop-blur-md">
                      {post.fields.category || 'Técnico'}
                    </div>
                  </div>
                  
                  {/* Texto */}
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="font-oswald font-bold text-lg text-gray-900 mb-2 leading-tight group-hover:text-brand-red transition-colors line-clamp-2">
                      {post.fields.title}
                    </h3>
                    <p className="text-gray-500 text-xs line-clamp-2 mb-4 flex-grow leading-relaxed">
                      {post.fields.excerpt || 'Guía técnica especializada...'}
                    </p>
                    <div className="pt-3 border-t border-gray-100 flex items-center text-xs font-bold text-brand-red uppercase tracking-wide">
                      Leer Artículo <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FOOTER SIMPLE */}
      <footer className="bg-white py-8 border-t border-gray-200 text-center">
        <p className="text-gray-400 text-[10px] uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Lockers JGA México.
        </p>
      </footer>

    </div>
  );
}