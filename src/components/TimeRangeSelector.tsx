import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material';

export type TimeRange = '7D' | '1M' | '3M' | '1Y' | 'ALL';

interface TimeRangeSelectorProps {
  value: TimeRange;
  onChange: (value: TimeRange) => void;
}

const TimeRangeSelector = ({ value, onChange }: TimeRangeSelectorProps) => {
  const handleChange = (_: React.MouseEvent<HTMLElement>, newValue: TimeRange | null) => {
    if (newValue !== null) {
      onChange(newValue);
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
      <ToggleButtonGroup
        value={value}
        exclusive
        onChange={handleChange}
        size="small"
        sx={{
          '& .MuiToggleButton-root': {
            color: 'white',
            borderColor: 'rgba(255, 255, 255, 0.1)',
            '&.Mui-selected': {
              backgroundColor: 'rgba(135, 2, 255, 0.3)',
              color: '#8702ff',
              '&:hover': {
                backgroundColor: 'rgba(135, 2, 255, 0.4)',
              },
            },
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
            },
          },
        }}
      >
        <ToggleButton value="7D">7D</ToggleButton>
        <ToggleButton value="1M">1M</ToggleButton>
        <ToggleButton value="3M">3M</ToggleButton>
        <ToggleButton value="1Y">1Y</ToggleButton>
        <ToggleButton value="ALL">ALL</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default TimeRangeSelector;