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
  return <html lang="en-GB"><body><RightLawHeader />{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
