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
      new URL("https://mc.yandex.ru/watch/**"),
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  /* config options here */
};

export default withFlowbiteReact(nextConfig);
