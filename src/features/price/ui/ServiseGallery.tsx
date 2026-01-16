import {
    GallerySection,
} from "@/ui";
import { PriceOutDto } from "@/types";

type ServiceGalleryType = {
    price: PriceOutDto;
    columns?: 1 | 2 | 3 | 4;
}

export const ServiceGallery = ({
    price,
    columns = 3
}: ServiceGalleryType) => {
    return (
        <div className="h-full">
            {price.name && <h3 className="font-serif text-xl">{price.name}</h3>}
            {price.description && <p>{price.description}</p>}
            {price.photos.length > 0 &&
                <GallerySection
                    columns={columns}
                    className="h-full"
                    items={price.photos.map(photo => ({ src: photo.url, alt: "Изображение услуги" }))} />}

        </div>
    );
};
