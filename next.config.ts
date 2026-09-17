import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // www → non-www (permanent 301)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.ajaypalsingh.in' }],
        destination: 'https://ajaypalsingh.in/:path*',
        permanent: true,
      },
      // /index or /home → / (permanent 301)
      {
        source: '/index',
        destination: '/',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
