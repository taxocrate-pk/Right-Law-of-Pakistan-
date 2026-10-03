import { navRouteContent } from '../lib/nav-route-content'

export default function sitemap() {
  const paths = new Set(['', 'blog', 'family-law', 'best-family-and-divorce-lawyer-and-lady-advocate-in-karachi-sobia-mohsin-shah-legal-expertise-in-family-law', 'nikah-khawan-qazi-and-nikah-registrar-in-karachi-pakistan', 'nadra-computerized-death-certificate-online-verification-check', ...Object.keys(navRouteContent)])
  return [...paths].map(path => ({ url: `https://rightlaw.pk/${path ? `${path}/` : ''}` }))
}
