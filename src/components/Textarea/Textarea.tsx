import { forwardRef, useId } from "react";
import type { TextareaHTMLAttributes } from "react";

import { cn } from "../../utils/cn";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea(
    { id, label, helperText, error, className, required, ...props },
    ref,
  ) {
    const generatedId = useId();

    const textareaId = id ?? generatedId;

    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label
            htmlFor={textareaId}
            className="text-sm font-medium text-text-primary"
          >
            {label}
            {required && <span aria-hidden="true"> *</span>}
          </label>
        )}

        <textarea
          id={textareaId}
          ref={ref}
          className={cn(
            "min-h-24 rounded-md border px-3 py-2",
            "bg-surface text-text-primary",
            className,
          )}
          aria-describedby={textareaId || undefined}
          aria-invalid={error ? true : undefined}
          aria-required={required}
          {...props}
        />
        {(helperText || error) && (
          <p
            className={
              error ? "text-sm text-error" : "text-sm text-text-secondary"
            }
          >
            {error ?? helperText}
          </p>
        )}
      </div>
    );
  },
);
