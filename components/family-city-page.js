import Link from 'next/link'
import Image from 'next/image'
import { Footer } from './legal-site'
import { firm } from '../lib/legal-data'
import { familyCityKeys, familyCityPages, reviewedBy, lastUpdated } from '../lib/family-city-data'

const digits = (phone) => phone.replace(/\D/g, '')

export function familyCityMetadata(key) {
  const page = familyCityPages[key]
  const url = `https://rightlaw.pk/${page.slug}/`
  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical: url },
    openGraph: { title: page.title, description: page.description, url, siteName: 'Right Law Associates', type: 'website', images: [{ url: `https://rightlaw.pk${page.image}`, width: 1600, height: 700, alt: page.alt }] },
  }
}

export default function FamilyCityPage({ pageKey }) {
  const page = familyCityPages[pageKey]
  const url = `https://rightlaw.pk/${page.slug}/`
  const located = page.offices.filter((o) => o.address)
  const graph = [
    { '@type': 'LegalService', '@id': `${url}#service`, name: `Family Lawyers in ${page.city}`, url, description: page.description, telephone: `+${digits(page.offices[0].phone)}`, areaServed: { '@type': 'City', name: page.city }, image: `https://rightlaw.pk${page.image}`, provider: { '@type': 'Organization', '@id': 'https://rightlaw.pk/#organization', name: firm.legalName, url: 'https://rightlaw.pk/' } },
    ...located.map((o, i) => ({ '@type': 'LocalBusiness', '@id': `${url}#office-${i + 1}`, name: `Right Law Associates — ${o.name}`, url, telephone: `+${digits(o.phone)}`, address: { '@type': 'PostalAddress', streetAddress: o.address, addressLocality: page.city, addressRegion: page.province, addressCountry: 'PK' } })),
    { '@type': 'FAQPage', mainEntity: page.faqs.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })) },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rightlaw.pk/' }, { '@type': 'ListItem', position: 2, name: 'Family Law in Pakistan', item: 'https://rightlaw.pk/family-law-in-pakistan/' }, { '@type': 'ListItem', position: 3, name: `Family Lawyers in ${page.city}`, item: url }] },
  ]
  const others = [...familyCityKeys.filter((k) => k !== pageKey).map((k) => [`Family Lawyers in ${familyCityPages[k].city}`, `/${familyCityPages[k].slug}/`]), ['Family Lawyers in Lahore', '/family-law-in-lahore-divorce-khula-court-marriage-online-nikah/']]
    .filter(([, href]) => !page.links.some(([, h]) => h === href))
  const t = page.table

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c') }} />
    <main className="property-law-page family-law-page">
      <nav aria-label="Breadcrumb" style={{ background: '#f7f3eb', borderBottom: '1px solid #e3ddd2' }}><div className="container" style={{ paddingTop: 12, paddingBottom: 12 }}><ol style={{ display: 'flex', gap: 8, flexWrap: 'wrap', listStyle: 'none', margin: 0, padding: 0, fontSize: 14 }}><li><Link href="/">Home</Link></li><li aria-hidden="true">›</li><li><Link href="/family-law-in-pakistan/">Family Law in Pakistan</Link></li><li aria-hidden="true">›</li><li aria-current="page">Family Lawyers in {page.city}</li></ol></div></nav>
      <section className="hero"><div className="container property-hero">
        <p className="eyebrow gold">Family Law • {page.city}</p>
        <h1>{page.h1}</h1>
        <p className="hero-lede">{page.intro}</p>
        <div className="hero-actions">
          <Link href="/contact/" className="button button-gold">Book a Family Law Consultation</Link>
          {page.offices.map((o) => <a key={o.name} href={`https://wa.me/${digits(o.phone)}`} className="button button-outline-light">WhatsApp {page.offices.length > 1 ? o.name : ''} {o.phone}</a>)}
        </div>
      </div></section>
      <article className="section family-article"><div className="container family-article-inner">
        <figure style={{ margin: '0 0 28px' }}><Image src={page.image} width={1600} height={700} sizes="(max-width: 800px) 100vw, 940px" priority alt={page.alt} style={{ width: '100%', height: 'auto', display: 'block' }} /></figure>
        <h2>Family Lawyers in {page.city}: Offices and Appointments</h2>
        <h3>{page.offices.length > 1 ? `Two ${page.city} Offices` : located.length ? `Our ${page.city} Office` : `Appointments in ${page.city}`}</h3>
        {page.offices.map((o) => <p key={o.name}><strong>{o.name}:</strong> {o.address ? `${o.address}. ` : 'Appointments are arranged by phone; the meeting place is confirmed when you book. '}Call or WhatsApp <a href={`tel:+${digits(o.phone)}`}>{o.phone}</a>.</p>)}
        <h2>Lawyers Handling Family Cases in {page.city}</h2>
        {page.lawyers.map((l) => <div key={l.name} className={`senior-counsel-card${l.image ? '' : ' senior-counsel-card-text-only'}`}>
          {l.image && <Image unoptimized width={92} height={108} className="senior-counsel-photo" src={l.image} alt={`${l.name}, ${l.role}`} />}
          <div><h3>{l.name} — {l.role}</h3><p>{l.text}</p></div>
        </div>)}
        <p>Mohsin Ali Shah, Chairman, oversees the network and client dealing; his own legal practice dates from 1985. Courtroom representation in {page.city} is by the advocate named above for each matter.</p>
        {page.sections.map(([title, copy], i) => <section key={title} style={{ marginTop: 30 }}>
          <h2>{title}</h2><p>{copy}</p>
          {i === 2 && <div className="property-table-wrap" role="region" aria-label={t.title} tabIndex={0}><table><caption style={{ textAlign: 'left', fontWeight: 700, paddingBottom: 10 }}>{t.title}</caption><thead><tr>{t.headings.map((h) => <th key={h} scope="col">{h}</th>)}</tr></thead><tbody>{t.rows.map((r) => <tr key={r[0]}>{r.map((c, j) => j === 0 ? <th key={j} scope="row">{c}</th> : <td key={j}>{c}</td>)}</tr>)}</tbody></table></div>}
        </section>)}
        <h2>Family Lawyers in {page.city}: Areas We Cover</h2>
        <p>We act for clients from {page.localities}. The address of the parties decides which court hears the case; the area list shows where our clients come from, not a promise that every case belongs in one court.</p>
        <h2>Related Family Law Pages</h2>
        <ul>
          <li><Link href="/family-law-in-pakistan/">Family Law in Pakistan</Link></li>
          <li><Link href="/divorce-law/">Divorce Law in Pakistan</Link></li>
          <li><Link href="/dissolution-of-marriage-in-pakistan/">Khula and Dissolution of Marriage</Link></li>
          <li><Link href="/child-custody/">Child Custody in Pakistan</Link></li>
          <li><Link href="/maintenance-in-pakistan/">Maintenance in Pakistan</Link></li>
          {page.links.map(([label, href]) => <li key={href}><Link href={href}>{label}</Link></li>)}
          {others.map(([label, href]) => <li key={href}><Link href={href}>{label}</Link></li>)}
        </ul>
        <h2>Family Lawyers in {page.city}: Frequently Asked Questions</h2>
        <div className="faq-list">{page.faqs.map(([q, a]) => <section className="faq-item active" key={q}><h3>{q}</h3><p>{a}</p></section>)}</div>
        <h2>Family Lawyers in {page.city}: Book a Consultation</h2>
        <p>Send a short chronology, the Nikah Nama and any notices or court orders. We will tell you which court has jurisdiction, what to claim and what evidence to collect before anything is filed.</p>
        <div className="hero-actions"><Link href="/contact/" className="button button-gold">Contact Right Law Associates</Link>{page.offices.map((o) => <a key={o.name} href={`tel:+${digits(o.phone)}`} className="button button-dark">Call {o.phone}</a>)}</div>
        <section style={{ marginTop: 36 }}><h2>Sources</h2><ul>{page.sources.map(([label, href]) => <li key={href}><a href={href} target="_blank" rel="noopener noreferrer">{label}</a></li>)}</ul></section>
        <section style={{ marginTop: 24, padding: 20, background: '#eef4f1', fontSize: 14, lineHeight: 1.7 }}>
          <p style={{ margin: 0 }}><strong>Reviewed by:</strong> {reviewedBy}</p>
          <p style={{ margin: 0 }}><strong>Published by:</strong> Right Law Associates, RightLaw.pk</p>
          <p style={{ margin: 0 }}><strong>Last updated:</strong> {lastUpdated}</p>
          <p style={{ margin: '8px 0 0' }}>General legal information. Advice depends on the documents and facts of your case.</p>
        </section>
      </div></article>
    </main><Footer />
  </>
}
