'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

interface PhotoGalleryProps {
  photos: Array<{
    src: string
    alt: string
    caption?: string
  }>
  title?: string
}

/**
 * Galería de fotos flexible y responsive
 * - Funciona con 1, 3, 5, 10+ fotos
 * - Grid responsive: 1 col (móvil) → 2 cols (tablet) → 3 cols (desktop)
 * - Modal de visualización completa
 * - Navegación con teclado
 */
export default function PhotoGallery({ photos, title }: PhotoGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const openModal = (index: number) => {
    setSelectedIndex(index)
  }

  const closeModal = () => {
    setSelectedIndex(null)
  }

  const nextPhoto = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % photos.length)
    }
  }

  const prevPhoto = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + photos.length) % photos.length)
    }
  }

  // Navegación con teclado
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') nextPhoto()
    if (e.key === 'ArrowLeft') prevPhoto()
    if (e.key === 'Escape') closeModal()
  }

  if (!photos || photos.length === 0) {
    return null
  }

  if (!mounted) {
    return (
      <div className="w-full text-center py-12">
        <p className="text-vipro-earth">Cargando galería...</p>
      </div>
    )
  }

  return (
    <div className="w-full">
      {title && (
        <h2 className="text-3xl font-serif font-bold mb-8 text-center text-vipro-earth">
          {title}
        </h2>
      )}

      {/* Grid flexible - se adapta al número de fotos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <div
            key={index}
            onClick={() => openModal(index)}
            className="relative group overflow-hidden rounded-lg aspect-[4/3] cursor-pointer bg-gray-100 dark:bg-gray-800"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            {/* Overlay hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            {photo.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm font-medium">{photo.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal de visualización completa */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Botón cerrar */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-vipro-warm transition-colors p-2 rounded-full bg-black/50 z-10"
            aria-label="Cerrar"
          >
            <X size={24} />
          </button>

          {/* Navegación anterior */}
          {photos.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                prevPhoto()
              }}
              className="absolute left-4 text-white hover:text-vipro-warm transition-colors p-2 rounded-full bg-black/50 z-10"
              aria-label="Foto anterior"
            >
              <ChevronLeft size={32} />
            </button>
          )}

          {/* Imagen actual */}
          <div
            className="relative w-full max-w-6xl h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              key={photos[selectedIndex].src}
              src={photos[selectedIndex].src}
              alt={photos[selectedIndex].alt}
              fill
              className="object-contain rounded-lg"
              priority
            />
            {photos[selectedIndex].caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 rounded-b-lg">
                <p className="text-white text-lg">{photos[selectedIndex].caption}</p>
              </div>
            )}
          </div>

          {/* Navegación siguiente */}
          {photos.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                nextPhoto()
              }}
              className="absolute right-4 text-white hover:text-vipro-warm transition-colors p-2 rounded-full bg-black/50 z-10"
              aria-label="Foto siguiente"
            >
              <ChevronRight size={32} />
            </button>
          )}

          {/* Contador */}
          {photos.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full text-sm">
              {selectedIndex + 1} / {photos.length}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
