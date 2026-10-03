import MahrServicePage from '../../components/mahr-service-page'
import { mahrPage as page } from '../../lib/mahr-page'
export const metadata = {
 title: { absolute: 'Mahr In Islam | Karachi Legal Advice | RightLaw.pk' },
 description: page.description,
 alternates: { canonical: `https://rightlaw.pk/${page.slug}` },
 openGraph: { title: page.title, description: page.description, url: `https://rightlaw.pk/${page.slug}`, type: 'article' },
}
export default MahrServicePage
