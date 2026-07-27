import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "../../utils/cn";

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "success" | "error" | "warning" | "info";
  title?: string;
  icon?: ReactNode;
}

const variantStyles = {
  success: {
    container: "border-success bg-success-background",
    title: "text-success-strong",
    text: "text-success-strong",
  },

  error: {
    container: "border-error bg-error-background",
    title: "text-error-strong",
    text: "text-error-strong",
  },

  warning: {
    container: "border-warning bg-warning-background",
    title: "text-warning-strong",
    text: "text-warning-strong",
  },

  info: {
    container: "border-info bg-info-background",
    title: "text-info-strong",
    text: "text-info-strong",
  },
};

export function Alert({
  variant = "info",
  title,
  icon,
  children,
  className,
  ...props
}: AlertProps) {
  const styles = variantStyles[variant];

 return (
   <div
     role="alert"
     className={cn(
       "flex items-start gap-3 rounded-md border p-4",
       styles.container,
       className,
     )}
     {...props}
   >
     {icon && <div className="shrink-0">{icon}</div>}

     <div>
       {title && <p className={cn("font-medium", styles.title)}>{title}</p>}

       {children && (
         <div className={cn("mt-1 text-sm", styles.text)}>{children}</div>
       )}
     </div>
   </div>
 );
}
