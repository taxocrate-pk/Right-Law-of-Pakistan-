import Link from 'next/link'
import { firm } from '../lib/legal-data'

export default function KarachiShortCta() {
  return (
    <section aria-label="Karachi office consultation" style={{background:'#eef4f1',borderBottom:'1px solid #d9e1de'}}>
      <div className="container" style={{paddingTop:20,paddingBottom:20}}>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(340px,100%),1fr))',gap:20,alignItems:'center'}}>
          <div>
            <h2 style={{fontSize:'clamp(21px,2.5vw,28px)',lineHeight:1.2,margin:'0 0 10px',color:'#173b35'}}>Karachi Legal Consultation — DHA And Gulistan-e-Jauhar</h2>
            <h3 style={{fontSize:17,lineHeight:1.35,margin:'0 0 8px',color:'#294f47'}}>Two Karachi Offices For Appointments And Document Review</h3>
            <p style={{margin:'0 0 5px',lineHeight:1.55,color:'#263f39'}}><strong>DHA Office:</strong> {firm.dhaBranchAddress}. <a href="tel:+923316644789">+92 331 6644789</a></p>
            <p style={{margin:0,lineHeight:1.55,color:'#263f39'}}><strong>Gulistan-e-Jauhar Office:</strong> {firm.offices.karachiJohar.address}. <a href="tel:+923166644789">+92 316 6644789</a></p>
          </div>
          <div style={{display:'flex',gap:10,flexWrap:'wrap',justifyContent:'flex-start'}}>
            <a href="https://wa.me/923316644789" className="button button-dark">DHA WhatsApp</a>
            <a href="https://wa.me/923166644789" className="button button-dark">Jauhar WhatsApp</a>
            <Link href="/contact/" className="button button-gold">Book Consultation</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
