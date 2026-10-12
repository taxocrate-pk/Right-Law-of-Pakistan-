import LegalSite from '../components/legal-site'
import {batchImages, imageSchema, karachiOffice as office} from '../lib/batch-one-assets'
import {faqs} from '../lib/legal-data'

export const metadata = {
  title: {absolute:'Family, Property, Tax & Corporate Lawyers | RightLaw.pk'},
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
      ...Object.entries(batchImages).filter(([key])=>['home','rizvi','tahir','shankar','familySupport','corporateSupport'].includes(key)).map(([key,asset])=>imageSchema(asset,`https://rightlaw.pk/#${key}-image`)),
      {'@type':'FAQPage',mainEntity:faqs.map(({question,answer})=>({'@type':'Question',name:question,acceptedAnswer:{'@type':'Answer',text:answer}}))},
      ...[['Johar',office.johar],['DHA',office.dha]].map(([name,address])=>({'@type':'LocalBusiness','@id':`https://rightlaw.pk/#${name.toLowerCase()}-office`,name:`Right Law Associates — ${name}`,telephone:office.phone,address:{'@type':'PostalAddress',streetAddress:address,addressLocality:'Karachi',addressCountry:'PK'}})),
      {
        '@type': 'Organization',
        '@id': 'https://rightlaw.pk/#organization',
        name: 'Right Law Associates (Pvt) Limited',
        alternateName: 'RightLaw.pk',
        url: 'https://rightlaw.pk/',
        telephone: office.phone,
      },
      {
        '@type': 'LegalService',
        '@id': 'https://rightlaw.pk/#legalservice',
        name: 'Right Law Associates',
        url: 'https://rightlaw.pk/',
        areaServed: 'Pakistan',
        telephone: office.phone,
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
