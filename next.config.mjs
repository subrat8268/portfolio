/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        // Used in: components/Projects.tsx (SNOX project thumbnail)
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        // Used in: lib/design-work.ts (all design thumbnails)
      },
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
        // Used in: components/Skills.tsx
      },
    ],
  },
};

export default nextConfig;
