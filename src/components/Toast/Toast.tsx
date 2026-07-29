import { useEffect, useState, type HTMLAttributes } from "react";

import { cn } from "../../utils/cn";

import type { ToastVariant } from "./toast.types";

import {
  FiCheckCircle,
  FiAlertCircle,
  FiAlertTriangle,
  FiInfo,
} from "react-icons/fi";

interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  variant?: ToastVariant;
  onClose?: () => void;
  duration?: number;
}

const variantStyles = {
  success: {
    container: "border-success bg-success-background",
    title: "text-success",
    icon: FiCheckCircle,
  },

  error: {
    container: "border-error bg-error-background",
    title: "text-error",
    icon: FiAlertCircle,
  },

  warning: {
    container: "border-warning bg-warning-background",
    title: "text-warning",
    icon: FiAlertTriangle,
  },

  info: {
    container: "border-info bg-info-background",
    title: "text-info",
    icon: FiInfo,
  },
};

export function Toast({
  title,
  description,
  variant = "info",
  onClose,
  duration = 5000,
  className,
  ...props
}: ToastProps) {
  const [isClosing, setIsClosing] = useState(false);

  const Icon = variantStyles[variant].icon;

  useEffect(() => {
    if (!onClose) {
      return;
    }

    const timer = window.setTimeout(() => {
      setIsClosing(true);
    }, duration);

    return () => {
      window.clearTimeout(timer);
    };
  }, [duration, onClose]);

  function requestClose() {
    setIsClosing(true);
  }

  function handleTransitionEnd() {
    if (isClosing) {
      onClose?.();
    }
  }

  return (
    <div
      role={variant === "error" ? "alert" : "status"}
      onTransitionEnd={handleTransitionEnd}
      className={cn(
        "relative",
        "w-full max-w-sm",
        "rounded-lg",
        "border",
        "bg-white",
        "p-4",
        "shadow-lg",
        "transition-all",
        "duration-200",
        isClosing ? "translate-x-full opacity-0" : "translate-x-0 opacity-100",
        variantStyles[variant].container,
        className,
      )}
      {...props}
    >
      <div className="flex gap-3 pr-6">
        <Icon
          className="
            mt-0.5
            h-5
            w-5
            shrink-0
            "
          aria-hidden="true"
        />

        <div>
          <h3
            className={cn(
              "text-sm",
              "font-semibold",
              variantStyles[variant].title,
            )}
          >
            {title}
          </h3>

          {description && (
            <p className="mt-1 text-sm text-neutral-600">{description}</p>
          )}
        </div>
      </div>

      {onClose && (
        <button
          type="button"
          aria-label="Close notification"
          className="
            absolute
            right-3
            top-3
            text-neutral-500
            transition-colors
            duration-150
            hover:text-neutral-900
          "
          onClick={requestClose}
        >
          ×
        </button>
      )}
    </div>
  );
}
