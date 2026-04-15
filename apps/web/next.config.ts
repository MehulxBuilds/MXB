import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ["@repo/db", "@repo/ui"],
};

export default nextConfig;
