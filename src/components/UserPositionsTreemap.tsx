import { Box, Typography } from '@mui/material';
import { UserPosition } from './table/types';

interface TreemapProps {
  data: UserPosition[];
}

const UserPositionsTreemap = ({ data }: TreemapProps) => {
  const getColorByHealthFactor = (healthFactor: number) => {
    if (!healthFactor) return '#64748b'; // gray for positions with no health factor
    if (healthFactor >= 1.5) return '#22c55e'; // green for safe
    if (healthFactor >= 1.2) return '#fbbf24'; // yellow for warning
    return '#ef4444'; // red for danger
  };

  // Filter out positions with no collateral value and sort by value
  const validPositions = data
    .filter(pos => pos.collateralValue > 0)
    .sort((a, b) => b.collateralValue - a.collateralValue);

  // Calculate total value for relative sizing
  const totalValue = validPositions.reduce((sum, pos) => sum + pos.collateralValue, 0);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <Box sx={{ 
      display: 'flex',
      flexWrap: 'wrap',
      gap: 1,
      p: 2,
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      borderRadius: 2,
      minHeight: '400px'
    }}>
      {validPositions.map((position) => {
        const relativeSize = (position.collateralValue / totalValue) * 100;
        const minSize = Math.max(relativeSize * 3, 15); // Ensure minimum visibility
        
        return (
          <Box
            key={position.address}
            sx={{
              width: `${minSize}%`,
              height: 100,
              backgroundColor: getColorByHealthFactor(position.healthFactor),
              borderRadius: 1,
              p: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'scale(1.05)',
                zIndex: 1,
              },
            }}
            title={`
              Address: ${position.address}
              Value: ${formatCurrency(position.collateralValue)}
              Debt: ${formatCurrency(position.dusdDebt)}
              Health Factor: ${position.healthFactor.toFixed(2)}
              LTV: ${position.currentLTV.toFixed(2)}%
            `}
          >
            <Typography 
              variant="caption" 
              sx={{ 
                color: 'white',
                fontWeight: 'bold',
                textAlign: 'center',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                width: '100%',
                whiteSpace: 'nowrap'
              }}
            >
              {`${position.address.slice(0, 6)}...${position.address.slice(-4)}`}
            </Typography>
            <Typography 
              variant="caption" 
              sx={{ 
                color: 'white',
                textAlign: 'center'
              }}
            >
              {formatCurrency(position.collateralValue)}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default UserPositionsTreemap;