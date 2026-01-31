import Image from 'next/image';
import Link from 'next/link';
import { FaCalendarAlt, FaUser, FaArrowRight } from 'react-icons/fa';
import { getBlogPosts } from '../../lib/contentful';

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* HEADER DEL BLOG */}
      <section className="bg-brand-black text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-brand-red font-bold tracking-widest uppercase text-sm mb-4 block animate-fade-in">
            Conocimiento Industrial
          </span>
          <h1 className="font-oswald text-4xl md:text-6xl font-bold mb-6">
            BLOG DE <span className="text-brand-red">EXPERTOS</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Noticias, guías de mantenimiento y tendencias en almacenamiento industrial directamente de los fabricantes.
          </p>
        </div>
      </section>

      {/* LISTADO DE ARTÍCULOS */}
      <section className="container mx-auto px-4 -mt-10 relative z-20">
        {posts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-400">Aún no hay artículos publicados.</h3>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => {
              const fields = post.fields || {};
              
              // YA NO NECESITAMOS CONVERTIR, getBlogPosts YA LO HACE
              const title = fields.title || 'Sin título';
              const excerpt = fields.excerpt || 'Lee el artículo completo para más información.';
              const category = typeof fields.category === 'string' ? fields.category : 'Industrial';
              const author = typeof fields.author === 'string' ? fields.author : 'JGA México';
              const date = fields.date || new Date().toISOString();
              const slug = fields.slug || '';
              
              // URL de imagen (ahora viene de imageUrl)
              const imageUrl = fields.imageUrl || '/images/hero-locker-industrial.png';

              return (
                <article key={post.sys?.id || slug} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full border border-gray-100">
                  
                  <div className="relative h-56 w-full overflow-hidden group">
                    <Image
                      src={imageUrl}
                      alt={title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 left-4 bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {category}
                    </div>
                  </div>

                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center text-xs text-gray-500 mb-4 space-x-4">
                      <span className="flex items-center">
                        <FaCalendarAlt className="mr-2 text-brand-red" />
                        {new Date(date).toLocaleDateString('es-MX', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </span>
                      <span className="flex items-center">
                        <FaUser className="mr-2 text-brand-red" />
                        {author}
                      </span>
                    </div>

                    <h2 className="font-oswald text-2xl font-bold text-gray-900 mb-3 leading-tight hover:text-brand-red transition-colors">
                      <Link href={`/blog/${slug}`}>
                        {title}
                      </Link>
                    </h2>

                    <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow">
                      {excerpt}
                    </p>

                    <Link 
                      href={`/blog/${slug}`}
                      className="inline-flex items-center text-brand-red font-bold uppercase text-sm tracking-wider hover:underline group"
                    >
                      Leer Artículo Completo 
                      <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}