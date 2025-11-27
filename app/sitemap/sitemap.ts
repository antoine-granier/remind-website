import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://remind-apps.vercel.app';
  const languages = ['en', 'fr'];

  // Define all pages
  const pages = [
    '',           // Home page
    '/blog',
    '/compare',
    '/contact',
    '/download',
    '/faq',
    '/features',
    '/pricing',
    '/privacy',
    '/terms',
  ];

  // Generate sitemap entries for each page in each language
  const sitemapEntries: MetadataRoute.Sitemap = [];

  languages.forEach((lang) => {
    pages.forEach((page) => {
      sitemapEntries.push({
        url: `${baseUrl}/${lang}${page}`,
        lastModified: new Date().toISOString(),
        changeFrequency: (page === '' || page === '/blog' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
        priority: page === '' ? 1.0 : page === '/features' || page === '/download' ? 0.9 : 0.7,
      });
    });
  });

  return sitemapEntries;
}
