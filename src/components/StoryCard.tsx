'use client'

import { Calendar, User, Tag } from 'lucide-react'

interface StoryProps {
  author: string
  authorRole: string
  title: string
  date: string
  excerpt: string
  slug: string
  tags: string[]
}

function StoryCard({
  author,
  authorRole,
  title,
  date,
  excerpt,
  slug,
  tags
}: StoryProps) {
  // Validaciones defensivas
  const safeAuthor = String(author || 'Anónimo')
  const safeAuthorRole = String(authorRole || 'Viproador')
  const safeTitle = String(title || 'Historia sin título')
  const safeDate = String(date || 'Fecha no disponible')
  const safeExcerpt = String(excerpt || 'Sin descripción disponible')
  const safeSlug = String(slug || 'historia')
  const safeTags = Array.isArray(tags) ? tags : []
  return (
    <article className="bg-white dark:bg-vipro-night/90 rounded-2xl shadow-lg dark:shadow-2xl border dark:border-vipro-earth/20 overflow-hidden hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 group">
      {/* Header */}
      <div className="p-6 border-b border-vipro-warm/30">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-serif font-bold text-vipro-earth group-hover:text-vipro-green transition-colors">
              {safeTitle}
            </h3>
            <div className="flex items-center space-x-4 mt-2 text-sm text-vipro-night/60 dark:text-vipro-warm/60">
              <div className="flex items-center space-x-1">
                <User size={14} />
                <span>{safeAuthor}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar size={14} />
                <span>{date}</span>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-sm text-vipro-green font-medium mb-3">
          {safeAuthorRole}
        </p>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-vipro-night/80 dark:text-vipro-warm/80 leading-relaxed mb-6 line-clamp-4">
          {safeExcerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {safeTags.length > 0 && safeTags.map((tag, index) => {
            // Validar que tag sea string válido
            if (typeof tag !== 'string' || !tag.trim()) return null
            
            return (
              <span
                key={`${safeSlug}-tag-${index}-${tag}`}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-vipro-earth/10 text-vipro-earth dark:bg-vipro-sand/20 dark:text-vipro-sand"
              >
                <Tag size={12} className="mr-1" />
                {tag}
              </span>
            )
          })}
        </div>

        {/* Read More CTA */}
        <div className="pt-4 border-t border-vipro-warm/20">
          <button 
            onClick={() => console.log(`Navigate to story: ${safeSlug}`)}
            className="text-vipro-earth hover:text-vipro-green font-medium text-sm transition-colors flex items-center group"
          >
            Leer historia completa
            <span className="ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </article>
  )
}

export default StoryCard