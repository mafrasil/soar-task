import { Card } from "~/components/ui/card";
import { cn } from "~/lib/utils";

interface CreditCardProps {
  variant?: "dark" | "light";
  balance: number;
  cardHolder: string;
  validThru: string;
  cardNumber: string;
  className?: string;
}

export function CreditCard({
  variant = "dark",
  balance,
  cardHolder,
  validThru,
  cardNumber,
  className,
}: CreditCardProps) {
  return (
    <Card
      className={cn(
        "p-6 relative rounded-3xl aspect-[1.586/1] w-full",
        variant === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900 border",
        className
      )}
    >
      <div className="flex flex-col h-full justify-between">
        <div className="flex justify-between items-start">
          <div>
            <div className="text-sm opacity-80">Balance</div>
            <div className="text-2xl font-semibold">${balance.toLocaleString()}</div>
          </div>
          <div className="w-12 h-8">
            <div className="flex gap-1">
              <div className="w-3 h-3 bg-current rounded-full opacity-80" />
              <div className="w-3 h-3 bg-current rounded-full opacity-80" />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="text-xl tracking-widest">
            {cardNumber.replace(/(\d{4})/g, "$1 ").trim()}
          </div>

          <div className="flex justify-between items-end text-sm">
            <div>
              <div className="opacity-80 text-xs">CARD HOLDER</div>
              <div>{cardHolder}</div>
            </div>
            <div>
              <div className="opacity-80 text-xs">VALID THRU</div>
              <div>{validThru}</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
