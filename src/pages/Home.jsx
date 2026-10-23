import Hero from '../components/Hero'
import FeaturedProjects from '../components/FeaturedProjects'
import StudioIntro from '../components/StudioIntro'
import Services from '../components/Services'
import Process from '../components/Process'
import Materials from '../components/Materials'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProjects />
      <StudioIntro />
      <Services />
      <Process />
      <Materials />
      <Contact />
    </main>
  )
}
