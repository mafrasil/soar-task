import { useLoaderData } from "react-router";
import { MyCards } from "./+components/my-cards";
import { RecentTransactions } from "./+components/recent-transactions";
import { WeeklyActivity } from "./+charts/weekly-activity";
import { ExpenseStatistics } from "./+charts/expense-statistics";
import { QuickTransfer } from "./+components/quick-transfer";
import { BalanceHistory } from "./+charts/balance-history";
import { mockData } from "~/services/mock-data.service";
import type { Route } from "./+types/dashboard";

export const handle = {
  title: "Overview",
};

export async function loader({}: Route.LoaderArgs) {
  const [transactions, contacts, cards, weeklyActivity, expenseStats, balanceHistory] =
    await Promise.all([
      mockData.getTransactions(),
      mockData.getContacts(),
      mockData.getCards(),
      mockData.getWeeklyActivity(),
      mockData.getExpenseStatistics(),
      mockData.getBalanceHistory(),
    ]);

  return {
    transactions,
    contacts,
    cards,
    weeklyActivity,
    expenseStats,
    balanceHistory,
  };
}

export default function DashboardIndex() {
  const { transactions, cards, weeklyActivity, expenseStats, balanceHistory } =
    useLoaderData<typeof loader>();

  return (
    <div
      role="main"
      aria-label="Dashboard Overview"
      className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 p-6 lg:p-10"
    >
      <div className="lg:col-span-2">
        <div className="w-full">
          <MyCards cards={cards} span={2} />
        </div>
      </div>
      <RecentTransactions transactions={transactions} />
      <WeeklyActivity data={weeklyActivity} span={2} />
      <ExpenseStatistics data={expenseStats} />
      <QuickTransfer />
      <BalanceHistory data={balanceHistory} span={2} />
    </div>
  );
}
