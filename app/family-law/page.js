import Link from 'next/link'
import { ArrowUpRight, CheckCircle2, MessageCircle, Phone } from 'lucide-react'
import { firm } from '../../lib/legal-data'
import { Footer } from '../../components/legal-site'
import KarachiShortCta from '../../components/karachi-short-cta'

export const metadata = {
  title: 'Family Law in Pakistan | Family Lawyers for Divorce, Khula, Custody & Maintenance',
  description: 'Family lawyers in Pakistan for divorce, khula, child custody, guardianship, maintenance, dower, dowry and family court proceedings. Right Law Associates.',
  alternates: { canonical: 'https://rightlaw.pk/family-law/' },
  openGraph: {
    title: 'Family Law in Pakistan | Right Law Associates',
    description: 'Legal guidance and representation for divorce, khula, custody, guardianship, maintenance and other family law matters in Pakistan.',
    url: 'https://rightlaw.pk/family-law/',
    siteName: 'Right Law Associates',
    type: 'article',
  },
}

const services = [
  'Divorce, talaq and Union Council procedure',
  'Khula and dissolution of marriage through Family Court',
  'Child custody, visitation and guardianship proceedings',
  'Child and wife maintenance claims and enforcement',
  'Recovery of dower, dowry articles and personal belongings',
  'Restitution of conjugal rights and related family litigation',
  'Nikah Nama, marriage registration and marital-status documentation',
  'Family law assistance for overseas Pakistanis',
]

