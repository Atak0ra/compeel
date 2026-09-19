import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://compeel.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: 'https://compeel.com/realisations',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://compeel.com/about',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    ...['kara', 'alexis', 'damejustice'].map(slug => ({
      url: `https://compeel.com/${slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...['mentions-legales', 'confidentialite', 'cgu', 'cookies', 'remboursement', 'accessibilite'].map(slug => ({
      url: `https://compeel.com/${slug}`,
      changeFrequency: 'yearly' as const,
      priority: 0.2,
    })),
  ]
}
