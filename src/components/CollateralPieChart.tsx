import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    return <div>Loading...</div>;
  }

  const total = data.collateralDistribution.reduce((sum, item) => sum + item.value, 0);
  
  return (
    <Card className="glass-card rounded-xl">
      <CardHeader className="text-center">
        <CardTitle>dUSD Collateral Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="total-value"
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
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default CollateralPieChart;
