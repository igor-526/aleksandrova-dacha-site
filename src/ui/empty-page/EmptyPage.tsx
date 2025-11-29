import type { ReactNode } from "react";
import { Button } from "../button/Button";
import { Container } from "../foundations/Container";
import { cn } from "../utils/cn";

export type EmptyPageProps = {
  title?: string;
  description?: string;
  action?: ReactNode;
  className?: string;
};

const defaultAction = (
  <Button href="/" variant="primary">
    На главную
  </Button>
);

export function EmptyPage({
  title = "Страница находится в разработке",
  description = "Мы уже работаем над новым разделом. Пожалуйста, загляните позже или вернитесь на главную страницу.",
  action = defaultAction,
  className,
}: EmptyPageProps) {
  return (
    <section
      className={cn(
        "min-h-[60vh] bg-[#fdfaf4] text-[#2f3600]",
        "flex items-center",
        className
      )}
    >
      <Container className="flex w-full flex-col items-center gap-4 py-16 text-center">
        <div className="rounded-full border border-[#d3c6aa] bg-white px-6 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#4b4d2f]">
          Скоро обновится
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl">{title}</h1>
        {description && (
          <p className="max-w-2xl text-lg leading-relaxed text-[#4b4d2f]">
            {description}
          </p>
        )}
        {action && <div className="pt-2">{action}</div>}
      </Container>
    </section>
  );
}
