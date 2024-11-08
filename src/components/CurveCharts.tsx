import { Card, CardContent, Typography, Box } from '@mui/material';
import { Area, AreaChart, Bar, BarChart, Line, ComposedChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { format, subDays, subMonths, subYears, isAfter } from 'date-fns';
import { useState, useMemo } from 'react';
import TimeRangeSelector from './TimeRangeSelector';

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
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  itemStyle: { color: 'white', fontSize: '11px' },
  labelStyle: { color: 'white', fontSize: '11px' },
};

const commonAxisStyle = {
  stroke: 'white',
  fontSize: 11,
  tickLine: false,
  axisLine: { stroke: 'rgba(255, 255, 255, 0.3)' },
  tick: { fill: 'white' },
};

const commonYAxisStyle = {
  ...commonAxisStyle,
  axisLine: { stroke: 'transparent' },
};

interface ChartCardProps {
  title: string;
  children: React.ReactNode;
  fullWidth?: boolean;
}

const ChartCard = ({ title, children, fullWidth }: ChartCardProps) => (
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
        boxShadow: '0 8px 32px rgba(135, 2, 255, 0.15)',
      },
    }}
    className={fullWidth ? 'col-span-full' : ''}
  >
    <CardContent>
      <Typography variant="subtitle2" sx={{ color: 'white', mb: 2, textAlign: 'center' }}>
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
  const [timeRange, setTimeRange] = useState('1M');

  const filterDataByTimeRange = (data: any[]) => {
    const now = new Date();
    let cutoffDate;

    switch (timeRange) {
      case '7D':
        cutoffDate = subDays(now, 7);
        break;
      case '1M':
        cutoffDate = subMonths(now, 1);
        break;
      case '3M':
        cutoffDate = subMonths(now, 3);
        break;
      case '1Y':
        cutoffDate = subYears(now, 1);
        break;
      default:
        return data;
    }

    return data.filter(item => isAfter(new Date(item.date), cutoffDate));
  };

  const filteredData = useMemo(() => ({
    lpPrice: filterDataByTimeRange(data.lpPrice),
    tvl: filterDataByTimeRange(data.tvl),
    volume: filterDataByTimeRange(data.volume),
    fees: filterDataByTimeRange(data.fees),
    amoRevenue: filterDataByTimeRange(data.amoRevenue),
  }), [data, timeRange]);

  return (
    <Box className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <TimeRangeSelector selectedRange={timeRange} onRangeChange={setTimeRange} />
      
      <ChartCard title="dUSD/FRAX LP Price (USD)">
        <ResponsiveContainer>
          <AreaChart data={filteredData.lpPrice}>
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
          <AreaChart data={filteredData.tvl}>
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
          <BarChart data={filteredData.volume}>
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
          <AreaChart data={filteredData.fees}>
            <defs>
              <linearGradient id="colorFees" x1="0" y1="0" x2="0" y2="1">
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
            <Area type="monotone" dataKey="value" stroke="#8702ff" fill="url(#colorFees)" />
          </AreaChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="dUSD AMO Revenue (Annualized)" fullWidth>
        <ResponsiveContainer>
          <ComposedChart data={filteredData.amoRevenue}>
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
