import type { ReactElement, SVGProps } from "react";

export type IconName =
  | "horse"
  | "leaf"
  | "phone"
  | "location"
  | "calendar"
  | "arrow-right"
  | "quote";

const paths: Record<IconName, (props: SVGProps<SVGSVGElement>) => ReactElement> = {
  horse: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M20 8c-1.6 0-3.2-.6-4.4-1.8l-1.6-1.6L13 6l.8 2.4a4.99 4.99 0 0 1-1 4.9l-.2.2V16h4v4h-12v-4l-1.4-.7A4 4 0 0 1 2 11.7V9l6-4 4-1 3 2 2 3 3 .5" />
    </svg>
  ),
  leaf: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M20.5 3.5c-9.5 0-15 5.5-15 12.5 0 2.5 2 4.5 4.5 4.5 7 0 12.5-5.5 12.5-15z" />
      <path d="M9 16l11-11" />
    </svg>
  ),
  phone: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M5 4h3l2 5-2 1c.9 2.4 2.6 4.1 5 5l1-2 5 2v3c0 .6-.4 1-1 1C9.4 19 5 14.6 5 5c0-.6.4-1 1-1z" />
    </svg>
  ),
  location: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M12 22s7-6.3 7-12a7 7 0 1 0-14 0c0 5.7 7 12 7 12z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  ),
  calendar: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  ),
  "arrow-right": (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  ),
  quote: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M9 7h-5l-1 5a4 4 0 0 1 3-1 4 4 0 0 1 0 8 4 4 0 0 1-4-4" />
      <path d="M21 7h-5l-1 5a4 4 0 0 1 3-1 4 4 0 0 1 0 8 4 4 0 0 1-4-4" />
    </svg>
  ),
};

export type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
};

export function Icon({ name, ...props }: IconProps) {
  const Component = paths[name];
  return Component({ width: 24, height: 24, ...props });
}
