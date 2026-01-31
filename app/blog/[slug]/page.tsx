import { Metadata } from 'next'; // Importante para el SEO
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendarAlt, FaUser, FaArrowLeft, FaWhatsapp, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { notFound } from 'next/navigation';
import { getPostBySlug } from '../../../lib/contentful'; 
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';

type Props = {
  params: Promise<{ slug: string }>;
};

// ----------------------------------------------------------------------
// 1. GENERACIÓN DE METADATOS (SEO DINÁMICO)
// Esto es lo que leen Google, WhatsApp y Facebook antes de abrir la web
// ----------------------------------------------------------------------
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Artículo no encontrado',
    };
  }

  const { title, excerpt, image } = post.fields;

  // Arreglamos URL de imagen para los metadatos
  let imageUrl = 'https://lockersjgamexico.com/images/hero-locker-industrial.png'; // Imagen por defecto
  if (image?.fields?.file?.url) {
    imageUrl = image.fields.file.url.startsWith('//') 
      ? `https:${image.fields.file.url}` 
      : image.fields.file.url;
  }

  return {
    title: `${title} | Lockers JGA Blog`,
    description: excerpt || 'Artículo especializado en almacenamiento industrial y lockers.',
    openGraph: {
      title: title,
      description: excerpt || 'Lee este artículo en el blog de expertos de JGA.',
      url: `https://lockersjgamexico.com/blog/${slug}`,
      siteName: 'Lockers JGA México',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: excerpt || '',
      images: [imageUrl],
    },
  };
}

