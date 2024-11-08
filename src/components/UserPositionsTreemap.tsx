import { Treemap } from '@ant-design/plots';
import { Box, Typography } from '@mui/material';

interface UserPosition {
  address: string;
  dusdSupplied: number;
  collateralSupplied: string[];
  collateralValue: number;
  dusdDebt: number;
  currentLTV: number;
  maxLTV: number;
  liquidationLTV: number;
  healthFactor: number;
}

interface TreemapData {
  name: string;
  value: number;
  healthFactor: number;
  children?: TreemapData[];
}

const UserPositionsTreemap = ({ data }: { data: UserPosition[] }) => {
  const getColorByHealthFactor = (healthFactor: number) => {
    if (healthFactor >= 1.5) return '#22c55e'; // Green for safe positions
    if (healthFactor >= 1.2) return '#fbbf24'; // Yellow for warning
    return '#ef4444'; // Red for danger
  };

  const transformData = (positions: UserPosition[]): TreemapData => {
    const children = positions.map((position) => ({
      name: position.address,
      value: position.collateralValue,
      healthFactor: position.healthFactor,
    }));
    
    return {
      name: 'User Positions',
      value: children.reduce((sum, child) => sum + child.value, 0),
      healthFactor: 0,
      children,
    };
  };

  const config = {
    data: transformData(data),
    colorField: 'healthFactor',
    color: ({ healthFactor }: { healthFactor: number }) => 
      getColorByHealthFactor(healthFactor),
    tooltip: {
      customContent: (title: string, items: any[]) => {
        if (!title) return '';
        
        const position = data.find((p) => p.address === title);
        if (!position) return '';
        
        return `
          <div style="padding: 12px; background: rgba(0, 0, 0, 0.8); border-radius: 4px; color: white;">
            <div style="margin-bottom: 8px;">
              <strong>User:</strong> ${position.address}
            </div>
            <div style="margin-bottom: 4px;">
              <strong>dUSD Supplied:</strong> $${position.dusdSupplied.toLocaleString()}
            </div>
            <div style="margin-bottom: 4px;">
              <strong>Collateral Supplied:</strong> ${position.collateralSupplied.join(', ')}
            </div>
            <div style="margin-bottom: 4px;">
              <strong>Collateral Value:</strong> $${position.collateralValue.toLocaleString()}
            </div>
            <div style="margin-bottom: 4px;">
              <strong>dUSD Debt:</strong> $${position.dusdDebt.toLocaleString()}
            </div>
            <div style="margin-bottom: 4px;">
              <strong>Current LTV:</strong> ${position.currentLTV.toFixed(1)}%
            </div>
            <div style="margin-bottom: 4px;">
              <strong>Max LTV:</strong> ${position.maxLTV}%
            </div>
            <div style="margin-bottom: 4px;">
              <strong>Liquidation LTV:</strong> ${position.liquidationLTV}%
            </div>
            <div>
              <strong>Health Factor:</strong> ${position.healthFactor} ❤️
            </div>
          </div>
        `;
      },
    },
    animation: {
      appear: {
        animation: 'fade-in',
      },
    },
    label: {
      style: {
        fill: 'white',
        fontSize: 12,
      },
      formatter: (info: any) => {
        if (!info || !info.name) return '';
        return `${info.name.slice(0, 6)}...`;
      },
    },
  };

  return (
    <Box sx={{ 
      backgroundColor: 'rgba(0, 0, 0, 0.2)', 
      borderRadius: 2,
      p: 3,
      height: '400px'
    }}>
      <Typography variant="h6" sx={{ mb: 2, color: 'white' }}>
        User Positions
      </Typography>
      <Treemap {...config} />
    </Box>
  );
};

export default UserPositionsTreemap;