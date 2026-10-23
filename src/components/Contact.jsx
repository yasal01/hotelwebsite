import { useState } from 'react'
import { studio } from '../data/content'
import { useReveal } from '../hooks/useReveal'

const initial = {
  name: '',
  email: '',
  projectType: '',
  budget: '',
  description: '',
}

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your full name.'
  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.projectType) errors.projectType = 'Please select a project type.'
  if (!values.budget) errors.budget = 'Please select an approximate budget.'
  if (!values.description.trim() || values.description.trim().length < 20) {
    errors.description = 'Please describe your project in at least 20 characters.'
  }
  return errors
}

export default function Contact() {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const aside = useReveal()
  const formReveal = useReveal()

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return
    setSubmitted(true)
  }

  const mailtoBody = encodeURIComponent(
    `Name: ${values.name}\nEmail: ${values.email}\nProject type: ${values.projectType}\nBudget: ${values.budget}\n\n${values.description}`
  )

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-grid">
        <div ref={aside.ref} className={`contact-aside ${aside.className}`}>
          <p className="section-label">Begin</p>
          <h2 className="section-title">
            Let&apos;s create a space that feels like home.
          </h2>
          <p>
            Share a little about your residential project. We typically begin
            with a conversation to understand lifestyle, scope, and whether we
            are the right fit.
          </p>
          <div className="contact-details">
            <a href={`mailto:${studio.email}`}>{studio.email}</a>
            <span className="contact-placeholder">Phone — available on request</span>
            <span className="contact-placeholder">Studio location — by appointment</span>
          </div>
        </div>

        <div ref={formReveal.ref} className={formReveal.className}>
          {submitted ? (
            <div className="form-success" role="status">
              <h3>Thank you</h3>
              <p>
                This portfolio site does not send messages to a server. To share
                your enquiry, email{' '}
                <a
                  href={`mailto:${studio.email}?subject=Project enquiry&body=${mailtoBody}`}
                >
                  {studio.email}
                </a>{' '}
                with your details, or connect a form service such as Formspree
                or Netlify Forms when deploying.
              </p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={onSubmit} noValidate>
              <div className="form-row">
                <div className={`field${errors.name ? ' has-error' : ''}`}>
                  <label htmlFor="name">Full name</label>
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    value={values.name}
                    onChange={onChange}
                  />
                  {errors.name && (
                    <span className="error" role="alert">
                      {errors.name}
                    </span>
                  )}
                </div>
                <div className={`field${errors.email ? ' has-error' : ''}`}>
                  <label htmlFor="email">Email address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={onChange}
                  />
                  {errors.email && (
                    <span className="error" role="alert">
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              <div className="form-row">
                <div className={`field${errors.projectType ? ' has-error' : ''}`}>
                  <label htmlFor="projectType">Project type</label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={values.projectType}
                    onChange={onChange}
                  >
                    <option value="">Select…</option>
                    <option value="Full home">Full home</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Kitchen & bath">Kitchen &amp; bath</option>
                    <option value="Single room">Single room</option>
                    <option value="Consultation">Consultation</option>
                  </select>
                  {errors.projectType && (
                    <span className="error" role="alert">
                      {errors.projectType}
                    </span>
                  )}
                </div>
                <div className={`field${errors.budget ? ' has-error' : ''}`}>
                  <label htmlFor="budget">Approximate budget</label>
                  <select
                    id="budget"
                    name="budget"
                    value={values.budget}
                    onChange={onChange}
                  >
                    <option value="">Select…</option>
                    <option value="Under $50k">Under $50k</option>
                    <option value="$50k–$150k">$50k–$150k</option>
                    <option value="$150k–$350k">$150k–$350k</option>
                    <option value="$350k+">$350k+</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                  {errors.budget && (
                    <span className="error" role="alert">
                      {errors.budget}
                    </span>
                  )}
                </div>
              </div>

              <div className={`field${errors.description ? ' has-error' : ''}`}>
                <label htmlFor="description">Project description</label>
                <textarea
                  id="description"
                  name="description"
                  value={values.description}
                  onChange={onChange}
                  placeholder="Share a little about the home, timeline, and what you hope to achieve."
                />
                {errors.description && (
                  <span className="error" role="alert">
                    {errors.description}
                  </span>
                )}
              </div>

              <p className="form-note">
                Submissions are validated in the browser only. No message is
                sent until you connect a form backend or use the email link.
              </p>

              <button type="submit" className="btn btn-primary">
                Send Enquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
