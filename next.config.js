/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  
  // Simplified headers for basic caching
  async headers() {
    return [
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, immutable',
          },
        ],
      },
    ]
  },
  
  // Image optimizations
  images: {
    domains: ['img.youtube.com', 'i.ytimg.com'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 3600,
  },
  
  // React optimizations
  reactStrictMode: true,
  
  // Experimental features (reduced)
  experimental: {
    scrollRestoration: true,
  },
  
  // Output optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Fix workspace root warning
  outputFileTracingRoot: __dirname,
}

module.exports = nextConfig
