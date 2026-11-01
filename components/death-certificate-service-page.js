import Image from 'next/image'
import Link from 'next/link'
import { Footer } from './legal-site'
import KarachiShortCta from './karachi-short-cta'
import SectionImage from './section-image'
import { firm } from '../lib/legal-data'
import { deathCertificatePage as page } from '../lib/death-certificate-page'

// Refined 1 November 2026 (SEO DNA 2.07 / 2.07B / 2.07D, Existing-Page Refinement Policy).
// Layout order: hero -> lead image -> Karachi office strip -> content with sidebar -> sources -> FAQs -> credit block.
const url = `https://rightlaw.pk/${page.slug}/`
const dha = { name: 'DHA Office', address: firm.dhaBranchAddress, phone: '+92 331 6644789', compact: '923316644789' }
const jauhar = { name: 'Gulistan-e-Jauhar Office', address: firm.offices.karachiJohar.address, phone: '+92 316 6644789', compact: '923166644789' }
const lawyers = [
  { name: 'S. M. Akhtar Rizvi', designation: 'Advocate Supreme Court', image: '/images/syed-akhtar-rizvi.webp', copy: 'Senior Supreme Court advocate associated with our legal team. His senior litigation guidance is relevant where disputed civil records or connected inheritance proceedings require experienced counsel.', href: 'https://scbap.com/wp-content/uploads/2025/11/Directory-2025-26.pdf', label: 'SCBAP Directory (PDF)' },
  { name: 'Syed Mohsin Ali Shah', designation: 'Advocate High Court', image: 'https://www.advocates.com.pk/Mohsin-Ali-Shah.png', copy: 'Legal practice since 1985, with more than four decades of experience. Advises on civil documentation, succession, inheritance and the legal consequences of inconsistent family records.', href: 'https://lawzana.com/lawyer/right-law-associates/karachi/m-mohsin-ali-shah-26902', label: 'Professional Profile' },
]
const sources = [
  ['NADRA — Civil Registration Ecosystem (CRMS)', 'https://www.nadra.gov.pk/ecosystem'],
  ['NADRA — Cancellation Certificates', 'https://www.nadra.gov.pk/identityDocument/certificates/cancellation?tab=cancellation'],
  ['ICT Administration — Death Registration', 'https://ictadministration.gov.pk/death-registration/'],
  ['Ministry of Foreign Affairs — Attestation And Apostille SOPs', 'https://apostille.mofa.gov.pk/sops'],
]
const internalLinks = [
  ['Succession Certificate And Letter Of Administration', '/succession-certificate-letter-of-administration/'],
  ['Succession Certificate Guide For Legal Heirs', '/succession-certificate-in-pakistan-for-legal-heirs/'],
  ['Civil Certificates In Pakistan', '/civil-certificates-in-pakistan/'],
  ['Union Council Residence Verification Certificate', '/union-council-residence-verification-certificate/'],
  ['NADRA Marriage Certificate And Marriage Registration In Karachi', '/marriage-registration-nadra-marriage-certificate-karachi/'],
  ['Property Dispute Services', '/property-disputes/'],
]
const chipStyle = { display: 'inline-flex', alignItems: 'center', gap: 6, background: '#24504a', border: '1px solid #5d8a80', color: '#fff', borderRadius: 999, padding: '7px 14px', fontSize: 15, lineHeight: 1.3 }
const heroH3 = { color: '#fff', fontSize: 'clamp(18px,2vw,21px)', lineHeight: 1.3, margin: '22px 0 8px' }

function Table({ title, headings, rows }) {
  return <div role="region" aria-label={title} tabIndex={0} style={{overflowX:'auto',margin:'20px 0 30px'}}><table style={{width:'100%',minWidth:520,borderCollapse:'collapse'}}><caption style={{textAlign:'left',fontWeight:700,paddingBottom:12}}>{title}</caption><thead><tr>{headings.map(h=><th key={h} scope="col" style={{textAlign:'left',border:'1px solid #d9e1de',padding:12}}>{h}</th>)}</tr></thead><tbody>{rows.map(row=><tr key={row[0]}>{row.map((c,i)=>i===0?<th key={c} scope="row" style={{textAlign:'left',border:'1px solid #d9e1de',padding:12}}>{c}</th>:<td key={c} style={{border:'1px solid #d9e1de',padding:12}}>{c}</td>)}</tr>)}</tbody></table></div>
}

