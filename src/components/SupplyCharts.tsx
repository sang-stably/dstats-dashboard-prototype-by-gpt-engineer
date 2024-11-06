import { Card, CardContent, Typography, Box } from "@mui/material";
import { Area, AreaChart, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
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
          <Typography variant="h6" align="center" gutterBottom sx={{ color: 'white' }}>
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
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
              <XAxis
                dataKey="date"
                stroke="white"
                fontSize={12}
                tickLine={false}
                axisLine={{ stroke: 'rgba(255, 255, 255, 0.3)' }}
                tickFormatter={formatDate}
                tick={{ fill: "white" }}
              />
              <YAxis
                stroke="white"
                fontSize={12}
                tickLine={false}
                axisLine={{ stroke: 'rgba(255, 255, 255, 0.3)' }}
                tickFormatter={formatCurrency}
                tick={{ fill: "white" }}
              />
              <Tooltip
                cursor={{ stroke: 'rgba(255, 255, 255, 0.3)' }}
                contentStyle={{
                  backgroundColor: 'rgba(19, 17, 28, 0.95)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  color: 'white'
                }}
                labelStyle={{ color: 'white' }}
                itemStyle={{ color: 'white' }}
                formatter={(value: any) => formatCurrency(value as number)}
                labelFormatter={formatDate}
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
          <Typography variant="h6" align="center" gutterBottom sx={{ color: 'white' }}>
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
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
              <XAxis
                dataKey="date"
                stroke="white"
                fontSize={12}
                tickLine={false}
                axisLine={{ stroke: 'rgba(255, 255, 255, 0.3)' }}
                tickFormatter={formatDate}
                tick={{ fill: "white" }}
              />
              <YAxis
                stroke="white"
                fontSize={12}
                tickLine={false}
                axisLine={{ stroke: 'rgba(255, 255, 255, 0.3)' }}
                tickFormatter={formatCurrency}
                tick={{ fill: "white" }}
              />
              <Tooltip
                cursor={{ stroke: 'rgba(255, 255, 255, 0.3)' }}
                contentStyle={{
                  backgroundColor: 'rgba(19, 17, 28, 0.95)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  color: 'white'
                }}
                labelStyle={{ color: 'white' }}
                itemStyle={{ color: 'white' }}
                formatter={(value: any) => formatCurrency(value as number)}
                labelFormatter={formatDate}
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