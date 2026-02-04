import React from 'react'

interface ViproLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showText?: boolean
  className?: string
}

const ViproLogo: React.FC<ViproLogoProps> = ({ 
  size = 'md', 
  showText = true, 
  className = '' 
}) => {
  const sizes = {
    sm: { svg: 'w-8 h-8', text: 'text-sm' },
    md: { svg: 'w-10 h-10', text: 'text-lg' },
    lg: { svg: 'w-16 h-16', text: 'text-2xl' },
    xl: { svg: 'w-24 h-24', text: 'text-4xl' }
  }

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className={`${sizes[size].svg} flex-shrink-0`}>
        <svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 400 400" 
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-sm"
        >
          {/* Definiciones */}
          <defs>
            {/* Gradiente para el agua - MÁS VIBRANTE */}
            <linearGradient id="waterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#87CEEB', stopOpacity: 0.8 }} />
              <stop offset="100%" style={{ stopColor: '#4A6741', stopOpacity: 0.6 }} />
            </linearGradient>
            
            {/* Gradiente para la brújula - MÁS INTENSO */}
            <radialGradient id="compassGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" style={{ stopColor: '#F4E4C1', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#D4A574', stopOpacity: 1 }} />
            </radialGradient>

            {/* Gradiente para la brújula exterior */}
            <radialGradient id="compassRing" cx="50%" cy="50%" r="50%">
              <stop offset="0%" style={{ stopColor: '#8B6F47', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#4A6741', stopOpacity: 1 }} />
            </radialGradient>
          </defs>
          
          {/* Fondo agua (ondas sutiles) - MÁS VISIBLE */}
          <path 
            d="M 0,250 Q 100,230 200,250 T 400,250 L 400,400 L 0,400 Z" 
            fill="url(#waterGradient)" 
            opacity="0.9"
          />
          <path 
            d="M 0,270 Q 100,255 200,270 T 400,270" 
            stroke="#87CEEB" 
            strokeWidth="2" 
            fill="none" 
            opacity="0.8"
          />
          <path 
            d="M 0,290 Q 100,280 200,290 T 400,290" 
            stroke="#4A6741" 
            strokeWidth="1.5" 
            fill="none" 
            opacity="0.6"
          />
          
          {/* Círculo exterior brújula - MÁS VISIBLE */}
          <circle 
            cx="200" 
            cy="180" 
            r="90" 
            fill="none" 
            stroke="#8B6F47" 
            strokeWidth="4" 
            opacity="1"
          />
          
          {/* Círculo medio - MÁS SÓLIDO */}
          <circle 
            cx="200" 
            cy="180" 
            r="75" 
            fill="url(#compassGradient)" 
            opacity="0.8"
          />

          {/* Anillo interior */}
          <circle 
            cx="200" 
            cy="180" 
            r="60" 
            fill="none" 
            stroke="#D4A574" 
            strokeWidth="2" 
            opacity="0.7"
          />
          
          {/* Marcas cardinales - MÁS DEFINIDAS */}
          <line 
            x1="200" y1="95" 
            x2="200" y2="110" 
            stroke="#1A1A2E" 
            strokeWidth="4" 
            strokeLinecap="round"
          />
          <line 
            x1="200" y1="250" 
            x2="200" y2="265" 
            stroke="#4A6741" 
            strokeWidth="3" 
            strokeLinecap="round" 
            opacity="0.9"
          />
          <line 
            x1="285" y1="180" 
            x2="270" y2="180" 
            stroke="#4A6741" 
            strokeWidth="3" 
            strokeLinecap="round" 
            opacity="0.9"
          />
          <line 
            x1="115" y1="180" 
            x2="130" y2="180" 
            stroke="#4A6741" 
            strokeWidth="3" 
            strokeLinecap="round" 
            opacity="0.9"
          />
          
          {/* Aguja de la brújula - MÁS PROMINENTE */}
          <path 
            d="M 200,180 L 192,130 L 200,115 L 208,130 Z" 
            fill="#1A1A2E" 
            stroke="#D4A574" 
            strokeWidth="1"
          />
          <path 
            d="M 200,180 L 192,230 L 200,245 L 208,230 Z" 
            fill="#8B6F47" 
            stroke="#1A1A2E" 
            strokeWidth="1"
            opacity="0.9"
          />
          
          {/* Centro de la brújula - MÁS VISIBLE */}
          <circle 
            cx="200" 
            cy="180" 
            r="12" 
            fill="#8B6F47" 
            stroke="#1A1A2E" 
            strokeWidth="2"
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
            fill="#D4A574"
          />
          
          {/* Estrella del norte - MÁS PROMINENTE */}
          <path 
            d="M 200,100 L 205,110 L 216,110 L 208,118 L 213,128 L 200,122 L 187,128 L 192,118 L 184,110 L 195,110 Z" 
            fill="#1A1A2E" 
            stroke="#D4A574"
            strokeWidth="1"
            opacity="1"
          />
          
          {/* Texto VIPRO - Solo mostrar si es size xl */}
          {size === 'xl' && (
            <>
              <text 
                x="200" 
                y="310" 
                fontFamily="Georgia, serif" 
                fontSize="56" 
                fontWeight="bold" 
                fill="#1A1A2E" 
                textAnchor="middle"
              >
                VIPRO
              </text>
              <text 
                x="200" 
                y="335" 
                fontFamily="Arial, sans-serif" 
                fontSize="14" 
                fill="#4A6741" 
                textAnchor="middle" 
                letterSpacing="2"
              >
                VIAJA CON PROPÓSITO
              </text>
            </>
          )}
          
          {/* Detalle: camino/sendero - MÁS VISIBLE */}
          <path 
            d="M 150,280 Q 180,270 200,275 T 250,280" 
            stroke="#8B6F47" 
            strokeWidth="3" 
            fill="none" 
            opacity="0.8" 
            strokeDasharray="8,4"
          />

          {/* Puntos cardinales decorativos */}
          <circle cx="200" cy="95" r="2" fill="#1A1A2E" />
          <circle cx="200" cy="265" r="1.5" fill="#4A6741" opacity="0.8" />
          <circle cx="285" cy="180" r="1.5" fill="#4A6741" opacity="0.8" />
          <circle cx="115" cy="180" r="1.5" fill="#4A6741" opacity="0.8" />
        </svg>
      </div>
      
      {/* Texto junto al logo */}
      {showText && size !== 'xl' && (
        <div className="flex flex-col">
          <span className={`font-serif font-bold text-vipro-earth ${sizes[size].text}`}>
            VIPRO
          </span>
          {size !== 'sm' && (
            <span className="text-xs text-vipro-green -mt-1">
              Viaja con propósito
            </span>
          )}
        </div>
      )}
    </div>
  )
}

export default ViproLogo