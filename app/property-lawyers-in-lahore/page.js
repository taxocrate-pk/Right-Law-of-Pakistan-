import PropertyCityPage from '../../components/property-city-page'
import { getPropertyCityPage } from '../../lib/property-city-data'

const page = getPropertyCityPage('lahore')

export const metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: `https://rightlaw.pk/${page.slug}/` },
  openGraph: {
    title: page.title,
    description: page.description,
    url: `https://rightlaw.pk/${page.slug}/`,
    siteName: 'Right Law Associates',
    type: 'article',
  },
}

export default function Page() {
  return <PropertyCityPage page={page} />
}
