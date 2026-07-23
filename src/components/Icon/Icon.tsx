import type { ComponentType, SVGProps } from "react";
import { cn } from "../../utils/cn";

const iconSizes = {
  sm: 16,
  md: 20,
  lg: 24,
} as const;

export interface IconProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  size?: keyof typeof iconSizes;
  className?: string;
  decorative?: boolean;
  label?: string;
}

export function Icon({
  icon: IconComponent,
  size = "md",
  className,
  decorative = true,
  label,
}: IconProps) {
  return (
    <IconComponent
      width={iconSizes[size]}
      height={iconSizes[size]}
      className={cn(className)}
      aria-hidden={decorative}
      aria-label={decorative ? undefined : label}
    />
  );
}