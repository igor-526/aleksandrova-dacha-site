import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("http://eqapi.devil-on-the-wheel.ru/media/test_photos/**"),
    ],
  },
  /* config options here */
};

export default withFlowbiteReact(nextConfig);
