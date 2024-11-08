import { Card, CardContent, Typography, Box } from '@mui/material';
import { Area, AreaChart, Bar, BarChart, Line, ComposedChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { format } from 'date-fns';

const formatDate = (date: string) => format(new Date(date), 'MMM d');
const formatCurrency = (value: number) => `$${value.toLocaleString('en-US', { maximumFractionDigits: 2 })}`;
const formatPercentage = (value: number) => `${value.toFixed(2)}%`;

interface ChartCardProps {
  title: string;
  children: React.ReactNode;
  fullWidth?: boolean;
}

const ChartCard = ({ title, children, fullWidth }: ChartCardProps) => (
  <Card className="glass-card">
    <CardContent>
      <Typography variant="h6" sx={{ color: 'white', mb: 2, textAlign: 'center' }}>
        {title}
      </Typography>
      <Box sx={{ height: 300 }}>
        {children}
      </Box>
    </CardContent>
  </Card>
);

interface CurveChartsProps {
  data: {
    lpPrice: Array<{ date: string; value: number }>;
    tvl: Array<{ date: string; value: number }>;
    volume: Array<{ date: string; value: number }>;
    fees: Array<{ date: string; value: number }>;
    amoRevenue: Array<{ date: string; revenue: number; apy: number }>;
  };
}

const CurveCharts = ({ data }: CurveChartsProps) => {
  return (
    <Box className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <ChartCard title="dUSD/FRAX LP Price (USD)">
        <ResponsiveContainer>
          <AreaChart data={data.lpPrice}>
            <defs>
              <linearGradient id="colorLpPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8702ff" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#8702ff" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="date" tickFormatter={formatDate} />
            <YAxis 
              domain={[0.9990, 1.0050]} 
              tickFormatter={(value) => value.toFixed(4)} 
            />
            <Tooltip
              formatter={(value: number) => value.toFixed(4)}
              labelFormatter={formatDate}
            />
            <Area type="monotone" dataKey="value" stroke="#8702ff" fill="url(#colorLpPrice)" />
          </AreaChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="dUSD/FRAX TVL">
        <ResponsiveContainer>
          <AreaChart data={data.tvl}>
            <defs>
              <linearGradient id="colorTvl" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8702ff" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#8702ff" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="date" tickFormatter={formatDate} />
            <YAxis tickFormatter={formatCurrency} />
            <Tooltip
              formatter={(value: number) => formatCurrency(value)}
              labelFormatter={formatDate}
            />
            <Area type="monotone" dataKey="value" stroke="#8702ff" fill="url(#colorTvl)" />
          </AreaChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="dUSD/FRAX Volume">
        <ResponsiveContainer>
          <BarChart data={data.volume}>
            <XAxis dataKey="date" tickFormatter={formatDate} />
            <YAxis tickFormatter={formatCurrency} />
            <Tooltip
              formatter={(value: number) => formatCurrency(value)}
              labelFormatter={formatDate}
            />
            <Bar dataKey="value" fill="#8702ff" opacity={0.8} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="dUSD/FRAX Total Fees">
        <ResponsiveContainer>
          <AreaChart data={data.fees}>
            <defs>
              <linearGradient id="colorFees" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8702ff" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#8702ff" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="date" tickFormatter={formatDate} />
            <YAxis tickFormatter={formatCurrency} />
            <Tooltip
              formatter={(value: number) => formatCurrency(value)}
              labelFormatter={formatDate}
            />
            <Area type="monotone" dataKey="value" stroke="#8702ff" fill="url(#colorFees)" />
          </AreaChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="dUSD AMO Revenue (Annualized)" fullWidth>
        <ResponsiveContainer>
          <ComposedChart data={data.amoRevenue} className="md:col-span-2">
            <XAxis dataKey="date" tickFormatter={formatDate} />
            <YAxis yAxisId="left" tickFormatter={formatCurrency} />
            <YAxis yAxisId="right" orientation="right" tickFormatter={formatPercentage} />
            <Tooltip
              formatter={(value: number, name: string) => 
                name === 'revenue' ? formatCurrency(value) : formatPercentage(value)
              }
              labelFormatter={formatDate}
            />
            <Bar yAxisId="left" dataKey="revenue" fill="#8702ff" opacity={0.3} />
            <Line yAxisId="right" type="monotone" dataKey="apy" stroke="#8702ff" />
          </ComposedChart>
        </ResponsiveContainer>
      </ChartCard>
    </Box>
  );
};

export default CurveCharts;