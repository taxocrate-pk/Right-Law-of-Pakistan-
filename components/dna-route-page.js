import Link from 'next/link'
import { Footer } from './legal-site'
import { firm } from '../lib/legal-data'
import { mainServiceSections } from '../lib/main-service-sections'

const contextByCategory = {
  'Family Law': 'Family matters can involve personal status, children, maintenance, dower, dowry, guardianship, visitation and court procedure at the same time. The legal route should be selected after reviewing the family record, current proceedings and immediate risks.',
  'Marriage Law': 'Marriage work requires careful attention to free consent, identity, witnesses, Nikah documentation, registration and the legal effect of any proxy or attorney arrangement. Ceremony, registration and later certificate requirements should be treated as connected but distinct steps.',
  'Civil Certificates': 'Civil certificate work begins with the underlying official record. Names, dates, CNIC details and registration entries should be checked before a computerized certificate is used for succession, immigration, remarriage, banking or litigation.',
  'Civil Law': 'Civil litigation depends on jurisdiction, limitation, pleadings, documentary proof and the exact relief requested. Early review can identify whether declaration, injunction, recovery, cancellation, possession or another remedy is appropriate.',
  'Property Law': 'Property matters commonly turn on title, possession, inheritance, transfer history, registration records and contractual rights. The chain of title should be reviewed before litigation, sale, transfer or settlement decisions are made.',
  'Intellectual Property': 'Intellectual property work starts by identifying the right involved, ownership, registration status, first use and the nature of the alleged infringement. Different rights and remedies apply to trademarks, copyright, patents, designs and confidential material.',
  'Tax Law': 'Tax and corporate work requires accurate records, statutory deadlines, correct registration status and coordinated legal and accounting review. Returns, notices, orders, bank records and transaction documents should be read together.',
  'Succession Law': 'Succession work begins with identifying every legal heir, the nature of the estate and the authority required for transfer or administration. Different assets may require different court or administrative routes.',
}

const relatedByCategory = {
  'Family Law': [['Family Law In Pakistan','/family-law-in-pakistan/'],['Divorce Law','/divorce-law/'],['Child Custody','/child-custody/'],['Guardianship Laws','/legal-guardianship-laws-of-pakistan/']],
  'Marriage Law': [['Court Marriage Procedure','/court-marriage-procedure-in-pakistan/'],['Online Marriage','/online-marriage/'],['Nikah Nama','/nikah-nama/'],['Marriage Registration Certificate','/marriage-registration-certificate/']],
  'Civil Certificates': [['Marriage Registration Certificate','/marriage-registration-certificate/'],['Divorce Registration Certificate','/divorce-registration-certificate/'],['Succession Certificate','/succession-certificate-letter-of-administration/']],
  'Civil Law': [['Civil Law','/civil-law/'],['Court Litigation','/lawyers-for-litigation-in-the-court/'],['Property Disputes','/property-disputes/']],
  'Property Law': [['Property Law In Pakistan','/property-law-in-pakistan/'],['Property Disputes','/property-disputes/'],['Rental And Tenancy Law','/rental-and-tenancy-law-of-pakistan/']],
  'Intellectual Property': [['Intellectual Property Law','/intellectual-property-in-pakistan/'],['Corporate And Tax Law','/corporate-tax-law-services/']],
  'Tax Law': [['Income Tax Return Filing','/fbr-income-tax-return-filing-lawyers-pakistan/'],['NTN Verification','/ntn-verification-from-the-fbr-in-pakistan/'],['Corporate And Tax Law','/corporate-tax-law-services/']],
  'Succession Law': [['Succession Certificate For Legal Heirs','/succession-certificate-in-pakistan-for-legal-heirs/'],['Succession Certificate And Letter Of Administration','/succession-certificate-letter-of-administration/'],['Property Law','/property-law-in-pakistan/']],
}

const reviewers = { 'Family Law':'Advocate Sobia Mohsin', 'Marriage Law':'Advocate Sobia Mohsin' }

