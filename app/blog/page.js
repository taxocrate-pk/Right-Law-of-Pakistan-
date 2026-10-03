import Link from 'next/link'
import { Footer } from '../../components/legal-site'

export const metadata = {
  title: 'Legal Blog | Pakistani Law Guides | Right Law Associates',
  description: 'Detailed legal guides on family law, divorce, child custody, property, succession, court marriage, online nikah, civil litigation and taxation in Pakistan.',
  alternates: { canonical: 'https://rightlaw.pk/blog/' },
}

const categories = [
  {
    title: 'Family Law, Divorce and Child Custody',
    copy: 'Family disputes often involve several connected rights at once. Our family law resources explain divorce and khula procedure, child custody, guardianship, maintenance, dower, dowry recovery and family court process in Pakistan.',
    links: [
      ['Family Law in Pakistan', '/family-law-in-pakistan/'],
      ['Divorce Law in Pakistan', '/divorce-law/'],
      ['Dissolution of Marriage in Pakistan', '/dissolution-of-marriage-in-pakistan/'],
      ['Child Custody in Pakistan', '/child-custody/'],
      ['Legal Guardianship Laws of Pakistan', '/legal-guardianship-laws-of-pakistan/'],
      ['Divorce Papers in Pakistan', '/divorce-papers-in-pakistan/'],
    ],
  },
  {
    title: 'Marriage, Court Marriage and Online Nikah',
    copy: 'These guides cover free consent, identity documents, Nikah, witnesses, attorney or proxy arrangements, Nikah Nama registration, Union Council records and related marriage documentation.',
    links: [
      ['Court Marriage Procedure in Pakistan', '/court-marriage-procedure-in-pakistan/'],
      ['Court Marriage Legal Framework', '/court-marriage-in-pakistan-legal-framework/'],
      ['Online Marriage in Pakistan', '/online-marriage/'],
      ['Online Nikah and Online Marriage', '/online-nikah-online-marriage-in-islam-and-pakistan/'],
      ['Nikah Nama in Pakistan', '/nikah-nama/'],
      ['Marriage Registration Certificate', '/marriage-registration-certificate/'],
    ],
  },
  {
    title: 'Property, Tenancy and Succession',
    copy: 'Property and inheritance matters depend heavily on title, possession, registration records, legal heirs and the nature of the estate. These resources explain the main legal routes and documents.',
    links: [
      ['Property Law in Pakistan', '/property-law-in-pakistan/'],
      ['Property Disputes in Pakistan', '/property-disputes/'],
      ['Rental and Tenancy Law', '/rental-and-tenancy-law-of-pakistan/'],
      ['Rental Disputes', '/rental-disputes-between-landlords-and-tenants-in-pakistan/'],
      ['Succession Certificate for Legal Heirs', '/succession-certificate-in-pakistan-for-legal-heirs/'],
      ['Succession Certificate and Letter of Administration', '/succession-certificate-letter-of-administration/'],
    ],
  },
  {
    title: 'Civil, Corporate, Tax and Intellectual Property Law',
    copy: 'Our civil and business-law material covers litigation, company and tax matters, FBR compliance and intellectual property protection. Each guide focuses on the relevant forum, documents and legal procedure.',
    links: [
      ['Civil Law in Pakistan', '/civil-law/'],
      ['Lawyers for Court Litigation', '/lawyers-for-litigation-in-the-court/'],
      ['Corporate and Tax Law Services', '/corporate-tax-law-services/'],
      ['Income Tax Return Filing Lawyers', '/fbr-income-tax-return-filing-lawyers-pakistan/'],
      ['NTN Verification from FBR', '/ntn-verification-from-the-fbr-in-pakistan/'],
      ['Intellectual Property Law in Pakistan', '/intellectual-property-in-pakistan/'],
    ],
  },
]

const featured = [
  ['Misyar Marriage And Family Rights Review', '/misyar-marriage-nikah-misyar-marriages', 'Marriage Law'],
  ['Mehar / Mahr And Dower Legal Advice', '/mehar-mahr-in-islam', 'Family Law'],
  ['Family Lawyer Sobia Mohsin In Karachi', '/best-family-and-divorce-lawyer-and-lady-advocate-in-karachi-sobia-mohsin-shah-legal-expertise-in-family-law', 'Family Law'],
  ['Nikah Khawan And Registrar In Karachi', '/nikah-khawan-qazi-and-nikah-registrar-in-karachi-pakistan', 'Marriage Law'],
  ['NADRA Death Certificate And Verification', '/nadra-computerized-death-certificate-online-verification-check', 'Civil Certificates'],
  ['Dissolution of Marriage in Pakistan', '/dissolution-of-marriage-in-pakistan/', 'Family Law'],
  ['Family Law in Pakistan', '/family-law-in-pakistan/', 'Family Law'],
  ['Child Custody in Pakistan', '/child-custody/', 'Family Law'],
  ['Property Law in Pakistan', '/property-law-in-pakistan/', 'Property Law'],
  ['Succession Certificate in Pakistan', '/succession-certificate-in-pakistan-for-legal-heirs/', 'Succession'],
  ['Court Marriage in Pakistan', '/court-marriage-in-pakistan-legal-framework/', 'Marriage Law'],
]

