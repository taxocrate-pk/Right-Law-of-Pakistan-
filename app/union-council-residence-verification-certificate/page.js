import Link from 'next/link'
import { Footer } from '../../components/legal-site'

export const metadata = {
  title: { absolute: 'Union Council Residence Verification Certificate - Free Download | RightLaw.pk' },
  description: 'Download a printable sample Union Council residence verification certificate. Check the required format and supporting documents with your local Union Council.',
  alternates: { canonical: 'https://rightlaw.pk/union-council-residence-verification-certificate/' },
  openGraph: {
    title: 'Union Council Residence Verification Certificate - Free Download',
    description: 'Download a printable sample residence verification certificate and confirm your local Union Council requirements.',
    url: 'https://rightlaw.pk/union-council-residence-verification-certificate/',
    type: 'article',
  },
}

const pdfUrl = '/downloads/union-council-residence-verification-certificate-sample.pdf'

export default function UnionCouncilResidenceCertificatePage() {
  return <>
    <main className="dna-route-page">
      <nav aria-label="Breadcrumb" style={{ background: '#f7f3eb', borderBottom: '1px solid #e3ddd2' }}>
        <div className="container" style={{ paddingTop: 12, paddingBottom: 12 }}>
          <ol style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', listStyle: 'none', margin: 0, padding: 0, fontSize: 14 }}>
            <li><Link href="/" style={{ color: '#173b35', fontWeight: 700, textDecoration: 'none' }}>Home</Link></li>
            <li aria-hidden="true" style={{ color: '#7a8d86' }}>›</li>
            <li><Link href="/civil-certificates-in-pakistan/" style={{ color: '#173b35', fontWeight: 700, textDecoration: 'none' }}>Civil Certificates</Link></li>
            <li aria-hidden="true" style={{ color: '#7a8d86' }}>›</li>
            <li aria-current="page" style={{ color: '#455d55' }}>Residence Verification Certificate</li>
          </ol>
        </div>
      </nav>

      <section style={{ background: '#173b35', color: '#fff', padding: '64px 0 52px' }}>
        <div className="container">
          <p style={{ color: '#f4dfbb', fontSize: 13, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', margin: '0 0 14px' }}>Civil Certificate Sample Form</p>
          <h1 style={{ color: '#fff', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 'clamp(34px, 5vw, 54px)', lineHeight: 1.12, maxWidth: 900, margin: '0 0 18px' }}>Union Council Residence Verification Certificate - Free Download</h1>
          <p style={{ color: '#f3f6f4', maxWidth: 800, lineHeight: 1.75, fontSize: 17, margin: '0 0 26px' }}>
            Download this printable sample to see the residence and Union Council details commonly recorded on a verification certificate. It is a blank template for review; the competent Union Council must verify the information and issue any official certificate.
          </p>
          <a href={pdfUrl} download style={{ display: 'inline-block', borderRadius: 5, background: '#c49a5a', color: '#142f2a', padding: '14px 22px', fontWeight: 700, textDecoration: 'none' }}>Download Sample Certificate (PDF)</a>
        </div>
      </section>

      <section className="container" style={{ paddingTop: 42, paddingBottom: 48, maxWidth: 900 }}>
        <h2 style={{ color: '#173b35', fontSize: 28, lineHeight: 1.25, margin: '0 0 12px' }}>What The Sample Form Includes</h2>
        <p style={{ color: '#33443e', lineHeight: 1.75, margin: '0 0 18px' }}>The one-page PDF has spaces for the certificate number and date, the resident’s name and CNIC, parent or spouse details, residential address, Union Council number, post office, tehsil and district. It also leaves room for the authorised officer’s name, signature and official seal.</p>

        <h2 style={{ color: '#173b35', fontSize: 28, lineHeight: 1.25, margin: '28px 0 12px' }}>How To Use This Residence Certificate Sample</h2>
        <ol style={{ paddingLeft: 22, color: '#33443e', lineHeight: 1.8 }}>
          <li>Download and print the blank PDF.</li>
          <li>Ask your local Union Council whether it accepts this layout and what proof of residence or identity it requires.</li>
          <li>Complete only the details requested by that office. Leave verification, signature and seal sections for the authorised Union Council officer.</li>
        </ol>

        <aside style={{ borderLeft: '4px solid #c49a5a', background: '#f7f3eb', padding: '18px 20px', marginTop: 24, color: '#273a34', lineHeight: 1.7 }}>
          <strong>Important:</strong> This is an illustrative sample, not an issued certificate or a government-approved universal form. Union Council procedures and accepted formats can vary by locality. Confirm current requirements with the relevant office before submitting it.
        </aside>

        <p style={{ marginTop: 24 }}>
          <a href={pdfUrl} download style={{ color: '#173b35', fontWeight: 700 }}>Download the blank residence verification certificate PDF</a>
        </p>
      </section>
    </main>
    <Footer />
  </>
}
