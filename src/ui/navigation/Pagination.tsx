"use client";
import { Button } from "../button/Button";
import { cn } from "../utils/cn";

export type PaginationProps = {
  page: number;
  total: number;
  onPageChange?: (page: number) => void;
  className?: string;
};

const DOTS = "…";

const makeRange = (start: number, end: number) =>
  Array.from({ length: end - start }, (_, index) => start + index);

const getPages = (page: number, total: number) => {
  const siblingCount = 1;
  const totalNumbers = siblingCount * 2 + 5;
  if (total <= totalNumbers) {
    return makeRange(1, total + 1);
  }

  const leftSibling = Math.max(page - siblingCount, 1);
  const rightSibling = Math.min(page + siblingCount, total);
  const showLeftDots = leftSibling > 2;
  const showRightDots = rightSibling < total - 1;

  const pages: (number | string)[] = [];

  if (!showLeftDots && showRightDots) {
    const leftItems = makeRange(1, 3 + siblingCount * 2);
    pages.push(...leftItems, DOTS, total);
  } else if (showLeftDots && !showRightDots) {
    const rightItems = makeRange(total - (2 + siblingCount * 2), total + 1);
    pages.push(1, DOTS, ...rightItems);
  } else if (showLeftDots && showRightDots) {
    const middleItems = makeRange(leftSibling, rightSibling + 1);
    pages.push(1, DOTS, ...middleItems, DOTS, total);
  }

  return pages;
};

export function Pagination({
  page,
  total,
  onPageChange,
  className,
}: PaginationProps) {
  const pages = getPages(page, total);

  const change = (next: number) => {
    if (next >= 1 && next <= total && next !== page) {
      onPageChange?.(next);
    }
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => change(page - 1)}
        disabled={page <= 1}
      >
        Назад
      </Button>
      <div className="flex items-center gap-1">
        {pages.map((item, index) =>
          typeof item === "number" ? (
            <button
              key={item}
              type="button"
              onClick={() => change(item)}
              className={cn(
                "h-9 w-9 rounded-full text-sm font-semibold",
                item === page
                  ? "bg-[#384000] text-white"
                  : "text-[#2f3600] hover:bg-[#e8ddc1]"
              )}
            >
              {item}
            </button>
          ) : (
            <span key={`dots-${index}`} className="px-2 text-[#8d784f]">
              {DOTS}
            </span>
          )
        )}
      </div>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => change(page + 1)}
        disabled={page >= total}
      >
        Вперёд
      </Button>
    </div>
  );
}
