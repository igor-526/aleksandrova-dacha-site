import {
    GallerySection,
    GallerySectionProps,
} from "@/ui";
import { PriceOutDto } from "@/types";

type ServiceGalleryType = {
    price: PriceOutDto;
    ratio?: GallerySectionProps["ratio"];
    columns?: 1 | 2 | 3 | 4;
}

export const ServiceGallery = ({
    price,
    columns = 3,
    ratio = "1/1"
}: ServiceGalleryType) => {
    return (
        <div>
            {price.name && <h3 className="mb-2">{price.name}</h3>}
            {price.description && <p>{price.description}</p>}
            {price.photos.length > 0 &&
                <GallerySection
                    columns={columns}
                    ratio={ratio}
                    items={price.photos.map(photo => ({ src: photo.url, alt: "Изображение услуги" }))} />}
        </div>
    );
};
