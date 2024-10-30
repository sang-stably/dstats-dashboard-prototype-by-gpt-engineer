import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { Line, LineChart, XAxis, YAxis } from "recharts";

const mockData = [
  { date: '2024-01-01', circulatingSupply: 12500000, amoSupply: 8200000 },
  { date: '2024-01-15', circulatingSupply: 12800000, amoSupply: 8300000 },
  { date: '2024-02-01', circulatingSupply: 13100000, amoSupply: 8500000 },
  { date: '2024-02-15', circulatingSupply: 13500000, amoSupply: 8600000 },
  { date: '2024-03-01', circulatingSupply: 14200000, amoSupply: 8800000 },
  { date: '2024-03-15', circulatingSupply: 14800000, amoSupply: 8900000 },
  { date: '2024-04-01', circulatingSupply: 15234567, amoSupply: 9100000 },
  { date: '2024-04-15', circulatingSupply: 15500000, amoSupply: 9300000 },
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
        <CardHeader>
          <CardTitle className="metric-value">dUSD Circulating Supply</CardTitle>
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
                stroke="#888888"
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
                        <p className="text-sm font-medium metric-value">{formatDate(payload[0].payload.date)}</p>
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
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4 }}
                stroke="#8702ff"
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </div>

      <div className="glass-card rounded-xl">
        <CardHeader>
          <CardTitle className="metric-value">dUSD AMO Supply</CardTitle>
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
                stroke="#888888"
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
                        <p className="text-sm font-medium metric-value">{formatDate(payload[0].payload.date)}</p>
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
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4 }}
                stroke="#8702ff"
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </div>
    </div>
  );
};

export default SupplyCharts;