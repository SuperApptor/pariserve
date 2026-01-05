
export interface TourFAQ {
  question: string;
  answer: string;
}

export interface Tour {
  id: string;
  slug: string;
  title: string;
  category: "Gastronomie" | "Cabaret" | "Culture" | "Excursion";
  price: number;
  description: string;
  imageUrl: string;
  faq: TourFAQ[];
}

export const MOCK_TOURS: Tour[] = [
  {
    id: "1",
    slug: "billet-tour-eiffel-sommet-acces-direct",
    title: "Tour Eiffel : Accès Direct au Sommet",
    category: "Culture",
    price: 85,
    description: "Évitez les files d'attente interminables et accédez au point le plus haut de Paris pour une vue panoramique à 360 degrés.",
    imageUrl: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=800&auto=format&fit=crop",
    faq: [
      { question: "L'accès au sommet est-il garanti ?", answer: "Oui, ce billet inclut l'ascenseur jusqu'au 3ème étage (sommet)." },
      { question: "Combien de temps dure la visite ?", answer: "Nous recommandons de prévoir 2 heures pour profiter pleinement de la vue." }
    ]
  },
  {
    id: "2",
    slug: "musee-du-louvre-visite-guidee-essentiels",
    title: "Musée du Louvre : Les Chefs-d'œuvre",
    category: "Culture",
    price: 75,
    description: "Une immersion de 2h30 avec un guide expert pour découvrir la Joconde, la Vénus de Milo et les trésors de l'Égypte ancienne.",
    imageUrl: "https://images.unsplash.com/photo-1597923896141-d4da313f4767?q=80&w=800&auto=format&fit=crop",
    faq: [
      { question: "Le billet d'entrée est-il inclus ?", answer: "Oui, le billet coupe-file est inclus dans le tarif de la visite guidée." },
      { question: "Puis-je rester dans le musée après la visite ?", answer: "Tout à fait, votre billet est valable pour le reste de la journée." }
    ]
  },
  {
    id: "3",
    slug: "chateau-de-versailles-journee-complete-jardins",
    title: "Versailles : Domaine Royal & Jardins",
    category: "Excursion",
    price: 99,
    description: "Explorez les Grands Appartements, la Galerie des Glaces et le domaine de Marie-Antoinette avec transport AR depuis Paris.",
    imageUrl: "https://images.unsplash.com/photo-1585155967641-69611e968037?q=80&w=800&auto=format&fit=crop",
    faq: [
      { question: "Le transport est-il inclus ?", answer: "Oui, le transfert se fait en autocar de luxe climatisé au départ du centre de Paris." },
      { question: "Les Grandes Eaux sont-elles incluses ?", answer: "Le billet inclut l'accès aux jardins, y compris les jours de spectacle des Grandes Eaux." }
    ]
  },
  {
    id: "4",
    slug: "diner-croisiere-gastronomique-bateaux-parisiens",
    title: "Dîner-Croisière : Illumination de Paris",
    category: "Gastronomie",
    price: 115,
    description: "Vivez une soirée magique à bord d'un bateau entièrement vitré. Menu gastronomique et ambiance musicale live au fil de la Seine.",
    imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop",
    faq: [
      { question: "Quelle est la tenue exigée ?", answer: "Une tenue correcte est exigée (pas de shorts, tongs ou vêtements de sport)." },
      { question: "D'où part le bateau ?", answer: "Le départ se fait au pied de la Tour Eiffel, Port de la Bourdonnais." }
    ]
  },
  {
    id: "5",
    slug: "moulin-rouge-spectacle-feerie-champagne",
    title: "Moulin Rouge : Revue Féerie & Champagne",
    category: "Cabaret",
    price: 145,
    description: "Le plus célèbre cabaret du monde. Admirez les 80 artistes, les décors somptueux et l'incontournable French Cancan.",
    imageUrl: "https://images.unsplash.com/photo-1583031849506-4b3595293291?q=80&w=800&auto=format&fit=crop",
    faq: [
      { question: "Les enfants sont-ils admis ?", answer: "Oui, à partir de 6 ans accompagnés d'un adulte." },
      { question: "À quelle heure faut-il arriver ?", answer: "Nous conseillons d'arriver 30 minutes avant le début du spectacle." }
    ]
  },
  {
    id: "6",
    slug: "excursion-mont-saint-michel-journee-luxe",
    title: "Le Mont Saint-Michel : Merveille de l'Occident",
    category: "Excursion",
    price: 165,
    description: "Une journée d'évasion vers ce site classé à l'UNESCO. Visite de l'Abbaye et temps libre dans les ruelles médiévales.",
    imageUrl: "https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?q=80&w=800&auto=format&fit=crop",
    faq: [
      { question: "Combien de temps dure le trajet ?", answer: "Comptez environ 4h30 de trajet à travers la belle campagne normande." },
      { question: "La visite de l'Abbaye est-elle guidée ?", answer: "Le billet d'entrée est inclus, vous pouvez choisir une visite guidée ou avec audioguide." }
    ]
  },
  {
    id: "7",
    slug: "giverny-maison-jardins-claude-monet",
    title: "Giverny : Sur les traces de Claude Monet",
    category: "Excursion",
    price: 89,
    description: "Découvrez le Clos Normand et le Jardin d'Eau avec son célèbre pont japonais qui a inspiré les Nymphéas.",
    imageUrl: "https://images.unsplash.com/photo-1582239460022-7940177726b2?q=80&w=800&auto=format&fit=crop",
    faq: [
      { question: "La maison de Monet est-elle ouverte à la visite ?", answer: "Oui, vous pourrez explorer les pièces restaurées où vivait le peintre." },
      { question: "Quand est la meilleure période pour y aller ?", answer: "De fin avril à juin pour les glycines et les azalées." }
    ]
  },
  {
    id: "8",
    slug: "catacombes-paris-visite-coupe-file",
    title: "Catacombes de Paris : L'Empire de la Mort",
    category: "Culture",
    price: 45,
    description: "Parcourez le plus grand ossuaire souterrain du monde. Un voyage fascinant et mystérieux dans les entrailles de Paris.",
    imageUrl: "https://images.unsplash.com/photo-1606733808453-333550e64b71?q=80&w=800&auto=format&fit=crop",
    faq: [
      { question: "Y a-t-il beaucoup de marches ?", answer: "Oui, 131 marches à descendre et 112 à remonter. Il n'y a pas d'ascenseur." },
      { question: "La visite est-elle déconseillée à certains publics ?", answer: "Oui, aux personnes claustrophobes ou souffrant d'insuffisance cardiaque." }
    ]
  },
  {
    id: "9",
    slug: "crazy-horse-paris-spectacle-totally-crazy",
    title: "Crazy Horse : Totally Crazy",
    category: "Cabaret",
    price: 115,
    description: "Le temple de la féminité. Un spectacle sophistiqué utilisant des jeux de lumières époustouflants sur les corps des danseuses.",
    imageUrl: "https://images.unsplash.com/photo-1544280781-b53051786576?q=80&w=800&auto=format&fit=crop",
    faq: [
      { question: "Le spectacle inclut-il une boisson ?", answer: "Oui, le tarif de base inclut une demi-bouteille de champagne Cuvée Crazy." },
      { question: "Où se situe le cabaret ?", answer: "Sur la prestigieuse avenue George V, près des Champs-Élysées." }
    ]
  },
  {
    id: "10",
    slug: "paradis-latin-revue-loiseau-paradis",
    title: "Paradis Latin : L'Oiseau Paradis",
    category: "Cabaret",
    price: 90,
    description: "Le plus parisien des grands cabarets, dans un bâtiment construit par Gustave Eiffel. Mise en scène signée Kamel Ouali.",
    imageUrl: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=800&auto=format&fit=crop",
    faq: [
      { question: "Est-ce adapté aux familles ?", answer: "Oui, c'est l'un des cabarets les plus accessibles aux jeunes spectateurs." },
      { question: "Peut-on y dîner ?", answer: "Oui, des options dîner + spectacle sont disponibles à partir de 20h." }
    ]
  },
  {
    id: "11",
    slug: "bateaux-mouches-croisiere-promenade",
    title: "Bateaux Mouches : Croisière Promenade",
    category: "Culture",
    price: 15,
    description: "L'incontournable balade sur la Seine. 1h10 pour admirer tous les monuments historiques bordant le fleuve.",
    imageUrl: "https://images.unsplash.com/photo-1508804052814-cd3ba865a116?q=80&w=800&auto=format&fit=crop",
    faq: [
      { question: "Faut-il réserver un créneau horaire ?", answer: "Non, les billets sont ouverts. Départs toutes les 45 minutes environ." },
      { question: "Y a-t-il des commentaires ?", answer: "Oui, des commentaires audio sont diffusés en plusieurs langues." }
    ]
  },
  {
    id: "12",
    slug: "musee-orsay-visite-impressionnisme",
    title: "Musée d'Orsay : Temple de l'Impressionnisme",
    category: "Culture",
    price: 65,
    description: "Visite guidée dans cette ancienne gare pour admirer Monet, Renoir, Degas et Van Gogh.",
    imageUrl: "https://images.unsplash.com/photo-1614701416768-45e0655d8f28?q=80&w=800&auto=format&fit=crop",
    faq: [
      { question: "Le coupe-file est-il inclus ?", answer: "Oui, l'accès prioritaire est garanti avec votre guide." },
      { question: "Peut-on voir l'horloge célèbre ?", answer: "Oui, l'accès à la terrasse derrière l'horloge est libre avec votre billet." }
    ]
  },
  {
    id: "13",
    slug: "opera-garnier-visite-guidee-mysteres",
    title: "Opéra Garnier : Splendeurs du Second Empire",
    category: "Culture",
    price: 35,
    description: "Explorez le Grand Escalier, les foyers dorés et les mystères qui ont inspiré le Fantôme de l'Opéra.",
    imageUrl: "https://images.unsplash.com/photo-1549474843-ed834316d80c?q=80&w=800&auto=format&fit=crop",
    faq: [
      { question: "La salle de spectacle est-elle toujours accessible ?", answer: "L'accès à la salle est soumis aux répétitions et n'est pas garanti." },
      { question: "La visite est-elle libre ?", answer: "Cette option est pour une visite guidée, mais des billets en visite libre existent aussi." }
    ]
  },
  {
    id: "14",
    slug: "arc-de-triomphe-billet-terrasse-panoramique",
    title: "Arc de Triomphe : Toit de Paris",
    category: "Culture",
    price: 13,
    description: "Montez au sommet de l'Arc de Triomphe pour une vue imprenable sur l'Étoile et les Champs-Élysées.",
    imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop",
    faq: [
      { question: "Y a-t-il un ascenseur ?", answer: "Un ascenseur est réservé aux PMR. Il y a 284 marches pour les autres visiteurs." },
      { question: "Peut-on voir la Flamme du Soldat Inconnu ?", answer: "Oui, elle se situe à la base et le ravivage a lieu chaque soir à 18h30." }
    ]
  },
  {
    id: "15",
    slug: "sainte-chapelle-conciergerie-visite",
    title: "Sainte-Chapelle : Le Joyau du Gothique",
    category: "Culture",
    price: 25,
    description: "Admirez les vitraux spectaculaires de la chapelle royale et visitez la prison de Marie-Antoinette juste à côté.",
    imageUrl: "https://images.unsplash.com/photo-1559139224-38dc50f16428?q=80&w=800&auto=format&fit=crop",
    faq: [
      { question: "Est-ce un billet combiné ?", answer: "Oui, ce tarif inclut l'entrée à la Sainte-Chapelle et à la Conciergerie." },
      { question: "Quel est le meilleur moment pour les vitraux ?", answer: "Une matinée ensoleillée offre les plus beaux jeux de lumières." }
    ]
  },
  {
    id: "16",
    slug: "disneyland-paris-1-jour-2-parcs",
    title: "Disneyland Paris : Magie en 1 Jour",
    category: "Excursion",
    price: 119,
    description: "Accès illimité au Parc Disneyland et au Parc Walt Disney Studios. Transport en train RER inclus depuis Paris.",
    imageUrl: "https://images.unsplash.com/photo-1601621915191-2dc4daa56a53?q=80&w=800&auto=format&fit=crop",
    faq: [
      { question: "Le transport est-il facile ?", answer: "Oui, le RER A vous dépose directement à l'entrée des parcs en 40 min." },
      { question: "Peut-on annuler le billet ?", answer: "Les billets datés sont modifiables jusqu'à 72h avant la visite." }
    ]
  },
  {
    id: "17",
    slug: "bus-toit-ouvert-big-bus-paris-hop-on",
    title: "Bus Panoramique : Hop-on Hop-off",
    category: "Culture",
    price: 39,
    description: "Découvrez Paris à votre rythme. Montez et descendez librement à n'importe quel arrêt des 10 points stratégiques.",
    imageUrl: "https://images.unsplash.com/photo-1512411995874-9b26e2540d5e?q=80&w=800&auto=format&fit=crop",
    faq: [
      { question: "Quelle est la durée de validité ?", answer: "Le billet est valable pour une durée de 24h ou 48h selon l'option." },
      { question: "Y a-t-il du Wifi à bord ?", answer: "Oui, la plupart des bus offrent un accès Wifi gratuit." }
    ]
  },
  {
    id: "18",
    slug: "vaux-le-vicomte-fontainebleau-excursion",
    title: "Vaux-le-Vicomte & Fontainebleau",
    category: "Excursion",
    price: 125,
    description: "Deux châteaux royaux d'exception en une journée. Découvrez l'inspiration directe de Versailles.",
    imageUrl: "https://images.unsplash.com/photo-1564594736624-def7a10ab047?q=80&w=800&auto=format&fit=crop",
    faq: [
      { question: "Le déjeuner est-il inclus ?", answer: "Non, mais vous aurez du temps libre pour déjeuner à Fontainebleau." },
      { question: "Les billets d'entrée sont-ils inclus ?", answer: "Oui, pour les deux châteaux et leurs jardins respectifs." }
    ]
  },
  {
    id: "19",
    slug: "balade-gastronomique-le-marais",
    title: "Gastronomie : Secrets du Marais",
    category: "Gastronomie",
    price: 85,
    description: "Une balade à pied pour déguster les meilleurs fromages, chocolats et vins dans les boutiques historiques du Marais.",
    imageUrl: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=800&auto=format&fit=crop",
    faq: [
      { question: "Le groupe est-il grand ?", answer: "Non, nous limitons à 10 personnes pour une expérience conviviale." },
      { question: "Les dégustations suffisent-elles pour un repas ?", answer: "Oui, c'est l'équivalent d'un déjeuner léger très varié." }
    ]
  },
  {
    id: "20",
    slug: "champs-elysees-shopping-vip-experience",
    title: "Shopping VIP : Triangle d'Or",
    category: "Culture",
    price: 150,
    description: "Accès privilégié dans les grandes maisons de luxe avec un personal shopper expert de la mode parisienne.",
    imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
    faq: [
      { question: "Y a-t-il une obligation d'achat ?", answer: "Absolument pas, vous profitez de l'expertise et du conseil." },
      { question: "Quels quartiers visite-t-on ?", answer: "Principalement l'Avenue Montaigne et la Rue du Faubourg Saint-Honoré." }
    ]
  }
];

export function getTourBySlug(slug: string): Tour | undefined {
  return MOCK_TOURS.find(tour => tour.slug === slug);
}
