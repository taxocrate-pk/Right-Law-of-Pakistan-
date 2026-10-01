import LegalSite from '../components/legal-site'

export const metadata = {
  title: 'Family, Property, Tax & Corporate Lawyers in Pakistan | RightLaw.pk',
  description: 'Right Law Associates provides family, property, tax, corporate and civil legal services in Karachi, Lahore, Islamabad and Rawalpindi, Pakistan.',
  alternates: { canonical: 'https://rightlaw.pk/' },
  openGraph: {
    title: 'Family, Property, Tax & Corporate Lawyers in Pakistan | RightLaw.pk',
    description: 'Experienced lawyers for family, property, tax, corporate and civil matters across Pakistan, with offices in Karachi, Lahore, Islamabad and Rawalpindi.',
    url: 'https://rightlaw.pk/',
    siteName: 'Right Law Associates',
    type: 'website',
  },
}

export default function Page() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://rightlaw.pk/#organization',
        name: 'Right Law Associates (Pvt) Limited',
        alternateName: 'RightLaw.pk',
        url: 'https://rightlaw.pk/',
        telephone: '+92 333 1127830',
      },
      {
        '@type': 'LegalService',
        '@id': 'https://rightlaw.pk/#legalservice',
        name: 'Right Law Associates',
        url: 'https://rightlaw.pk/',
        areaServed: 'Pakistan',
        telephone: '+92 333 1127830',
        provider: { '@id': 'https://rightlaw.pk/#organization' },
        serviceType: ['Family Law', 'Property Law', 'Corporate Law', 'Tax Law', 'Civil Law', 'Succession Law'],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://rightlaw.pk/#website',
        name: 'RightLaw.pk',
        url: 'https://rightlaw.pk/',
        publisher: { '@id': 'https://rightlaw.pk/#organization' },
      },
    ],
  }

  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><LegalSite /></>
}
