import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getNavRoute, navRouteContent } from '../../lib/nav-route-content'
import { humanizeSlug, isLegacySlug, legacySlugs } from '../../lib/legacy-route-registry'

const explicitRoutes = new Set(['blog', 'family-law'])

function inferCategory(slug) {
  if (/divorce|family|custody|guardian|adoption|maintenance|dowry|mahr|mehar|conjugal/.test(slug)) return 'Family Law'
  if (/court-marriage|online-marriage|online-nikah|nikah|marriage/.test(slug)) return 'Marriage Law'
  if (/succession|letter-of-administration/.test(slug)) return 'Succession Law'
  if (/property|rental|tenancy|real-estate/.test(slug)) return 'Property Law'
  if (/tax|fbr|ntn|filer|corporate|business|company/.test(slug)) return 'Tax Law'
  if (/criminal/.test(slug)) return 'Civil Law'
  if (/intellectual-property/.test(slug)) return 'Intellectual Property'
  if (/certificate|nadra|b-form|birth|death/.test(slug)) return 'Civil Certificates'
  return 'Firm'
}

function fallbackRoute(slug) {
  if (!isLegacySlug(slug)) return null
  const title = humanizeSlug(slug)
  return {
    title,
    description: `${title}: legal information, procedure, documentation and practical guidance from Right Law Associates in Pakistan.`,
    category: inferCategory(slug),
    image: '/images/legal-consultation.png',
    topics: ['Legal Framework', 'Required Documents', 'Procedure', 'Jurisdiction', 'Practical Considerations', 'Legal Assistance'],
  }
}

function resolveRoute(slug) {
  return getNavRoute(slug) || fallbackRoute(slug)
}

export function generateStaticParams() {
  return [...new Set([...Object.keys(navRouteContent), ...legacySlugs])]
    .filter((slug) => !explicitRoutes.has(slug))
    .map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const page = resolveRoute(slug)
  if (!page) return {}
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `https://rightlaw.pk/${slug}/` },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `https://rightlaw.pk/${slug}/`,
      siteName: 'Right Law Associates',
      type: 'article',
    },
  }
}

const lawText = {
  'Family Law': 'Family matters often involve personal status, children, financial rights and court procedure at the same time. A sound legal strategy begins with the correct forum, complete documents and a clear understanding of the relief that can lawfully be sought.',
  'Marriage Law': 'Marriage-related work requires attention to consent, identity, witnesses, Nikah documentation, registration and the legal consequences of the chosen procedure. The facts of each couple determine the documents and legal steps required.',
  'Civil Certificates': 'Civil certificates are used for legal status, succession, immigration, remarriage, banking and other official purposes. The underlying event must first be correctly recorded with the competent authority before a computerized certificate can be relied upon.',
  'Civil Law': 'Civil litigation is driven by pleadings, jurisdiction, documentary proof, limitation and the specific relief claimed. Early review of the record can prevent procedural mistakes and help identify whether interim protection is required.',
  'Property Law': 'Property disputes commonly turn on title documents, possession, inheritance, registration records, agreements and the history of transactions. A proper document review should normally precede litigation or transfer advice.',
  'Intellectual Property': 'Intellectual property protection requires identifying the right involved, checking ownership, considering registration where available and using appropriate enforcement mechanisms against infringement or misuse.',
  'Tax Law': 'Tax work requires accurate records, timely filing, correct registration status and a careful response to notices or disputed assessments. Legal and accounting issues frequently overlap and should be reviewed together.',
  'Succession Law': 'Succession work starts with identifying legal heirs, the nature of the estate and the authority required for transfer or administration. Different assets may require different procedural routes.',
  'Firm': 'Right Law Associates provides legal assistance through specialist teams handling family, property, civil, corporate, taxation and related matters. The appropriate lawyer and office depend on the nature and jurisdiction of the case.',
}

