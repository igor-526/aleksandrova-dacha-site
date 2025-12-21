import type { CSSProperties, ReactNode } from "react";

export type ThemeTokensProps = {
  mode?: "light" | "dark";
  brandColor?: string;
  accentColor?: string;
  children: ReactNode;
};

const lightPalette = {
  background: "#f6efe0",
  foreground: "#2f3600",
  card: "#f8f2e4",
};

const darkPalette = {
  background: "#20260f",
  foreground: "#f8f5ea",
  card: "#2b3019",
};

export function ThemeTokens({
  mode = "light",
  brandColor = "#384000",
  accentColor = "#c9b585",
  children,
}: ThemeTokensProps) {
  const palette = mode === "dark" ? darkPalette : lightPalette;

  const cssVars = {
    "--color-background": palette.background,
    "--color-foreground": palette.foreground,
    "--color-card": palette.card,
    "--color-brand": brandColor,
    "--color-accent": accentColor,
    "--shadow-soft": "0 12px 28px rgba(56, 64, 0, 0.1)",
    "--radius-lg": "32px",
    "--radius-md": "20px",
    "--radius-sm": "12px",
    "--font-serif": "var(--font-serif-main, 'PT Serif', 'Georgia', serif)",
    "--font-sans":
      "var(--font-sans-main, 'Manrope', 'Inter', 'Segoe UI', sans-serif)",
  } satisfies Record<string, string>;

  return <div style={cssVars as CSSProperties}>{children}</div>;
}
