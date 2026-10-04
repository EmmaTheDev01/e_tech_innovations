import type { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://e-techinnovations.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/services', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/services/custom-software', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/services/erp', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/services/hrms', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/services/lms', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/services/hism', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/featured-work', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/about', priority: 0.75, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
  ];

  const now = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
