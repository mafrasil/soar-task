import { CreditCard } from "~/components/cards/credit-card";
import { Title } from "~/components/ui/title";
import { cn } from "~/lib/utils";
import { Column } from "~/components/ui/column";

type MyCardsProps = {
  cards: Array<{
    id: string;
    balance: number;
    cardHolder: string;
    validThru: string;
    cardNumber: string;
    variant: "dark" | "light";
  }>;
  span?: 1 | 2 | 3;
};

export function MyCards({ cards, span }: MyCardsProps) {
  return (
    <Column span={span}>
      <div className="flex justify-between items-center mb-4">
        <Title>My Cards</Title>
        <button className="text-blue-600">See All</button>
      </div>
      <div className="flex gap-10 overflow-x-auto pb-4 snap-x snap-mandatory -mr-10 md:mr-0">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className="snap-center shrink-0 md:w-[calc(50%-20px)] w-[80%] first:ml-0 last:mr-10"
          >
            <CreditCard
              balance={card.balance}
              cardHolder={card.cardHolder}
              validThru={card.validThru}
              cardNumber={card.cardNumber}
              variant={index === 0 ? "dark" : "light"}
            />
          </div>
        ))}
      </div>
    </Column>
  );
}
