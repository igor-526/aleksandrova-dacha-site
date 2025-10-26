import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "../utils/cn";

export type HeroProps = {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage: {
    src: string;
    alt: string;
  };
  cta?: ReactNode;
  overlay?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
};

const overlayStyles: Record<NonNullable<HeroProps["overlay"]>, string> = {
  light: "bg-[rgba(246,239,224,0.72)]",
  dark: "bg-[rgba(32,38,15,0.5)]",
};

export function Hero({
  title,
  subtitle,
  description,
  backgroundImage,
  cta,
  overlay = "light",
  align = "center",
  className,
}: HeroProps) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden rounded-[32px] border border-white/30 bg-[#f6efe0] shadow-lg",
        className,
      )}
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src={backgroundImage.src}
          alt={backgroundImage.alt}
          fill
          sizes="(min-width: 1280px) 1100px, (min-width: 768px) 80vw, 100vw"
          className="object-cover"
          priority
        />
        <div className={cn("absolute inset-0", overlayStyles[overlay])} />
      </div>

      <div
        className={cn(
          "relative flex flex-col items-center gap-6 px-6 py-16 text-center text-[#2f3600] sm:px-10 sm:py-20",
          align === "left" && "items-start text-left",
        )}
      >
        {subtitle && (
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8d784f]">
            {subtitle}
          </p>
        )}
        <h1 className="max-w-3xl font-serif text-4xl leading-tight text-[#2f3600] sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="max-w-2xl text-base leading-relaxed text-[#4b4d2f] sm:text-lg">
            {description}
          </p>
        )}
        {cta && <div className="flex flex-wrap items-center justify-center gap-4">{cta}</div>}
      </div>
    </section>
  );
}
