"use client";

import { PuffmiLogo } from "@/components/Logos";
import Link from "next/link";
import { useState } from "react";

// БАЗА ДАННЫХ С ЛОГИКОЙ (Sold Out / Sale)
const ALL_PRODUCTS = [
  // --- УСТРОЙСТВА ---
  { 
    id: 1, 
    name: "Puffmi 4in1 Device", 
    brand: "Puffmi", 
    category: "Systems",
    price: "100 Kč", 
    oldPrice: "200 Kč", // Скидка (Акция)
    img: "/products/catalog/puffmi-4in1.png", 
    tag: "-50%" 
  },
  { 
    id: 2, 
    name: "Puffmi 2in1 Kit", 
    brand: "Puffmi", 
    category: "Systems",
    price: "249 Kč", 
    img: "/products/catalog/puffmi-2in1.png", 
    tag: "NEW" 
  },
  
  // --- НАПОЛНИТЕЛИ (Как на твоих фото) ---
  { 
    id: 3, 
    name: "Náplně 4in1 (Pack 4ks)", 
    brand: "Puffmi", 
    category: "Accessories", 
    price: "129 Kč", 
    img: "/products/catalog/puffmi-pods-4.png" // Фото коробочки с подами
  },
  { 
    id: 31, 
    name: "Náplně 2in1 (Pack 2ks)", 
    brand: "Puffmi", 
    category: "Accessories", 
    price: "300 Kč", 
    soldOut: true, // <--- ТОВАР ВЫПРОДАН
    img: "/products/catalog/puffmi-pods-2.png" 
  },

  // --- ОДНОРАЗКИ ---
  { 
    id: 4, 
    name: "Airio 1000 Series", 
    brand: "Puffmi", 
    category: "Disposable",
    price: "169 Kč", 
    img: "/products/catalog/puffmi-airio-1000.png" 
  },
  { 
    id: 5, 
    name: "Airio 1200 Series", 
    brand: "Puffmi", 
    category: "Disposable",
    price: "189 Kč", 
    img: "/products/catalog/puffmi-airio-1200.png" 
  },
  { 
    id: 6, 
    name: "Crystal Box", 
    brand: "Puffmi", 
    category: "Disposable",
    price: "249 Kč", 
    img: "/products/catalog/puffmi-crystal.png",
    tag: "POPULAR"
  },

  // --- ЖИДКОСТИ ---
  { 
    id: 9, 
    name: "Impress NicSalt", 
    brand: "Impress", 
    category: "Liquids",
    price: "99 Kč", 
    img: "/products/catalog/liquid-impress.png" 
  },
  { 
    id: 10, 
    name: "Realmate E-Liquid", 
    brand: "Realmate", 
    category: "Liquids",
    price: "120 Kč", 
    img: "/products/catalog/liquid-realmate.png" 
  },

  // --- ПАРТНЕРЫ ---
  { 
    id: 7, 
    name: "OXVA Xlim Pro", 
    brand: "OXVA", 
    category: "Pod Systems",
    price: "699 Kč", 
    img: "/products/catalog/oxva-xlim.png" 
  },
];

