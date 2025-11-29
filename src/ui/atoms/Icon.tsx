import type { ReactElement, SVGProps } from "react";

export type IconName =
  | "horse"
  | "leaf"
  | "phone"
  | "location"
  | "calendar"
  | "arrow-right"
  | "quote"
  | "chevron-down"
  | "whatsapp"
  | "telegram"
  | "vk"
  | "mail";

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
  "chevron-down": (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  ),
  whatsapp: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M4.5 20.5 5 16.5A7.5 7.5 0 1 1 12 19.5a7.6 7.6 0 0 1-3.5-.9z" />
      <path d="M9 10c0 2 3 5 5 5a1.3 1.3 0 0 0 1.1-.6l1 .4a2 2 0 0 1-2.1 1.7C11.5 16.5 7.5 12.5 7.5 9a2 2 0 0 1 1.7-2.1l.4 1A1.3 1.3 0 0 0 9 9Z" />
    </svg>
  ),
  telegram: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M4 12.5 20 4l-3.5 16a.8.8 0 0 1-1.2.5l-4.2-3-2.3 2.5a.6.6 0 0 1-1-.3l.1-4.1Z" />
      <path d="m9.5 14.5 8-7.5" />
    </svg>
  ),
  vk: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M4 7.5h2.7c.3 0 .5.1.6.4 1 2.2 2.8 5.4 4.7 5.5 1 0 1-1.7 1-2.9 0-1.7-.6-2.6-1.4-3.4-.2-.2 0-.6.3-.6H15c.3 0 .5.1.6.4.3.6.8 1.6 1.4 2.4.3.5.8.8 1.2.3l1.6-1.9c.2-.2.6-.2.8 0l1.9 2.2c.2.2.2.5 0 .7-1 1-2.2 2-2.2 3.3 0 1.6 1.6 2.6 1.6 3.6 0 .3-.2.5-.5.5H16c-.3 0-.6-.2-.8-.4L14.6 17c-.2-.3-.6-.3-.9-.2-.8.3-2 .8-3.2.8-4 0-6-3.2-7-6C3.3 9.1 3.6 7.5 4 7.5Z" />
    </svg>
  ),
  mail: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7.5 12 12l8-4.5" />
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