const faqs = [
  ['What matters do family lawyers in Pakistan handle?', 'Family lawyers handle matrimonial and domestic legal matters including divorce, talaq, khula, dissolution of marriage, child custody, visitation, guardianship, maintenance, dower, dowry articles, restitution of conjugal rights and related Family Court proceedings. The correct legal route depends on the facts and the relief required.'],
  ['Can a wife obtain khula if the husband does not agree?', 'A wife may approach the Family Court for dissolution of marriage through khula. The husband’s agreement is not necessarily required for the court to determine the claim. The court examines the pleadings, reconciliation process and applicable law before passing an appropriate decree.'],
  ['Does a husband need to follow a legal process after pronouncing talaq?', 'Yes. A verbal or written pronouncement should not be treated as the end of the legal process. The Muslim Family Laws Ordinance, 1961 provides a statutory notice and reconciliation procedure involving the relevant Union Council. Proper documentation is important for later proof of marital status.'],
  ['How is child custody decided?', 'Custody disputes are determined with the welfare of the minor as the central consideration. Courts may consider age, care arrangements, education, safety, emotional welfare, conduct of the parties and other circumstances. Financial strength alone does not decide custody.'],
  ['Can an overseas Pakistani pursue a family case in Pakistan?', 'In many matters, yes. Depending on the nature of the case, documents, jurisdiction and procedural requirements, an overseas client may act through a properly authorised attorney and coordinate evidence or appearances with Pakistani counsel.'],
  ['Is maintenance only payable to children?', 'No. Maintenance claims may involve children and, depending on the circumstances and applicable law, a wife may also assert maintenance rights. The amount and period depend on the facts, legal entitlement, evidence and court determination.'],
  ['What documents should I bring to a family-law consultation?', 'Bring the CNICs or identity documents available to you, Nikah Nama or marriage certificate, children’s B-Forms or birth records, relevant notices, previous court orders, proof of expenses or income where relevant, and any correspondence or documents connected with the dispute.'],
  ['Which court hears family cases in Pakistan?', 'Family Courts hear many matrimonial and financial family claims, while guardianship matters are dealt with under the relevant guardianship jurisdiction. Union Councils and Arbitration Councils also perform statutory functions in matters such as talaq notice and marriage-related registration processes.'],
  ['What is the difference between divorce, talaq and khula?', 'Talaq generally refers to dissolution initiated by the husband, while khula is a court-based remedy commonly pursued by a wife. Divorce is often used as a broader description of marital dissolution. The documents, forum and post-decree steps differ according to the legal route used.'],
  ['Can child custody and guardianship be claimed together?', 'They may arise in the same family dispute, but custody and guardianship are distinct legal concepts. The required pleadings should identify whether the client seeks day-to-day custody, legal guardianship, visitation, authority over property, travel permission or another specific order.'],
  ['Can a father seek visitation if the child lives with the mother?', 'Yes. A non-custodial parent may seek structured visitation or access. The court considers the child’s welfare and may set a schedule for meetings, holidays, calls or other contact depending on the circumstances.'],
  ['Can a mother seek maintenance for children before divorce is final?', 'A child-maintenance claim can be legally distinct from the final status of the marriage. The correct filing strategy depends on the facts, existing proceedings and the relief already claimed, so the chronology should be reviewed before filing.'],
  ['How is dower different from dowry articles?', 'Dower or mahr arises from the marriage contract, while dowry articles and bridal belongings are separate property issues. The Nikah Nama, lists, receipts, photographs, admissions and other evidence may be relevant to the respective claims.'],
  ['What happens if the other party avoids court service?', 'Avoidance of service can delay proceedings, but procedural law provides methods for progressing service where ordinary service is unsuccessful. Accurate address and service information should be prepared at filing stage.'],
  ['Can family court orders be enforced after judgment?', 'Yes. A decree or order may require execution or other post-decree steps. Maintenance arrears, custody implementation, certified copies and administrative follow-up can all require further action after the main decision.'],
  ['Can family disputes be settled without completing a trial?', 'Many family disputes can be resolved through lawful settlement where both sides agree and the terms are workable. Settlement should be documented carefully, especially where children, maintenance, dower or property are involved.'],
  ['Can one lawyer handle connected family and property issues?', 'Connected issues should be coordinated so that one proceeding does not prejudice another. A family dispute may overlap with inheritance, jointly held property, possession or documentation, and those issues may require separate pleadings or specialist input.'],
  ['Do overseas powers of attorney work for every family case?', 'No single generic power of attorney fits every matter. The authority should match the acts required in the case, and authentication, identification and court requirements should be checked before execution.'],
  ['Can a family case be filed in Karachi if one spouse lives elsewhere?', 'Jurisdiction depends on the type of claim and legally relevant connecting facts. Residence, place of marriage, place where parties last lived together and other statutory factors may matter, so jurisdiction should be checked before filing.'],
  ['Should WhatsApp messages and digital records be preserved?', 'Potentially relevant communications should be preserved in their original form where possible. Their legal usefulness depends on authenticity, context and the issue in dispute.'],
  ['How long does a family case take in Pakistan?', 'There is no single reliable duration for every family case. Service, evidence, court workload, interim applications, settlement efforts, appeals and compliance by the parties can affect the timeline.'],
  ['Can Right Law Associates assist with family matters in Karachi, Islamabad and Lahore?', 'Right Law Associates coordinates family-law assistance across its relevant offices and legal teams. The lawyer assigned should match the city, forum and nature of the matter, with senior or appellate counsel involved where genuinely required.'],
]

