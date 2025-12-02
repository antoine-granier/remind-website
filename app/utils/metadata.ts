/**
 * Utility to generate consistent alternates for all pages
 * @param lng - Current language
 * @param path - Page path (e.g., '/contact', '/faq')
 * @returns Alternates object with canonical and languages
 */
export function generateAlternates(lng: string, path: string = '') {
  const baseUrl = 'https://remind-apps.vercel.app';

  return {
    canonical: `/${lng}${path}`,
    languages: {
      'x-default': `/fr${path}`,
      'fr': `/fr${path}`,
      'en': `/en${path}`,
    },
  };
}
