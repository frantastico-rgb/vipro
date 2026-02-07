import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ExperienceCard from '@/components/ExperienceCard'

const experiences = [
    {
        icon: '🌱',
        title: 'Dominion Natura',
        subtitle: 'Liderazgo Sostenible a Través del Juego',
        audience: 'Grupos corporativos, familias con adolescentes',
        duration: '2-3 días (retiro) o 1 día (intensivo)',
        description: `No es un taller de PowerPoint sobre sostenibilidad. Es un juego de roles donde tú y tu equipo son los líderes de una isla que debe balancear desarrollo económico, conservación ambiental, y bienestar comunitario.

Cada decisión tiene consecuencias. Cada rol (científico, político, artista, empresario) ve el mundo diferente. Al final, no gana el que más recursos acumula, sino el equipo que logra equilibrio sostenible.`,
        includes: [
            'Facilitación profesional (Frantastico de Nexus Lab)',
            'Tablero físico proyectado',
            'Sistema de eventos aleatorios (cartas FODA)',
            'Dinámicas de reflexión post-juego',
            'Alojamiento en Casa Luna',
            'Comidas comunitarias (estrategia se discute mientras comemos)',
        ],
        takeaways: 'Herramientas de toma de decisiones conscientes, empatía con roles que no son los tuyos (el científico entiende al empresario), framework mental para pensar sostenibilidad en tu trabajo real.',
        links: {
            primary: {
                text: 'Ver plataforma del juego',
                url: 'https://dominion-nat-6.vercel.app',
            },
            video: {
                text: 'Ver video del juego',
                url: 'https://www.youtube.com/watch?v=jkkhvqb-mgM',
            },
            secondary: {
                text: 'Solicitar para mi equipo',
                url: '/conecta',
            },
        },
        color: 'bg-gradient-to-r from-green-600 to-green-700',
    },
    {
        icon: '🎬',
        title: 'Ekine - Cine Experimental',
        subtitle: 'Fruta de la Pasión: Narrativas Territoriales',
        audience: 'Artistas, creativos, ejecutivos buscando reconectar',
        duration: '5-7 días',
        description: `Ekine (grupo de arte y cine experimental) facilita talleres donde NO aprendes a usar cámara profesional. Aprendes a VER el territorio con ojos de cineasta.

Salimos a la sabana, al río, a la finca. Grabamos con lo que tengas (celular ok). Pero lo importante no es la técnica. Es la pregunta: ¿Qué historia cuenta este lugar?

"Fruta de la Pasión" es el referente: un cortometraje sobre identidad llanera, memoria, y arraigo. Tú crearás tu propia pieza sobre lo que descubres aquí.`,
        includes: [
            'Facilitación por cineastas de Ekine',
            'Salidas a locaciones (ríos, fincas, mercados)',
            'Equipo básico (si no tienes)',
            'Edición colaborativa',
            'Proyección comunitaria al final (invitamos a los locales)',
            'Alojamiento en Casa Luna',
        ],
        takeaways: 'Tu cortometraje (3-10 minutos), nueva forma de mirar cualquier lugar al que vayas, conexión profunda con las historias del territorio.',
        links: {
            video: {
                text: 'Ver "Fruta de la Pasión"',
                url: 'https://youtu.be/lWciuWN-Qmc',
            },
            secondary: {
                text: 'Inscribirme al próximo taller',
                url: '/conecta',
            },
        },
        color: 'bg-gradient-to-r from-purple-600 to-indigo-600',
    },
    {
        icon: '📖',
        title: 'La Palabra',
        subtitle: 'Taller de Escritura Territorial',
        audience: 'Escritores, bloggers, cualquier viproador',
        duration: 'Medio día o sesiones semanales',
        description: `Sesiones donde los viproadores escriben sobre su experiencia. No es "journaling" superficial. Es poesía, narrativa, reflexión guiada.

El poema llanero "La Palabra" es el modelo: textos que nacen de estar en el territorio, de escuchar, de sentir el ritmo del lugar.

Formato: Sesión grupal, lectura inspiracional, prompt de escritura, 30-40 min de escritura silenciosa, compartir opcional en espacio seguro, feedback constructivo.`,
        includes: [
            'Cuaderno físico VIPRO (regalo)',
            'Playlist de música llanera para escribir',
            'Facilitación por el host VIPRO',
            'Espacio en la biblioteca VIPRO (tu texto puede quedar anónimo o firmado)',
            'Café y espacio inspirador',
        ],
        takeaways: 'Textos que documentan tu transformación, ritual de escritura que puedes continuar, posibilidad de publicar en blog VIPRO.',
        links: {
            video: {
                text: 'Escuchar "La Palabra"',
                url: 'https://youtu.be/oNoIlQ_sFK8',
            },
            secondary: {
                text: 'Participar en próxima sesión',
                url: '/conecta',
            },
        },
        color: 'bg-gradient-to-r from-amber-600 to-orange-600',
    },
    {
        icon: '🍲',
        title: 'Cocina Llanera con Doña Rosa',
        subtitle: 'Historias que se Cocinan',
        audience: 'Todos los arquetipos (universal)',
        duration: 'Medio día',
        description: `No es "clase de cocina". Doña Rosa no usa recetas. Usa memoria. Te enseña a hacer mamona, hayacas, arepas de arroz... pero mientras cocinas, ella cuenta historias de 40 años preparando comida para su familia.

Aprendes tanto sobre cocina como sobre resiliencia, familia, y cambios en la región.`,
        includes: [
            '3-4 horas con Doña Rosa (su casa o Casa Luna)',
            'Ingredientes incluidos',
            'Comemos juntos lo que preparamos',
            'Recetario artesanal (escrito a mano por Doña Rosa)',
        ],
        takeaways: 'Recetas que puedes recrear en casa, historias de vida que te marcan, conexión genuina con cultura llanera.',
        links: {
            secondary: {
                text: 'Reservar sesión',
                url: '/conecta',
            },
        },
        color: 'bg-gradient-to-r from-red-600 to-pink-600',
    },
    {
        icon: '🐎',
        title: 'Cabalgata con Don Fabio',
        subtitle: 'El Llano a Paso de Caballo',
        audience: 'Familias, buscadores de desconexión digital',
        duration: 'Medio día o día completo',
        description: `Don Fabio es llanero de nacimiento. Ha montado caballo desde los 5 años. Te lleva por caminos que solo los locales conocen: ríos escondidos, miradores, fincas vecinas.

No es paseo turístico en fila. Es conversación mientras cabalgas. Don Fabio cuenta sobre fauna, historia de la región, cambios climáticos que ha visto.`,
        includes: [
            'Caballos mansos (ok para principiantes)',
            'Don Fabio como guía',
            'Paradas en miradores/ríos',
            'Snack llanero (pandeyuca + chocolate)',
            'Transporte desde Casa Luna',
        ],
        takeaways: 'Conexión con naturaleza llanera, historias locales que no están en guías, fotos en paisajes que solo locales conocen.',
        links: {
            secondary: {
                text: 'Reservar cabalgata',
                url: '/conecta',
            },
        },
        color: 'bg-gradient-to-r from-teal-600 to-cyan-600',
    },
]

