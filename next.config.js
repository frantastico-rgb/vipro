/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['img.youtube.com', 'i.ytimg.com'],
    formats: ['image/avif', 'image/webp'],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
