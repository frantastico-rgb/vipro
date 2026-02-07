'use client'

import Image from 'next/image'
import { useState } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  fill?: boolean
  sizes?: string
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'
}

/**
 * Componente de imagen optimizado con:
 * - Lazy loading automático
 * - Placeholder blur mientras carga
 * - Optimización de Next.js Image
 * - Responsive automático
 * - Fallback a placeholder si falla
 */
export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  fill = false,
  sizes,
  objectFit = 'cover',
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [isLoading, setIsLoading] = useState(true)

  const placeholderSrc = '/images/placeholders/vipro-placeholder.svg'

  const handleError = () => {
    console.warn(`⚠️ Imagen no encontrada: ${src}`)
    setImgSrc(placeholderSrc)
  }

  const handleLoad = () => {
    setIsLoading(false)
  }

  // Si es fill (para fondos)
  if (fill) {
    return (
      <>
        <Image
          src={imgSrc}
          alt={alt}
          fill
          sizes={sizes || '100vw'}
          style={{ objectFit }}
          onError={handleError}
          onLoad={handleLoad}
          priority={priority}
          className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'} ${className}`}
        />
        {isLoading && (
          <div className="absolute inset-0 bg-gradient-to-br from-vipro-warm to-vipro-sand animate-pulse" />
        )}
      </>
    )
  }

  // Si tiene dimensiones específicas
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={imgSrc}
        alt={alt}
        width={width || 800}
        height={height || 600}
        onError={handleError}
        onLoad={handleLoad}
        priority={priority}
        sizes={sizes}
        className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        style={{ objectFit }}
      />
      {isLoading && (
        <div 
          className="absolute inset-0 bg-gradient-to-br from-vipro-warm to-vipro-sand animate-pulse"
          style={{ width: width || 800, height: height || 600 }}
        />
      )}
    </div>
  )
}
