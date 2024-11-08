import { Box, Button } from '@mui/material';

export type TimeRange = '1D' | '1W' | '1M' | '3M' | '1Y' | 'ALL';

interface TimeRangeSelectorProps {
  value: TimeRange;
  onChange: (range: TimeRange) => void;
}

const TimeRangeSelector = ({ value, onChange }: TimeRangeSelectorProps) => {
  const timeRanges: TimeRange[] = ['1D', '1W', '1M', '3M', '1Y', 'ALL'];

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
      {timeRanges.map((range) => (
        <Button
          key={range}
          onClick={() => onChange(range)}
          sx={{
            minWidth: 'unset',
            px: 1.5,
            py: 0.5,
            color: value === range ? '#8702ff' : '#ffffff',
            fontSize: '0.75rem',
            fontWeight: 500,
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
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