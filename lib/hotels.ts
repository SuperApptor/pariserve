// FICHIER : lib/hotels.ts

export interface Hotel {
  id: string;
  slug: string;
  name: string;
  district: string;
  description: string;
  longDescription: string;
  priceRange: {
    min: number;
    max: number;
  };
  imageUrl: string;
  stars: number;
  amenities: string[];
}

export const MOCK_HOTELS: Hotel[] = [
  {
    id: '1',
    slug: 'hotel-particulier-montmartre',
    name: 'Hôtel Particulier Montmartre',
    district: '18ème - Montmartre',
    description: 'Une parenthèse enchantée dans un jardin secret au cœur de la Butte.',
    longDescription: "Niché au cœur d'un passage privé et sécurisé, l'Hôtel Particulier Montmartre est le plus petit hôtel de Paris. Entouré d'un jardin classé, c'est une maison de campagne en pleine ville.",
    priceRange: { min: 280, max: 450 },
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
    stars: 4,
    amenities: ['Jardin Privé', 'Bar à Cocktails', 'Restaurant', 'Wifi', 'Conciergerie']
  },
  {
    id: '2',
    slug: 'relais-saint-germain',
    name: 'Le Relais Saint-Germain',
    district: '6ème - Saint-Germain-des-Prés',
    description: "L'élégance rive gauche par excellence, à deux pas de l'Odéon.",
    longDescription: "Un hôtel littéraire historique où l'âme de Saint-Germain respire encore. Poutres apparentes, tissus d'époque et confort moderne.",
    priceRange: { min: 195, max: 310 },
    imageUrl: 'https://images.unsplash.com/photo-1496417263034-38ec4f0d665a?auto=format&fit=crop&q=80&w=800',
    stars: 4,
    amenities: ['Petit-déjeuner', 'AC', 'Ascenseur', 'Service étage', 'Presse']
  },
  {
    id: '3',
    slug: 'pavillon-de-la-reine',
    name: 'Pavillon de la Reine',
    district: '4ème - Place des Vosges',
    description: 'Le luxe discret sur la plus belle place de Paris.',
    longDescription: "Une adresse confidentielle située en retrait de la célèbre Place des Vosges. Le calme absolu en plein Marais.",
    priceRange: { min: 420, max: 680 },
    imageUrl: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80&w=800',
    stars: 5,
    amenities: ['Spa', 'Parking', 'Jardin', 'Bar', 'Vélos']
  }
];

export function getHotelBySlug(slug: string): Hotel | undefined {
  return MOCK_HOTELS.find(hotel => hotel.slug === slug);
}