import DeathCertificateServicePage from '../../components/death-certificate-service-page'
import { deathCertificatePage } from '../../lib/death-certificate-page'

export const metadata = {
  title: { absolute: 'NADRA Death Certificate Karachi | RightLaw.pk' },
  description: deathCertificatePage.description,
  alternates: { canonical: `https://rightlaw.pk/${deathCertificatePage.slug}` },
  openGraph: { title: deathCertificatePage.title, description: deathCertificatePage.description, url: `https://rightlaw.pk/${deathCertificatePage.slug}`, type: 'article' },
}

export default DeathCertificateServicePage
