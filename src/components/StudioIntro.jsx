import ImageWithFallback from './ImageWithFallback'
import { studioImage } from '../data/content'
import { useReveal } from '../hooks/useReveal'

export default function StudioIntro() {
  const media = useReveal()
  const copy = useReveal()

  return (
    <section id="studio" className="section studio-section">
      <div className="container studio-grid">
        <div ref={media.ref} className={`studio-media media-zoom ${media.className}`}>
          <ImageWithFallback src={studioImage.src} alt={studioImage.alt} />
        </div>

        <div ref={copy.ref} className={`studio-copy ${copy.className}`}>
          <p className="section-label">The Studio</p>
          <h2 className="section-title">Design with intention. Living with ease.</h2>
          <p>
            Atelier Nouve is a residential interior design practice focused on
            spaces that feel personal, functional, and enduring. We combine
            considered planning with tactile materials — timber, stone, linen,
            soft light — so homes support daily life as much as they photograph
            well.
          </p>
          <p>
            Every concept begins with how you live: the rooms you gather in, the
            quiet corners you need, and the details that make a house feel like
            yours.
          </p>
          <a href="#approach" className="text-link">
            Our approach
          </a>
        </div>
      </div>
    </section>
  )
}
