import Image from "next/image";
import { BookingForm, type BookingFormProps } from "../forms/BookingForm";

import { cn } from "../utils/cn";

export type BookingSectionProps = {
  title?: string;
  description?: string;
  formProps?: BookingFormProps;
  image?: { src: string; alt: string };
  className?: string;
};

export function BookingSection({
  title,
  description,
  formProps,
  image,
  className,
}: BookingSectionProps) {
  return (
    <section
      className={cn("grid gap-10 md:grid-cols-[1.1fr_1fr] py-5 ", className)}
    >
      <div className="space-y-5 ">
        {title && (
          <h2 className="font-serif text-4xl text-[#2f3600]">{title}</h2>
        )}
        {description && (
          <p className="text-base text-[#4b4d2f]">{description}</p>
        )}
        <BookingForm {...formProps} />
      </div>
      {image && (
        <div className="relative h-[250px] md:h-[667px] overflow-hidden rounded-2xl opacity-50">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
          />
        </div>
      )}
    </section>
  );
}