// ----------------------------------------------------------------------
// 2. COMPONENTE VISUAL (LA PÁGINA)
// ----------------------------------------------------------------------
export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  const { title, date, author, category, image, content } = post.fields;

  // Arreglamos URL de imagen principal para mostrarla en pantalla
  let imageUrl = '/images/hero-locker-industrial.png';
  if (image?.fields?.file?.url) {
    imageUrl = image.fields.file.url.startsWith('//') 
      ? `https:${image.fields.file.url}` 
      : image.fields.file.url;
  }

  // --- CONFIGURACIÓN DE ESTILOS (Rich Text a Tailwind) ---
  const renderOptions = {
    renderMark: {
      [MARKS.BOLD]: (text: any) => <strong className="font-bold text-black">{text}</strong>,
      [MARKS.ITALIC]: (text: any) => <em className="italic text-gray-800">{text}</em>,
    },
    renderNode: {
      // Párrafos: Gris oscuro para leer bien sobre fondo blanco
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
        <p className="mb-6 text-lg leading-relaxed text-gray-700 font-light text-justify">
          {children}
        </p>
      ),
      // Títulos H2: Grandes, fuente Oswald y color Negro/Rojo
      [BLOCKS.HEADING_2]: (node: any, children: any) => (
        <h2 className="font-oswald text-3xl font-bold text-gray-900 mt-10 mb-4 border-l-4 border-brand-red pl-3 uppercase">
          {children}
        </h2>
      ),
      // Títulos H3: Un poco más chicos
      [BLOCKS.HEADING_3]: (node: any, children: any) => (
        <h3 className="font-oswald text-2xl font-bold text-gray-800 mt-8 mb-3">
          {children}
        </h3>
      ),
      // Listas con puntitos (Bullets)
      [BLOCKS.UL_LIST]: (node: any, children: any) => (
        <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700 marker:text-brand-red">
          {children}
        </ul>
      ),
      // Listas numeradas
      [BLOCKS.OL_LIST]: (node: any, children: any) => (
        <ol className="list-decimal pl-6 mb-8 space-y-2 text-gray-700 marker:font-bold">
          {children}
        </ol>
      ),
      // Citas (Quotes)
      [BLOCKS.QUOTE]: (node: any, children: any) => (
        <blockquote className="border-l-4 border-gray-300 pl-4 py-2 mb-6 italic text-gray-600 bg-gray-50 rounded-r-lg">
          {children}
        </blockquote>
      ),
      // Imágenes EMBEBIDAS (Si pones una foto a mitad del articulo)
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const { file, title } = node.data.target.fields;
        const imgUrl = file.url.startsWith('//') ? `https:${file.url}` : file.url;
        return (
          <div className="my-8 relative h-64 md:h-96 w-full rounded-xl overflow-hidden shadow-lg">
            <Image 
              src={imgUrl} 
              alt={title || 'Imagen del artículo'} 
              fill 
              className="object-cover"
            />
          </div>
        );
      },
      // Enlaces dentro del texto
      [INLINES.HYPERLINK]: (node: any, children: any) => (
        <a 
          href={node.data.uri} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-brand-red font-bold hover:underline"
        >
          {children}
        </a>
      ),
    },
  };

  // URL para compartir (Dinámica)
  const shareUrl = `https://lockersjgamexico.com/blog/${slug}`;
  const shareText = `Checa este artículo de Lockers JGA: ${title}`;

  return (
    <div className="bg-white min-h-screen text-gray-900">
      {/* Barra de progreso visual */}
      <div className="h-1 bg-gray-100 w-full fixed top-0 z-50">
        <div className="h-full bg-brand-red w-1/3 animate-pulse"></div>
      </div>

      {/* HERO SECTION */}
      <div className="relative h-[50vh] md:h-[60vh] min-h-[400px] w-full bg-brand-black">
        <Image
          src={imageUrl}
          alt={title || 'Blog JGA'}
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 pb-12">
          <div className="container mx-auto max-w-4xl">
            <Link href="/blog" className="inline-flex items-center text-gray-300 hover:text-brand-red mb-6 transition-colors text-sm font-bold uppercase tracking-wider group">
              <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" /> Volver al Blog
            </Link>
            
            <div className="flex flex-wrap gap-2 mb-4">
               <span className="bg-brand-red text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider shadow-lg">
                 {category || 'Industrial'}
               </span>
            </div>
            
            <h1 className="font-oswald text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-none shadow-black drop-shadow-lg">
              {title}
            </h1>
            
            <div className="flex items-center text-gray-300 text-sm space-x-6 border-t border-gray-700 pt-6">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center mr-3 border border-gray-600 text-brand-red">
                  <FaUser />
                </div>
                <span className="font-medium text-white">{author || 'JGA México'}</span>
              </div>
              <div className="flex items-center">
                <FaCalendarAlt className="mr-2 text-brand-red" />
                <span>{date ? new Date(date).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' }) : ''}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          
          {/* COLUMNA IZQUIERDA: ARTÍCULO REAL */}
          <article className="lg:w-2/3">
            <div className="prose prose-lg max-w-none">
              {content ? documentToReactComponents(content, renderOptions) : (
                <div className="p-8 bg-gray-50 rounded-xl text-center border border-dashed border-gray-300">
                  <p className="text-gray-500 italic">Este artículo se está redactando. Vuelve pronto.</p>
                </div>
              )}
            </div>
            
            {/* SHARE BUTTONS FUNCIONALES */}
            <div className="border-t border-gray-200 py-10 mt-16">
              <p className="text-center text-gray-400 text-xs font-black uppercase tracking-[0.2em] mb-6">
                Comparte este conocimiento
              </p>
              <div className="flex justify-center gap-4">
                <a 
                  href={`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all"
                  aria-label="Compartir en WhatsApp"
                >
                  <FaWhatsapp className="text-2xl" />
                </a>
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all"
                  aria-label="Compartir en Facebook"
                >
                  <FaFacebookF className="text-xl" />
                </a>
                <a 
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#0077b5] text-white flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all"
                  aria-label="Compartir en LinkedIn"
                >
                  <FaLinkedinIn className="text-xl" />
                </a>
              </div>
            </div>
          </article>

          {/* COLUMNA DERECHA: SIDEBAR */}
          <aside className="lg:w-1/3">
            <div className="sticky top-24 space-y-8">
              
              {/* Tarjeta de Venta */}
              <div className="bg-brand-black text-white p-8 rounded-3xl text-center relative overflow-hidden shadow-2xl border-t-8 border-brand-red group">
                <div className="absolute top-0 right-0 w-40 h-40 bg-brand-red rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                
                <h3 className="font-oswald text-2xl font-bold mb-4 relative z-10 uppercase italic">
                  ¿Te interesó el tema?
                </h3>
                <p className="text-gray-400 mb-8 text-sm relative z-10 leading-relaxed">
                  Somos fabricantes directos. Si necesitas equipar tu empresa con la calidad que acabas de leer, contáctanos hoy.
                </p>
                
                <a 
                  href="https://wa.me/525518246146" 
                  className="flex items-center justify-center w-full bg-brand-red hover:bg-red-700 text-white font-black py-4 rounded-xl transition-all active:scale-95 shadow-lg relative z-10 uppercase tracking-wide"
                >
                  <FaWhatsapp className="mr-2 text-xl" /> Cotizar Ahora
                </a>
              </div>

            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}