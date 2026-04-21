import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Marquee } from '@/components/sections/Marquee'
import { Approach } from '@/components/sections/Approach'
import { Services } from '@/components/sections/Services'
import { Process } from '@/components/sections/Process'
import { Contact } from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Marquee />
        <Approach />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
