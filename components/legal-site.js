'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, BriefcaseBusiness, Building2, ChevronDown, FileText, Gavel, HeartHandshake, Lightbulb, MapPin, Menu, MessageCircle, Phone, Scale, ShieldAlert, ShieldCheck, Users, X } from 'lucide-react'
import { cities, firm, practiceAreas, practicePath, cityPath } from '../lib/legal-data'
import { Logo as HeaderLogo } from './rightlaw-header'
import KarachiShortCta from './karachi-short-cta'
import SectionImage from './section-image'

const icons = { family: HeartHandshake, scale: Scale, custody: Users, shield: ShieldAlert, idea: Lightbulb, file: FileText, building: Building2, briefcase: BriefcaseBusiness, gavel: Gavel }

function Logo() {
  return <Link href="/" className="logo" aria-label="Right Law Associates home"><span className="logo-mark"><span>R</span></span><span><strong>RIGHT LAW</strong><small>ASSOCIATES</small></span></Link>
}

function Header() {
  const [open, setOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const closeAll = () => { setOpen(false); setOpenDropdown(null) }
  return <header className="site-header"><div className="topbar"><div className="container topbar-inner"><span>Professional legal representation across Pakistan</span><span className="top-contact"><a href={`tel:${firm.phone}`}>Call {firm.phone}</a></span></div></div><div className="container nav-wrap"><Logo /><button className="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button><nav className={open ? 'main-nav is-open' : 'main-nav'}><Link href="/about-us/" onClick={closeAll}>About Us</Link><div className="nav-dropdown"><button onClick={() => setOpenDropdown(openDropdown === 'practice' ? null : 'practice')} aria-expanded={openDropdown === 'practice'}>Practice Areas <ChevronDown size={14} /></button>{openDropdown === 'practice' && <div className="dropdown-menu">{practiceAreas.map((item) => <Link href={practicePath(item.slug)} key={item.slug} onClick={closeAll}>{item.name}<ArrowUpRight size={14} /></Link>)}</div>}</div><Link href="/meet-our-attorneys/" onClick={closeAll}>Lawyers</Link><div className="nav-dropdown"><button onClick={() => setOpenDropdown(openDropdown === 'locations' ? null : 'locations')} aria-expanded={openDropdown === 'locations'}>Locations <ChevronDown size={14} /></button>{openDropdown === 'locations' && <div className="dropdown-menu">{cities.map((city) => <Link href={cityPath(city.name)} key={city.name} onClick={closeAll}>{city.name}<ArrowUpRight size={14} /></Link>)}</div>}</div><Link href="/blog/" onClick={closeAll}>Blog</Link><Link href="/contact/" className="nav-cta" onClick={closeAll}>Contact Us <ArrowUpRight size={15} /></Link></nav></div></header>
}

const footerGroups = [
  { title: 'Family & Litigation', links: [
    ['Family Law', '/family-law/'], ['Divorce & Khula', '/divorce-lawyer-for-khula-divorce/'], ['Child Custody', '/child-custody/'], ['Guardianship', '/legal-guardianship-laws-of-pakistan/'], ['Civil Lawyers', '/civil-law/'], ['Criminal Law', '/criminal-law-in-pakistan/']
  ] },
  { title: 'Property & Business', links: [
    ['Property Lawyers Karachi', '/property-lawyers-in-karachi/'], ['Property Disputes', '/property-disputes/'], ['Inheritance & Succession', '/succession-certificate-in-pakistan-for-legal-heirs/'], ['Corporate & Tax', '/corporate-tax-law-services/'], ['Company Registration', '/company-registration-service-karachi/'], ['Income Tax Lawyers', '/fbr-income-tax-return-filing-lawyers-pakistan/']
  ] },
  { title: 'Marriage & Documents', links: [
    ['Court Marriage', '/court-marriage-procedure-in-pakistan/'], ['Online Nikah', '/online-marriage/'], ['Marriage Certificate', '/marriage-registration-certificate/'], ['Divorce Certificate', '/divorce-registration-certificate/'], ['Civil Certificates', '/civil-certificates-in-pakistan/'], ['Intellectual Property', '/intellectual-property-in-pakistan/']
  ] },
  { title: 'Right Law Associates', links: [
    ['About Us', '/about-us/'], ['Our Attorneys', '/meet-our-attorneys/'], ['FAQs', '/faq/'], ['Legal Blog', '/blog/'], ['Contact Us', '/contact/']
  ] }
]
export function Footer() {
  const offices = [
    ['Karachi — Johar', 'Supreme Corner, 2nd Floor, Johar Chowrangi'],
    ['Karachi — DHA', '76-C, Mezzanine, Main Jami Commercial, Phase 7'],
    ['Head Office — Islamabad', 'Office No. 5, 2nd Floor, Laraib Plaza, G-9 Markaz, Islamabad'],
    ['Lahore', 'Al-Mairaj Arcade, Chauburji']
  ]
  return <footer className="rightlaw-compact-footer" aria-label="Right Law Associates footer">
    <div className="container footer-grid">
      <div className="footer-brand">
        <div className="footer-logo"><HeaderLogo /></div>
        <p className="footer-blurb">The Right Law. The Right Legal Remedy.</p>
        <a href={`tel:${firm.phone}`}>{firm.phone}</a>
        <a href={`mailto:${firm.email}`}>{firm.email}</a>
      </div>
      {footerGroups.map(group => <div className="footer-links" key={group.title}><h4>{group.title}</h4><nav aria-label={group.title}>{group.links.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</nav></div>)}
    </div>
    <div className="container footer-office-strip"><strong>Offices:</strong>{offices.map(([city,address])=><span key={city}><b>{city}:</b> {address}</span>)}</div>
    <div className="footer-bottom"><div className="container footer-bottom-inner">
      <span>© 2021 Right Law Associates (Pvt) Limited. All Rights Reserved.</span>
      <span className="footer-credits">Website: <a href="https://digitocrate.com/" target="_blank" rel="noopener noreferrer">Digitocrate</a> · SEO: <a href="https://googlepeak.com/" target="_blank" rel="noopener noreferrer">GooglePeak</a></span>
      <span><Link href="/privacy-policy/">Privacy Policy</Link><Link href="/disclaimer/">Disclaimer</Link></span>
    </div></div>
  </footer>
}

// ---------------------------------------------------------------------------
// Homepage (rightlaw.pk/) — rebuilt 1 November 2026 to SEO DNA 2.07 + 2.07B/C/D and the
// Existing-Page Refinement Policy. National key phrases: "Family Lawyers in Pakistan" (8 in
// H1/H2/H3), "Property Lawyers in Pakistan" (5), corporate and tax lawyers (1 each).
// Heading scale for this page: H1 28–42px, H2 22–30px, H3 19px (policy s2).
// ---------------------------------------------------------------------------

const homeCss = `
.rlh-section{padding:56px 0;background:#fff}
.rlh-section.alt{background:#f7f3eb}
.rlh-wrap{width:min(100% - 32px,1040px);margin:0 auto}
.rlh-section h2{font-family:Arial,Helvetica,sans-serif;font-weight:700;color:#173b35;font-size:clamp(22px,2.6vw,30px);line-height:1.22;letter-spacing:-.01em;margin:0 0 14px}
.rlh-section h3{font-family:Arial,Helvetica,sans-serif;font-weight:700;color:#173b35;font-size:19px;line-height:1.3;margin:26px 0 8px}
.rlh-section p,.rlh-section li{color:#33433f;font-size:16px;line-height:1.7}
.rlh-section p{margin:0 0 14px}
.rlh-section a{color:#173b35;text-decoration:underline;text-underline-offset:2px}
.rlh-eyebrow{text-transform:uppercase;color:#a07a3f;font-size:12px;font-weight:700;letter-spacing:.16em;margin:0 0 10px !important}
.rlh-grid3{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;margin-top:22px}
.rlh-grid2{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;margin-top:18px}
.rlh-card{background:#fff;border:1px solid #e3e6e4;padding:22px;display:flex;flex-direction:column}
.rlh-section.alt .rlh-card{background:#fff}
.rlh-card h3{margin-top:0}
.rlh-card p{font-size:15px;margin-bottom:12px}
.rlh-card .rlh-more{margin-top:auto;font-size:14px;font-weight:700;display:inline-flex;gap:6px;align-items:center}
.rlh-steps{counter-reset:step}
.rlh-chips{display:flex;flex-wrap:wrap;gap:8px;margin:20px 0 0;padding:0;list-style:none}
.rlh-chips li{display:inline-flex;align-items:center;gap:6px;background:#ffffff1f;border:1px solid #ffffff55;color:#fff;font-size:13px;font-weight:700;padding:7px 11px;line-height:1.3}
.rlh-hero-office{margin:18px 0 0;color:#dfe7ec;font-size:14px;line-height:1.6}
.rlh-hero-office a{color:#fff;font-weight:700}
.rlh-lawyer{display:grid;grid-template-columns:120px minmax(0,1fr);gap:16px;align-items:start;border:1px solid #e3e6e4;padding:16px;background:#fff}
.rlh-lawyer img{width:120px;height:150px;object-fit:cover;object-position:center 30%;display:block;background:#fff}
.rlh-lawyer h3{margin:0 0 6px}
.rlh-city{display:flex;justify-content:space-between;gap:10px;align-items:center;border:1px solid #e3e6e4;background:#fff;padding:16px 18px;text-decoration:none !important}
.rlh-city strong{display:block;color:#173b35;font-size:16px}
.rlh-city small{display:block;color:#5b6b67;font-size:14px;margin-top:3px}
.rlh-faq details{border-bottom:1px solid #dfe3e1;padding:14px 0}
.rlh-faq summary{cursor:pointer;font-weight:700;color:#173b35;font-size:17px;line-height:1.4;list-style:none;display:flex;justify-content:space-between;gap:12px}
.rlh-faq summary::-webkit-details-marker{display:none}
.rlh-faq details[open] summary svg{transform:rotate(180deg)}
.rlh-faq details p{margin:10px 0 0}
.rlh-figure{margin:22px 0}
.rlh-figure img{width:100%;height:auto;display:block;border-radius:6px}
.rlh-credit{border-top:1px solid #dfe3e1;margin-top:8px;padding-top:18px}
.rlh-credit p{margin:0 0 6px;font-size:15px}
.rlh-cta{display:flex;flex-wrap:wrap;gap:10px;margin-top:16px}
.rlh-cta .button{font-size:14px}
@media (max-width:860px){.rlh-grid3{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (max-width:640px){.rlh-grid3,.rlh-grid2{grid-template-columns:1fr}.rlh-section{padding:40px 0}.rlh-lawyer{grid-template-columns:96px minmax(0,1fr)}.rlh-lawyer img{width:96px;height:120px}}
`

const homeWhatsApp = `https://wa.me/${firm.whatsapp}?text=${encodeURIComponent('Assalam-o-Alaikum, I need advice from a family or property lawyer.')}`

function Hero() {
  return <section className="hero" id="top"><div className="container hero-grid"><div className="hero-copy">
    <p className="eyebrow gold">Right Law Associates · Advocate-led since 1985</p>
    <h1 style={{ fontSize: 'clamp(28px,3.4vw,42px)', lineHeight: 1.15, letterSpacing: '-.01em', fontWeight: 700 }}>Family Lawyers in Pakistan and Property Lawyers in Pakistan for Divorce, Custody, Title and Inheritance</h1>
    <p className="hero-lede">Family Lawyers in Pakistan at Right Law Associates act in divorce, Khula, child custody, maintenance and dower cases, and our property lawyers in Pakistan act in title, possession, partition and inheritance disputes. We offer reliable, advocate-led representation: we review your documents, file in the correct court and keep you informed at each hearing. Corporate and tax lawyers support companies and taxpayers.</p>
    <ul className="rlh-chips" aria-label="What we offer">
      <li><ShieldCheck size={15} /> Advocate-led since 1985</li>
      <li><ShieldCheck size={15} /> Family, property, corporate &amp; tax</li>
      <li><ShieldCheck size={15} /> Individuals, businesses &amp; overseas Pakistanis</li>
      <li><ShieldCheck size={15} /> In-person or online consultation</li>
    </ul>
    <p className="rlh-hero-office"><MapPin size={15} style={{ verticalAlign: '-2px' }} /> <strong>Karachi offices:</strong> 76-C, Main Jami Commercial, DHA Phase 7 · T-219, Supreme Corner, Gulistan-e-Jauhar. Call or WhatsApp <a href={`tel:${firm.phone.replace(/\s/g, '')}`}>{firm.phone}</a>.</p>
    <div className="hero-actions" style={{ marginTop: 22 }}>
      <a className="button button-gold" href={homeWhatsApp} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Discuss Your Family or Property Case on WhatsApp</a>
      <a className="button button-outline-light" href={`tel:${firm.phone.replace(/\s/g, '')}`}><Phone size={16} /> Call {firm.phone}</a>
    </div>
  </div><div className="hero-visual"><img src="/images/legal-consultation.webp" alt="Family lawyers in Pakistan advising clients in a professional law office" width={1200} height={800} fetchPriority="high" decoding="async" /><div className="hero-caption"><span className="caption-line" /><span>Advocate-led legal advice since 1985</span></div></div></div>
  <div className="hero-bottom"><nav className="container hero-bottom-inner" aria-label="Explore our legal services"><Link href="/family-law/">Family</Link><Link href="/property-law-in-pakistan/">Property</Link><Link href="/corporate-tax-law-services/">Corporate</Link><Link href="/fbr-income-tax-return-filing-lawyers-pakistan/">Taxation</Link><Link href="/civil-law/">Civil</Link><Link href="/criminal-law-in-pakistan/">Criminal</Link><Link href="/succession-certificate-in-pakistan-for-legal-heirs/">Succession</Link></nav></div></section>
}

function HomeSummary() {
  return <section className="rlh-section"><div className="rlh-wrap">
    <p className="rlh-eyebrow">Executive summary</p>
    <h2>Advocate-Led Legal Help Across Pakistan Since 1985</h2>
    <p>Right Law Associates is an advocate-led practice associated with Qanoon Group. Its senior leadership has been in legal practice since 1985, and the firm works through offices in Karachi, Lahore, Islamabad and Rawalpindi, with partner chambers in Faisalabad and Hyderabad. Our family lawyers in Pakistan handle matrimonial and child-related cases, our property lawyers in Pakistan handle ownership and inheritance disputes, and a separate team advises companies and taxpayers.</p>
    <h3>Who We Act For</h3>
    <p>We act for wives and husbands in family court, parents seeking custody or visitation, buyers and owners protecting their property, heirs dividing an estate, businesses registering with the SECP, and taxpayers responding to the FBR. Overseas Pakistanis can instruct us through a properly attested power of attorney and online meetings.</p>
    <h3>How to Start: Call, WhatsApp or Visit Our Karachi Offices</h3>
    <p>Send a short outline of your matter on WhatsApp to <a href={homeWhatsApp} target="_blank" rel="noreferrer">{firm.phone}</a>, or call the same number to book a meeting. Our Karachi offices are at 76-C, Main Jami Commercial, DHA Phase 7, and at T-219, Supreme Corner, Johar Chowrangi, Gulistan-e-Jauhar. Lahore, Islamabad and Rawalpindi clients are routed to their local office.</p>
  </div></section>
}

function Services() {
  return <section className="rlh-section alt" id="services"><div className="rlh-wrap">
    <p className="rlh-eyebrow">Practice areas</p>
    <h2>Practice Areas Covered by Family Lawyers in Pakistan and Our Property and Corporate Teams</h2>
    <p>Each practice area below has its own detailed page. Choose the one closest to your problem; if your matter crosses several areas, our family lawyers in Pakistan and property lawyers work on the same file so that nothing is missed.</p>
    <div className="rlh-grid3">{practiceAreas.map((item) => { const Icon = icons[item.icon]; return <div className="rlh-card" key={item.slug}><span className="service-icon" style={{ marginBottom: 14 }}><Icon size={22} strokeWidth={1.5} /></span><h3>{item.name}</h3><p>{item.description}</p><Link href={practicePath(item.slug)} className="rlh-more">Explore {item.name} <ArrowUpRight size={15} /></Link></div> })}</div>
  </div></section>
}

function FamilySection() {
  return <section className="rlh-section" id="family-law"><div className="rlh-wrap">
    <p className="rlh-eyebrow">Family law</p>
    <h2>Family Lawyers in Pakistan for Divorce, Khula and Custody</h2>
    <p>Family Lawyers in Pakistan deal with cases that affect personal status, children and money at the same time. Our family lawyers in Pakistan advise on talaq, Khula, custody, guardianship, maintenance, dower and dowry articles, and prepare the evidence and witnesses each claim needs before the family court.</p>
    <h3>Talaq and Divorce Registration Under the Muslim Family Laws Ordinance</h3>
    <p>Under section 7 of the Muslim Family Laws Ordinance, 1961, a husband who pronounces talaq must give written notice to the Chairman of the Union Council and send a copy to the wife. The talaq takes effect ninety days after the notice is delivered, unless revoked earlier, or later if the wife is pregnant. We draft the notice, track the reconciliation stage and obtain the divorce certificate.</p>
    <h3>Khula and Dissolution of Marriage Before the Family Court</h3>
    <p>A wife who wants to end the marriage can file a suit for Khula or for dissolution on the grounds listed in the Dissolution of Muslim Marriages Act, 1939. The suit usually goes to the family court where she ordinarily resides. We prepare the plaint, list the grounds and evidence, and represent her through the pre-trial reconciliation hearing and judgment.</p>
    <h3>Child Custody, Guardianship and Visitation: How Family Lawyers in Pakistan Prepare the Case</h3>
    <p>Custody and guardianship are decided by the guardian judge under the Guardians and Wards Act, 1890, and the welfare of the minor is the main consideration. Our family lawyers in Pakistan gather school, medical and residence records, propose a workable visitation schedule and, where needed, apply for interim custody or for the child's passport and travel to be restrained.</p>
    <SectionImage slug="" index={1} />
    <h3>Maintenance, Dower and Dowry Articles</h3>
    <p>Claims for maintenance of the wife and children, unpaid dower and the return of dowry articles are filed in the same family court and are often joined with a Khula or custody suit. We list the husband's income evidence, the agreed dower in the Nikah Nama and the articles with receipts or photographs, so the claim is proved rather than assumed.</p>
    <h3>Choosing the Correct Family Court in Sindh, Punjab and Islamabad</h3>
    <p>The Family Courts Act, 1964 has been amended differently in each province, so procedure in Karachi is not identical to procedure in Lahore or Islamabad. Before filing, we confirm the court with jurisdiction and the provincial rules that apply. See our city pages for <Link href="/family-lawyers-in-karachi/">family lawyers in Karachi</Link>, <Link href="/family-law-in-lahore-divorce-khula-court-marriage-online-nikah/">family lawyers in Lahore</Link>, <Link href="/family-lawyers-in-islamabad/">family lawyers in Islamabad</Link>, <Link href="/family-lawyers-in-rawalpindi/">family lawyers in Rawalpindi</Link>, <Link href="/family-lawyers-in-faisalabad/">family lawyers in Faisalabad</Link> and <Link href="/family-lawyers-in-hyderabad/">family lawyers in Hyderabad</Link>.</p>
    <p><Link href="/family-law/" className="rlh-more">Read more about our family law service <ArrowUpRight size={15} /></Link></p>
  </div></section>
}

function PropertySection() {
  return <section className="rlh-section alt" id="property-law"><div className="rlh-wrap">
    <p className="rlh-eyebrow">Property law</p>
    <h2>Property Lawyers in Pakistan for Title, Possession and Inheritance</h2>
    <p>Property Lawyers in Pakistan are usually instructed at three moments: before a purchase, after a fraud or illegal occupation, and when heirs cannot agree on an estate. Our property lawyers in Pakistan handle all three, from document checks to suits in the civil court.</p>
    <h3>Title Verification Before You Pay: What Property Lawyers in Pakistan Check</h3>
    <p>Before any payment we check the chain of title, the registered sale deed under the Registration Act, 1908, the mutation or record-of-rights entries, society or authority approvals, any power of attorney the seller relies on, and whether the property is mortgaged or under litigation. A short written report tells you whether it is safe to proceed.</p>
    <h3>Possession, Specific Performance and Injunction Suits</h3>
    <p>When a seller refuses to transfer, or someone occupies your property, we file suits for declaration, possession, specific performance of the sale agreement or a permanent injunction under the Specific Relief Act, 1877, and apply for interim orders so that the property is not sold or altered while the case is pending.</p>
    <SectionImage slug="" index={2} />
    <h3>Partition and Inheritance Disputes Among Legal Heirs</h3>
    <p>Inherited property is shared according to the heirs' personal law. Where co-owners cannot agree, our property lawyers in Pakistan bring partition proceedings, ask the court to divide the property or order its sale, and protect the shares of sisters and other heirs who are often left out of family settlements.</p>
    <h3>Succession Certificates and Letters of Administration</h3>
    <p>Banks, share registrars and housing authorities ask for a succession certificate or letters of administration before releasing a deceased person's assets. In Islamabad and Punjab, a NADRA Succession Facilitation Unit can issue the certificate where all heirs agree; contested cases go to the civil court. City pages: <Link href="/property-lawyers-in-karachi/">property lawyers in Karachi</Link>, <Link href="/property-lawyers-in-lahore/">property lawyers in Lahore</Link>, <Link href="/property-lawyers-in-islamabad/">property lawyers in Islamabad</Link>, <Link href="/property-lawyers-in-rawalpindi/">property lawyers in Rawalpindi</Link>, <Link href="/property-lawyers-in-faisalabad/">property lawyers in Faisalabad</Link> and <Link href="/property-lawyers-in-hyderabad/">property lawyers in Hyderabad</Link>.</p>
    <p><Link href="/property-law-in-pakistan/" className="rlh-more">Read our guide to property law in Pakistan <ArrowUpRight size={15} /></Link></p>
  </div></section>
}

function CorporateTaxSection() {
  return <section className="rlh-section" id="corporate-tax"><div className="rlh-wrap">
    <p className="rlh-eyebrow">Business and tax</p>
    <h2>Corporate Lawyers and Tax Lawyers for Companies and FBR Matters</h2>
    <p>Our corporate lawyers and tax lawyers support founders, family businesses and individual taxpayers. The work is mostly preventive: correct registration, clear contracts and returns filed on time, so that a notice from a regulator does not become a dispute.</p>
    <figure className="rlh-figure"><img src="/images/corporate-tax-document-review.webp" alt="Corporate and tax document review with a calculator and business records" width={1200} height={600} loading="lazy" decoding="async" /></figure>
    <h3>Company Registration and SECP Compliance</h3>
    <p>We register private limited and single-member companies with the Securities and Exchange Commission of Pakistan under the Companies Act, 2017, prepare the memorandum and articles, and handle annual returns, changes of directors and share transfers. See <Link href="/company-registration-service-karachi/">company registration in Karachi</Link>.</p>
    <h3>Income Tax, Sales Tax and FBR Notices</h3>
    <p>We obtain NTNs, file income tax returns under the Income Tax Ordinance, 2001, advise on sales tax registration and reply to FBR notices before the deadline stated in the notice. See <Link href="/fbr-income-tax-return-filing-lawyers-pakistan/">income tax return filing</Link> and <Link href="/corporate-tax-law-services/">corporate and tax law services</Link>.</p>
  </div></section>
}

function WhyUs() {
  return <section className="rlh-section alt"><div className="rlh-wrap">
    <p className="rlh-eyebrow">Why Right Law Associates</p>
    <h2>Why Clients Instruct Our Family Lawyers in Pakistan and Property Lawyers in Pakistan</h2>
    <p>Clients choose our family lawyers in Pakistan and property lawyers in Pakistan for careful preparation rather than promises. We do not guarantee outcomes; we make sure the case is filed in the right place, on the right grounds, with the right documents.</p>
    <div className="rlh-grid3">
      <div className="rlh-card"><h3>Advocate-Led Since 1985</h3><p>Matters are supervised by senior advocates. Mohsin Ali Shah, Chairman, has been in legal practice since 1985 and oversees client dealing across the network.</p></div>
      <div className="rlh-card"><h3>Correct Forum Before Any Filing</h3><p>We confirm the court, the province and the applicable law first, because a case filed in the wrong forum loses time and money.</p></div>
      <div className="rlh-card"><h3>Documents Reviewed Before Advice</h3><p>Nikah Nama, title papers, notices and earlier orders are read before we advise, so the advice fits your actual facts.</p></div>
      <div className="rlh-card"><h3>One File for Overlapping Problems</h3><p>A divorce may raise property and custody questions; a death may raise succession and tax questions. One team keeps the whole picture.</p></div>
      <div className="rlh-card"><h3>Clear Updates After Each Hearing</h3><p>After each hearing you are told what happened, what the court ordered and what comes next, by WhatsApp or phone.</p></div>
      <div className="rlh-card"><h3>Confidential Handling</h3><p>Family and property matters are private. Your documents and instructions are handled only by the lawyers working on your case.</p></div>
    </div>
  </div></section>
}

function Process() {
  return <section className="rlh-section"><div className="rlh-wrap">
    <p className="rlh-eyebrow">How it works</p>
    <h2>How Family Lawyers in Pakistan Take Your Matter From First Call to Court</h2>
    <p>The same four steps apply whether you need family lawyers in Pakistan for a Khula suit or property lawyers in Pakistan for a title dispute.</p>
    <div className="rlh-grid2">
      <div className="rlh-card"><h3>Step 1: Share the Facts on WhatsApp or by Phone</h3><p>Send a short outline and the city involved to {firm.phone}. We tell you which documents to bring.</p></div>
      <div className="rlh-card"><h3>Step 2: Document Review and Legal Advice</h3><p>An advocate reads your papers, explains your options under the relevant law and the likely steps and timeline.</p></div>
      <div className="rlh-card"><h3>Step 3: Notice, Petition or Suit Is Drafted</h3><p>Once you instruct us, we draft the notice or pleading, check it with you and file it in the correct court or office.</p></div>
      <div className="rlh-card"><h3>Step 4: Representation and Regular Updates</h3><p>Your advocate appears at each hearing and reports the result and the next date to you.</p></div>
    </div>
  </div></section>
}

const homeLawyers = [
  { name: 'Tahir Pervez Qureshi', role: 'Advocate High Court', image: '/images/tahir-pervez-qureshi.webp', text: 'Senior advocate at the Karachi office, appearing before the Karachi district courts and the Sindh High Court.' },
  { name: 'Shankar Lal Kataria', role: 'Advocate High Court', image: '/images/shankar-lal-kataria.webp', text: 'Karachi advocate for family and matrimonial matters before the Karachi family courts.' },
]

function Team() {
  return <section className="rlh-section alt" id="team"><div className="rlh-wrap">
    <p className="rlh-eyebrow">Our advocates</p>
    <h2>Meet the Karachi Advocates in Our Family Lawyers in Pakistan Team</h2>
    <p>Courtroom work for our family lawyers in Pakistan is done by the advocate named on each file. Two of the Karachi advocates who handle family and civil matters are shown below; the full team is on the <Link href="/meet-our-attorneys/">our attorneys</Link> page.</p>
    <div className="rlh-grid2">{homeLawyers.map((l) => <div className="rlh-lawyer" key={l.name}><img src={l.image} alt={`${l.name}, ${l.role}, Right Law Associates Karachi`} width={120} height={150} loading="lazy" decoding="async" /><div><h3>{l.name}</h3><p style={{ margin: '0 0 6px', fontWeight: 700 }}>{l.role}</p><p style={{ margin: 0, fontSize: 15 }}>{l.text}</p></div></div>)}</div>
    <p style={{ marginTop: 16 }}>Mohsin Ali Shah, Chairman, oversees the network and client dealing; his own legal practice dates from 1985.</p>
  </div></section>
}

function Locations() {
  return <section className="rlh-section" id="locations"><div className="rlh-wrap">
    <p className="rlh-eyebrow">Where we work</p>
    <h2>Offices of Our Family Lawyers in Pakistan and Property Lawyers in Pakistan</h2>
    <p>Choose your city to see the local office of our family lawyers in Pakistan and property lawyers in Pakistan, the advocates who handle cases there and the courts they appear in.</p>
    <div className="rlh-grid3">{cities.map((city) => <Link href={cityPath(city.name)} className="rlh-city" key={city.name}><span><strong>Family Lawyers in {city.name}</strong><small>{city.phone}</small></span><ArrowUpRight size={18} /></Link>)}</div>
    <h3>Karachi Offices: DHA Phase 7 and Gulistan-e-Jauhar</h3>
    <p>76-C, Main Jami Commercial, DHA Phase 7, and T-219, Supreme Corner, Johar Chowrangi, Gulistan-e-Jauhar. Clients from any part of Karachi can book a meeting at either office.</p>
    <h3>Lahore, Islamabad and Rawalpindi Offices</h3>
    <p>Our Lahore office is at Al-Mairaj Arcade, Chauburji; the Islamabad office is at Laraib Plaza, G-9 Markaz; and the Rawalpindi office is at Al-Hameed Plaza, off Murree Road.</p>
    <h3>Partner Chambers in Faisalabad and Hyderabad</h3>
    <p>Faisalabad and Hyderabad matters are handled with partner advocates practising in those cities. Overseas clients can meet any office online.</p>
  </div></section>
}

function Guides() {
  const guides = [
    ['Divorce and Khula Guides', 'Read about ', [['divorce law', '/divorce-law/'], ['dissolution of marriage', '/dissolution-of-marriage-in-pakistan/'], ['divorce certificates', '/divorce-registration-certificate/']]],
    ['Custody and Maintenance Guides', 'Read about ', [['child custody', '/child-custody/'], ['guardianship', '/legal-guardianship-laws-of-pakistan/'], ['maintenance', '/maintenance-in-pakistan/']]],
    ['Marriage and Registration Guides', 'See ', [['court marriage procedure', '/court-marriage-procedure-in-pakistan/'], ['online marriage', '/online-marriage/'], ['Nikah Nama', '/nikah-nama/']]],
    ['Property and Tenancy Guides', 'Start with ', [['property law in Pakistan', '/property-law-in-pakistan/'], ['property disputes', '/property-disputes/'], ['rental and tenancy law', '/rental-and-tenancy-law-of-pakistan/']]],
    ['Succession and Inheritance Guides', 'Read about ', [['succession certificates', '/succession-certificate-in-pakistan-for-legal-heirs/'], ['letters of administration', '/succession-certificate-letter-of-administration/'], ['civil certificates', '/civil-certificates-in-pakistan/']]],
    ['Civil, Corporate and Tax Guides', 'Read about ', [['civil law', '/civil-law/'], ['court litigation', '/lawyers-for-litigation-in-the-court/'], ['NTN verification', '/ntn-verification-from-the-fbr-in-pakistan/']]],
  ]
  return <section className="rlh-section alt" id="guides"><div className="rlh-wrap">
    <p className="rlh-eyebrow">Legal guides</p>
    <h2>Legal Guides on Family, Property, Corporate and Tax Law</h2>
    <p>Written by our family lawyers in Pakistan and property lawyers in Pakistan, these guides explain the general legal framework before you seek case-specific advice. More articles are on the <Link href="/blog/">legal blog</Link>.</p>
    <div className="rlh-grid3">{guides.map(([title, lead, links]) => <div className="rlh-card" key={title}><h3>{title}</h3><p>{lead}{links.map(([label, href], i) => <span key={href}>{i > 0 && (i === links.length - 1 ? ' and ' : ', ')}<Link href={href}>{label}</Link></span>)}.</p></div>)}</div>
  </div></section>
}

const homeFaqs = [
  { q: 'What cases do your family lawyers handle?', a: 'Talaq notices and divorce certificates, Khula and dissolution suits, child custody and guardianship, visitation, maintenance for wives and children, dower and dowry articles, and related family court appeals.' },
  { q: 'Where is a Khula suit filed?', a: 'Usually in the family court of the area where the wife ordinarily resides. The exact court and procedure depend on the province, so we confirm jurisdiction before filing.' },
  { q: 'When does a talaq become effective?', a: 'Under section 7 of the Muslim Family Laws Ordinance, 1961, a talaq that is not revoked takes effect ninety days after the written notice is delivered to the Chairman of the Union Council; if the wife is pregnant, it takes effect when the pregnancy ends, if that is later.' },
  { q: 'Who decides child custody in Pakistan?', a: 'The guardian judge under the Guardians and Wards Act, 1890. The welfare of the minor is the main consideration, together with the child\'s age, sex and, where old enough, the child\'s own preference.' },
  { q: 'What should I check before buying property?', a: 'The chain of title, the registered sale deed, mutation or record-of-rights entries, approvals from the society or authority, the seller\'s identity and any power of attorney, and whether the property is mortgaged or under litigation.' },
  { q: 'How do legal heirs obtain a succession certificate?', a: 'Through the civil court under the Succession Act, 1925, or, in Islamabad and Punjab, through a NADRA Succession Facilitation Unit where all heirs agree. Contested matters always go to court.' },
  { q: 'Can overseas Pakistanis instruct you?', a: 'Yes. We assist overseas clients with family, property, succession and corporate matters. A power of attorney signed abroad should be attested by the Pakistani embassy or consulate before it is used in Pakistan.' },
  { q: 'Do you handle company registration and FBR notices?', a: 'Yes. We register companies with the SECP, handle annual compliance, file income tax returns and reply to FBR notices within the time the notice allows.' },
  { q: 'Can I speak to a lawyer online?', a: 'Online consultations can be arranged for suitable matters. The lawyer reviews the initial facts, identifies the documents required and explains the next procedural step.' },
  { q: 'What should I bring to the first meeting?', a: 'Your CNIC, the Nikah Nama and children\'s B-Forms for family matters, title and mutation papers for property matters, and any notice, summons or earlier court order you have received.' },
]

function FAQ() {
  return <section className="rlh-section" id="faq"><div className="rlh-wrap rlh-faq">
    <p className="rlh-eyebrow">Questions, answered</p>
    <h2>Questions Clients Ask Our Family and Property Lawyers</h2>
    <p>These answers are general. The right step depends on your facts, documents and the province involved.</p>
    {homeFaqs.map((f) => <details key={f.q}><summary><span>{f.q}</span><ChevronDown size={18} /></summary><p>{f.a}</p></details>)}
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: homeFaqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }) }} />
  </div></section>
}

