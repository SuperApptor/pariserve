import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTourBySlug } from '@/lib/tours';
import { Star, Clock, CheckCircle, MessageCircle, ArrowLeft, HelpCircle } from 'lucide-react';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function TourPage({ params }: PageProps) {
  // On récupère le slug depuis la Promesse
  const { slug } = await params;
  
  // On cherche le tour correspondant
  const tour = getTourBySlug(slug);

  // Si on ne trouve pas, on affiche la page 404
  if (!tour) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      
      {/* Navigation Retour */}
      <div className="absolute top-4 left-4 z-20">
        <Link href="/" className="flex items-center gap-2 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-sm hover:bg-white transition text-sm font-medium text-black">
          <ArrowLeft size={16} />
          Retour
        </Link>
      </div>

      {/* Hero Header */}
      <div className="relative h-[40vh] w-full">
        <Image 
          src={tour.imageUrl} 
          alt={tour.name}
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 text-white">
          <div className="max-w-6xl mx-auto">
            <span className="inline-block px-3 py-1 bg-blue-600 text-xs font-bold uppercase tracking-wider rounded-full mb-3">
              {tour.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold font-serif mb-2">{tour.name}</h1>
            <div className="flex items-center gap-4 text-gray-200 text-sm">
              <div className="flex items-center gap-1"><Clock size={16}/> {tour.duration}</div>
              <div className="flex items-center gap-1 text-yellow-400"><Star size={16} fill="currentColor"/> {tour.rating}/5</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12 grid md:grid-cols-3 gap-12">
        
        {/* Colonne Gauche : Infos */}
        <div className="md:col-span-2 space-y-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold mb-4 font-serif text-slate-900">L'Expérience</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">{tour.longDescription}</p>
            
            <h3 className="font-bold mb-3">Points forts :</h3>
            <ul className="space-y-2">
              {tour.highlights.map(h => (
                <li key={h} className="flex items-start gap-2 text-slate-700">
                  <CheckCircle size={18} className="text-green-500 mt-1 shrink-0"/>
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Section FAQ */}
          <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
            <h3 className="flex items-center gap-2 text-xl font-bold mb-4 text-blue-900">
              <HelpCircle className="text-blue-600"/>
              Questions Fréquentes
            </h3>
            <div className="space-y-4">
              {tour.faq.map((item, i) => (
                <div key={i}>
                  <p className="font-bold text-slate-800 text-sm">{item.question}</p>
                  <p className="text-slate-600 text-sm">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Colonne Droite : Sticky Booking Card */}
        <div className="relative">
          <div className="sticky top-8 p-6 rounded-2xl border border-slate-200 shadow-xl bg-white">
            <div className="flex justify-between items-end mb-6 border-b border-slate-100 pb-6">
              <div>
                <p className="text-sm text-slate-500">À partir de</p>
                <p className="text-3xl font-bold text-slate-900">{tour.price}€</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-green-600 font-bold bg-green-50 px-2 py-1 rounded">DISPO IMMÉDIATE</p>
              </div>
            </div>

            <a 
              href={`https://wa.me/33600000000?text=Bonjour, je voudrais réserver des places pour : ${tour.name}`}
              target="_blank" 
              className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-green-200"
            >
              <MessageCircle size={24} />
              Réserver sur WhatsApp
            </a>

            <p className="text-xs text-center text-slate-400 mt-4">
              L'expert vous répond en 2 min.<br/>
              Conseils personnalisés & Billets coupe-file.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}