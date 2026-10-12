import Link from 'next/link'
import {Footer} from './legal-site'
import BatchImage from './batch-image'
import BatchKarachiOffices from './batch-karachi-offices'
import {batchImages, imageSchema, karachiOffice as office} from '../lib/batch-one-assets'
export default function BatchFamilyService({page,slug}) {
  const url=`https://rightlaw.pk/${slug}/`
  const city=slug.includes('karachi')
  const schema={'@context':'https://schema.org','@graph':[
    {'@type':'LegalService','@id':`${url}#service`,name:page.title,url,telephone:office.phone,areaServed:city?'Karachi':'Pakistan',provider:{'@id':'https://rightlaw.pk/#organization'}},
    {'@type':'Organization','@id':'https://rightlaw.pk/#organization',name:'Right Law Associates (Pvt) Limited',url:'https://rightlaw.pk/'},
    ...[['Johar',office.johar],['DHA',office.dha]].map(([name,address])=>({'@type':'LocalBusiness','@id':`${url}#${name.toLowerCase()}-office`,name:`Right Law Associates — ${name}, Karachi`,telephone:office.phone,address:{'@type':'PostalAddress',streetAddress:address,addressLocality:'Karachi',addressRegion:'Sindh',addressCountry:'PK'},url:'https://rightlaw.pk/contact/'})),
    imageSchema(page.image,`${url}#primaryimage`),imageSchema(batchImages.rizvi,`${url}#senior-portrait`),
    {'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:'https://rightlaw.pk/'},{'@type':'ListItem',position:2,name:page.title,item:url}]},
    {'@type':'FAQPage',mainEntity:page.faqs.map(([name,text])=>({'@type':'Question',name,acceptedAnswer:{'@type':'Answer',text}}))}
  ]}
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,'\\u003c')}}/><main className="dna-route-page">
    <nav aria-label="Breadcrumb" className="container" style={{paddingTop:16,paddingBottom:16}}><Link href="/">Home</Link> <span aria-hidden="true">›</span> <span>{page.title}</span></nav>
    <section className="hero"><div className="container" style={{paddingTop:64,paddingBottom:54}}><p className="eyebrow gold">{page.eyebrow}</p><h1 style={{maxWidth:960,fontSize:'clamp(34px,5vw,62px)',lineHeight:1.12}}>{page.title}</h1><p className="hero-lede">{page.intro}</p><div className="hero-actions"><a href={`tel:${office.tel}`} className="button button-gold">Call {office.phone}</a><Link href="/contact/" className="button button-outline-light">Book An Appointment</Link></div></div></section>
    <BatchKarachiOffices/>
    <section className="section" style={{background:'#fff'}}><div className="container dna-content-grid"><article className="route-article">
      <h2>{page.overview}</h2><h3>Case Assessment And The Appropriate Legal Remedy</h3><p>Reviewed by Mohsin Ali Shah, Advocate High Court. Advice is based on your documents, jurisdiction and current proceedings.</p>
      <BatchImage asset={page.image} priority/>
      <div data-editorial-body>{page.sections.map(([title,subtitle,copy])=><section key={title}><h2>{title}</h2><h3>{subtitle}</h3><p>{copy}</p></section>)}</div>
      <h2>Legal Team And Senior Case Supervision</h2><h3>Practice Areas And Court Assignment</h3><p>Shankar Lal Kataria handles family-law matters in Karachi. Sobia Mohsin advises on divorce, khula, custody and associated financial claims. Tahir Pervez Qureshi supports relevant civil and connected litigation. Syed M. Akhtar Rizvi, Advocate Supreme Court, is relevant where senior or appellate involvement is required; assignment depends on the actual forum and case.</p>
      <h2>Compare The Work Before Instructing A Lawyer</h2><div style={{overflowX:'auto'}} role="region" aria-label="Case preparation comparison" tabIndex={0}><table style={{width:'100%',borderCollapse:'collapse'}}><thead><tr>{['Work','Purpose','Record'].map(x=><th scope="col" key={x} style={{textAlign:'left',padding:12,border:'1px solid #d9e1de'}}>{x}</th>)}</tr></thead><tbody>{[['Consultation','Identify the legal issue','Chronology and complete documents'],['Application','Frame the requested relief','Instructions and supporting evidence'],['Representation','Handle agreed court proceedings','Pleadings, notices and orders']].map(row=><tr key={row[0]}>{row.map(x=><td key={x} style={{padding:12,border:'1px solid #d9e1de'}}>{x}</td>)}</tr>)}</tbody></table></div>
      <h2>Official Legislation And Connected Services</h2><h3>Sources For Case-Specific Review</h3><ul>{page.sources.map(([name,href])=><li key={href}><a href={href} target="_blank" rel="noopener noreferrer">{name}</a></li>)}</ul><p>Read the statutory framework with the applicable provincial Family Courts law and court directions.</p><ul>{page.related.map(([name,href])=><li key={href}><Link href={href}>{name}</Link></li>)}</ul>
      <section data-faqs><h2>Questions Before Your Appointment</h2>{page.faqs.map(([q,a])=><section key={q}><h3>{q}</h3><p>{a}</p></section>)}</section>
      <h2>Arrange A Telephone Appointment</h2><h3>Explain Your Matter And Any Hearing Date</h3><p>Call the Karachi office to agree the appropriate consultation and professional scope. Bring complete documents to the arranged appointment.</p><a href={`tel:${office.tel}`} className="button button-dark">Call {office.phone}</a>
    </article><aside style={{alignSelf:'start'}}><h2>Senior Counsel For Relevant Proceedings</h2><BatchImage asset={batchImages.rizvi} portrait/><p>Syed M. Akhtar Rizvi, Advocate Supreme Court of Pakistan.</p><h3>Preparing Your Instructions</h3><p>Keep complete orders, identity documents and a concise chronology available for review.</p></aside></div></section>
  </main><Footer/></>
}
