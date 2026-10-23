import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import ImageWithFallback from './ImageWithFallback'
import { useReveal } from '../hooks/useReveal'

function ProjectCard({ project, index }) {
  const { ref, className } = useReveal()

  return (
    <article
      ref={ref}
      className={`project-card size-${project.size} ${className}`}
      style={{ transitionDelay: `${Math.min(index, 3) * 80}ms` }}
    >
      <Link
        to={`/projects/${project.id}`}
        className="media-zoom"
        aria-label={`View project ${project.title}`}
      >
        <ImageWithFallback
          src={project.cover}
          alt={`${project.title} — ${project.excerpt}`}
          style={{ objectPosition: project.coverPosition }}
        />
      </Link>
      <div className="project-meta">
        <span>Project {project.number}</span>
        <span>{project.category}</span>
      </div>
      <h3>{project.title}</h3>
      <p>{project.excerpt}</p>
      <Link to={`/projects/${project.id}`} className="text-link">
        View Project
      </Link>
    </article>
  )
}

export default function FeaturedProjects() {
  const header = useReveal()

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div ref={header.ref} className={`projects-header ${header.className}`}>
          <div>
            <p className="section-label">Portfolio Concepts</p>
            <h2 className="section-title">Selected projects</h2>
            <p className="section-lead">
              Six illustrative studio concepts exploring material, light, and
              the quieter rituals of residential life — not claimed client
              commissions.
            </p>
          </div>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
