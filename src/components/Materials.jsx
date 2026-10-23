import ImageWithFallback from './ImageWithFallback'
import { materials } from '../data/content'
import { useReveal } from '../hooks/useReveal'

export default function Materials() {
  const header = useReveal()
  const collage = useReveal()

  return (
    <section
      id="materials"
      className="section materials-section"
      aria-labelledby="materials-title"
    >
      <div className="container">
        <div ref={header.ref} className={`materials-header ${header.className}`}>
          <p className="section-label">Palette</p>
          <h2 id="materials-title" className="section-title">
            Materials &amp; details
          </h2>
          <p className="section-lead">
            Wood, natural stone, linen, ceramics, and quiet metal finishes —
            chosen for how they feel in the hand and age with daily use.
          </p>
        </div>

        <div ref={collage.ref} className={`materials-collage ${collage.className}`}>
          {materials.map((item) => (
            <figure key={item.label} className="material-tile">
              <ImageWithFallback src={item.image} alt={item.alt} />
              <figcaption className="material-label">{item.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
