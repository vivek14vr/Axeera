import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/work",
        destination: "/portfolio",
        permanent: true,
      },
      {
        source: "/process",
        destination: "/about",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
