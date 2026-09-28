/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/child-adoption-child-guardianship-in-pakistan/',
        destination: '/child-adoption-guardianship-in-pakistan/',
        permanent: true,
      },
      {
        source: '/divorce-or-talaq-in-islam-types-of-talaq-divorce/',
        destination: '/divorce-talaq-in-islam-types-and-quranic-references/',
        permanent: true,
      },
      {
        source: '/misyar-marriage-nikah-misyar-facts-about-misyar-marriages-2/',
        destination: '/misyar-marriage-nikah-misyar-marriages/',
        permanent: true,
      },
      {
        source: '/family-law-expert-divorce-lawyers-in-karachi-islamabad-lahore-pakistan/',
        destination: '/family-law-expert-divorce-lawyers-in-karachi-islamabad-lahore/',
        permanent: true,
      },
      {
        source: '/understanding-divorce-papers-in-pakistan-the-divorce-deed-and-nadra-divorce-certificate/',
        destination: '/divorce-papers-in-pakistan/',
        permanent: true,
      },
      {
        source: '/property-disputes-a-comprehensive-guide/',
        destination: '/property-disputes/',
        permanent: true,
      },
      {
        source: '/succession-certificate-pakistan-legal-guide-procedure/',
        destination: '/succession-certificate-letter-of-administration/',
        permanent: true,
      },
      {
        source: '/nadra-b-form-in-pakistan/',
        destination: '/b-form-nadra-importance-of-b-form-in-pakistan/',
        permanent: true,
      },
      {
        source: '/death-certificate/',
        destination: '/nadra-computerized-death-certificate-online-verification-check/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
