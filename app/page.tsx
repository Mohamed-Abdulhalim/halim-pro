import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Work from '@/components/Work'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Workflows from '@/components/Workflows'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Projects />
      <Workflows />
      <Work />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
