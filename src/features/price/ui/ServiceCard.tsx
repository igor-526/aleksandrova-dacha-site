import { cn } from "@/ui";

export type ServiceCardProps = {
  title?: string;
  content?: string;
  gallery?: boolean;
  media?: React.ReactNode;
  mediaPosition?: "top" | "left";
  actions?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
};

const ServiceCard = ({
  title,
  content,
  gallery,
  media,
  mediaPosition = "top",
  actions,
  children,
  className,
}: ServiceCardProps) => {
  const articleClasses = [
    "rounded-3xl",
    "px-6 py-5",
    "text-[#2f3600]",
    "border border-[#bcc76e]",
    "grid gap-4",
    "justify-stretch items-stretch",
    "w-full h-full mx-auto",
  ];

  const contentBlock = (
    <div className={cn(" h-full flex flex-col justify-between")}>
      {(title || content) && (
        <div className="space-y-1.5 mb-1.5">
          {title && <h3 className="font-serif text-xl">{title}</h3>}
          {content &&
            content.split("|").map((item, index) => (
              <p key={index} className="text-sm leading-relaxed text-[#4b4d2f]">
                {item}
              </p>
            ))}
        </div>
      )}

      {children && <div className="mt-auto">{children}</div>}
      {actions && <div className="mt-auto">{actions}</div>}
    </div>
  );

  return !gallery ? (
    <article
      className={cn(...articleClasses, "grid-rows1 grid-cols-1", className)}
    >
      <div>{contentBlock}</div>
    </article>
  ) : mediaPosition === "top" ? (
    <>
      <article
        className={cn(
          ...articleClasses,
          "hidden sm:grid md:hidden grid-cols-3 ",
          className
        )}
      >
        <div className="col-span-1">{media}</div>
        <div className="col-span-2">{contentBlock}</div>
      </article>
      <article
        className={cn(
          ...articleClasses,
          "grid sm:hidden md:grid grid-rows-3 max-w-[500px]",
          className
        )}
      >
        <div className="row-span-1">{media}</div>
        <div className="row-span-2">{contentBlock}</div>
      </article>
    </>
  ) : (
    mediaPosition === "left" && (
      <>
        <article
          className={cn(
            ...articleClasses,
            "hidden sm:grid md:hidden lg:grid grid-cols-3 ",
            className
          )}
        >
          <div className="col-span-1">{media}</div>
          <div className="col-span-2">{contentBlock}</div>
        </article>

        <article
          className={cn(
            ...articleClasses,
            "grid sm:hidden md:grid lg:hidden grid-rows-3 max-w-[500px]",
            className
          )}
        >
          <div className="row-span-1">{media}</div>
          <div className="row-span-2">{contentBlock}</div>
        </article>
      </>
    )
  );
};
export default ServiceCard;
