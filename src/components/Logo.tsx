import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  variant?: 'full' | 'icon' | 'badge';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md',
  showText = false,
  variant = 'icon'
}) => {
  const sizeMap = {
    xs: 'w-8 h-8',
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  return (
    <div className={`inline-flex items-center space-x-3 ${className}`}>
      {/* Golden Monogram Emblem Container */}
      <div 
        className={`relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#091510] via-[#040c08] to-[#020604] p-1 border border-amber-500/40 shadow-lg shadow-amber-950/40 shrink-0 ${sizeMap[size]}`}
      >
        <svg 
          viewBox="0 0 300 200" 
          className="w-full h-full object-contain filter drop-shadow-[0_2px_4px_rgba(217,163,67,0.3)]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logoGoldStem" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#c58a36" />
              <stop offset="30%" stopColor="#fdebc2" />
              <stop offset="70%" stopColor="#dfa751" />
              <stop offset="100%" stopColor="#8c5314" />
            </linearGradient>

            <linearGradient id="logoGold1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fae0a5" />
              <stop offset="25%" stopColor="#dfa751" />
              <stop offset="55%" stopColor="#f7d591" />
              <stop offset="85%" stopColor="#af7324" />
              <stop offset="100%" stopColor="#6e3f0a" />
            </linearGradient>

            <linearGradient id="logoGold2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fff2d6" />
              <stop offset="35%" stopColor="#e5b158" />
              <stop offset="75%" stopColor="#9e6216" />
              <stop offset="100%" stopColor="#4f2b05" />
            </linearGradient>

            <linearGradient id="logoArc" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#fae0a5" />
              <stop offset="50%" stopColor="#e5b158" />
              <stop offset="100%" stopColor="#8c5314" />
            </linearGradient>
          </defs>

          {/* Letter B */}
          <path d="M 46 26 L 76 26 C 76 26 73 36 73 44 L 73 128 C 73 136 76 146 76 146 L 38 146 C 38 146 41 136 41 128 L 41 44 C 41 36 38 26 38 26 Z" fill="url(#logoGoldStem)" />
          
          {/* B Top Bowl */}
          <path d="M 70 26 L 110 26 C 132 26 146 38 146 58 C 146 74 132 86 112 88 L 70 88 Z" fill="url(#logoGold1)" />
          <path d="M 73 40 L 106 40 C 120 40 128 46 128 58 C 128 68 118 74 104 74 L 73 74 Z" fill="#040c08" />

          {/* B Bottom Bowl */}
          <path d="M 70 84 L 118 84 C 140 84 156 98 156 116 C 156 136 138 146 112 146 L 46 146 Z" fill="url(#logoGold2)" />
          <path d="M 73 96 L 112 96 C 126 96 138 104 138 116 C 138 128 126 134 110 134 L 73 134 Z" fill="#040c08" />

          {/* Letter A */}
          <path d="M 174 26 L 138 146 L 160 146 L 182 64 L 206 146 L 232 146 L 194 26 Z" fill="url(#logoGold1)" />
          {/* A Serif Top */}
          <path d="M 166 26 L 202 26 L 184 18 Z" fill="url(#logoGoldStem)" />
          {/* A Inner Triangle */}
          <polygon points="184,52 168,110 200,110" fill="#040c08" />

          {/* Elegant Sweeping Arch Bridge */}
          <path d="M 88 88 Q 146 78 238 146 Q 164 96 88 96 Z" fill="url(#logoArc)" />
          <path d="M 88 96 Q 146 86 238 146" stroke="#fff4de" strokeWidth="1.5" fill="none" opacity="0.85" />

          {/* SINCE 2026 */}
          <text 
            x="150" 
            y="182" 
            textAnchor="middle" 
            fontFamily="'Playfair Display', Georgia, serif" 
            fontSize="21" 
            fontWeight="700" 
            letterSpacing="0.25em" 
            fill="url(#logoGold1)"
          >
            SINCE 2026
          </text>
        </svg>
      </div>

      {showText && (
        <div>
          <div className="flex items-center space-x-1.5">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-white font-serif">
              Biley Academy
            </span>
            <span className="bg-amber-500/15 text-amber-400 border border-amber-500/30 text-[10px] font-bold px-1.5 py-0.5 rounded">
              Since 2026
            </span>
          </div>
          <p className="text-[11px] text-slate-400 font-medium tracking-wide">
            Premier Coaching • Class 1 to 12
          </p>
        </div>
      )}
    </div>
  );
};
