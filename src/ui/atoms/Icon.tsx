import type { ComponentProps, ReactElement, SVGProps } from "react";
import LinkOutlined from "@ant-design/icons/LinkOutlined";
import MailOutlined from "@ant-design/icons/MailOutlined";

export type IconName =
  | "horse"
  | "leaf"
  | "phone"
  | "location"
  | "calendar"
  | "arrow-right"
  | "quote"
  | "chevron-down"
  | "chevron-right"
  | "whatsapp"
  | "telegram"
  | "vk"
  | "mail";

// Адаптер ограничен контактами: библиотека оборачивает SVG в span.
function ContactIcon({
  component: Component,
  fallback,
  width = 24,
  height = 24,
  className,
  style,
  ...props
}: SVGProps<SVGSVGElement> & { component: typeof LinkOutlined | undefined; fallback: "VK" | "Email" }) {
  if (!Component) {
    return <span {...(props as ComponentProps<"span">)} className={className} style={{ width, height, ...style }}>{fallback}</span>;
  }
  return (
    <Component
      {...(props as ComponentProps<typeof LinkOutlined>)}
      className={["[&_svg]:h-full [&_svg]:w-full", className].filter(Boolean).join(" ")}
      style={{ width, height, fontSize: width, ...style }}
    />
  );
}

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
    <svg viewBox="0 0 56 56" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M27.9999 51.9062C41.0546 51.9062 51.9063 41.0547 51.9063 28C51.9063 14.9219 41.0312 4.0938 27.9765 4.0938C14.8983 4.0938 4.0937 14.9219 4.0937 28C4.0937 41.0547 14.9218 51.9062 27.9999 51.9062ZM21.8827 33.836C16.0702 28.0469 12.3671 20.664 16.7499 16.2813C17.0077 16.0234 17.289 15.7656 17.5468 15.5078C18.8827 14.2422 20.1718 14.3125 21.3202 15.9297L24.3671 20.2656C25.3983 21.7656 25.1405 22.6094 24.039 23.7813L23.078 24.836C22.7265 25.164 22.8671 25.6094 23.0312 25.8906C23.4765 26.7344 24.7421 28.2344 26.1014 29.5938C27.5077 31 28.9374 32.1953 29.828 32.6875C30.1562 32.875 30.6249 32.9219 30.9296 32.6406L31.9374 31.6797C33.0624 30.5781 33.9765 30.2969 35.4296 31.3281C37.4452 32.7578 38.664 33.6016 39.8593 34.4219C41.3358 35.5 41.6874 36.836 40.1874 38.1953C39.9296 38.4531 39.6952 38.7344 39.4374 38.9922C35.0546 43.3516 27.6952 39.6484 21.8827 33.836Z" />
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
  "chevron-right": (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M9 6l6 6-6 6" />
    </svg>
  ),
  whatsapp: (props) => (
    <svg viewBox="0 0 58 58" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g>
        <path
          d="M0 58 4.988 43.037C2.457 38.78 1 33.812 1 28.5 1 12.76 13.76 0 29.5 0S58 12.76 58 28.5 45.24 57 29.5 57c-4.789 0-9.299-1.187-13.26-3.273L0 58z"
          fill="#2CB742"
        />
        <path
          d="M47.683 37.985c-1.316-2.487-6.169-5.331-6.169-5.331-1.098-.626-2.423-.696-3.049.42 0 0-1.577 1.891-1.978 2.163-1.832 1.241-3.529 1.193-5.242-.52l-3.981-3.981-3.981-3.981c-1.713-1.713-1.761-3.41-.52-5.242.272-.401 2.163-1.978 2.163-1.978 1.116-.627 1.046-1.951.42-3.049 0 0-2.844-4.853-5.331-6.169-.719-.382-1.523-.42-2.251-.199a2.994 2.994 0 0 0-.952.68l-1.758 1.758c-5.577 5.577-2.831 11.873 2.746 17.45l5.097 5.097 5.097 5.097c5.577 5.577 11.873 8.323 17.45 2.746l1.758-1.758c.856-.856 1.052-2.155.492-3.212z"
          fill="#FFFFFF"
        />
      </g>
    </svg>
  ),
  telegram: (props) => (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z" fill="url(#telegram_paint0_linear)" />
      <path d="M8.93822 25.174C11.7438 23.6286 14.8756 22.3388 17.8018 21.0424C22.836 18.919 27.8902 16.8324 32.9954 14.8898C33.9887 14.5588 35.7734 14.2351 35.9484 15.7071C35.8526 17.7907 35.4584 19.8621 35.188 21.9335C34.5017 26.4887 33.7085 31.0283 32.935 35.5685C32.6685 37.0808 30.774 37.8637 29.5618 36.8959C26.6486 34.9281 23.713 32.9795 20.837 30.9661C19.8949 30.0088 20.7685 28.6341 21.6099 27.9505C24.0093 25.5859 26.5539 23.5769 28.8279 21.0901C29.4413 19.6088 27.6289 20.8572 27.0311 21.2397C23.7463 23.5033 20.5419 25.9051 17.0787 27.8945C15.3097 28.8683 13.2479 28.0361 11.4797 27.4927C9.89428 26.8363 7.57106 26.175 8.93806 25.1741L8.93822 25.174Z" fill="white" />
      <defs>
        <linearGradient id="telegram_paint0_linear" x1="18.0028" y1="2.0016" x2="6.0028" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#37AEE2" />
          <stop offset="1" stopColor="#1E96C8" />
        </linearGradient>
      </defs>
    </svg>
  ),
  // vk: прежний inline SVG отключён, задача 114.
  vk: (props) => <ContactIcon component={LinkOutlined} fallback="VK" {...props} />,
  // mail: прежний inline SVG отключён, задача 114.
  mail: (props) => <ContactIcon component={MailOutlined} fallback="Email" {...props} />,
};

export type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
};

export function Icon({ name, ...props }: IconProps) {
  const Component = paths[name];
  return Component({ width: 24, height: 24, ...props });
}
