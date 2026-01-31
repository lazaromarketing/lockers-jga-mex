import { createClient } from 'contentful';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';

// 1. Definimos la interfaz
export interface BlogPost {
  sys: {
    id: string;
    createdAt: string;
    updatedAt: string;
  };
  fields: {
    title: string;
    slug: string;
    date: string;
    excerpt?: string;
    author?: string;
    category?: string;
    image?: any;
    content?: any;
    imageUrl?: string;
  };
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
});

const processExcerpt = (excerpt: any): string => {
  if (!excerpt) return '';
  if (typeof excerpt === 'string') return excerpt;
  if (excerpt.nodeType === 'document') {
    return documentToPlainTextString(excerpt);
  }
  return '';
};

const getImageUrl = (asset: any): string => {
  if (!asset || !asset.fields?.file?.url) {
    return '/images/hero-locker-industrial.png';
  }
  const url = asset.fields.file.url;
  return url.startsWith('//') ? `https:${url}` : url;
};

// Función 1: Obtener TODOS los artículos
export const getBlogPosts = async (): Promise<BlogPost[]> => {
  const response = await client.getEntries({
    content_type: 'blogPost',
    order: ['-fields.date'],
  });

  const processedPosts = response.items.map((item: any) => {
    const fields = { ...item.fields };
    
    if (fields.excerpt) {
      fields.excerpt = processExcerpt(fields.excerpt);
    }
    
    fields.imageUrl = getImageUrl(fields.image);
    
    // 👇 SOLUCIÓN: Usamos 'as unknown as BlogPost' para forzar el tipo
    return {
      sys: item.sys,
      fields
    } as unknown as BlogPost; 
  });
  
  return processedPosts;
};

// Función 2: Obtener UN solo artículo
export const getPostBySlug = async (slug: string): Promise<BlogPost | null> => {
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
  
  if (fields.excerpt) {
    fields.excerpt = processExcerpt(fields.excerpt);
  }
  
  fields.imageUrl = getImageUrl(fields.image);
  
  // 👇 SOLUCIÓN: Usamos 'as unknown as BlogPost' para forzar el tipo
  return {
    sys: item.sys,
    fields
  } as unknown as BlogPost;
};