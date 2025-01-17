import { cn } from "~/lib/utils";

type TitleVariant = "h1" | "h2" | "h3" | "h4";

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  variant?: TitleVariant;
  children: React.ReactNode;
}

export function Title({ variant = "h2", children, className, ...props }: TitleProps) {
  const Component = variant;

  const variantStyles = {
    h1: "text-3xl",
    h2: "text-2xl",
    h3: "text-xl",
    h4: "text-lg",
  };

  return (
    <Component
      className={cn(variantStyles[variant], "font-semibold text-primary", className)}
      {...props}
    >
      {children}
    </Component>
  );
}
