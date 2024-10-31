import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { Line, LineChart, XAxis, YAxis } from "recharts";

const mockData = [
  { date: '2024-01-01', circulatingSupply: 0, amoSupply: 0 },
  { date: '2024-01-07', circulatingSupply: 2500000, amoSupply: 1500000 },
  { date: '2024-01-14', circulatingSupply: 5000000, amoSupply: 3000000 },
  { date: '2024-01-21', circulatingSupply: 7500000, amoSupply: 4500000 },
  { date: '2024-01-28', circulatingSupply: 9000000, amoSupply: 5500000 },
  { date: '2024-02-04', circulatingSupply: 10500000, amoSupply: 6500000 },
  { date: '2024-02-11', circulatingSupply: 11800000, amoSupply: 7200000 },
  { date: '2024-02-18', circulatingSupply: 12900000, amoSupply: 7800000 },
  { date: '2024-02-25', circulatingSupply: 13700000, amoSupply: 8300000 },
  { date: '2024-03-03', circulatingSupply: 14200000, amoSupply: 8600000 },
  { date: '2024-03-10', circulatingSupply: 14800000, amoSupply: 8900000 },
  { date: '2024-03-17', circulatingSupply: 15234567, amoSupply: 9100000 },
];

const formatCurrency = (value: number) => {
  return `$${(value / 1000000).toFixed(2)}M`;
};

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', { 
    month: 'short',
    day: 'numeric'
  });
};

const SupplyCharts = () => {
  return (
    <div className="grid grid-cols-2 gap-6 mt-6">
      <div className="glass-card rounded-xl">
        <CardHeader className="text-center">
          <CardTitle>dUSD Circulating Supply</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            className="aspect-[2/1]"
            config={{
              line: {
                color: "#8702ff",
              },
            }}
          >
            <LineChart data={mockData}>
              <XAxis
                dataKey="date"
                stroke="#E3E6EA"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={formatDate}
              />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={formatCurrency}
              />
              <ChartTooltip 
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border border-border/50 bg-background p-2 shadow-xl">
                        <p className="text-sm font-medium">{formatDate(payload[0].payload.date)}</p>
                        <p className="text-sm text-muted-foreground">
                          {formatCurrency(payload[0].value as number)}
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Line
                type="monotone"
                dataKey="circulatingSupply"
                stroke="#8702ff"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4 }}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </div>

      <div className="glass-card rounded-xl">
        <CardHeader className="text-center">
          <CardTitle>dUSD AMO Supply</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            className="aspect-[2/1]"
            config={{
              line: {
                color: "#8702ff",
              },
            }}
          >
            <LineChart data={mockData}>
              <XAxis
                dataKey="date"
                stroke="#E3E6EA"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={formatDate}
              />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={formatCurrency}
              />
              <ChartTooltip 
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border border-border/50 bg-background p-2 shadow-xl">
                        <p className="text-sm font-medium">{formatDate(payload[0].payload.date)}</p>
                        <p className="text-sm text-muted-foreground">
                          {formatCurrency(payload[0].value as number)}
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Line
                type="monotone"
                dataKey="amoSupply"
                stroke="#8702ff"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4 }}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </div>
    </div>
  );
};

export default SupplyCharts;