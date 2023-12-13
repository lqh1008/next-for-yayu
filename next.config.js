/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects() {
      return [
        {
          source: '/index',
          destination: '/',
          permanent: true,
        },
      ]
    },
    async rewrites() {
      return [
        {
          source: '/about',
          destination: '/',
        },
      ]
    }
  }
  
  module.exports = nextConfig
  
  