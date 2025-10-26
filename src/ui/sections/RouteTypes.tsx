import { Card } from "../data-display/Card";
import { cn } from "../utils/cn";

export type RouteType = {
  title: string;
  duration: string;
  distance: string;
  description: string;
};

export type RouteTypesProps = {
  routes: RouteType[];
  className?: string;
};

export function RouteTypes({ routes, className }: RouteTypesProps) {
  return (
    <section className={cn("grid gap-6 md:grid-cols-2", className)}>
      {routes.map((route) => (
        <Card
          key={route.title}
          title={route.title}
          content={route.description}
        >
          <div className="flex flex-wrap gap-4 text-sm text-[#4b4d2f]">
            <span><strong>Время:</strong> {route.duration}</span>
            <span><strong>Маршрут:</strong> {route.distance}</span>
          </div>
        </Card>
      ))}
    </section>
  );
}
