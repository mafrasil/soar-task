import { Card } from "~/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { Title } from "~/components/ui/title";
import { Column } from "~/components/ui/column";

type WeeklyActivityData = {
  day: string;
  deposit: number;
  withdraw: number;
}[];

const data: WeeklyActivityData = [
  { day: "Sat", deposit: 230, withdraw: 450 },
  { day: "Sun", deposit: 120, withdraw: 320 },
  { day: "Mon", deposit: 250, withdraw: 310 },
  { day: "Tue", deposit: 350, withdraw: 450 },
  { day: "Wed", deposit: 230, withdraw: 150 },
  { day: "Thu", deposit: 230, withdraw: 380 },
  { day: "Fri", deposit: 320, withdraw: 380 },
];

type WeeklyActivityProps = {
  data: Array<{
    date: string;
    deposits: number;
    withdrawals: number;
  }>;
  span?: 1 | 2 | 3;
};

export function WeeklyActivity({ data, span }: WeeklyActivityProps) {
  const chartData = data.map((item) => ({
    day: new Date(item.date).toLocaleDateString("en-US", { weekday: "short" }),
    deposit: item.deposits,
    withdraw: Math.abs(item.withdrawals),
  }));

  return (
    <Column span={span}>
      <Title className="mb-4">Weekly Activity</Title>
      <Card className="p-6">
        <div className="h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
              barGap={8}
            >
              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#94A3B8", fontSize: 12 }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#94A3B8", fontSize: 12 }}
                dx={-10}
              />
              <Tooltip
                cursor={{ fill: "transparent" }}
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "6px",
                  padding: "8px",
                }}
              />
              <Legend
                verticalAlign="top"
                align="right"
                iconType="circle"
                iconSize={8}
                wrapperStyle={{
                  paddingBottom: "20px",
                  fontSize: "14px",
                }}
              />
              <Bar
                name="Deposit"
                dataKey="deposit"
                fill="#396AFF"
                radius={[10, 10, 10, 10]}
                barSize={20}
              />
              <Bar
                name="Withdraw"
                dataKey="withdraw"
                fill="#111827"
                radius={[10, 10, 10, 10]}
                barSize={20}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </Column>
  );
}
