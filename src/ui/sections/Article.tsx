import type { ReactNode } from "react";
import { cn } from "../utils/cn";

export type ArticleProps = {
  title: string;
  date?: string;
  content: ReactNode;
  hero?: ReactNode;
  className?: string;
};

export function Article({
  title,
  date,
  content,
  hero,
  className,
}: ArticleProps) {
  return (
    <article className={cn("px-6 space-y-6 text-[#2f3600]", className)}>
      <header className="space-y-3">
        {date && (
          <p className="text-xs uppercase tracking-[0.3em] text-[#8d784f]">
            {date}
          </p>
        )}
        <h1 className="font-serif text-4xl">{title}</h1>
      </header>
      {hero}
      <div className="prose prose-lg max-w-none text-[#2f3600] prose-headings:font-serif prose-headings:text-[#2f3600] prose-a:text-[#384000]">
        {content}
      </div>
    </article>
  );
}
