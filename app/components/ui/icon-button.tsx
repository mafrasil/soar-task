import type { ButtonHTMLAttributes } from "react";
import { cn } from "~/lib/utils";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "ghost" | "default";
  size?: "sm" | "md";
}

export function IconButton({
  className,
  variant = "default",
  size = "md",
  ...props
}: IconButtonProps) {
  return (
    <button
      className={cn(
        "rounded-full flex items-center justify-center",
        {
          "hover:bg-gray-100": variant === "ghost",
          "w-8 h-8": size === "sm",
          "w-10 h-10": size === "md",
        },
        className
      )}
      {...props}
    />
  );
}
