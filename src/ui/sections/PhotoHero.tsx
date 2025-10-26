import { Hero, type HeroProps } from "../hero/Hero";

export function PhotoHero(props: HeroProps) {
  return <Hero {...props} />;
}
