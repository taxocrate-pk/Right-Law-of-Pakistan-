import SobiaFamilyLawyerServicePage from '../../components/sobia-family-lawyer-service-page'
import { sobiaFamilyLawyerPage as page } from '../../lib/sobia-family-lawyer-page'
export const metadata = {
 title: { absolute: 'Family Lawyer Sobia Mohsin | Karachi | RightLaw.pk' },
 description: page.description,
 alternates: { canonical: `https://rightlaw.pk/${page.slug}` },
 openGraph: { title: page.title, description: page.description, url: `https://rightlaw.pk/${page.slug}`, type: 'article' },
}
export default SobiaFamilyLawyerServicePage
