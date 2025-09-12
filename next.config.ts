// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  eslint: {
    // ✅ Skip ESLint checks during `next build`
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
