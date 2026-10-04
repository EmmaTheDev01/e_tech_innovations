import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'e-Tech Innovations',
    short_name: 'e-Tech',
    description: 'Enterprise Software Engineering & Systems Integration',
    start_url: '/',
    display: 'standalone',
    background_color: '#07090e',
    theme_color: '#0066ff',
    icons: [
      {
        src: '/assets/favicon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/assets/favicon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
