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
        hostname: 'i.ibb.co',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'png.pngtree.com', // আপনার আগের এরর ডোমেইনটি এখানে যোগ করলাম
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com', // গুগল লগইন ইমেজের জন্য এটিও দরকার হয়
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;