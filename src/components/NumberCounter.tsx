import { useEffect, useRef, useState } from 'react';
import { NumberCounterProps } from '@/lib/types';

const formatNumberWithSuffix = (num: number) => {
  if (num >= 1000000000) {
    return `${(num / 1000000000).toFixed(2)}B`;
  } else if (num >= 1000000) {
    return `${(num / 1000000).toFixed(2)}M`;
  } else if (num >= 1000) {
    return `${(num / 1000).toFixed(2)}K`;
  }
  return num.toFixed(2);
};

const NumberCounter = ({ value, format = 'number' }: NumberCounterProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  const previousValue = useRef(0);

  useEffect(() => {
    const duration = 1000;
    const steps = 60;
    const stepValue = (value - previousValue.current) / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setDisplayValue(previousValue.current + stepValue * currentStep);

      if (currentStep === steps) {
        clearInterval(timer);
        setDisplayValue(value);
        previousValue.current = value;
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  const formatValue = (val: number) => {
    switch (format) {
      case 'currency':
        return `$${formatNumberWithSuffix(val)}`;
      case 'percentage':
        return `${val.toFixed(2)}%`;
      default:
        return formatNumberWithSuffix(val);
    }
  };

  return <span className="font-bold text-3xl metric-value">{formatValue(displayValue)}</span>;
};

export default NumberCounter;