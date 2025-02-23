/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  experimental: {
    appDir: false,
  },
};

module.exports = nextConfig;
