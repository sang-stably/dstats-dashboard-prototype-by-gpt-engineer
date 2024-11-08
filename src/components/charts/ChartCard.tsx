import { Box, CardContent, Card, Typography } from '@mui/material';
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
      <CardContent sx={{ pt: 3 }}> {/* Added top padding here */}
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography 
            variant="subtitle2" 
            sx={{ 
              color: 'white', 
              textAlign: 'center',
              mb: 2, // Reduced margin bottom from 4 to 2
            }}
          >
            {title}
          </Typography>
          <Box sx={{ 
            height: 300, 
            position: 'relative',
            mb: 1 // Reduced margin bottom from 2 to 1
          }}>
            {children}
          </Box>
          <TimeRangeSelector value={timeRange} onChange={handleTimeRangeChange} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default ChartCard;