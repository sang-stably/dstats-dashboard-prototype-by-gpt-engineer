import { Card, CardContent, Typography, Box } from '@mui/material';
import { Area, AreaChart, Bar, BarChart, Line, ComposedChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { format } from 'date-fns';
import { useState } from 'react';
import TimeRangeSelector, { TimeRange } from './TimeRangeSelector';

const formatDate = (date: string) => format(new Date(date), 'MMM d');

const formatNumberWithSuffix = (num: number) => {
  if (num >= 1000000000) {
    return `${(num / 1000000000).toFixed(2)}B`;
  } else if (num >= 1000000) {
    return `${(num / 1000000).toFixed(2)}M`;
  } else if (num >= 1000) {
    return `${(num / 1000).toFixed(2)}K`;
  }
  return num.toFixed(2);
};

const formatCurrency = (value: number) => `$${formatNumberWithSuffix(value)}`;
const formatPercentage = (value: number) => `${value.toFixed(2)}%`;

const commonTooltipStyle = {
  contentStyle: {
    backgroundColor: 'rgba(19, 17, 28, 0.95)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    color: 'white',
    fontSize: '12px',
    padding: '8px 12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  },
  itemStyle: { color: 'white', fontSize: '11px' },
  labelStyle: { color: 'white', fontSize: '11px' }
};

const commonAxisStyle = {
  stroke: 'white',
  fontSize: 11,
  tickLine: false,
  axisLine: { stroke: 'rgba(255, 255, 255, 0.3)' },
  tick: { fill: 'white' }
};

const commonYAxisStyle = {
  ...commonAxisStyle,
  axisLine: { stroke: 'transparent' }
};

interface ChartCardProps {
  title: string;
  children: React.ReactNode;
  fullWidth?: boolean;
  onTimeRangeChange?: (range: TimeRange) => void;
}

const ChartCard = ({ title, children, fullWidth, onTimeRangeChange }: ChartCardProps) => {
  const [timeRange, setTimeRange] = useState<TimeRange>('1M');

  const handleTimeRangeChange = (newRange: TimeRange) => {
    setTimeRange(newRange);
    if (onTimeRangeChange) {
      onTimeRangeChange(newRange);
    }
  };

  return (
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
      className={fullWidth ? 'col-span-full' : ''}
    >
      <CardContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography variant="subtitle2" sx={{ color: 'white', textAlign: 'center' }}>
            {title}
          </Typography>
          <TimeRangeSelector value={timeRange} onChange={handleTimeRangeChange} />
          <Box sx={{ height: 300 }}>
            {children}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

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
            <XAxis {...commonAxisStyle} dataKey="date" tickFormatter={formatDate} />
            <YAxis 
              {...commonYAxisStyle}
              domain={[0.9990, 1.0050]} 
              tickFormatter={(value) => value.toFixed(4)} 
            />
            <Tooltip
              {...commonTooltipStyle}
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
            <XAxis {...commonAxisStyle} dataKey="date" tickFormatter={formatDate} />
            <YAxis {...commonYAxisStyle} tickFormatter={formatNumberWithSuffix} />
            <Tooltip
              {...commonTooltipStyle}
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
            <XAxis {...commonAxisStyle} dataKey="date" tickFormatter={formatDate} />
            <YAxis {...commonYAxisStyle} tickFormatter={formatNumberWithSuffix} />
            <Tooltip
              {...commonTooltipStyle}
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
            <XAxis {...commonAxisStyle} dataKey="date" tickFormatter={formatDate} />
            <YAxis 
              {...commonYAxisStyle} 
              tickFormatter={formatNumberWithSuffix}
              domain={[12000, 'auto']} 
            />
            <Tooltip
              {...commonTooltipStyle}
              formatter={(value: number) => formatCurrency(value)}
              labelFormatter={formatDate}
            />
            <Area type="monotone" dataKey="value" stroke="#8702ff" fill="url(#colorFees)" />
          </AreaChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="dUSD AMO Revenue (Annualized)" fullWidth>
        <ResponsiveContainer>
          <ComposedChart data={data.amoRevenue}>
            <XAxis {...commonAxisStyle} dataKey="date" tickFormatter={formatDate} />
            <YAxis {...commonYAxisStyle} yAxisId="left" tickFormatter={formatNumberWithSuffix} />
            <YAxis {...commonYAxisStyle} yAxisId="right" orientation="right" tickFormatter={formatPercentage} />
            <Tooltip
              {...commonTooltipStyle}
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