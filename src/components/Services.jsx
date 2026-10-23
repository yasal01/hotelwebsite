import ImageWithFallback from './ImageWithFallback'
import { services } from '../data/content'
import { useReveal } from '../hooks/useReveal'

function ServiceRow({ service, index }) {
  const { ref, className } = useReveal()

  return (
    <article ref={ref} className={`service-row ${className}`}>
      <div className="service-visual media-zoom">
        <ImageWithFallback src={service.image} alt={service.alt} />
      </div>
      <div className="service-content">
        <p className="section-label">{String(index + 1).padStart(2, '0')}</p>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <a href="#contact" className="text-link">
          Enquire about this service
        </a>
      </div>
    </article>
  )
}

export default function Services() {
  const header = useReveal()

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div ref={header.ref} className={header.className}>
          <p className="section-label">What We Offer</p>
          <h2 className="section-title">Services</h2>
          <p className="section-lead">
            A focused practice spanning planning, materials, and the finishing
            layers that make a house feel inhabited.
          </p>
        </div>

        <div className="services-list">
          {services.map((service, index) => (
            <ServiceRow key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
