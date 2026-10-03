import MisyarServicePage from '../../components/misyar-service-page'
import { misyarPage as page } from '../../lib/misyar-page'
export const metadata = {
 title: { absolute: 'Misyar Marriage | Rights And Legal Review | RightLaw.pk' },
 description: page.description,
 alternates: { canonical: `https://rightlaw.pk/${page.slug}` },
 openGraph: { title: page.title, description: page.description, url: `https://rightlaw.pk/${page.slug}`, type: 'article' },
}
export default MisyarServicePage
