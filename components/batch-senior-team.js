import Link from 'next/link'
import BatchImage from './batch-image'
import {batchImages} from '../lib/batch-one-assets'
export default function BatchSeniorTeam(){return <section className="section team" id="team"><div className="container"><div className="section-intro"><p className="eyebrow">People Behind The Practice</p><h2>Senior Supervision With Specialist Legal Teams</h2><p className="section-copy">Karachi matters are assigned according to the practice area, evidence and court involved.</p></div><div className="team-grid">{[
  [batchImages.rizvi,'Syed M. Akhtar Rizvi','Advocate Supreme Court of Pakistan','Senior counsel for civil, property and appellate matters.'],
  [batchImages.tahir,'Tahir Pervez Qureshi','Senior Advocate High Court','Relevant civil and connected litigation in Karachi.'],
  [batchImages.shankar,'Shankar Lal Kataria','Advocate High Court','Family-law case preparation and representation in Karachi.']
].map(([asset,name,role,copy])=><article className="lawyer-card" key={name}><BatchImage asset={asset} portrait/><div><h3>{name}</h3><p>{role}</p><p>{copy}</p><Link href="/meet-our-attorneys/" className="text-link">Meet Our Attorneys</Link></div></article>)}</div></div></section>}
