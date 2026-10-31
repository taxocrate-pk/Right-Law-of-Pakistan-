/** @type {import('next').NextConfig} */
const nextConfig = {
  // Indexed WordPress URLs, the sitemap, menus and most canonicals end in a slash;
  // without this, every one of them 308-redirected to the slash-less form.
  trailingSlash: true,
  // Indexed WordPress URLs that returned 404 after the Next.js move (GSC, Oct 2026):
  // send each to the closest live page so its rankings carry over.
  async redirects() {
    return [
      { source: '/misyar-marriage-nikah-misyar-facts-about-misyar-marriages-2/', destination: '/misyar-marriage-nikah-misyar-marriages/', permanent: true },
      { source: '/nadra-b-form-in-pakistan/', destination: '/b-form-nadra-importance-of-b-form-in-pakistan/', permanent: true },
      { source: '/nikah-nama-urdu-english-available-in-karachi/', destination: '/nikah-nama/', permanent: true },
      { source: '/nadra-divorce-certificate-service-in-pakistan/', destination: '/divorce-registration-certificate/', permanent: true },
      { source: '/nadra-succession-certificate-online-verification-fees/', destination: '/succession-certificate-in-pakistan-for-legal-heirs/', permanent: true },
      { source: '/divorce-or-talaq-in-islam-types-of-talaq-divorce/', destination: '/divorce-talaq-in-islam-types-and-quranic-references/', permanent: true },
      { source: '/best-female-family-divorce-khula-lawyers-in-karachi-islamabad-lahore/', destination: '/best-family-and-divorce-lawyer-and-lady-advocate-in-karachi-sobia-mohsin-shah-legal-expertise-in-family-law/', permanent: true },
    ]
  },
  async headers() {
    return [{
      source: '/:path*',
      headers: [
        { key: 'Content-Security-Policy', value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' data: https://fonts.gstatic.com; img-src 'self' data: blob: https:; connect-src 'self' https://vitals.vercel-insights.com https://va.vercel-scripts.com; frame-ancestors 'none'; base-uri 'self'; object-src 'none'; form-action 'self' https://wa.me https://api.whatsapp.com; upgrade-insecure-requests" },
        { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
      ],
    }]
  },

  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
