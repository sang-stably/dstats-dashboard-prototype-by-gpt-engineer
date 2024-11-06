import { Box, Card, CardContent, Typography } from '@mui/material';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { useQuery } from '@tanstack/react-query';
import { fetchDashboardData } from '@/lib/api';

const formatCurrency = (value: number) => {
  return `${(value / 1000000).toFixed(2)}M`;
};

const CollateralPieChart = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['dashboardData'],
    queryFn: fetchDashboardData
  });

  if (isLoading || !data) {
    return <Box sx={{ color: 'white' }}>Loading...</Box>;
  }

  const total = data.collateralDistribution.reduce((sum, item) => sum + item.value, 0);

  return (
    <Card className="glass-card">
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Typography variant="h6" component="h2" sx={{ color: 'white' }}>
          dUSD Collateral Distribution
        </Typography>
      </Box>
      <CardContent>
        <Box sx={{ height: 400, position: 'relative' }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
              >
                <tspan 
                  x="50%" 
                  dy="-0.6em" 
                  fontSize="32" 
                  fontWeight="bold" 
                  fill="#8702ff"
                >
                  {formatCurrency(total)}
                </tspan>
              </text>
              <Pie
                data={data.collateralDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={150}
                innerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ percent }) => `${(percent * 100).toFixed(1)}%`}
              >
                {data.collateralDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: number) => formatCurrency(value)}
                contentStyle={{
                  backgroundColor: 'rgba(19, 17, 28, 0.95)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  color: 'white'
                }}
              />
              <Legend formatter={(value) => <span style={{ color: 'white' }}>{value}</span>} />
            </PieChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CollateralPieChart;
