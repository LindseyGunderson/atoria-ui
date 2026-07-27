import type { HTMLAttributes } from "react";

import { cn } from "../../utils/cn";

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  label?: string;
}

const orientationStyles = {
  horizontal: "w-full flex-row",
  vertical: "h-full flex-col",
};

export function Divider({
  orientation = "horizontal",
  label,
  className,
  ...props
}: DividerProps) {
  const lineStyles =
    orientation === "horizontal" ? "h-px flex-1" : "w-px flex-1";

  return (
    <div
      className={cn(
        "flex items-center",
        orientationStyles[orientation],
        className,
      )}
      {...props}
    >
      <span className={cn("bg-border", lineStyles)} />

      {label && (
        <span className="px-3 text-sm text-text-secondary">{label}</span>
      )}

      <span className={cn("bg-border", lineStyles)} />
    </div>
  );
}
