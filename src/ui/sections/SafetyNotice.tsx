import { cn } from "../utils/cn";

export type SafetyNoticeProps = {
  title: string;
  items: string[];
  className?: string;
};

export function SafetyNotice({ title, items, className }: SafetyNoticeProps) {
  return (
    <section className={cn("rounded-3xl bg-[#f9e0a2]/40 p-6", className)}>
      <div className="flex items-start gap-4">
        <div className="space-y-3">
          <h3 className="font-serif text-2xl text-[#2f3600]">{title}</h3>
          <ul className="space-y-2 text-sm text-[#5a3d04]">
            {items.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
