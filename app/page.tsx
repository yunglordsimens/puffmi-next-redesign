"use client";

import VapeSequence from "@/components/VapeSequence";
import { PuffmiLogo } from "@/components/Logos";
import { useState, useEffect } from "react";
import Marquee from "@/components/Marquee";
import Link from "next/link"; // Добавили Link для переходов

// --- ДАННЫЕ ДЛЯ КАТЕГОРИЙ (KOLEKCE) ---
// Берем данные с твоего скриншота
const COLLECTIONS = [
  { 
    id: "4in1", 
    title: "Puffmi 4in1", 
    subtitle: "Zařízení & Náplně", 
    desc: "Revoluční systém s vyměnitelnými pody.", 
    image: "/products/puffmi-4-1/puffmi-4-1-blue-front.png", // Твоя картинка
    bg: "bg-blue-50",
    cols: "md:col-span-2", // Занимает 2 места (Большой)
    link: "/product" // В будущем /catalog/4in1
  },
  { 
    id: "airio", 
    title: "Airio Series", 
    subtitle: "1000 & 1200 Puffs", 
    desc: "Elegantní design a jemná chuť.", 
    image: "https://images.unsplash.com/photo-1542845600-410a56f6c367?auto=format&fit=crop&q=80&w=800", // Заглушка (потом свои)
    bg: "bg-purple-50",
    cols: "md:col-span-1",
    link: "/catalog"
  },
  { 
    id: "crystal", 
    title: "Crystal Box", 
    subtitle: "Premium Design", 
    desc: "Průhledný krystalický design.", 
    image: "https://images.unsplash.com/photo-1614088685112-0a760b7163c8?auto=format&fit=crop&q=80&w=800",
    bg: "bg-gray-100",
    cols: "md:col-span-1",
    link: "/catalog"
  },
  { 
    id: "liquids", 
    title: "Liquids & Příslušenství", 
    subtitle: "Impress, Realmate", 
    desc: "Široká nabídka příchutí.", 
    image: "https://images.unsplash.com/photo-1555685812-4b943f3e9943?auto=format&fit=crop&q=80&w=800", 
    bg: "bg-orange-50",
    cols: "md:col-span-2", // Тоже большой снизу
    link: "/catalog"
  }
];

