import type { InputHTMLAttributes } from "react";
import { cn } from "~/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

export function Input({ className, icon, ...props }: InputProps) {
  return (
    <div className="relative">
      <input
        className={cn(
          "w-full px-4 py-2 rounded-3xl bg-input focus:outline-none focus:ring-2 focus:ring-blue-500",
          { "pr-10": icon },
          className
        )}
        {...props}
      />
      {icon && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">{icon}</div>
      )}
    </div>
  );
}
