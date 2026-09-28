import { Analytics } from '@vercel/analytics/next'
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
  return <html lang="en-GB"><body>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
