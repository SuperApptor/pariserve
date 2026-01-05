// FICHIER : app/page.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MOCK_HOTELS } from '@/lib/hotels'; // Import des données
import { MessageCircle } from 'lucide-react';

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-50 py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-4">
          L'Hôtellerie Parisienne,<br />
          <span className="text-blue-900 italic">Sans Intermédiaire.</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
          Depuis 1997, nous négocions des tarifs exclusifs pour nos membres.
        </p>
      </section>

      {/* Grille Hôtels */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {MOCK_HOTELS.map((hotel) => (
            <div key={hotel.id} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
              
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={hotel.imageUrl}
                  alt={hotel.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              
              {/* Contenu */}
              <div className="p-6">
                <p className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-2">{hotel.district}</p>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{hotel.name}</h3>
                
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-400 uppercase">Fourchette</p>
                    <p className="font-bold text-slate-900">{hotel.priceRange.min}€ — {hotel.priceRange.max}€</p>
                  </div>
                  
                  {/* Lien vers la page détail */}
                  <Link 
                    href={`/hotel/${hotel.slug}`} 
                    className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-lg font-medium hover:bg-green-100 transition"
                  >
                    <MessageCircle size={18} />
                    Voir
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>
    </main>
  );
}