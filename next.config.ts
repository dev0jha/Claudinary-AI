import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'img.clerk.com',
      'images.clerk.dev',
      'res.cloudinary.com',
      'assets.aceternity.com'
    ]
  }
};

export default nextConfig;
