"use client";

import { createContext, useContext } from "react";
import { SiteSettings } from "../services/getSiteSettings";

export const SiteSettingsContext = createContext<SiteSettings | null>(null);

export const useSiteSettings = () => {
    const context = useContext(SiteSettingsContext);
    if (!context) {
        throw new Error("useSiteSettings must be used within SiteSettingsProvider");
    }
    return context;
};
