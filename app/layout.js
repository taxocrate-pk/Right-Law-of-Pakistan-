import { Analytics } from '@vercel/analytics/next'
import RightLawHeader from '../components/rightlaw-header'
import './globals.css'

export const metadata = {
  metadataBase: new URL('https://rightlaw.pk'),
  title: { default: 'RightLaw.pk | Right Law Associates', template: '%s | RightLaw.pk' },
  description: 'Professional legal assistance across Pakistan for family, corporate, property, civil and criminal matters.',
  keywords: ['lawyers in Pakistan', 'family lawyer Pakistan', 'property lawyer Pakistan', 'Right Law Associates'],
  icons: { icon: '/icon.svg', apple: '/apple-icon.png' },
}

export const viewport = { colorScheme: 'light', themeColor: '#f7f7f5', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }) {
  return <html lang="en-GB"><body><style>{`
    a[aria-label="Right Law Associates home"] { gap: 0 !important; }
    a[aria-label="Right Law Associates home"] > span { display: none !important; }
    a[aria-label="Right Law Associates home"]::before {
      content: '';
      display: block;
      width: 62px;
      height: 62px;
      flex: 0 0 62px;
      background: url('/icon.svg') center / contain no-repeat;
    }
    @media (max-width: 640px) {
      a[aria-label="Right Law Associates home"]::before {
        width: 56px;
        height: 56px;
        flex-basis: 56px;
      }
    }
  `}</style><RightLawHeader />{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
