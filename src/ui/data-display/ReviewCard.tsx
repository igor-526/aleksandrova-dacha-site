import { Icon } from "../atoms/Icon";
import { Card } from "./Card";

export type ReviewCardProps = {
  author: string;
  rating?: number;
  text: string;
  source?: string;
};

const STAR = "★";

export function ReviewCard({ author, rating = 5, text, source }: ReviewCardProps) {
  return (
    <Card
      variant="soft"
      className="h-full"
      media={<Icon name="quote" width={36} height={36} className="text-[#c9b585]" />}
    >
      <div className="space-y-4">
        <p className="text-base leading-relaxed text-[#2f3600]">“{text}”</p>
        <div className="space-y-1 text-sm text-[#4b4d2f]">
          <div className="font-semibold text-[#2f3600]">{author}</div>
          {source && <div className="text-xs uppercase tracking-[0.3em] text-[#8d784f]">{source}</div>}
          {rating && (
            <div className="text-[#c9b585]">
              {Array.from({ length: rating }).map((_, index) => (
                <span key={index}>{STAR}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
