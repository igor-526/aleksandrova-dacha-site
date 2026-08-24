import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  env: {
    SENTRY_ENABLED: process.env.SENTRY_ENABLED ?? "false",
    SENTRY_DSN: process.env.SENTRY_DSN ?? "",
    SENTRY_ENVIRONMENT: process.env.SENTRY_ENVIRONMENT ?? "",
    SENTRY_TRACES_SAMPLE_RATE: process.env.SENTRY_TRACES_SAMPLE_RATE ?? "0",
    SENTRY_RELEASE: process.env.SENTRY_RELEASE ?? "",
  },
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
      {
        protocol: "https",
        hostname: "cloud.eqcms.ru",
        pathname: "/**",
      },
      new URL("https://mc.yandex.ru/watch/**"),
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  /* config options here */
};

export default withFlowbiteReact(
  withSentryConfig(nextConfig, {
    silent: true,
    sourcemaps: {
      disable: true,
    },
  }),
);
