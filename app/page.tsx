
'use client';

import React from 'react';
import { MessageCircle, CheckCircle2, MapPin, Star, History, Sparkles, MessageSquare } from 'lucide-react';
import { MOCK_HOTELS } from '@/lib/hotels';

export default function HomePage() {
  return (
    <main className="flex-grow">
      {/* HERO SECTION */}
      <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-100 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider italic">Plus de 25 ans d'expertise à Paris</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-[1.1] font-serif">
              L'Hôtellerie Parisienne, <br/>
              <span className="text-blue-900 italic">Sans Intermédiaire.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl font-sans">
              Depuis 1997, nous négocions des tarifs exclusifs pour nos membres. Ne payez plus les commissions des plateformes : obtenez le prix "Club" directement via WhatsApp.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#hotels" className="inline-flex justify-center items-center bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-800 transition-all shadow-xl shadow-slate-200">
                Découvrir la sélection
              </a>
              <button className="inline-flex justify-center items-center bg-green-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-600 transition-all shadow-xl shadow-green-100 gap-3">
                <MessageCircle />
                Obtenir un prix Club
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-slate-200 pt-10">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-blue-900 shrink-0" size={20} />
                <p className="text-sm text-slate-600 font-medium font-sans">-15% à -30% vs Booking</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-blue-900 shrink-0" size={20} />
                <p className="text-sm text-slate-600 font-medium font-sans">Experts locaux depuis 1997</p>
              </div>
              <div className="flex items-start gap-3 hidden md:flex">
                <CheckCircle2 className="text-blue-900 shrink-0" size={20} />
                <p className="text-sm text-slate-600 font-medium font-sans">Sur-mesure via WhatsApp</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-10 pointer-events-none hidden lg:block">
          <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop" alt="Paris" className="object-cover h-full w-full rounded-l-[100px]" />
        </div>
      </section>

      {/* SECTION WHY US */}
      <section id="why" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif">Pourquoi Pariserve ?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-sans">Une relation de confiance bâtie sur le long terme avec les plus beaux établissements de la capitale.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-blue-800 group-hover:scale-110 transition-transform">
                <History className="text-blue-400" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 font-sans">Depuis 1997</h3>
              <p className="text-slate-400 leading-relaxed text-sm font-sans">Nous ne sommes pas un algorithme. Nous connaissons les hôteliers parisiens par leurs prénoms depuis plus de 25 ans.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-amber-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-amber-800 group-hover:scale-110 transition-transform">
                <Sparkles className="text-amber-400" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 font-sans">Prix "Club" Exclusifs</h3>
              <p className="text-slate-400 leading-relaxed text-sm font-sans">Nos membres accèdent à des tarifs non-publics, impossibles à trouver sur Booking ou Expedia.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-green-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-green-800 group-hover:scale-110 transition-transform">
                <MessageSquare className="text-green-400" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 font-sans">Chat-to-Book</h3>
              <p className="text-slate-400 leading-relaxed text-sm font-sans">Pas de panier complexe. Une simple discussion WhatsApp pour confirmer votre disponibilité et votre tarif préférentiel.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION HOTELS GRID */}
      <section id="hotels" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold text-slate-900 mb-4 font-serif">Notre Collection</h2>
              <p className="text-slate-600 font-sans">Une sélection rigoureuse d'hôtels de charme testés et approuvés par nos experts.</p>
            </div>
            <div className="flex gap-2">
              <span className="bg-white px-4 py-2 rounded-full border border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-widest font-sans italic">Disponibilités Réelles</span>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {MOCK_HOTELS.map((hotel) => (
              <article key={hotel.id} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img src={hotel.imageUrl} alt={hotel.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 flex gap-1">
                    {Array.from({ length: hotel.stars }).map((_, i) => (
                      <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg border border-white shadow-sm font-sans">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Dès {hotel.priceRange.min}€</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-blue-900 mb-2 font-sans">
                    <MapPin size={14} />
                    <span className="text-xs font-bold uppercase tracking-tight">{hotel.district}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif group-hover:text-blue-900 transition-colors">{hotel.name}</h3>
                  <p className="text-slate-600 text-sm mb-6 line-clamp-2 leading-relaxed font-sans">{hotel.description}</p>
                  <div className="flex items-center justify-between gap-4 pt-4 border-t border-slate-100 font-sans">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Fourchette</span>
                      <span className="text-sm font-semibold text-slate-900">{hotel.priceRange.min}€ — {hotel.priceRange.max}€</span>
                    </div>
                    <button className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-green-500 hover:text-white transition-all">
                      <MessageCircle size={18} />
                      WhatsApp
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-20 bg-blue-900 rounded-3xl p-8 md:p-12 overflow-hidden relative">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-white max-w-lg">
                <h3 className="text-3xl font-bold mb-4 font-serif italic">Vous cherchez un quartier précis ?</h3>
                <p className="text-blue-200 font-sans">Notre équipe de concierges vous répond en moins de 15 minutes sur WhatsApp pour vous proposer l'hôtel idéal au meilleur prix.</p>
              </div>
              <button className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors flex items-center gap-3 shrink-0 shadow-lg font-sans">
                <MessageSquare />
                Parler à un expert
              </button>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -ml-16 -mb-16"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
