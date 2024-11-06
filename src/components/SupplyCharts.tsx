import { Card, CardContent, Typography, Box } from "@mui/material";
import { Area, AreaChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
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

const commonTooltipStyle = {
  contentStyle: {
    backgroundColor: 'rgba(19, 17, 28, 0.95)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    color: 'white',
    fontSize: '12px'
  },
  itemStyle: { color: 'white', fontSize: '11px' },
  labelStyle: { color: 'white', fontSize: '11px' }
};

const SupplyCharts = ({ data }: SupplyChartsProps) => {
  return (
    <Box className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      <Card 
        sx={{ 
          height: '100%',
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'all 0.3s ease',
          borderRadius: '12px',
          '&:hover': {
            transform: 'translateY(-2px)',
            borderColor: 'rgba(135, 2, 255, 0.3)',
            boxShadow: '0 8px 32px rgba(135, 2, 255, 0.15)'
          }
        }}
      >
        <CardContent>
          <Typography 
            variant="h6" 
            align="center" 
            gutterBottom 
            className="text-white mb-4"
          >
            dUSD Circulating Supply
          </Typography>
          <Box className="w-full aspect-[4/3] md:aspect-[2/1]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorCirculating" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8702ff" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#8702ff" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="date"
                  stroke="white"
                  fontSize={11}
                  tickLine={false}
                  axisLine={{ stroke: 'rgba(255, 255, 255, 0.3)' }}
                  tickFormatter={formatDate}
                  tick={{ fill: "white" }}
                />
                <YAxis
                  stroke="white"
                  fontSize={11}
                  tickLine={false}
                  axisLine={{ stroke: 'transparent' }}
                  tickFormatter={formatCurrency}
                  tick={{ fill: "white" }}
                />
                <Tooltip
                  cursor={{ stroke: 'rgba(255, 255, 255, 0.3)' }}
                  {...commonTooltipStyle}
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
            </ResponsiveContainer>
          </Box>
        </CardContent>
      </Card>

      <Card 
        sx={{ 
          height: '100%',
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'all 0.3s ease',
          borderRadius: '12px',
          '&:hover': {
            transform: 'translateY(-2px)',
            borderColor: 'rgba(135, 2, 255, 0.3)',
            boxShadow: '0 8px 32px rgba(135, 2, 255, 0.15)'
          }
        }}
      >
        <CardContent>
          <Typography 
            variant="h6" 
            align="center" 
            gutterBottom 
            className="text-white mb-4"
          >
            dUSD AMO Supply
          </Typography>
          <Box className="w-full aspect-[4/3] md:aspect-[2/1]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorAmo" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8702ff" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#8702ff" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="date"
                  stroke="white"
                  fontSize={11}
                  tickLine={false}
                  axisLine={{ stroke: 'rgba(255, 255, 255, 0.3)' }}
                  tickFormatter={formatDate}
                  tick={{ fill: "white" }}
                />
                <YAxis
                  stroke="white"
                  fontSize={11}
                  tickLine={false}
                  axisLine={{ stroke: 'transparent' }}
                  tickFormatter={formatCurrency}
                  tick={{ fill: "white" }}
                />
                <Tooltip
                  cursor={{ stroke: 'rgba(255, 255, 255, 0.3)' }}
                  {...commonTooltipStyle}
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
            </ResponsiveContainer>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SupplyCharts;