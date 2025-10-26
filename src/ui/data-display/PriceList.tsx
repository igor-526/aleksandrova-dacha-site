import { cn } from "../utils/cn";

export type PriceListOption = {
  title: string;
  price?: string;
  description?: string;
};

export type PriceListItem = {
  title: string;
  price?: string;
  description?: string;
  options?: PriceListOption[];
};

export type PriceListProps = {
  items: PriceListItem[];
  className?: string;
};

export function PriceList({ items, className }: PriceListProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item) => (
        <section
          key={item.title}
          className="rounded-3xl border border-[#d3c6aa] bg-[#fdfaf4] p-6 shadow-sm"
        >
          <header className="flex flex-wrap items-start justify-between gap-3">
            <div className="space-y-1">
              <h3 className="font-serif text-2xl text-[#2f3600]">{item.title}</h3>
              {item.description && <p className="text-sm text-[#4b4d2f]">{item.description}</p>}
            </div>
            {item.price && <span className="text-lg font-semibold text-[#2f3600]">{item.price}</span>}
          </header>

          {item.options && item.options.length > 0 && (
            <ul className="mt-4 space-y-2">
              {item.options.map((option) => (
                <li
                  key={option.title}
                  className="flex flex-wrap items-start justify-between gap-4 rounded-2xl bg-white/70 px-4 py-3 text-sm text-[#2f3600]"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[#c9b585]">—</span>
                      <span className="font-medium">{option.title}</span>
                    </div>
                    {option.description && (
                      <p className="pl-5 text-xs text-[#4b4d2f]">{option.description}</p>
                    )}
                  </div>
                  {option.price && <span className="font-semibold text-[#2f3600]">{option.price}</span>}
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
}
