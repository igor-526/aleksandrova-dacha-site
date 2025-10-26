import { Icon, type IconName } from "../atoms/Icon";
import { cn } from "../utils/cn";

export type Highlight = {
  title: string;
  description: string;
  icon?: IconName;
};

export type HighlightsProps = {
  items: Highlight[];
  className?: string;
};

export function Highlights({ items, className }: HighlightsProps) {
  return (
    <section className={cn("grid gap-6 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {items.map((item) => (
        <div
          key={item.title}
          className="rounded-3xl bg-[#f8f2e4] p-6 shadow-[0_16px_32px_rgba(56,64,0,0.08)]"
        >
          {item.icon && <Icon name={item.icon} width={36} height={36} className="text-[#c9b585]" />}
          <h3 className="mt-4 font-serif text-2xl text-[#2f3600]">{item.title}</h3>
          <p className="mt-2 text-sm text-[#4b4d2f]">{item.description}</p>
        </div>
      ))}
    </section>
  );
}
