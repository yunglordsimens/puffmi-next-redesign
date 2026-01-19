"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const FRAME_COUNT = 240; 

export default function VapeSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const sequenceObj = useRef({ frame: 0 });

  const currentFrame = (index: number) => 
    `/sequence/frame_${index.toString().padStart(4, '0')}.jpg`;

  useEffect(() => {
    let loadedCount = 0;
    const imgs: HTMLImageElement[] = [];

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) setImagesLoaded(true);
      };
      img.onerror = () => {
        // Если фрейм битый, пропускаем, чтобы не висело
        loadedCount++; 
        if (loadedCount === FRAME_COUNT) setImagesLoaded(true);
      };
      imgs.push(img);
    }
    imagesRef.current = imgs;
  }, []);

  const renderFrame = (index: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const img = imagesRef.current[Math.round(index)];

    if (canvas && ctx && img) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';

      // ЛОГИКА "CONTAIN" (ВПИСАТЬ):
      // Считаем пропорции так, чтобы картинка помещалась целиком
      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      
      // Используем Math.min вместо Math.max = картинка не обрезается
      // Умножаем на 0.8, чтобы оставить "воздух" вокруг (margin)
      const ratio = Math.min(hRatio, vRatio) * 0.85; 

      const centerShift_x = (canvas.width - img.width * ratio) / 2;
      const centerShift_y = (canvas.height - img.height * ratio) / 2;
      
      ctx.drawImage(img, 0, 0, img.width, img.height, centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
    }
  };

  useGSAP(() => {
    if (!imagesLoaded || !canvasRef.current) return;
    renderFrame(0);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=400%",
        scrub: 0.5, // Добавил чуть инерции для плавности
        pin: true,
      },
    });

    tl.to(sequenceObj.current, {
      frame: FRAME_COUNT - 1,
      snap: "frame",
      ease: "none",
      onUpdate: () => renderFrame(sequenceObj.current.frame),
    });
  }, { scope: containerRef, dependencies: [imagesLoaded] });

  return (
    // ФОН: Белый (bg-white)
    <section ref={containerRef} className="relative h-screen w-full bg-white overflow-hidden text-black">
      
      {!imagesLoaded && (
        <div className="absolute inset-0 flex items-center justify-center z-50 bg-white">
          <span className="animate-pulse text-gray-400 text-sm font-mono uppercase">Načítání 3D modelu...</span>
        </div>
      )}

      {/* ТЕКСТ: Теперь черный, так как фон белый */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">
        {/* Заголовок заезжает на продукт или висит над ним */}
        <h2 className="text-[12vw] leading-none font-bold uppercase tracking-tighter text-black mix-blend-multiply opacity-90 select-none">
          PUFFMI
        </h2>
        <p className="text-xl md:text-2xl font-light tracking-[0.5em] text-gray-500 mt-2 uppercase">
          Evoluce chuti
        </p>
      </div>

      <canvas 
        ref={canvasRef} 
        width={1920} 
        height={1080} 
        className="w-full h-full object-contain" // CSS тоже contain
      />
    </section>
  );
}