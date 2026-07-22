import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const spinnerVariants = cva(
  [
    "inline-block",
    "animate-spin",
    "rounded-full",
    "border-2",
    "border-current",
    "border-t-transparent",
  ],
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-6 w-6",
        lg: "h-8 w-8",
      },

      variant: {
        primary: "text-primary",
        muted: "text-text-secondary",
        inverse: "text-white",
      },
    },

    defaultVariants: {
      size: "md",
      variant: "primary",
    },
  },
);

export interface SpinnerProps extends VariantProps<typeof spinnerVariants> {
  label?: string;
}

export function Spinner({ size, variant, label = "Loading" }: SpinnerProps) {
  return (
    <span
      className={cn(
        spinnerVariants({
          size,
          variant,
        }),
      )}
      role="status"
      aria-label={label}
    />
  );
}
