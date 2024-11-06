import { Box, Card, CardContent, Typography } from '@mui/material';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useQuery } from '@tanstack/react-query';
import { fetchDashboardData } from '@/lib/api';
import { commonTooltipStyle, commonAxisStyle } from '@/lib/chartStyles';

const formatCurrency = (value: number) => {
  return `$${(value / 1000000).toFixed(2)}M`;
};

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', { 
    month: 'short',
    day: 'numeric'
  });
};

const BalanceSheet = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['dashboardData'],
    queryFn: fetchDashboardData
  });

  if (isLoading || !data) {
    return <Box sx={{ color: 'white' }}>Loading...</Box>;
  }

  return (
    <Card className="glass-card">
      <CardContent>
        <Typography variant="h6" align="center" gutterBottom className="text-white mb-4">
          Balance Sheet
        </Typography>
        <Box className="w-full aspect-[2/1]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data.balanceSheetData}>
              <defs>
                <linearGradient id="colorAssets" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8702ff" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#8702ff" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorLiabilities" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#a64dff" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#a64dff" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis
                {...commonAxisStyle}
                dataKey="date"
                axisLine={{ stroke: 'rgba(255, 255, 255, 0.3)' }}
                tickFormatter={formatDate}
              />
              <YAxis
                {...commonAxisStyle}
                axisLine={{ stroke: 'transparent' }}
                tickFormatter={formatCurrency}
              />
              <Tooltip
                cursor={{ stroke: 'rgba(255, 255, 255, 0.3)' }}
                {...commonTooltipStyle}
                formatter={(value: any) => formatCurrency(value as number)}
                labelFormatter={formatDate}
              />
              <Area
                type="monotone"
                dataKey="assets"
                stroke="#8702ff"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorAssets)"
              />
              <Area
                type="monotone"
                dataKey="liabilities"
                stroke="#a64dff"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorLiabilities)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BalanceSheet;