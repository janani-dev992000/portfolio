import type { NextConfig } from "next";

const nextConfig: NextConfig = {

   output: 'export',
 images: {
     unoptimized: true, 
    remotePatterns: [
      {
        protocol: "https",
        hostname: "png.pngtree.com",
      },
    ],
  },
  basePath: '/portfolio',   // 👈 use your repo name here
  assetPrefix: '/portfolio/', // 👈 also repo name
}

export default nextConfig;
