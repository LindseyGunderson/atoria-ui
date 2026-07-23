import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const badgeVariants = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "whitespace-nowrap",
    "rounded-full",
    "font-medium",
    "transition-colors",
  ],
  {
    variants: {
      variant: {
        neutral: "border border-border bg-neutral-100 text-text-primary",

        primary: "border border-primary/20 bg-primary/10 text-primary",

        success: "border border-success/20 bg-success/10 text-success",

        warning: "border border-warning/20 bg-warning/10 text-warning",

        error: "border border-error/20 bg-error/10 text-error",

        info: "border border-info/20 bg-info/10 text-info",
      },

      size: {
        sm: "px-2 py-0.5 text-xs",

        md: "px-2.5 py-1 text-sm",
      },
    },
    defaultVariants: {
      variant: "neutral",
      size: "md",
    },
  },
);

export interface BadgeProps
  extends
    React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export const Badge = ({
  className,
  variant,
  size,
  children,
  ...props
}: BadgeProps) => {
  return (
    <span
      className={cn(
        badgeVariants({
          variant,
          size,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
};