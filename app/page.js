import LegalSite from '../components/legal-site'
import RightLawHeader from '../components/rightlaw-header'

export const metadata = {
  title: 'RightLaw.pk | Experienced Lawyers in Pakistan',
  description: 'Right Law Associates provides professional legal assistance across Pakistan for family, corporate, property, civil and criminal matters.',
  alternates: { canonical: 'https://rightlaw.pk' },
  openGraph: { title: 'RightLaw.pk | Experienced Lawyers in Pakistan', description: 'Professional legal assistance for individuals, families, businesses and overseas Pakistanis.', url: 'https://rightlaw.pk', siteName: 'Right Law Associates', type: 'website' },
}

export default function Page() {
  const schema = { '@context': 'https://schema.org', '@graph': [{ '@type': 'LegalService', '@id': 'https://rightlaw.pk/#legalservice', name: 'Right Law Associates', url: 'https://rightlaw.pk', areaServed: 'Pakistan', telephone: '+92 333 1127830', provider: { '@type': 'Organization', name: 'Right Law Associates (Pvt) Limited' } }, { '@type': 'Attorney', name: 'Right Law Associates', url: 'https://rightlaw.pk' }] }
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><RightLawHeader /><LegalSite /></>
}
