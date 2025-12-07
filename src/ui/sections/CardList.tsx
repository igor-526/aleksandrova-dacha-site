import type { CardProps, Breakpoint, ResponsiveMediaPosition } from "../data-display/Card";
import { Card } from "../data-display/Card";
import { cn } from "../utils/cn";

type ColumnsConfig = Partial<Record<Breakpoint, 1 | 2 | 3 | 4 | 5 | 6>>;
type MediaDimension = "1/3" | "1/2" | `${number}px` | number | string;
type ResponsiveMediaDimension = MediaDimension | Partial<Record<Breakpoint, MediaDimension>>;

export type CardListProps = {
  items: (CardProps & { key?: string | number })[];
  columns?: ColumnsConfig;
  mediaWidth?: ResponsiveMediaDimension;
  mediaHeight?: ResponsiveMediaDimension;
  mediaPosition?: ResponsiveMediaPosition;
  className?: string;
};

const breakpointPrefix: Record<Breakpoint, string> = {
  base: "",
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "xl",
  "2xl": "2xl",
};

function columnsToClasses(columns?: ColumnsConfig) {
  const classes = ["grid", "items-stretch", "gap-6"];
  const config = columns ?? { base: 1, md: 2, xl: 3 };
  Object.entries(config).forEach(([bp, count]) => {
    if (!count) return;
    const prefix = breakpointPrefix[bp as Breakpoint];
    classes.push(`${prefix ? `${prefix}:` : ""}grid-cols-${count}`);
  });
  return classes;
}

const dimToValue = (value?: MediaDimension) => {
  if (value === undefined) return undefined;
  if (value === "1/3") return "33.3333%";
  if (value === "1/2") return "50%";
  if (typeof value === "number") return `${value}px`;
  return value;
};

function responsiveDimToClasses(dimension?: ResponsiveMediaDimension, axis: "w" | "h") {
  if (!dimension) return [];
  const entries =
    typeof dimension === "object" && !Array.isArray(dimension)
      ? (Object.entries(dimension) as Array<[Breakpoint, MediaDimension]>)
      : ([["base", dimension]] as Array<[Breakpoint, MediaDimension]>);

  return entries
    .map(([bp, value]) => {
      const prefix = breakpointPrefix[bp] ? `${breakpointPrefix[bp]}:` : "";
      const cssValue = dimToValue(value);
      if (!cssValue) return null;
      return `${prefix}${axis}-[${cssValue}]`;
    })
    .filter(Boolean) as string[];
}

export function CardList({
  items,
  columns,
  mediaWidth,
  mediaHeight,
  mediaPosition,
  className,
}: CardListProps) {
  const inheritedMediaClasses = cn(
    ...responsiveDimToClasses(mediaWidth, "w"),
    ...responsiveDimToClasses(mediaHeight, "h")
  );

  return (
    <section className={cn(...columnsToClasses(columns), className)}>
      {items.map(
        (
          {
            key,
            className: cardClassName,
            ...card
          },
          index
        ) => (
          <div
            key={key ?? card.title ?? index}
            className="h-full w-full"
          >
            <Card
              {...card}
              mediaPosition={card.mediaPosition ?? mediaPosition}
              classNameMedia={cn(inheritedMediaClasses, card.classNameMedia)}
              className={cn("h-full", cardClassName)}
            />
          </div>
        )
      )}
    </section>
  );
}
