/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        vipro: {
          earth: '#8B6F47',      // Tierra de llanos
          green: '#4A6741',      // Verde sabana
          sand: '#D4A574',       // Arena/ocre
          sky: '#87CEEB',        // Cielo llanero
          night: '#1A1A2E',      // Noche estrellada
          warm: '#F4E4C1',       // Cálido acogedor
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}
