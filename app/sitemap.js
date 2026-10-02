import { navRouteContent } from '../lib/nav-route-content'

export default function sitemap() {
  const paths = new Set(['', 'blog', 'family-law', ...Object.keys(navRouteContent)])
  return [...paths].map(path => ({ url: `https://rightlaw.pk/${path ? `${path}/` : ''}` }))
}
