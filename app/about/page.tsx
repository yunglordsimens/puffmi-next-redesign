"use client";

import { PuffmiLogo } from "@/components/Logos";
import Link from "next/link";
import { useState } from "react";

// ДАННЫЕ ДЛЯ ИНТЕРАКТИВНОГО БЛОКА
const VALUES = [
  {
    id: 0,
    title: "Kvalita bez kompromisů",
    desc: "Každé zařízení prochází 25 stupni kontroly kvality. Používáme pouze certifikované materiály a nejčistší e-liquidy na trhu. Žádné protékání, žádná spálená chuť.",
    image: "https://images.unsplash.com/photo-1555685812-4b943f3e9943?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 1,
    title: "Design, který baví",
    desc: "Vaping není jen o nikotinu, je to módní doplněk. Spolupracujeme s top designéry, abychom vytvořili zařízení, která se nestydíte vytáhnout na stůl v kavárně.",
    image: "https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a?q=80&w=1748&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    title: "Zákazník na prvním místě",
    desc: "Nejsme jen e-shop, jsme komunita. Garantujeme výměnu kusu za kus v případě reklamace a bleskovou podporu na Instagramu i emailu.",
    image: "https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    title: "Rychlost dodání",
    desc: "Víme, že nikdo nechce čekat. 98% objednávek odesíláme v den objednání. Díky našemu skladu v Praze máte Puffmi doma dřív, než řeknete vape.",
    image: "https://images.unsplash.com/photo-1672552226380-486fe900b322?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main className="bg-white min-h-screen text-black">
       
       {/* HEADER */}
       <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-white/90 backdrop-blur border-b border-gray-100">
        <Link href="/"><PuffmiLogo className="w-32" /></Link>
        <Link href="/" className="text-xs font-bold uppercase border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition-colors">Zpět</Link>
      </header>

      {/* 1. HERO TEXT (Вступление) */}
      <section className="pt-32 pb-16 px-6 md:px-12 max-w-6xl mx-auto">
        <h1 className="text-6xl md:text-[8vw] font-black uppercase tracking-tighter mb-8 leading-[0.9]">
          More than<br/>just Vape.
        </h1>
        <div className="flex flex-col md:flex-row gap-8 md:items-end">
            <p className="text-xl md:text-2xl font-light text-gray-600 leading-relaxed max-w-2xl">
              Jsme oficiální distributoři značky Puffmi pro Českou republiku. Naší misí je přinášet technologie, které mění pravidla hry. 
            </p>
            <div className="text-sm font-bold uppercase tracking-widest border-b border-black pb-1">
                Scroll Down ↓
            </div>
        </div>
      </section>

      {/* 2. ИНТЕРАКТИВНЫЙ БЛОК (ТО, ЧТО ТЫ ХОТЕЛА) */}
      <section className="px-6 md:px-12 mb-32">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-[70vh] min-h-[500px]">
            
            {/* ЛЕВАЯ ЧАСТЬ: МЕНЯЮЩИЙСЯ КОНТЕНТ */}
            <div className="relative rounded-3xl overflow-hidden bg-gray-100 transition-all duration-500">
               {/* Картинка с анимацией смены (key=activeTab перезагружает картинку) */}
               <img 
                 key={activeTab}
                 src={VALUES[activeTab].image} 
                 className="w-full h-full object-cover animate-fadeIn brightness-50" 
                 alt={VALUES[activeTab].title}
               />
               
               {/* Текст поверх картинки */}
               <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white max-w-lg animate-fadeIn">
                  <h3 className="text-3xl md:text-5xl font-bold uppercase mb-4 leading-none">
                    {VALUES[activeTab].title}
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    {VALUES[activeTab].desc}
                  </p>
               </div>
            </div>

            {/* ПРАВАЯ ЧАСТЬ: СПИСОК (КЛИКАБЕЛЬНЫЙ) */}
            <div className="bg-black text-white rounded-3xl p-8 md:p-12 flex flex-col justify-center">
               <h6 className="text-gray-500 font-bold uppercase tracking-widest mb-8 text-sm">Naše Hodnoty</h6>
               <ul className="space-y-2">
                 {VALUES.map((item, index) => (
                   <li 
                     key={item.id}
                     onClick={() => setActiveTab(index)}
                     className={`cursor-pointer text-2xl md:text-4xl font-bold uppercase transition-all duration-300 flex items-center gap-4 py-3 group ${activeTab === index ? 'text-white pl-4' : 'text-gray-600 hover:text-gray-400'}`}
                   >
                     <span className={`text-sm font-mono transition-colors ${activeTab === index ? 'text-purple-500' : 'text-gray-700'}`}>
                        0{index + 1}.
                     </span>
                     {item.title}
                     {activeTab === index && <span className="text-purple-500 ml-auto text-xl">→</span>}
                   </li>
                 ))}
               </ul>
            </div>

         </div>
      </section>

      {/* 3. СТАТИСТИКА (ЧТОБЫ НЕ БЫЛО КОРОТКО) */}
      <section className="py-24 bg-gray-50 px-6 md:px-12 rounded-[3rem] mx-2 mb-24">
         <div className="max-w-[1600px] mx-auto">
            <h2 className="text-3xl font-bold uppercase mb-16 text-center">Puffmi v číslech</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="space-y-2">
                    <span className="text-5xl md:text-7xl font-black text-black block">50k+</span>
                    <span className="text-sm text-gray-500 uppercase tracking-widest font-bold">Prodaných kusů</span>
                </div>
                <div className="space-y-2">
                    <span className="text-5xl md:text-7xl font-black text-black block">24h</span>
                    <span className="text-sm text-gray-500 uppercase tracking-widest font-bold">Průměrná doba dodání</span>
                </div>
                <div className="space-y-2">
                    <span className="text-5xl md:text-7xl font-black text-black block">32</span>
                    <span className="text-sm text-gray-500 uppercase tracking-widest font-bold">Unikátních příchutí</span>
                </div>
                <div className="space-y-2">
                    <span className="text-5xl md:text-7xl font-black text-black block">4.9</span>
                    <span className="text-sm text-gray-500 uppercase tracking-widest font-bold">Hodnocení zákazníků</span>
                </div>
            </div>
         </div>
      </section>

      {/* 4. JOIN US (ПРИЗЫВ) */}
      <section className="text-center pb-24 px-6">
        <h2 className="text-4xl font-bold uppercase mb-6">Chcete spolupracovat?</h2>
        <p className="text-gray-500 mb-8">Hledáme partnery pro velkoobchodní spolupráci.</p>
        <Link href="/contact" className="inline-block bg-black text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-purple-600 transition-colors">
            Kontaktujte nás
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-12 px-6 border-t border-gray-800">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
           <PuffmiLogo className="w-24 text-white" />
           <div className="flex gap-8 text-sm font-bold uppercase text-gray-400">
              <Link href="/" className="hover:text-white transition-colors">Domů</Link>
              <Link href="/catalog" className="hover:text-white transition-colors">Katalog</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Kontakt</Link>
           </div>
           <p className="text-xs text-gray-600">© 2026 DUBLIFE S.R.O.</p>
        </div>
      </footer>
    </main>
  );
}