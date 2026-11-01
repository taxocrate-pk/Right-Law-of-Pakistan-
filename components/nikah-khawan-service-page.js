import Image from 'next/image'
import Link from 'next/link'
import { Footer } from './legal-site'
import KarachiShortCta from './karachi-short-cta'
import SectionImage from './section-image'
import sectionImages from '../lib/section-images'
import { firm } from '../lib/legal-data'
import { nikahKhawanPage as page } from '../lib/nikah-khawan-page'

const url = `https://rightlaw.pk/${page.slug}/`
const waLink = `https://wa.me/${firm.whatsapp}`
const telLink = `tel:${firm.phone.replace(/\s/g, '')}`
// Lead image: the owner-supplied section image (index 0) when present, otherwise the existing page image.
const leadSection = (sectionImages[`/${page.slug}/`] || [])[0]
const leadImage = leadSection ? leadSection.src : '/images/nikah-khawan-document-review.webp'
const lawyers = [
  { name: 'Syed Mohsin Ali Shah', designation: 'Advocate High Court', image: 'https://www.advocates.com.pk/Mohsin-Ali-Shah.png', copy: 'Founder of Right Law Associates, in legal practice since 1985. Advises on marriage documentation, Mahr, Nikah Nama conditions and the registration of Nikah in Karachi.' },
  { name: 'Sobia Mohsin', designation: 'Advocate, Head Of Family Practice', image: 'https://lawzana.com/storage/branches/9201/associates/26903/16746838381248.jpg', copy: 'Leads the Karachi family-law practice of Right Law Associates, covering marriage and Nikah documentation, Khula, maintenance, dower and custody. Reviews Nikah instructions before an appointment is confirmed.', href: '/best-family-and-divorce-lawyer-and-lady-advocate-in-karachi-sobia-mohsin-shah-legal-expertise-in-family-law/' },
]
const authorityRows = [
  ['Nikah Khawan / Qazi', 'Solemnises The Marriage', 'Identity, Age, Consent And Witnesses'],
  ['Licensed Nikah Registrar', 'Registers The Marriage (MFLO s. 5)', 'Licence, Union Council Area And Submission'],
  ['Union Council', 'Holds The Official Marriage Entry', 'Entry, Certified Copies And NADRA Certificate'],
  ['Right Law Associates', 'Legal Advice And Document Coordination', 'Mahr, Nikah Nama Terms And Special Issues'],
]
const workRows = [
  ['Before The Appointment', 'Identity, Age And Marital-Status Review', 'CNIC / NICOP / Passport And Prior-Marriage Evidence'],
  ['Before Signatures', 'Agree Mahr, Conditions And Witnesses', 'Accurate Nikah Nama Entries'],
  ['At The Ceremony', 'Offer And Acceptance Before Witnesses', 'Parties, Two Adult Witnesses And Nikah Khawan'],
  ['After The Ceremony', 'Registration Follow-Up', 'Signed Copy, Union Council Entry And Certificate'],
  ['For Overseas Use', 'Check The Receiving Authority’s List', 'Translation Or Attestation If Required'],
]
const hs = { h1: { fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 'clamp(28px,4vw,42px)', lineHeight: 1.15, maxWidth: 900, margin: '0 0 18px' } }

function Table({ title, headings, rows }) {
  return <div role="region" aria-label={title} tabIndex={0} style={{overflowX:'auto',margin:'20px 0 30px'}}><table style={{width:'100%',minWidth:520,borderCollapse:'collapse'}}><caption style={{textAlign:'left',fontWeight:700,paddingBottom:12}}>{title}</caption><thead><tr>{headings.map(h=><th key={h} scope="col" style={{textAlign:'left',border:'1px solid #d9e1de',padding:12}}>{h}</th>)}</tr></thead><tbody>{rows.map(row=><tr key={row[0]}>{row.map((c,i)=>i===0?<th key={c} scope="row" style={{textAlign:'left',border:'1px solid #d9e1de',padding:12}}>{c}</th>:<td key={c} style={{border:'1px solid #d9e1de',padding:12}}>{c}</td>)}</tr>)}</tbody></table></div>
}

