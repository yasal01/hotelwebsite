import ImageWithFallback from './ImageWithFallback'
import { heroImage } from '../data/content'

export default function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero-media">
        <ImageWithFallback
          src={heroImage.src}
          alt={heroImage.alt}
          loading="eager"
        />
        <div className="hero-overlay" aria-hidden="true" />
      </div>

      <div className="hero-content">
        <p className="hero-brand">Atelier Nouve</p>
        <p className="hero-descriptor">Interior Design · Residential · Spaces</p>
        <h1>Spaces that feel like you.</h1>
        <p className="hero-copy">
          Thoughtful interiors shaped by natural materials, considered details,
          and the way you live.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-light">
            Explore Our Work
          </a>
          <a href="#approach" className="btn btn-light btn-ghost">
            Our Approach
          </a>
        </div>
      </div>
    </section>
  )
}
