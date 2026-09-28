import Link from 'next/link'

export const metadata = {
  title: 'Legal Blog | Right Law Associates',
  description: 'Legal articles and practical guides on family law, property law, civil litigation, taxation, marriage and related Pakistani legal matters.',
  alternates: { canonical: 'https://rightlaw.pk/blog/' },
}

const articles = [
  ['Dissolution of Marriage in Pakistan', '/dissolution-of-marriage-in-pakistan/', 'Family Law'],
  ['Family Law in Pakistan', '/family-law-in-pakistan/', 'Family Law'],
  ['Child Custody in Pakistan', '/child-custody/', 'Family Law'],
  ['Divorce Papers in Pakistan', '/divorce-papers-in-pakistan/', 'Family Law'],
  ['Property Law in Pakistan', '/property-law-in-pakistan/', 'Property Law'],
  ['Succession Certificate in Pakistan', '/succession-certificate-in-pakistan-for-legal-heirs/', 'Succession'],
  ['Court Marriage in Pakistan', '/court-marriage-in-pakistan-legal-framework/', 'Marriage Law'],
  ['Online Marriage in Pakistan', '/online-marriage/', 'Marriage Law'],
  ['Intellectual Property in Pakistan', '/intellectual-property-in-pakistan/', 'IP Law'],
  ['NTN Verification from FBR', '/ntn-verification-from-the-fbr-in-pakistan/', 'Tax Law'],
]

export default function BlogPage() {
  return <main>
    <section style={{background:'#173b35',color:'#fff',padding:'72px 0'}}><div className="container"><p className="eyebrow gold">Legal information</p><h1 style={{fontFamily:'Georgia,serif',fontSize:'clamp(40px,5vw,62px)',margin:'0 0 20px'}}>Right Law Associates Legal Blog</h1><p style={{maxWidth:760,color:'#d2ddda',lineHeight:1.75,fontSize:17}}>Practical legal information on Pakistani family law, property, litigation, marriage, succession, taxation and related legal procedures.</p></div></section>
    <section className="section"><div className="container"><div className="article-grid">{articles.map(([title,href,category]) => <article className="article-card" key={href}><div className="article-meta"><span>{category}</span></div><h3>{title}</h3><Link href={href} className="text-link">Read guide →</Link></article>)}</div></div></section>
  </main>
}
