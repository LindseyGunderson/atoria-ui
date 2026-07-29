import { createContext, useContext, useState, type ReactNode } from "react";

import type { Toast as ToastItem, ToastOptions } from "./toast.types";

interface ToastContextValue {
  toasts: ToastItem[];
  addToast: (toast: ToastOptions) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  function addToast(options: ToastOptions) {
    const newToast: ToastItem = {
      id: crypto.randomUUID(),
      title: options.title,
      description: options.description,
      variant: options.variant ?? "info",
    };

    setToasts((current) => [...current, newToast]);
  }

  function removeToast(id: string) {
    setToasts((current) => current.filter((toast) => toast.id !== id));
  }

  return (
    <ToastContext.Provider
      value={{
        toasts,
        addToast,
        removeToast,
      }}
    >
      {children}
      
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used inside ToastProvider");
  }

  return context;
}
