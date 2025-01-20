import { cn } from "~/lib/utils";
import type { ButtonHTMLAttributes } from "react";
import { forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "light" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  ariaLabel?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ariaLabel, ...props }, ref) => {
    return (
      <button
        role="button"
        aria-label={ariaLabel}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            props.onClick?.(e as unknown as React.MouseEvent<HTMLButtonElement>);
          }
        }}
        className={cn(
          `inline-flex items-center justify-center rounded-xl font-medium transition-colors
          focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-400
          disabled:pointer-events-none disabled:opacity-50`,
          {
            "bg-button text-white hover:bg-neutral-700": variant === "default",
            "border border-border bg-white hover:bg-slate-100": variant === "outline",
            "bg-background hover:bg-slate-100": variant === "light",
            "hover:bg-slate-100": variant === "ghost",
            "px-16 py-3": size === "default",
            "h-8 px-3 text-sm": size === "sm",
            "h-10 px-8": size === "lg",
            "h-10 w-10 rounded-full": size === "icon",
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