export default function CatalogPage() {
  const [activeBrand, setActiveBrand] = useState("Vše");
  const [activeCategory, setActiveCategory] = useState("Vše");

  const filtered = ALL_PRODUCTS.filter(p => {
    const brandMatch = activeBrand === "Vše" || p.brand === activeBrand;
    let catMatch = true;
    if (activeCategory === "Jednorázové") catMatch = p.category === "Disposable";
    if (activeCategory === "Systémy & Pody") catMatch = p.category === "Systems" || p.category === "Pod Systems" || p.category === "Accessories";
    if (activeCategory === "E-Liquidy") catMatch = p.category === "Liquids";
    return brandMatch && catMatch;
  });

  return (
    <main className="bg-gray-50 min-h-screen text-black pt-24">
      
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-white/90 backdrop-blur border-b border-gray-200">
        <Link href="/"><PuffmiLogo className="w-32" /></Link>
        <Link href="/" className="text-xs font-bold uppercase border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition-colors">
          Zpět na Home
        </Link>
      </header>

      <div className="px-6 md:px-12 py-12 flex flex-col md:flex-row gap-12 max-w-[1600px] mx-auto">
        
        {/* SIDEBAR */}
        <div className="w-full md:w-1/4">
           <div className="sticky top-32">
             <h3 className="text-xl font-bold uppercase mb-6">Filtrovat</h3>
             <div className="mb-8">
               <h6 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Značka</h6>
               <div className="flex flex-col gap-2">
                 {['Vše', 'Puffmi', 'OXVA', 'Impress', 'Realmate'].map(brand => (
                   <button key={brand} onClick={() => setActiveBrand(brand)} className={`text-left text-sm font-bold transition-colors ${activeBrand === brand ? 'text-black pl-2 border-l-2 border-black' : 'text-gray-500 hover:text-black'}`}>
                     {brand}
                   </button>
                 ))}
               </div>
             </div>
             <div className="mb-8">
               <h6 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Kategorie</h6>
               <div className="flex flex-col gap-2 text-sm font-medium text-gray-600">
                  {['Vše', 'Jednorázové', 'Systémy & Pody', 'E-Liquidy'].map(cat => (
                    <button key={cat} onClick={() => setActiveCategory(cat)} className={`text-left transition-colors ${activeCategory === cat ? 'text-black font-bold' : 'hover:text-black'}`}>
                      {cat}
                    </button>
                  ))}
               </div>
             </div>
           </div>
        </div>

        {/* СЕТКА */}
        <div className="w-full md:w-3/4">
           <div className="flex justify-between items-end mb-8">
              <h1 className="text-4xl md:text-5xl font-bold uppercase">Katalog</h1>
              <span className="text-gray-400 text-sm font-mono">{filtered.length} produktů</span>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8">
             {filtered.map(p => (
               <Link href={p.soldOut ? '#' : '/product'} key={p.id} className={`group block h-full ${p.soldOut ? 'cursor-not-allowed' : ''}`}>
                 
                 {/* КАРТОЧКА: Если SoldOut - делаем полупрозрачной */}
                 <div className={`bg-white p-6 rounded-2xl hover:shadow-xl transition-all duration-300 relative overflow-hidden h-full flex flex-col ${p.soldOut ? 'opacity-75' : ''}`}>
                    
                    {/* 1. БЕЙДЖИКИ (Слева) */}
                    <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                        {/* Бейдж Акции */}
                        {p.oldPrice && !p.soldOut && (
                             <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider shadow-sm">
                               {p.tag || "SLEVA"}
                             </span>
                        )}
                        {/* Бейдж Новинки */}
                        {p.tag === "NEW" && (
                            <span className="bg-black text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                                NEW
                            </span>
                        )}
                    </div>

                    {/* 2. БЕЙДЖ ВЫПРОДАНО (По центру) */}
                    {p.soldOut && (
                        <div className="absolute inset-0 z-20 flex items-center justify-center bg-white/30 backdrop-blur-[2px]">
                            <span className="bg-black text-white px-4 py-2 font-bold uppercase tracking-widest text-xs rounded-full border border-white">
                                Vyprodáno
                            </span>
                        </div>
                    )}

                    {/* КАРТИНКА (Grayscale если выпродано) */}
                    <div className="aspect-[4/5] bg-gray-50 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden">
                        {p.img ? (
                            <img 
                              src={p.img} 
                              alt={p.name} 
                              className={`w-full h-full object-contain p-6 transition-transform duration-500 ${p.soldOut ? 'grayscale filter' : 'group-hover:scale-110'}`} 
                            />
                        ) : <span className="text-4xl">📦</span>}
                    </div>
                    
                    {/* ИНФО */}
                    <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{p.brand}</p>
                        <h4 className={`font-bold text-lg leading-tight mb-1 ${p.soldOut ? 'text-gray-400' : 'text-black'}`}>{p.name}</h4>
                    </div>
                    
                    {/* ЦЕНА (Сравнение старой и новой) */}
                    <div className="flex justify-between items-center mt-auto border-t border-gray-100 pt-4">
                        <div className="flex flex-col">
                            {p.oldPrice && !p.soldOut && (
                                <span className="text-xs text-gray-400 line-through font-medium">{p.oldPrice}</span>
                            )}
                            <span className={`font-bold text-xl ${p.oldPrice && !p.soldOut ? 'text-red-600' : ''}`}>
                                {p.price}
                            </span>
                        </div>

                        {!p.soldOut && (
                            <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
                            →
                            </span>
                        )}
                    </div>
                 </div>
               </Link>
             ))}
           </div>
        </div>
      </div>
      
      {/* FOOTER */}
      <footer className="bg-black text-white py-12 px-6 mt-24 border-t border-gray-800">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
           <PuffmiLogo className="w-24 text-white" />
           <p className="text-xs text-gray-600">© 2026 DUBLIFE S.R.O.</p>
        </div>
      </footer>
    </main>
  );
}