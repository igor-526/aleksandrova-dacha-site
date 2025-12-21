import type { Metadata } from "next";

import { getSiteSettings } from "@/features/siteSettings";

const FALLBACK_SITE_NAME = "Александрова Дача";

export const buildPageMetadata = async (
  pageTitle: string,
  description: string
): Promise<Metadata> => {
  const settings = await getSiteSettings();
  const siteName = settings.siteName || FALLBACK_SITE_NAME;

  return {
    title: siteName ? `${pageTitle} — ${siteName}` : pageTitle,
    description,
  };
};
