import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";
import { Spinner } from "../Spinner";

const buttonVariants = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "gap-2",
    "rounded-md",
    "font-medium",
    "transition-colors",
    "focus-visible:outline-none",
    "focus-visible:ring-ring",
    "disabled:opacity-50",
    "disabled:pointer-events-none",
  ],
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:bg-primary-hover",

        secondary: "bg-surface text-text-primary border border-border",

        ghost: "hover:bg-neutral-100 text-text-primary",
      },

      size: {
        sm: "h-8 px-3 text-sm",

        md: "h-10 px-4",

        lg: "h-12 px-6 text-lg",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends
    ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { className, variant, size, loading, children, ...props },
    ref,
  ) {
    return (
      <button
        ref={ref}
        className={cn(
          buttonVariants({
            variant,
            size,
          }),
          className,
        )}
        aria-busy={loading}
        disabled={loading || props.disabled}
        {...props}
      >
        {loading && <Spinner size="sm" variant="inverse" />}
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";