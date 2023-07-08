/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Bob's Kasm Registry',
    description: 'A registry providing tweaked kasm images',
    icon: '/img/logo.svg',
    listUrl: 'https://bobe99.github.io/kasm-registry/',
    contactUrl: 'https://github.com/bobe/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
