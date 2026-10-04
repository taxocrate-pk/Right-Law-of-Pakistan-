import { navRouteContent } from '../lib/nav-route-content'

export default function sitemap() {
  const paths = new Set(['', 'property-lawyers-in-karachi', 'property-lawyers-in-hyderabad', 'property-lawyers-in-lahore', 'property-lawyers-in-islamabad', 'property-lawyers-in-rawalpindi', 'property-lawyers-in-faisalabad', 'court-marriage-in-islamabad-and-rawalpindi', 'court-marriage-in-lahore-legal-union', 'b-form-nadra-importance-of-b-form-in-pakistan', 'family-law-in-lahore-divorce-khula-court-marriage-online-nikah', 'marriage-registration-nadra-marriage-certificate-karachi', 'blog', 'family-law', 'misyar-marriage-nikah-misyar-marriages', 'mehar-mahr-in-islam', 'best-family-and-divorce-lawyer-and-lady-advocate-in-karachi-sobia-mohsin-shah-legal-expertise-in-family-law', 'nikah-khawan-qazi-and-nikah-registrar-in-karachi-pakistan', 'nadra-computerized-death-certificate-online-verification-check', ...Object.keys(navRouteContent)])
  return [...paths].map(path => ({ url: `https://rightlaw.pk/${path ? `${path}/` : ''}` }))
}
