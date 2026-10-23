import { Link, useParams } from 'react-router-dom'
import { getProjectById, projects } from '../data/projects'
import ImageWithFallback from '../components/ImageWithFallback'
import { useReveal } from '../hooks/useReveal'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = getProjectById(id)
  const story = useReveal()
  const gallery = useReveal()

  if (!project) {
    return (
      <main className="not-found">
        <h1>Project not found</h1>
        <p>This concept project does not exist in the portfolio.</p>
        <Link to="/#projects" className="text-link">
          Back to projects
        </Link>
      </main>
    )
  }

  const index = projects.findIndex((p) => p.id === project.id)
  const prev = projects[(index - 1 + projects.length) % projects.length]
  const next = projects[(index + 1) % projects.length]

  return (
    <main className="project-detail">
      <section className="project-hero">
        <div className="project-hero-media">
          <ImageWithFallback
            src={project.cover}
            alt={`${project.title} cover photograph`}
            loading="eager"
            style={{ objectPosition: project.coverPosition }}
          />
        </div>
        <div className="project-hero-copy">
          <Link to="/#projects" className="text-link back">
            All projects
          </Link>
          <div className="meta-row">
            <span>Project {project.number}</span>
            <span>{project.category}</span>
            <span>{project.location}</span>
            <span>{project.year}</span>
          </div>
          <h1>{project.title}</h1>
          <p className="excerpt">{project.excerpt}</p>
        </div>
      </section>

      <section className="project-body">
        <div className="container">
          <div ref={story.ref} className={`project-story-grid ${story.className}`}>
            <div>
              <h2>Project story</h2>
              <p>{project.story}</p>
              <h2 style={{ marginTop: '2rem' }}>Design direction</h2>
              <p>{project.direction}</p>
            </div>
            <div>
              <h2>Materials</h2>
              <ul className="materials-list">
                {project.materials.map((material, i) => (
                  <li key={material}>
                    <span>{String(i + 1).padStart(2, '0')}</span>
                    {material}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div ref={gallery.ref} className={`project-gallery ${gallery.className}`}>
            {project.gallery.map((image) => (
              <figure key={image.src}>
                <ImageWithFallback src={image.src} alt={image.alt} />
              </figure>
            ))}
          </div>

          <nav className="project-nav" aria-label="Project navigation">
            <Link to={`/projects/${prev.id}`} className="text-link">
              {prev.title}
            </Link>
            <Link to={`/projects/${next.id}`} className="text-link">
              {next.title}
            </Link>
          </nav>
        </div>
      </section>
    </main>
  )
}
