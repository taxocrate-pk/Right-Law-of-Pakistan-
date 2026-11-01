import Image from 'next/image'
import sectionImages from '../lib/section-images'

// SEO DNA 2.07D D11 / Existing Page Refinement Policy s5: extra service images placed inside
// relevant H2 sections (1 image up to 1,000 words, 2 up to 2,000, 3 above). Renders nothing
// when the page has no image for this position.
export default function SectionImage({ slug, index }) {
  const s = String(slug || '').replace(/^\/|\/$/g, '')
  const key = s ? `/${s}/` : '/'
  const img = (sectionImages[key] || [])[index]
  if (!img) return null
  return (
    <figure style={{ margin: '26px 0' }}>
      <Image src={img.src} alt={img.alt} title={img.alt} width={1200} height={800} loading="lazy"
        sizes="(max-width: 900px) 100vw, 760px" style={{ width: '100%', height: 'auto', borderRadius: 6 }} />
    </figure>
  )
}
