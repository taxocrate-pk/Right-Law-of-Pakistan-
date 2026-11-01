import Image from 'next/image'
import Link from 'next/link'
import { Footer } from './legal-site'
import KarachiShortCta from './karachi-short-cta'
import SectionImage from './section-image'
import sectionImages from '../lib/section-images'
import { firm } from '../lib/legal-data'
import { sobiaFamilyLawyerPage as page } from '../lib/sobia-family-lawyer-page'

const url = `https://rightlaw.pk/${page.slug}/`
const lawyers = [
  { name: 'Sobia Mohsin', designation: 'Advocate And Director Legal', image: 'https://lawzana.com/storage/branches/9201/associates/26903/16746838381248.jpg', copy: 'Family law expert at Right Law Associates, Karachi, handling khula, divorce, child custody, maintenance and matrimonial documentation. Also works in corporate taxation. WhatsApp 0316 1119655 to request a consultation with her.' },
  { name: 'S. M. Akhtar Rizvi', designation: 'Advocate Supreme Court', image: '/images/syed-akhtar-rizvi.webp', copy: 'Senior Supreme Court advocate associated with our Karachi legal team. His litigation guidance is relevant to disputed marital status and connected family proceedings requiring experienced counsel.' },
]
const caseRows = [
  ['Khula / Dissolution', 'Family Courts Act 1964 s.10(4); DMMA 1939 s.2', 'Nikah Nama, CNIC, facts of the marriage and any pending case'],
  ['Talaq', 'MFLO 1961 s.7 (notice to Union Council chairman, 90 days)', 'Talaq notice, proof of delivery, Union Council papers'],
  ['Custody / Guardianship', 'Guardians and Wards Act 1890 ss.17, 19, 25', 'B-Form or birth record, school and medical papers, any order'],
  ['Maintenance', 'Family Courts Act s.17A; MFLO s.9', 'Expense schedule, receipts, evidence of income and payments'],
  ['Mahr / Dowry Articles', 'MFLO s.10; Dowry and Bridal Gifts (Restriction) Act 1976 s.5', 'Nikah Nama dower terms, list of articles, receipts, photographs'],
]
const workRows = [
  ['First Consultation', 'Identify your objective and the right legal route', 'Chronology and complete documents'],
  ['Case Preparation', 'Draft the suit, reply or notice', 'Signed instructions and supporting records'],
  ['Representation', 'Hearings, evidence and interim applications', 'Hearing dates and witness details'],
  ['After the Order', 'Union Council, certificate or compliance steps', 'Certified copy of the decree or order'],
]
const offices = [
  { name: 'DHA Phase 7 Office', address: firm.dhaBranchAddress, phone: '+92 331 6644789', wa: '923316644789' },
  { name: 'Gulistan-e-Jauhar Office', address: firm.offices.karachiJohar.address, phone: '+92 316 6644789', wa: '923166644789' },
]
const slugKey = `/${page.slug}/`
const hasLeadSectionImage = Boolean((sectionImages[slugKey] || [])[0])

function Table({ title, headings, rows }) {
  return <div role="region" aria-label={title} tabIndex={0} style={{overflowX:'auto',margin:'20px 0 30px'}}><table style={{width:'100%',minWidth:520,borderCollapse:'collapse'}}><caption style={{textAlign:'left',fontWeight:700,paddingBottom:12}}>{title}</caption><thead><tr>{headings.map(h=><th key={h} scope="col" style={{textAlign:'left',border:'1px solid #d9e1de',padding:12}}>{h}</th>)}</tr></thead><tbody>{rows.map(row=><tr key={row[0]}>{row.map((c,i)=>i===0?<th key={i} scope="row" style={{textAlign:'left',border:'1px solid #d9e1de',padding:12}}>{c}</th>:<td key={i} style={{border:'1px solid #d9e1de',padding:12}}>{c}</td>)}</tr>)}</tbody></table></div>
}

