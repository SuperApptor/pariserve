import { Ticket, Clock, MapPin, Star, AlertCircle } from 'lucide-react';

// C'est ici que l'erreur se cachait probablement (interface mal définie)
export interface Tour {
  id: string;
  slug: string;
  name: string; // <-- Cette ligne est INDISPENSABLE
  category: string;
  description: string;
  longDescription: string;
  price: number;
  imageUrl: string;
  duration: string;
  rating: number;
  highlights: string[];
  faq: { question: string; answer: string }[];
}

export const MOCK_TOURS: Tour[] = [
  {
    id: '1',
    slug: 'moulin-rouge-show',
    name: 'Moulin Rouge - Revue Féerie',
    category: 'Cabaret Légendaire',
    description: "Le cabaret le plus célèbre du monde. Une soirée inoubliable avec champagne.",
    longDescription: "Vivez l'expérience parisienne ultime au Moulin Rouge. La revue 'Féerie' regroupe une troupe de 80 artistes, dont les célèbres Doriss Girls, des costumes de plumes et de strass, et le grand aquarium géant. Une soirée mythique.",
    price: 135,
    imageUrl: 'https://images.unsplash.com/photo-1597920409292-6f176662e071?q=80&w=1000&auto=format&fit=crop', 
    duration: '2h00',
    rating: 4.8,
    highlights: ['Demi-bouteille de Champagne incluse', 'Spectacle de French Cancan', 'Orchestre Live'],
    faq: [
      { question: "Quel est le code vestimentaire ?", answer: "Tenue élégante exigée. Pas de shorts, bermudas ou tongs. Veste et cravate appréciées mais non obligatoires." },
      { question: "À quelle heure arriver ?", answer: "Il est conseillé d'arriver 30 minutes avant le début du spectacle." }
    ]
  },
  {
    id: '2',
    slug: 'lido-de-paris',
    name: 'Lido de Paris',
    category: 'Spectacle & Revue',
    description: "Le glamour des Champs-Élysées. Un spectacle technologique et artistique.",
    longDescription: "Situé sur les Champs-Élysées, le Lido offre un spectacle grandiose qui mêle patinage artistique, effets d'eau et chorégraphies modernes. Une vision plus contemporaine du cabaret parisien.",
    price: 85,
    imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000&auto=format&fit=crop',
    duration: '1h45',
    rating: 4.6,
    highlights: ['Situé sur les Champs-Élysées', 'Coupe de Champagne offerte', 'Effets spéciaux uniques'],
    faq: [
      { question: "Les enfants sont-ils acceptés ?", answer: "Oui, à partir de 4 ans." },
      { question: "Peut-on dîner sur place ?", answer: "Oui, des formules Dîner-Spectacle sont disponibles sur demande WhatsApp." }
    ]
  },
  {
    id: '3',
    slug: 'excursion-disneyland-paris',
    name: 'Disneyland Paris - Billet + Navette',
    category: 'Parc d\'attractions',
    description: "La magie de Disney à portée de main. Transport inclus depuis Paris.",
    longDescription: "Ne vous souciez pas du transport. Notre navette part du centre de Paris et vous dépose aux portes du parc. Profitez d'une journée complète dans les deux parcs Disney.",
    price: 119,
    imageUrl: 'https://images.unsplash.com/photo-1550953683-146682705a6e?q=80&w=1000&auto=format&fit=crop',
    duration: 'Journée entière',
    rating: 4.9,
    highlights: ['Accès aux 2 Parcs', 'Transport A/R inclus', 'Pas de file d\'attente aux guichets'],
    faq: [
      { question: "Où est le départ ?", answer: "Le départ se fait près de la Tour Eiffel ou d'Opéra (précisé sur le billet)." },
      { question: "Le billet est-il daté ?", answer: "Oui, vous devez choisir une date précise." }
    ]
  }
];

export function getTourBySlug(slug: string): Tour | undefined {
  return MOCK_TOURS.find(tour => tour.slug === slug);
}