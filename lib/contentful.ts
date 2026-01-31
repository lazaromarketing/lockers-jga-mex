import { createClient } from 'contentful';

// Configuración del cliente
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
});

// Definimos la estructura de los datos (TypeScript)
export interface BlogPost {
  sys: { id: string };
  fields: {
    title: string;
    slug: string;
    image: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    excerpt: string;
    date: string;
    author: string;
    category: string;
    content: any; // Rich Text
  };
}

// Función 1: Obtener TODOS los artículos (Para la página principal del blog)
export const getBlogPosts = async () => {
  const response = await client.getEntries({
    content_type: 'blogPost', // Debe coincidir con el ID que pusiste en Contentful
    order: ['-fields.date'],  // Ordenar por fecha (el más nuevo primero)
  });

  return response.items as unknown as BlogPost[];
};

// Función 2: Obtener UN solo artículo por su URL (Para la página interna)
export const getPostBySlug = async (slug: string) => {
  const response = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': slug,
    limit: 1,
  });

  const items = response.items as unknown as BlogPost[];
  return items[0]; // Retorna el primer resultado encontrado
};