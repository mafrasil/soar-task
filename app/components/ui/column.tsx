import { cn } from "~/lib/utils";

const spanClasses = {
  1: "md:col-span-1",
  2: "md:col-span-2",
  3: "md:col-span-3",
} as const;

type ColumnProps = {
  children: React.ReactNode;
  span?: keyof typeof spanClasses;
  className?: string;
};

export function Column({ children, span = 1, className }: ColumnProps) {
  return <div className={cn(spanClasses[span], className)}>{children}</div>;
}
