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
      <div role="region" aria-label="Credit Cards">
        <div className="flex justify-between items-center mb-4">
          <Title>My Cards</Title>
          <button className="text-primary" aria-label="View all cards">
            See All
          </button>
        </div>
        <div
          className="flex gap-5 lg:gap-10 overflow-x-auto scrollbar-none pb-4 snap-x snap-mandatory -mr-10 lg:mr-0"
          role="list"
          aria-label="Credit card list"
        >
          {cards.map((card, index) => (
            <div
              key={card.id}
              role="listitem"
              className="snap-center shrink-0 lg:w-[calc(50%-20px)] w-[80%] first:ml-0 last:mr-10"
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
      </div>
    </Column>
  );
}
