import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "../utils/cn";

export type ContainerSize = "sm" | "md" | "lg" | "xl";

const sizeClassMap: Record<ContainerSize, string> = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
};

export type ContainerProps<T extends ElementType = "div"> = {
  as?: T;
  size?: ContainerSize;
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function Container<T extends ElementType = "div">({
  as,
  size = "lg",
  className,
  children,
  ...props
}: ContainerProps<T>) {
  const Component = (as ?? "div") as ElementType;

  return (
    <Component
      className={cn("mx-auto px-4 sm:px-6 lg:px-8", sizeClassMap[size], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