export default async function RoutePage({ params }) {
  const { slug } = await params
  const page = resolveRoute(slug)
  if (!page) notFound()
  const base = lawText[page.category] || lawText.Firm
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LegalService',
        name: page.title,
        url: `https://rightlaw.pk/${slug}/`,
        areaServed: 'Pakistan',
        provider: { '@type': 'Organization', name: 'Right Law Associates (Pvt) Limited', url: 'https://rightlaw.pk/' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rightlaw.pk/' },
          { '@type': 'ListItem', position: 2, name: page.title, item: `https://rightlaw.pk/${slug}/` },
        ],
      },
    ],
  }

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <main>
      <section style={{background:'#173b35',color:'#fff',padding:'72px 0'}}>
        <div className="container">
          <p className="eyebrow gold">{page.category}</p>
          <h1 style={{fontFamily:'Georgia, serif',fontSize:'clamp(38px,5vw,62px)',lineHeight:1.05,maxWidth:900,margin:'0 0 22px'}}>{page.title}</h1>
          <p style={{maxWidth:760,lineHeight:1.75,color:'#d2ddda',fontSize:17}}>{page.description}</p>
          <div style={{display:'flex',gap:12,flexWrap:'wrap',marginTop:28}}>
            <Link href="/contact/" className="button button-gold">Consult a Lawyer</Link>
            <a href="tel:+923331127830" className="button button-outline-light">Call +92 333 1127830</a>
          </div>
        </div>
      </section>

      <section className="section" style={{background:'#fff'}}>
        <div className="container" style={{display:'grid',gridTemplateColumns:'minmax(0,1.2fr) minmax(300px,.8fr)',gap:48,alignItems:'start'}}>
          <article className="route-article">
            <h2><b>{page.title}: Legal Overview</b></h2>
            <p>{base}</p>
            <p>{page.description} Right Law Associates approaches these matters by first identifying the applicable law, jurisdiction, documents and practical objective. Legal advice should be based on the actual facts rather than a general assumption about how a similar matter was handled elsewhere.</p>

            <h2><b>Key Issues in {page.title}</b></h2>
            <p>The following subjects are central to this page and will be treated as separate legal questions where necessary:</p>
            <ul>{page.topics.map((topic) => <li key={topic}><strong>{topic}:</strong> the relevant documents, legal procedure, available remedies and possible risks should be reviewed before action is taken.</li>)}</ul>

            <h2><b>Documents and Evidence</b></h2>
            <p>Documents are often decisive in Pakistani legal proceedings. Depending on the matter, relevant records may include CNIC copies, certificates, agreements, notices, court orders, registration records, correspondence, financial documents and other evidence. A lawyer should review originals or reliable copies before preparing pleadings, applications or formal advice.</p>
            <p>Where a record contains an error, inconsistency or outdated entry, that issue should be identified before filing. Correcting the underlying record can sometimes be as important as the main legal proceeding itself.</p>

            <h2><b>Procedure and Jurisdiction</b></h2>
            <p>The correct court, tribunal, authority or registration office depends on the subject matter and the facts connecting the dispute to a place. Filing in the wrong forum can cause delay, additional expense or dismissal. The first procedural step should therefore be selected only after checking jurisdiction, limitation and the relief required.</p>
            <p>Urgent cases may also require interim relief. This can include temporary protection, injunctions, interim custody, stay orders or directions to preserve records, depending on the legal category and facts.</p>

            <h2><b>How Right Law Associates Handles These Matters</b></h2>
            <p>Our process begins with a factual review. We identify the legal issue, check the available record, explain the procedural route and then prepare the required documents or representation strategy. Where a negotiated or administrative solution is legally appropriate, it may be considered before contested proceedings.</p>
            <p>Right Law Associates works with clients in Karachi, Islamabad, Rawalpindi, Lahore and other parts of Pakistan through the relevant legal team. Overseas Pakistanis can also provide initial documents electronically where the matter permits remote coordination.</p>

            <h2><b>Important Legal Considerations</b></h2>
            <p>No two matters are identical. Dates, notices, signatures, registrations, prior orders and the conduct of the parties may change the legal position. A webpage can explain the general framework, but it cannot replace review of the actual documents and facts.</p>
            <p>Before signing a settlement, filing a case, issuing a notice or relying on an unofficial document, obtain advice on its legal effect. Preventive review is often less costly than trying to correct an avoidable procedural problem later.</p>

            <h2><b>Frequently Asked Questions</b></h2>
            <h3>Do I need a lawyer for {page.title.toLowerCase()}?</h3>
            <p>Not every administrative step requires representation, but legal advice is useful where rights are disputed, a court order is required, documents conflict, a deadline applies or the matter may affect future legal status.</p>
            <h3>Can the first consultation be handled remotely?</h3>
            <p>Many matters can be reviewed initially by phone, WhatsApp or electronic documents. Court appearances, attestations, original documents or personal statements may still be required depending on the case.</p>
            <h3>How long does the procedure take?</h3>
            <p>Time varies with the forum, complexity, service of notices, evidence, objections and whether the matter is contested. A responsible estimate can only be given after reviewing the specific file.</p>
            <h3>What should I send for an initial review?</h3>
            <p>Send a concise chronology and clear copies of the most important documents. Avoid sending unnecessary material before the lawyer identifies what is relevant.</p>

            <div style={{marginTop:40,padding:28,background:'#f7f3eb',borderLeft:'3px solid #c49a5a'}}>
              <h2 style={{marginTop:0}}><b>Discuss {page.title} With a Lawyer</b></h2>
              <p>For case-specific advice, contact Right Law Associates with the city, a short summary of the matter and the key documents available.</p>
              <Link href="/contact/" className="button button-dark">Contact Right Law Associates</Link>
            </div>
          </article>

          <aside style={{position:'sticky',top:170}}>
            <img src={page.image} alt={`${page.title} - Right Law Associates`} style={{width:'100%',height:320,objectFit:'cover',display:'block'}} />
            <div style={{background:'#f7f3eb',padding:24,marginTop:18}}>
              <p className="eyebrow">On this page</p>
              {page.topics.map((topic) => <p key={topic} style={{borderBottom:'1px solid #dce5e1',paddingBottom:10,margin:'10px 0',fontSize:14}}>{topic}</p>)}
            </div>
          </aside>
        </div>
      </section>
    </main>
  </>
}
