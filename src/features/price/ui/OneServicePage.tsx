import {
    Container,
    GallerySection,
    Hero,
    DataTable,
} from "@/ui";
import { PriceOutDto } from "@/types";

type OneServicePageProps = {
    price: PriceOutDto;
}

export const OneServicePage = ({
    price,

}: OneServicePageProps) => {
    return (
        <div className="space-y-20 bg-[#f6efe0] pb-20 text-[#2f3600]">
        <Container className="space-y-12">
          <Hero
  
            title={price.name}
            subtitle="Александрова дача"
            backgroundImage={{
              src: price.photos.length > 0 ? price.photos[0].url : "",
              alt: "Изображение услуги",
            }}
          />
  
          {price.description && <p>{price.description}</p>}
  
          {price.page_data && <div dangerouslySetInnerHTML={{ __html: price.page_data }} />}
  
          {price.price_tables && price.price_tables.length > 0 && (
            <div className="space-y-4">
              {price.price_tables.map((table, tableIndex) => (
                table && <DataTable key={tableIndex} item={table} />
              ))}
            </div>
          )}
  
          {price.photos.length > 0 &&
            <GallerySection
              columns={3}
              className="w-full h-[150px] sm:h-[200px]"
              items={price.photos.map(photo => ({ src: photo.url, alt: "Изображение услуги" }))} />}
        </Container>
      </div>
    );
};
