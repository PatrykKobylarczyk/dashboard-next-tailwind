/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pravatar.cc',
        port: '',
        pathname: '150',
      },
    ],
  },
}

module.exports = nextConfig
