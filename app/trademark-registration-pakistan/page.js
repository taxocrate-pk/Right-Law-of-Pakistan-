import Link from 'next/link'
import Image from 'next/image'
import { Footer } from '../../components/legal-site'
import { firm } from '../../lib/legal-data'

const pageUrl = 'https://rightlaw.pk/trademark-registration-pakistan'

export const metadata = {
  title: 'Trademark Registration in Pakistan | RightLaw.pk',
  description: 'Legal assistance with IPO Pakistan trademark searches, applications, objections, opposition and protection. Review your brand with Right Law Associates.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Trademark Registration in Pakistan | Right Law Associates',
    description: 'A practical guide to searching, filing and protecting a trademark through IPO-Pakistan.',
    url: pageUrl,
    siteName: 'Right Law Associates',
    type: 'website',
  },
}

const sections = [
  {
    title: 'Protect a Brand Through the Correct Legal Route',
    subtitle: 'What Registration Can—and Cannot—Achieve',
    text: 'A trademark helps customers identify the commercial origin of goods or services. It may be a word, brand name, logo or another sign capable of distinguishing one undertaking from another. A registration application must be considered against the actual mark, the goods or services for which protection is sought and earlier rights. A company name, domain name or social-media handle does not automatically establish ownership of a registered trademark. Right Law Associates reviews the proposed brand, applicant details and use plans before advising on a suitable filing strategy.',
  },
  {
    title: 'Begin With a Clearance Search',
    subtitle: 'Examine Similar Marks, Not Just Exact Spellings',
    text: 'A preliminary search reduces the risk of investing in a name that already conflicts with an existing mark. The review should consider spelling differences, phonetic resemblance, translations, logos and the relationship between goods or services. Results from an online database are a starting point, not an unconditional legal clearance. An unregistered earlier right or an objection based on the wider facts may still require attention. Businesses planning product packaging, advertising or a national launch should investigate conflicting rights before making substantial commitments.',
  },
  {
    title: 'Choose the Applicant and Goods or Services Carefully',
    subtitle: 'Identify Ownership Before Filing',
    text: 'The applicant may be an individual or an eligible business entity, depending on the facts and the required documents. Ownership of artwork, licensing arrangements and the authority of a person filing for a company should be clear. Trademark applications identify goods or services using the relevant classification system. The selected description should reflect a real commercial plan rather than a vague attempt to claim every possible activity. A filing in one class does not automatically protect unrelated goods or services in every other class. Different marks or materially different product lines may require separate applications.',
  },
  {
    title: 'Prepare the Trademark Application',
    subtitle: 'Check the Representation of the Mark and Filing Record',
    text: 'Before submitting an application to the Intellectual Property Organization of Pakistan (IPO-Pakistan), confirm the applicant name, address, representation of the proposed mark, classes, goods or services and any supporting particulars required for the filing route. Errors can produce avoidable examination questions or complicated record corrections later. A stylised logo should be supplied in a suitable, clear form. If the mark uses Urdu, English or another language, consider how the wording and translation affect distinctiveness or a possible conflict. The legal team should keep a dated copy of every submission and payment record.',
  },
  {
    title: 'Understand Examination and Registry Objections',
    subtitle: 'Respond to the Ground Actually Raised',
    text: 'A filing is not the same thing as an approved registration. The Trade Marks Registry examines applications under the applicable legal framework and may raise issues concerning distinctiveness, similarity to earlier marks, the description of goods or services or the information supplied. The response should address the specific objection and its legal basis, supported by relevant evidence where available. An applicant should not assume that changing a spelling, adding a generic word or providing a registration fee will resolve the objection. Hearings or further submissions may be required depending on the registry process.',
  },
  {
    title: 'Opposition and Contested Trademark Matters',
    subtitle: 'Differentiate an Examiner’s Objection From Third-Party Opposition',
    text: 'A registry examination objection concerns the authority’s examination of the application. An opposition involves an objection by another party at the stage allowed by law. The procedure, deadlines and evidence may differ. Businesses receiving an opposition should preserve proof of earlier use, invoices, advertising, registration details, brand development and any prior correspondence. A settlement or undertaking may affect future branding rights; it should be reviewed before signature. Where another party appears to be using the applicant’s mark, assess registered rights, actual marketplace use and the available remedy separately.',
  },
  {
    title: 'Registration, Renewal and Brand Portfolio Management',
    subtitle: 'Keep the Certificate and Ownership Records Current',
    text: 'Once a trademark is registered, maintain a reliable record of the certificate, relevant classes, renewal dates, changes of business name and any assignments or licences. Do not assume that payment to a private agent changes an official registry entry. A registered owner should watch for confusingly similar uses, evaluate suspected infringement promptly and collect dated evidence before sending a notice. Renewals and recordal requirements can change, so the current IPO-Pakistan rules and instructions should be verified when action is due. Trademark rights also differ by territory: a Pakistan filing is not worldwide registration.',
  },
  {
    title: 'Trademark Registration Costs and Timelines',
    subtitle: 'Separate Official Charges From Professional Fees',
    text: 'An accurate quotation depends on the number of marks, classes, goods or services, filing method, professional work, objections, opposition and any later recordal or renewal requirements. Official charges should be checked against current IPO-Pakistan instructions rather than a static website price. Examination and registration timelines are not guaranteed; objections, hearings and disputed rights can extend the process. Right Law Associates can explain the work proposed and the expected filing expenses after reviewing the applicant’s instructions. No approval, fixed processing date or immediate enforceability should be promised merely because an application is submitted.',
  },
  {
    title: 'Trademark Work for Startups and Established Companies',
    subtitle: 'Coordinate the Brand With Commercial Documents',
    text: 'A startup may need its trade name, logo, company incorporation record and online marketplace accounts reviewed together. An established business may have several product brands, logos and licence arrangements. When founders, designers, distributors or group companies contribute to the brand, clarify ownership through appropriate agreements. Franchise and manufacturing arrangements may require an authorised-use framework that matches the trademark record. Strong brand protection begins with the correct proprietor, a coherent filing plan and preserved evidence of use, not simply collecting certificates.',
  },
  {
    title: 'Legal Advice and Filing Coordination Across Pakistan',
    subtitle: 'A Document-Led Consultation for the Proposed Brand',
    text: 'Right Law Associates can review the proposed brand, supporting documents and the legal concerns identified by a preliminary search. The relevant practice team can then advise on filing, responses to examination, opposition or other IP disputes within the agreed scope. Clients in Karachi, Islamabad, Rawalpindi, Lahore and elsewhere can initiate a document review remotely where appropriate. The correct professional and forum depend on the work required. This page explains trademark legal services nationwide; it is not a promise that every filing or dispute can be completed without further documentation.',
  },
]

