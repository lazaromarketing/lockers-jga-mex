import { createClient } from 'contentful';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
});

// Función para procesar excerpt de Rich Text a string
const processExcerpt = (excerpt: any): string => {
  if (!excerpt) return '';
  if (typeof excerpt === 'string') return excerpt;
  if (excerpt.nodeType === 'document') {
    return documentToPlainTextString(excerpt);
  }
  return '';
};

// Función para obtener URL de imagen
const getImageUrl = (asset: any): string => {
  if (!asset || !asset.fields?.file?.url) {
    return '/images/hero-locker-industrial.png';
  }
  const url = asset.fields.file.url;
  return url.startsWith('//') ? `https:${url}` : url;
};

// Función 1: Obtener TODOS los artículos
export const getBlogPosts = async () => {
  const response = await client.getEntries({
    content_type: 'blogPost',
    order: ['-fields.date'],
  });

  const processedPosts = response.items.map((item: any) => {
    const fields = { ...item.fields };
    
    if (fields.excerpt) {
      fields.excerpt = processExcerpt(fields.excerpt);
    }
    
    // Añadimos imageUrl para fácil acceso
    fields.imageUrl = getImageUrl(fields.image);
    
    return {
      sys: item.sys,
      fields
    };
  });
  
  return processedPosts;
};

// Función 2: Obtener UN solo artículo por su URL
export const getPostBySlug = async (slug: string) => {
  const response = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': slug,
    limit: 1,
  });

  if (response.items.length === 0) {
    return null;
  }

  const item = response.items[0];
  const fields = { ...item.fields };
  
  // Procesar excerpt a string
  if (fields.excerpt) {
    fields.excerpt = processExcerpt(fields.excerpt);
  }
  
  // Añadir imageUrl
  fields.imageUrl = getImageUrl(fields.image);
  
  // NOTA: fields.content se mantiene como Rich Text para renderizarlo después

  return {
    sys: item.sys,
    fields
  };
};