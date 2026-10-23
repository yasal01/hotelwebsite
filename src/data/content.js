const img = (id, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const studio = {
  email: 'hello@ateliernouve.example',
}

export const services = [
  {
    id: 'residential',
    title: 'Residential Interior Design',
    description:
      'Thoughtful, personalised interiors designed around the needs, routines, and character of each home — from first conversation through to finished space.',
    image: img('photo-1560448204-e02f11c3d0e2'),
    alt: 'Bright residential living room with natural light and considered furnishings',
  },
  {
    id: 'planning',
    title: 'Space Planning',
    description:
      'Layouts that improve movement, functionality, proportion, and the relationship between spaces — clarifying how a home actually works day to day.',
    image: img('photo-1493809842364-78817add7ffb'),
    alt: 'Open architectural living space showing considered spatial flow',
  },
  {
    id: 'materials',
    title: 'Material & Finish Selection',
    description:
      'Carefully considered palettes of natural stone, timber, textiles, lighting, and finishes that feel coherent and enduring over time.',
    image: img('photo-1616137466211-f939a420be84'),
    alt: 'Refined interior detailing with natural materials and soft light',
  },
  {
    id: 'styling',
    title: 'Styling & Final Details',
    description:
      'Furniture selection, artwork, accessories, and the finishing touches that bring an interior together with quiet confidence.',
    image: img('photo-1578683010236-d716f9a3f461'),
    alt: 'Styled living room with carefully chosen furniture and layered details',
  },
]

export const processSteps = [
  {
    number: '01',
    title: 'Discover',
    description:
      'Understand the client’s lifestyle, vision, requirements, and the atmosphere they want their home to hold.',
  },
  {
    number: '02',
    title: 'Develop',
    description:
      'Explore layouts, concepts, and materials — shaping a clear design direction rooted in how the space will be lived in.',
  },
  {
    number: '03',
    title: 'Refine',
    description:
      'Bring the design details together: finishes, furniture, lighting, and the quieter decisions that make a room feel complete.',
  },
  {
    number: '04',
    title: 'Complete',
    description:
      'Finalise the space with considered styling and documentation, ready for a calm, confident handover.',
  },
]

export const materials = [
  {
    label: 'Natural Oak',
    image: img('photo-1615874959474-d609969a20ed', 900),
    alt: 'Close-up of natural oak wood grain',
  },
  {
    label: 'Timber Detail',
    image: img('photo-1519710164239-da123dc03ef4', 900),
    alt: 'Warm timber furniture and architectural detail',
  },
  {
    label: 'Marble',
    image: img('photo-1618220179428-22790b461013', 900),
    alt: 'Polished marble surface with soft natural veining',
  },
  {
    label: 'Linen',
    image: img('photo-1505693416388-ac5ce068fe85', 900),
    alt: 'Soft linen bedding and textile detail in natural light',
  },
  {
    label: 'Ceramic',
    image: img('photo-1595526114035-0d45ed16cfbf', 900),
    alt: 'Ceramic vessels and tactile surface styling',
  },
  {
    label: 'Metal Finish',
    image: img('photo-1552321554-5fefe8c9ef14', 900),
    alt: 'Brushed metal fixtures against stone and timber',
  },
  {
    label: 'Natural Stone',
    image: img('photo-1616046229478-9901c5536a45', 900),
    alt: 'Natural stone architectural surface in soft light',
  },
  {
    label: 'Lighting',
    image: img('photo-1513694203232-719a280e022f', 900),
    alt: 'Architectural lighting detail in a refined interior',
  },
]

export const heroImage = {
  src: img('photo-1618221195710-dd6b41faaea6', 2000),
  alt: 'Sophisticated contemporary living room with warm neutrals and natural light',
}

export const studioImage = {
  src: img('photo-1484101403633-562f891dc89a', 1400),
  alt: 'Thoughtfully furnished living room with soft daylight and natural textures',
}
