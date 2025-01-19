import { Card } from "~/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { Title } from "~/components/ui/title";
import { Column } from "~/components/ui/column";

type BalanceData = {
  month: string;
  balance: number;
}[];

const data: BalanceData = [
  { month: "Jul", balance: 120 },
  { month: "Aug", balance: 320 },
  { month: "Sep", balance: 500 },
  { month: "Oct", balance: 750 },
  { month: "Nov", balance: 250 },
  { month: "Dec", balance: 580 },
  { month: "Jan", balance: 650 },
];

type BalanceHistoryProps = {
  data?: Array<{
    date: string;
    balance: number;
  }>;
  span?: 1 | 2 | 3;
};

export function BalanceHistory({ data: rawData, span }: BalanceHistoryProps) {
  const chartData = rawData
    ? rawData.map((item) => ({
        month: new Date(item.date).toLocaleDateString("en-US", { month: "short" }),
        balance: item.balance,
      }))
    : [
        { month: "Jul", balance: 120 },
        { month: "Aug", balance: 320 },
        { month: "Sep", balance: 500 },
        { month: "Oct", balance: 750 },
        { month: "Nov", balance: 250 },
        { month: "Dec", balance: 580 },
        { month: "Jan", balance: 650 },
      ];

  return (
    <Column span={span}>
      <Title className="mb-4">Balance History</Title>
      <Card className="p-6">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="balanceGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#4F46E5" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" strokeOpacity={0.8} />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#94A3B8" }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: "#94A3B8" }} />
              <Area
                type="monotone"
                dataKey="balance"
                stroke="#4F46E5"
                strokeWidth={2}
                fill="url(#balanceGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </Column>
  );
}
