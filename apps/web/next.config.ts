import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ["@repo/db", "@repo/ui"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nys3952oa4.ufs.sh",
        pathname: "/f/*"
      },
      {
        protocol: "https",
        hostname: "utfs.io",
        pathname: "/f/*"
      },
    ],
  },
};

export default nextConfig;
