import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  async rewrites() {
    return [{
      source: "/api",
      destination: "http://localhost:8080/api"
    }];
  }
};

export default nextConfig;
