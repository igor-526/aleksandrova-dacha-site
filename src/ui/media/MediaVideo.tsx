import { cn } from "../utils/cn";

export type MediaVideoProps = {
  src: string;
  poster?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  className?: string;
};

export function MediaVideo({
  src,
  poster,
  autoPlay = true,
  loop = true,
  muted = true,
  controls = false,
  className,
}: MediaVideoProps) {
  return (
    <video
      className={cn("w-full rounded-3xl object-cover", className)}
      src={src}
      poster={poster}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      controls={controls}
      playsInline
    />
  );
}
