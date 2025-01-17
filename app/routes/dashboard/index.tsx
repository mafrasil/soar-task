import { CreditCard } from "~/components/cards/credit-card";
import type { Route } from "./+types/dashboard";
import { Card } from "~/components/ui/card";
import { Title } from "~/components/ui/title";

export const handle = {
  title: "Overview",
};

export async function loader({}: Route.LoaderArgs) {
  return {};
}

export default function DashboardIndex() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-10">
      {/* My Cards Section - spans 2 columns on desktop */}
      <div className="md:col-span-2">
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
      </div>

      {/* Recent Transaction Section */}
      <div>
        <Title className="mb-4">Recent Transaction</Title>
        <Card className="p-24"></Card>
      </div>

      {/* Weekly Activity Section - spans 2 columns on desktop */}
      <div className="md:col-span-2">
        <Title className="mb-4">Weekly Activity</Title>
        {/* Weekly Activity chart component */}
      </div>

      {/* Expense Statistics Section */}
      <div>
        <Title className="mb-4">Expense Statistics</Title>
        {/* Pie chart component */}
      </div>
    </div>
  );
}
