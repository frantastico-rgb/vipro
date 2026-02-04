import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Philosophy from '@/components/Philosophy'
import Archetypes from '@/components/Archetypes'
import HowItWorks from '@/components/HowItWorks'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Philosophy />
      <Archetypes />
      <HowItWorks />
      <Footer />
    </main>
  )
}
