import NikahKhawanServicePage from '../../components/nikah-khawan-service-page'
import { nikahKhawanPage as page } from '../../lib/nikah-khawan-page'
export const metadata = {
 title: { absolute: 'Nikah Khawan In Karachi | Registrar | RightLaw.pk' },
 description: page.description,
 alternates: { canonical: `https://rightlaw.pk/${page.slug}` },
 openGraph: { title: page.title, description: page.description, url: `https://rightlaw.pk/${page.slug}`, type: 'article' },
}
export default NikahKhawanServicePage
