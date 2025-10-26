import { BookingForm, type BookingFormProps } from "../forms/BookingForm";
import { MediaImage } from "../media/MediaImage";
import { cn } from "../utils/cn";

export type BookingSectionProps = {
  title: string;
  description: string;
  formProps?: BookingFormProps;
  image?: { src: string; alt: string };
  className?: string;
};

export function BookingSection({ title, description, formProps, image, className }: BookingSectionProps) {
  return (
    <section className={cn("grid gap-10 lg:grid-cols-[1.1fr_1fr]", className)}>
      <div className="space-y-5">
        <h2 className="font-serif text-4xl text-[#2f3600]">{title}</h2>
        <p className="text-base text-[#4b4d2f]">{description}</p>
        <BookingForm {...formProps} />
      </div>
      {image && <MediaImage src={image.src} alt={image.alt} ratio="portrait" fill className="rounded-3xl" />}
    </section>
  );
}
