"use client";

import {
    Container,
    GallerySection,
} from "@/ui";
import { HorseOutDto } from "@/types";
import { Pedigree1 } from "./Pedigree1";

type OneHorsePageProps = {
    horse: HorseOutDto;
}

export const OneHorsePage = ({
    horse
}: OneHorsePageProps) => {
    const gallery = horse.photos && horse.photos.length > 0 ?
        <GallerySection
            columns={3}
            className="w-full h-[150px] sm:h-[400px]"
            items={horse.photos.map(photo => ({ src: photo.url, alt: "Изображение лошади" }))}
        /> :
        <GallerySection
            columns={1}
            className="w-full h-[300px] sm:h-[400px]"
            items={[
                { src: "/images/horses/horse1.jpg", alt: "Изображение лошади" },
                { src: "/images/horses/horse2.jpg", alt: "Изображение лошади" },
                { src: "/images/horses/horse3.jpg", alt: "Изображение лошади" }
            ]}
        />

    return (
        <div className="space-y-20 bg-[#f6efe0] pb-20 text-[#2f3600]">
            <Container className="space-y-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>{gallery}</div>
                    <div>
                        <h1 className="text-4xl font-bold mb-4">{horse.name}</h1>
                        <p className="text-lg"><b>Пол:</b> {horse.sex}</p>
                        <p className="text-lg"><b>Порода:</b> {horse.breed?.name}</p>
                        <p className="text-lg"><b>Масть:</b> {horse.coat_color?.name}</p>
                        <p className="text-lg"><b>Возраст:</b> {horse.age}</p>
                        {horse.description && <p className="whitespace-pre-wrap">{horse.description}</p>}
                    </div>
                </div>
                <Pedigree1 />
            </Container>
        </div>
    );
};
