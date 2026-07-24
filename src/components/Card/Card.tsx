import type { HTMLAttributes } from "react";

import { cn } from "../../utils/cn";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outlined";
}

export function Card({
  variant = "default",
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-card",
        "bg-surface",
        "border border-border",
        "shadow-card",
        "p-6",
        variant === "outlined" && "shadow-none",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
