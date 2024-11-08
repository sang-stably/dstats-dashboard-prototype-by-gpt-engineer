import { Area, AreaChart, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { commonAxisStyle, commonYAxisStyle, commonTooltipStyle, formatDate, formatCurrency, formatNumberWithSuffix } from './ChartComponents';

interface TVLChartProps {
  data: Array<{ 
    date: string; 
    dusd: number;
    frax: number;
    total: number;
  }>;
}

const TVLChart = ({ data }: TVLChartProps) => {
  return (
    <ResponsiveContainer>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorDusd" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8702ff" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#8702ff" stopOpacity={0.3}/>
          </linearGradient>
          <linearGradient id="colorFrax" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#a64dff" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#a64dff" stopOpacity={0.3}/>
          </linearGradient>
        </defs>
        <XAxis {...commonAxisStyle} dataKey="date" tickFormatter={formatDate} />
        <YAxis {...commonYAxisStyle} tickFormatter={formatNumberWithSuffix} />
        <Tooltip
          {...commonTooltipStyle}
          formatter={(value: number, name: string) => [
            formatCurrency(value),
            name === 'dusd' ? 'dUSD' : 'FRAX'
          ]}
          labelFormatter={formatDate}
        />
        <Legend 
          wrapperStyle={{ 
            paddingTop: '20px',
            position: 'relative',
            top: '-40px'
          }}
          iconType="square"
          iconSize={10}
        />
        <Area
          type="monotone"
          dataKey="dusd"
          stackId="1"
          stroke="#8702ff"
          fill="url(#colorDusd)"
          name="dUSD"
        />
        <Area
          type="monotone"
          dataKey="frax"
          stackId="1"
          stroke="#a64dff"
          fill="url(#colorFrax)"
          name="FRAX"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default TVLChart;