function Sources() {
  return <section className="rlh-section alt"><div className="rlh-wrap">
    <h2>Official Sources and Further Reading</h2>
    <p>The statutes referred to on this page can be read on <a href="https://pakistancode.gov.pk/" target="_blank" rel="noopener noreferrer">Pakistan Code</a>. Company and tax information is published by the <a href="https://www.secp.gov.pk/" target="_blank" rel="noopener noreferrer">SECP</a> and the <a href="https://www.fbr.gov.pk/" target="_blank" rel="noopener noreferrer">FBR</a>, and identity and family-registration services by <a href="https://www.nadra.gov.pk/" target="_blank" rel="noopener noreferrer">NADRA</a>.</p>
  </div></section>
}

function Contact() {
  return <section className="rlh-section"><div className="rlh-wrap">
    <h2>Speak to an Advocate About Your Case Today</h2>
    <p>Tell us briefly whether you need family lawyers in Pakistan, property lawyers in Pakistan or corporate and tax advice, and which city is involved. We will direct your enquiry to the right lawyer and office. Contacting the firm does not by itself create a lawyer-client relationship.</p>
    <div className="rlh-cta">
      <a className="button button-gold" href={homeWhatsApp} target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp a Family or Property Lawyer</a>
      <a className="button button-dark" href={`tel:${firm.phone.replace(/\s/g, '')}`}><Phone size={16} /> Call {firm.phone}</a>
      <Link className="button button-dark" href="/contact/">Request a Consultation <ArrowUpRight size={16} /></Link>
    </div>
    <div className="rlh-credit" style={{ marginTop: 34 }}>
      <p><strong>Reviewed by:</strong> Mohsin Ali Shah, Advocate, Chairman, Qanoon Group (in legal practice since 1985)</p>
      <p><strong>Published by:</strong> Right Law Associates (Pvt) Limited</p>
      <p><strong>Last updated:</strong> 1 November 2026</p>
    </div>
  </div></section>
}

export default function LegalSite() { return <><Header /><main className="home-page"><style>{homeCss}</style><Hero /><div className="rlh-wrap"><SectionImage slug="" index={0} /></div><KarachiShortCta /><HomeSummary /><Services /><FamilySection /><PropertySection /><CorporateTaxSection /><WhyUs /><Process /><Team /><Locations /><Guides /><FAQ /><Sources /><Contact /></main><Footer /><a className="mobile-call" href={`tel:${firm.phone.replace(/\s/g, '')}`} aria-label="Call Right Law Associates"><Phone size={18} /></a></> }
