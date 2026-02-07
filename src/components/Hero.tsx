'use client'

import React, { useState, useEffect, useRef } from 'react'
import { ArrowRight, Volume2, VolumeX } from 'lucide-react'
import Link from 'next/link'
import ViproLogoWhite from './ViproLogoWhite'

export default function Hero() {
  // Estados simples sin lógica compleja
  const [isMuted, setIsMuted] = useState(true)
  const [showHint, setShowHint] = useState(false)
  const [mounted, setMounted] = useState(false)
  const videoRef = useRef<HTMLIFrameElement>(null)

  // Solo montar en cliente - sin lógica servidor/cliente
  useEffect(() => {
    setMounted(true)
    // Mostrar hint después de montar - más tiempo visible
    const timer = setTimeout(() => setShowHint(true), 2000)
    const hideTimer = setTimeout(() => setShowHint(false), 12000) // 10 segundos visible
    return () => {
      clearTimeout(timer)
      clearTimeout(hideTimer)
    }
  }, [])

  const handleAudioToggle = () => {
    if (!mounted) return
    
    // Separar state updates para evitar batch conflicts
    setShowHint(false)
    
    // Cambio directo sin func callback para evitar hydration issues
    const newMuted = !isMuted
    setIsMuted(newMuted)
      
    // Reemplazar iframe directamente con FORZAR AUTOPLAY
    if (videoRef.current && videoRef.current.parentElement) {
      const parent = videoRef.current.parentElement
      const newIframe = document.createElement('iframe')
        
      // Propiedades básicas
      newIframe.id = 'vipro-hero-video'
      newIframe.className = 'absolute inset-0 w-full h-full object-cover scale-150'
      newIframe.title = 'VIPRO - Fruta de la Pasión'
      newIframe.frameBorder = '0'
      newIframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      newIframe.allowFullscreen = true
      
      // URL con configuración de audio AGRESIVA
      const baseUrl = 'https://www.youtube.com/embed/lWciuWN-Qmc'
      
      if (newMuted) {
        // Silenciado - sin controles
        newIframe.src = `${baseUrl}?autoplay=1&mute=1&loop=1&playlist=lWciuWN-Qmc&controls=0&rel=0&modestbranding=1&playsinline=1&start=3`
      } else {
        // Con audio - FORZAR con parámetros máximos
        newIframe.src = `${baseUrl}?autoplay=1&mute=0&loop=1&playlist=lWciuWN-Qmc&controls=1&rel=0&modestbranding=0&playsinline=1&start=3&volume=100&enablejsapi=1&origin=http://localhost:3000&widget_referrer=http://localhost:3000`
      }
      
      // Reemplazar iframe con scroll preservation
      const scrollY = window.scrollY || window.pageYOffset
      videoRef.current.remove()
      parent.appendChild(newIframe)
      
      // Actualizar la referencia sin asignación directa
      if (videoRef.current) {
        Object.defineProperty(videoRef, 'current', {
          value: newIframe,
          writable: false,
          configurable: true
        })
      }
      
      // Restaurar scroll
      setTimeout(() => window.scrollTo(0, scrollY), 100)
      
      console.log(`🎵 Audio ${newMuted ? 'MUTED' : 'UNMUTED with controls'}`)
      
      if (!newMuted) {
        console.log('🎮 TIP: Haz clic en el botón PLAY del video para activar el sonido')
      }
    }
  }

  // Solo renderizar cuando esté montado en cliente para evitar hydration
  if (!mounted) {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          {/* Loading placeholder idéntico servidor/cliente */}
          <div className="mb-8 flex flex-col items-center opacity-50">
            <div className="w-24 h-24 mb-4 bg-white/10 rounded-full animate-pulse" />
            <div className="h-4 w-32 bg-white/10 rounded animate-pulse" />
          </div>
          <div className="space-y-4">
            <div className="h-16 bg-white/10 rounded animate-pulse" />
            <div className="h-6 bg-white/5 rounded animate-pulse" />
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          {/* Video de "Fruta de la Pasión" como fondo atmosférico */}
          <iframe
            ref={videoRef}
            id="vipro-hero-video"
            className="absolute inset-0 w-full h-full object-cover scale-150"
            src="https://www.youtube.com/embed/lWciuWN-Qmc?autoplay=1&mute=1&loop=1&playlist=lWciuWN-Qmc&controls=0&rel=0&modestbranding=1&playsinline=1&start=3"
            title="VIPRO - Fruta de la Pasión"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          
          {/* Overlay gradiente para mejor legibilidad del texto */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-transparent to-black/50" />
        </div>
      </div>

      {/* Audio Control - FIXED para estar sobre navbar fixed */}
      <button
        onClick={handleAudioToggle}
        className="fixed top-20 right-4 z-[100] bg-gradient-to-r from-orange-500 to-red-500 backdrop-blur-sm border-2 border-white/40 text-white px-5 py-3 rounded-full hover:from-orange-400 hover:to-red-400 transition-all flex items-center gap-2 shadow-2xl hover:shadow-orange-500/50 hover:scale-105 font-semibold"
        aria-label={isMuted ? 'Activar audio' : 'Silenciar audio'}
      >
        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        <span className="text-sm font-bold">
          {isMuted ? '🔇 ACTIVAR AUDIO' : '🔊 AUDIO ON'}
        </span>
      </button>

      {/* Audio Hint - MÁS VISIBLE Y PERSISTENTE */}
      {showHint && isMuted && (
        <div className="fixed top-36 right-4 z-[90] bg-white text-black px-4 py-2 rounded-lg text-sm font-bold shadow-2xl border-2 border-orange-500 animate-bounce">
          👆 ¡Dale clic para escuchar!
        </div>
      )}

      {/* Content Overlay */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* VIPRO Brand Identity */}
        <div className="mb-8 flex flex-col items-center">
          <ViproLogoWhite className="w-24 h-24 mb-4" />
          <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-transparent bg-clip-text text-sm font-semibold tracking-wider uppercase">
            Viaja con propósito
          </div>
        </div>

        {/* Hero Title */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Donde el viaje<br />
          <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-transparent bg-clip-text">
            y la vida se encuentran
          </span>
        </h1>

        {/* Hero Subtitle */}
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          No vendemos transporte ni cuartos. Conectamos viajeros conscientes con experiencias llaneras auténticas.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/conecta"
            className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-400 hover:to-orange-400 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            Conversemos
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/casa-luna"
            className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all transform hover:scale-105"
          >
            Conoce Casa Luna
          </Link>
        </div>
      </div>
    </section>
  )
}