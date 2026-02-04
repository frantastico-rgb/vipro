'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import ViproLogoWhite from './ViproLogoWhite'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          {/* Video de respaldo funcional mientras configuras el tuyo */}
          {/* OPCIÓN: Fondo con imagen de llanos + overlay atmosférico */}
          <div className="absolute inset-0">
            {/* Imagen de fondo de los llanos (cuando la tengas) */}
            {/* 
            <img 
              src="/images/llanos-atardecer.jpg" 
              alt="Llanos Orientales" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            */}
            
            {/* Mientras tanto: Fondo gradiente que evoca los llanos */}
            <div className="absolute inset-0 bg-gradient-to-br from-vipro-sky/20 via-vipro-earth/40 to-vipro-green/30" />
            
            {/* Simulación de horizonte llanero */}
            <div 
              className="absolute inset-0"
              style={{
                background: `
                  linear-gradient(to bottom, 
                    rgba(135, 206, 235, 0.6) 0%,    /* Cielo */
                    rgba(135, 206, 235, 0.3) 30%,   /* Horizonte */
                    rgba(244, 228, 193, 0.4) 60%,   /* Sabana */
                    rgba(139, 111, 71, 0.5) 100%    /* Tierra */
                  )
                `,
              }}
            />
            
            {/* Texturas atmosféricas */}
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 70% 30%, rgba(135, 206, 235, 0.4) 0%, transparent 60%),
                  radial-gradient(circle at 30% 70%, rgba(244, 228, 193, 0.3) 0%, transparent 50%)
                `,
              }}
            />
          </div>
          {/* Overlay más suave para que el logo destaque */}
          <div className="absolute inset-0 bg-vipro-night/40" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Logo central - MÁS PROMINENTE */}
        <div className="mb-12 flex justify-center">
          <div className="relative">
            {/* Halo de resplandor para destacar */}
            <div className="absolute inset-0 bg-white/20 rounded-full blur-xl scale-150 animate-pulse" />
            <div className="relative transform hover:scale-105 transition-transform duration-300">
              <ViproLogoWhite 
                size="xl" 
                showText={false} 
                className="drop-shadow-[0_0_30px_rgba(244,228,193,0.8)] w-32 h-32 sm:w-40 sm:h-40" 
              />
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
          Donde el viaje<br />y la vida se encuentran
        </h1>
        
        <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          No vendemos transporte ni cuartos. Conectamos viajeros conscientes 
          con experiencias llaneras auténticas.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/conecta" className="btn-primary flex items-center group">
            Conversemos
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
          
          <Link href="/casa-luna" className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-vipro-night font-medium px-8 py-3 rounded-lg transition-all duration-300">
            Conoce Casa Luna
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
