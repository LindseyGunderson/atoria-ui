import type { ButtonHTMLAttributes } from "react";
import { FiX } from "react-icons/fi";

import {
  createContext,
  useContext,
  useEffect,
  useId,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from "react";

import { cn } from "../../utils/cn";

const sizeStyles = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
};

interface DialogContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
  titleId: string;
  descriptionId: string;
}

const DialogContext = createContext<DialogContextValue | undefined>(undefined);

function useDialogContext() {
  const context = useContext(DialogContext);

  if (!context) {
    throw new Error("Dialog components must be used inside a Dialog provider.");
  }

  return context;
}

export function Dialog({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const titleId = useId();
  const descriptionId = useId();

  return (
    <DialogContext.Provider
      value={{
        open,
        setOpen,
        titleId,
        descriptionId,
      }}
    >
      {children}
    </DialogContext.Provider>
  );
}

export function DialogTrigger({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLButtonElement>) {
  const { setOpen } = useDialogContext();

  return (
    <button className={className} onClick={() => setOpen(true)} {...props}>
      {children}
    </button>
  );
}

export function DialogContent({
  children,
  className,
  size = "md",
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const { open, setOpen, titleId, descriptionId } = useDialogContext();

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, setOpen]);

  if (!open) {
    return null;
  }

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-neutral-900/50
        backdrop-blur-sm
        p-4
        animate-dialog-overlay
      "
      onClick={() => setOpen(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        className={cn(
          "relative",
          "w-full",
          sizeStyles[size],
          "rounded-lg",
          "bg-white",
          "p-6",
          "shadow-lg",
          "animate-dialog-content",
          className,
        )}
        onClick={(event) => event.stopPropagation()}
        {...props}
      >
        {children}
      </div>
    </div>
  );
}

export function DialogHeader({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mb-4", "space-y-2", className)} {...props}>
      {children}
    </div>
  );
}

export function DialogTitle({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  const { titleId } = useDialogContext();

  return (
    <h2
      id={titleId}
      className={cn("text-lg", "font-semibold", "text-neutral-900", className)}
      {...props}
    >
      {children}
    </h2>
  );
}

export function DialogDescription({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  const { descriptionId } = useDialogContext();

  return (
    <p
      id={descriptionId}
      className={cn("text-sm", "text-neutral-600", className)}
      {...props}
    >
      {children}
    </p>
  );
}

export function DialogFooter({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mt-6", "flex", "justify-end", "gap-3", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function DialogClose({
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { setOpen } = useDialogContext();

  return (
    <button className={className} onClick={() => setOpen(false)} {...props}>
      {children}
    </button>
  );
}

export function DialogCloseButton({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { setOpen } = useDialogContext();

  return (
    <button
      type="button"
      aria-label="Close dialog"
      className={cn(
        "absolute right-4 top-4",
        "flex h-8 w-8 items-center justify-center",
        "rounded-md",
        "text-neutral-500",
        "transition-colors",
        "active:scale-95",
        "duration-150",
        "hover:bg-neutral-100",
        "hover:text-neutral-900",
        className,
      )}
      onClick={() => setOpen(false)}
      {...props}
    >
      <FiX size={16} />
    </button>
  );
}
