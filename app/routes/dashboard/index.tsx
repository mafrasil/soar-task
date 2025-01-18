import { MyCards } from "./+components/my-cards";
import { RecentTransactions } from "./+components/recent-transactions";
import { WeeklyActivity } from "./+charts/weekly-activity";
import { ExpenseStatistics } from "./+charts/expense-statistics";
import { QuickTransfer } from "./+components/quick-transfer";
import { BalanceHistory } from "./+charts/balance-history";
import type { Route } from "./+types/dashboard";

export const handle = {
  title: "Overview",
};

export async function loader({}: Route.LoaderArgs) {
  return {};
}

export default function DashboardIndex() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-10">
      <MyCards span={2} />
      <RecentTransactions />
      <WeeklyActivity span={2} />
      <ExpenseStatistics />
      <QuickTransfer />
      <BalanceHistory span={2} />
    </div>
  );
}
