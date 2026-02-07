'use client'

import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from './ThemeProvider'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // No renderizar durante SSR - evita hydration mismatch
  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-vipro-warm/80 dark:bg-vipro-earth/30 text-vipro-night dark:text-vipro-sand hover:bg-vipro-sand dark:hover:bg-vipro-earth/50 border border-vipro-earth/20 dark:border-vipro-sand/30 transition-all duration-200 shadow-sm hover:shadow-md"
      aria-label="Toggle theme"
      title={theme === 'light' ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro'}
    >
      {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  )
}