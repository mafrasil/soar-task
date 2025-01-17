import { cn } from "~/lib/utils";
import type { ComponentProps } from "react";

interface CardProps extends ComponentProps<"div"> {
  variant?: "default" | "ghost";
}

export function Card({ className, variant = "default", ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl",
        variant === "default" && "bg-white shadow-sm",
        variant === "ghost" && "bg-gray-50/50",
        className
      )}
      {...props}
    />
  );
}