const faqs = [
  ['What is the difference between a company name and a registered trademark?', 'Incorporating a company or reserving a name does not by itself register a trademark. A trademark application concerns protection for the mark in relation to specified goods or services under the applicable trademark law.'],
  ['Can I register a logo as a trademark in Pakistan?', 'A logo may be eligible if it satisfies the applicable requirements. The registry will examine the proposed sign, its representation, the claimed goods or services and any relevant earlier rights.'],
  ['Is a trademark search mandatory before filing?', 'A preliminary search is a prudent risk-reduction step. Whether a particular search form is compulsory depends on the current procedure, but filing without checking conflicts can produce objections, disputes and avoidable expenditure.'],
  ['Can two businesses use a similar brand name?', 'Similarity must be assessed in context, including the marks, relevant goods or services, earlier rights and likelihood of confusion. A different company registration or city does not automatically remove the risk.'],
  ['Does one class cover every business activity?', 'No. The class and the specification of goods or services matter. Different activities or products may require additional classes or separate applications according to the filing strategy.'],
  ['Can overseas Pakistanis apply for trademark registration?', 'An overseas applicant may be able to instruct a representative. The eligibility, address, power of attorney and other documentary requirements should be confirmed for the specific applicant and filing route.'],
  ['How long does trademark registration take?', 'Time depends on examination, objections, publication, any third-party opposition and registry processing. No fixed completion date should be assumed before the actual file is assessed.'],
  ['What if IPO-Pakistan objects to an application?', 'Review the examination report and any deadline before preparing a response. The correct argument may involve the mark, specification, legal standard and supporting material. Some objections require a hearing.'],
  ['Is trademark opposition the same as examination?', 'No. Examination is the registry’s review; opposition is a challenge by another party within the process permitted by law. Their grounds, timing and evidence may differ.'],
  ['What is the official fee for trademark registration?', 'Fees depend on the present IPO-Pakistan schedule and the requested filing or related action. A legal-service quotation should clearly separate government charges from professional fees.'],
  ['Does a Pakistan trademark registration protect a brand worldwide?', 'No. Trademark protection is generally territorial. Expansion into other countries calls for a separate review of the applicable national or international filing routes.'],
  ['Can I register a trademark without having a registered company?', 'The correct applicant depends on legal ownership and the rules for the chosen filing. An eligible individual applicant may be possible; verify the name and documentary requirements before submission.'],
  ['Does registering a domain name protect my trademark?', 'No. Domain registration and trademark registration serve different purposes. A domain can still raise infringement or unfair-competition concerns, and its availability does not prove that a mark is legally clear.'],
  ['What documents should I prepare for a consultation?', 'Prepare the proposed mark or logo, applicant identity and business details, the goods or services to be covered, examples of use if available, and any search results, existing filings or objections.'],
]

