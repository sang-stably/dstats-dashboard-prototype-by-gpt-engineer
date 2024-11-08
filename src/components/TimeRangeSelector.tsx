import { Box, Button } from '@mui/material';

export type TimeRange = '7D' | '1M' | '3M' | '1Y' | 'ALL';

interface TimeRangeSelectorProps {
  value: TimeRange;
  onChange: (value: TimeRange) => void;
}

const TimeRangeSelector = ({ value, onChange }: TimeRangeSelectorProps) => {
  return (
    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end', mb: 2 }}>
      {(['7D', '1M', '3M', '1Y', 'ALL'] as TimeRange[]).map((range) => (
        <Button
          key={range}
          onClick={() => onChange(range)}
          sx={{
            minWidth: 'auto',
            padding: '2px 4px',
            color: value === range ? '#8702ff' : 'rgba(255, 255, 255, 0.7)',
            '&:hover': {
              background: 'none',
              color: '#8702ff',
            },
          }}
        >
          {range}
        </Button>
      ))}
    </Box>
  );
};

export default TimeRangeSelector;