export default function BlogPage() {
  return <><main>
    <section style={{background:'#173b35',color:'#fff',padding:'76px 0'}}>
      <div className="container">
        <p className="eyebrow gold">Pakistani legal information</p>
        <h1 style={{fontFamily:'Arial, Helvetica, sans-serif',fontSize:'clamp(40px,5vw,64px)',lineHeight:1.05,margin:'0 0 22px',maxWidth:900}}>Right Law Associates Legal Blog and Pakistani Law Guides</h1>
        <p style={{maxWidth:800,color:'#d2ddda',lineHeight:1.75,fontSize:17}}>Our legal blog explains Pakistani law in practical language for individuals, families, businesses and overseas Pakistanis. The purpose is to help readers understand the legal framework, identify the documents that may matter and find the correct specialist page before seeking case-specific advice.</p>
      </div>
    </section>

    <section className="section" style={{background:'#fff'}}>
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">Start with the right subject</p>
          <h2><b>Legal Guides Organised by Practice Area</b></h2>
          <p className="section-copy">Pakistani legal questions are often connected. A divorce matter may also involve child custody and maintenance; a property dispute may involve succession; a court marriage may later require registration and certificates. The sections below connect related guides so readers can move between the relevant legal topics without relying on isolated articles.</p>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:18,marginTop:42}}>
          {categories.map((category) => <section key={category.title} style={{border:'1px solid #dce5e1',background:'#fdfcf9',padding:26}}>
            <h2 style={{fontFamily:'Arial, Helvetica, sans-serif',fontSize:27,color:'#173b35',margin:'0 0 12px'}}><b>{category.title}</b></h2>
            <p style={{lineHeight:1.7,color:'#687874'}}>{category.copy}</p>
            <div style={{marginTop:18}}>
              {category.links.map(([label, href]) => <p key={href} style={{margin:'10px 0',paddingBottom:10,borderBottom:'1px solid #e4e8e6'}}><Link href={href} className="text-link">{label} →</Link></p>)}
            </div>
          </section>)}
        </div>
      </div>
    </section>

    <section className="section" style={{background:'#f7f3eb'}}>
      <div className="container">
        <div className="section-intro"><p className="eyebrow">Featured legal guides</p><h2><b>Important Pakistani Law Topics</b></h2><p className="section-copy">These pages cover some of the most frequently connected legal issues handled by Right Law Associates.</p></div>
        <div className="article-grid">{featured.map(([title,href,category]) => <article className="article-card" key={href}><div className="article-meta"><span>{category}</span></div><h3>{title}</h3><Link href={href} className="text-link">Read detailed guide →</Link></article>)}</div>
      </div>
    </section>

    <section className="section" style={{background:'#fff'}}>
      <div className="container" style={{maxWidth:900}}>
        <h2><b>How to Use the RightLaw.pk Legal Blog</b></h2>
        <p>Use these articles as a starting point rather than as a substitute for review of your own documents. Pakistani legal procedure can change significantly depending on jurisdiction, dates, prior notices, registrations, court orders and the status of the parties. A general guide may explain the framework, but the appropriate next step should be based on the actual facts.</p>
        <p>If your issue concerns marriage or family law, begin with our <Link href="/family-law-in-pakistan/">family law in Pakistan</Link> guide and then move to the more specific page on <Link href="/divorce-law/">divorce law</Link>, <Link href="/child-custody/">child custody</Link> or <Link href="/legal-guardianship-laws-of-pakistan/">guardianship</Link>. For property matters, start with <Link href="/property-law-in-pakistan/">property law in Pakistan</Link> and follow the links to property disputes, tenancy or succession according to the facts.</p>
        <p>Marriage-related readers can compare the legal framework for <Link href="/court-marriage-procedure-in-pakistan/">court marriage procedure</Link>, <Link href="/online-marriage/">online marriage</Link> and <Link href="/marriage-registration-certificate/">marriage registration certificates</Link>. Business and tax readers can move directly to our <Link href="/corporate-tax-law-services/">corporate and tax law services</Link>, <Link href="/fbr-income-tax-return-filing-lawyers-pakistan/">income tax return filing</Link> and <Link href="/intellectual-property-in-pakistan/">intellectual property</Link> pages.</p>
        <div style={{marginTop:36,padding:28,background:'#173b35',color:'#fff'}}><h2 style={{color:'#fff',marginTop:0}}><b>Need Advice on a Specific Legal Matter?</b></h2><p style={{color:'#d2ddda'}}>Send a short factual summary and the key documents through our contact page. The relevant legal team can then identify the appropriate practice area and next procedural step.</p><Link href="/contact/" className="button button-gold">Contact Right Law Associates</Link></div>
      </div>
    </section>
  </main><Footer /></>
}
