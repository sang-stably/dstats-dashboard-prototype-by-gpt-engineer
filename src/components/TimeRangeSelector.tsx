import { Button } from "@mui/material";

interface TimeRangeSelectorProps {
  selectedRange: string;
  onRangeChange: (range: string) => void;
}

const TimeRangeSelector = ({ selectedRange, onRangeChange }: TimeRangeSelectorProps) => {
  const ranges = [
    { label: "7D", value: "7D" },
    { label: "1M", value: "1M" },
    { label: "3M", value: "3M" },
    { label: "1Y", value: "1Y" },
    { label: "ALL", value: "ALL" },
  ];

  return (
    <div className="flex gap-2 justify-center mb-4">
      {ranges.map((range) => (
        <Button
          key={range.value}
          onClick={() => onRangeChange(range.value)}
          variant={selectedRange === range.value ? "contained" : "outlined"}
          size="small"
          sx={{
            color: selectedRange === range.value ? 'white' : '#8702ff',
            borderColor: '#8702ff',
            backgroundColor: selectedRange === range.value ? '#8702ff' : 'transparent',
            '&:hover': {
              backgroundColor: selectedRange === range.value ? '#7002d6' : 'rgba(135, 2, 255, 0.1)',
              borderColor: '#8702ff',
            },
          }}
        >
          {range.label}
        </Button>
      ))}
    </div>
  );
};

export default TimeRangeSelector;