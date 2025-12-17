import { MetadataRoute } from 'next';
import { priceList } from '@/api/price';
import { dataHeader } from '@/features/header/data/dataHeader';
import type { HeaderLink } from '@/ui';

function getAllStaticRoutes(): string[] {
  const routes: string[] = ['/'];
  
  // Рекурсивно собираем все ссылки из навигации
  function collectLinks(links: HeaderLink[]) {
    for (const link of links) {
      if (link.href) {
        routes.push(link.href);
      }
      if (link.children) {
        collectLinks(link.children);
      }
    }
  }
  
  collectLinks(dataHeader.links);
  
  // Фильтруем маршруты архива - они не должны индексироваться
  return [...new Set(routes)].filter(route => !route.startsWith('/archive')); // Убираем дубликаты и исключаем архив
}

async function getAllDynamicRoutes(): Promise<string[]> {
  try {
    // Получаем все услуги для динамических маршрутов /uslugi/[slug]
    const result = await priceList({
      limit: 1000, // Большой лимит, чтобы получить все услуги
      offset: 0,
    });
    
    if (result.status === 'ok' && result.data?.results) {
      return result.data.results.map(price => `/uslugi/${price.slug}`);
    }
  } catch (error) {
    console.error('Error fetching dynamic routes for sitemap:', error);
  }
  
  return [];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aleksandrova-dacha.ru';
  
  const staticRoutes = getAllStaticRoutes();
  const dynamicRoutes = await getAllDynamicRoutes();
  
  const allRoutes = [...staticRoutes, ...dynamicRoutes];
  
  const sitemapEntries: MetadataRoute.Sitemap = allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '/' ? 1.0 : 0.8,
  }));
  
  return sitemapEntries;
}
