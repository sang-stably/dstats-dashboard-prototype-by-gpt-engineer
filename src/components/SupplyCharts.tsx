import { Card, CardContent, Typography, Box } from "@mui/material";
import { Area, AreaChart, XAxis, YAxis, Tooltip } from "recharts";
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
    <Box className="grid grid-cols-2 gap-6 mt-6">
      <Card className="glass-card rounded-xl">
        <CardContent>
          <Typography variant="h6" align="center" gutterBottom>
            dUSD Circulating Supply
          </Typography>
          <Box className="aspect-[2/1]">
            <AreaChart data={data} width={500} height={300}>
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
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <Box className="rounded-lg border border-border/50 bg-background p-2 shadow-xl">
                        <Typography variant="body2" className="text-white">
                          {formatDate(payload[0].payload.date)}
                        </Typography>
                        <Typography variant="body2" className="text-white">
                          {formatCurrency(payload[0].value as number)}
                        </Typography>
                      </Box>
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
          </Box>
        </CardContent>
      </Card>

      <Card className="glass-card rounded-xl">
        <CardContent>
          <Typography variant="h6" align="center" gutterBottom>
            dUSD AMO Supply
          </Typography>
          <Box className="aspect-[2/1]">
            <AreaChart data={data} width={500} height={300}>
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
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <Box className="rounded-lg border border-border/50 bg-background p-2 shadow-xl">
                        <Typography variant="body2" className="text-white">
                          {formatDate(payload[0].payload.date)}
                        </Typography>
                        <Typography variant="body2" className="text-white">
                          {formatCurrency(payload[0].value as number)}
                        </Typography>
                      </Box>
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
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SupplyCharts;