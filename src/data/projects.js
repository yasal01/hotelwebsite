const img = (id, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const projects = [
  {
    id: 'quiet-residence',
    number: '01',
    title: 'The Quiet Residence',
    category: 'Residential Concept',
    location: 'Illustrative concept',
    year: '2024',
    cover: img('photo-1600210492493-0946911123ea'),
    coverPosition: 'center',
    size: 'large',
    excerpt:
      'A contemporary home shaped by natural materials, soft neutrals, sculptural furniture, and generous daylight.',
    story:
      'The Quiet Residence explores how restraint can create warmth. Large glazed openings draw daylight deep into the plan, while plaster walls, oak flooring, and linen upholstery form a calm, tactile envelope. Furniture is kept sculptural but sparse, allowing proportion and light to lead the experience of the home.',
    direction:
      'A palette of warm ivory, pale oak, and soft stone. Emphasis on proportion, quiet surfaces, and furniture with presence rather than ornament.',
    materials: [
      'White oak flooring',
      'Limewashed plaster',
      'Belgian linen',
      'Brushed brass hardware',
      'Travertine accents',
    ],
    gallery: [
      {
        src: img('photo-1600210492493-0946911123ea'),
        alt: 'Sunlit contemporary living room with neutral sofa and large windows',
      },
      {
        src: img('photo-1586023492125-27b2c045efd7', 1400),
        alt: 'Calm residential seating area with warm tones and plants',
      },
      {
        src: img('photo-1600047509807-ba8f99d2cdde', 1400),
        alt: 'Soft lounge with layered textiles and natural materials',
      },
      {
        src: img('photo-1616486338812-3dadae4b4ace', 1400),
        alt: 'Neutral interior with textured upholstery and quiet daylight',
      },
    ],
  },
  {
    id: 'olive-house',
    number: '02',
    title: 'Olive House',
    category: 'Residential Concept',
    location: 'Illustrative concept',
    year: '2024',
    cover: img('photo-1631679706909-1844bbd07221'),
    coverPosition: 'center',
    size: 'medium',
    excerpt:
      'A warm residential interior with olive accents, natural oak, tactile fabrics, and understated detailing.',
    story:
      'Olive House draws from Mediterranean calm without pastiche. Muted olive textiles sit against natural oak joinery and soft plaster, creating rooms that feel grounded and lived-in. Detailing is quiet — thin metal profiles, woven textures, and carefully placed lighting — so daily rituals feel unforced.',
    direction:
      'Warm oak, olive textiles, soft neutrals, and understated metal. Spaces designed for lingering, gathering, and soft evening light.',
    materials: [
      'Natural oak cabinetry',
      'Olive linen upholstery',
      'Woven rattan',
      'Matte ceramic',
      'Soft plaster walls',
    ],
    gallery: [
      {
        src: img('photo-1631679706909-1844bbd07221'),
        alt: 'Warm living room with olive tones and natural oak furniture',
      },
      {
        src: img('photo-1615529328331-f8917597711f', 1400),
        alt: 'Elegant dining area with warm wood and muted green accents',
      },
      {
        src: img('photo-1600573472592-401b489a3cdc', 1400),
        alt: 'Open residential interior with soft daylight and tactile finishes',
      },
      {
        src: img('photo-1615874694520-474822394e73', 1400),
        alt: 'Relaxed living space with warm timber and layered textiles',
      },
    ],
  },
  {
    id: 'stone-apartment',
    number: '03',
    title: 'The Stone Apartment',
    category: 'Apartment Concept',
    location: 'Illustrative concept',
    year: '2023',
    cover: img('photo-1600607687939-ce8a6c25118c'),
    coverPosition: 'center 40%',
    size: 'medium',
    excerpt:
      'A refined apartment with limestone textures, muted colours, clean architectural lines, and considered lighting.',
    story:
      'The Stone Apartment treats limestone and soft plaster as the primary architecture of the interior. Clean lines frame views and storage, while recessed and pendant lighting articulate evening atmosphere. The plan prioritises clarity — fewer walls, better thresholds, and rooms that feel composed rather than filled.',
    direction:
      'Limestone, muted greys, dark timber, and precise lighting. An architectural approach to a compact urban footprint.',
    materials: [
      'Honed limestone',
      'Smoked oak',
      'Linen curtains',
      'Blackened steel',
      'Soft grey plaster',
    ],
    gallery: [
      {
        src: img('photo-1600607687939-ce8a6c25118c'),
        alt: 'Architectural apartment interior with stone textures and clean lines',
      },
      {
        src: img('photo-1600566753190-17f0baa2a6c3', 1400),
        alt: 'Refined modern apartment living space with a muted palette',
      },
      {
        src: img('photo-1600607687920-4e2a09cf159d', 1400),
        alt: 'Contemporary interior with stone surfaces and architectural lighting',
      },
      {
        src: img('photo-1600585154526-990dced4db0d', 1400),
        alt: 'Open-plan residence with stone and timber detailing',
      },
    ],
  },
  {
    id: 'sunday-house',
    number: '04',
    title: 'Sunday House',
    category: 'Family Home Concept',
    location: 'Illustrative concept',
    year: '2023',
    cover: img('photo-1600585154340-be6161a56a0c'),
    coverPosition: 'center',
    size: 'tall',
    excerpt:
      'A welcoming family home with comfortable furniture, warm wood, layered textures, and relaxed elegance.',
    story:
      'Sunday House is designed for the pace of family life — generous gathering spaces, durable natural finishes, and furniture that invites use. Warm wood grounds the palette; layered rugs and textiles soften acoustics and edges. The mood is relaxed elegance: considered, never precious.',
    direction:
      'Warm timber, soft neutrals, comfortable seating, and practical storage woven into the architecture of daily life.',
    materials: [
      'Walnut furniture',
      'Wool rugs',
      'Performance linen',
      'Ceramic tile',
      'Warm white walls',
    ],
    gallery: [
      {
        src: img('photo-1600585154340-be6161a56a0c'),
        alt: 'Welcoming modern family home with warm wood and large windows',
      },
      {
        src: img('photo-1600210492486-724fe5c67fb0', 1400),
        alt: 'Bright residential living space with natural materials and daylight',
      },
      {
        src: img('photo-1600585152220-90363fe7e115', 1400),
        alt: 'Contemporary home interior with timber accents and open flow',
      },
      {
        src: img('photo-1554995207-c18c203602cb', 1400),
        alt: 'Comfortable living room with soft seating and warm natural light',
      },
    ],
  },
  {
    id: 'modern-kitchen',
    number: '05',
    title: 'The Modern Kitchen',
    category: 'Kitchen Concept',
    location: 'Illustrative concept',
    year: '2024',
    cover: img('photo-1556912173-46c336c7fd55'),
    coverPosition: 'center',
    size: 'wide',
    excerpt:
      'A contemporary kitchen concept featuring natural stone, custom cabinetry, subtle lighting, and functional design.',
    story:
      'This kitchen concept balances beauty and use. Custom cabinetry conceals storage while stone worktops and a quiet backsplash bring material richness. Task and ambient lighting are layered so the space works for cooking and lingering. Hardware and appliances remain understated so the materials can speak.',
    direction:
      'Natural stone, custom timber cabinetry, soft under-cabinet light, and a layout that supports both cooking and gathering.',
    materials: [
      'Natural stone counters',
      'Custom oak cabinetry',
      'Aged bronze pulls',
      'Porcelain flooring',
      'Soft LED task lighting',
    ],
    gallery: [
      {
        src: img('photo-1556912173-46c336c7fd55'),
        alt: 'Contemporary kitchen with natural stone counters and custom cabinetry',
      },
      {
        src: img('photo-1556911220-bff31c812dba', 1400),
        alt: 'Modern kitchen island with refined finishes and subtle lighting',
      },
      {
        src: img('photo-1556909114-f6e7ad7d3136', 1400),
        alt: 'Clean contemporary kitchen with warm timber cabinetry',
      },
      {
        src: img('photo-1565538810643-b5bdb714032a', 1400),
        alt: 'Elegant kitchen detail with stone surfaces and natural light',
      },
    ],
  },
  {
    id: 'stillwater-retreat',
    number: '06',
    title: 'Stillwater Retreat',
    category: 'Bedroom & Bath Concept',
    location: 'Illustrative concept',
    year: '2024',
    cover: img('photo-1616594039964-ae9021a400a0'),
    coverPosition: 'center 30%',
    size: 'medium',
    excerpt:
      'A calm bedroom and bathroom concept with natural materials, soft lighting, and a spa-like atmosphere.',
    story:
      'Stillwater Retreat is a suite designed for rest. Soft textiles, muted plaster, and gentle lighting create a spa-like calm. The bathroom continues the material language with stone, timber, and uncluttered surfaces. Thresholds between sleep and bathing are intentional — quiet, continuous, restorative.',
    direction:
      'Soft neutrals, natural stone, timber vanity, and dimmable lighting for a restorative private suite.',
    materials: [
      'Soft wool bedding',
      'Natural stone vanity',
      'Timber cladding',
      'Linen drapery',
      'Brushed nickel fittings',
    ],
    gallery: [
      {
        src: img('photo-1616594039964-ae9021a400a0'),
        alt: 'Calm bedroom with soft lighting and natural materials',
      },
      {
        src: img('photo-1600566753086-00f18fb6b3ea', 1400),
        alt: 'Spa-like bathroom with stone surfaces and warm timber',
      },
      {
        src: img('photo-1631889993959-41b4e9c6e3c5', 1400),
        alt: 'Serene bedroom interior with layered linens and muted tones',
      },
      {
        src: img('photo-1507652313519-d4e9174996dd', 1400),
        alt: 'Elegant bathroom with natural light and refined finishes',
      },
    ],
  },
]

export function getProjectById(id) {
  return projects.find((p) => p.id === id)
}
