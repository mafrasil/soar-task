import { Card } from "~/components/ui/card";
import { Column } from "~/components/ui/column";

type Transaction = {
  icon: React.ReactNode;
  title: string;
  date: string;
  amount: number;
};

type TransactionListProps = {
  transactions: Transaction[];
  span?: 1 | 2 | 3;
};

export function TransactionList({ transactions, span }: TransactionListProps) {
  return (
    <Column span={span}>
      <Card className="p-6 aspect-[350/235] w-full">
        <div className="flex flex-col gap-6 lg:gap-8 h-full overflow-y-auto scrollbar-none">
          {transactions.map((transaction, index) => (
            <div key={index} className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-full flex items-center justify-center bg-gray-100 flex-shrink-0">
                  {transaction.icon}
                </div>
                <div>
                  <p className="font-medium text-gray-900">{transaction.title}</p>
                  <p className="text-xs text-placeholder">
                    {" "}
                    {new Date(transaction.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
              <span
                className={`font-medium ${transaction.amount > 0 ? "text-green-500" : "text-red-500"}`}
              >
                {transaction.amount > 0 ? "+" : ""}
                {transaction.amount.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </span>
            </div>
          ))}
        </div>
      </Card>
    </Column>
  );
}
