import { Title } from "~/components/ui/title";
import { TransactionList } from "./transaction-list";
import CreditCardIcon from "~icons/heroicons/credit-card-20-solid";
import PaypalIcon from "~icons/heroicons/banknotes-solid";
import DollarIcon from "~icons/heroicons/banknotes-solid";
import { Column } from "~/components/ui/column";
import type { Transaction } from "~/types";

type RecentTransactionsProps = {
  transactions: Transaction[];
  span?: 1 | 2 | 3;
};

const ICONS = {
  "credit-card": <CreditCardIcon className="w-6 h-6 text-yellow-500" />,
  paypal: <PaypalIcon className="w-6 h-6 text-blue-500" />,
  dollar: <DollarIcon className="w-6 h-6 text-emerald-500" />,
};

export function RecentTransactions({ transactions, span }: RecentTransactionsProps) {
  return (
    <Column span={span}>
      <div role="region" aria-label="Recent Transactions">
        <Title className="mb-4">Recent Transactions</Title>
        <div role="list" aria-label="Transaction list">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              role="listitem"
              aria-label={`${transaction.title} - ${transaction.amount}`}
            >
              {/* ... existing content ... */}
            </div>
          ))}
        </div>
      </div>
      <TransactionList
        transactions={transactions.map((transaction) => ({
          ...transaction,
          icon: ICONS[transaction.icon],
        }))}
      />
    </Column>
  );
}
