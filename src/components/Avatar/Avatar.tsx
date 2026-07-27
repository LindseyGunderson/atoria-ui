import type { HTMLAttributes } from "react";

import { cn } from "../../utils/cn";

import { getInitials } from "./avatar.utils";

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  name?: string;
  size?: "sm" | "md" | "lg";
  variant?: "circle" | "square";
}

const sizeStyles = {
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-14 w-14 text-lg",
};

const variantStyles = {
  circle: "rounded-full",
  square: "rounded-md",
};

export function Avatar({
  src,
  alt,
  name,
  size = "md",
  variant = "circle",
  className,
  ...props
}: AvatarProps) {
  const hasName = Boolean(name?.trim());

  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center",
        "overflow-hidden",
        "bg-primary text-white font-medium",
        sizeStyles[size],
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {src ? (
        <img
          src={src}
          alt={alt ?? name}
          className="h-full w-full object-cover"
        />
      ) : hasName ? (
        <span>{getInitials(name!)}</span>
      ) : (
        <span>?</span>
      )}
    </div>
  );
}
