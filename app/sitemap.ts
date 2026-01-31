import { MetadataRoute } from 'next';
// 👇 Importamos la interfaz BlogPost para que TypeScript no se queje
import { getBlogPosts, BlogPost } from '../lib/contentful';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://lockersjgamexico.com';

  // 👇 CORRECCIÓN: Tipado explícito del array vacío
  let blogPosts: BlogPost[] = [];

  try {
    blogPosts = await getBlogPosts();
  } catch (error) {
    console.error("Error al obtener posts para el sitemap:", error);
    // Si falla, se mantiene como array vacío pero tipado correctamente
    blogPosts = [];
  }

  // 2. Mapeamos los posts
  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => {
    // Lógica defensiva para la fecha
    let dateValue = post.fields.date || post.sys.updatedAt;
    let finalDate = new Date(); // Por defecto hoy

    try {
      if (dateValue) {
        const parsedDate = new Date(dateValue);
        if (!isNaN(parsedDate.getTime())) {
          finalDate = parsedDate;
        }
      }
    } catch (e) {
      console.warn(`Fecha inválida en post: ${post.fields.slug}, usando fecha actual.`);
    }

    return {
      url: `${baseUrl}/blog/${post.fields.slug}`,
      lastModified: finalDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    };
  });

  // 3. Rutas estáticas
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/catalogo`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/servicios`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/nosotros`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  return [...staticRoutes, ...blogEntries];
}