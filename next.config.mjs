/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co', // Tomar image error-er domain
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;