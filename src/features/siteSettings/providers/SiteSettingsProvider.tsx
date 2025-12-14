"use client";

import { ReactNode } from "react";
import { SiteSettingsContext } from "../context/SiteSettingsContext";
import { SiteSettings } from "../services/getSiteSettings";

interface SiteSettingsProviderProps {
    children: ReactNode;
    settings: SiteSettings;
}

export const SiteSettingsProvider = ({ children, settings }: SiteSettingsProviderProps) => {
    return (
        <SiteSettingsContext.Provider value={settings}>
            {children}
        </SiteSettingsContext.Provider>
    );
};
