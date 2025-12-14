import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "apidev.aleksandrova-dacha.ru",
        pathname: "/media/**",
      },
      {
        protocol: "https",
        hostname: "api.aleksandrova-dacha.ru",
        pathname: "/media/**",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  /* config options here */
};

export default withFlowbiteReact(nextConfig);