const detailRows = [
  ['Initial Brand Review', 'Applicant identity, mark and goods or services', 'Confirm ownership, classes and clearance concerns'],
  ['Filing Preparation', 'Application details and supporting records', 'Prepare an accurate and consistent filing'],
  ['Examination', 'Official report or requisition', 'Assess objections and response options'],
  ['Contested Matter', 'Opposition, notice or infringement evidence', 'Review rights, deadlines and available remedies'],
  ['Registration Maintenance', 'Certificate and registry history', 'Track renewals, assignments and licences'],
]

export default function TrademarkRegistrationPakistanPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LegalService',
        '@id': pageUrl + '#service',
        name: 'Trademark Registration Legal Services in Pakistan',
        url: pageUrl,
        areaServed: { '@type': 'Country', name: 'Pakistan' },
        provider: { '@type': 'Organization', name: firm.legalName, url: 'https://rightlaw.pk/' },
        serviceType: 'Trademark searches, filing advice, prosecution and disputes',
      },
      {
        '@type': 'WebPage',
        '@id': pageUrl + '#webpage',
        url: pageUrl,
        name: 'Trademark Registration in Pakistan',
        description: metadata.description,
        about: { '@id': pageUrl + '#service' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rightlaw.pk/' },
          { '@type': 'ListItem', position: 2, name: 'Intellectual Property', item: 'https://rightlaw.pk/intellectual-property-in-pakistan' },
          { '@type': 'ListItem', position: 3, name: 'Trademark Registration', item: pageUrl },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map(([name, answer]) => ({
          '@type': 'Question', name,
          acceptedAnswer: { '@type': 'Answer', text: answer },
        })),
      },
    ],
  }

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    <main className="property-law-page family-law-page">
      <section className="hero">
        <div className="container property-hero">
          <p className="eyebrow gold">Intellectual Property • Brand Protection</p>
          <h1>Trademark Registration in Pakistan</h1>
          <p className="hero-lede">Review your brand before filing with IPO-Pakistan. Our legal team advises on trademark searches, application strategy, examination objections and contested rights.</p>
          <div className="hero-actions">
            <Link href="/contact/" className="button button-gold">Arrange a Phone Appointment</Link>
            <Link href="/intellectual-property-in-pakistan/" className="button button-outline-light">Intellectual Property Guide</Link>
          </div>
        </div>
      </section>
      <article className="section family-article">
        <div className="container family-article-inner">
          <nav aria-label="Breadcrumb" style={{fontSize:13,marginBottom:14}}>
            <Link href="/">Home</Link> <span aria-hidden="true">›</span> <Link href="/intellectual-property-in-pakistan/">Intellectual Property</Link> <span aria-hidden="true">›</span> <span aria-current="page">Trademark Registration</span>
          </nav>
          {/* Reused draft placeholder: replace with a page-exclusive compressed WebP before production under DNA 2.06. */}
          <Image className="property-content-image" src="/images/corporate-tax-document-review.webp" width={1000} height={600} sizes="(max-width: 800px) 100vw, 940px" alt="Trademark and business document review prior to registration in Pakistan" title="Trademark Legal Document Review in Pakistan" priority />
          <h2>Legal Review Before a Trade Mark Filing</h2>
          <h3>Protect the Correct Mark for the Intended Business</h3>
          <p>Trademark registration is a legal process, not simply a purchase of a certificate. A sensible application begins with identifying the true proprietor, checking possible conflicts and matching the mark to the goods or services it will distinguish. The law must be applied to the actual facts, not a generic filing checklist.</p>
          <section aria-label="Editorial responsibility" style={{padding:'14px 18px',margin:'20px 0',borderLeft:'3px solid #c49a5a',background:'#f7f3eb'}}>
            <h2 style={{marginTop:0}}>Professional Responsibility and Legal Scope</h2>
            <h3>Case-Specific Review by Right Law Associates</h3>
            <p>Right Law Associates (Pvt) Limited is a Pakistan-based legal practice. Trademark applications, registry objections and infringement matters are evaluated against the relevant facts and current official requirements. A named lawyer, representation terms and filing authority are confirmed during the actual client engagement; this page does not claim that a particular advocate has reviewed an individual file.</p>
          </section>
          {sections.map(({ title, subtitle, text }) =>
            <section key={title}>
              <h2>{title}</h2>
              <h3>{subtitle}</h3>
              <p>{text}</p>
            </section>
          )}
          <h2>Trademark Filing Stages and Legal Checks</h2>
          <h3>How the Work Changes as an Application Progresses</h3>
          <div className="property-table-wrap" role="region" tabIndex={0} aria-label="Trademark filing stages">
            <table><thead><tr><th>Stage</th><th>Records to Review</th><th>Legal Focus</th></tr></thead>
              <tbody>{detailRows.map(([a,b,c]) => <tr key={a}><td>{a}</td><td>{b}</td><td>{c}</td></tr>)}</tbody>
            </table>
          </div>
          <h2>Official Trademark Legislation and Registry Resources</h2>
          <h3>Use Current Instructions for Filing and Fees</h3>
          <p>Review the <a href="https://pakistancode.gov.pk/pdffiles/administratora4ef8d40e3d97faef49343d2242e0c3a.pdf" target="_blank" rel="noopener noreferrer">Trade Marks Ordinance, 2001 (Pakistan Code)</a> and current information issued by the <a href="https://ipo.gov.pk/" target="_blank" rel="noopener noreferrer">Intellectual Property Organization of Pakistan</a>. Available e-filing and payment facilities, current forms, classification and government fees should be checked at the time of filing. This legal-service guide is separate from the independent <Link href="/intellectual-property-in-pakistan/">overview of intellectual property in Pakistan</Link>.</p>
          <h2>Frequently Asked Trademark Questions</h2>
          <h3>Answers for Applicants, Startups and Existing Brand Owners</h3>
          <div className="faq-list">{faqs.map(([question, answer]) =>
            <section className="faq-item active" key={question}><h4>{question}</h4><p>{answer}</p></section>
          )}</div>
          <h2>Contact Right Law Associates About Brand Protection</h2>
          <h3>Share the Proposed Mark and Business Details</h3>
          <p>For a focused phone appointment, explain the proposed name or logo, intended goods or services, current business structure and any existing registry correspondence. Case-specific advice requires reviewing the documents and relevant law. We do not guarantee registration or a fixed decision time.</p>
          <div className="hero-actions">
            <Link href="/contact/" className="button button-gold">Request a Trademark Legal Review</Link>
            <Link href="/corporate-tax-law-services/" className="button button-dark">Corporate and Tax Legal Services</Link>
          </div>
        </div>
      </article>
    </main>
    <Footer />
  </>
}
