import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aleksandrova-dacha.ru';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/archive/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
