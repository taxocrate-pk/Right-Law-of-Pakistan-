import Link from 'next/link'
import Image from 'next/image'
import { Footer } from './legal-site'
import { firm } from '../lib/legal-data'
import { propertyCityKeys, propertyCityPages, propertyFaqs } from '../lib/property-city-data'

export default function PropertyCityPage({ page }) {
  const url = `https://rightlaw.pk/${page.slug}/`
  const faqs = propertyFaqs(page)
  const graph = [
    { '@type': 'LegalService', '@id': `${url}#service`, name: page.serviceName, url, telephone: page.phone || firm.phone, areaServed: page.city, provider: { '@type': 'Organization', name: firm.legalName, url: 'https://rightlaw.pk/' } },
    { '@type': 'FAQPage', mainEntity: faqs.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })) },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rightlaw.pk/' }, { '@type': 'ListItem', position: 2, name: 'Property Law in Pakistan', item: 'https://rightlaw.pk/property-law-in-pakistan/' }, { '@type': 'ListItem', position: 3, name: page.serviceName, item: url }] }
  ]
  if (page.addresses?.length) graph.push({ '@type': 'LocalBusiness', '@id': `${url}#local`, name: `Right Law Associates — ${page.city}`, url, telephone: page.phone || firm.phone, areaServed: page.city, address: page.addresses.map(streetAddress => ({ '@type': 'PostalAddress', streetAddress, addressLocality: page.city, addressCountry: 'PK' })) })

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }) }} />
    <main className="property-law-page family-law-page">
      <section className="hero"><div className="container property-hero">
        <p className="eyebrow gold">Property Law • {page.city}</p>
        <h1>{page.h1}</h1>
        <p className="hero-lede">{page.intro}</p>
        <div className="hero-actions"><Link href="/contact/" className="button button-gold">Consult A Property Lawyer</Link><a href={`tel:${page.phone || firm.phone}`} className="button button-outline-light">Call {page.phone || firm.phone}</a><a href={`https://wa.me/${(page.phone || firm.phone).replace(/\D/g,'')}`} className="text-link light-link">WhatsApp</a></div>
      </div></section>
      <article className="section family-article"><div className="container family-article-inner">
        <Image className="property-content-image" src="/images/legal-consultation.png" width={1000} height={600} sizes="(max-width: 800px) 100vw, 940px" priority alt={`${page.serviceName} reviewing property documents in ${page.city}`} />
        <h2>{page.serviceName} for Property Disputes and Transactions</h2>
        <h3>{page.profile.name} — {page.profile.role}</h3>
        <div className="senior-counsel-card">
          {page.profile.image && <Image unoptimized width={92} height={108} className="senior-counsel-photo" src={page.profile.image} alt={`${page.profile.name}, ${page.profile.role}`} />}
          <div><p>{page.profile.text}</p><p className="senior-counsel-note">The appropriate lawyer and forum depend on the title record, property location, relief required and stage of proceedings.</p></div>
        </div>
        {page.sections.map(([title, copy]) => <section key={title}><h2>{title}</h2><h3>Document-Based Advice for {page.city} Property Matters</h3><p>{copy}</p></section>)}
        <section><h2>{page.serviceName} Across Key Localities</h2><h3>Local Property Coverage in {page.city}</h3><p>We assist clients with matters across {page.localities}. Locality alone does not determine the legal route; the property record, tenure, authority and court jurisdiction remain decisive.</p></section>
        {page.addresses?.length > 0 && <section><h2>Property Law Consultation Offices in {page.city}</h2><h3>Verified Office Locations</h3>{page.addresses.map(a => <p key={a}>{a}</p>)}</section>}
        <h2>Property Documents We Commonly Review</h2>
        <div className="property-table-wrap"><table><thead><tr><th>Document</th><th>Why It Matters</th><th>What We Check</th></tr></thead><tbody>
          <tr><td>Registry / Conveyance</td><td>Recorded transaction</td><td>Parties, property description, execution and chain of title</td></tr>
          <tr><td>Allotment / Lease</td><td>Source and conditions of tenure</td><td>Transfer rights, restrictions, dues and authority record</td></tr>
          <tr><td>Mutation / Revenue Entry</td><td>Revenue position</td><td>Underlying transaction and competing claims</td></tr>
          <tr><td>Power of Attorney</td><td>Representative authority</td><td>Scope, validity, authentication and exact powers</td></tr>
        </tbody></table></div>
        <h2>Related Property Lawyer Pages</h2>
        <ul>
          <li><Link href="/property-law-in-pakistan/">Property Lawyers in Pakistan</Link></li>
          {propertyCityKeys.filter(k => propertyCityPages[k].slug !== page.slug).map(k => <li key={k}><Link href={`/${propertyCityPages[k].slug}/`}>{propertyCityPages[k].serviceName}</Link></li>)}
          <li><Link href="/property-disputes/">Property Disputes in Pakistan</Link></li>
          <li><Link href="/civil-law/">Civil Law and Litigation</Link></li>
        </ul>
        <h2>Frequently Asked Questions About {page.serviceName}</h2>
        <div className="faq-list">{faqs.map(([question, answer]) => <section className="faq-item active" key={question}><h3>{question}</h3><p>{answer}</p></section>)}</div>
        <h2>Discuss Your {page.city} Property Matter</h2>
        <h3>Send the Property Location, Chronology and Documents</h3>
        <p>Send the available title papers, agreements, notices, court orders and a short chronology. We will identify the missing record, likely forum and practical next step before recommending litigation or a transaction.</p>
        <div className="hero-actions"><Link href="/contact/" className="button button-gold">Request Property Advice</Link><a href={`tel:${page.phone || firm.phone}`} className="button button-dark">Call {page.phone || firm.phone}</a></div>
      </div></article>
    </main><Footer />
  </>
}