// --- ПРОДУКТЫ ДЛЯ СЛАЙДЕРА (Хиты) ---
const PRODUCTS = [
  { id: 1, name: "Puffmi 4in1 Kit", price: "299 Kč", brand: "PUFFMI", tag: "HIT" },
  { id: 2, name: "Airio 1000", price: "189 Kč", brand: "PUFFMI", tag: "NEW" },
  { id: 3, name: "Impress Liquid", price: "99 Kč", brand: "IMPRESS", tag: "SALE" },
  { id: 4, name: "MEMERS Dr. Air", price: "599 Kč", brand: "MEMERS", tag: "PRO" },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const openProduct = (product: any) => {
    setSelectedProduct(product);
    document.body.style.overflow = 'hidden';
  };

  const closeProduct = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <main className="bg-white min-h-screen text-black selection:bg-black selection:text-white">
      
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference text-white">
        <PuffmiLogo className="w-32 md:w-40" />
        {!isMenuOpen && (
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="text-sm font-bold uppercase tracking-widest border border-white/50 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors"
          >
            Menu
          </button>
        )}
      </header>

      {/* 1. HERO (Оставляем, это круто) */}
      <VapeSequence />
      <Marquee />

      {/* 2. INTRO (Философия) */}
      <div className="py-24 px-6 md:px-12 text-center max-w-4xl mx-auto">
        <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Puffmi Evolution</h3>
        <p className="text-2xl md:text-5xl font-light leading-tight text-gray-900">
          Nová éra vapingu. <span className="font-bold">Technologie Mesh Coil</span>, čistá chuť a design, který definuje styl.
        </p>
      </div>

      {/* 3. КАТЕГОРИИ (Kolekce) - ВОТ ТУТ МЫ ПОКАЗЫВАЕМ ВСЁ */}
      <section id="kolekce" className="px-6 md:px-12 pb-24">
        <div className="flex items-end justify-between mb-8 pb-4 border-b border-gray-200">
          <h3 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">Naše Kolekce</h3>
          <span className="hidden md:block text-gray-500 font-mono text-sm">VYBERTE SI SVŮJ STYL</span>
        </div>

        {/* Бенто-сетка категорий */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {COLLECTIONS.map((col) => (
            <Link 
              key={col.id} 
              href={col.link}
              className={`group relative h-[50vh] rounded-3xl overflow-hidden cursor-pointer ${col.bg} ${col.cols} transition-transform hover:scale-[1.01] duration-500`}
            >
              {/* Текст */}
              <div className="absolute top-8 left-8 z-20 max-w-xs">
                <span className="text-xs font-bold uppercase tracking-widest text-black/50 mb-2 block">{col.subtitle}</span>
                <h4 className="text-4xl font-bold mb-4">{col.title}</h4>
                <p className="text-sm text-gray-600 font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                  {col.desc}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 border-b border-black pb-1 text-sm font-bold uppercase">
                  Prohlédnout <span className="transition-transform group-hover:translate-x-2">→</span>
                </div>
              </div>

              {/* Картинка */}
              <div className="absolute right-0 bottom-0 w-2/3 h-full z-10">
                 <img 
                   src={col.image} 
                   alt={col.title}
                   className="w-full h-full object-contain object-bottom transform translate-y-10 group-hover:translate-y-0 transition-transform duration-700"
                 />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. ТЕХНОЛОГИИ (Storytelling Block) */}
      <section className="bg-black text-white py-32 px-6 md:px-12 rounded-[3rem] mx-2 mb-24 relative overflow-hidden">
        {/* Фон (Абстракция) */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000')] bg-cover bg-center"></div>
        
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
           <div>
             <span className="text-purple-400 font-bold tracking-widest uppercase mb-4 block">Technology</span>
             <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-none">
               Dual Mesh<br/>Explosion.
             </h2>
             <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-md">
               Každé zařízení Puffmi je vybaveno technologií Mesh Coil nové generace. Okamžité nahřátí, konzistentní chuť od prvního do posledního potahu.
             </p>
             <div className="grid grid-cols-2 gap-8">
               <div>
                 <h5 className="text-3xl font-bold text-white mb-1">0.01s</h5>
                 <span className="text-sm text-gray-500">Rychlost žhavení</span>
               </div>
               <div>
                 <h5 className="text-3xl font-bold text-white mb-1">500mAh</h5>
                 <span className="text-sm text-gray-500">Pure Cobalt Battery</span>
               </div>
             </div>
           </div>
           
           {/* Иллюстрация технологии (Можно заменить на фото койла) */}
           <div className="aspect-square bg-gradient-to-br from-purple-900 to-blue-900 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        </div>
      </section>

      {/* 5. ПОПУЛЯРНЫЕ ТОВАРЫ (Маленькая сетка) */}
      <section className="px-6 md:px-12 pb-24">
        <h3 className="text-3xl font-bold uppercase mb-8">Nejprodávanější</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {PRODUCTS.map(p => (
             <div key={p.id} onClick={() => openProduct(p)} className="bg-gray-50 rounded-xl p-4 cursor-pointer group hover:bg-gray-100 transition-colors">
                <div className="aspect-square bg-white rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                   <span className="absolute top-2 left-2 bg-black text-white text-[10px] font-bold px-2 py-0.5 rounded">{p.tag}</span>
                   <span className="text-4xl group-hover:scale-110 transition-transform">⚡️</span>
                </div>
                <h4 className="font-bold text-sm">{p.name}</h4>
                <span className="text-xs text-gray-500">{p.brand}</span>
                <div className="mt-2 font-bold">{p.price}</div>
             </div>
          ))}
        </div>
      </section>

      {/* 6. БАННЕР-ПЕРЕХОД В КАТАЛОГ (Вместо старого черного блока) */}
      <section className="px-6 md:px-12 pb-24">
        <Link href="/catalog" className="block group">
          <div className="bg-black text-white rounded-3xl p-12 md:p-24 text-center relative overflow-hidden transition-transform hover:scale-[1.01] duration-500">
             
             <div className="relative z-10">
               <h3 className="text-3xl md:text-6xl font-bold mb-6">Nenašli jste, co hledáte?</h3>
               <div className="inline-flex items-center gap-4 border border-white/30 px-8 py-4 rounded-full hover:bg-white hover:text-black transition-colors uppercase font-bold tracking-widest">
                 Přejít do kompletního katalogu
                 <span>→</span>
               </div>
             </div>

             {/* Декор на фоне */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle,rgba(100,50,255,0.2)_0%,rgba(0,0,0,0)_70%)] opacity-50 group-hover:opacity-70 transition-opacity"></div>
          </div>
        </Link>
      </section>

      {/* FOOTER (Твой жирный футер) */}
      <footer className="bg-black text-white pt-24 pb-12 px-6 rounded-t-[3rem] relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24 max-w-[1600px] mx-auto z-10 relative">
          <div className="col-span-1 md:col-span-2">
             <PuffmiLogo className="w-48 mb-8 text-white" />
             <p className="text-gray-400 max-w-sm text-lg">
               Oficiální distributor prémiových elektronických cigaret Puffmi pro Českou republiku.
             </p>
          </div>
          <div>
            <h6 className="font-bold text-white/50 uppercase tracking-widest mb-6 text-sm">Menu</h6>
            <ul className="space-y-4 text-xl font-bold">
              {/* Ссылки на новые страницы */}
              <li>
                <Link href="/catalog" className="hover:text-purple-400 transition-colors">
                  Katalog
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-purple-400 transition-colors">
                  O Značce
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-purple-400 transition-colors">
                  Kontakt
                </Link>
              </li>
              {/* Если нужна ссылка на техподдержку или отдельную страницу, можно добавить */}
            </ul>
          </div>
          <div>
            <h6 className="font-bold text-white/50 uppercase tracking-widest mb-6 text-sm">Kontakt</h6>
            <ul className="space-y-4 text-gray-300">
              <li>Libušská 319/126, Praha 4</li>
              <li>+420 608 111 385</li>
              <li>media@dublife.cz</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-12 text-center">
           <h2 className="text-[13vw] font-black leading-none text-white/5 select-none pointer-events-none">
             PUFFMI.CZ
           </h2>
           <div className="flex justify-between text-xs text-gray-600 mt-8 font-mono px-4">
              <span>© 2026 DUBLIFE S.R.O.</span>
              <span>DESIGNED BY YOU</span>
           </div>
        </div>
      </footer>

      {/* MODAL & MENU (Остаются те же, просто скопируй свои рабочие куски сюда если нужно) */}
      {/* --- MENU OVERLAY (ПОЛНОЭКРАННОЕ МЕНЮ) --- */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-black text-white flex flex-col justify-center items-center animate-fadeIn">
            {/* Кнопка закрыть */}
            <button 
              onClick={() => setIsMenuOpen(false)} 
              className="absolute top-6 right-6 w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors"
            >
              ✕
            </button>
            
            {/* Ссылки (ТЕПЕРЬ РАБОТАЮТ) */}
            <nav className="flex flex-col gap-6 text-center">
                <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-5xl md:text-7xl font-bold uppercase tracking-tighter hover:text-purple-500 transition-colors">
                  Domů
                </Link>
                <Link href="/catalog" onClick={() => setIsMenuOpen(false)} className="text-5xl md:text-7xl font-bold uppercase tracking-tighter hover:text-purple-500 transition-colors">
                  Katalog
                </Link>
                <Link href="/about" onClick={() => setIsMenuOpen(false)} className="text-5xl md:text-7xl font-bold uppercase tracking-tighter hover:text-purple-500 transition-colors">
                  O Značce
                </Link>
                <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="text-5xl md:text-7xl font-bold uppercase tracking-tighter hover:text-purple-500 transition-colors">
                  Kontakt
                </Link>
            </nav>

            <div className="absolute bottom-12 text-sm text-gray-500 font-mono">
              PUFFMI CZECH REPUBLIC © 2026
            </div>
        </div>
      )}

      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={closeProduct}></div>
          <div className="relative bg-white w-full max-w-lg p-8 rounded-3xl shadow-2xl animate-fadeIn">
             <button onClick={closeProduct} className="absolute top-4 right-4 font-bold text-xl">✕</button>
             <h2 className="text-3xl font-bold mb-2">{selectedProduct.name}</h2>
             <p className="text-gray-500 mb-6">{selectedProduct.brand} • {selectedProduct.tag}</p>
             <div className="flex justify-between items-center mt-8">
                <span className="text-2xl font-bold">{selectedProduct.price}</span>
                <Link href="/product" className="bg-black text-white px-6 py-3 rounded-full font-bold uppercase text-sm hover:bg-purple-600 transition-colors">
                    Detail produktu
                </Link>
             </div>
          </div>
        </div>
      )}

    </main>
  );
}