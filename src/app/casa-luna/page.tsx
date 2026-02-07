import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PhotoGallery from '@/components/PhotoGallery'
import { Wifi, Coffee, Mountain, Users, Sunrise, Book } from 'lucide-react'

// Configuración flexible de fotos - solo agrega más al array
const casaLunaPhotos = [
  {
    src: '/images/casa-luna/exterior-principal.jpg',
    alt: 'Casa Luna - Vista exterior principal',
    caption: 'Casa Luna: Tu hogar en los Llanos Orientales'
  },
  {
    src: '/images/casa-luna/cocina-experiencia.jpg',
    alt: 'Cocina llanera con Doña Rosa',
    caption: 'Aprende cocina llanera auténtica con Doña Rosa'
  },
  {
    src: '/images/casa-luna/llanos-paisaje.jpg',
    alt: 'Paisaje de los Llanos Orientales',
    caption: 'Amaneceres que inspiran desde Casa Luna'
  },
  // 🔥 AGREGAR MÁS FOTOS AQUÍ - El sistema se adapta automáticamente
  // {
  //   src: '/images/casa-luna/habitacion-1.jpg',
  //   alt: 'Habitación privada en Casa Luna',
  //   caption: 'Habitaciones cómodas y auténticas'
  // },
  // {
  //   src: '/images/casa-luna/coworking.jpg',
  //   alt: 'Espacio de coworking',
  //   caption: 'Espacio de trabajo con vista a la naturaleza'
  // },
]

const amenities = [
  {
    icon: Wifi,
    title: 'WiFi de Alta Velocidad',
    description: '400+ Mbps garantizados. Probado por nómadas digitales',
  },
  {
    icon: Coffee,
    title: 'Espacio de Trabajo Dedicado',
    description: 'Mesa amplia, silla ergonómica, luz natural',
  },
  {
    icon: Mountain,
    title: 'Naturaleza a 5 Minutos',
    description: 'Río, montañas, paisajes llaneros auténticos',
  },
  {
    icon: Users,
    title: 'Comunidad Pequeña',
    description: 'Máximo 4 residentes simultáneos. Conexiones genuinas',
  },
  {
    icon: Sunrise,
    title: 'Despertares Inolvidables',
    description: 'Amaneceres llaneros desde tu ventana',
  },
  {
    icon: Book,
    title: 'Biblioteca Cultural',
    description: 'Libros sobre la región, historia, arte llanero',
  },
]

export default function CasaLuna() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-vipro-warm to-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-serif font-bold mb-6 text-vipro-earth">
              Casa Luna
            </h1>
            <p className="text-xl text-vipro-night/70 mb-8 leading-relaxed">
              Tu base para descubrir los Llanos Orientales. Un espacio donde el trabajo 
              productivo y la inmersión cultural convergen naturalmente.
            </p>
          </div>
        </div>
      </section>

      {/* Galería de Fotos - Sistema flexible */}
      <section className="section-container bg-white">
        <div className="max-w-7xl mx-auto">
          <PhotoGallery 
            photos={casaLunaPhotos}
            title="Conoce Casa Luna"
          />
          <div className="text-center mt-8 p-4 bg-vipro-warm/20 dark:bg-gray-800 rounded-lg border border-vipro-warm/30 dark:border-vipro-warm/40">
            <p className="text-lg font-semibold text-gray-900 dark:text-white flex items-center justify-center gap-2">
              <span className="text-2xl">📸</span>
              <span>Haz clic en cualquier foto para verla en grande</span>
            </p>
          </div>
        </div>
      </section>

      {/* Video Tour */}
      <section className="section-container bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-8 text-center text-vipro-earth">
            Tour Virtual
          </h2>
          <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/unD1svXKzC8"
              title="Casa Luna Tour Virtual"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Amenidades */}
      <section className="section-container bg-vipro-warm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center text-vipro-earth">
            Lo que encontrarás
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity) => {
              const Icon = amenity.icon
              return (
                <div
                  key={amenity.title}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-vipro-earth to-vipro-green flex items-center justify-center mb-4">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-vipro-earth">
                    {amenity.title}
                  </h3>
                  <p className="text-vipro-night/70">
                    {amenity.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Lo que incluye la estadía */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-8 text-center text-vipro-earth">
            Tu estadía incluye
          </h2>
          
          <div className="space-y-6 text-lg">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-vipro-green flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-vipro-earth mb-1">Alojamiento completo</h3>
                <p className="text-vipro-night/70">Habitación privada o compartida según preferencia</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-vipro-green flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-vipro-earth mb-1">3 experiencias culturales por semana</h3>
                <p className="text-vipro-night/70">Cocina llanera, cabalgata, artesanía, visitas a fincas vecinas</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-vipro-green flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-vipro-earth mb-1">Transporte desde/hacia Villavicencio</h3>
                <p className="text-vipro-night/70">Te recogemos en aeropuerto o terminal</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-vipro-green flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-vipro-earth mb-1">Alimentación comunitaria</h3>
                <p className="text-vipro-night/70">Desayuno y almuerzo incluidos. Cenas opcionales compartidas</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-vipro-green flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-vipro-earth mb-1">Acceso a la comunidad VIPRO</h3>
                <p className="text-vipro-night/70">Grupo privado, eventos virtuales, red de alumni</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a href="/conecta" className="btn-primary inline-flex items-center">
              Consulta disponibilidad
            </a>
            <p className="text-sm text-vipro-night/60 mt-4">
              Desde USD $800/mes · Consulta por estadías más cortas
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
