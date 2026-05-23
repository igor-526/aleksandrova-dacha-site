import { BreadcrumbsProps, HeroProps } from "@/ui";
import { AboutPageProps } from "../ui/AboutPage";

export const getAboutPageData = async (): Promise<AboutPageProps> => {
    const dataHero: HeroProps = {
        title: "О конно-спортивном клубе",
        subtitle: "Александрова дача",
        description: "Верховая езда, разведение и продажа лошадей и пони, контанктная мини-ферма",
        backgroundImage: {
            src: "/images/horses/breeding.jpg",
            alt: "Kонюшня Александровой дачи",
        }
    }

    const dataBreadcrumbs: BreadcrumbsProps = {
        items: [
            { name: "Главная", href: "/" },
            { name: "О нас" },
        ],
        className: "-mt-9 px-6",
    };

    return {
        dataHero,
        dataBreadcrumbs
    }
}