import { Link } from 'react-router-dom'
import { studio } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="logo">
            Atelier Nouve
          </Link>
          <p>
            A residential interior design studio creating considered spaces with
            timeless materials and thoughtful detail.
          </p>
        </div>

        <div className="footer-col">
          <h4>Navigate</h4>
          <a href="/#projects">Projects</a>
          <a href="/#studio">Studio</a>
          <a href="/#services">Services</a>
          <a href="/#approach">Approach</a>
          <a href="/#contact">Contact</a>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <a href={`mailto:${studio.email}`}>{studio.email}</a>
          <span className="footer-muted">Phone — available on request</span>
          <span className="footer-muted">Studio visits — by appointment</span>
        </div>

        <div className="footer-col">
          <h4>Social</h4>
          <span className="footer-muted">Instagram — placeholder</span>
          <span className="footer-muted">Pinterest — placeholder</span>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {year} Atelier Nouve. Portfolio concept.</p>
        <p>Photography via Unsplash for demonstration</p>
      </div>
    </footer>
  )
}
