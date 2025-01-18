import { Title } from "~/components/ui/title";
import { TransactionList } from "./transaction-list";
import CreditCardIcon from "~icons/heroicons/credit-card-20-solid";
import PaypalIcon from "~icons/heroicons/banknotes-solid";
import DollarIcon from "~icons/heroicons/banknotes-solid";
import { cn } from "~/lib/utils";
import { Column } from "~/components/ui/column";

type RecentTransactionsProps = {
  span?: 1 | 2 | 3;
};

export function RecentTransactions({ span }: RecentTransactionsProps) {
  return (
    <Column span={span}>
      <Title className="mb-4">Recent Transaction</Title>
      <TransactionList
        transactions={[
          {
            icon: <CreditCardIcon className="w-6 h-6 text-yellow-500" />,
            title: "Deposit from my Card",
            date: "28 January 2021",
            amount: -850,
          },
          {
            icon: <PaypalIcon className="w-6 h-6 text-blue-500" />,
            title: "Deposit Paypal",
            date: "25 January 2021",
            amount: 2500,
          },
          {
            icon: <DollarIcon className="w-6 h-6 text-emerald-500" />,
            title: "Jemi Wilson",
            date: "21 January 2021",
            amount: 5400,
          },
        ]}
      />
    </Column>
  );
}
