'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import ViproLogo from './ViproLogo'

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Experiencias', href: '/experiencias' },
  { name: 'Casa Luna', href: '/casa-luna' },
  { name: 'Historias', href: '/historias' },
  { name: 'Conecta', href: '/conecta' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white/95 backdrop-blur-sm fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - MÁS PROMINENTE */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <ViproLogo 
              size="lg" 
              showText={true} 
              className="drop-shadow-md" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-vipro-night hover:text-vipro-earth transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-vipro-night hover:bg-vipro-warm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-vipro-warm">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-3 rounded-md text-vipro-night hover:bg-vipro-warm transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