function buildFaqs(page) {
  const t = page.title
  return [
    [`Do I Need A Lawyer For ${t}?`, 'Legal advice is useful where rights are disputed, a court order is required, documents conflict, a deadline applies or the matter may affect future legal status.'],
    ['Can The First Consultation Be Handled Remotely?', 'Many matters can be reviewed initially by phone, WhatsApp or electronic documents. Personal appearance may still be required depending on the court, authority or procedure.'],
    ['How Long Does The Procedure Take?', 'Time depends on the forum, complexity, service of notices, evidence, objections and whether the matter is contested. A reliable estimate requires review of the specific file.'],
    ['What Documents Should I Send First?', 'Send a short chronology, identity documents and the records directly connected with the dispute, transaction, registration or application. Clear scans are usually enough for an initial review.'],
    ['What If My Documents Have Different Names Or Dates?', 'The discrepancy should be identified before filing. Depending on the record, correction, clarification, affidavit or another formal step may be required.'],
    ['Which Court Or Authority Has Jurisdiction?', 'Jurisdiction depends on the type of matter, location, residence of the parties, property or transaction involved and the relief requested.'],
    ['Can Urgent Interim Relief Be Requested?', 'Where the law permits, urgent relief may include an injunction, stay, interim custody, preservation direction or another temporary order supported by evidence.'],
    ['How Are Legal Fees Determined?', 'Fees depend on complexity, forum, expected hearings, drafting requirements, evidence and whether the work is advisory, administrative or contested litigation.'],
    ['Can Overseas Pakistanis Start Remotely?', 'Many matters can begin remotely through electronic document review. Some proceedings may later require attested authority, couriered originals or personal appearance.'],
    ['Do I Need Original Documents?', 'Copies can often be used for initial review, while originals, certified copies or attested records may be required for filing, verification, evidence or registration.'],
    ['What Happens If The Other Party Does Not Cooperate?', 'The available route may include formal notice, court proceedings, substituted service, administrative action or another remedy depending on the facts and law.'],
    ['Can The Matter Be Settled Without Full Litigation?', 'Some matters can be resolved through negotiation, corrected documentation, consent terms or an administrative route, but the settlement should be properly documented and enforceable.'],
    ['What Should Be Checked Before Filing?', 'Check limitation, jurisdiction, necessary parties, prior proceedings, notice requirements, available evidence and the exact relief required.'],
    ['Can An Earlier Order Affect The Current Matter?', 'Yes. Earlier orders, registrations, contracts, notices, certificates and pending proceedings can affect jurisdiction, strategy and available remedies.'],
    ['How Important Is Documentary Evidence?', 'Documentary evidence can be decisive. Preserve agreements, official records, notices, receipts, correspondence, identity documents and prior orders in their original form where possible.'],
    ['Should I Sign A Settlement Without Advice?', 'A settlement may waive rights or create obligations that are difficult to reverse. Its legal effect and enforcement mechanism should be understood before signing.'],
    ['What If A Limitation Period May Apply?', 'Seek advice promptly because some claims, appeals, notices and applications are subject to strict time limits.'],
    ['Can Connected Issues Be Coordinated?', 'Often yes, but connected issues may still require separate applications, authorities or forums even when they arise from the same facts.'],
    ['Does Right Law Associates Handle Matters Outside Karachi?', 'Right Law Associates coordinates matters through legal teams and associated counsel in Karachi, Islamabad, Rawalpindi, Lahore and other jurisdictions where appropriate.'],
    [`How Do I Start A ${t} Matter?`, 'Send the city, a concise summary, the current procedural stage and the key documents so the legal team can identify the lawyer, missing records and next practical step.'],
  ]
}

