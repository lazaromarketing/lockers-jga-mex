import { MetadataRoute } from 'next';
// 👇 Importamos 'BlogPost' para que TypeScript sepa qué tipo de datos son
import { getBlogPosts, BlogPost } from '../lib/contentful'; 

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://lockersjgamexico.com';

  // 👇 CORRECCIÓN AQUÍ: Le decimos explícitamente que es una lista de BlogPosts
  let posts: BlogPost[] = [];

  try {
    posts = await getBlogPosts();
  } catch (error) {
    console.warn('No se pudieron cargar los posts para el sitemap:', error);
  }

  // Mapeamos los posts dinámicos
  const blogUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.fields.slug}`,
    lastModified: new Date(post.fields.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Rutas estáticas (Las fijas de tu web)
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/catalogo`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/servicios`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/nosotros`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ];

  return [...staticRoutes, ...blogUrls];
}