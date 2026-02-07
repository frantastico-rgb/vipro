'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import ViproLogo from './ViproLogo'
import ThemeToggle from './ThemeToggle'

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
    <nav className="bg-white/95 dark:bg-vipro-night/95 backdrop-blur-sm fixed w-full z-50 shadow-sm border-b border-vipro-warm/20 dark:border-vipro-sand/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - MÁS PROMINENTE */}
          <Link 
            href="/" 
            className="flex items-center hover:opacity-80 transition-opacity"
            prefetch={true}
          >
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
                prefetch={true}
                className="text-vipro-night dark:text-vipro-warm hover:text-vipro-earth dark:hover:text-vipro-sand transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              type="button"
              className="p-2 rounded-md text-vipro-night dark:text-vipro-warm hover:bg-vipro-warm dark:hover:bg-vipro-earth/20"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-vipro-night border-t border-vipro-warm dark:border-vipro-sand/20">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-3 rounded-md text-vipro-night dark:text-vipro-warm hover:bg-vipro-warm dark:hover:bg-vipro-earth/20 transition-colors duration-200"
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
