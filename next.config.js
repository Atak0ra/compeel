/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  allowedDevOrigins: ['localhost', '127.0.0.1'],
  async redirects() {
    return ['/kara', '/alexis', '/realisations', '/damejustice'].map(source => ({ source, destination: '/#labs', permanent: true }))
  },
}

module.exports = nextConfig
