import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getNavRoute, navRouteContent } from '../../lib/nav-route-content'

export function generateStaticParams() {
  return Object.keys(navRouteContent).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const page = getNavRoute(slug)
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

const categoryDepth = {
  'Family Law': {
    planning: 'Family cases should be approached as a connected set of rights rather than as isolated applications. A divorce or khula matter may also raise questions of maintenance, dower, dowry articles, child custody, visitation, guardianship or enforcement of an earlier order. Identifying these connected issues at the beginning helps avoid unnecessary parallel proceedings and inconsistent positions later.',
    evidence: 'Family proceedings may depend on marriage records, CNICs, birth certificates, prior notices, financial records, school documents, medical records and earlier court orders. Where children are involved, the practical arrangements for residence, education, health and access can be as important as the formal pleadings.',
    links: [['Family Law in Pakistan','/family-law-in-pakistan/'],['Divorce Law','/divorce-law/'],['Child Custody','/child-custody/'],['Guardianship Laws','/legal-guardianship-laws-of-pakistan/'],['Maintenance','/maintenance-in-pakistan/']],
  },
  'Marriage Law': {
    planning: 'Marriage-related work should distinguish the ceremony itself from registration, documentary proof and later certificate requirements. Consent, identity, authority of any attorney or proxy, witnesses, Nikah Nama entries and registration records should be consistent with one another so that the marriage can be proved when required for immigration, succession, banking or family proceedings.',
    evidence: 'Useful records may include CNIC or passport copies, photographs, power of attorney or proxy documents where relevant, Nikah Nama, registrar details, witnesses, registration receipts and any computerized certificate later issued by the competent authority.',
    links: [['Court Marriage Procedure','/court-marriage-procedure-in-pakistan/'],['Online Marriage','/online-marriage/'],['Nikah Nama','/nikah-nama/'],['Marriage Registration Certificate','/marriage-registration-certificate/']],
  },
  'Civil Certificates': {
    planning: 'Certificate work should begin by checking the underlying civil record rather than only the printed certificate. Names, dates, CNIC numbers, parentage, marital status and registration details should match the supporting record before the document is used for a court case, embassy requirement, inheritance matter or other official purpose.',
    evidence: 'Depending on the certificate, supporting material can include identity documents, manual records, Union Council entries, hospital or burial records, Nikah Nama, divorce notices, court decrees, family registration information and affidavits explaining discrepancies.',
    links: [['Marriage Registration Certificate','/marriage-registration-certificate/'],['Divorce Registration Certificate','/divorce-registration-certificate/'],['Succession Certificate','/succession-certificate-letter-of-administration/']],
  },
  'Civil Law': {
    planning: 'Civil disputes are usually shaped by the relief claimed. A party seeking declaration, recovery, injunction, cancellation, possession or enforcement should ensure that the pleadings, documents and forum all support that specific relief. Limitation and interim protection should also be considered before filing.',
    evidence: 'Agreements, receipts, title or registration papers, notices, correspondence, account records, photographs and earlier proceedings may all affect a civil claim. A clear chronology is often useful because civil disputes can develop over a long period of time.',
    links: [['Civil Law','/civil-law/'],['Court Litigation','/lawyers-for-litigation-in-the-court/'],['Property Disputes','/property-disputes/']],
  },
  'Property Law': {
    planning: 'Property advice should separate ownership, possession, inheritance, contractual rights and registration issues. A person may possess a property without having clear title, or may have an inheritance share that has not yet been reflected in revenue or registration records. Those distinctions affect both litigation and transfer strategy.',
    evidence: 'Relevant material can include title documents, sale agreements, mutation or revenue entries, allotment records, leases, rent agreements, tax records, utility bills, inheritance documents and prior court orders. The chain of title should be reviewed rather than relying only on the latest document.',
    links: [['Property Law in Pakistan','/property-law-in-pakistan/'],['Property Disputes','/property-disputes/'],['Rental and Tenancy Law','/rental-and-tenancy-law-of-pakistan/'],['Succession Certificate','/succession-certificate-letter-of-administration/']],
  },
  'Intellectual Property': {
    planning: 'Intellectual property matters should first identify what is actually being protected: a brand, artistic work, software, invention, design or confidential business material. Ownership, registration status, first use and the nature of the alleged infringement can lead to different remedies.',
    evidence: 'Applications, registration certificates, invoices, packaging, advertising records, screenshots, publication dates, licensing agreements and examples of the allegedly infringing use can all be important when assessing an intellectual property dispute.',
    links: [['Intellectual Property Law','/intellectual-property-in-pakistan/'],['Corporate and Tax Law','/corporate-tax-law-services/']],
  },
  'Tax Law': {
    planning: 'Tax and corporate work should be planned around filing status, statutory deadlines, notices, transaction records and the legal form of the business. A filing decision may affect later assessments, banking, contracts or regulatory compliance, so the supporting figures and documents should be internally consistent.',
    evidence: 'Returns, wealth statements, bank records, invoices, withholding records, registration documents, notices, orders and correspondence with the relevant authority should be reviewed together where a matter involves compliance or dispute resolution.',
    links: [['Income Tax Return Filing','/fbr-income-tax-return-filing-lawyers-pakistan/'],['NTN Verification','/ntn-verification-from-the-fbr-in-pakistan/'],['Corporate and Tax Law','/corporate-tax-law-services/']],
  },
  'Succession Law': {
    planning: 'Succession matters should identify every legal heir and classify the assets before choosing the procedure. Bank balances, shares, vehicles, immovable property and other assets may not all move through the same administrative or court process. Any dispute about heirship, ownership or a previous transfer should be identified early.',
    evidence: 'Death records, CNICs of legal heirs, family registration information, asset documents, bank or share records, title papers, powers of attorney and earlier succession or court proceedings may be required depending on the estate.',
    links: [['Succession Certificate for Legal Heirs','/succession-certificate-in-pakistan-for-legal-heirs/'],['Succession Certificate and Letter of Administration','/succession-certificate-letter-of-administration/'],['Property Law','/property-law-in-pakistan/']],
  },
}

export default async function RoutePage({ params }) {
  const { slug } = await params
  const page = getNavRoute(slug)
  if (!page) notFound()
  const base = lawText[page.category] || lawText.Firm
  const depth = categoryDepth[page.category]
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
            <p>The following subjects are central to this page and should be treated as separate legal questions where necessary:</p>
            <ul>{page.topics.map((topic) => <li key={topic}><strong>{topic}:</strong> the relevant documents, legal procedure, available remedies and possible risks should be reviewed before action is taken.</li>)}</ul>

            {depth && <>
              <h2><b>Planning the Matter Before Filing or Registration</b></h2>
              <p>{depth.planning}</p>
              <p>Before taking a formal step, it is useful to prepare a concise chronology, identify the desired legal outcome and separate confirmed facts from assumptions. This makes it easier to determine whether the matter requires a court case, an administrative application, registration work, a legal notice or a combination of steps.</p>
            </>}

            <h2><b>Documents and Evidence</b></h2>
            <p>Documents are often decisive in Pakistani legal proceedings. Depending on the matter, relevant records may include CNIC copies, certificates, agreements, notices, court orders, registration records, correspondence, financial documents and other evidence. A lawyer should review originals or reliable copies before preparing pleadings, applications or formal advice.</p>
            {depth && <p>{depth.evidence}</p>}
            <p>Where a record contains an error, inconsistency or outdated entry, that issue should be identified before filing. Correcting the underlying record can sometimes be as important as the main legal proceeding itself.</p>

            <h2><b>Procedure, Jurisdiction and Timing</b></h2>
            <p>The correct court, tribunal, authority or registration office depends on the subject matter and the facts connecting the dispute to a place. Filing in the wrong forum can cause delay, additional expense or dismissal. The first procedural step should therefore be selected only after checking jurisdiction, limitation and the relief required.</p>
            <p>Urgent cases may also require interim relief. This can include temporary protection, injunctions, interim custody, stay orders or directions to preserve records, depending on the legal category and facts. Even where no urgent relief is required, deadlines, notice periods and the sequence of applications can affect the result.</p>

            <h2><b>Common Problems That Should Be Checked Early</b></h2>
            <p>Many legal matters become more difficult because an earlier document was incomplete, a notice was not properly served, an address or identity detail was inconsistent, the wrong forum was approached or important evidence was not preserved. Reviewing these issues at the beginning can prevent avoidable objections later.</p>
            <p>Where another case, registration, certificate, contract or prior order is connected with the matter, it should be disclosed during the initial review. Connected proceedings can affect jurisdiction, strategy, available remedies and the wording of any new application.</p>

            <h2><b>How Right Law Associates Handles These Matters</b></h2>
            <p>Our process begins with a factual review. We identify the legal issue, check the available record, explain the procedural route and then prepare the required documents or representation strategy. Where a negotiated or administrative solution is legally appropriate, it may be considered before contested proceedings.</p>
            <p>Right Law Associates works with clients in Karachi, Islamabad, Rawalpindi, Lahore and other parts of Pakistan through the relevant legal team. Overseas Pakistanis can also provide initial documents electronically where the matter permits remote coordination.</p>

            {depth && <section style={{margin:'34px 0',padding:'24px 26px',background:'#f7f3eb'}}>
              <h2 style={{marginTop:0}}><b>Related RightLaw.pk Legal Guides</b></h2>
              <p>These related pages provide more specific guidance on connected issues:</p>
              <ul>{depth.links.map(([label, href]) => <li key={href}><Link href={href}>{label}</Link></li>)}</ul>
            </section>}

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
            <h3>What if my documents contain different names, dates or addresses?</h3>
            <p>Do not ignore the discrepancy. Identify which record is authoritative, collect the supporting documents and obtain advice on whether correction, clarification or an affidavit is required before the main matter proceeds.</p>
            <h3>Can connected legal issues be handled together?</h3>
            <p>Sometimes they can be coordinated, but the correct approach depends on jurisdiction and the relief involved. A connected issue may require a separate application or forum even when it arises from the same facts.</p>

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
