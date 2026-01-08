"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { cn } from "../utils/cn";

export type TooltipSide = "top" | "bottom" | "left" | "right";

export type TooltipProps = {
  content: string;
  side?: TooltipSide;
  delay?: number;
  children: ReactNode;
  className?: string;
};

export function Tooltip({
  content,
  side = "top",
  delay = 80,
  children,
  className,
}: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const [style, setStyle] = useState<CSSProperties>();
  const triggerRef = useRef<HTMLSpanElement | null>(null);
  const tooltipRef = useRef<HTMLSpanElement | null>(null);
  const timeoutRef = useRef<ReturnType<typeof globalThis.setTimeout> | null>(null);

  const clearTimer = () => {
    if (timeoutRef.current !== null) {
      globalThis.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const updatePosition = () => {
    const trigger = triggerRef.current;
    if (!trigger) return;

    const rect = trigger.getBoundingClientRect();
    const scrollY = window.scrollY || 0;
    const scrollX = window.scrollX || 0;

    if (side === "top") {
      setStyle({
        top: rect.top + scrollY,
        left: rect.left + rect.width / 2 + scrollX,
        transform: "translate(-50%, -100%) translateY(-8px)",
        maxWidth: "calc(100vw - 16px)",
      });
    } else if (side === "bottom") {
      setStyle({
        top: rect.bottom + scrollY,
        left: rect.left + rect.width / 2 + scrollX,
        transform: "translate(-50%, 100%) translateY(8px)",
        maxWidth: "calc(100vw - 16px)",
      });
    } else if (side === "left") {
      setStyle({
        top: rect.top + rect.height / 2 + scrollY,
        left: rect.left + scrollX,
        transform: "translate(-100%, -50%) translateX(-8px)",
        maxWidth: "calc(100vw - 16px)",
      });
    } else {
      setStyle({
        top: rect.top + rect.height / 2 + scrollY,
        left: rect.right + scrollX,
        transform: "translate(100%, -50%) translateX(8px)",
        maxWidth: "calc(100vw - 16px)",
      });
    }
  };

  const show = () => {
    clearTimer();
    timeoutRef.current = globalThis.setTimeout(() => {
      updatePosition();
      setVisible(true);
    }, delay);
  };

  const hide = () => {
    clearTimer();
    setVisible(false);
  };

  useEffect(() => {
    if (!visible) return;
    const handleReposition = () => updatePosition();
    window.addEventListener("scroll", handleReposition, true);
    window.addEventListener("resize", handleReposition);
    return () => {
      window.removeEventListener("scroll", handleReposition, true);
      window.removeEventListener("resize", handleReposition);
    };
  }, [visible, side]);

  useEffect(() => {
    if (!visible || !style || !tooltipRef.current) return;
    const margin = 8;
    const rect = tooltipRef.current.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let deltaX = 0;
    let deltaY = 0;

    if (rect.left < margin) {
      deltaX = margin - rect.left;
    }
    if (rect.right + deltaX > viewportWidth - margin) {
      deltaX -= rect.right + deltaX - (viewportWidth - margin);
    }
    if (rect.top < margin) {
      deltaY = margin - rect.top;
    }
    if (rect.bottom + deltaY > viewportHeight - margin) {
      deltaY -= rect.bottom + deltaY - (viewportHeight - margin);
    }

    if (deltaX !== 0 || deltaY !== 0) {
      setStyle((current) =>
        current
          ? {
              ...current,
              left:
                typeof current.left === "number" ? current.left + deltaX : current.left,
              top:
                typeof current.top === "number" ? current.top + deltaY : current.top,
            }
          : current,
      );
    }
  }, [visible, style]);

  useEffect(() => {
    return clearTimer;
  }, []);

  const portalTarget = typeof document !== "undefined" ? document.body : null;

  return (
    <span
      ref={triggerRef}
      className={cn("relative inline-flex", className)}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      {children}
      {visible &&
        portalTarget &&
        style &&
        createPortal(
          <span
            ref={tooltipRef}
            role="tooltip"
            style={style}
            className={cn(
              "pointer-events-none absolute z-[9999] whitespace-normal break-words rounded-full bg-[#2f3600] px-3 py-1 text-xs text-white shadow"
            )}
          >
            {content}
          </span>,
          portalTarget
        )}
    </span>
  );
}
