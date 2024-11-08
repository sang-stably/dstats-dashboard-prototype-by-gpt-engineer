import { Box } from '@mui/material';
import ChartCard from './charts/ChartCard';
import { 
  Area, AreaChart, Bar, BarChart, Line, ComposedChart, XAxis, YAxis, 
  Tooltip, ResponsiveContainer, formatDate, formatNumberWithSuffix,
  formatCurrency, formatPercentage, commonTooltipStyle, commonAxisStyle,
  commonYAxisStyle
} from './charts/ChartComponents';

interface CurveChartsProps {
  data: {
    lpPrice: Array<{ 
      date: string; 
      open: number;
      high: number;
      low: number;
      close: number;
    }>;
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
          <ComposedChart data={data.lpPrice}>
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
            <Area
              type="monotone"
              dataKey="close"
              stroke="#8702ff"
              fill="url(#colorClose)"
              isAnimationActive={false}
            />
            <Line
              type="monotone"
              dataKey="high"
              stroke="#22c55e"
              dot={false}
              strokeWidth={1}
            />
            <Line
              type="monotone"
              dataKey="low"
              stroke="#ef4444"
              dot={false}
              strokeWidth={1}
            />
          </ComposedChart>
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