import { Toast } from "./Toast";
import { useToast } from "./ToastProvider";

export function ToastContainer() {
  const { toasts, removeToast } = useToast();

  return (
    <div
      className="
        fixed
        right-4
        top-4
        z-50
        flex
        w-full
        max-w-sm
        flex-col
        gap-3
        p-4
      "
    >
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          title={toast.title}
          description={toast.description}
          variant={toast.variant}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
}
