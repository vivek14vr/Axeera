import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.6"],
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
