import Link from 'next/link'
import { Instagram, Mail, MapPin } from 'lucide-react'
import ViproLogo from './ViproLogo'

export default function Footer() {
  return (
    <footer className="bg-vipro-night text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sobre VIPRO */}
          <div>
            <div className="mb-4">
              <ViproLogo size="md" showText={true} className="text-white" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Donde el viaje y la vida se encuentran. Conectamos viajeros conscientes 
              con experiencias llaneras auténticas en Colombia.
            </p>
          </div>

          {/* Enlaces */}
          <div>
            <h4 className="font-semibold mb-4">Explora</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/experiencias" className="text-gray-300 hover:text-vipro-sand transition-colors">Experiencias</Link></li>
              <li><Link href="/casa-luna" className="text-gray-300 hover:text-vipro-sand transition-colors">Casa Luna</Link></li>
              <li><Link href="/historias" className="text-gray-300 hover:text-vipro-sand transition-colors">Historias de Viproadores</Link></li>
              <li><Link href="/conecta" className="text-gray-300 hover:text-vipro-sand transition-colors">Conecta con Nosotros</Link></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-semibold mb-4">Conecta</h4>
            <div className="space-y-3 text-sm">
              <a href="mailto:viprovillavicencio@gmail.com" className="flex items-center text-gray-300 hover:text-vipro-sand transition-colors">
                <Mail size={18} className="mr-2" />
                viprovillavicencio@gmail.com
              </a>
              <div className="flex items-start text-gray-300">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>Villavicencio, Meta<br/>Colombia</span>
              </div>
              <a href="https://www.instagram.com/viprocolombia/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-vipro-sand transition-colors">
                <Instagram size={18} className="mr-2" />
                @viprocolombia
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} VIPRO. Hecho con propósito en los Llanos Orientales.</p>
        </div>
      </div>
    </footer>
  )
}
