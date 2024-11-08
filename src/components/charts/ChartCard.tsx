import { Card, CardContent, Typography, Box } from '@mui/material';
import { TimeRange } from '../TimeRangeSelector';
import TimeRangeSelector from '../TimeRangeSelector';
import { useState } from 'react';

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
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Typography 
            variant="subtitle2" 
            sx={{ 
              color: 'white', 
              textAlign: 'center',
              mt: 1 
            }}
          >
            {title}
          </Typography>
          <Box sx={{ height: 300, position: 'relative' }}>
            {children}
          </Box>
          <TimeRangeSelector value={timeRange} onChange={handleTimeRangeChange} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default ChartCard;