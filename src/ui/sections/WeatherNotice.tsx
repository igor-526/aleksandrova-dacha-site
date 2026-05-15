import { Icon } from "../atoms/Icon";
import { cn } from "../utils/cn";

export type WeatherNoticeProps = {
  message: string;
  details?: string[];
  className?: string;
};

export function WeatherNotice({ message, details = [], className }: WeatherNoticeProps) {
  return (
    <section className={cn("flex flex-col gap-4 rounded-3xl bg-[#e2d6bc] p-6 text-[#2f3600]", className)}>
      <div className="flex items-center gap-3">
        <Icon name="calendar" width={32} height={32} />
        <p>{message}</p>
      </div>
      {details.length > 0 && (
        <ul className="space-y-2">
          {details.map((detail) => (
            <li key={detail}>• {detail}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
