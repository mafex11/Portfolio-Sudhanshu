/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.hygraph.com',
      },
      {
        protocol: 'https',
        hostname: '**.graphassets.com',
      },
    ],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    optimizePackageImports: ['react-icons', 'framer-motion', '@mantine/core', '@mantine/hooks', 'lucide-react'],
  },
};

export default nextConfig;
