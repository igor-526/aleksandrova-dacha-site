"use client";

import {
    Breadcrumbs,
    Container,
    GallerySection,
    Hero,
} from "@/ui";
import { HorseOutDto } from "@/types";
import { Pedigree } from "./Pedigree";
import { useEffect, useMemo, useState } from "react";

type OneHorsePageProps = {
    horse: HorseOutDto;
}

export const OneHorsePage = ({
    horse
}: OneHorsePageProps) => {

    const horsePhotos = (horse.photos && horse.photos.length > 0)
        ? horse.photos.map(photo => ({ src: photo.url, alt: photo.name }))
        : [
            { src: "/images/horses/horse1.jpg", alt: "Изображение лошади" },
            { src: "/images/horses/horse2.jpg", alt: "Изображение лошади" },
            { src: "/images/horses/horse3.jpg", alt: "Изображение лошади" }
        ]

    const horseGallerySection = <GallerySection
        columns={1}
        className="w-full h-full"
        items={horsePhotos}
    />

    const horseInfoSection = (<div>
        <h1 className="text-4xl font-bold mb-4">{horse.name}</h1>
        <p><b>Пол:</b> {horse.sex}</p>
        {horse.breed?.name && <p><b>Порода:</b> {horse.breed?.name}</p>}
        {horse.coat_color?.name && <p><b>Масть:</b> {horse.coat_color?.name}</p>}
        {horse.bdate_formatted && <p><b>Дата рождения:</b> {horse.bdate_formatted}</p>}
        {horse.ddate_formatted && <p><b>Дата смерти:</b> {horse.ddate_formatted}</p>}
        {horse.description &&
            <div>
                <div className="w-[70%] h-[40px] border-b border-[#2f3600]"></div>
                <p> {horse.description}</p>
            </div>}
    </div>)

    const horseOwnerSection = <div>
        <p><b>Владелец: </b> {horse.horse_owner?.name}</p>
        {horse.horse_owner?.address && <p><b>Адрес: </b> {horse.horse_owner?.address}</p>}
        {horse.horse_owner?.phone_numbers &&
            <div className="flex">
                <b>Телефон: </b>
                <ul className="flex gap-2">{horse.horse_owner?.phone_numbers.map((phone, index) =>
                    (<li key={index}>{phone}</li>))}
                </ul>
            </div>
        }
    </div>

    const [storedBreadcrumbs, setStoredBreadcrumbs] = useState<
        { name: string; href?: string }[] | null
    >(null);

    useEffect(() => {
        try {
            const raw = sessionStorage.getItem("serviceBreadcrumbs");
            if (!raw) return;
            const parsed = JSON.parse(raw);
            if (Array.isArray(parsed) && parsed.length > 0) {
                setStoredBreadcrumbs(parsed);
            }
        } catch {
            // ignore malformed storage
        }
    }, []);

    const breadcrumbItems = useMemo(() => {
        if (!storedBreadcrumbs || storedBreadcrumbs.length === 0) {
            return [{ name: horse.name }];
        }

        const next = [...storedBreadcrumbs];
        const trimmed = next.length >= 3 ? next.slice(1) : next;
        return [...trimmed, { name: horse.name }];
    }, [horse.name, storedBreadcrumbs]);

    return (
        <Container className="space-y-20 bg-[#f6efe0] pb-20 text-[#2f3600]">
            <Hero
                title="Разведение и продажа"
                subtitle="Александрова дача"
                description="Племенные лошади и пони, продажа жеребят и взрослых лошадей, жеребцы для случки"
                backgroundImage={{
                    src: "/images/horses/horses.jpg",
                    alt: "Kонюшня Александровой дачи",
                }}
            />

            <Breadcrumbs items={breadcrumbItems} className="-mt-9 px-6" />

            <div className="w-full h-[500px] grid grid-cols-[3fr_2fr] gap-4">
                <div>{horseGallerySection}</div>
                <div className="flex flex-col gap-3">
                    {horseInfoSection}
                    <div className="w-[70%] h-[40px] border-b border-[#2f3600]"></div>
                    {horseOwnerSection}
                </div>

            </div>
            <ul>
                <li key="1">
                    <h2 className="text-2xl font-bold">Продается</h2>
                    <p></p>
                </li>
                {horse.services && horse.services.map((service) =>
                    <li key={service.id}>
                        <h3 className="text-2xl font-bold">{service.name}</h3>
                        <p>{service.description}</p>
                    </li>)}
            </ul>
            <div className="w-[70%]"><Pedigree horse={horse} /></div>

        </Container>
    );
};
