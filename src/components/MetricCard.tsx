import { MetricCardProps } from '@/lib/types';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import NumberCounter from './NumberCounter';
import { InfoIcon } from 'lucide-react';

const MetricCard = ({ title, value, format, description }: MetricCardProps) => {
  return (
    <div className="glass-card rounded-xl p-6 relative">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-sm font-medium text-gray-200">{title}</h3>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <InfoIcon className="w-4 h-4 text-gray-400 hover:text-primary transition-colors" />
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-sm">{description}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <NumberCounter value={value} format={format} />
    </div>
  );
};

export default MetricCard;