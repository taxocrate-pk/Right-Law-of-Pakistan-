/** @type {import('next').NextConfig} */
const nextConfig = {
  // Indexed WordPress URLs, the sitemap, menus and most canonicals end in a slash;
  // without this, every one of them 308-redirected to the slash-less form.
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
