import { Card } from "~/components/ui/card";
import { cn } from "~/lib/utils";
import Visa from "~icons/bxl/visa";
import { Icon } from "../ui/icon";
import { cva } from "class-variance-authority";

interface CreditCardProps {
  variant?: "dark" | "light";
  balance: number;
  cardHolder: string;
  validThru: string;
  cardNumber: string;
  className?: string;
  cardType?: "mastercard" | "visa";
}

const cardVariants = cva("aspect-[350/235] w-full flex flex-col", {
  variants: {
    variant: {
      dark: "bg-gradient-to-br from-[#5B5A6F] to-black text-white",
      light: "bg-white text-gray-900 border",
    },
  },
  defaultVariants: {
    variant: "dark",
  },
});

const iconVariants = cva("", {
  variants: {
    variant: {
      dark: "",
      light: "invert-[0.7] brightness-125",
    },
  },
  defaultVariants: {
    variant: "dark",
  },
});

export function CreditCard({
  variant = "dark",
  balance,
  cardHolder,
  validThru,
  cardNumber,
  className,
  cardType = "mastercard",
}: CreditCardProps) {
  return (
    <Card className={cn(cardVariants({ variant }), className)}>
      <div className="flex flex-col flex-1 p-4 sm:p-6 xl:p-8">
        <div className="flex justify-between items-start mb-auto">
          <div>
            <div className="text-sm opacity-80">Balance</div>
            <div className="text-lg xl:text-2xl 2xl:text-3xl font-medium">
              ${balance.toLocaleString()}
            </div>
          </div>
          <div className="w-6 lg:w-10">
            <Icon name="chip-card" className={cn("size-6 lg:size-10", iconVariants({ variant }))} />
          </div>
        </div>

        <div className="mt-auto pt-2 space-y-6">
          <div className="flex gap-4 xl:gap-6 text-sm">
            <div className="flex-1">
              <div className="text-xs xl:text-sm opacity-80">CARD HOLDER</div>
              <div className="font-medium">{cardHolder}</div>
            </div>
            <div className="w-24">
              <div className="text-xs xl:text-sm opacity-80">VALID THRU</div>
              <div className="font-medium">{validThru}</div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={cn(
          `flex items-center justify-between border-t border-transparent bg-gradient-to-b px-5 lg:px-8 py-3
          xl:py-6`,
          variant === "dark" ? "from-white/15 to-white/0" : "from-white/15 to-white/0",
          variant === "light" && "border-gray-200"
        )}
      >
        <div className="text-xs md:text-sm xl:text-lg 2xl:text-xl tracking-widest font-medium">
          {cardNumber.slice(0, 4)} **** **** {cardNumber.slice(-4)}
        </div>
        {cardType === "mastercard" ? (
          <Icon name="mastercard" className={cn("h-6 lg:h-10 w-auto", iconVariants({ variant }))} />
        ) : (
          <Visa className={cn("h-6 lg:h-10 w-auto", iconVariants({ variant }))} />
        )}
      </div>
    </Card>
  );
}
