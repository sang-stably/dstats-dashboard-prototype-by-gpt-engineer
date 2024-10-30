import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Line, LineChart, XAxis, YAxis } from "recharts";

const mockData = [
  { date: '2024-01', circulatingSupply: 12500000, amoSupply: 8200000 },
  { date: '2024-02', circulatingSupply: 13100000, amoSupply: 8500000 },
  { date: '2024-03', circulatingSupply: 14200000, amoSupply: 8800000 },
  { date: '2024-04', circulatingSupply: 15234567, amoSupply: 9100000 },
];

const formatCurrency = (value: number) => {
  return `$${(value / 1000000).toFixed(2)}M`;
};

const SupplyCharts = () => {
  return (
    <div className="grid grid-cols-2 gap-6 mt-6">
      <Card>
        <CardHeader>
          <CardTitle>dUSD Circulating Supply</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            className="aspect-[2/1]"
            config={{
              line: {
                theme: {
                  light: "#8702ff",
                  dark: "#8702ff",
                },
              },
            }}
          >
            <LineChart data={mockData}>
              <XAxis
                dataKey="date"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={formatCurrency}
              />
              <ChartTooltip>
                <ChartTooltipContent />
              </ChartTooltip>
              <Line
                type="monotone"
                dataKey="circulatingSupply"
                strokeWidth={2}
                activeDot={{ r: 4 }}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>dUSD AMO Supply</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            className="aspect-[2/1]"
            config={{
              line: {
                theme: {
                  light: "#a64dff",
                  dark: "#a64dff",
                },
              },
            }}
          >
            <LineChart data={mockData}>
              <XAxis
                dataKey="date"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={formatCurrency}
              />
              <ChartTooltip>
                <ChartTooltipContent />
              </ChartTooltip>
              <Line
                type="monotone"
                dataKey="amoSupply"
                strokeWidth={2}
                activeDot={{ r: 4 }}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default SupplyCharts;