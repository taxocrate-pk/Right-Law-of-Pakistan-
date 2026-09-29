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
    body > header a[aria-label="Right Law Associates home"] {
      gap: 10px !important;
    }
    body > header a[aria-label="Right Law Associates home"] > span:first-child {
      display: block !important;
      width: 58px !important;
      height: 58px !important;
      min-width: 58px !important;
      flex: 0 0 58px !important;
      background: url('/icon.svg') center / contain no-repeat !important;
      color: transparent !important;
      font-size: 0 !important;
      clip-path: none !important;
    }
    body > header a[aria-label="Right Law Associates home"] > span:last-child {
      line-height: 1 !important;
    }
    body > header a[aria-label="Right Law Associates home"] > span:last-child > strong {
      font-family: Georgia, 'Times New Roman', serif !important;
      font-size: 27px !important;
      font-weight: 700 !important;
      letter-spacing: 0.015em !important;
      color: #050505 !important;
      white-space: nowrap !important;
    }
    body > header a[aria-label="Right Law Associates home"] > span:last-child > small {
      margin-top: 6px !important;
      font-size: 10px !important;
      font-weight: 700 !important;
      letter-spacing: 0.24em !important;
      color: #c49a5a !important;
      white-space: nowrap !important;
    }
    @media (max-width: 640px) {
      body > header a[aria-label="Right Law Associates home"] {
        gap: 8px !important;
      }
      body > header a[aria-label="Right Law Associates home"] > span:first-child {
        width: 48px !important;
        height: 48px !important;
        min-width: 48px !important;
        flex-basis: 48px !important;
      }
      body > header a[aria-label="Right Law Associates home"] > span:last-child > strong {
        font-size: 21px !important;
      }
      body > header a[aria-label="Right Law Associates home"] > span:last-child > small {
        margin-top: 5px !important;
        font-size: 8px !important;
        letter-spacing: 0.22em !important;
      }
    }
  `}</style><RightLawHeader />{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