export default function DnaRoutePage({ page, slug }) {
  page = { ...page, title: page.title.replace(/\b[a-z]/g, letter => letter.toUpperCase()) }
  const context = contextByCategory[page.category] || 'The correct legal route depends on the facts, jurisdiction, documents and relief required. A structured review should take place before filing, registration or settlement.'
  const related = relatedByCategory[page.category] || []
  const reviewer = reviewers[page.category] || 'Advocate Mohsin Ali Shah'
  const faqs = buildFaqs(page)
  const schema = {
    '@context':'https://schema.org',
    '@graph':[
      {'@type':'LegalService',name:page.title,url:`https://rightlaw.pk/${slug}/`,areaServed:'Pakistan',provider:{'@type':'Organization',name:'Right Law Associates (Pvt) Limited',url:'https://rightlaw.pk/'}},
      {'@type':'FAQPage',mainEntity:faqs.map(([question,answer])=>({'@type':'Question',name:question,acceptedAnswer:{'@type':'Answer',text:answer}}))},
      {'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:'https://rightlaw.pk/'},{'@type':'ListItem',position:2,name:page.title,item:`https://rightlaw.pk/${slug}/`}]},
    ],
  }

  const cell = {border:'1px solid #d9e1de',padding:12}
  const head = {...cell,textAlign:'left'}

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />
    <main className="dna-route-page">
      <section style={{background:'#173b35',color:'#fff',padding:'72px 0 54px'}}>
        <div className="container">
          <p className="eyebrow gold">{page.category}</p>
          <h1 style={{fontFamily:'Arial, Helvetica, sans-serif',fontSize:'clamp(38px,5vw,62px)',lineHeight:1.05,maxWidth:900,margin:'0 0 18px'}}>{page.title}</h1>
          <h2 style={{fontFamily:'Arial, Helvetica, sans-serif',fontSize:'clamp(24px,3vw,34px)',lineHeight:1.2,maxWidth:900,margin:'0 0 10px',color:'#fff'}}>Legal Guidance, Procedure, Documents And Representation</h2>
          <h3 style={{fontFamily:'Arial, Helvetica, sans-serif',fontSize:'clamp(18px,2.2vw,24px)',lineHeight:1.3,maxWidth:900,margin:'0 0 18px',color:'#e7efec'}}>Right Law Associates — Practical Legal Support Across Pakistan</h3>
          <p style={{maxWidth:820,lineHeight:1.75,color:'#d2ddda',fontSize:17}}>{page.description}</p>
          <p style={{maxWidth:820,lineHeight:1.75,color:'#d2ddda',fontSize:16}}>Head Office: G-9 Markaz, Islamabad. Karachi branches: DHA Phase 7 and Gulistan-e-Jauhar. Lahore branch: Chauburji. Call {firm.phone} for an initial case assessment and document review.</p>
          <div style={{display:'flex',gap:12,flexWrap:'wrap',marginTop:28}}><Link href="/contact/" className="button button-gold">Consult A Lawyer</Link><a href="tel:+923331127830" className="button button-outline-light">Call +92 333 1127830</a></div>
        </div>
      </section>

      <section style={{background:'#fff'}}><div className="container" style={{paddingTop:26}}><img src={page.image} alt={`${page.title} legal services by Right Law Associates`} loading="eager" fetchPriority="high" style={{width:'100%',maxHeight:520,objectFit:'cover',display:'block',borderRadius:4}} /></div></section>

      <section className="section" style={{background:'#fff'}}>
        <div className="container dna-content-grid">
          <article className="route-article">
            <h2><b>{page.title}: Legal Overview</b></h2>
            <p>{context}</p>
            <p>{page.description} Right Law Associates begins by identifying the applicable law, jurisdiction, documents and practical objective. Advice should be based on the actual record rather than a general assumption about similar matters.</p>

            {['succession-certificate-in-pakistan-for-legal-heirs', 'succession-certificate-letter-of-administration', 'fbr-income-tax-return-filing-lawyers-pakistan', 'corporate-tax-law-services', 'company-registration-service-karachi'].includes(slug) && <section aria-labelledby="succession-lawyers-heading" style={{margin:'28px 0'}}>
              <h2 id="succession-lawyers-heading">Senior Lawyers For Your Legal Matter</h2>
              <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:20}}>
                {[
                  {name:'S. M. Akhtar Rizvi',designation:'Advocate Supreme Court',image:'https://www.advocates.com.pk/Syed-Akhter-Rizwi--01.png',copy:'Senior Supreme Court advocate associated with our legal team. Provides senior legal guidance and representation in matters requiring experienced appellate counsel.',profile:'https://scbap.com/wp-content/uploads/2025/11/Directory-2025-26.pdf',label:'SCBAP Directory (PDF)'},
                  {name:'Syed Mohsin Ali Shah',designation:'Advocate High Court',image:'https://www.advocates.com.pk/Mohsin-Ali-Shah.png',copy:'Senior lawyer with legal practice since 1985. Advises on property, inheritance, corporate and taxation matters and coordinates case-specific legal support.',profile:'https://lawzana.com/lawyer/right-law-associates/karachi/m-mohsin-ali-shah-26902',label:'Lawzana Profile'}
                ].map(lawyer=><article key={lawyer.name} style={{background:'#fff',border:'1px solid #d9e1de',borderRadius:16,padding:20}}>
                  <img src={lawyer.image} alt={lawyer.name + ', ' + lawyer.designation} loading="lazy" width="128" height="160" style={{width:128,height:160,objectFit:'contain',display:'block',marginBottom:16}} />
                  <h3 style={{marginBottom:8}}>{lawyer.name}</h3>
                  <p style={{fontWeight:700,color:'#173b35'}}>{lawyer.designation}</p>
                  <p>{lawyer.copy}</p>
                  <a href={lawyer.profile} target="_blank" rel="noopener noreferrer" aria-label={lawyer.name + ' ' + lawyer.label}>{lawyer.label}</a>
                </article>)}
              </div>
            </section>}

            {(mainServiceSections[slug] || []).map(([title, subtitle, copy]) => <section key={title}><h2>{title}</h2><h3>{subtitle}</h3><p>{copy}</p></section>)}

            <h2><b>Key Issues In {page.title}</b></h2>
            <p>The following issues should be reviewed separately where necessary:</p>
            <ul>{page.topics.map((topic)=><li key={topic}><strong>{topic}:</strong> documents, procedure, remedies, risk and the correct forum should be checked before action is taken.</li>)}</ul>

            <h2><b>Planning The Matter Before Filing Or Registration</b></h2>
            <p>Prepare a concise chronology, identify the desired outcome and separate confirmed facts from assumptions. This helps determine whether the matter requires litigation, an administrative application, registration work, a legal notice, negotiation or a combination of steps.</p>

            <h2><b>Documents And Evidence</b></h2>
            <p>Relevant records may include CNIC copies, certificates, agreements, notices, court orders, registration records, correspondence, financial documents and other evidence. Originals or reliable copies should be reviewed before pleadings, applications or formal advice are prepared.</p>
            <p>Where a record contains an error, inconsistency or outdated entry, identify it before filing. Correcting the underlying record can sometimes be as important as the main legal proceeding.</p>

            <h2><b>Procedure, Jurisdiction And Timing</b></h2>
            <p>The correct court, tribunal, authority or registration office depends on the subject matter and facts connecting the dispute to a place. Filing in the wrong forum can cause delay, additional expense or dismissal. Jurisdiction, limitation and the relief required should be checked first.</p>
            <p>Urgent cases may require interim relief such as an injunction, stay, interim custody, preservation direction or another temporary order. Deadlines, notice periods and sequence can materially affect the result.</p>

            <h2><b>Legal Route Comparison</b></h2>
            <div style={{overflowX:'auto'}}><table style={{width:'100%',borderCollapse:'collapse',margin:'18px 0 30px'}}><thead><tr><th style={head}>Route</th><th style={head}>When It May Apply</th><th style={head}>Check First</th></tr></thead><tbody>
              <tr><td style={cell}>Court Proceeding</td><td style={cell}>Rights are disputed or an enforceable judicial order is required.</td><td style={cell}>Jurisdiction, limitation, parties, pleadings and evidence.</td></tr>
              <tr><td style={cell}>Administrative Or Registration Route</td><td style={cell}>The matter concerns an official record, certificate or statutory authority.</td><td style={cell}>Underlying record, identity details and authority requirements.</td></tr>
              <tr><td style={cell}>Negotiated Resolution</td><td style={cell}>The parties can lawfully resolve the dispute without a full trial.</td><td style={cell}>Terms, enforceability, waivers and future obligations.</td></tr>
            </tbody></table></div>

            <h2><b>How Right Law Associates Handles These Matters</b></h2>
            <p>Our process begins with factual and documentary review. We identify the legal issue, check the available record, explain the route and then prepare the required documents or representation strategy. A negotiated or administrative solution may be considered before contested proceedings where legally appropriate.</p>
            <p>Right Law Associates works with clients in Karachi, Islamabad, Rawalpindi, Lahore and other parts of Pakistan through the relevant legal team. Overseas Pakistanis can provide initial documents electronically where the matter permits remote coordination.</p>

            <h2><b>Our Legal Review Process</b></h2>
            <div style={{overflowX:'auto'}}><table style={{width:'100%',borderCollapse:'collapse',margin:'18px 0 30px'}}><thead><tr><th style={head}>Stage</th><th style={head}>Focus</th><th style={head}>Output</th></tr></thead><tbody>
              <tr><td style={cell}>Initial Review</td><td style={cell}>Facts, chronology, documents and immediate risk.</td><td style={cell}>Issue list and missing-document checklist.</td></tr>
              <tr><td style={cell}>Legal Strategy</td><td style={cell}>Forum, law, relief, notices and evidence.</td><td style={cell}>Recommended route and filing plan.</td></tr>
              <tr><td style={cell}>Execution</td><td style={cell}>Drafting, filing, representation and follow-up.</td><td style={cell}>Documented next steps and coordination.</td></tr>
            </tbody></table></div>

            {related.length>0&&<section style={{margin:'34px 0',padding:'24px 26px',background:'#f7f3eb'}}><h2 style={{marginTop:0}}><b>Related RightLaw.pk Legal Guides</b></h2><p>These pages provide more specific guidance on connected issues:</p><ul>{related.map(([label,href])=><li key={href}><Link href={href}>{label}</Link></li>)}</ul></section>}

            <h2><b>Trusted Legal Resources And Internal References</b></h2>
            <p>For connected information, readers may also review <a href="https://qanoonhouse.com/" target="_blank" rel="noopener noreferrer">Qanoon House</a>, <a href="https://qanoon.online/" target="_blank" rel="noopener noreferrer">Qanoon Online</a>, <a href="https://karachilawyers.com.pk/" target="_blank" rel="noopener noreferrer">Karachi Lawyers</a> and, for marriage procedure, <a href="https://court-marriage.com/" target="_blank" rel="noopener noreferrer">Court-Marriage.com</a>.</p>

            <h2><b>Frequently Asked Questions</b></h2>
            {faqs.map(([question,answer])=><section key={question} style={{marginBottom:22}}><h3>{question}</h3><p>{answer}</p></section>)}

            <section style={{margin:'36px 0 0',padding:24,background:'#eef4f1',borderLeft:'3px solid #173b35'}}><h2 style={{marginTop:0}}><b>Reviewed By {reviewer}</b></h2><p>This page is prepared for general legal information and reviewed within the Right Law Associates editorial process. Case-specific advice requires review of the actual facts, documents, jurisdiction and current procedural position.</p></section>

            <div style={{marginTop:40,padding:28,background:'#f7f3eb',borderLeft:'3px solid #c49a5a'}}><h2 style={{marginTop:0}}><b>Discuss {page.title} With A Lawyer</b></h2><p>Contact Right Law Associates with the city, a short summary of the matter and the key documents available.</p><Link href="/contact/" className="button button-dark">Contact Right Law Associates</Link></div>
          </article>

          <aside style={{position:'sticky',top:170}}><img src={page.image} alt={`${page.title} consultation and document review`} loading="lazy" style={{width:'100%',height:320,objectFit:'cover',display:'block'}} /><div style={{background:'#f7f3eb',padding:24,marginTop:18}}><p className="eyebrow">On This Page</p>{page.topics.map((topic)=><p key={topic} style={{borderBottom:'1px solid #dce5e1',paddingBottom:10,margin:'10px 0',fontSize:14}}>{topic}</p>)}</div></aside>
        </div>
      </section>
    </main>
    <Footer />
  </>
}
