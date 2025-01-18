import { cn } from "~/lib/utils";
import type { ButtonHTMLAttributes } from "react";
import { forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          `inline-flex items-center justify-center rounded-full font-medium transition-colors
          focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-400
          disabled:pointer-events-none disabled:opacity-50`,
          {
            "bg-slate-900 text-white hover:bg-slate-800": variant === "default",
            "border border-slate-200 bg-white hover:bg-slate-100": variant === "outline",
            "hover:bg-slate-100": variant === "ghost",
            "h-9 px-4 py-2": size === "default",
            "h-8 px-3 text-sm": size === "sm",
            "h-10 px-8": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
