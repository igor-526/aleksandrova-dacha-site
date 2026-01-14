import type { ButtonHTMLAttributes, MouseEvent, ReactNode } from "react";
import { cn } from "../utils/cn";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[color:var(--color-color1,#384000)] text-white hover:bg-[#2f3600] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2f3600]",
  secondary:
    "bg-[color:var(--color-color2,#fae8c4)] text-[#384000] hover:bg-[#f3dba6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b48a4b]",
  ghost:
    "bg-transparent text-[#384000] border border-[#384000]/40 hover:bg-[#384000]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#384000]/60",
  disabled:
    "bg-[#e2d6bc] text-[#8d784f] border border-transparent cursor-not-allowed opacity-70",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-base sm:text-sm",
  lg: "px-8 py-3 text-lg md:px-6 md:py-2.5 md:text-base sm:px-4 sm:py-2 sm:text-sm",
};

export type ButtonVariant = "primary" | "secondary" | "ghost" | "disabled";
export type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onClick"
> & {
  variant?: ButtonVariant;
  disabledVariant?: boolean;
  size?: ButtonSize;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  loading?: boolean;
  fullWidth?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
};

export function Button({
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  loading = false,
  fullWidth = false,
  href,
  target,
  rel,
  className,
  children,
  disabled,
  onClick,
  ...rest
}: ButtonProps) {
  const isDisabledVariant = variant === "disabled";
  const finalDisabled = disabled || loading || isDisabledVariant;
  const { type, ...buttonRest } =
    rest as ButtonHTMLAttributes<HTMLButtonElement>;

  const content = (
    <span className="flex items-center justify-center gap-2">
      {loading && (
        <span
          className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
          aria-hidden="true"
        />
      )}
      {!loading && iconLeft}
      <span>{children}</span>
      {!loading && iconRight}
    </span>
  );

  const baseClasses = cn(
    "inline-flex items-center justify-center rounded-full font-semibold transition-colors duration-200",
    "disabled:cursor-not-allowed disabled:opacity-60",
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && "w-full",
    className
  );

  if (href && !isDisabledVariant) {
    return (
      <a
        href={href}
        target={target}
        rel={cn(rel, "canonical")}
        onClick={finalDisabled ? undefined : onClick}
        className={baseClasses}
        aria-disabled={finalDisabled || undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={baseClasses}
      disabled={finalDisabled}
      onClick={onClick}
      type={type ?? "button"}
      {...buttonRest}
    >
      {content}
    </button>
  );
}
