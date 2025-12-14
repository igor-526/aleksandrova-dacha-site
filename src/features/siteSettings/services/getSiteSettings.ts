import { siteSettingList } from "@/api/siteSettings";
import { SiteSettingMiniOutDto } from "@/types/siteSettings";

export interface SiteSettings {
    address?: string;
    addressLatitude?: number;
    addressLongitude?: number;
    phone?: string;
    siteName?: string;
    weekdayHours?: string;
    weekendHours?: string;
    vk?: string;
    mail?: string;
    socials: Array<{ label: string; href: string; type: "vk" | "mail" }>;
    getSetting: (key: string) => string | undefined;
}

export const getSiteSettings = async (): Promise<SiteSettings> => {
    const apiSettingsData: SiteSettingMiniOutDto[] = [];
    const response = await siteSettingList();
    if (response?.data && Array.isArray(response.data)) {
        response.data.forEach((item: SiteSettingMiniOutDto) => {
            apiSettingsData.push({
                key: item.key,
                value: item.value,
                type: item.type,
            });
        });
    }

    const getApiSetting = (key: string) => {
        return apiSettingsData.find((item: SiteSettingMiniOutDto) => item.key === key)?.value;
    };

    const address = getApiSetting("address");
    const addressLatitude = getApiSetting("address_latitude") ? parseFloat(getApiSetting("address_latitude") as string) : undefined;
    const addressLongitude = getApiSetting("address_longitude") ? parseFloat(getApiSetting("address_longitude") as string) : undefined;
    const phone = getApiSetting("tel");
    const siteName = getApiSetting("site_name");
    const weekdayHours = getApiSetting("start_weekday") && getApiSetting("end_weekday")
        ? `${getApiSetting("start_weekday")} - ${getApiSetting("end_weekday")}`
        : undefined;
    const weekendHours = getApiSetting("start_weekend") && getApiSetting("end_weekend")
        ? `${getApiSetting("start_weekend")} - ${getApiSetting("end_weekend")}`
        : undefined;
    const vk = getApiSetting("vk");
    const mail = getApiSetting("mail");
    const socials = [
        vk && { label: "VK", href: vk, type: "vk" as const },
        mail && { label: "Email", href: `mailto:${mail}`, type: "mail" as const },
    ].filter(
        (item): item is { label: string; href: string; type: "vk" | "mail" } => Boolean(item)
    );

    return {
        address,
        addressLatitude,
        addressLongitude,
        phone,
        siteName,
        weekdayHours,
        weekendHours,
        vk,
        mail,
        socials,
        getSetting: getApiSetting,
    };
};
