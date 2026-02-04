'use client'

import { Search, MessageCircle, Calendar, Home, Sparkles, Heart } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Descubre',
    description: 'Explora nuestras experiencias y decide si VIPRO resuena contigo',
  },
  {
    icon: MessageCircle,
    title: 'Conversemos',
    description: 'Agenda una videollamada de 15 min. Conocernos es parte del proceso',
  },
  {
    icon: Calendar,
    title: 'Planifica',
    description: 'Co-creamos tu estadía según tus necesidades y timing',
  },
  {
    icon: Home,
    title: 'Llega a Casa Luna',
    description: 'Te recogemos, te instalas, y empiezas tu inmersión',
  },
  {
    icon: Sparkles,
    title: 'Vive la Experiencia',
    description: 'Trabaja, aprende, conecta, explora. A tu ritmo',
  },
  {
    icon: Heart,
    title: 'Forma Parte',
    description: 'Te vas, pero sigues siendo parte de la comunidad VIPRO',
  },
]

export default function HowItWorks() {
  return (
    <section className="section-container bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-4 text-vipro-earth">
          ¿Cómo funciona?
        </h2>
        <p className="text-xl text-vipro-night/70 max-w-2xl mx-auto">
          Un proceso simple pero intencional
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        {steps.map((step, index) => {
          const Icon = step.icon
          const isLast = index === steps.length - 1
          
          return (
            <div key={step.title} className="flex gap-6 mb-8 relative">
              {/* Timeline line */}
              {!isLast && (
                <div className="absolute left-8 top-16 w-0.5 h-full bg-vipro-sand/50" />
              )}
              
              {/* Icon */}
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-vipro-earth to-vipro-green flex items-center justify-center shadow-lg relative z-10">
                <Icon size={28} className="text-white" />
              </div>

              {/* Content */}
              <div className="flex-1 pt-3">
                <h3 className="text-2xl font-serif font-bold mb-2 text-vipro-earth">
                  {index + 1}. {step.title}
                </h3>
                <p className="text-lg text-vipro-night/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <a href="/conecta" className="btn-primary inline-flex items-center">
          Comienza tu viaje
        </a>
      </div>
    </section>
  )
}
