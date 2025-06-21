/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/googleb2da5ed9c85a7ac6.html',
        destination: '/googleb2da5ed9c85a7ac6.html',
      },
    ];
  },
}

export default nextConfig
