import {
  cloneElement,
  useId,
  useState,
  type HTMLAttributes,
  type ReactElement,
  type ReactNode,
} from "react";

import { cn } from "../../utils/cn";

export interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  content: ReactNode;
  children: ReactElement;
  side?: "top" | "bottom" | "left" | "right";
}

const sideStyles = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2",
};

export function Tooltip({
  content,
  children,
  side = "top",
  className,
  ...props
}: TooltipProps) {
  const [open, setOpen] = useState(false);

  const tooltipId = useId();

  return (
    <div className={cn("relative inline-block", className)} {...props}>
      {cloneElement(children, {
        "aria-describedby": open ? tooltipId : undefined,

        onMouseEnter: () => setOpen(true),

        onMouseLeave: () => setOpen(false),

        onFocus: () => setOpen(true),

        onBlur: () => setOpen(false),
      })}

      <div
        id={tooltipId}
        role="tooltip"
        className={cn(
          "absolute",
          "z-50",
          "rounded-md",
          "bg-neutral-900",
          "px-3",
          "py-2",
          "text-sm",
          "text-white",
          "shadow-md",
          "whitespace-nowrap",
          "pointer-events-none",

          "transition-opacity",
          "duration-150",

          sideStyles[side],

          open
            ? "visible opacity-100 translate-y-0 duration-fast"
            : "invisible opacity-0 translate-y-1",
        )}
      >
        {content}
      </div>
    </div>
  );
}
