import { processSteps } from '../data/content'
import { useReveal } from '../hooks/useReveal'

export default function Process() {
  const header = useReveal()
  const timeline = useReveal()

  return (
    <section
      id="approach"
      className="section process-section"
      aria-labelledby="process-title"
    >
      <div className="container">
        <div ref={header.ref} className={header.className}>
          <p className="section-label">How We Work</p>
          <h2 id="process-title" className="section-title">
            Our approach
          </h2>
        </div>

        <ol ref={timeline.ref} className={`process-timeline ${timeline.className}`}>
          {processSteps.map((step) => (
            <li key={step.number} className="process-step">
              <p className="process-number">{step.number}</p>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
