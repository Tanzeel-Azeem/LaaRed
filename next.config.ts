import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  images: {
    
    remotePatterns: [
      {
        hostname : "images.pexels.com"
      },
      {
        hostname : "ae01.alicdn.com"
      }
    ],
  },
  /* config options here */
};

export default nextConfig;
