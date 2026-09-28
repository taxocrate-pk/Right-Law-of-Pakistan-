import { Analytics } from '@vercel/analytics/next'
import RightLawHeader from '../components/rightlaw-header'
import './globals.css'

export const metadata = {
  metadataBase: new URL('https://rightlaw.pk'),
  title: { default: 'RightLaw.pk | Right Law Associates', template: '%s | RightLaw.pk' },
  description: 'Professional legal assistance across Pakistan for family, corporate, property, civil and criminal matters.',
  keywords: ['lawyers in Pakistan', 'family lawyer Pakistan', 'property lawyer Pakistan', 'Right Law Associates'],
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    shortcut: '/icon.svg',
  },
}

export const viewport = { colorScheme: 'light', themeColor: '#f7f7f5', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }) {
  return <html lang="en-GB"><body><style>{`
    a[aria-label="Right Law Associates home"] {
      gap: 0 !important;
    }
    a[aria-label="Right Law Associates home"] > span:first-child {
      display: block !important;
      width: 62px !important;
      height: 62px !important;
      flex: 0 0 62px !important;
      min-width: 62px !important;
      background: url('/icon.svg?v=2') center / contain no-repeat !important;
      color: transparent !important;
      font-size: 0 !important;
      clip-path: none !important;
    }
    a[aria-label="Right Law Associates home"] > span:last-child {
      display: none !important;
    }
    @media (max-width: 640px) {
      a[aria-label="Right Law Associates home"] > span:first-child {
        width: 54px !important;
        height: 54px !important;
        flex-basis: 54px !important;
        min-width: 54px !important;
      }
    }
  `}</style><RightLawHeader />{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
