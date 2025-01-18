import { CreditCard } from "~/components/cards/credit-card";
import { Title } from "~/components/ui/title";
import { cn } from "~/lib/utils";
import { Column } from "~/components/ui/column";

export function MyCards({ span }: { span?: 1 | 2 | 3 }) {
  return (
    <Column span={span}>
      <div className="flex justify-between items-center mb-4">
        <Title>My Cards</Title>
        <button className="text-blue-600">See All</button>
      </div>
      <div className="flex gap-10">
        <CreditCard
          balance={5756}
          cardHolder="Eddy Cusuma"
          validThru="12/22"
          cardNumber="3778********1234"
          variant="dark"
        />
        <CreditCard
          balance={5756}
          cardHolder="Eddy Cusuma"
          validThru="12/22"
          cardNumber="3778********1234"
          variant="light"
        />
      </div>
    </Column>
  );
}
