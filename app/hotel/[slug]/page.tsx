import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getHotelBySlug } from '@/lib/hotels';
import { MapPin, Star, CheckCircle, MessageCircle, ArrowLeft } from 'lucide-react';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function HotelPage({ params }: PageProps) {
  // On récupère le slug
  const { slug } = await params;
  
  // On cherche l'hôtel
  const hotel = getHotelBySlug(slug);

  // Si pas trouvé, erreur 404
  if (!hotel) {
    notFound();
  }

  // Calcul du prix réduit
  const clubPriceMin = Math.round(hotel.priceRange.min * 0.85);

  return (
    <main className="min-h-screen bg-white pb-20">
      
      {/* Bouton Retour */}
      <div className="absolute top-4 left-4 z-20">
        <Link href="/" className="flex items-center gap-2 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-sm hover:bg-white transition text-sm font-medium text-black">
          <ArrowLeft size={16} />
          Retour
        </Link>
      </div>

      {/* Image Header */}
      <div className="relative h-[50vh] w-full">
        <Image 
          src={hotel.imageUrl} 
          alt={hotel.name}
          fill
          className="object-cover brightness-[0.85]"
          priority
        />
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 bg-gradient-to-t from-black/80 to-transparent text-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-1 mb-2 text-yellow-400">
              {[...Array(hotel.stars)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold font-serif mb-2">{hotel.name}</h1>
            <div className="flex items-center gap-2 text-gray-200">
              <MapPin size={18} />
              <span>{hotel.district}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu */}
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12 grid md:grid-cols-3 gap-12">
        
        {/* Colonne Gauche */}
        <div className="md:col-span-2 space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 font-serif text-slate-900">À propos</h2>
            <p className="text-lg text-slate-600 leading-relaxed">{hotel.longDescription}</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-slate-900">Équipements</h3>
            <div className="grid grid-cols-2 gap-3">
              {hotel.amenities.map((item) => (
                <div key={item} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <CheckCircle size={16} className="text-green-600" />
                  <span className="text-slate-700 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Colonne Droite (Prix) */}
        <div className="relative">
          <div className="sticky top-8 p-6 rounded-2xl border border-slate-200 shadow-xl bg-white">
            <div className="text-center mb-6">
              <p className="text-sm text-slate-500 mb-1">Prix public</p>
              <p className="text-lg line-through text-slate-400 decoration-red-400">{hotel.priceRange.min}€</p>
              <div className="mt-4 p-4 bg-green-50 rounded-xl border border-green-100">
                <p className="text-sm font-bold text-green-800 uppercase">PRIX CLUB</p>
                <p className="text-3xl font-bold text-slate-900">{clubPriceMin}€</p>
              </div>
            </div>
            <a 
              href={`https://wa.me/33600000000?text=Dispo pour ${hotel.name}?`}
              target="_blank" 
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-4 rounded-xl hover:bg-green-600 transition"
            >
              <MessageCircle size={24} />
              Vérifier dispo
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}