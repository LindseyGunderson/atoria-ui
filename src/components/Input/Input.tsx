import { forwardRef, useId } from "react";
import type { InputHTMLAttributes } from "react";

import { cn } from "../../utils/cn";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
}

export const Input = forwardRef<
  HTMLInputElement,
  InputProps
>(
  function Input(
    {
      id,
      label,
      helperText,
      error,
      className,
      required,
      ...props
    },
    ref,
  ) {
    const generatedId = useId();

    const inputId = id ?? generatedId;

    const descriptionIds = [
      helperText && `${inputId}-helper`,
      error && `${inputId}-error`,
    ]
      .filter(Boolean)
      .join(" ");

    const descriptionId = `${inputId}-description`;

    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-text-primary"
          >
            {label}
            {required && <span aria-hidden="true"> *</span>}
          </label>
        )}

        <input
          id={inputId}
          ref={ref}
          className={cn(
            "h-10 rounded-md border px-3",
            "bg-surface text-text-primary",
            "placeholder:text-text-secondary",
            "border-border",
            "transition-colors",
            "focus:border-primary",
            "focus:ring-focus",
            error
              ? [
                  "border-error",
                  "focus:border-error",
                  "focus:ring-error/20",
                  "text-error",
                ]
              : ["border-border", "focus:border-primary", "focus:ring-primary"],
            "disabled:cursor-not-allowed",
            "disabled:bg-neutral-100",
            "disabled:text-text-secondary",
            "disabled:border-border",
            className,
          )}
          aria-describedby={descriptionIds || undefined}
          aria-invalid={error ? true : undefined}
          aria-required={required}
          {...props}
        />

        {(helperText || error) && (
          <p
            id={descriptionId}
            className={
              error ? "text-sm text-error" : "text-sm text-text-secondary"
            }
          >
            {error ?? helperText}
          </p>
        )}
      </div>
    );
});