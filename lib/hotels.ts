
export interface Hotel {
  id: string;
  name: string;
  district: string;
  description: string;
  priceRange: {
    min: number;
    max: number;
  };
  imageUrl: string;
  stars: number;
}

export const MOCK_HOTELS: Hotel[] = [
  {
    id: '1',
    name: 'Hôtel Particulier Montmartre',
    district: '18ème - Montmartre',
    description: 'Une parenthèse enchantée dans un jardin secret au cœur de la Butte.',
    priceRange: { min: 280, max: 450 },
    imageUrl: 'https://picsum.photos/id/10/800/600',
    stars: 4
  },
  {
    id: '2',
    name: 'Le Relais Saint-Germain',
    district: '6ème - Saint-Germain-des-Prés',
    description: 'L\'élégance rive gauche par excellence, à deux pas de l\'Odéon.',
    priceRange: { min: 195, max: 310 },
    imageUrl: 'https://picsum.photos/id/20/800/600',
    stars: 4
  },
  {
    id: '3',
    name: 'Pavillon de la Reine',
    district: '4ème - Place des Vosges',
    description: 'Le luxe discret sur la plus belle place de Paris.',
    priceRange: { min: 420, max: 680 },
    imageUrl: 'https://picsum.photos/id/30/800/600',
    stars: 5
  },
  {
    id: '4',
    name: 'Hôtel des Grands Boulevards',
    district: '2ème - Sentier',
    description: 'Un écrin de design et d\'histoire dans un immeuble révolutionnaire.',
    priceRange: { min: 165, max: 240 },
    imageUrl: 'https://picsum.photos/id/40/800/600',
    stars: 4
  }
];
