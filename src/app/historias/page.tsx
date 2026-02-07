'use client'

import { Suspense, useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Loading from '@/components/Loading'
import StoryCard from '@/components/StoryCard'

// Datos estáticos para evitar errores de rendering
const storiesData = [
    {
        author: 'Luna M.',
        authorRole: 'Diseñadora UX, Buenos Aires',
        title: 'Cómo 3 semanas en Casa Luna cambiaron mi relación con el trabajo',
        date: 'Enero 2026',
        excerpt: 'Llegué buscando WiFi confiable y un espacio tranquilo para trabajar. Me fui con algo que no sabía que necesitaba: una comunidad, un propósito renovado, y la certeza de que puedo trabajar desde cualquier lado sin perder mi esencia. La cocina con Doña Rosa me enseñó más sobre paciencia que cualquier curso de mindfulness...',
        slug: 'luna-tres-semanas-casa-luna',
        tags: ['Nómada Digital', 'Transformación', 'Cocina Llanera'],
    },
    {
        author: 'Colectivo Innovatech',
        authorRole: 'Startup Tecnológica, Bogotá',
        title: 'Dominion Natura nos enseñó a tomar decisiones como equipo',
        date: 'Diciembre 2025',
        excerpt: 'Pensamos que era un juego. Terminó siendo nuestra mejor sesión de planeación estratégica del año. Ver a nuestro CEO en el rol de "artista" y a nuestra diseñadora como "empresaria" cambió cómo nos entendemos. Las decisiones sobre sostenibilidad en el juego nos hicieron replantear cómo operamos en la vida real...',
        slug: 'innovatech-dominion-natura',
        tags: ['Grupo Corporativo', 'Dominion Natura', 'Team Building'],
    },
    {
        author: 'Tomás R.',
        authorRole: 'Gerente Regional Retail, Medellín',
        title: 'El ejecutivo que redescubrió por qué trabajaba',
        date: 'Noviembre 2025',
        excerpt: 'Llevaba 20 años en piloto automático. Hotel-oficina-aeropuerto-repeat. VIPRO me dio 4 días que no había tenido en décadas: silencio para pensar, conversaciones profundas, y una cabalgata que me hizo llorar (sí, llorar) cuando Don Fabio me preguntó "¿Y usted pa\' qué trabaja tanto?". No tenía respuesta. Ahora la tengo...',
        slug: 'tomas-ejecutivo-en-busqueda',
        tags: ['Ejecutivo', 'Reconexión', 'Cabalgata'],
    },
    {
        author: 'Carlos, Andrea, y sus hijos',
        authorRole: 'Familia Viajera, Bogotá',
        title: 'Nuestros hijos aprendieron más en una semana que en meses de escuela',
        date: 'Octubre 2025',
        excerpt: 'No exagero. Mateo (7 años) volvió contando a sus compañeros cómo se ordeña una vaca, por qué los ríos son importantes, y cómo hacer arepas. Sofía (4 años) todavía habla de "Doña Rosa" como si fuera su abuela. Nosotros volvimos con una familia más unida y con la certeza de que este es el tipo de educación que queremos para ellos...',
        slug: 'familia-aventurera-semana-vipro',
        tags: ['Familia', 'Educación Vivencial', 'Cocina'],
    },
    {
        author: 'Mariana V.',
        authorRole: 'Cineasta Independiente, España',
        title: 'El cortometraje que no sabía que debía hacer',
        date: 'Septiembre 2025',
        excerpt: 'Vine al taller de Ekine pensando que aprendería técnica. En cambio, aprendí a VER. Mi cortometraje "Río que Habla" nació de 5 días escuchando a Don Fabio, grabando atardeceres, y entendiendo que las mejores historias no se escriben, se descubren. Ganó mención honorífica en un festival en Barcelona. Pero lo importante no es el premio...',
        slug: 'mariana-cine-experimental-ekine',
        tags: ['Cine Experimental', 'Ekine', 'Arte'],
    },
    {
        author: 'Daniel S.',
        authorRole: 'Escritor y Coach, México',
        title: 'La Palabra: Cuando la poesía te encuentra',
        date: 'Agosto 2025',
        excerpt: 'Soy escritor profesional. He publicado 3 libros. Pero los poemas que escribí en las sesiones de "La Palabra" en VIPRO son los más honestos que he creado. El poema llanero del host fue mi inspiración, pero lo que salió fue algo completamente mío. Uno de esos textos se convirtió en el prólogo de mi próximo libro...',
        slug: 'daniel-taller-escritura-poesia',
        tags: ['Escritura', 'La Palabra', 'Poesía'],
    },
]

export default function Historias() {
    // Defensive assignment con fallback
    const stories = storiesData || []
    
    // Validación adicional
    const validStories = Array.isArray(stories) ? stories : []
    
    // Client-side rendering para evitar hydration
    const [mounted, setMounted] = useState(false)
    
    useEffect(() => {
        setMounted(true)
    }, [])
    
    if (!mounted) {
        return (
            <main>
                <Navbar />
                {/* Loading placeholder */}
                <section className="pt-24 pb-12 bg-gradient-to-b from-vipro-warm to-white">
                    <div className="section-container">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="h-16 bg-vipro-earth/10 rounded animate-pulse mb-6" />
                            <div className="h-6 bg-vipro-night/5 rounded animate-pulse mb-4" />
                            <div className="h-4 bg-vipro-night/5 rounded animate-pulse" />
                        </div>
                    </div>
                </section>
                <section className="section-container bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="bg-gray-50 rounded-lg p-6 animate-pulse">
                                    <div className="h-4 bg-gray-200 rounded mb-2" />
                                    <div className="h-6 bg-gray-300 rounded mb-4" />
                                    <div className="h-20 bg-gray-100 rounded" />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <Footer />
            </main>
        )
    }
    
    return (
        <main>
            <Navbar />

            {/* Hero */}
            <section className="pt-24 pb-12 bg-gradient-to-b from-vipro-warm to-white">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl sm:text-6xl font-serif font-bold mb-6 text-vipro-earth">
                            Historias de Viproadores
                        </h1>
                        <p className="text-xl text-vipro-night/70 leading-relaxed mb-4">
                            No son reviews. Son transformaciones.
                        </p>
                        <p className="text-lg text-vipro-night/60 max-w-2xl mx-auto">
                            Cada persona que pasa por VIPRO tiene una historia. Algunas son sutiles,
                            otras dramáticas. Pero todas son reales.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stories Grid */}
            <section className="section-container bg-white">
                <div className="max-w-7xl mx-auto">
                    <Suspense fallback={<Loading message="Cargando historias de viproadores..." />}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {validStories && validStories.length > 0 ? (
                                validStories
                                    .filter(story => story && typeof story === 'object' && story.title)
                                    .map((story, index) => (
                                <StoryCard 
                                    key={`story-${index}-${story?.slug || 'unknown'}`}
                                    author={story?.author || 'Anónimo'}
                                    authorRole={story?.authorRole || 'Viproador'}
                                    title={story?.title || 'Historia sin título'}
                                    date={story?.date || 'Fecha no disponible'}
                                    excerpt={story?.excerpt || 'Sin descripción'}
                                    slug={story?.slug || `historia-${index}`}
                                    tags={story?.tags || []}
                                />
                            ))
                            ) : (
                                <div className="col-span-full text-center py-12">
                                    <p className="text-gray-500 text-lg">No hay historias disponibles en este momento.</p>
                                </div>
                            )}
                        </div>
                    </Suspense>
                </div>
            </section>

            {/* CTA */}
            <section className="section-container bg-vipro-warm">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-serif font-bold mb-6 text-vipro-earth">
                        ¿Quieres escribir tu propia historia?
                    </h2>
                    <p className="text-lg text-vipro-night/70 mb-8">
                        Estas historias no fueron planeadas. Nacieron orgánicamente de experiencias reales.
                        La tuya puede ser la siguiente.
                    </p>
                    <a href="/conecta" className="btn-primary inline-flex items-center">
                        Conversemos sobre tu viaje
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    )
}
