import { SwapVert } from '@mui/icons-material';
import { Box } from '@mui/material';
import { UserPosition } from './types';

interface SortIconProps {
  columnKey: keyof UserPosition;
  currentSortKey: keyof UserPosition | null;
  sortDirection: 'asc' | 'desc';
}

const SortIcon = ({ columnKey, currentSortKey, sortDirection }: SortIconProps) => {
  if (currentSortKey !== columnKey) {
    return (
      <Box sx={{ opacity: 0.5 }}>
        <SwapVert sx={{ color: 'white' }} className="w-4 h-4" />
      </Box>
    );
  }
  return (
    <Box sx={{ 
      transform: sortDirection === 'desc' ? 'rotate(180deg)' : 'none',
      transition: 'transform 0.2s'
    }}>
      <SwapVert sx={{ color: '#8702ff' }} className="w-4 h-4" />
    </Box>
  );
};

export default SortIcon;