
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { PhoneCall, ShieldCheck, HeartHandshake } from "lucide-react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Pariserve - Hôtels de Charme & Luxe à Paris (Depuis 1997)",
  description: "Expert en hôtellerie parisienne depuis 1997. Réservez via WhatsApp pour obtenir les meilleurs tarifs garantis sans intermédiaire.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-slate-50 text-slate-900`}>
        {/* Navigation */}
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tighter text-blue-900 font-serif">PARISERVE</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-semibold">Established 1997</span>
              </div>
              
              <nav className="hidden md:flex space-x-8 items-center font-sans">
                <a href="#hotels" className="text-sm font-medium hover:text-blue-700 transition">Nos Hôtels</a>
                <a href="#why" className="text-sm font-medium hover:text-blue-700 transition">Notre Expertise</a>
                <div className="flex items-center gap-2 bg-blue-50 text-blue-900 px-4 py-2 rounded-full border border-blue-100">
                  <ShieldCheck size={18} />
                  <span className="text-xs font-bold uppercase">Meilleur Tarif Direct</span>
                </div>
              </nav>

              <div className="flex items-center">
                 <button className="bg-slate-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 transition-all flex items-center gap-2 font-sans">
                    <PhoneCall size={16} />
                    <span>Contact</span>
                 </button>
              </div>
            </div>
          </div>
        </header>

        {children}

        {/* Footer */}
        <footer className="bg-white border-t border-slate-200 pt-16 pb-8 font-sans">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-12 mb-16">
              <div className="col-span-1 md:col-span-2">
                <div className="flex flex-col mb-6">
                  <span className="text-2xl font-bold tracking-tighter text-blue-900 font-serif">PARISERVE</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-semibold italic">L'excellence parisienne depuis 1997</span>
                </div>
                <p className="text-slate-500 max-w-sm leading-relaxed text-sm mb-6">
                  Refonte 2024 d'un pionnier de la réservation d'hôtels à Paris. Nous privilégions l'humain et le contact direct pour vous offrir des prix inaccessibles ailleurs.
                </p>
                <div className="flex gap-4">
                  <div className="bg-slate-100 p-2 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer">
                    <HeartHandshake size={20} className="text-slate-600" />
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-6">Pariserve</h4>
                <ul className="space-y-4 text-sm text-slate-500 font-medium">
                  <li><a href="#" className="hover:text-blue-900 transition">À propos</a></li>
                  <li><a href="#" className="hover:text-blue-900 transition">Le concept Club</a></li>
                  <li><a href="#" className="hover:text-blue-900 transition">Témoignages</a></li>
                  <li><a href="#" className="hover:text-blue-900 transition">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-6">Légal</h4>
                <ul className="space-y-4 text-sm text-slate-500 font-medium">
                  <li><a href="#" className="hover:text-blue-900 transition">Mentions Légales</a></li>
                  <li><a href="#" className="hover:text-blue-900 transition">Politique de confidentialité</a></li>
                  <li><a href="#" className="hover:text-blue-900 transition">CGV</a></li>
                </ul>
              </div>
            </div>
            
            <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-slate-400">© 1997-{new Date().getFullYear()} Pariserve. Tous droits réservés.</p>
              <div className="flex items-center gap-6">
                <span className="text-[10px] font-bold text-slate-300 uppercase">Made with Passion in Paris</span>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
