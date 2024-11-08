import { Box } from '@mui/material';
import { Stock } from '@ant-design/charts';
import ChartCard from './charts/ChartCard';
import TVLChart from './charts/TVLChart';
import { 
  AreaChart, BarChart, ComposedChart, XAxis, YAxis, 
  Tooltip, ResponsiveContainer, Area, Bar, Line,
  formatDate, formatNumberWithSuffix, formatCurrency, formatPercentage, 
  commonTooltipStyle, commonAxisStyle, commonYAxisStyle
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
    tvl: Array<{ 
      date: string; 
      dusd: number;
      frax: number;
      total: number;
    }>;
    volume: Array<{ date: string; value: number }>;
    fees: Array<{ date: string; value: number }>;
    amoRevenue: Array<{ date: string; revenue: number; apy: number }>;
  };
}

const CurveCharts = ({ data }: CurveChartsProps) => {
  return (
    <Box className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <ChartCard title="dUSD/FRAX LP Price (USD)">
        <Box sx={{ height: 300 }}>
          <Stock
            data={data.lpPrice}
            xField="date"
            yField={['open', 'close', 'high', 'low']}
            theme={{
              defaultColor: '#8702ff',
            }}
            xAxis={{
              title: {
                text: 'Date',
                style: {
                  fill: 'white',
                },
              },
              label: {
                style: {
                  fill: 'white',
                },
                formatter: (text) => formatDate(text),
              },
              grid: {
                line: {
                  style: {
                    stroke: 'rgba(255, 255, 255, 0.1)',
                    lineWidth: 1,
                  },
                },
              },
              line: {
                style: {
                  stroke: 'rgba(255, 255, 255, 0.3)',
                  lineWidth: 2,
                },
              },
            }}
            yAxis={{
              title: {
                text: 'Price (USD)',
                style: {
                  fill: 'white',
                },
              },
              label: {
                style: {
                  fill: 'white',
                },
                formatter: (text) => Number(text).toFixed(4),
              },
              grid: {
                line: {
                  style: {
                    stroke: 'rgba(255, 255, 255, 0.1)',
                    lineWidth: 1,
                  },
                },
              },
              line: {
                style: {
                  stroke: 'rgba(255, 255, 255, 0.3)',
                  lineWidth: 2,
                },
              },
              min: 0.999,
              max: 1.001,
            }}
            tooltip={{
              formatter: (datum) => ({
                name: 'Price',
                value: `O: ${datum.open.toFixed(4)} H: ${datum.high.toFixed(4)} L: ${datum.low.toFixed(4)} C: ${datum.close.toFixed(4)}`,
              }),
            }}
          />
        </Box>
      </ChartCard>

      <ChartCard title="dUSD/FRAX TVL">
        <TVLChart data={data.tvl} />
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
              domain={[11000, 'auto']} 
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
