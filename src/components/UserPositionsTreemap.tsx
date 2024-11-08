import { Treemap } from '@ant-design/plots';
import { Box } from '@mui/material';
import { UserPosition } from './table/types';

interface TreemapData {
  name: string;
  value: number;
  healthFactor: number;
  children?: TreemapData[];
}

const UserPositionsTreemap = ({ data }: { data: UserPosition[] }) => {
  const getColorByHealthFactor = (healthFactor: number) => {
    if (!healthFactor) return '#64748b'; // gray for positions with no health factor
    if (healthFactor >= 1.5) return '#22c55e'; // green for safe
    if (healthFactor >= 1.2) return '#fbbf24'; // yellow for warning
    return '#ef4444'; // red for danger
  };

  const transformData = (positions: UserPosition[]): TreemapData => {
    // Filter out positions with no collateral value
    const validPositions = positions.filter(pos => pos.collateralValue > 0);
    
    const children = validPositions.map((position) => ({
      name: `${position.address.slice(0, 6)}...${position.address.slice(-4)}`,
      value: position.collateralValue,
      healthFactor: position.healthFactor,
      extra: {
        address: position.address,
        dusdDebt: position.dusdDebt,
        collateral: position.collateralSupplied,
        ltv: position.currentLTV,
      }
    }));

    return {
      name: 'root',
      value: validPositions.reduce((sum, pos) => sum + pos.collateralValue, 0),
      healthFactor: 0,
      children: children.sort((a, b) => b.value - a.value),
    };
  };

  const config = {
    data: transformData(data),
    colorField: 'healthFactor',
    color: ({ healthFactor }: { healthFactor: number }) => getColorByHealthFactor(healthFactor),
    sizeField: 'value',
    hierarchyConfig: {
      sort: (a: any, b: any) => b.value - a.value,
    },
    tooltip: {
      customContent: (title: string, items: any[]) => {
        if (!items?.[0]?.data) return '';
        const data = items[0].data;
        
        const formatValue = (value: number) => 
          new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }).format(value);

        return `
          <div style="padding: 12px; background: rgba(0, 0, 0, 0.8); border-radius: 4px; color: white;">
            <div style="margin-bottom: 8px;">
              <strong>Address:</strong> ${data.extra.address}
            </div>
            <div style="margin-bottom: 4px;">
              <strong>Collateral Value:</strong> ${formatValue(data.value)}
            </div>
            <div style="margin-bottom: 4px;">
              <strong>dUSD Debt:</strong> ${formatValue(data.extra.dusdDebt)}
            </div>
            <div style="margin-bottom: 4px;">
              <strong>Collateral:</strong> ${data.extra.collateral.join(', ') || '-'}
            </div>
            <div style="margin-bottom: 4px;">
              <strong>LTV:</strong> ${data.extra.ltv.toFixed(2)}%
            </div>
            <div>
              <strong>Health Factor:</strong> ${data.healthFactor.toFixed(2)}
            </div>
          </div>
        `;
      },
    },
    label: {
      style: {
        fill: 'white',
        fontSize: 12,
        fontWeight: 'bold',
      },
    },
    animation: {
      appear: {
        animation: 'fade-in',
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
      <Treemap {...config} />
    </Box>
  );
};

export default UserPositionsTreemap;