import { cn } from "~/lib/utils";

const spanClasses = {
  1: "lg:col-span-1",
  2: "lg:col-span-2",
  3: "lg:col-span-3",
} as const;

type ColumnProps = {
  children: React.ReactNode;
  span?: keyof typeof spanClasses;
  className?: string;
};

export function Column({ children, span = 1, className }: ColumnProps) {
  return <div className={cn(spanClasses[span], className)}>{children}</div>;
}
