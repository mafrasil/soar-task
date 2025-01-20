import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { cn } from "~/lib/utils";

interface DropdownProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  align?: "start" | "center" | "end";
  side?: "top" | "right" | "bottom" | "left";
}

export function Dropdown({ trigger, children, align = "end", side = "bottom" }: DropdownProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>{trigger}</DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align={align}
          side={side}
          className={cn(
            `z-50 min-w-[8rem] overflow-hidden rounded-md border bg-white p-1 shadow-md animate-in
            data-[side=bottom]:slide-in-from-top-2`,
            `data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2
            data-[side=top]:slide-in-from-bottom-2`
          )}
        >
          {children}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export function DropdownItem({
  children,
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenu.Item>) {
  return (
    <DropdownMenu.Item
      className={cn(
        `relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none
        transition-colors`,
        `focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none
        data-[disabled]:opacity-50`,
        className
      )}
      {...props}
    >
      {children}
    </DropdownMenu.Item>
  );
}
