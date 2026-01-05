
export interface Hotel {
  id: string;
  slug: string;
  name: string;
  district: string;
  description: string;
  longDescription: string;
  amenities: string[];
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
    slug: 'hotel-ducs-d-anjou',
    name: 'Hôtel Ducs d\'Anjou',
    district: '1er - Châtelet les Halles',
    description: 'Une demeure historique alliant charme du passé et design contemporain.',
    longDescription: 'Situé dans une rue piétonne calme au cœur du quartier historique, cet hôtel 4 étoiles propose des chambres élégantes à quelques pas du Louvre. Un service attentionné dans un cadre qui a su préserver ses poutres et pierres apparentes du XVIIe siècle.',
    amenities: ['Wifi Offert', 'Climatisation', 'Room Service', 'Insonorisation', 'Conciergerie'],
    priceRange: { min: 185, max: 320 },
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200',
    stars: 4
  },
  {
    id: '2',
    slug: 'hotel-queen-mary',
    name: 'Hôtel Queen Mary',
    district: '8ème - Madeleine/Opéra',
    description: 'L\'élégance britannique au cœur du quartier des Grands Magasins.',
    longDescription: 'Ce boutique-hôtel de charme vous accueille dans une atmosphère "British" raffinée. Idéalement situé pour le shopping de luxe et les sorties au théâtre, il offre un calme absolu et un service de thé traditionnel très apprécié.',
    amenities: ['Tea Time', 'Bar Privé', 'Wifi Fibre', 'Business Center', 'AC'],
    priceRange: { min: 160, max: 280 },
    imageUrl: 'https://images.unsplash.com/photo-1551882547-ff43c63faf76?q=80&w=1200',
    stars: 3
  },
  {
    id: '3',
    slug: 'hotel-académie-saint-germain',
    name: 'Hôtel Académie',
    district: '6ème - Saint-Germain-des-Prés',
    description: 'Une adresse prestigieuse dans l\'ancien hôtel particulier du Duc de Rohan.',
    longDescription: 'Plongez dans l\'histoire de la Rive Gauche. Entre mobilier d\'époque et confort moderne, cet établissement incarne l\'esprit intellectuel et artistique de Saint-Germain. Les suites avec baignoire balnéo offrent un luxe rare dans le quartier.',
    amenities: ['Baignoire Balnéo', 'Mobilier d\'époque', 'Petit-déjeuner Gourmet', 'Parking à proximité', 'Bar'],
    priceRange: { min: 210, max: 450 },
    imageUrl: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200',
    stars: 4
  },
  {
    id: '4',
    slug: 'hotel-bourg-tibourg',
    name: 'Hôtel Bourg Tibourg',
    district: '4ème - Le Marais',
    description: 'Un joyau néo-gothique signé Jacques Garcia dans le Marais.',
    longDescription: 'Petit par la taille mais immense par son style, cet hôtel est une expérience sensorielle unique. Tissus précieux, lumières tamisées et jardin vertical créent une atmosphère intime et mystérieuse propre au vieux Paris.',
    amenities: ['Design by Jacques Garcia', 'Jardin Intérieur', 'iPad en chambre', 'Produits d\'accueil Luxe', 'Conciergerie'],
    priceRange: { min: 250, max: 480 },
    imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200',
    stars: 4
  },
  {
    id: '5',
    slug: 'hotel-caron-de-beaumarchais',
    name: 'Hôtel Caron de Beaumarchais',
    district: '4ème - Le Marais',
    description: 'Vivez le XVIIIe siècle français au cœur du Marais.',
    longDescription: 'Un hôtel thématique unique où chaque détail rend hommage à l\'esprit de Beaumarchais. Entre partitions de musique ancienne et lustres en cristal, vous séjournerez dans un décor de théâtre d\'une finesse exceptionnelle.',
    amenities: ['Décor Historique', 'Climatisation', 'Petit-déjeuner en chambre', 'Bibliothèque', 'Ascenseur'],
    priceRange: { min: 190, max: 350 },
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200',
    stars: 3
  },
  {
    id: '6',
    slug: 'hotel-d-aubusson',
    name: 'Hôtel d\'Aubusson',
    district: '6ème - Saint-Germain',
    description: 'L\'un des plus beaux hôtels particuliers du XVIIe siècle.',
    longDescription: 'Doté d\'un jazz bar réputé et d\'un spa magnifique avec l\'une des plus grandes piscines de la Rive Gauche, l\'Aubusson est une destination en soi. Un luxe discret et une cour pavée magistrale pour vos fins de journée.',
    amenities: ['Piscine Intérieure', 'Jazz Bar', 'Spa de Luxe', 'Cour Pavée', 'Voiturier'],
    priceRange: { min: 450, max: 850 },
    imageUrl: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1200',
    stars: 5
  },
  {
    id: '7',
    slug: 'hotel-l-hotel',
    name: 'L\'Hôtel',
    district: '6ème - Beaux-Arts',
    description: 'La dernière demeure d\'Oscar Wilde, icône du luxe secret.',
    longDescription: 'Situé rue des Beaux-Arts, c\'est le plus petit hôtel 5 étoiles de Paris. Son architecture circulaire et son bassin de relaxation en font un lieu de rendez-vous pour les célébrités cherchant l\'anonymat et l\'élégance absolue.',
    amenities: ['Bassin de relaxation', 'Restaurant Étoilé', 'Hammam Privé', 'Bar mythique', 'Service VIP'],
    priceRange: { min: 400, max: 900 },
    imageUrl: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200',
    stars: 5
  },
  {
    id: '8',
    slug: 'hotel-lutetia',
    name: 'Lutetia Paris',
    district: '6ème - Saint-Sulpice',
    description: 'Le seul Palace de la Rive Gauche, monument de l\'Art Déco.',
    longDescription: 'Après une rénovation magistrale, le Lutetia a retrouvé sa place de leader. Entre son spa Akasha de 700m2 et son bar Joséphine, il offre une expérience parisienne moderne et historique sans équivalent.',
    amenities: ['Spa Akasha', 'Piscine 17m', 'Bar Joséphine', 'Brasserie de luxe', 'Majordome'],
    priceRange: { min: 850, max: 1800 },
    imageUrl: 'https://images.unsplash.com/photo-1544006659-f0b21f04cb1d?q=80&w=1200',
    stars: 5
  },
  {
    id: '9',
    slug: 'hotel-pavillon-de-la-reine',
    name: 'Pavillon de la Reine',
    district: '4ème - Place des Vosges',
    description: 'Le secret le mieux gardé de la Place des Vosges.',
    longDescription: 'Niché dans une cour intérieure verdoyante, ce havre de paix offre une déconnexion totale. Un mélange parfait de mobilier contemporain et de tapisseries anciennes, avec un spa de la marque Codage.',
    amenities: ['Spa Codage', 'Parking Privé', 'Jardin privé', 'Vélos offerts', 'Honesty Bar'],
    priceRange: { min: 420, max: 780 },
    imageUrl: 'https://images.unsplash.com/photo-1521783988139-89397d761dce?q=80&w=1200',
    stars: 5
  },
  {
    id: '10',
    slug: 'hotel-relais-saint-germain',
    name: 'Le Relais Saint-Germain',
    district: '6ème - Odéon',
    description: 'L\'adresse gourmande d\'Yves Camdeborde.',
    longDescription: 'Accolé au célèbre Comptoir du Relais, cet hôtel propose des chambres au décor unique. Les clients bénéficient d\'un accès privilégié à la table du chef. Une expérience gastronomique et hôtelière indissociable.',
    amenities: ['Accès prioritaire restaurant', 'Décor thématique', 'Petit-déjeuner Chef', 'AC', 'Mini-bar'],
    priceRange: { min: 280, max: 460 },
    imageUrl: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=1200',
    stars: 4
  },
  {
    id: '11',
    slug: 'hotel-victoria-palace',
    name: 'Victoria Palace Hôtel',
    district: '6ème - Cherche-Midi',
    description: 'Le grand luxe classique entre Montparnasse et Saint-Germain.',
    longDescription: 'Un établissement de tradition offrant des chambres spacieuses, rares à Paris. Son bar de style bibliothèque et son service de conciergerie à l\'ancienne en font une valeur sûre pour une clientèle exigeante.',
    amenities: ['Chambres Familiales', 'Bar Bibliothèque', 'Fitness Center', 'Conciergerie Clefs d\'Or', 'Insonorisation'],
    priceRange: { min: 230, max: 550 },
    imageUrl: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=1200',
    stars: 4
  },
  {
    id: '12',
    slug: 'hotel-montalembert',
    name: 'Hôtel Montalembert',
    district: '7ème - Rue du Bac',
    description: 'Le premier boutique-hôtel de Paris, chic et contemporain.',
    longDescription: 'Situé au cœur du quartier des éditeurs et des antiquaires, le Montalembert est une icône du design rive gauche. Son restaurant avec terrasse est le rendez-vous du tout-Paris littéraire.',
    amenities: ['Terrasse', 'Business Center', 'Service voiturier', 'Climatisation', 'Bar Design'],
    priceRange: { min: 350, max: 620 },
    imageUrl: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1200',
    stars: 5
  },
  {
    id: '13',
    slug: 'hotel-danube',
    name: 'Hôtel Danube Saint Germain',
    district: '6ème - Jacob',
    description: 'Un écrin de fleurs et de couleurs rue Jacob.',
    longDescription: 'Célèbre pour ses tissus de la maison Pierre Frey et sa cour intérieure fleurie, cet hôtel 3 étoiles offre un rapport charme/prix exceptionnel. Une atmosphère chaleureuse et typiquement parisienne.',
    amenities: ['Cour fleurie', 'Tissus Pierre Frey', 'Ascenseur', 'Wifi', 'Petit-déjeuner patio'],
    priceRange: { min: 175, max: 290 },
    imageUrl: 'https://images.unsplash.com/photo-1590490359683-658d3d23f972?q=80&w=1200',
    stars: 3
  },
  {
    id: '14',
    slug: 'hotel-edouard-vii',
    name: 'Hôtel Edouard VII',
    district: '2ème - Opéra',
    description: 'L\'élégance "Couture" face à l\'Opéra Garnier.',
    longDescription: 'Ancienne résidence du Prince de Galles, cet hôtel cultive l\'art de recevoir avec une touche théâtrale. Les chambres offrent des vues spectaculaires sur l\'Avenue de l\'Opéra et un confort 4 étoiles supérieur.',
    amenities: ['Vue Opéra', 'Fitness Room', 'Bar à cocktails', 'Salles de réunion', 'Conciergerie'],
    priceRange: { min: 260, max: 580 },
    imageUrl: 'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?q=80&w=1200',
    stars: 4
  },
  {
    id: '15',
    slug: 'hotel-hotel-de-crillon',
    name: 'Hôtel de Crillon',
    district: '8ème - Place de la Concorde',
    description: 'L\'expression ultime du luxe à la française.',
    longDescription: 'Réouvert par Rosewood, le Crillon est plus qu\'un hôtel, c\'est un monument national. Ses suites signées Karl Lagerfeld et son service de majordome redéfinissent l\'excellence mondiale de l\'hôtellerie.',
    amenities: ['Majordome dédié', 'Spa Rosewood', 'Piscine en or', 'Cave à vin privée', 'Salon de coiffure'],
    priceRange: { min: 1400, max: 4500 },
    imageUrl: 'https://images.unsplash.com/photo-1541971875076-8f970d573be6?q=80&w=1200',
    stars: 5
  }
];

export function getHotelBySlug(slug: string): Hotel | undefined {
  return MOCK_HOTELS.find(hotel => hotel.slug === slug);
}