function LeadFigure({ priority }) {
  return <figure style={{margin:0}}><Image src="/images/sobia-family-lawyer-document-review.webp" title="Sobia Mohsin Family Lawyer Consultation" alt="Private consultation desk and family case folder illustrating family lawyer services in Karachi" width={1942} height={809} priority={priority} loading={priority ? undefined : 'lazy'} unoptimized style={{width:'100%',height:'auto',maxHeight:520,objectFit:'cover',display:'block',borderRadius:4}}/><figcaption style={{fontSize:14,lineHeight:1.6,color:'#455d55',paddingTop:10}}>Family Lawyer Consultation With Advocate Sobia Mohsin In Karachi</figcaption></figure>
}

export default function SobiaFamilyLawyerServicePage() {
  const schema = {'@context':'https://schema.org','@graph':[
    {'@type':'WebPage','@id':`${url}#webpage`,url,name:page.title,description:page.description,dateModified:'2026-11-01',inLanguage:'en-GB',primaryImageOfPage:{'@id':`${url}#service-image`},breadcrumb:{'@id':`${url}#breadcrumb`}},
    {'@type':'ImageObject','@id':`${url}#service-image`,contentUrl:'https://rightlaw.pk/images/sobia-family-lawyer-document-review.webp',name:'Sobia Mohsin Family Lawyer Consultation',caption:'Family Lawyer Consultation With Advocate Sobia Mohsin In Karachi',description:'Illustrative image of a family lawyer consultation for divorce, khula, custody and maintenance advice in Karachi.',representativeOfPage:true},
    ...lawyers.map(l=>({'@type':'ImageObject',contentUrl:l.image.startsWith('https://')?l.image:`https://rightlaw.pk${l.image}`,name:`${l.name} — ${l.designation}`,caption:`${l.name}, ${l.designation}`})),
    {'@type':'Person','@id':`${url}#sobia-mohsin`,name:'Sobia Mohsin',jobTitle:'Advocate and Director Legal',telephone:'+923161119655',worksFor:{'@id':'https://rightlaw.pk/#organization'},knowsAbout:['Family law','Khula','Divorce','Child custody','Maintenance','Mahr'],sameAs:['https://lawzana.com/lawyer/right-law-associates/karachi/sobia-mohsin-26903']},
    {'@type':'LegalService','@id':`${url}#service`,name:'Lady Family Lawyer in Karachi — Advocate Sobia Mohsin',url,serviceType:'Khula, divorce, child custody, guardianship, maintenance, Mahr and dowry-article cases',areaServed:{'@type':'City',name:'Karachi'},telephone:'+923161119655',provider:{'@id':'https://rightlaw.pk/#organization'},employee:{'@id':`${url}#sobia-mohsin`}},
    {'@type':'Organization','@id':'https://rightlaw.pk/#organization',name:firm.legalName,url:'https://rightlaw.pk/',telephone:firm.phone},
    {'@type':['LegalService','LocalBusiness'],'@id':'https://rightlaw.pk/#dha-office',name:'Right Law Associates — DHA Karachi Office',url:'https://rightlaw.pk/contact/',telephone:'+923316644789',address:{'@type':'PostalAddress',streetAddress:firm.dhaBranchAddress,addressLocality:'Karachi',addressRegion:'Sindh',addressCountry:'PK'},parentOrganization:{'@id':'https://rightlaw.pk/#organization'}},
    {'@type':['LegalService','LocalBusiness'],'@id':'https://rightlaw.pk/#jauhar-office',name:'Right Law Associates — Jauhar Karachi Office',url:'https://rightlaw.pk/contact/',telephone:'+923166644789',address:{'@type':'PostalAddress',streetAddress:firm.offices.karachiJohar.address,addressLocality:'Karachi',addressRegion:'Sindh',addressCountry:'PK'},parentOrganization:{'@id':'https://rightlaw.pk/#organization'}},
    {'@type':'FAQPage',mainEntity:page.faqs.map(([question,answer])=>({'@type':'Question',name:question,acceptedAnswer:{'@type':'Answer',text:answer}}))},
    {'@type':'BreadcrumbList','@id':`${url}#breadcrumb`,itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:'https://rightlaw.pk/'},{'@type':'ListItem',position:2,name:'Family Lawyers in Karachi',item:'https://rightlaw.pk/family-lawyers-in-karachi/'},{'@type':'ListItem',position:3,name:'Sobia Mohsin — Lady Family Lawyer',item:url}]},
  ]}
  const chip = {display:'inline-block',background:'#fff',color:'#173b35',border:'1px solid #c49a5a',borderRadius:999,padding:'6px 14px',fontSize:14,fontWeight:700,lineHeight:1.4}
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,'\\u003c')}}/><main className="dna-route-page">
    <nav aria-label="Breadcrumb" style={{background:'#f7f3eb',borderBottom:'1px solid #e3ddd2'}}><div className="container" style={{paddingTop:12,paddingBottom:12}}><ol style={{display:'flex',alignItems:'center',gap:8,flexWrap:'wrap',listStyle:'none',margin:0,padding:0,fontSize:14,lineHeight:1.5}}><li><Link href="/" style={{color:'#173b35',fontWeight:700,textDecoration:'none'}}>Home</Link></li><li aria-hidden="true" style={{color:'#7a8d86'}}>›</li><li><Link href="/family-lawyers-in-karachi/" style={{color:'#173b35',fontWeight:700,textDecoration:'none'}}>Family Lawyers in Karachi</Link></li><li aria-hidden="true" style={{color:'#7a8d86'}}>›</li><li aria-current="page" style={{color:'#455d55'}}>Sobia Mohsin</li></ol></div></nav>

    {/* Hero (SEO DNA 2.07D D1/D2): H1, "We offer" sentence, chips, Karachi address and service-named WhatsApp */}
    <section style={{background:'#173b35',color:'#fff',padding:'56px 0 44px'}}><div className="container">
      <p style={{color:'#e2c48f',fontWeight:700,letterSpacing:'.04em',textTransform:'uppercase',fontSize:13,margin:'0 0 10px'}}>Family Law • Karachi • Woman Advocate</p>
      <h1 style={{fontFamily:'Arial, Helvetica, sans-serif',fontSize:'clamp(28px,3.4vw,42px)',lineHeight:1.15,maxWidth:900,margin:'0 0 16px'}}>{page.title}</h1>
      <p style={{maxWidth:820,lineHeight:1.7,color:'#fff',fontSize:18,margin:'0 0 16px'}}>{page.offer}</p>
      <ul aria-label="What this service includes" style={{display:'flex',gap:10,flexWrap:'wrap',listStyle:'none',padding:0,margin:'0 0 18px'}}>{page.chips.map(c=><li key={c} style={chip}>✓ {c}</li>)}</ul>
      <p style={{maxWidth:820,lineHeight:1.7,color:'#e7efec',margin:'0 0 6px'}}><strong style={{color:'#fff'}}>Sobia Mohsin (call / WhatsApp):</strong> <a style={{color:'#fff'}} href={`tel:+${page.sobiaPhoneIntl}`}>{page.sobiaPhone}</a></p>
      {offices.map(o=><p key={o.name} style={{maxWidth:820,lineHeight:1.7,color:'#e7efec',margin:'0 0 6px'}}><strong style={{color:'#fff'}}>{o.name}:</strong> {o.address}. <a style={{color:'#fff'}} href={`tel:+${o.wa}`}>{o.phone}</a></p>)}
      <div style={{display:'flex',gap:12,flexWrap:'wrap',marginTop:22}}><a href={`https://wa.me/${page.sobiaPhoneIntl}`} className="button button-gold">Book a Khula or Divorce Consultation on WhatsApp</a><Link href="/contact/" className="button button-outline-light">Request a Family Law Appointment</Link></div>
    </div></section>

    {/* Lead image straight after the hero (D6 / D11) */}
    <section style={{background:'#fff'}}><div className="container" style={{paddingTop:26}}>
      <SectionImage slug={page.slug} index={0} />
      {!hasLeadSectionImage && <LeadFigure priority />}
    </div></section>

    <KarachiShortCta />

    <section className="section" style={{background:'#fff'}}><div className="container dna-content-grid"><article className="route-article">
      <section><h2>Advocate Sobia Mohsin — Khula, Divorce and Custody Advice for Women in Karachi</h2>{page.intro.map(p=><p key={p.slice(0,24)}>{p}</p>)}</section>

      <section><h2>Our Karachi Family Law Team</h2><h3>Two Advocates You Can Meet</h3><div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(220px,100%),1fr))',gap:20}}>{lawyers.map(l=><article key={l.name} style={{border:'1px solid #d9e1de',borderRadius:16,padding:20}}><figure style={{margin:0}}><Image unoptimized src={l.image} title={`${l.name} — ${l.designation}`} alt={`${l.name}, ${l.designation}`} width={112} height={140} style={{width:112,height:140,objectFit:'cover',objectPosition:'top center',display:'block',marginBottom:16,background:'#fff'}}/><figcaption style={{fontSize:13,lineHeight:1.5,color:'#455d55',marginBottom:12}}>{l.name}, {l.designation}</figcaption></figure><h4 style={{margin:'0 0 6px'}}>{l.name} — {l.designation}</h4><p>{l.copy}</p></article>)}</div></section>

      <section><h2>Family Cases We Handle in Karachi</h2><div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(190px,100%),1fr))',gap:16,margin:'18px 0 8px'}}>{page.services.map(([t,d])=><div key={t} style={{border:'1px solid #d9e1de',borderRadius:12,padding:16,background:'#fbfaf7'}}><h3 style={{fontSize:18,margin:'0 0 6px'}}>{t}</h3><p style={{margin:0,fontSize:15,lineHeight:1.6}}>{d}</p></div>)}</div></section>

      {page.sections.map((s,i)=><section id={s.id} key={s.id}>
        <h2>{s.h2}</h2>
        {s.parts.map(([h3,copy])=><div key={h3}><h3>{h3}</h3><p>{copy}</p></div>)}
        {s.id==='khula'&&<Table title="Family Cases, Governing Law and Documents" headings={['Case','Main Provision','Documents to Bring']} rows={caseRows}/>}
        {s.id==='custody'&&<SectionImage slug={page.slug} index={1} />}
        {s.id==='women-clients'&&<SectionImage slug={page.slug} index={2} />}
        {s.id==='offices'&&<div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(240px,100%),1fr))',gap:16,margin:'12px 0 8px'}}>{offices.map(o=><div key={o.name} style={{border:'1px solid #d9e1de',borderRadius:12,padding:16}}><h3 style={{fontSize:18,margin:'0 0 6px'}}>{o.name}</h3><p style={{margin:'0 0 10px'}}>{o.address}. Call <a href={`tel:+${o.wa}`}>{o.phone}</a>.</p><a href={`https://wa.me/${o.wa}`} className="button button-dark">WhatsApp the {o.name}</a></div>)}</div>}
        {s.id==='documents'&&<>{hasLeadSectionImage && <div style={{margin:'20px 0'}}><LeadFigure priority={false} /></div>}<Table title="How a Family Case Moves Forward" headings={['Stage','Purpose','What We Need']} rows={workRows}/></>}
      </section>)}

      <section><h2>Related Family Law Guides</h2><p>Compare our <Link href="/family-lawyers-in-karachi/">family lawyers in Karachi</Link> page for court-by-court guidance, or read about <Link href="/divorce-lawyer-for-khula-divorce/">divorce and khula representation</Link>, <Link href="/dissolution-of-marriage-in-pakistan/">dissolution of marriage in Pakistan</Link>, <Link href="/child-custody-and-guardianship-lawyers-in-karachi/">child custody and guardianship lawyers in Karachi</Link>, <Link href="/maintenance-in-pakistan/">maintenance claims</Link>, <Link href="/mehar-mahr-in-islam/">Mahr in Islam</Link>, <Link href="/divorce-registration-certificate/">divorce registration certificates</Link> and the wider <Link href="/family-law-in-pakistan/">family law overview</Link>.</p></section>

      <section><h2>Frequently Asked Questions About Advocate Sobia Mohsin and Family Cases</h2>{page.faqs.map(([q,a])=><section key={q}><h3>{q}</h3><p>{a}</p></section>)}</section>

      <section style={{marginTop:40,padding:28,background:'#f7f3eb',borderLeft:'3px solid #c49a5a'}}><h2>Book Your Consultation With Advocate Sobia Mohsin</h2><p>Send a short chronology, the Nikah Nama and any notice or court order. Call or WhatsApp Sobia Mohsin on <a href={`tel:+${page.sobiaPhoneIntl}`}>{page.sobiaPhone}</a>, the DHA office on <a href="tel:+923316644789">+92 331 6644789</a> or the Gulistan-e-Jauhar office on <a href="tel:+923166644789">+92 316 6644789</a>.</p><div style={{display:'flex',gap:10,flexWrap:'wrap'}}><a href={`https://wa.me/${page.sobiaPhoneIntl}`} className="button button-dark">WhatsApp Sobia Mohsin</a><Link href="/contact/" className="button button-gold">Contact Right Law Associates</Link></div></section>

      <section style={{marginTop:36}}><h2>Sources and Professional Listings</h2><ul>{page.sources.map(([label,href])=><li key={href}><a href={href} target="_blank" rel="noopener noreferrer">{label}</a></li>)}</ul><p style={{fontSize:14}}>Statutes should be read in their current amended form; Sindh and Punjab family-court amendments differ. Right Law Associates is a private law firm; courts and Union Councils decide matters within their jurisdiction.</p></section>

      <section style={{marginTop:24,padding:20,background:'#eef4f1',fontSize:14,lineHeight:1.7}}>
        <p style={{margin:0}}><strong>Reviewed by:</strong> {page.reviewedBy}</p>
        <p style={{margin:0}}><strong>Published by:</strong> {page.publishedBy}</p>
        <p style={{margin:0}}><strong>Last updated:</strong> {page.lastUpdated}</p>
        <p style={{margin:'8px 0 0'}}>General legal information. Advice depends on the documents and facts of your case.</p>
      </section>
    </article><aside style={{alignSelf:'start',background:'#f7f3eb',padding:24}}><section aria-labelledby="consultation-checklist-heading" lang="ur" dir="rtl" style={{fontFamily:'"Noto Nastaliq Urdu", serif',textAlign:'right',lineHeight:2.15,marginBottom:28}}><h2 id="consultation-checklist-heading" style={{fontFamily:'"Noto Nastaliq Urdu", serif',fontSize:22,lineHeight:1.9,margin:'0 0 10px'}}>وکیل سے ملاقات کے لیے چند ضروری چیزیں</h2><p style={{margin:'0 0 10px'}}>اگر موجود ہوں تو یہ چیزیں ساتھ لائیں:</p><ul style={{paddingRight:24,margin:'0 0 10px'}}><li>اپنا شناختی کارڈ اور نکاح نامہ۔</li><li>اگر مقدمہ چل رہا ہے تو اس کا تازہ عدالتی نوٹس یا حکم۔</li><li>اپنے مسئلے سے متعلق ایک دو ضروری کاغذات، مثلاً بچوں کے معاملے کے کاغذات یا خرچ اور حق مہر کی رسیدیں۔</li></ul><p style={{margin:0,fontWeight:600}}>تمام کاغذات ساتھ نہ ہوں تو بھی آپ ملاقات کے لیے آ سکتے ہیں۔</p></section><a href={`https://wa.me/${page.sobiaPhoneIntl}`} className="button button-dark" style={{display:'block',textAlign:'center',marginBottom:24}}>WhatsApp {page.sobiaPhone}</a><h3 style={{fontSize:19,borderBottom:'1px solid #c49a5a',paddingBottom:8,margin:'0 0 12px'}}>On This Page</h3><nav aria-label="On this page"><ul>{page.sections.map(s=><li key={s.id}><a href={`#${s.id}`}>{s.nav}</a></li>)}</ul></nav></aside></div></section>
  </main><Footer/></>
}
