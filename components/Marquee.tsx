export default function Marquee() {
  const content = [
    "PUFFMI EVOLUTION",
    "PRÉMIOVÁ KVALITA",
    "NOVÉ PŘÍCHUTĚ",
    "DOPRAVA ZDARMA NAD 1000 KČ",
    "OFICIÁLNÍ DISTRIBUTOR",
    "PUFFMI CZECH",
  ];

  return (
    <div className="relative w-full overflow-hidden bg-black py-4 border-y border-black">
      {/* Трюк с градиентами по краям (Fade effect), 
        чтобы текст красиво уходил в "никуда" слева и справа 
      */}
      <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
      <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-black to-transparent z-10"></div>

      {/* Контейнер анимации */}
      <div className="flex w-max animate-marquee">
        {/* Рендерим контент 2 раза, чтобы не было "дырки" при прокрутке */}
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex shrink-0 items-center justify-around gap-12 px-6">
            {content.map((item, index) => (
              <div key={index} className="flex items-center gap-12">
                <span className="text-xl md:text-3xl font-bold uppercase tracking-wider text-white whitespace-nowrap">
                  {item}
                </span>
                {/* Разделитель (Звездочка) */}
                <span className="text-purple-500 text-2xl">✦</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}