export default function Experiencias() {
    return (
        <main>
            <Navbar />

            {/* Hero */}
            <section className="pt-24 pb-12 bg-gradient-to-b from-vipro-warm to-white dark:from-vipro-night/80 dark:to-vipro-night">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl sm:text-6xl font-serif font-bold mb-6 text-vipro-earth">
                            Experiencias VIPRO
                        </h1>
                        <p className="text-xl text-vipro-night/90 dark:text-vipro-warm/90 leading-relaxed mb-4">
                            No son tours. Son inmersiones.
                        </p>
                        <p className="text-lg text-vipro-night/80 dark:text-vipro-warm/80 max-w-2xl mx-auto">
                            Cada experiencia está diseñada para conectarte con el territorio,
                            la cultura y contigo mismo de formas que un tour tradicional nunca podría.
                        </p>
                    </div>
                </div>
            </section>

            {/* Experiences */}
            <section className="section-container bg-white dark:bg-vipro-night">
                <div className="max-w-5xl mx-auto">
                    {experiences.map((exp) => (
                        <ExperienceCard key={exp.title} {...exp} />
                    ))}
                </div>
            </section>

            {/* CTA Final */}
            <section className="section-container bg-vipro-warm dark:bg-vipro-night/90">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-serif font-bold mb-6 text-vipro-earth">
                        ¿Listo para tu inmersión?
                    </h2>
                    <p className="text-lg text-vipro-night/90 dark:text-vipro-warm/90 mb-8">
                        Estas experiencias se pueden combinar según tu estadía.
                        Conversemos sobre qué resuena contigo.
                    </p>
                    <a href="/conecta" className="btn-primary inline-flex items-center">
                        Hablemos de tu viaje
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    )
}
