import type { InputHTMLAttributes } from "react";
import { cn } from "~/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  variant?: "default" | "outline";
  rounded?: "default" | "full";
}

export function Input({
  className,
  icon,
  variant = "default",
  rounded = "default",
  ...props
}: InputProps) {
  return (
    <div className="relative">
      {icon && <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">{icon}</div>}
      <input
        className={cn(
          `w-full px-4 py-2 rounded-xl placeholder:font-light placeholder:text-placeholder placeholder:text-sm
          focus:outline-none focus:ring-1 focus:ring-primary`,
          {
            "rounded-full": rounded === "full",
            "pl-10": icon,
            "bg-input": variant === "default",
            "bg-transparent py-3 border border-border": variant === "outline",
          },
          className
        )}
        {...props}
      />
    </div>
  );
}
