import { useState } from 'react'

const FALLBACK =
  'data:image/svg+xml,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
      <rect fill="#EAE3D9" width="800" height="600"/>
      <text x="400" y="300" text-anchor="middle" fill="#777963" font-family="Georgia, serif" font-size="22">Image unavailable</text>
    </svg>`
  )

export default function ImageWithFallback({
  src,
  alt,
  className = '',
  style,
  loading = 'lazy',
}) {
  const [failed, setFailed] = useState(false)

  return (
    <img
      src={failed ? FALLBACK : src}
      alt={alt}
      className={className}
      style={style}
      loading={loading}
      onError={() => setFailed(true)}
    />
  )
}
