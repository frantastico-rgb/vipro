'use client'

import { Briefcase, Heart, Users, Compass } from 'lucide-react'

const archetypes = [
  {
    icon: Compass,
    name: 'Luna',
    subtitle: 'La Nómada Digital Intencional',
    description: 'Trabajas remoto pero estás cansada de Airbnbs sin alma y hostels ruidosos. Buscas comunidad auténtica, WiFi confiable, y experiencias que te transformen.',
    quote: '"No quiero visitar un lugar. Quiero habitarlo temporalmente"',
    color: 'from-vipro-sky to-vipro-green',
  },
  {
    icon: Heart,
    name: 'Carlos & Andrea',
    subtitle: 'La Familia Aventurera Consciente',
    description: 'Quieren que sus hijos conozcan el país real, no parques temáticos. Buscan educación vivencial, aventura segura, y crear memorias familiares significativas.',
    quote: '"Queremos que nuestros hijos conozcan el país real"',
    color: 'from-vipro-sand to-vipro-earth',
  },
  {
    icon: Briefcase,
    name: 'Tomás',
    subtitle: 'El Ejecutivo en Búsqueda',
    description: 'Exitoso pero vacío. Viajas por negocio pero solo conoces hoteles y oficinas. Tienes 3 horas libres y quieres algo auténtico, no turístico.',
    quote: '"Estoy cansado de hoteles cinco estrellas con experiencias de una estrella"',
    color: 'from-vipro-earth to-vipro-night',
  },
  {
    icon: Users,
    name: 'Colectivo Raíces',
    subtitle: 'El Grupo Corporativo con Propósito',
    description: 'Equipo remoto que busca retiros significativos. Hartos de team building genérico. Quieren alineación cultural, impacto social real, y espacios para trabajar + conectar.',
    quote: '"Queremos que nuestro equipo regrese inspirado, no solo entretenido"',
    color: 'from-vipro-green to-vipro-sky',
  },
]

export default function Archetypes() {
  return (
    <section className="section-container bg-vipro-warm">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-4 text-vipro-earth">
          ¿Es VIPRO para ti?
        </h2>
        <p className="text-xl text-vipro-night/70 max-w-2xl mx-auto">
          Hemos diseñado experiencias para diferentes tipos de viajeros conscientes
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {archetypes.map((archetype) => {
          const Icon = archetype.icon
          return (
            <div
              key={archetype.name}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${archetype.color} flex items-center justify-center mb-6`}>
                <Icon size={32} className="text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-serif font-bold mb-2 text-vipro-earth">
                {archetype.name}
              </h3>
              <p className="text-sm font-semibold text-vipro-green mb-4">
                {archetype.subtitle}
              </p>
              <p className="text-vipro-night/80 mb-4 leading-relaxed">
                {archetype.description}
              </p>
              
              {/* Quote */}
              <blockquote className="border-l-4 border-vipro-sand pl-4 italic text-vipro-night/70">
                {archetype.quote}
              </blockquote>
            </div>
          )
        })}
      </div>
    </section>
  )
}
