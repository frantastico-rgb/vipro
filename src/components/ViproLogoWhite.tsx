import React from 'react'

interface ViproLogoWhiteProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showText?: boolean
  className?: string
}

const ViproLogoWhite: React.FC<ViproLogoWhiteProps> = ({ 
  size = 'md', 
  showText = true, 
  className = '' 
}) => {
  const sizes = {
    sm: { svg: 'w-8 h-8', text: 'text-sm' },
    md: { svg: 'w-12 h-12', text: 'text-lg' },
    lg: { svg: 'w-20 h-20', text: 'text-2xl' },
    xl: { svg: 'w-32 h-32 sm:w-40 sm:h-40', text: 'text-4xl' }
  }

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className={`${sizes[size].svg} flex-shrink-0`}>
        <svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 400 400" 
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-lg"
        >
          <defs>
            {/* Gradientes para fondo oscuro - MÁS BRILLANTES */}
            <linearGradient id="waterGradientWhite" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#87CEEB', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#F4E4C1', stopOpacity: 1 }} />
            </linearGradient>
            
            <radialGradient id="compassGradientWhite" cx="50%" cy="50%" r="50%">
              <stop offset="0%" style={{ stopColor: '#FFFFFF', stopOpacity: 0.9 }} />
              <stop offset="100%" style={{ stopColor: '#D4A574', stopOpacity: 1 }} />
            </radialGradient>

            {/* Filtro de resplandor */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/> 
              </feMerge>
            </filter>
          </defs>
          
          {/* Fondo agua - VERSION CLARA */}
          <path 
            d="M 0,250 Q 100,230 200,250 T 400,250 L 400,400 L 0,400 Z" 
            fill="url(#waterGradientWhite)" 
            opacity="0.8"
          />
          <path 
            d="M 0,270 Q 100,255 200,270 T 400,270" 
            stroke="#F4E4C1" 
            strokeWidth="2" 
            fill="none" 
            opacity="0.9"
          />
          <path 
            d="M 0,290 Q 100,280 200,290 T 400,290" 
            stroke="#D4A574" 
            strokeWidth="1.5" 
            fill="none" 
            opacity="0.7"
          />
          
          {/* Brújula - VERSION CLARA CON RESPLANDOR */}
          <circle 
            cx="200" 
            cy="180" 
            r="90" 
            fill="none" 
            stroke="#FFFFFF" 
            strokeWidth="5" 
            opacity="1"
            filter="url(#glow)"
          />
          
          <circle 
            cx="200" 
            cy="180" 
            r="75" 
            fill="url(#compassGradientWhite)" 
            opacity="0.7"
          />

          <circle 
            cx="200" 
            cy="180" 
            r="60" 
            fill="none" 
            stroke="#87CEEB" 
            strokeWidth="2" 
            opacity="0.8"
          />
          
          {/* Marcas cardinales - VERSION CLARA */}
          <line 
            x1="200" y1="95" 
            x2="200" y2="110" 
            stroke="#FFFFFF" 
            strokeWidth="4" 
            strokeLinecap="round"
          />
          <line 
            x1="200" y1="250" 
            x2="200" y2="265" 
            stroke="#F4E4C1" 
            strokeWidth="3" 
            strokeLinecap="round"
          />
          <line 
            x1="285" y1="180" 
            x2="270" y2="180" 
            stroke="#F4E4C1" 
            strokeWidth="3" 
            strokeLinecap="round"
          />
          <line 
            x1="115" y1="180" 
            x2="130" y2="180" 
            stroke="#F4E4C1" 
            strokeWidth="3" 
            strokeLinecap="round"
          />
          
          {/* Aguja - VERSION CLARA MAS INTENSA */}
          <path 
            d="M 200,180 L 190,130 L 200,110 L 210,130 Z" 
            fill="#FFFFFF" 
            stroke="#D4A574" 
            strokeWidth="3"
            filter="url(#glow)"
          />
          <path 
            d="M 200,180 L 192,230 L 200,245 L 208,230 Z" 
            fill="#D4A574" 
            stroke="#F4E4C1" 
            strokeWidth="1"
          />
          
          {/* Centro - VERSION CLARA */}
          <circle 
            cx="200" 
            cy="180" 
            r="12" 
            fill="#D4A574" 
            stroke="#FFFFFF" 
            strokeWidth="3"
          />
          <circle 
            cx="200" 
            cy="180" 
            r="6" 
            fill="#F4E4C1"
          />
          <circle 
            cx="200" 
            cy="180" 
            r="3" 
            fill="#87CEEB"
          />
          
          {/* Estrella - VERSION CLARA MAS BRILLANTE */}
          <path 
            d="M 200,100 L 205,110 L 216,110 L 208,118 L 213,128 L 200,122 L 187,128 L 192,118 L 184,110 L 195,110 Z" 
            fill="#FFFFFF" 
            stroke="#D4A574"
            strokeWidth="3"
            filter="url(#glow)"
          />
          
          {/* Texto para version XL */}
          {size === 'xl' && (
            <>
              <text 
                x="200" 
                y="310" 
                fontFamily="Georgia, serif" 
                fontSize="56" 
                fontWeight="bold" 
                fill="#FFFFFF" 
                textAnchor="middle"
              >
                VIPRO
              </text>
              <text 
                x="200" 
                y="335" 
                fontFamily="Arial, sans-serif" 
                fontSize="14" 
                fill="#F4E4C1" 
                textAnchor="middle" 
                letterSpacing="2"
              >
                VIAJA CON PROPÓSITO
              </text>
            </>
          )}
          
          {/* Sendero - VERSION CLARA */}
          <path 
            d="M 150,280 Q 180,270 200,275 T 250,280" 
            stroke="#F4E4C1" 
            strokeWidth="3" 
            fill="none" 
            opacity="0.9" 
            strokeDasharray="8,4"
          />

          {/* Puntos decorativos - VERSION CLARA */}
          <circle cx="200" cy="95" r="2" fill="#FFFFFF" />
          <circle cx="200" cy="265" r="1.5" fill="#F4E4C1" />
          <circle cx="285" cy="180" r="1.5" fill="#F4E4C1" />
          <circle cx="115" cy="180" r="1.5" fill="#F4E4C1" />
        </svg>
      </div>
      
      {/* Texto junto al logo */}
      {showText && size !== 'xl' && (
        <div className="flex flex-col">
          <span className={`font-serif font-bold text-white ${sizes[size].text}`}>
            VIPRO
          </span>
          {size !== 'sm' && (
            <span className="text-xs text-white/80 -mt-1">
              Viaja con propósito
            </span>
          )}
        </div>
      )}
    </div>
  )
}

export default ViproLogoWhite