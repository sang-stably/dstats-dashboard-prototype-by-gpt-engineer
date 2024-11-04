import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { Area, AreaChart, XAxis, YAxis } from "recharts";

const mockData = [
  { date: '2024-01-01', circulatingSupply: 100000, amoSupply: 50000 },
  { date: '2024-01-04', circulatingSupply: 150000, amoSupply: 75000 },
  { date: '2024-01-07', circulatingSupply: 250000, amoSupply: 150000 },
  { date: '2024-01-10', circulatingSupply: 400000, amoSupply: 240000 },
  { date: '2024-01-14', circulatingSupply: 625000, amoSupply: 375000 },
  { date: '2024-01-17', circulatingSupply: 900000, amoSupply: 540000 },
  { date: '2024-01-21', circulatingSupply: 1562500, amoSupply: 937500 },
  { date: '2024-01-24', circulatingSupply: 2500000, amoSupply: 1500000 },
  { date: '2024-01-28', circulatingSupply: 3906250, amoSupply: 2343750 },
  { date: '2024-01-31', circulatingSupply: 4500000, amoSupply: 2700000 },
  { date: '2024-02-04', circulatingSupply: 6000000, amoSupply: 3600000 },
  { date: '2024-02-07', circulatingSupply: 7000000, amoSupply: 4200000 },
  { date: '2024-02-11', circulatingSupply: 8000000, amoSupply: 4800000 },
  { date: '2024-02-14', circulatingSupply: 9000000, amoSupply: 5400000 },
  { date: '2024-02-18', circulatingSupply: 10000000, amoSupply: 6000000 },
  { date: '2024-02-21', circulatingSupply: 11000000, amoSupply: 6600000 },
  { date: '2024-02-25', circulatingSupply: 12000000, amoSupply: 7200000 },
  { date: '2024-02-28', circulatingSupply: 12750000, amoSupply: 7650000 },
  { date: '2024-03-03', circulatingSupply: 13500000, amoSupply: 8100000 },
  { date: '2024-03-07', circulatingSupply: 14000000, amoSupply: 8400000 },
  { date: '2024-03-10', circulatingSupply: 14500000, amoSupply: 8700000 },
  { date: '2024-03-14', circulatingSupply: 14800000, amoSupply: 8880000 },
  { date: '2024-03-17', circulatingSupply: 15234567, amoSupply: 9100000 },
  { date: '2024-03-21', circulatingSupply: 15500000, amoSupply: 9300000 },
  { date: '2024-03-24', circulatingSupply: 15750000, amoSupply: 9450000 },
  { date: '2024-03-27', circulatingSupply: 16000000, amoSupply: 9600000 },
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
              area: {
                color: "#8702ff",
              },
            }}
          >
            <AreaChart data={mockData}>
              <defs>
                <linearGradient id="colorCirculating" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8702ff" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#8702ff" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis
                dataKey="date"
                stroke="#ffffff"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={formatDate}
                tick={{ fill: "#ffffff" }}
                style={{ fill: "#ffffff" }}
              />
              <YAxis
                stroke="#ffffff"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={formatCurrency}
                tick={{ fill: "#ffffff" }}
                style={{ fill: "#ffffff" }}
              />
              <ChartTooltip 
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border border-border/50 bg-background p-2 shadow-xl">
                        <p className="text-sm font-medium text-white">{formatDate(payload[0].payload.date)}</p>
                        <p className="text-sm text-white">
                          {formatCurrency(payload[0].value as number)}
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Area
                type="monotone"
                dataKey="circulatingSupply"
                stroke="#8702ff"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorCirculating)"
              />
            </AreaChart>
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
              area: {
                color: "#8702ff",
              },
            }}
          >
            <AreaChart data={mockData}>
              <defs>
                <linearGradient id="colorAmo" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8702ff" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#8702ff" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis
                dataKey="date"
                stroke="#ffffff"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={formatDate}
                tick={{ fill: "#ffffff" }}
                style={{ fill: "#ffffff" }}
              />
              <YAxis
                stroke="#ffffff"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={formatCurrency}
                tick={{ fill: "#ffffff" }}
                style={{ fill: "#ffffff" }}
              />
              <ChartTooltip 
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border border-border/50 bg-background p-2 shadow-xl">
                        <p className="text-sm font-medium text-white">{formatDate(payload[0].payload.date)}</p>
                        <p className="text-sm text-white">
                          {formatCurrency(payload[0].value as number)}
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Area
                type="monotone"
                dataKey="amoSupply"
                stroke="#8702ff"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorAmo)"
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </div>
    </div>
  );
};

export default SupplyCharts;