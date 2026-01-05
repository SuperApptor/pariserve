import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* 1. AUTORISATION DES IMAGES */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
    ],
  },

  /* 2. REDIRECTIONS SEO */
  async redirects() {
    return [
      // --- HOTELS (Exemples basés sur votre fichier) ---
      {
        source: '/Ducs-Anjou/index.htm',
        destination: '/hotel/hotel-ducs-d-anjou',
        permanent: true,
      },
      {
        source: '/Queen-Mary/index.htm',
        destination: '/hotel/hotel-queen-mary',
        permanent: true,
      },
      // ... Vous pourrez ajouter toute la liste ici plus tard
      
      // --- TOURS ---
      {
        source: '/cityrama/moulin_rouge_show.html',
        destination: '/tour/moulin-rouge-show',
        permanent: true,
      },
      {
        source: '/cityrama/lido_show/lido_show_paris.html',
        destination: '/tour/lido-de-paris',
        permanent: true,
      },
      {
        source: '/cityrama/disneyland_resort_excursions/disneyland_paris_excursions.html',
        destination: '/tour/excursion-disneyland-paris',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;