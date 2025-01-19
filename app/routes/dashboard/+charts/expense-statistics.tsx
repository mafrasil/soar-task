import { Card } from "~/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Title } from "~/components/ui/title";
import { Column } from "~/components/ui/column";

type ExpenseStatisticsProps = {
  data: Array<{
    category: string;
    amount: number;
  }>;
  span?: 1 | 2 | 3;
};

export function ExpenseStatistics({ data, span }: ExpenseStatisticsProps) {
  const total = data.reduce((sum, item) => sum + item.amount, 0);
  const chartData = data.map((item) => ({
    name: item.category,
    value: Math.round((item.amount / total) * 100),
    color: {
      Entertainment: "#312E81",
      "Bill Expenses": "#F97316",
      Investment: "#4F46E5",
      Others: "#111827",
    }[item.category],
  }));

  return (
    <Column span={span}>
      <Title className="mb-4">Expense Statistics</Title>
      <Card className="p-6">
        <div className="h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={0}
                outerRadius={120}
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "6px",
                  padding: "8px",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </Column>
  );
}
