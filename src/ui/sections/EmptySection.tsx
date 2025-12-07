import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Container } from "../foundations/Container";
import { cn } from "../utils/cn";

export type EmptySectionProps = {
  title?: string;
  background?: string;
  contentWidth?: "full" | "1/2" | "1/3" | "1/4" | "2/3";
  contentClassName?: string;
  children?: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<"section">, "className" | "children">;

export function EmptySection({
  title,
  background = "#f6efe0",
  contentWidth = "full",
  contentClassName,
  children,
  className,
  style,
  ...props
}: EmptySectionProps) {
  const contentWidthClassMap: Record<
    NonNullable<EmptySectionProps["contentWidth"]>,
    string
  > = {
    full: "w-full",
    "1/2": "w-full sm:w-1/2",
    "1/3": "w-full sm:w-2/3 lg:w-1/3",
    "1/4": "w-full sm:w-3/4 lg:w-1/2 xl:w-1/3 2xl:w-1/4",
    "2/3": "w-full sm:w-5/6 lg:w-2/3",
  };

  const mergedStyle = {
    ...(style ?? {}),
    ...(background ? { backgroundColor: background } : {}),
  };

  return (
    <section
      {...props}
      style={mergedStyle}
      className={cn(" text-[#2f3600]", className)}
    >
      <Container className="flex justify-center">
        <div
          className={cn(
            "space-y-6",
            contentWidthClassMap[contentWidth],
            contentClassName
          )}
        >
          {title && (
            <h2 className="font-serif text-3xl sm:text-4xl">{title}</h2>
          )}
          {children ?? (
            <div className="rounded-2xl border-2 border-dashed border-[#d3c6aa] bg-white/60 p-8 text-center text-[#4b4d2f]">
              Добавьте сюда свой контент
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
