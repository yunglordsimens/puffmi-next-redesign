export const PuffmiLogo = ({ className = "w-32 h-auto" }: { className?: string }) => (
  <svg viewBox="0 0 400 120" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Стилизованный логотип Puffmi (Текст + Иконка) */}
    <path d="M60 20 C30 20 10 45 10 80 C10 100 25 110 40 110 L50 110 L50 130 L70 130 L70 110 C90 110 100 90 100 60 C100 30 80 20 60 20 Z M60 40 C75 40 80 50 80 70 C80 90 70 95 60 95 L40 95 C35 95 30 90 30 75 C30 50 40 40 60 40 Z" />
    <text x="120" y="90" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="80" letterSpacing="-2">PUFFMI</text>
  </svg>
);

export const OxvaLogo = ({ className = "w-24 h-auto" }: { className?: string }) => (
  <svg viewBox="0 0 200 60" fill="currentColor" className={className}>
    <text x="10" y="45" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="40" letterSpacing="2">OXVA</text>
  </svg>
);

export const VooPooLogo = ({ className = "w-24 h-auto" }: { className?: string }) => (
  <svg viewBox="0 0 200 60" fill="currentColor" className={className}>
    <text x="10" y="45" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="40" fontStyle="italic">VOOPOO</text>
  </svg>
);

export const RealmateLogo = ({ className = "w-24 h-auto" }: { className?: string }) => (
  <svg viewBox="0 0 200 60" fill="currentColor" className={className}>
     <text x="10" y="45" fontFamily="serif" fontWeight="bold" fontSize="35">Realmate</text>
  </svg>
);