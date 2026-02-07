'use client'

import { ExternalLink, Play, Users, Clock } from 'lucide-react'
import { memo, useCallback } from 'react'

interface ExperienceProps {
  icon: string
  title: string
  subtitle: string
  audience: string
  duration: string
  description: string
  includes: string[]
  takeaways: string
  links: {
    primary?: {
      text: string
      url: string
    }
    video?: {
      text: string
      url: string
    }
    secondary?: {
      text: string
      url: string
    }
  }
  color: string
}

const ExperienceCard = memo(function ExperienceCard({
  icon,
  title,
  subtitle,
  audience,
  duration,
  description,
  includes,
  takeaways,
  links,
  color
}: ExperienceProps) {
  const handleVideoClick = useCallback((url: string) => {
    window.open(url, '_blank')
  }, [])

  const handleLinkClick = useCallback((url: string) => {
    if (url.startsWith('/')) {
      window.location.href = url
    } else {
      window.open(url, '_blank')
    }
  }, [])

  return (
    <div className="mb-16 bg-white dark:bg-vipro-night/90 rounded-2xl shadow-lg dark:shadow-2xl border dark:border-vipro-earth/20 overflow-hidden hover:shadow-xl dark:hover:shadow-2xl hover:shadow-vipro-earth/10 transition-all duration-300" style={{ minHeight: '600px' }}>
      {/* Header with icon and title */}
      <div className={`${color} p-6 text-white`} style={{ minHeight: '120px' }}>
        <div className="flex items-center space-x-4">
          <div className="text-4xl" style={{ width: '48px', height: '48px' }}>{icon}</div>
          <div>
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-white/90 text-lg">{subtitle}</p>
          </div>
        </div>
      </div>

      <div className="p-8">
        {/* Audience and Duration */}
        <div className="flex flex-wrap gap-4 mb-6 text-sm">
          <div className="flex items-center space-x-2 bg-vipro-warm px-3 py-1 rounded-full">
            <Users size={16} className="text-vipro-earth" />
            <span className="text-vipro-night dark:text-vipro-warm">{audience}</span>
          </div>
          <div className="flex items-center space-x-2 bg-vipro-warm dark:bg-vipro-earth/20 px-3 py-1 rounded-full">
            <Clock size={16} className="text-vipro-earth" />
            <span className="text-vipro-night dark:text-vipro-warm">{duration}</span>
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <p className="text-vipro-night/95 dark:text-vipro-warm/95 leading-relaxed whitespace-pre-line">
            {description}
          </p>
        </div>

        {/* What's included */}
        <div className="mb-6">
          <h4 className="font-semibold text-vipro-earth mb-3">Incluye:</h4>
          <ul className="space-y-2">
            {includes.map((item, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-vipro-green mt-1">•</span>
                <span className="text-vipro-night/90 dark:text-vipro-warm/90 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Takeaways */}
        <div className="mb-6">
          <h4 className="font-semibold text-vipro-earth mb-3">Te llevas:</h4>
          <p className="text-vipro-night/90 dark:text-vipro-warm/90 text-sm leading-relaxed">
            {takeaways}
          </p>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap gap-3">
          {links.primary && (
            <button
              onClick={() => handleLinkClick(links.primary!.url)}
              className="flex items-center space-x-2 bg-vipro-earth text-white px-4 py-2 rounded-lg hover:bg-vipro-earth/90 transition-colors"
            >
              <ExternalLink size={16} />
              <span>{links.primary.text}</span>
            </button>
          )}
          
          {links.video && (
            <button
              onClick={() => handleVideoClick(links.video!.url)}
              className="flex items-center space-x-2 bg-vipro-green text-white px-4 py-2 rounded-lg hover:bg-vipro-green/90 transition-colors"
            >
              <Play size={16} />
              <span>{links.video.text}</span>
            </button>
          )}
          
          {links.secondary && (
            <button
              onClick={() => handleLinkClick(links.secondary!.url)}
              className="flex items-center space-x-2 border border-vipro-earth text-vipro-earth px-4 py-2 rounded-lg hover:bg-vipro-earth hover:text-white transition-colors"
            >
              <span>{links.secondary.text}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  )
})

export default ExperienceCard