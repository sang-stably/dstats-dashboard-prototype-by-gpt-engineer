import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'sFRAX', value: 8500000, color: '#8702ff' },
  { name: 'sDAI', value: 4200000, color: '#a64dff' },
  { name: 'sUSDe', value: 2534567, color: '#c29fff' },
];

const formatCurrency = (value: number) => {
  return `$${(value / 1000000).toFixed(2)}M`;
};

const CollateralPieChart = () => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  
  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle>dUSD Collateral Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
                label={({ percent }) => `${(percent * 100).toFixed(1)}%`}
              >
                {data.map((entry, index) => (
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