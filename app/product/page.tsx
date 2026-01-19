"use client";

import { useState } from "react";
import { PuffmiLogo } from "@/components/Logos"; // Убедись, что путь правильный
import { toast } from "sonner";

export default function ProductPage() {
  const [selectedColor, setSelectedColor] = useState("orange");
  // Динамический путь к картинке на основе стейта selectedColor
  // Если выберешь "blue", путь будет: /products/puffmi-4-1/puffmi-4-1-blue-front.png
   const currentImage = `/products/puffmi-4-1/puffmi-4-1-${selectedColor}-front.png`;
  // Данные для демо (Puffmi 4in1 из твоего скрина)
  const product = {
    name: "Puffmi 4in1 (zařízení bez náplně)",
    price: "100,00 Kč",
    oldPrice: "200,00 Kč",
    description: "Puffmi 4in1 je inovací ve světě jednorázových elektronických cigaret. Až 32 různých příchutí v jednom zařízení.",
    colors: [
      { id: "blue", name: "Blue", hex: "#3b82f6" },
      { id: "green", name: "Green", hex: "#22c55e" },
      { id: "orange", name: "Orange", hex: "#f97316" },
      { id: "pink", name: "Pink", hex: "#ec4899" },
      { id: "red", name: "Red", hex: "#ef4444" },
      { id: "violet", name: "Violet", hex: "#8b5cf6" },
    ]
  };

  return (
    <main className="bg-white min-h-screen text-black">
      
      {/* HEADER (Простой, чтобы вернуться назад) */}
      <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-white/80 backdrop-blur-md border-b border-gray-100">
        <a href="/" className="hover:opacity-50 transition-opacity">
           <PuffmiLogo className="w-24 text-black" />
        </a>
        <a href="/" className="text-sm font-bold uppercase tracking-widest border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition-colors">
          Zpět
        </a>
      </header>

      <div className="pt-24 lg:pt-32 px-4 md:px-12 max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          
{/* ЛЕВАЯ КОЛОНKA */}
<div className="w-full lg:w-3/5">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

    {/* ГЛАВНОЕ ФОТО (Динамическое) */}
    <div className="aspect-[4/5] rounded-3xl bg-[#F5F5F7] overflow-hidden flex items-center justify-center relative transition-all duration-500">
        {/* object-contain = вписать, p-8 = отступы внутри рамки */}
        <img 
        key={selectedColor} // key нужен, чтобы React знал, что картинка новая и перерисовал её
        src={currentImage} 
        alt={`Puffmi ${selectedColor}`} 
        className="w-full h-full object-contain p-8 hover:scale-110 transition-transform duration-700 drop-shadow-2xl" 
        />
    </div>

    {/* Остальные фото (Пока заглушки или можешь тоже менять) */}
    <div className="aspect-[4/5] rounded-3xl bg-[#F5F5F7] flex items-center justify-center text-gray-400">
        📸 Side View
    </div>
    <div className="aspect-square rounded-3xl bg-[#F5F5F7] flex items-center justify-center col-span-1 md:col-span-2 text-gray-400">
        📸 Lifestyle
    </div>
    </div>
</div>

          {/* ПРАВАЯ КОЛОНКА: ИНФО (Scrollable) */}
          <div className="w-full lg:w-2/5 relative">
            <div className="sticky top-32"> {/* Липкое позиционирование */}
              
              <span className="text-orange-500 font-bold tracking-widest text-xs uppercase mb-2 block">
                NYNÍ 50% SLEVA
              </span>
              
              <h1 className="text-4xl md:text-5xl font-bold uppercase leading-tight mb-4">
                {product.name}
              </h1>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold">{product.price}</span>
                <span className="text-xl text-gray-400 line-through">{product.oldPrice}</span>
                <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-bold uppercase">Výprodej</span>
              </div>

              <div className="h-px w-full bg-gray-200 my-8"></div>

              {/* Выбор цвета */}
              <div className="mb-8">
                <span className="text-sm font-bold uppercase mb-3 block text-gray-500">
                  Edice: <span className="text-black">{product.colors.find(c => c.id === selectedColor)?.name}</span>
                </span>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color) => (
                    <button 
                      key={color.id}
                      onClick={() => setSelectedColor(color.id)}
                      className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${selectedColor === color.id ? 'border-black scale-110' : 'border-transparent hover:border-gray-300'}`}
                    >
                      <span className="w-8 h-8 rounded-full shadow-sm" style={{backgroundColor: color.hex}}></span>
                    </button>
                  ))}
                </div>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Кнопки действия */}
              <div className="flex gap-4 mb-8">
                <div className="w-1/3 flex items-center justify-between border border-gray-300 rounded-full px-4">
                   <button className="text-xl font-bold p-2 hover:text-gray-500">-</button>
                   <span className="font-bold">1</span>
                   <button className="text-xl font-bold p-2 hover:text-gray-500">+</button>
                </div>
<button 
  onClick={() => toast.success('Produkt přidán do košíku')} 
  className="w-2/3 bg-black text-white rounded-full font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
>
  Do košíku
</button>
              </div>

              {/* Аккордеон / Детали */}
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-xl p-4 cursor-pointer hover:border-black transition-colors">
                   <div className="flex justify-between font-bold text-sm uppercase">
                     <span>Specifikace</span>
                     <span>+</span>
                   </div>
                </div>
                <div className="border border-gray-200 rounded-xl p-4 cursor-pointer hover:border-black transition-colors">
                   <div className="flex justify-between font-bold text-sm uppercase">
                     <span>Obsah balení</span>
                     <span>+</span>
                   </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}