function ServiceCards() {
  // Six cards: complete rows at three, two or one per row.
  return <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(200px,100%),1fr))',gap:16,margin:'18px 0 26px'}}>{page.services.map(([t,c])=><article key={t} style={{border:'1px solid #d9e1de',borderTop:'3px solid #c49a5a',borderRadius:10,padding:'16px 18px',background:'#fbfaf7'}}><h4 style={{margin:'0 0 6px',fontSize:17}}>{t}</h4><p style={{margin:0,fontSize:15,lineHeight:1.6}}>{c}</p></article>)}</div>
}

export default function DeathCertificateServicePage() {
  const schema = {'@context':'https://schema.org','@graph':[
    {'@type':'WebPage','@id':`${url}#webpage`,url,name:page.title,description:page.description,dateModified:'2026-11-01',inLanguage:'en-GB',reviewedBy:{'@type':'Person',name:'Syed Mohsin Ali Shah',jobTitle:'Advocate High Court'},publisher:{'@id':'https://rightlaw.pk/#organization'}},
    ...lawyers.map(l=>({'@type':'ImageObject',contentUrl:l.image.startsWith('https://')?l.image:`https://rightlaw.pk${l.image}`,name:`${l.name} — ${l.designation}`,caption:`${l.name}, ${l.designation}`,description:l.copy})),
    {'@type':'LegalService','@id':`${url}#service`,name:'NADRA Death Certificate Legal And Documentation Assistance',url,serviceType:'Death certificate registration, verification, correction and duplicate assistance',areaServed:'Pakistan',provider:{'@id':'https://rightlaw.pk/#organization'}},
    {'@type':'Organization','@id':'https://rightlaw.pk/#organization',name:firm.legalName,url:'https://rightlaw.pk/',telephone:firm.phone},
    {'@type':['LegalService','LocalBusiness'],'@id':'https://rightlaw.pk/#dha-office',name:'Right Law Associates — DHA Karachi Office',url:'https://rightlaw.pk/contact',telephone:`+${dha.compact}`,address:{'@type':'PostalAddress',streetAddress:dha.address,addressLocality:'Karachi',addressRegion:'Sindh',addressCountry:'PK'},parentOrganization:{'@id':'https://rightlaw.pk/#organization'}},
    {'@type':['LegalService','LocalBusiness'],'@id':'https://rightlaw.pk/#jauhar-office',name:'Right Law Associates — Jauhar Karachi Office',url:'https://rightlaw.pk/contact',telephone:`+${jauhar.compact}`,address:{'@type':'PostalAddress',streetAddress:jauhar.address,addressLocality:'Karachi',addressRegion:'Sindh',addressCountry:'PK'},parentOrganization:{'@id':'https://rightlaw.pk/#organization'}},
    {'@type':'FAQPage',mainEntity:page.faqs.map(([question,answer])=>({'@type':'Question',name:question,acceptedAnswer:{'@type':'Answer',text:answer}}))},
    {'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:'https://rightlaw.pk/'},{'@type':'ListItem',position:2,name:'NADRA Death Certificate',item:url}]},
  ]}
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,'\\u003c')}}/><main className="dna-route-page">
    <nav aria-label="Breadcrumb" style={{background:'#f7f3eb',borderBottom:'1px solid #e3ddd2'}}><div className="container" style={{paddingTop:12,paddingBottom:12}}><ol style={{display:'flex',alignItems:'center',gap:8,flexWrap:'wrap',listStyle:'none',margin:0,padding:0,fontSize:14,lineHeight:1.5}}><li><Link href="/" style={{color:'#173b35',fontWeight:700,textDecoration:'none'}}>Home</Link></li><li aria-hidden="true" style={{color:'#7a8d86'}}>›</li><li aria-current="page" style={{color:'#455d55'}}>{page.title}</li></ol></div></nav>

    <section style={{background:'#173b35',color:'#fff',padding:'64px 0 50px'}}><div className="container">
      <h1 style={{fontFamily:'Arial, Helvetica, sans-serif',fontSize:'clamp(28px,3.4vw,42px)',lineHeight:1.15,maxWidth:950,margin:'0 0 16px'}}>{page.title}</h1>
      <h2 style={{color:'#fff',fontSize:'clamp(22px,2.6vw,30px)',lineHeight:1.2,margin:'0 0 14px'}}>Death Certificate Registration, Online Verification And Corrections</h2>
      <p style={{maxWidth:840,lineHeight:1.75,color:'#fff',fontSize:17,margin:'0 0 18px'}}>{page.hero}</p>
      <ul aria-label="Service highlights" style={{display:'flex',flexWrap:'wrap',gap:10,listStyle:'none',padding:0,margin:'0 0 8px'}}>{page.chips.map(c=><li key={c} style={chipStyle}><span aria-hidden="true">✓</span>{c}</li>)}</ul>
      <h3 style={heroH3}>Advocate-Led NADRA Death Certificate Help Since 1985</h3>
      <p style={{maxWidth:840,lineHeight:1.75,color:'#e7efec',margin:0}}>Every file is reviewed under the supervision of Advocate High Court Syed Mohsin Ali Shah, in practice since 1985, with Supreme Court counsel available where a disputed record or connected inheritance case needs senior attention. We assist families in Karachi, Islamabad, Lahore and other cities, and overseas Pakistanis acting through an accepted representative.</p>
      <h3 style={heroH3}>Karachi Offices, Phone And WhatsApp</h3>
      <p style={{maxWidth:840,lineHeight:1.75,color:'#e7efec',margin:'0 0 6px'}}><strong style={{color:'#fff'}}>DHA:</strong> {dha.address}. Call or WhatsApp <a style={{color:'#fff'}} href={`tel:+${dha.compact}`}>{dha.phone}</a>.</p>
      <p style={{maxWidth:840,lineHeight:1.75,color:'#e7efec',margin:0}}><strong style={{color:'#fff'}}>Gulistan-e-Jauhar:</strong> {jauhar.address}. Call or WhatsApp <a style={{color:'#fff'}} href={`tel:+${jauhar.compact}`}>{jauhar.phone}</a>.</p>
      <div style={{display:'flex',gap:12,flexWrap:'wrap',marginTop:26}}><a href={`https://wa.me/${dha.compact}`} className="button button-gold">Start Death Certificate Help On WhatsApp</a><a href={`https://wa.me/${jauhar.compact}`} className="button button-outline-light">WhatsApp The Jauhar Office</a><Link href="/contact/" className="button button-outline-light">Book A Consultation</Link></div>
    </div></section>

    <section style={{background:'#fff'}}><div className="container">
      <SectionImage slug="nadra-computerized-death-certificate-online-verification-check" index={0} />
    </div></section>

    <KarachiShortCta />

    <section className="section" style={{background:'#fff'}}><div className="container dna-content-grid"><article className="route-article">
      {page.sections.map(([title,subtitle,copy,subs],i)=><section id={`death-certificate-${i+1}`} key={title}>
        <h2>{title}</h2><h3>{subtitle}</h3><p>{copy}</p>
        {i===0&&<>{subs.map(([h,c])=><section key={h}><h3>{h}</h3><p>{c}</p></section>)}<ServiceCards/></>}
        {i===4&&<ol style={{paddingLeft:22}}>{subs.map(([h,c])=><li key={h} style={{marginBottom:14}}><h4 style={{margin:'0 0 4px'}}>{h}</h4><p style={{margin:0}}>{c}</p></li>)}</ol>}
        {i!==0&&i!==4&&(subs||[]).map(([h,c])=><section key={h}><h3>{h}</h3><p>{c}</p></section>)}
        {i===1&&<Table title="Death Certificate Issuing And Related Authorities" headings={['Authority','Role','Check First']} rows={page.authorityRows}/>}
        {i===3&&<SectionImage slug="nadra-computerized-death-certificate-online-verification-check" index={1} />}
        {i===8&&<Table title="Death Certificate Work And Records To Review" headings={['Work','Purpose','Records To Review']} rows={page.workRows}/>}
        {i===9&&<SectionImage slug="nadra-computerized-death-certificate-online-verification-check" index={2} />}
      </section>)}

      <section><h2>Lawyers For NADRA Death Certificate And Inheritance Matters</h2><h3>Senior Counsel And Documentary Review</h3><div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(240px,100%),1fr))',gap:20}}>{lawyers.map(l=><article key={l.name} style={{border:'1px solid #d9e1de',borderRadius:16,padding:20}}><figure style={{margin:0}}><Image unoptimized src={l.image} title={`${l.name} — ${l.designation}`} alt={`${l.name}, ${l.designation}`} width={128} height={160} style={{objectFit:'contain',display:'block',marginBottom:16}}/><figcaption style={{fontSize:13,lineHeight:1.5,color:'#455d55',marginBottom:12}}>{l.name}, {l.designation}</figcaption></figure><h3>{l.name}</h3><h4>{l.designation}</h4><p>{l.copy}</p><a href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a></article>)}</div></section>

      <section style={{marginTop:36,padding:28,background:'#f7f3eb',borderLeft:'3px solid #c49a5a'}}><h2>Start Your Death Certificate Document Review</h2><h3>Registration, Verification, Correction Or Duplicate</h3><p>Tell us the city, the papers you hold and where the certificate will be used. Call or WhatsApp our DHA office on <a href={`tel:+${dha.compact}`}>{dha.phone}</a> or our Gulistan-e-Jauhar office on <a href={`tel:+${jauhar.compact}`}>{jauhar.phone}</a>, or <Link href="/contact/">request a consultation</Link>, and we will identify the right death certificate work for your family.</p><a href={`https://wa.me/${dha.compact}`} className="button button-dark">Start Death Certificate Help On WhatsApp</a> <a href={`https://wa.me/${jauhar.compact}`} className="button button-dark">Jauhar Office WhatsApp</a></section>

      <section><h2>Death Certificate Sources And Related Legal Guides</h2><h3>Official Government Information</h3><ul>{sources.map(([label,href])=><li key={href}><a href={href} target="_blank" rel="noopener noreferrer">{label}</a></li>)}</ul><h3>Related Right Law Guides</h3><ul>{internalLinks.map(([label,href])=><li key={href}><Link href={href}>{label}</Link></li>)}</ul><h3>Connected Legal Resources</h3><p>Further information is available through <a href="https://qanoonhouse.com/">Qanoon House</a>, <a href="https://qanoon.online/">Qanoon Online</a> and <a href="https://karachilawyers.com.pk/">Karachi Lawyers</a>.</p></section>

      <section><h2>Frequently Asked Questions About The NADRA Death Certificate</h2>{page.faqs.map(([q,a])=><details key={q} style={{borderBottom:'1px solid #d9e1de',padding:'12px 0'}}><summary style={{cursor:'pointer'}}><h3 style={{display:'inline',margin:0}}>{q}</h3></summary><p style={{marginTop:10}}>{a}</p></details>)}</section>

      <section style={{marginTop:36,padding:24,background:'#eef4f1'}}><h2>Editorial Responsibility For This Death Certificate Guide</h2><h3>Advocate Syed Mohsin Ali Shah — Advocate High Court</h3><p>This guide forms part of the Right Law Associates editorial process. The correct procedure in any case requires review of the facts, the documents and the registration office’s current requirements. Right Law Associates is a private legal service provider; government authorities control their records, decisions and charges.</p></section>
      <section style={{marginTop:16,padding:20,background:'#eef4f1',fontSize:14,lineHeight:1.7}}><p style={{margin:0}}><strong>Reviewed by:</strong> {page.reviewedBy}</p><p style={{margin:0}}><strong>Published by:</strong> Right Law Associates, RightLaw.pk</p><p style={{margin:0}}><strong>Last updated:</strong> {page.lastUpdated}</p></section>
    </article>
    <aside style={{alignSelf:'start',background:'#f7f3eb',padding:24}}><h2>Death Certificate Checklist</h2><h3>Bring With You</h3><ul><li>City And Place Of Death</li><li>Deceased’s CNIC Or NICOP</li><li>Hospital Or Burial Evidence</li><li>Your CNIC And Proof Of Relationship</li><li>Existing Certificate Or Receipt</li><li>Purpose And Receiving Authority</li></ul><a href={`https://wa.me/${dha.compact}`} className="button button-dark" style={{display:'inline-block',margin:'4px 0 18px'}}>Send Papers On WhatsApp</a><h3>On This Page</h3><nav aria-label="Death certificate page sections"><ul>{page.sections.map(([title],i)=><li key={title}><a href={`#death-certificate-${i+1}`}>{title}</a></li>)}</ul></nav></aside></div></section>
  </main><Footer/></>
}
