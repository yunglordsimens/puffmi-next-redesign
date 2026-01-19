"use client";

import { PuffmiLogo } from "@/components/Logos";

export default function ContactPage() {
  return (
    <main className="bg-black min-h-screen text-white pt-32 px-6 md:px-12 flex flex-col md:flex-row gap-12">
       
      <header className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference">
        <a href="/"><PuffmiLogo className="w-32 text-white" /></a>
        <a href="/" className="text-sm font-bold uppercase border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors">Zpět</a>
      </header>

      {/* Инфо */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8">Kontakt</h1>
        <div className="space-y-8 text-xl text-gray-400">
          <div>
            <h6 className="text-xs font-bold text-white uppercase tracking-widest mb-2">Adresa</h6>
            <p>Libušská 319/126<br/>142 00 Praha 4</p>
          </div>
          <div>
            <h6 className="text-xs font-bold text-white uppercase tracking-widest mb-2">Telefon & Email</h6>
            <p className="hover:text-white cursor-pointer transition-colors">+420 608 111 385</p>
            <p className="hover:text-white cursor-pointer transition-colors">media@dublife.cz</p>
          </div>
        </div>
      </div>

      {/* Форма */}
      <div className="w-full md:w-1/2 bg-white text-black rounded-3xl p-8 md:p-12">
        <h3 className="text-3xl font-bold uppercase mb-8">Napište nám</h3>
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
             <input type="text" placeholder="Jméno" className="w-full bg-gray-100 border-0 rounded-xl px-4 py-4 font-bold focus:ring-2 focus:ring-black outline-none" />
             <input type="email" placeholder="E-mail" className="w-full bg-gray-100 border-0 rounded-xl px-4 py-4 font-bold focus:ring-2 focus:ring-black outline-none" />
          </div>
          <input type="text" placeholder="Telefon" className="w-full bg-gray-100 border-0 rounded-xl px-4 py-4 font-bold focus:ring-2 focus:ring-black outline-none" />
          <textarea placeholder="Vaše zpráva..." rows={4} className="w-full bg-gray-100 border-0 rounded-xl px-4 py-4 font-bold focus:ring-2 focus:ring-black outline-none"></textarea>
          
          <button className="w-full bg-black text-white font-bold uppercase tracking-widest py-4 rounded-xl hover:bg-purple-600 transition-colors">
            Odeslat
          </button>
        </form>
      </div>
    </main>
  );
}