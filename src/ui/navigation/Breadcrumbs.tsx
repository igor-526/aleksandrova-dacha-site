import { Icon } from "../atoms/Icon";
import { cn } from "../utils/cn";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav aria-label="Навигация" className={cn("text-sm text-[#4b4d2f]", className)}>
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <a href={item.href} className="text-[#2f3600] hover:underline">
                  {item.label}
                </a>
              ) : (
                <span className="text-[#8d784f]">{item.label}</span>
              )}
              {!isLast && <Icon name="arrow-right" width={14} height={14} className="text-[#c9b585]" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
