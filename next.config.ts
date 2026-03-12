import "@shared/config/env.client"
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.sanity.io",
        pathname: "/images/to95jgt0/**",
        protocol: "https",
      },
    ],
  },
}

export default nextConfig