function Lawyers() {
  return <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(240px,100%),1fr))',gap:20}}>{lawyers.map(l=><article key={l.name} style={{border:'1px solid #d9e1de',borderRadius:16,padding:20}}><figure style={{margin:0}}><Image unoptimized src={l.image} title={`${l.name} — ${l.designation}`} alt={`${l.name}, ${l.designation}, Right Law Associates Karachi`} width={128} height={160} loading="lazy" style={{objectFit:'contain',display:'block',marginBottom:16}}/><figcaption style={{fontSize:13,lineHeight:1.5,color:'#455d55',marginBottom:12}}>{l.name}, {l.designation}</figcaption></figure><h3>{l.name}</h3><p style={{fontWeight:700,margin:'0 0 8px'}}>{l.designation}</p><p>{l.copy}</p>{l.href&&<Link href={l.href}>Family Lawyer Sobia Mohsin In Karachi</Link>}</article>)}</div>
}

export default function NikahKhawanServicePage() {
  const schema = {'@context':'https://schema.org','@graph':[
    {'@type':'ImageObject','@id':`${url}#service-image`,contentUrl:`https://rightlaw.pk${leadImage}`,name:'Nikah Khawan In Karachi',caption:'Nikah Khawan Arrangements And Marriage Registration In Karachi',description:'Illustrative image for the Nikah Khawan, Qazi and Nikah Registrar service in Karachi.',representativeOfPage:true},
    ...lawyers.map(l=>({'@type':'ImageObject',contentUrl:l.image,name:`${l.name} — ${l.designation}`,caption:`${l.name}, ${l.designation}`,description:l.copy})),
    {'@type':'WebPage','@id':`${url}#webpage`,url,name:page.title,description:page.description,dateModified:'2026-11-01',inLanguage:'en-GB',reviewedBy:{'@type':'Person',name:'Syed Mohsin Ali Shah',jobTitle:'Advocate High Court'},publisher:{'@id':'https://rightlaw.pk/#organization'}},
    {'@type':'LegalService','@id':`${url}#service`,name:'Nikah Khawan In Karachi — Qazi And Nikah Registrar Coordination',url,serviceType:'Nikah Khawan arrangements, Nikah Nama review and marriage registration assistance',areaServed:{'@type':'City',name:'Karachi'},provider:{'@id':'https://rightlaw.pk/#organization'}},
    {'@type':'Organization','@id':'https://rightlaw.pk/#organization',name:firm.legalName,url:'https://rightlaw.pk/',telephone:firm.phone},
    {'@type':['LegalService','LocalBusiness'],'@id':'https://rightlaw.pk/#dha-office',name:'Right Law Associates — DHA Karachi Office',url:'https://rightlaw.pk/contact/',telephone:'+923316644789',address:{'@type':'PostalAddress',streetAddress:firm.dhaBranchAddress,addressLocality:'Karachi',addressRegion:'Sindh',addressCountry:'PK'},parentOrganization:{'@id':'https://rightlaw.pk/#organization'}},
    {'@type':['LegalService','LocalBusiness'],'@id':'https://rightlaw.pk/#jauhar-office',name:'Right Law Associates — Jauhar Karachi Office',url:'https://rightlaw.pk/contact/',telephone:'+923166644789',address:{'@type':'PostalAddress',streetAddress:firm.offices.karachiJohar.address,addressLocality:'Karachi',addressRegion:'Sindh',addressCountry:'PK'},parentOrganization:{'@id':'https://rightlaw.pk/#organization'}},
    {'@type':'FAQPage',mainEntity:page.faqs.map(([question,answer])=>({'@type':'Question',name:question,acceptedAnswer:{'@type':'Answer',text:answer}}))},
    {'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:'https://rightlaw.pk/'},{'@type':'ListItem',position:2,name:'Nikah Khawan In Karachi',item:url}]},
  ]}
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,'\\u003c')}}/><main className="dna-route-page">
    <nav aria-label="Breadcrumb" style={{background:'#f7f3eb',borderBottom:'1px solid #e3ddd2'}}><div className="container" style={{paddingTop:12,paddingBottom:12}}><ol style={{display:'flex',alignItems:'center',gap:8,flexWrap:'wrap',listStyle:'none',margin:0,padding:0,fontSize:14,lineHeight:1.5}}><li><Link href="/" style={{color:'#173b35',fontWeight:700,textDecoration:'none'}}>Home</Link></li><li aria-hidden="true" style={{color:'#7a8d86'}}>›</li><li aria-current="page" style={{color:'#455d55'}}>{page.title}</li></ol></div></nav>

    {/* Hero (D1): H1, "we offer" sentence, ticked chips, office address, WhatsApp button naming the service */}
    <section style={{background:'#173b35',color:'#fff',padding:'56px 0 46px'}}><div className="container">
      <h1 style={hs.h1}>Nikah Khawan, Qazi And Nikah Registrar In Karachi</h1>
      <p style={{maxWidth:840,lineHeight:1.75,color:'#fff',fontSize:17,margin:'0 0 18px'}}>{page.hero}</p>
      <ul style={{display:'flex',flexWrap:'wrap',gap:10,listStyle:'none',padding:0,margin:'0 0 18px'}}>{page.chips.map(c=><li key={c} style={{background:'#fff',color:'#173b35',borderRadius:999,padding:'7px 14px',fontSize:15,fontWeight:700}}>✓ {c}</li>)}</ul>
      <p style={{maxWidth:840,lineHeight:1.7,color:'#e7efec',margin:'0 0 6px'}}><strong style={{color:'#fff'}}>DHA office:</strong> {firm.dhaBranchAddress}</p>
      <p style={{maxWidth:840,lineHeight:1.7,color:'#e7efec',margin:'0 0 6px'}}><strong style={{color:'#fff'}}>Gulistan-e-Jauhar office:</strong> {firm.offices.karachiJohar.address}</p>
      <p style={{maxWidth:840,lineHeight:1.7,color:'#e7efec',margin:0}}><strong style={{color:'#fff'}}>Call or WhatsApp:</strong> <a style={{color:'#fff'}} href={telLink}>{firm.phone}</a></p>
      <div style={{display:'flex',gap:12,flexWrap:'wrap',marginTop:24}}><a href={waLink} className="button button-gold">Book Nikah Khawan On WhatsApp</a><a href={telLink} className="button button-outline-light">Call {firm.phone}</a></div>
    </div></section>

    {/* Lead image straight after the hero (D6 / D11) */}
    <section style={{background:'#fff'}}><div className="container" style={{paddingTop:20}}>
      {leadSection
        ? <SectionImage slug="nikah-khawan-qazi-and-nikah-registrar-in-karachi-pakistan" index={0} />
        : <figure style={{margin:0}}><Image src="/images/nikah-khawan-document-review.webp" title="Nikah Khawan In Karachi" alt="Marriage document folder, wedding rings and pen illustrating Nikah Khawan services in Karachi" width={1942} height={809} priority unoptimized style={{width:'100%',height:'auto',maxHeight:520,objectFit:'cover',display:'block',borderRadius:4}}/></figure>}
    </div></section>

    {/* Executive summary: completes the opening 200–300 words (D2) */}
    <section style={{background:'#fff'}}><div className="container route-article" style={{paddingTop:10}}>
      <h2>Nikah Khawan In Karachi — Advocate-Led Since 1985</h2>
      {page.summary.map(p=><p key={p.slice(0,24)}>{p}</p>)}
    </div></section>

    <KarachiShortCta />

    <section className="section" style={{background:'#fff'}}><div className="container dna-content-grid"><article className="route-article">
      {page.sections.map(s=><section id={`nikah-khawan-${s.id}`} key={s.id}>
        <h2>{s.h2}</h2>
        {s.lawyers&&<><p>Every Nikah instruction is reviewed by an advocate before the appointment is confirmed. The two lawyers below supervise our Nikah Khawan in Karachi bookings and the documentation that follows.</p><Lawyers/></>}
        {s.subs.map(([h3,copy])=><div key={h3}><h3>{h3}</h3><p>{copy}</p></div>)}
        {s.table==='authority'&&<Table title="Who Does What At A Nikah In Karachi" headings={['Person Or Office','Role','Check First']} rows={authorityRows}/>}
        {s.table==='work'&&<Table title="Nikah Appointment And Registration Checklist" headings={['Stage','Purpose','Records To Review']} rows={workRows}/>}
        {s.id==='roles'&&<p>For the certificate stage, see our guide to <Link href="/marriage-registration-nadra-marriage-certificate-karachi/">marriage registration and the NADRA marriage certificate in Karachi</Link>.</p>}
        {s.id==='requirements'&&<p>Read more about the wife’s dower in our <Link href="/mehar-mahr-in-islam/">guide to Mahr in Islam</Link> and about the form itself in our <Link href="/nikah-nama/">Nikah Nama guide</Link>.</p>}
        {s.id==='court-overseas'&&<p>See the <Link href="/court-marriage-procedure-in-pakistan/">court marriage procedure in Pakistan</Link> and our page on <Link href="/online-nikah-online-marriage-in-islam-and-pakistan/">online Nikah</Link>.</p>}
        {s.id==='existing-marriage'&&<p>Our guide to <Link href="/second-marriage-permission-in-pakistan/">second-marriage permission in Pakistan</Link> explains the Arbitration Council process.</p>}
        {s.image===1&&<SectionImage slug="nikah-khawan-qazi-and-nikah-registrar-in-karachi-pakistan" index={1} />}
        {s.image===2&&<SectionImage slug="nikah-khawan-qazi-and-nikah-registrar-in-karachi-pakistan" index={2} />}
      </section>)}

      <section style={{marginTop:36,padding:28,background:'#f7f3eb',borderLeft:'3px solid #c49a5a'}}><h2>How To Book Your Nikah Khawan In Karachi</h2><h3>Send Your Date, Venue And Documents</h3><p>Tell us your preferred date and venue, both parties’ CNIC details and whether either has been married before. Call or WhatsApp <a href={telLink}>{firm.phone}</a>, visit our DHA or Gulistan-e-Jauhar office, or <Link href="/contact/">request a consultation</Link>. We confirm the Qazi, witnesses, Nikah Nama terms, registration and fee in writing before the booking is fixed.</p><a href={waLink} className="button button-dark">Book Nikah Khawan On WhatsApp</a></section>

      <section id="nikah-khawan-faqs" style={{marginTop:36}}><h2>Frequently Asked Questions About Nikah, Qazi And Registration</h2>{page.faqs.map(([q,a])=><details key={q} style={{borderBottom:'1px solid #d9e1de',padding:'12px 0'}}><summary style={{cursor:'pointer'}}><h3 style={{display:'inline',margin:0}}>{q}</h3></summary><p style={{marginTop:10}}>{a}</p></details>)}</section>

      <section style={{marginTop:36}}><h2>Related Marriage Guides And Official Sources</h2><h3>Related Guides On RightLaw.pk</h3><p><Link href="/family-lawyers-in-karachi/">Family Lawyers in Karachi</Link>, <Link href="/marriage-registration-certificate/">Marriage Registration Certificate</Link>, <Link href="/nikah-nama/">Nikah Nama</Link>, <Link href="/mehar-mahr-in-islam/">Mahr in Islam</Link> and <Link href="/misyar-marriage-nikah-misyar-marriages/">Misyar Marriage</Link>.</p><h3>Statutes Referred To On This Page</h3><p>The <a href="https://pakistancode.gov.pk/pdffiles/administratordf5df7bd70945d88e28f6a85c1a9ef6b.pdf" target="_blank" rel="noopener noreferrer">Muslim Family Laws Ordinance, 1961</a> (sections 5, 6 and 10) and the <a href="https://www.sindhlaws.gov.pk/setup/publications_SindhCode/PUB-15-000083.pdf" target="_blank" rel="noopener noreferrer">Sindh Child Marriages Restraint Act, 2013</a>. Profile of <a href="https://lawzana.com/lawyer/right-law-associates/karachi/m-mohsin-ali-shah-26902" target="_blank" rel="noopener noreferrer">Syed Mohsin Ali Shah on Lawzana</a>. Network resources: <a href="https://qanoonhouse.com/">Qanoon House</a> and <a href="https://court-marriage.com/">Court Marriage Services</a>.</p></section>

      <section style={{marginTop:36,padding:20,background:'#eef4f1',fontSize:14,lineHeight:1.7}}><p style={{margin:0}}><strong>Reviewed by:</strong> {page.reviewedBy}</p><p style={{margin:0}}><strong>Published by:</strong> Right Law Associates, RightLaw.pk</p><p style={{margin:0}}><strong>Last updated:</strong> {page.lastUpdated}</p><p style={{margin:'8px 0 0'}}>General information only; each Nikah needs review of identity, age, consent and documents. Union Councils and NADRA control official records and their charges.</p></section>
    </article>
    <aside style={{alignSelf:'start',background:'#f7f3eb',padding:24}}><h2>Nikah Checklist</h2><h3>Bring With You</h3><ul><li>Bride’s And Groom’s Original CNIC / NICOP / Passport</li><li>CNICs Of Two Adult Witnesses</li><li>Divorce, Khula Or Death Record If Previously Married</li><li>Agreed Mahr Amount And Payment Terms</li><li>Preferred Date And Venue</li></ul><a href={waLink} className="button button-dark" style={{display:'inline-block',margin:'8px 0 18px'}}>Book Nikah Khawan On WhatsApp</a><h3>On This Page</h3><nav aria-label="Nikah Khawan page sections"><ul>{page.sections.map(s=><li key={s.id}><a href={`#nikah-khawan-${s.id}`}>{s.h2}</a></li>)}<li><a href="#nikah-khawan-faqs">FAQs</a></li></ul></nav></aside></div></section>
  </main><Footer/></>
}
