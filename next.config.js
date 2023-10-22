const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    url: 'http://localhost:8000/api'
  },
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: ''
      },
    ],
  },
}

module.exports = nextConfig
