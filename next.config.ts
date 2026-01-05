/** @type {import('next').NextConfig} */
const nextConfig = {
  // C'est ici qu'on va lister toutes nos redirections.
  async redirects() {
    return [
      // -- EXEMPLES DE REDIRECTIONS --

      // 1. Redirection d'une page hôtel
      {
        source: '/Ducs-Anjou/index.htm', // L'ancienne URL
        destination: '/hotel/hotel-ducs-d-anjou', // La future nouvelle URL
        permanent: true, // C'est une redirection 301 (définitive)
      },
      // Autre exemple hôtel
      {
        source: '/Queen-Mary/index.htm',
        destination: '/hotel/hotel-queen-mary',
        permanent: true,
      },

      // 2. Redirection d'une page "Activité" vers le futur blog/guide
      {
        source: '/cityrama/lido_show/lido_show_paris.html',
        destination: '/guide/lido-show-paris',
        permanent: true,
      },
      {
        source: '/cityrama/disneyland_resort_excursions/disneyland_paris_excursions.html',
        destination: '/guide/excursion-disneyland-paris',
        permanent: true,
      },

      // 3. Redirection des pages "utilitaires" vers l'accueil
      {
        source: '/map.htm',
        destination: '/',
        permanent: true,
      },
      {
        source: '/terms.htm',
        destination: '/mentions-legales', // (page qu'on créera plus tard)
        permanent: true,
      },
    ]
  },
};

export default nextConfig;