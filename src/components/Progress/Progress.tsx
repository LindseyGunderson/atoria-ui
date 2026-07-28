import type { HTMLAttributes } from "react";

import { cn } from "../../utils/cn";

export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  variant?: "default" | "success" | "warning" | "error";
  showValue?: boolean;
  label?: string;
}

const variantStyles = {
  default: "bg-primary",
  success: "bg-success",
  warning: "bg-warning",
  error: "bg-error",
};

export function Progress({
  value,
  max = 100,
  variant = "default",
  showValue = false,
  label,
  className,
  ...props
}: ProgressProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className={cn("flex flex-col gap-2", className)} {...props}>
      {(label || showValue) && (
        <div className="flex items-center justify-between">
          {label && (
            <span className="text-sm font-medium text-text-primary">
              {label}
            </span>
          )}

          {showValue && (
            <span className="text-sm text-text-secondary">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}

      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={value}
        className={cn("h-2 w-full overflow-hidden rounded-full", "bg-border")}
      >
        <div
          className={cn(
            "h-full rounded-full",
            "transition-all duration-300",
            variantStyles[variant],
          )}
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>
    </div>
  );
}
