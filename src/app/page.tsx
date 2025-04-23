
import Hero from '@/components/Hero'
import LogoSlider from '@/components/LogoSlider'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-combined-gradient">
      <Hero />
      <LogoSlider />
      <About />
      <Projects />
      <Contact />
    </main>

  )
}
