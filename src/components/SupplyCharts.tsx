import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { Area, AreaChart, XAxis, YAxis } from "recharts";
import { SupplyDataPoint } from "@/lib/types";

interface SupplyChartsProps {
  data: SupplyDataPoint[];
}

const formatCurrency = (value: number) => {
  return `$${(value / 1000000).toFixed(2)}M`;
};

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', { 
    month: 'short',
    day: 'numeric'
  });
};

const SupplyCharts = ({ data }: SupplyChartsProps) => {
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
            <AreaChart data={data}>
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
            <AreaChart data={data}>
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
