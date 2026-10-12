import PropertyCityPage from '../../components/property-city-page'
import { getPropertyCityPage } from '../../lib/property-city-data'
import {karachiOffice} from '../../lib/batch-one-assets'

const original = getPropertyCityPage('karachi')
const page = {...original,batch:true,phone:karachiOffice.phone,addresses:[karachiOffice.johar,karachiOffice.dha],sections:original.sections.map(([title,copy],i)=>[i===0?'Title And Ownership Disputes':title,copy])}

export const metadata = {
  title: {absolute:'Property Lawyers In Karachi | RightLaw.pk'},
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
