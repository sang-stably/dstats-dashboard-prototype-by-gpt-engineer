import { Area, Bar, Line, XAxis, YAxis, Tooltip } from 'recharts';

export const commonTooltipStyle = {
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

export const commonAxisStyle = {
  stroke: 'white',
  fontSize: 11,
  tickLine: false,
  axisLine: { stroke: 'rgba(255, 255, 255, 0.3)' },
  tick: { fill: 'white' }
};

export const commonYAxisStyle = {
  ...commonAxisStyle,
  axisLine: { stroke: 'transparent' }
};

export const PurpleGradient = ({ id }: { id: string }) => (
  <defs>
    <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8702ff" stopOpacity={0.3}/>
      <stop offset="95%" stopColor="#8702ff" stopOpacity={0}/>
    </linearGradient>
  </defs>
);

export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', { 
    month: 'short',
    day: 'numeric'
  });
};

export const formatNumberWithSuffix = (num: number) => {
  if (num >= 1000000000) {
    return `${(num / 1000000000).toFixed(2)}B`;
  } else if (num >= 1000000) {
    return `${(num / 1000000).toFixed(2)}M`;
  } else if (num >= 1000) {
    return `${(num / 1000).toFixed(2)}K`;
  }
  return num.toFixed(2);
};

export const formatCurrency = (value: number) => `$${formatNumberWithSuffix(value)}`;
export const formatPercentage = (value: number) => `${value.toFixed(2)}%`;