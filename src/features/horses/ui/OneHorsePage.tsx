"use client";

import {
    Breadcrumbs,
    Container,
    GallerySection,
} from "@/ui";
import { HorseOutDto } from "@/types";
import { Pedigree } from "./Pedigree";
import { useEffect, useMemo, useState } from "react";
import { services } from "../data/services";
import HorseList from "./HorseList";

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
        ratio="4/3"
        className="w-full"
        items={horsePhotos}
    />

    const horseName = horse.name

    const horseInfoSection = (<div className="p-2">
        <p><b>Пол:</b> {horse.sex}</p>
        {horse.breed?.name && <p><b>Порода:</b> {horse.breed?.name}</p>}
        {horse.coat_color?.name && <p><b>Масть:</b> {horse.coat_color?.name}</p>}
        {horse.bdate_formatted && <p><b>Дата рождения:</b> {horse.bdate_formatted}</p>}
        {horse.ddate_formatted && <p><b>Дата смерти:</b> {horse.ddate_formatted}</p>}
    </div>)

    const horseDescription = (horse.description && <p>{horse.description}</p>)

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

    return (
        <Container className="space-y-20 bg-[#f6efe0] pb-20 text-[#2f3600] font-serif">
            <div className="w-full mb-3 p-3 bg-[#f0e7cf] border-y border-[#d3c6aa]">
                <h1 className="mb-4 mx-auto w-full text-4xl sm:text-5xl md:text-6xl">{horseName}</h1>
                <div className="mb-2 flex flex-col md:flex-row gap-4">
                    <div className="mx-auto w-full md:w-[50%] lg:w-[57%]">{horseGallerySection}</div>
                    <div className="w-full md:w-[50%] lg:w-[43%] p-2 flex flex-col justify-between gap-2 text-sm md:text-base bg-[#f8f2e4] border-y border-[#d3c6aa]">
                        <h2 className="text-xl font-bold">Информация</h2>
                        <div className="md:blockw-[35%] border-t border-[#2f3600]" />
                        <div className="grow flex flex-col sm:flex-row md:flex-col">
                            <div className="grow">{horseInfoSection}</div>
                            <div className="md:blockw-[35%] border-t border-[#2f3600]" />
                            {horseOwnerSection}
                        </div>
                    </div>
                </div>
                <div className="p-2 text-sm md:text-base">
                    {horseDescription} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam error nam ab ad? Tempora, inventore et dolor consequatur sed reprehenderit recusandae qui cupiditate tenetur aspernatur sunt facilis nulla similique ullam.
                </div>
            </div>
            <Breadcrumbs items={breadcrumbItems} className="ml-6" />

            <ul className="flex flex-col md:flex-row gap-3 font-serif">
                {services && services.map((service) =>
                    <li key={service.id} className="p-3 flex flex-col gap-3 bg-[#f8f2e4] border border-[#d3c6aa] rounded-2xl">
                        <h2 className="text-xl font-bold">{service.name}</h2>
                        <p className="mb-2 text-sm md:text-base">{service.description}</p>
                        <div className="w-[35%] border-t border-[#2f3600]" />
                        <p className="text-lg">Цена: <b>{service.price} руб.</b></p>
                    </li>)}
            </ul>

            <div className="w-full p-2"><Pedigree horse={horse} /></div>
            {horse.pedigree?.foals && horse.pedigree.foals.length > 0 &&
                <div className="p-4 bg-[#f0e7cf] border-y border-[#d3c6aa]">
                    <h2 className="mb-4 text-xl font-serif font-bold">Потомство ({horse.pedigree.foals.length})</h2>
                    <HorseList items={horse.pedigree?.foals} columns={5} />
                </div>}


        </Container>
    );
};
