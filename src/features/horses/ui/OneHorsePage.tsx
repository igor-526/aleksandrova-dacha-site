"use client";

import {
    Breadcrumbs,
    Container,
    GallerySection,
} from "@/ui";
import { HorseOutDto } from "@/types";
import { getPrivateBreedName } from "../data/horseService";
import { Pedigree } from "./Pedigree";
import { useEffect, useMemo, useState } from "react";
import HorseList from "./HorseList";

type OneHorsePageProps = {
    horse: HorseOutDto;
}

export const OneHorsePage = ({
    horse
}: OneHorsePageProps) => {

    const horsePhotos = (horse.photos && horse.photos.length > 0)
        ? horse.photos.map(photo => ({ src: photo.url, alt: horse.name || "Изображение лошади" }))
        : [
            { src: "/images/horses/horse1.jpg", alt: "Изображение лошади" },
            { src: "/images/horses/horse2.jpg", alt: "Изображение лошади" },
            { src: "/images/horses/horse3.jpg", alt: "Изображение лошади" }
        ]

    const horseGallerySection = <GallerySection
        columns={1}
        ratio="4/3"
        className="w-full"
        items={horsePhotos}
    />

    const horseName = horse.name

    const services = horse.services?.filter(service => service.name !== "Племенной состав")

    const age = new Date().getFullYear() - (horse.bdate ? new Date(horse.bdate).getFullYear() : 0);

    let sex;

    switch (horse.sex) {
        case "male": switch (age >= 3) {
            case true: sex = "Жеребец"; break;
            default: sex = "Жеребчик"; break;
        }
            break;
        case "female": switch (age >= 3) {
            case true: sex = "Кобыла"; break;
            default: sex = "Кобылка"; break;
        }
            break;
        case "geld": sex = "Мерин";
            break;
        default: sex = "";
    }

    const horseInfoSection = (<div className="p-2">
        <p><b>Пол:</b> {sex}</p>
        {horse.breed?.name && <p><b>Порода:</b> {getPrivateBreedName(horse.breed?.name)}</p>}
        {horse.coat_color?.name && <p><b>Масть:</b> {horse.coat_color?.name}</p>}
        {horse.height && <p><b>Рост:</b> {horse.height} см</p>}
        {horse.bdate_formatted && <p><b>Дата рождения:</b> {horse.bdate_formatted}</p>}
        {horse.ddate_formatted && horse.ddate_formatted && <p><b>Дата смерти:</b> {horse.ddate_formatted}</p>}

    </div>)

    const description = [horse.description, ...(horse.services?.map(service => service.description) || [])]

    const horseDescription =
        description.length > 0 && (
            <ul className="p-2 py-2">
                {description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                ))}
            </ul>
        )

    const horseOwnerSection = <div className="p-2">
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

    const foals = useMemo(() => {
        const items = horse.pedigree?.foals ?? [];

        return [...items].sort((a, b) => {
            const yearA = a.bdate ? Number(a.bdate.slice(0, 4)) : 0;
            const yearB = b.bdate ? Number(b.bdate.slice(0, 4)) : 0;

            return yearB - yearA;
        });
    }, [horse.pedigree?.foals]);

    return (
        <Container className="space-y-20 bg-[#f6efe0] pb-20 text-[#2f3600]">
            <div className="w-full mb-3 p-3 bg-[#f0e7cf] border-y border-[#d3c6aa]">
                <h1 className="mb-4 mx-auto w-full">{horseName}</h1>
                <div className="mb-2 flex flex-col md:flex-row gap-4">
                    <div className="mx-auto w-full md:w-[50%] lg:w-[57%]">{horseGallerySection}</div>
                    <div className="w-full md:w-[50%] lg:w-[43%] bg-[#f8f2e4] border-y border-[#d3c6aa] p-2">
                        <h2 className="hidden">Информация</h2>
                        <div className="grow flex flex-col md:flex-col">
                            <div className="grow">{horseInfoSection}</div>
                            <div className=" md:block w-[55%] border-t border-[#2f3600]" />
                            <div className="grow">{horseDescription}</div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-between gap-2 flex-col sm:flex-row">
                    {services && services.length > 0 &&
                        <ul className="flex gap-3 md:w-[50%] lg:w-[57%] ">
                            {services && services.map((service) =>
                            (
                                <li key={service.id} className="p-3 grow flex flex-col gap-3 bg-[#f8f2e4] border border-[#d3c6aa] rounded-2xl">
                                    <h3 className="">{service.name}</h3>
                                    <div className="w-[35%] border-t border-[#2f3600]" />
                                    <p className="">Цена: <b>{service.price} руб.</b></p>
                                </li>)
                            )}
                        </ul>}
                    {horse.horse_owner && <div className="grow">{horseOwnerSection}</div>}
                </div>

            </div>

            <Breadcrumbs items={breadcrumbItems} className="ml-6" />

            <div className="w-full p-2"><Pedigree horse={horse} /></div>
            {foals.length > 0 &&
                <div className="p-4 bg-[#f0e7cf] border-y border-[#d3c6aa]">
                    <h2 className="mb-4">Потомство ({foals.length})</h2>
                    <HorseList items={foals} columns={5} visibleRows={2} />
                </div>}

        </Container>
    );
};
