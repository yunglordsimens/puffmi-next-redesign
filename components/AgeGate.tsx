"use client"; // <--- ВОТ ЭТА СТРОЧКА САМАЯ ВАЖНАЯ, ОНА УБИРАЕТ ОШИБКИ

import { useState, useEffect } from "react";

export default function AgeGate() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Проверяем, есть ли запись в браузере
    const isVerified = localStorage.getItem("age-verified");
    if (!isVerified) {
      setIsVisible(true);
      document.body.style.overflow = "hidden"; // Блокируем скролл
    }
  }, []);

  const handleVerify = () => {
    localStorage.setItem("age-verified", "true");
    setIsVisible(false);
    document.body.style.overflow = "unset"; // Разблокируем скролл
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex items-center justify-center p-6 animate-fadeIn">
      <div className="bg-white text-black max-w-md w-full p-8 rounded-3xl text-center shadow-2xl border border-gray-200">
        <div className="text-6xl mb-4">🔞</div>
        <h2 className="text-3xl font-black uppercase mb-4">Pouze 18+</h2>
        <p className="text-gray-500 mb-8 leading-relaxed">
          Tyto webové stránky obsahují produkty s nikotinem a jsou určeny pouze pro osoby starší 18 let.
        </p>
        
        <div className="flex flex-col gap-3">
          <button 
            onClick={handleVerify}
            className="bg-black text-white font-bold uppercase py-4 rounded-xl hover:bg-purple-600 transition-colors tracking-widest"
          >
            Je mi více než 18 let
          </button>
          <a 
            href="https://google.com" 
            className="text-gray-400 text-sm font-bold uppercase tracking-widest hover:text-black py-2"
          >
            Opustit stránky
          </a>
        </div>
      </div>
    </div>
  );
}