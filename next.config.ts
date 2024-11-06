import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  eslint: {
    dirs: ["src"],
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