export default function FamilyLawPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LegalService',
        '@id': 'https://rightlaw.pk/family-law/#service',
        name: 'Family Law Services in Pakistan',
        url: 'https://rightlaw.pk/family-law/',
        provider: { '@type': 'Organization', name: 'Right Law Associates (Pvt) Limited', url: 'https://rightlaw.pk/' },
        areaServed: 'Pakistan',
        telephone: firm.phone,
        serviceType: ['Family Law', 'Divorce', 'Khula', 'Child Custody', 'Guardianship', 'Maintenance'],
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://rightlaw.pk/family-law/#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rightlaw.pk/' },
          { '@type': 'ListItem', position: 2, name: 'Family Law', item: 'https://rightlaw.pk/family-law/' },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': 'https://rightlaw.pk/family-law/#webpage',
        url: 'https://rightlaw.pk/family-law/',
        name: 'Family Law In Pakistan | Family Lawyers For Divorce, Khula, Custody And Maintenance',
        breadcrumb: { '@id': 'https://rightlaw.pk/family-law/#breadcrumb' },
        about: { '@id': 'https://rightlaw.pk/family-law/#service' },
      },
      {
        '@type': 'LocalBusiness',
        '@id': 'https://rightlaw.pk/#localbusiness',
        name: 'Right Law Associates',
        url: 'https://rightlaw.pk/',
        telephone: firm.phone,
        areaServed: ['Karachi', 'Islamabad', 'Rawalpindi', 'Lahore', 'Pakistan'],
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map(([question, answer]) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: { '@type': 'Answer', text: answer },
        })),
      },
    ],
  }

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <main className="family-law-page">
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow gold">FAMILY LAW • PAKISTAN</p>
            <h1>Family Law In Pakistan: Lawyers for Divorce, Khula, Child Custody, Guardianship and Maintenance</h1>
            <p className="hero-lede">Right Law Associates advises and represents clients in family law matters across Pakistan, including divorce, khula, child custody, guardianship, maintenance, dower, dowry recovery and Family Court proceedings.</p>
            <div className="hero-actions">
              <Link href="/contact/" className="button button-gold">Consult a Family Lawyer <ArrowUpRight size={17} /></Link>
              <a className="button button-outline-light" href={`tel:${firm.phone}`}><Phone size={16} /> {firm.phone}</a>
              <a className="text-link light-link" href={`https://wa.me/${firm.whatsapp}`} target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp</a>
            </div>
          </div>
          <div className="hero-visual"><img src="/images/family-law-pakistan.svg" alt="Family lawyers discussing legal documents with clients in Pakistan" /></div>
        </div>
      </section>

      <KarachiShortCta />
      <nav className="container" aria-label="Breadcrumb" style={{ paddingTop: 24, fontSize: 13 }}>
        <Link href="/">Home</Link> <span aria-hidden="true">›</span> <span>Family Law</span>
      </nav>

      <article className="section family-article">
        <div className="container family-article-inner">
          <p className="eyebrow">Right Law Associates</p>
          <h2>Family Lawyers In Pakistan for Sensitive and High-Stakes Family Matters</h2>
          <div className="senior-counsel-card family-team-card">
            <div>
              <p className="eyebrow">Family Law Team</p>
              <h3>Relevant Family Lawyers for Karachi and Connected Proceedings</h3>
              <p><strong>Shankar Lal Kataria</strong> — Family Law Head, Karachi, for matrimonial and Family Court matters.</p>
              <p><strong>Mohsin Ali Mirani</strong> — Advocate handling connected civil and family litigation where the facts overlap.</p>
              <p><strong>Zaheer Ashraf Qazi</strong> — Right Law team member for family-law coordination and client matters.</p>
              <p><strong>Sobia Mohsin</strong> — Advocate for family and matrimonial matters, documentation and client advisory work.</p>
              <p className="senior-counsel-note">Verified portraits are not shown here unless an authorised repository source clearly identifies the correct lawyer. Senior or appellate counsel is assigned only where the nature and forum of the case require it.</p>
            </div>
          </div>
          <p>Family law in Pakistan covers some of the most personal legal issues a person may face. A marriage may be ending, a parent may be trying to protect contact with a child, a wife may be seeking maintenance, or a family may need guardianship orders before a minor can travel, inherit property or complete official documentation. These matters cannot be handled properly by using a single standard form or relying on informal advice. The remedy depends on the relationship between the parties, the relief required, the forum that has jurisdiction and the evidence available.</p>
          <h3>Family Law Advice Built Around The Correct Legal Remedy</h3>
          <p>Right Law Associates provides family law services through lawyers dealing with matrimonial disputes, child-related proceedings and related documentation. Our work includes advising clients before litigation, drafting pleadings and notices, filing and defending cases, preparing evidence, appearing before the relevant courts and helping clients understand what should happen after a decree or order. The objective is not simply to file a case. The objective is to identify the correct legal route from the beginning so that avoidable procedural mistakes do not create additional delay or cost.</p>
          <h3>Confidential Family Court Representation and Evidence Review</h3>
          <p>Family disputes also require discretion. Allegations between spouses, financial records, personal messages, medical information, school records and details concerning children may all become relevant to a case. A careful family lawyer should separate legally important facts from emotional background, preserve useful evidence and present the case in a manner that assists the court without unnecessarily increasing hostility between the parties.</p>

          <h2>Core Family Law Services In Pakistan</h2>
          <p>Family law is broader than divorce. A single matrimonial dispute may involve several connected claims, and each one may require a different pleading, document or forum. For example, the end of a marriage may raise questions about dower, dowry articles, maintenance, child custody, visitation, guardianship, Union Council documentation and execution of an existing order. For this reason, the legal strategy should be planned as a whole rather than treating every issue in isolation.</p>
          <div className="service-grid" style={{ marginTop: 28, marginBottom: 36 }}>
            {services.map((item) => <div className="service-card family-service-card" key={item}><span className="service-icon"><CheckCircle2 size={22} /></span><strong className="family-service-title">{item}</strong></div>)}
          </div>
          <h3>Family Law Route Comparison</h3>
          <div className="property-table-wrap">
            <table>
              <thead><tr><th>Matter</th><th>Typical Forum Or Process</th><th>Key Preparation</th></tr></thead>
              <tbody>
                <tr><td>Talaq</td><td>Union Council / Arbitration Council statutory process after pronouncement</td><td>Notice, identity details, marriage record and service information</td></tr>
                <tr><td>Khula / Dissolution</td><td>Family Court</td><td>Nikah Nama, jurisdiction facts, pleadings and connected financial claims</td></tr>
                <tr><td>Child Custody / Visitation</td><td>Family / guardianship jurisdiction as applicable</td><td>Child welfare facts, schooling, care arrangements and existing orders</td></tr>
                <tr><td>Maintenance</td><td>Family Court</td><td>Expense evidence, income material, prior payments and dependent details</td></tr>
              </tbody>
            </table>
          </div>

          <h2>Divorce And Talaq Under Pakistani Family Law</h2>
          <p>A husband who intends to divorce his wife should obtain advice about both the religious pronouncement and the statutory legal process. In Pakistan, the Muslim Family Laws Ordinance, 1961 establishes a notice mechanism connected with the relevant Union Council and Arbitration Council. The legal process should not be ignored simply because a talaq has been pronounced verbally or recorded in a private writing. Later questions regarding marital status, remarriage, immigration, inheritance and official records often depend on whether the statutory procedure and documentation were properly completed.</p>
          <h3>Talaq Notice, Union Council Procedure And Divorce Documentation</h3>
          <p>The correct documentation may include a written talaq deed or notice, proof of service where required, Union Council correspondence and the eventual certificate or record issued after completion of the relevant process. The precise steps can vary according to the parties’ circumstances and local administrative practice, so clients should avoid assuming that a document obtained from an informal source is sufficient for every legal purpose.</p>
          <h3>Family Court Claims Connected With Divorce And Separation</h3>
          <p>Disputes also arise over the effective date of divorce, financial claims after separation, return of personal belongings and whether separate proceedings are required for maintenance, dower or children. A family lawyer can identify which claims belong before the Family Court and which aspects of the divorce process require action before the Union Council or another authority.</p>

          <h2>Khula And Dissolution Of Marriage Through The Family Court</h2>
          <p>Khula is one of the principal legal remedies available to a Muslim wife seeking dissolution of marriage through the Family Court. It is important to distinguish khula from a husband’s talaq and from other grounds on which a marriage may be dissolved. The pleadings should accurately reflect the remedy being claimed, because the consequences concerning dower, evidence and the nature of the decree may depend on the legal basis of the suit.</p>
          <h3>Khula Proceedings And Family Court Jurisdiction</h3>
          <p>A Family Court proceeding ordinarily begins with the filing of a properly drafted plaint before the court having jurisdiction. The defendant is served, written response and evidence stages may follow, and the court undertakes the reconciliation process required by law. Where reconciliation does not succeed and the legal requirements are satisfied, the court may pass a decree dissolving the marriage. After the decree, further steps may still be required for official marital-status documentation and related records.</p>
          <h3>Documents, Dower And Connected Family Claims</h3>
          <p>Many clients approach a lawyer only after a case has already been filed using incomplete facts or unsuitable prayers. That can create avoidable complications. Before filing, counsel should examine the Nikah Nama, current residence of the parties, any previous proceedings, dower terms, children’s circumstances and whether claims for maintenance, dowry articles or other relief should be joined or pursued separately.</p>

          <h2>Child Custody, Visitation And Guardianship In Pakistan</h2>
          <p>Child custody disputes are not determined by treating a child as property belonging automatically to one parent. The welfare of the minor is the central consideration. Courts may examine the child’s age, present care arrangement, schooling, emotional and physical welfare, relationship with each parent, safety, stability and any other circumstance relevant to the child’s best interests. The facts of every family are different, which is why broad claims such as “the father always gets custody” or “the mother can never lose custody” are legally unreliable.</p>
          <h3>Custody And Guardianship Are Different Legal Issues</h3>
          <p>Custody and guardianship are related but distinct concepts. Physical custody concerns day-to-day care, whereas legal guardianship may concern authority over the minor’s person or property and may be necessary for matters such as travel, education, identity documents, property or formal representation. Proceedings may involve the Family Court or Guardian Court jurisdiction depending on the relief sought and the applicable legal framework.</p>
          <h3>Visitation, Access And Enforcement Of Child Custody Orders</h3>
          <p>Visitation should also be addressed carefully. A parent who does not have day-to-day custody may seek a structured meeting schedule, holiday access, video calls or other contact arrangements. If an existing order is being ignored, enforcement or modification may need to be considered. The aim should be a workable arrangement consistent with the child’s welfare rather than using access as leverage in a dispute between adults.</p>

          <h2>Child Maintenance And Wife Maintenance</h2>
          <p>Maintenance claims frequently arise during separation and after the breakdown of a marriage. A parent caring for children may need financial support for food, clothing, education, healthcare, transport and ordinary living expenses. The amount is not decided by a universal fixed formula. Courts consider the circumstances proved before them, including the needs of the person claiming maintenance and the financial position and obligations of the person from whom maintenance is sought.</p>
          <h3>Evidence For Child Maintenance Claims</h3>
          <p>Evidence can therefore be important. School fee records, medical expenses, rental documents, household costs, salary material, business records and other financial information may assist the court. Where a maintenance order has already been passed but is not being obeyed, execution proceedings may be required to recover arrears and enforce compliance.</p>
          <h3>Wife Maintenance And Case-Specific Entitlement</h3>
          <p>Wife maintenance requires separate legal analysis because entitlement may depend on marital status, conduct pleaded by the parties, the nature of the proceedings and the period for which maintenance is claimed. Clients should obtain advice based on their actual facts instead of relying on general statements found online.</p>

          <h2>Dower, Dowry Articles And Recovery Of Personal Property</h2>
          <p>Financial disputes connected with marriage often continue even after the relationship itself has ended. Dower or mahr is a contractual and legal right arising from the marriage and should be distinguished from dowry articles, bridal gifts and personal belongings. The Nikah Nama may contain important information concerning the amount of dower, whether it was prompt or deferred, and any special conditions agreed between the parties.</p>
          <h3>Evidence For Dowry Articles And Bridal Property</h3>
          <p>Claims for dowry articles may involve lists, receipts, photographs, witness testimony and admissions by the opposing party. Where original receipts do not exist, the case does not automatically end; however, the available evidence should be assessed realistically. A lawyer should identify which items can be proved, whether return of specific articles is practical and whether an alternative monetary claim is legally appropriate.</p>
          <h3>Jewellery, Personal Documents And Property After Separation</h3>
          <p>Personal property disputes may also involve jewellery, documents, passports, educational certificates or belongings retained after separation. These issues should be documented early because memories fade and items may be moved, sold or disputed later.</p>

          <h2>Family Court Procedure And The Importance Of Correct Pleadings</h2>
          <p>The Family Courts Act, 1964 provides the procedural framework for many family claims in Pakistan. Family litigation is intended to provide a specialised forum, but that does not mean pleadings can be casual. The plaint should identify the parties correctly, establish jurisdiction, state material facts, specify the legal relief sought and attach or refer to relevant documents. A weak or confused pleading may force a party to seek amendments later or may distract from the actual issue the court must decide.</p>
          <h3>Service, Evidence And Family Court Hearings</h3>
          <p>After filing, service of the opposing party is often the first practical obstacle. Incorrect addresses, avoidance of service or overseas residence can delay a case. Once service is complete, the matter may proceed through reconciliation, response, evidence and arguments according to the nature of the claim. Documentary evidence should be organised before it becomes urgently required. Witnesses should understand the facts they personally know rather than being coached to repeat broad conclusions.</p>
          <h3>Execution And Post-Decree Family Law Procedure</h3>
          <p>A decree is not always the final step. Maintenance orders may require execution, custody orders may need enforcement, certified copies may be needed for government departments, and a dissolution decree may be followed by administrative documentation. Good case planning therefore considers both the litigation and the post-decree process.</p>

          <h2>Family Law Assistance For Overseas Pakistanis</h2>
          <p>Overseas Pakistanis often face family disputes in Pakistan while living in the United Kingdom, United States, Canada, Gulf states, Europe or elsewhere. Distance creates practical issues involving signatures, identity verification, powers of attorney, service, evidence and attendance. In suitable matters, a properly drafted and authenticated power of attorney may allow a representative in Pakistan to take procedural steps on behalf of the overseas client, although personal attendance may still be required where the court considers it necessary.</p>
          <h3>Power Of Attorney For Overseas Family Law Cases</h3>
          <p>Overseas clients should avoid sending a broad generic power of attorney without first determining what authority is actually needed. The document may need to authorise filing, engaging counsel, signing pleadings, receiving notices, obtaining certified copies, making statements concerning settlement or performing specific administrative acts. Consular or other authentication requirements should also be checked according to the country from which the document is executed.</p>
          <h3>Remote Case Management, Children And Cross-Border Issues</h3>
          <p>Time zones and remote communication can be managed by maintaining a clear file chronology, scanning documents in advance and scheduling conferences before important hearings. Where children are located in a different country, additional jurisdictional and immigration considerations may arise and should be assessed separately.</p>

          <h2>Choosing The Correct Family Lawyer And Legal Strategy</h2>
          <p>A family-law matter should be evaluated on substance, not advertising claims. The lawyer should be able to identify the relevant forum, explain the available remedies, point out weaknesses in the evidence and give a realistic account of procedure. No responsible lawyer can guarantee a court result. What counsel can do is prepare the case carefully, present admissible material, comply with procedural requirements and advise the client about lawful settlement where settlement is appropriate.</p>
          <h3>Prepare A Clear Family Law Chronology And Documents</h3>
          <p>Clients can also improve the quality of legal advice by preparing a concise chronology before consultation. Record the date of marriage, separation, important notices, previous cases, children’s dates of birth, significant payments and any existing orders. Bring the Nikah Nama, identity documents and relevant correspondence. A structured initial file allows the lawyer to spend more time analysing the case and less time reconstructing basic facts.</p>
          <h3>Family Lawyers For Connected Property, Inheritance And Criminal Issues</h3>
          <p>Right Law Associates handles family law matters through consultation, drafting and litigation support across Karachi, Lahore, Islamabad, Rawalpindi and other parts of Pakistan through professional arrangements. Where a matter overlaps with property, inheritance, taxation, corporate ownership or criminal allegations, the firm can coordinate with the appropriate practice team so that one legal step does not unintentionally prejudice another.</p>

          <h2>Frequently Asked Questions About Family Law In Pakistan</h2>
          <div className="faq-list" style={{ marginTop: 24 }}>
            {faqs.map(([question, answer]) => <div className="faq-item active" key={question}><h3 style={{ marginBottom: 10 }}>{question}</h3><p>{answer}</p></div>)}
          </div>

          <h2>Speak With A Family Lawyer At Right Law Associates</h2>
          <p>If you are considering divorce or khula, responding to a family case, seeking custody or guardianship, claiming maintenance, recovering dower or dowry articles, or managing a family-law matter from overseas, obtain advice before taking a step that may affect jurisdiction or evidence. Bring the available documents and a short chronology of the dispute so the legal team can identify the appropriate route.</p>
          <p>This page provides general legal information and does not replace advice on the facts of an individual case. Family law outcomes depend on the law, evidence, jurisdiction and circumstances before the relevant court or authority.</p>
          <div className="hero-actions" style={{ marginTop: 30 }}>
            <Link href="/contact/" className="button button-gold">Contact Right Law Associates <ArrowUpRight size={17} /></Link>
            <a className="button button-dark" href={`tel:${firm.phone}`}><Phone size={16} /> Call {firm.phone}</a>
          </div>
        </div>
      </article>
    </main>
    <Footer />
  </>
}
